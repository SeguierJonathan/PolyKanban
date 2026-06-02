import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelise.config.js";

class Card extends Model { };

Card.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
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
        modelName: 'Card',
        tableName: 'card'
    }
);

export default Card;

