import mongoose from 'mongoose'
import Team from '../models/teams.js';

const playerSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    college : String,
    Team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
      }
});

const Player = mongoose.model("Player", playerSchema)

export default Player 