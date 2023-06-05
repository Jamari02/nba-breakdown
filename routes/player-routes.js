import express from 'express';
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
    const { id } = req.params;
    const player = await Player.findById(id);
    
    if (!player) {
      // Player with the specified ID was not found
      return res.status(404).json({ error: 'Player not found' });
    }
    
    res.status(200).json(player);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/players/:firstname/:lastname', async (req, res) => {
  try {
    const { firstname, lastname } = req.params;
    const player = await Player.findOne({ firstname, lastname });

    if (!player) {
      // Player with the specified firstname and lastname was not found
      return res.status(404).json({ error: 'Player not found' });
    }

    res.status(200).json(player);
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
router.put('/players/:firstname/:lastname', async (req, res) => {
  const { firstname, lastname } = req.params;
  const { college } = req.body;

  try {
    const player = await Player.findOneAndUpdate(
      { firstname: firstname, lastname: lastname },
      { college: college },
      { new: true }
    );

    if (!player) {
      // Player with the specified firstname and lastname was not found
      return res.status(404).json({ error: 'Player not found' });
    }

    res.status(200).json({
      status: 200,
      message: 'Successfully updated the player',
      body: player,
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


router.delete('/players/:firstname/:lastname', async (req, res) => {
  const { firstname, lastname } = req.params;

  try {
    const response = await Player.findOneAndRemove({firstname, lastname});
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