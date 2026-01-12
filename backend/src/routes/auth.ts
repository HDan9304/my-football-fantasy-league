import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Mock users
const users = [
  { email: 'test@example.com', password: 'password' },
];

// Secret for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';

// Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Generate JWT
  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

export default router;