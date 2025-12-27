// Backend Structure Test
console.log('🔍 Testing GearGuard Backend Structure...\n');

// Test 1: Check all required files exist
const fs = require('fs');
const requiredFiles = [
  'server.js',
  'User.js', 
  'Equipment.js',
  'MaintenanceTeam.js',
  'MaintenanceRequest.js',
  'authController.js',
  'equipmentController.js',
  'requestsController.js',
  'dashboardController.js'
];

console.log('1. Checking required files...');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
  }
});

// Test 2: Check environment variables
console.log('\n2. Checking environment configuration...');
require('dotenv').config();
console.log('✅ MongoDB URI configured:', process.env.MONGODB_URI ? 'Yes' : 'No');
console.log('✅ JWT Secret configured:', process.env.JWT_SECRET ? 'Yes' : 'No');
console.log('✅ Port configured:', process.env.PORT || 5000);

// Test 3: Test model schemas
console.log('\n3. Testing model schemas...');
try {
  const User = require('./User');
  const Equipment = require('./Equipment');
  const MaintenanceRequest = require('./MaintenanceRequest');
  console.log('✅ All models loaded successfully');
} catch (error) {
  console.log('❌ Model loading error:', error.message);
}

console.log('\n🎉 Backend structure test complete!');
console.log('\nTo run the server:');
console.log('1. Install Node.js if not installed');
console.log('2. Run: npm install');
console.log('3. Run: npm start');
console.log('4. Test endpoints at http://localhost:5000');