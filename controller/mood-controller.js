import * as  moodDao from '../mood/mood-dao.js'

const createMood= async(req, res) => {
    console.log(req.body);
    const newMood = req.body;
    newMood.likes = 0;
    newMood.liked = false;
    const insertedMood = await moodDao.createMood(newMood);
    res.json(insertedMood);
  }
  
const findMood = async(req, res) =>{
    const mood = await moodDao.findMood()
    res.json(mood);
}
    

const updateMood = async(req, res) => {
    const moodIdToUpdate = req.params.mid;
    const updates = req.body;
    const status = await moodDao.updateMood(moodIdToUpdate, updates);
    res.json(status);
}
  
const deleteMood = async(req, res) => {
    const moodIdToDelete = req.params.mid;
    const status = await moodDao.deleteMood(moodIdToDelete);
    res.json(status);
  }


export default (app) => {
    app.post('/api/mood', createMood);
    app.get('/api/mood', findMood);
    app.put('/api/mood/:mid', updateMood);
    app.delete('/api/mood/:mid', deleteMood);
}

// const MoodController = (app) => {
//     app.post('/api/mood', createMood);
//     app.get('/api/mood', findMood);
//     app.put('/api/mood/:mid', updateMood);
//     app.delete('/api/mood/:mid', deleteMood);
// }
// export default MoodController
