import mongoose from 'mongoose'

const standingSchema = new mongoose.Schema({
    season : Number,
    team : String,
    conference : String
});

const Standing = mongoose.model("Standing", standingSchema)

export default Standing;