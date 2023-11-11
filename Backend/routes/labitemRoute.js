const express = require('express');
const router = express.Router();
const labitemController = require('../controllers/labitemController');

// Create a new lab item
router.post('/labitems', labitemController.createLabItem);

// Get all lab items
router.get('/labitems', labitemController.getAllLabItems);

// Get a specific lab item by apparatus name
router.get('/labitems/:apparatus', labitemController.getLabItemById);

// Update a lab item by appartus name
router.put('/labitems/:apparatus', labitemController.updateLabItem);

// Delete a lab item by appartus name
router.delete('/labitems/:apparatus', labitemController.deleteLabItem);

module.exports = router;
