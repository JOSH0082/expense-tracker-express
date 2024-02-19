import _sequelize, { Sequelize } from "sequelize";


import _balance from "./balance.js";
import _user from "./user.js";
import _category from "./category.js";
import _source from "./source.js";
import _transaction from "./transaction.js";

export default function initModels(sequelize,DataTypes) {
    const user = _user.init(sequelize, DataTypes);
    const category = _category.init(sequelize, DataTypes);
    const source = _source.init(sequelize, DataTypes);
    const balance = _balance.init(sequelize, DataTypes);
    const transaction = _transaction.init(sequelize, DataTypes);

    return {
        user,
        category,
        source,
        balance,
        transaction
    }
}