import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Transaction extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.BIGINT,
          autoIncrement: true,
          allownull: false,
          primaryKey: true
        },
        id_user: {
          type: DataTypes.UUID,
          allownull: false,
        },
        id_source: {
          type: DataTypes.BIGINT,
          allownull: false,
        },
        date: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allownull: false,
        },
        value: {
          type: DataTypes.BIGINT,
          allownull: false,
        },
        desc: {
          type: DataTypes.TEXT,
          allownull: false,
        }
      },
      {
        sequelize,
        tableName: "transaction",
        timestamps: true,
        paranoid: true,
      }
    );
  }
}