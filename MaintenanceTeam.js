const mongoose = require('mongoose');

const maintenanceTeamSchema = new mongoose.Schema({
  teamName: { type: String, required: true, unique: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MaintenanceTeam', maintenanceTeamSchema);
