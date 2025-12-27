const express = require('express');
const { getUsers, getTechnicians, updateUser, assignUserToTeam } = require('../usersController');
const { authMiddleware, roleMiddleware } = require('../auth');

const router = express.Router();

router.get('/', authMiddleware, getUsers);
router.get('/technicians', authMiddleware, getTechnicians);
router.put('/:id', authMiddleware, roleMiddleware('Admin', 'Manager'), updateUser);
router.put('/:id/assign-team', authMiddleware, roleMiddleware('Admin', 'Manager'), assignUserToTeam);

module.exports = router;
