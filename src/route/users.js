import Express from "express";
import { getAllUsers, createUser } from "../controller/user.js";

const user = Express.Router();
user.get('/', getAllUsers);
user.post('/', createUser);

export default user;