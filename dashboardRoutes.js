const express = require('express');
const { getDashboardStats } = require('../dashboardController');
const { authMiddleware } = require('../auth');

const router = express.Router();

router.get('/stats', authMiddleware, getDashboardStats);

module.exports = router;