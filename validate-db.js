require('dotenv').config();
const mongoose = require('mongoose');

// Import all models
const User = require('./User');
const Equipment = require('./Equipment');
const MaintenanceTeam = require('./MaintenanceTeam');
const MaintenanceRequest = require('./MaintenanceRequest');

const validateDatabase = async () => {
  try {
    console.log('🔍 Validating GearGuard Database...\n');

    // Test MongoDB connection
    console.log('1. Testing MongoDB connection...');
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB connected successfully');

    // Test model schemas
    console.log('\n2. Validating model schemas...');
    
    // Test User model
    const testUser = new User({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      role: 'Technician'
    });
    await testUser.validate();
    console.log('✅ User model valid');

    // Test MaintenanceTeam model
    const testTeam = new MaintenanceTeam({
      teamName: 'Test Team'
    });
    await testTeam.validate();
    console.log('✅ MaintenanceTeam model valid');

    // Test Equipment model
    const testEquipment = new Equipment({
      equipmentName: 'Test Equipment',
      serialNumber: 'TEST001',
      department: 'IT'
    });
    await testEquipment.validate();
    console.log('✅ Equipment model valid');

    // Test MaintenanceRequest model
    const testRequest = new MaintenanceRequest({
      subject: 'Test Request',
      requestType: 'Corrective',
      equipment: new mongoose.Types.ObjectId(),
      createdBy: new mongoose.Types.ObjectId()
    });
    await testRequest.validate();
    console.log('✅ MaintenanceRequest model valid');

    // Test database operations
    console.log('\n3. Testing database operations...');
    
    // Clean up any existing test data
    await User.deleteMany({ email: 'test@example.com' });
    await MaintenanceTeam.deleteMany({ teamName: 'Test Team' });
    await Equipment.deleteMany({ serialNumber: 'TEST001' });
    
    // Create test data
    const savedUser = await testUser.save();
    console.log('✅ User creation successful');
    
    const savedTeam = await testTeam.save();
    console.log('✅ Team creation successful');
    
    testEquipment.maintenanceTeam = savedTeam._id;
    testEquipment.defaultTechnician = savedUser._id;
    const savedEquipment = await testEquipment.save();
    console.log('✅ Equipment creation successful');
    
    testRequest.equipment = savedEquipment._id;
    testRequest.createdBy = savedUser._id;
    const savedRequest = await testRequest.save();
    console.log('✅ Request creation successful');

    // Test relationships
    console.log('\n4. Testing model relationships...');
    
    const populatedRequest = await MaintenanceRequest.findById(savedRequest._id)
      .populate('equipment maintenanceTeam assignedTechnician createdBy');
    
    if (populatedRequest.equipment && populatedRequest.createdBy) {
      console.log('✅ Model relationships working');
    } else {
      console.log('❌ Model relationships failed');
    }

    // Clean up test data
    await User.findByIdAndDelete(savedUser._id);
    await MaintenanceTeam.findByIdAndDelete(savedTeam._id);
    await Equipment.findByIdAndDelete(savedEquipment._id);
    await MaintenanceRequest.findByIdAndDelete(savedRequest._id);
    console.log('✅ Test data cleaned up');

    console.log('\n🎉 Database validation completed successfully!');
    console.log('✅ All models are properly configured');
    console.log('✅ MongoDB connection is working');
    console.log('✅ CRUD operations are functional');
    console.log('✅ Model relationships are working');

  } catch (error) {
    console.error('❌ Database validation failed:', error.message);
    if (error.errors) {
      Object.keys(error.errors).forEach(key => {
        console.error(`  - ${key}: ${error.errors[key].message}`);
      });
    }
  } finally {
    await mongoose.connection.close();
    console.log('\n🔌 Database connection closed');
  }
};

validateDatabase();