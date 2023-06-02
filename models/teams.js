import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
    name : String,
    code : String,
    city : String,
    Standing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Standing"
      }
});

const Team = mongoose.model("Team", teamSchema)

export default Team;