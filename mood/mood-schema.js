import mongoose from 'mongoose';

const moodSchema = mongoose.Schema({
    topic: String,
    like: Boolean,
    likes: Number,
    mid: String,
}, {collection: 'mood'});
export default moodSchema;