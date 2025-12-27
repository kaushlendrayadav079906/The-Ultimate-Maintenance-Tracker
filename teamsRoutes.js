const express = require('express');
const { createTeam, getTeams, updateTeam, addMemberToTeam, removeMemberFromTeam } = require('../teamsController');
const { authMiddleware, roleMiddleware } = require('../auth');

const router = express.Router();

router.post('/', authMiddleware, roleMiddleware('Admin', 'Manager'), createTeam);
router.get('/', authMiddleware, getTeams);
router.put('/:id', authMiddleware, roleMiddleware('Admin', 'Manager'), updateTeam);
router.put('/:id/add-member', authMiddleware, roleMiddleware('Admin', 'Manager'), addMemberToTeam);
router.put('/:id/remove-member', authMiddleware, roleMiddleware('Admin', 'Manager'), removeMemberFromTeam);

module.exports = router;
