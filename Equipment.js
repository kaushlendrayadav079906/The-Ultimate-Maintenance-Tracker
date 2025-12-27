const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  equipmentName: { type: String, required: true },
  serialNumber: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  assignedEmployee: { type: String },
  purchaseDate: { type: Date },
  warrantyExpiry: { type: Date },
  location: { type: String },
  maintenanceTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'MaintenanceTeam' },
  defaultTechnician: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isScrapped: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Equipment', equipmentSchema);
