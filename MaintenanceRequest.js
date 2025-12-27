const mongoose = require('mongoose');

const maintenanceRequestSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  requestType: { 
    type: String, 
    enum: ['Corrective', 'Preventive'],
    required: true
  },
  equipment: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipment', required: true },
  maintenanceTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'MaintenanceTeam' },
  assignedTechnician: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { 
    type: String, 
    enum: ['New', 'In Progress', 'Repaired', 'Scrap'],
    default: 'New'
  },
  scheduledDate: { type: Date },
  duration: { type: Number, default: 0 },
  isOverdue: { type: Boolean, default: false },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

maintenanceRequestSchema.pre('save', async function(next) {
  try {
    if (this.isNew && this.equipment) {
      const Equipment = mongoose.model('Equipment');
      const equipment = await Equipment.findById(this.equipment).populate('maintenanceTeam defaultTechnician');
      
      if (equipment) {
        if (equipment.maintenanceTeam) this.maintenanceTeam = equipment.maintenanceTeam;
        if (equipment.defaultTechnician) this.assignedTechnician = equipment.defaultTechnician;
      }
    }

    if (this.scheduledDate && this.status !== 'Repaired') {
      this.isOverdue = new Date(this.scheduledDate) < new Date();
    }

    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('MaintenanceRequest', maintenanceRequestSchema);
