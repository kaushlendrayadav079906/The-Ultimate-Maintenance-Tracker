const express = require('express');
const { 
  createRequest, 
  getRequests, 
  getRequestById,
  updateRequest,
  updateRequestStatus, 
  getCalendarRequests, 
  getTeamReport,
  getKanbanData
} = require('../requestsController');
const { authMiddleware, roleMiddleware } = require('../auth');

const router = express.Router();

router.post('/', authMiddleware, createRequest);
router.get('/', authMiddleware, getRequests);
router.get('/calendar', authMiddleware, getCalendarRequests);
router.get('/kanban', authMiddleware, getKanbanData);
router.get('/report/team/:teamId', authMiddleware, getTeamReport);
router.get('/:id', authMiddleware, getRequestById);
router.put('/:id', authMiddleware, updateRequest);
router.put('/:id/status', authMiddleware, roleMiddleware('Manager', 'Technician'), updateRequestStatus);

module.exports = router;
