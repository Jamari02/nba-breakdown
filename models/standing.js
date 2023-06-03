import mongoose from 'mongoose'

const standingSchema = new mongoose.Schema({
    season : Number,
    team : String,
    win : Number,
    loss : Number
});

const Standing = mongoose.model("Standing", standingSchema)

export default Standing;