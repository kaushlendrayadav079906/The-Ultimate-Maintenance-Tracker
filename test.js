const axios = require('axios');

const BASE_URL = 'http://localhost:5000';
let authToken = '';

const testAPI = async () => {
  try {
    console.log('🚀 Testing GearGuard Backend API...\n');

    // Test 1: Register User
    console.log('1. Testing User Registration...');
    const registerResponse = await axios.post(`${BASE_URL}/auth/register`, {
      name: 'Test Manager',
      email: 'manager@test.com',
      password: 'password123',
      role: 'Manager'
    });
    authToken = registerResponse.data.token;
    console.log('✅ User registered successfully');

    // Test 2: Login
    console.log('2. Testing Login...');
    const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
      email: 'manager@test.com',
      password: 'password123'
    });
    console.log('✅ Login successful');

    const headers = { Authorization: `Bearer ${authToken}` };

    // Test 3: Create Team
    console.log('3. Testing Team Creation...');
    const teamResponse = await axios.post(`${BASE_URL}/teams`, {
      teamName: 'IT Support'
    }, { headers });
    const teamId = teamResponse.data._id;
    console.log('✅ Team created successfully');

    // Test 4: Create Equipment
    console.log('4. Testing Equipment Creation...');
    const equipmentResponse = await axios.post(`${BASE_URL}/equipment`, {
      equipmentName: 'Server Rack',
      serialNumber: 'SR001',
      department: 'IT',
      location: 'Data Center',
      maintenanceTeam: teamId
    }, { headers });
    const equipmentId = equipmentResponse.data._id;
    console.log('✅ Equipment created successfully');

    // Test 5: Create Maintenance Request
    console.log('5. Testing Maintenance Request Creation...');
    await axios.post(`${BASE_URL}/requests`, {
      subject: 'Server overheating',
      requestType: 'Corrective',
      equipment: equipmentId,
      scheduledDate: new Date()
    }, { headers });
    console.log('✅ Maintenance request created successfully');

    // Test 6: Get Dashboard Stats
    console.log('6. Testing Dashboard Stats...');
    const dashboardResponse = await axios.get(`${BASE_URL}/dashboard/stats`, { headers });
    console.log('✅ Dashboard stats retrieved:', dashboardResponse.data);

    // Test 7: Get Kanban Data
    console.log('7. Testing Kanban Data...');
    const kanbanResponse = await axios.get(`${BASE_URL}/requests/kanban`, { headers });
    console.log('✅ Kanban data retrieved');

    // Test 8: Get Equipment List
    console.log('8. Testing Equipment List...');
    const equipmentListResponse = await axios.get(`${BASE_URL}/equipment`, { headers });
    console.log('✅ Equipment list retrieved:', equipmentListResponse.data.length, 'items');

    console.log('\n🎉 All tests passed! Backend is working correctly.');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
  }
};

testAPI();