const MaintenanceRequest = require('../MaintenanceRequest');
const Equipment = require('../Equipment');
const User = require('../User');
const MaintenanceTeam = require('../MaintenanceTeam');

const getDashboardStats = async (req, res) => {
  try {
    const [totalRequests, overdueRequests, inProgressRequests, totalEquipment, totalTechnicians] = await Promise.all([
      MaintenanceRequest.countDocuments(),
      MaintenanceRequest.countDocuments({ isOverdue: true }),
      MaintenanceRequest.countDocuments({ status: 'In Progress' }),
      Equipment.countDocuments({ isScrapped: false }),
      User.countDocuments({ role: 'Technician' })
    ]);

    const requestsByStatus = await MaintenanceRequest.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } },
      { $project: { status: '$_id', count: 1, _id: 0 } }
    ]);

    const requestsByTeam = await MaintenanceRequest.aggregate([
      { $lookup: { from: 'maintenanceteams', localField: 'maintenanceTeam', foreignField: '_id', as: 'team' } },
      { $unwind: { path: '$team', preserveNullAndEmptyArrays: true } },
      { $group: { _id: '$team.teamName', count: { $sum: 1 } } },
      { $project: { teamName: '$_id', count: 1, _id: 0 } }
    ]);

    res.json({
      totalRequests,
      overdueRequests,
      inProgressRequests,
      totalEquipment,
      totalTechnicians,
      requestsByStatus,
      requestsByTeam
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getDashboardStats };