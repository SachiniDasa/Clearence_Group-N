const express = require('express');
const router = express.Router();
const { isAdmin } = require('./authMiddleware');
const clearanceReportController = require('./clearanceReportController');

// Endpoint for the registrar to sign a clearance report
router.put('/sign/registrar/:reportId', isAdmin, clearanceReportController.registrarSign);

// Endpoint for the dean/vice-chancellor to sign a clearance report
router.put('/sign/dean-vc/:reportId', isAdmin, clearanceReportController.deanVCSign);

module.exports = router;
