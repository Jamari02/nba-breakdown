import express from 'express';
import Team from '../models/teams';
import teams from '../data/teams.json' assert {type: 'json'};



const app = express();
app.use(express.json());

// Get Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

//Find Teams
app.get('/team/', async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Find Team
app.get('/team/:id', async (req, res) => {
    try {
      const teams = await Team.findOne();
      res.status(200).json(teams);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// Post Route
app.post('/team', async (req, res) => {
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
app.put('/team/:id', async (req, res) => {
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
app.delete('/team/:id', async (req, res) => {
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

