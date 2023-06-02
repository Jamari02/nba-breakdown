import mongoose from 'mongoose'

const playerSchema = new mongoose.Schema({
    name : String,
    team : String,
    Season: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Season"
      }
});

const Player = mongoose.model("Player", playerSchema)

export default Player 