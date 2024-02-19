import { Sequelize } from "sequelize";
import initModels from "./generated/init-models.js";

const db = new Sequelize("expense-tracker", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

initModels(db, Sequelize.DataTypes);


db.authenticate().then(() => {
    console.log("DB Connected Successfully");
}).catch((e) => {
    console.log(e);
});

// await db.sync

export default db;