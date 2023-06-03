import express, { Router } from 'express';
// use import controller to get routes then minimize the routes by calling the functions for controllers 
import Player from '../models/players.js'

const router = express.Router()




// Get Routes
router.get('/', (req, res) => {
  res.send('Hello World');
});

//Find Players
router.get('/players/', async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Find One Player
router.get('/players/:id', async (req, res) => {
    try {
      const players = await Player.findOne({});
      res.status(200).json(players);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// Post Route
router.post('/players/', async (req, res) => {
  const player = req.body;

  try {
    const response = await Player.create(player);
    res.status(200).json({
      status: 200,
      message: 'Successfully added a new player',
      body: response,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
});

// Put Route
router.put('/players/:id', async (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;

  try {
    const response = await Player.findByIdAndUpdate(id, { new: true });
    res.status(200).json({
      status: 200,
      message: 'Successfully updated the player name',
      body: response,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
});

// Delete Route
router.delete('/players/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Player.findByIdAndRemove(id);
    res.status(200).json({
      status: 200,
      message: `Successfully removed the player`,
      body: response,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
});

export default router