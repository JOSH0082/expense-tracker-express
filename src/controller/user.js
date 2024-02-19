import User from "../models/generated/user.js";
import bcrypt from 'bcrypt';
import valids from "./validator.js";

export function getAllUsers(req, res) {
    try {
        const users = User.findAll();
        res.json({
            message: "GET all users success",
            data: users,
        });
    } catch (e) {
        res.status(500).json({
            message: "Server error",
            serverMessage: e.message,
        });
    }
};

export async function createUser (req, res){
    try {
        let user = req.body;
        user.password = bcrypt.hashSync(user.password, 8);
        
        res.json({
          message: "Create users success",
          data: valids.validateCreateUser(user),
        });
    } catch (e) {
        res.status(500).json({
          message: "Server error",
          serverMessage: { msg: e.message, tes: req },
        });
    }
};

