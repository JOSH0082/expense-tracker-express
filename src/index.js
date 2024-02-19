import Express from "express";
import 'dotenv/config';
const app = Express();
import user from "./route/users.js";
import db from "./models/index.js";
import bodyParser from "body-parser";
import cors from 'cors';

app.use(Express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extends: false }));
app.use("/user", user);

app.listen(6555);