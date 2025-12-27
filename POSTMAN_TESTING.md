# Postman Testing Guide for GearGuard Backend

## Setup Steps:

### 1. Start Backend Server
- Open terminal in project folder
- Run: `npm install` (if not done)
- Run: `npm start`
- Server should start on `http://localhost:5000`

### 2. Import Postman Collection
- Open Postman
- Click "Import" → Select `GearGuard_Postman_Collection.json`
- Collection will be imported with all test requests

## Testing Sequence:

### Step 1: Register User
```
POST http://localhost:5000/auth/register
Body (JSON):
{
  "name": "Test Manager",
  "email": "manager@test.com",
  "password": "password123",
  "role": "Manager"
}
```
**Expected**: 201 status, user object + token

### Step 2: Login User
```
POST http://localhost:5000/auth/login
Body (JSON):
{
  "email": "manager@test.com",
  "password": "password123"
}
```
**Expected**: 200 status, token
**Action**: Copy token for next requests

### Step 3: Create Team
```
POST http://localhost:5000/teams
Headers: Authorization: Bearer YOUR_TOKEN
Body (JSON):
{
  "teamName": "IT Support"
}
```
**Expected**: 201 status, team object with _id
**Action**: Copy team _id

### Step 4: Create Equipment
```
POST http://localhost:5000/equipment
Headers: Authorization: Bearer YOUR_TOKEN
Body (JSON):
{
  "equipmentName": "Server Rack",
  "serialNumber": "SR001",
  "department": "IT",
  "location": "Data Center"
}
```
**Expected**: 201 status, equipment object with _id
**Action**: Copy equipment _id

### Step 5: Create Maintenance Request
```
POST http://localhost:5000/requests
Headers: Authorization: Bearer YOUR_TOKEN
Body (JSON):
{
  "subject": "Server overheating",
  "requestType": "Corrective",
  "equipment": "EQUIPMENT_ID_FROM_STEP_4"
}
```
**Expected**: 201 status, request object with auto-filled team

### Step 6: Test Dashboard
```
GET http://localhost:5000/dashboard/stats
Headers: Authorization: Bearer YOUR_TOKEN
```
**Expected**: 200 status, analytics data

### Step 7: Test Kanban
```
GET http://localhost:5000/requests/kanban
Headers: Authorization: Bearer YOUR_TOKEN
```
**Expected**: 200 status, requests grouped by status

## Success Indicators:
- ✅ All requests return 200/201 status codes
- ✅ MongoDB data is created and retrieved
- ✅ JWT authentication works
- ✅ Auto-fill logic populates team/technician
- ✅ Dashboard shows correct counts
- ✅ Kanban groups requests properly

## Common Issues:
- **401 Unauthorized**: Check token in Authorization header
- **500 Server Error**: Check MongoDB connection
- **404 Not Found**: Verify server is running on port 5000