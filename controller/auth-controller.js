import * as usersDao from "../users/users-dao.js";

let currentUser;
const AuthController = (app) => {

    const register = async(req, res) => {
        const user = await usersDao.findUserByUsername(req.body.username);
        if (user) {
            res.sendStatus(403);
            return;
        }
        const newUser = await usersDao.createUser(req.body);
        currentUser = newUser;
        res.json(newUser);
    };
    
    const login = async(req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        if (username && password) {
            const user = await usersDao.findUserByCredentials(username, password);
            
            if (user) {
            currentUser = user;
            res.json(user);
            } else {
            res.sendStatus(403);
            }
        } else {
            res.sendStatus(403);
        }
        
    };
        
    const profile = async (req, res) => {
        const current = currentUser;
        if (!current) {
            res.sendStatus(404);
            return;
        }
        res.json(current);
    };

    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };

    const update = async(req, res) => { 
        const current = currentUser;
        if (!current) {
            res.sendStatus(404);
            return;
        }
        const id = req.params.uid;
        const newUpdate = await usersDao.updateUser(id, req.body);
        currentUser = newUpdate;
        res.json(newUpdate);

    };
    app.post("/api/users/register", register); 
    app.post("/api/users/login",    login);
    app.post("/api/users/profile",  profile);
    app.post("/api/users/logout",   logout);
    app.put ("/api/users/:uid",     update);
};
export default AuthController;

