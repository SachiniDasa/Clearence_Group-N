const express = require('express');
const router = express.Router();
const { isAdmin, isStudent } = require('./authMiddleware');
const clearanceReportController = require('./clearanceReportController');

// Only admin users can access this route
router.get('/admin-restricted', isAdmin, (req, res) => {
  // Example admin-restricted logic
  res.status(200).json({ message: 'Welcome, Admin!' });
});

// Only students with @sci.pdn.ac.lk domain can access this route
router.get('/student-restricted', isStudent, (req, res) => {
  // Example student-restricted logic
  res.status(200).json({ message: 'Welcome, Student!' });
});

const { isAuthenticated } = require('../middleware/authMiddleware');

// Example route
app.get('/clearance-report', isAuthenticated, (req, res) => {
  // Logic to retrieve and send clearance report for the logged-in user
  res.json({ clearanceReport: 'Data for the user' });
});


// Get a list of all clearance reports
router.get('/reports', clearanceReportController.getReports);

// Get a single clearance report by ID
router.get('/reports/:reportId', clearanceReportController.getReportById);

// Update a clearance report by ID (example for admins)
router.put('/reports/:reportId', isAdmin, clearanceReportController.updateReport);

// Delete a clearance report by ID (example for admins)
router.delete('/reports/:reportId', isAdmin, clearanceReportController.deleteReport);

module.exports = router;
