import express from 'express';
import Standing from '../models/standing.js';

const router = express.Router()

//Get Routes 
router.get('/standing/', async (req, res) => {
    try {
      const standing = await Standing.find();
      res.status(200).json(standing);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


//Post Routes
router.post('/standing/', async (req, res) => {
    const standing = req.body;
  
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


  //Delete Routes
  router.delete('/standing/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const response = await Standing.findByIdAndRemove(id);
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