import express from 'express';
import Standing from '../models/standing.js';

const app = express();
app.use(express.json());

//Get Routes 
app.get('/standing/', async (req, res) => {
    try {
      const standings = await Standing.find();
      res.status(200).json(standing);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


//Post Routes
app.post('/standing/', async (req, res) => {
    const team = req.body;
  
    try {
      const response = await Standing.create(standing);
      res.status(200).json({
        status: 200,
        message: 'Successfully added a new team standing',
        body: response,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error.message,
      });
    }
  });