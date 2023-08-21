import moodModel from "./mood-model.js";


export const findMood = () => moodModel.find();
export const createMood = (mood) => moodModel.create(mood);
export const deleteMood = (mid) => moodModel.deleteOne({_id: mid});
export const updateMood = (mid, mood) => moodModel.updateOne({_id: mid}, {$set: mood})

export const findMoodById = (id) => {
    const mood = moodModel.findById(id);
    return mood;
};