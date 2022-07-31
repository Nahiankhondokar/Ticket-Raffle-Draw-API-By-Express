const express = require('express');
const { UpdateById, DeleteById, UpdateByUsername, DeleteByUsername, GetAllTicket, BulkTicket, RaffleDraw, CreateTicket } = require('../controller/ticketController');
const router = express.Router();


// all routes
router.route('/i/:ticketId').put(UpdateById).delete(DeleteById).patch(UpdateById);

router.route('/u/:username').put(UpdateByUsername).delete(DeleteByUsername).patch(UpdateByUsername);

router.route('/').get(GetAllTicket);
router.route('/bulk').get(BulkTicket);
router.route('/draw').get(RaffleDraw);
router.route('/sell').get(CreateTicket);

module.exports = router;