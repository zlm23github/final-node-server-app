import * as cargoDao from "../cargo/cargo-dao.js";

const updateCargo = async(req, res) => {
        const id = req.params.cid;
        const newUpdate = await cargoDao.updateCargo(id, req.body);
        res.json(newUpdate);
}

const deleteCargo = async(req, res) => {
    const id = req.params.cid;
    const status = await cargoDao.deleteCargo(id);
    res.json(status);
}
  
const createCargo = async(req, res) => {
    const newCargo = await cargoDao.createCargo(req.body);
    res.json(newCargo);
}
  
const findCargoByName = async(req, res) => {
    console.log("findbyname");
    const name = req.params.name;
    const data = await cargoDao.findCargoByName(name);
    res.json(data)

}

const findCargoById = async(req, res) => {
    console.log("in backend");
    const id = req.params.cid;
    console.log("id");
    console.log(id);
    const cargo = await cargoDao.findCargoById(id);
    console.log(cargo);
    res.json(cargo);
}

const findAllCargo = async(req, res) => {
    const cargo = await cargoDao.findCargo()
    res.json(cargo);
}

const CargoController = (app) => {
    app.get('/api/cargo/:cid', findCargoById);
    app.get('/api/cargo/:name', findCargoByName);
    app.get('/api/cargo', findAllCargo);
    
    app.post('/api/cargo', createCargo);
    app.delete('/api/cargo/:cid', deleteCargo);
    app.put('/api/cargo', updateCargo);
  
}
export default CargoController;



// const findAllCargo = async (req, res) => {
//   const username = req.query.username;
//   const password = req.query.password;
//   if (username && password) {
//     const user = await usersDao.findUserByCredentials(username, password);
//     if (user) {
//       res.json(user);
//     } else {
//       res.sendStatus(404);
//     }
//   } else if (username) {
//     const user = await usersDao.findUserByUsername(username);
//     if (user) {
//       res.json(user);
//     } else {
//       res.sendStatus(404);
//     }
//   } else {
//     const users = await usersDao.findAllUsers();
//     res.json(users);
//   }