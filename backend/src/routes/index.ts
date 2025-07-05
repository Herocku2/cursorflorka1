import express from 'express';
import authRoutes from './auth';
import projectRoutes from './projects';
import adminRoutes from './admin';

const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'CursorFlorka1 API' });
});

// Routes
router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);
router.use('/admin', adminRoutes);

export default router;