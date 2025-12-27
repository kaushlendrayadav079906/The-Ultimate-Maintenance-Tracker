const User = require('../User');
const MaintenanceTeam = require('../MaintenanceTeam');

const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').populate('team');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTechnicians = async (req, res) => {
  try {
    const technicians = await User.find({ role: 'Technician' }).select('-password').populate('team');
    res.json(technicians);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    ).select('-password').populate('team');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const assignUserToTeam = async (req, res) => {
  try {
    const { teamId } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { team: teamId },
      { new: true }
    ).select('-password').populate('team');
    
    await MaintenanceTeam.findByIdAndUpdate(
      teamId,
      { $addToSet: { members: req.params.id } }
    );
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUsers, getTechnicians, updateUser, assignUserToTeam };
