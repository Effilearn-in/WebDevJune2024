const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt=require('bcrypt');

const port = 4000;

const app = express();
app.use(express.json());

const requestLogger = (request, response, next) => {
  console.log(`${request.method} : ${request.url}`);
  next();
};

app.use(requestLogger);

passport.use(new LocalStrategy((username, password, done) => {

  const user = users.find(u => u.username === username);

  if (!user) {
      return done(null, false, { message: 'Incorrect Username' });
  }

  const isMatch=bcrypt.compare(password,user.password);
  if (!isMatch) {
      return done(null, false, { message: 'Incorrect Password' });
  }

  return done(null, user);
}));

app.use(passport.initialize());

const isAuthenticated=passport.authenticate('local',{session:false});

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

const users = [];

app.get('/', (req, res) => {
  res.send('Welcome to the College API');
});

app.get('/colleges',isAuthenticated, (req, res) => {
  res.json(colleges);
});

app.get('/colleges/:id',isAuthenticated,  (req, res) => {
  const college = colleges.find(c => c.id === parseInt(req.params.id));
  if (!college) {
    return res.status(404).send('College not found');
  }
  res.json(college);
});

app.post('/colleges',isAuthenticated,  (req, res) => {
  const newCollege = {
    id: colleges.length + 1,
    name: req.body.name,
    branches: req.body.branches
  };
  colleges.push(newCollege);
  res.status(201).json(newCollege);
});

app.put('/colleges/:id',isAuthenticated,  (req, res) => {
  const college = colleges.find(c => c.id === parseInt(req.params.id));
  if (!college) {
    return res.status(404).send('College not found');
  }
  college.name = req.body.name;
  college.branches = req.body.branches;
  res.json(college);
});

app.delete('/colleges/:id',isAuthenticated,  (req, res) => {
  const collegeIndex = colleges.findIndex(c => c.id === parseInt(req.params.id));
  if (collegeIndex === -1) {
    return res.status(404).send('College not found');
  }
  const deletedCollege = colleges.splice(collegeIndex, 1);
  res.json(deletedCollege);
});

app.get('/users',isAuthenticated, (req, res) => {
  res.json(users);
});

app.get('/users/:id',isAuthenticated,  (req, res) => {
  const user = users.find(c => c.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});

app.post('/users',async (req, res) => {
  const hashedPassword=await bcrypt.hash(req.body.password,10);
  const newUser = {
    id: users.length + 1,
    username: req.body.username,
    password: hashedPassword
  };
  users.push(newUser);
  console.log("Users :- ",users);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
