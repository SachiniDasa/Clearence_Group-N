const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Student = require('./models/student')
app.use(express.json());

//user signup POST method
app.post('/signup', async (req, res) => {
    try {
      const {fullName,address,email,contactNumber,combination,password } = req.body;
      const student = new Student({fullName,address,email,contactNumber,combination,password});
      await student.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Registration failed' });
    }
});

//user log in POST method
app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const student = await Student.findOne({ email });
  
      if (!student) {
        return res.status(401).json({ error: 'Authentication failed' });
      }
  
      const passwordMatch = await bcrypt.compare(password, student.password);
      
      if (passwordMatch) {
        res.status(200).json({ message: 'Authentication successful' });
      } else {
        res.status(401).json({ error: 'Authentication failed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Authentication failed' });
    }
  });
  
//Protect a route by checking the user's role
function protectRouteByRole(requiredRole) {
    return (req, res, next) => {
      const student = req.student; //you have user information in the request
  
      if (student && student.role === requiredRole) {
        next();
      } else {
        res.status(403).json({ error: 'Access denied' });
      }
    };
}

//routes
const studentRoutes = require('./routes/studentRoute');
app.use('/api/users',studentRoutes)

// Only admin users can access this route
// app.get('/admin', protectRouteByRole('admin'), (req, res) => {
//     res.status(200).json({ message: 'Admin resource accessed' });
// });


//Connection to database checking
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database!');
});


const clearanceReportController = require('./clearanceReportController');

app.post('/reports', clearanceReportController.createReport);
app.get('/reports', clearanceReportController.getReports);
app.get('/reports/:reportId', clearanceReportController.getReportById);
app.put('/reports/:reportId', clearanceReportController.updateReport);
app.delete('/reports/:reportId', clearanceReportController.deleteReport);


app.listen(port, () => {
    console.log('Server is running on port 3001');
});



