const ClearanceReport = require('./clearanceReport');
// Example code to save the signature image
const fs = require('fs');
const path = require('path');


const saveSignatureImage = (signatureImage, signatureId) => {
  const privateFolderPath = path.join(__dirname, 'private/images');
  const imagePath = path.join(privateFolderPath, `${signatureId}.png`);

  fs.writeFileSync(imagePath, signatureImage, 'base64');
};


// Create a new clearance report
exports.createReport = (req, res) => {
  const report = new ClearanceReport(req.body);
  report.save((err, savedReport) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json(savedReport);
    }
  });
};

// Get a list of all clearance reports
exports.getReports = (req, res) => {
  ClearanceReport.find({}, (err, reports) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(reports);
    }
  });
};

// Get a single clearance report by ID
exports.getReportById = (req, res) => {
  ClearanceReport.findById(req.params.reportId, (err, report) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!report) {
      res.status(404).json({ message: 'Report not found' });
    } else {
      res.status(200).json(report);
    }
  });
};

// Update a clearance report by ID
exports.updateReport = (req, res) => {
  ClearanceReport.findByIdAndUpdate(
    req.params.reportId,
    req.body,
    { new: true },
    (err, updatedReport) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!updatedReport) {
        res.status(404).json({ message: 'Report not found' });
      } else {
        res.status(200).json(updatedReport);
      }
    }
  );
};

// Delete a clearance report by ID
exports.deleteReport = (req, res) => {
  ClearanceReport.findByIdAndRemove(req.params.reportId, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(204).send();
    }
  });
};

//-------------------------------------------------------------------------
// Registrar signs a clearance report
exports.registrarSign = (req, res) => {
  const reportId = req.params.reportId;

  ClearanceReport.findByIdAndUpdate(
    reportId,
    { status: 'signed by registrar', registrarSignature: 'Registrar Signature Here' },
    { new: true },
    (err, updatedReport) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!updatedReport) {
        res.status(404).json({ message: 'Report not found' });
      } else {
        res.status(200).json(updatedReport);
      }
    }
  );
};

// Dean  signs a clearance report
exports.deanSign = (req, res) => {
  const reportId = req.params.reportId;

  ClearanceReport.findByIdAndUpdate(
    reportId,
    { status: 'signed by dean', deanSignature: 'Dean Signature Here' },
    { new: true },
    (err, updatedReport) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!updatedReport) {
        res.status(404).json({ message: 'Report not found' });
      } else {
        res.status(200).json(updatedReport);
      }
    }
  );
};

// Vice-Chancellor signs a clearance report
exports.VCSign = (req, res) => {
    const reportId = req.params.reportId;
  
    ClearanceReport.findByIdAndUpdate(
      reportId,
      { status: 'signed by vice-chancellor', VCSignature: 'VC Signature Here' },
      { new: true },
      (err, updatedReport) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else if (!updatedReport) {
          res.status(404).json({ message: 'Report not found' });
        } else {
          res.status(200).json(updatedReport);
        }
      }
    );
  };

  
  