import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelise.config.js";

class Tag extends Model { };

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.STRING(100),
            allowNull: false

        },
        color: {
            type: DataTypes.STRING(20),
            allowNull: false,
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
        modelName: 'Tag',
        tableName: 'tag'
    }
);

export default Tag;
