# Manual API Testing Guide

## Prerequisites
1. Replace `<db_password>` in `.env` with your actual MongoDB password
2. Run `npm install` to install dependencies
3. Start server with `npm start`

## Test Endpoints with Postman/Thunder Client

### 1. Register User
```
POST http://localhost:5000/auth/register
Content-Type: application/json

{
  "name": "Test Manager",
  "email": "manager@test.com", 
  "password": "password123",
  "role": "Manager"
}
```

### 2. Login
```
POST http://localhost:5000/auth/login
Content-Type: application/json

{
  "email": "manager@test.com",
  "password": "password123"
}
```
**Save the token from response for next requests**

### 3. Create Team
```
POST http://localhost:5000/teams
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "teamName": "IT Support"
}
```

### 4. Create Equipment
```
POST http://localhost:5000/equipment
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "equipmentName": "Server Rack",
  "serialNumber": "SR001",
  "department": "IT",
  "location": "Data Center"
}
```

### 5. Create Maintenance Request
```
POST http://localhost:5000/requests
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "subject": "Server overheating",
  "requestType": "Corrective",
  "equipment": "EQUIPMENT_ID_FROM_STEP_4"
}
```

### 6. Test Dashboard
```
GET http://localhost:5000/dashboard/stats
Authorization: Bearer YOUR_TOKEN
```

### 7. Test Kanban
```
GET http://localhost:5000/requests/kanban
Authorization: Bearer YOUR_TOKEN
```

## Expected Results
- All endpoints should return 200/201 status codes
- Dashboard should show counts and analytics
- Kanban should group requests by status
- Equipment list should exclude scrapped items