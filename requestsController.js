const MaintenanceRequest = require('../MaintenanceRequest');
const Equipment = require('../Equipment');

const createRequest = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.body.equipment);
    if (equipment && equipment.isScrapped) {
      return res.status(400).json({ error: 'Cannot create request for scrapped equipment' });
    }
    
    const request = new MaintenanceRequest({ ...req.body, createdBy: req.user.id });
    await request.save();
    await request.populate('equipment maintenanceTeam assignedTechnician createdBy');
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRequests = async (req, res) => {
  try {
    const { status, team, overdue } = req.query;
    let filter = {};
    
    if (status) filter.status = status;
    if (team) filter.maintenanceTeam = team;
    if (overdue === 'true') filter.isOverdue = true;
    
    const requests = await MaintenanceRequest.find(filter)
      .populate('equipment maintenanceTeam assignedTechnician createdBy')
      .sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRequestById = async (req, res) => {
  try {
    const request = await MaintenanceRequest.findById(req.params.id)
      .populate('equipment maintenanceTeam assignedTechnician createdBy');
    if (!request) return res.status(404).json({ error: 'Request not found' });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRequest = async (req, res) => {
  try {
    const request = await MaintenanceRequest.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    ).populate('equipment maintenanceTeam assignedTechnician createdBy');
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRequestStatus = async (req, res) => {
  try {
    const { status, duration, assignedTechnician } = req.body;
    const request = await MaintenanceRequest.findById(req.params.id);
    
    if (!request) return res.status(404).json({ error: 'Request not found' });

    request.status = status;
    if (duration) request.duration = duration;
    if (assignedTechnician) request.assignedTechnician = assignedTechnician;

    if (status === 'Scrap') {
      await Equipment.findByIdAndUpdate(request.equipment, { isScrapped: true });
    }

    await request.save();
    await request.populate('equipment maintenanceTeam assignedTechnician createdBy');
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCalendarRequests = async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find({ 
      requestType: 'Preventive',
      scheduledDate: { $exists: true }
    }).populate('equipment assignedTechnician');
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTeamReport = async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find({ maintenanceTeam: req.params.teamId })
      .populate('equipment assignedTechnician');
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getKanbanData = async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find()
      .populate('equipment assignedTechnician')
      .sort({ createdAt: -1 });
    
    const kanban = {
      'New': requests.filter(r => r.status === 'New'),
      'In Progress': requests.filter(r => r.status === 'In Progress'),
      'Repaired': requests.filter(r => r.status === 'Repaired'),
      'Scrap': requests.filter(r => r.status === 'Scrap')
    };
    
    res.json(kanban);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { 
  createRequest, 
  getRequests, 
  getRequestById,
  updateRequest,
  updateRequestStatus, 
  getCalendarRequests, 
  getTeamReport,
  getKanbanData
};
