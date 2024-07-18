const express = require('express');
const passport = require('./passport-config');
const session = require('express-session');

const port = 4000;
const app = express();

app.use(express.json());

const requestLogger = (request, response, next) => {
  console.log(`${request.method} : ${request.url}`);
  next();
};

// Middleware to protect routes
const isAuthenticated = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next();
  }
  response.redirect('/login');
};

app.use(requestLogger);

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

const colleges = [
  {
    id: 1,
    name: 'College A',
    branches: ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering']
  },
  {
    id: 2,
    name: 'College B',
    branches: ['Civil Engineering', 'Chemical Engineering', 'Biotechnology']
  }
];

app.get('/', (req, res) => {
  res.send('Welcome to the College API');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/colleges', // Redirect to the GET /colleges route on success
  failureRedirect: '/login'
}));

app.get('/login', (request, response) => {
  response.send('Login Page');
});

// Apply isAuthenticated middleware to protect these routes
app.get('/colleges', (req, res) => {
  res.json(colleges);
});

app.get('/colleges/:id', (req, res) => {
  const college = colleges.find(c => c.id === parseInt(req.params.id));
  if (!college) {
    return res.status(404).send('College not found');
  }
  res.json(college);
});

app.post('/colleges', isAuthenticated, (req, res) => {
  const newCollege = {
    id: colleges.length + 1,
    name: req.body.name,
    branches: req.body.branches
  };
  colleges.push(newCollege);
  res.status(201).json(newCollege);
});

app.put('/colleges/:id', isAuthenticated, (req, res) => {
  const college = colleges.find(c => c.id === parseInt(req.params.id));
  if (!college) {
    return res.status(404).send('College not found');
  }
  college.name = req.body.name;
  college.branches = req.body.branches;
  res.json(college);
});

app.delete('/colleges/:id', isAuthenticated, (req, res) => {
  const collegeIndex = colleges.findIndex(c => c.id === parseInt(req.params.id));
  if (collegeIndex === -1) {
    return res.status(404).send('College not found');
  }
  const deletedCollege = colleges.splice(collegeIndex, 1);
  res.json(deletedCollege);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
