import mongoose from 'mongoose';
import moodSchema from './mood-schema.js';

const moodModel = mongoose.model('MoodModel', moodSchema);
export default moodModel;