import express from 'express';
import { register, login, adminLogin, getProfile, logout } from '../controllers/authController';
import { authenticateToken } from '../middleware/auth';
import { rateLimiter } from '../middleware/rateLimiter';

const router = express.Router();

// Public routes with rate limiting
router.post('/register', rateLimiter, register);
router.post('/login', rateLimiter, login);
router.post('/admin/login', rateLimiter, adminLogin);

// Protected routes
router.get('/profile', authenticateToken, getProfile);
router.post('/logout', authenticateToken, logout);

export default router;