const express = require('express')
const pool = require('../config/db')

const router = express.Router()

// Create a new item
router.post('/', async (req, res) => {
  try {
    const { user_id, title, category, location, date, type, description } = req.body

    if (!user_id || !title || !type) {
      return res.status(400).json({ error: 'user_id, title, and type are required' })
    }

    const newItem = await pool.query(
      `INSERT INTO items (user_id, title, category, location, date, type, description)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [user_id, title, category, location, date, type, description]
    )

    res.status(201).json(newItem.rows[0])
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: 'Server error' })
  }
})

// Get all items
router.get('/', async (req, res) => {
  try {
    const allItems = await pool.query('SELECT * FROM items ORDER BY created_at DESC')
    res.json(allItems.rows)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: 'Server error' })
  }
})

// Get one item by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const item = await pool.query('SELECT * FROM items WHERE id = $1', [id])

    if (item.rows.length === 0) {
      return res.status(404).json({ error: 'Item not found' })
    }

    res.json(item.rows[0])
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router