const MaintenanceTeam = require('../MaintenanceTeam');
const User = require('../User');

const createTeam = async (req, res) => {
  try {
    const team = new MaintenanceTeam(req.body);
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTeams = async (req, res) => {
  try {
    const teams = await MaintenanceTeam.find().populate('members', '-password');
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTeam = async (req, res) => {
  try {
    const team = await MaintenanceTeam.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('members', '-password');
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addMemberToTeam = async (req, res) => {
  try {
    const { userId } = req.body;
    const team = await MaintenanceTeam.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { members: userId } },
      { new: true }
    ).populate('members', '-password');
    
    await User.findByIdAndUpdate(userId, { team: req.params.id });
    
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeMemberFromTeam = async (req, res) => {
  try {
    const { userId } = req.body;
    const team = await MaintenanceTeam.findByIdAndUpdate(
      req.params.id,
      { $pull: { members: userId } },
      { new: true }
    ).populate('members', '-password');
    
    await User.findByIdAndUpdate(userId, { $unset: { team: 1 } });
    
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTeam, getTeams, updateTeam, addMemberToTeam, removeMemberFromTeam };
