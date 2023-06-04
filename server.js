import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import teamRoutes from '../routes/team-routes.js'
import playerRoutes from '../routes/player-routes.js'
import standingRoutes from '../routes/standing-routes.js'


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


app.use('/api', teamRoutes, playerRoutes, standingRoutes)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
