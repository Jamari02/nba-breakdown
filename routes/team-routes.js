import express from 'express';
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
    const { id } = req.params;
    const team = await Team.findById(id);
    
    if (!team) {
      // Team with the specified ID was not found
      return res.status(404).json({ error: 'Team not found' });
    }
    
    res.status(200).json(team);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a Team by Name
router.get('/team/name/:name', async (req, res) => {
  const { name } = req.params;

  try {
    const team = await Team.findOne({ name });
    if (!team) {
      // Team with the specified name was not found
      return res.status(404).json({ error: 'Team not found' });
    }

    res.status(200).json(team);
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
router.put('/team/name/:name', async (req, res) => {
  const { teamName } = req.params;
  const { name, code, city } = req.body;
try {
    const team = await Team.findOne(teamName)  
   if (!team) {
    res.status(404)
    throw new Error('Team not found')
   } 
   team.name = name
   team.code = code
   team.city =city
   await team.save()
   res.json(team)
  } catch (error) {
    res.status(500).json({
      status: 500,
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

// Delete Route
router.delete('/team/name/:name', async (req, res) => {
  const { name } = req.params;

  try {
    const response = await Team.findOneAndRemove({ name });
    if (!response) {
      // Team with the specified name was not found
      return res.status(404).json({ error: 'Team not found' });
    }
    
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