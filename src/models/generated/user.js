import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          default: DataTypes.UUIDV4,
          allownull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.TEXT,
          allownull: false,
        },
        username: {
          type: DataTypes.STRING,
          allownull: false,
        },
        email: {
          type: DataTypes.STRING,
          allownull: false,
        },
        password: {
          type: DataTypes.STRING,
          allownull: false,
        },
        born: {
          type: DataTypes.DATEONLY,
          allownull: false,
        },
        gender: {
          type: DataTypes.ENUM(["Male", "Female", "Unidentified", "Mayonaise"]),
          defaultValue: "Mayonaise",
          allownull: true,
        },
        job: {
          type: DataTypes.STRING,
          defaultValue: null,
          allownull: true,
        },
        status: {
          type: DataTypes.ENUM(["Married", "Single", "In a Relationship",null]),
          defaultValue: null,
          allownull: true,
        },
      },
      {
        sequelize,
        tableName: "materials",
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
