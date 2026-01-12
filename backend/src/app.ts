import express from 'express';
import authRoutes from './routes/auth';

const app = express();

// Middleware for JSON body parsing
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

export default app;