const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

const requestLogger=(request,response,next)=>{
    console.log(`${request.method} : ${request.url}`);
    next();
}

app.use(requestLogger);

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

// Get all colleges
app.get('/colleges', (req, res) => {
  res.json(colleges);
});

// Get a specific college by ID
app.get('/colleges/:id', (req, res) => {
  const college = colleges.find(c => c.id === parseInt(req.params.id));
  if (!college) {
    return res.status(404).send('College not found');
  }
  res.json(college);
});

// Create a new college (for demonstration; in practice, data is static)
app.post('/colleges', (req, res) => {
  const newCollege = {
    id: colleges.length + 1,
    name: req.body.name,
    branches: req.body.branches
  };
  colleges.push(newCollege);
  res.status(201).json(newCollege);
});

// Update a college by ID
app.put('/colleges/:id', (req, res) => {
  const college = colleges.find(c => c.id === parseInt(req.params.id));
  if (!college) {
    return res.status(404).send('College not found');
  }
  college.name = req.body.name;
  college.branches = req.body.branches;
  res.json(college);
});

// Delete a college by ID
app.delete('/colleges/:id', (req, res) => {
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
