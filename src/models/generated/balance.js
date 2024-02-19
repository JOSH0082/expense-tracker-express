import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Balance extends Model {
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
          type: DataTypes.UUID,
          allownull: false,
        },
        period: {
          type: DataTypes.CHAR(6),
          allownull: false,
        },
        start_val: {
          type: DataTypes.BIGINT,
          allownull: false,
        },
        in_val: {
          type: DataTypes.BIGINT,
          allownull: false,
        },
        out_val: {
          type: DataTypes.BIGINT,
          allownull: false,
        },
        end_val: {
          type: DataTypes.BIGINT,
          allownull: false,
        }
      },
      {
        sequelize,
        tableName: "balance",
        timestamps: true,
        paranoid: true,
      }
    );
  }
}