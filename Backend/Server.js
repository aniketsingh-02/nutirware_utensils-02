const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Register endpoint
app.post('/api/users/register', (req, res) => {
  const { username, password } = req.body;

  // Implement your registration logic here (e.g., save user to MongoDB)
  // ...

  res.status(200).json({ msg: 'User registered successfully' });
});

const PORT = 2707;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});