const express=require("express");
const { getUsers, addUser, getUserById, editUser, deleteUser,registerUser, loginUser } = require("../controller/usser-control");
const auth = require("../midd/auth");

const route=express.Router();

route.get('/',auth, getUsers);
route.post('/add', addUser);
route.post('/register', registerUser);
route.post('/login',loginUser);
route.get('/:id', getUserById);
route.put('/:id', editUser);
route.delete('/:id', deleteUser);

module.exports=route;