const LabItem = require('../models/labitem');

// Create a new lab item
exports.createLabItem = async (req, res) => {
  try {
    const labitem = new LabItem(req.body);
    await labitem.save();
    res.status(201).json(labitem);
  } catch (err) {
    res.status(500).json({ error: 'Could not create the lab item' });
  }
};

// Update a lab item by ID
exports.updateLabItem = async (req, res) => {
    try {
      const labitem = await LabItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!labitem) {
        return res.status(404).json({ error: 'Lab item not found' });
      }
      res.status(200).json(labitem);
    } catch (err) {
      res.status(500).json({ error: 'Could not update the lab item' });
    }
  };

// Delete a lab item by ID
exports.deleteLabItem = async (req, res) => {
    try {
      const labitem = await LabItem.findByIdAndRemove(req.params.id);
      if (!labitem) {
        return res.status(404).json({ error: 'Lab item not found' });
      }
      res.status(204).end(); // No content after successful deletion
    } catch (err) {
      res.status(500).json({ error: 'Could not delete the lab item' });
    }
  };

  // Get all lab items
exports.getAllLabItems = async (req, res) => {
    try {
      const labitems = await LabItem.find();
      res.status(200).json(labitems);
    } catch (err) {
      res.status(500).json({ error: 'Could not fetch lab items' });
    }
  };

  // Get a specific lab item by apparatus 
exports.getLabItemByApparatus = async (req, res) => {
    try {
      const apparatus = req.params.apparatus;
      const labitem = await LabItem.findOne({ apparatus }); // Assuming the field in the schema is called 'apparatus'
      
      if (!labitem) {
        return res.status(404).json({ error: 'Lab item not found' });
      }
      
      res.status(200).json(labitem);
    } catch (err) {
      res.status(500).json({ error: 'Could not fetch the lab item' });
    }
  };
  
