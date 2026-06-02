import { DataTypes, Model } from "sequelize"
import sequelize from "../config/sequelise.config.js";

class List extends Model { };

List.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        position: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        }
    },
    {
        sequelize,
        modelName: 'List',
        tableName: 'list'
    }
);

export default List;

