import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Category extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allownull: false,
        },
        id_user: {
          type: DataTypes.UUID,
          allownull: false,
        },
        type: {
          type: DataTypes.ENUM(['Income','Expense']),
          allownull: false,
        },
        name: {
          type: DataTypes.STRING,
          allownull: false,
        },
      },
      {
        sequelize,
        tableName: "category",
        timestamps: true,
        paranoid: true,
      }
    );
  }
}