import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import routes from '../nba-breakdown/routes/team-routes.js'

const app = express()
      app.use(cors())
      app.use(express.json())

import db from './db/connection.js'
db.on('connected', async () => {
   console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})

//ENV Variables 
dotenv.config()
let PORT = process.env.PORT || 4000


app.use('/api', routes)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
