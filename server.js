require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const startOverdueChecker = require('./overdueChecker');

const app = express();

// Connect to database
connectDB();

// Start cron job after successful DB connection
setTimeout(() => {
  startOverdueChecker();
}, 2000);

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Routes
app.use('/auth', require('./authRoutes'));
app.use('/dashboard', require('./dashboardRoutes'));
app.use('/users', require('./usersRoutes'));
app.use('/equipment', require('./equipmentRoutes'));
app.use('/teams', require('./teamsRoutes'));
app.use('/requests', require('./requestsRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 GearGuard server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});
