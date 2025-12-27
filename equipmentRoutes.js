const express = require('express');
const { 
  createEquipment, 
  getEquipment, 
  getEquipmentById, 
  updateEquipment, 
  getEquipmentRequests 
} = require('../equipmentController');
const { authMiddleware, roleMiddleware } = require('../auth');

const router = express.Router();

router.post('/', authMiddleware, roleMiddleware('Admin', 'Manager'), createEquipment);
router.get('/', authMiddleware, getEquipment);
router.get('/:id', authMiddleware, getEquipmentById);
router.put('/:id', authMiddleware, roleMiddleware('Admin', 'Manager'), updateEquipment);
router.get('/:id/maintenance-requests', authMiddleware, getEquipmentRequests);

module.exports = router;
