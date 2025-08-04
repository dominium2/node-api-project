const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all posts
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM posts');
  res.json(rows);
});

// Get single post
router.get('/:id', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM posts WHERE id = ?', [req.params.id]);
  res.json(rows[0]);
});

// Create new post
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const [result] = await db.query(
    'INSERT INTO posts (title, content) VALUES (?, ?)',
    [title, content]
  );
  res.status(201).json({ id: result.insertId });
});

// Update post
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;
  await db.query(
    'UPDATE posts SET title = ?, content = ? WHERE id = ?',
    [title, content, req.params.id]
  );
  res.json({ message: 'Post updated' });
});

// Delete post
router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM posts WHERE id = ?', [req.params.id]);
  res.json({ message: 'Post deleted' });
});

module.exports = router;