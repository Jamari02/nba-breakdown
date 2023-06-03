import express, { Router } from 'express';
import Team from '../models/teams.js'

const router = express.Router()




// Get Routes
router.get('/', (req, res) => {
  res.send('Hello World');
});

//Find Teams
router.get('/team/', async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Find OneTeam
router.get('/team/:id', async (req, res) => {
    try {
      const teams = await Team.find();
      res.status(200).json(teams);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// Post Route
router.post('/team', async (req, res) => {
  const team = req.body;

  try {
    const response = await Team.create(team);
    res.status(200).json({
      status: 200,
      message: 'Successfully added a new team',
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
router.put('/team/:id', async (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;

  try {
    const response = await Team.findByIdAndUpdate(id, { teamname: newName }, { new: true });
    res.status(200).json({
      status: 200,
      message: 'Successfully updated the team name',
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
router.delete('/team/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Team.findByIdAndRemove(id);
    res.status(200).json({
      status: 200,
      message: `Successfully removed the team`,
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