import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
    name : String,
    code : String,
    city : String,
});

const Team = mongoose.model("Team", teamSchema)

export default Team;