const Equipment = require('../Equipment');

const createEquipment = async (req, res) => {
  try {
    const equipment = new Equipment(req.body);
    await equipment.save();
    res.status(201).json(equipment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find({ isScrapped: false })
      .populate('maintenanceTeam defaultTechnician');
    res.json(equipment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id)
      .populate('maintenanceTeam defaultTechnician');
    if (!equipment) return res.status(404).json({ error: 'Equipment not found' });
    res.json(equipment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('maintenanceTeam defaultTechnician');
    res.json(equipment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEquipmentRequests = async (req, res) => {
  try {
    const MaintenanceRequest = require('../MaintenanceRequest');
    const requests = await MaintenanceRequest.find({ equipment: req.params.id })
      .populate('assignedTechnician createdBy');
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createEquipment, getEquipment, getEquipmentById, updateEquipment, getEquipmentRequests };
