import express from 'express';
import {getPosts, createPost} from '../controllers/posts.js';

const router = express.Router();

// GET
router.get('/', getPosts);

// POST
router.post('/', createPost);

export default router;
