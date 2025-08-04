const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all users
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM users');
  res.json(rows);
});

// Get single user
router.get('/:id', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
  res.json(rows[0]);
});

// Create new user
router.post('/', async (req, res) => {
  const { name, age } = req.body;
  if (!name || !age || isNaN(age) || /\d/.test(name)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const [result] = await db.query(
    'INSERT INTO users (name, age) VALUES (?, ?)',
    [name, age]
  );
  res.status(201).json({ id: result.insertId });
});

// Update user
router.put('/:id', async (req, res) => {
  const { name, age } = req.body;
  await db.query(
    'UPDATE users SET name = ?, age = ? WHERE id = ?',
    [name, age, req.params.id]
  );
  res.json({ message: 'User updated' });
});

// Delete user
router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM users WHERE id = ?', [req.params.id]);
  res.json({ message: 'User deleted' });
});

module.exports = router;