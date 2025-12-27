# GearGuard - Maintenance Management System Backend

## Frontend-Ready API Endpoints

### Dashboard
- `GET /dashboard/stats` - KPIs, request counts, overdue tasks, analytics

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login and get JWT token

### Equipment Management
- `POST /equipment` - Create equipment
- `GET /equipment` - Get all active equipment (excludes scrapped)
- `GET /equipment/:id` - Get equipment details + warranty info
- `PUT /equipment/:id` - Update equipment
- `GET /equipment/:id/maintenance-requests` - Get equipment maintenance history

### Maintenance Requests
- `POST /requests` - Create request (auto-fills team and technician)
- `GET /requests` - Get all requests (supports ?status=, ?team=, ?overdue= filters)
- `GET /requests/:id` - Get request details
- `PUT /requests/:id` - Update request (for form edits)
- `PUT /requests/:id/status` - Update status (for kanban drag & drop)
- `GET /requests/kanban` - Get requests grouped by status for kanban board
- `GET /requests/calendar` - Get preventive maintenance calendar data
- `GET /requests/report/team/:teamId` - Get team-specific reports

### Teams & Technicians
- `POST /teams` - Create team
- `GET /teams` - Get all teams with members
- `PUT /teams/:id` - Update team
- `PUT /teams/:id/add-member` - Add member to team
- `PUT /teams/:id/remove-member` - Remove member from team
- `GET /users` - Get all users
- `GET /users/technicians` - Get all technicians
- `PUT /users/:id` - Update user
- `PUT /users/:id/assign-team` - Assign user to team

## Setup

```bash
npm install
npm start
```

## Key Features for Frontend

- **Dashboard KPIs**: Total requests, overdue count, equipment count, analytics
- **Kanban Support**: Drag & drop status updates with `/requests/kanban` endpoint
- **Calendar View**: Preventive maintenance scheduling
- **Filtering**: Request filtering by status, team, overdue status
- **Team Management**: Full CRUD for teams and member assignments
- **Auto-fill Logic**: Equipment selection auto-populates team and technician
- **Scrap Prevention**: Cannot create requests for scrapped equipment
- **Role-based Access**: Different permissions for Admin/Manager/Technician/User
