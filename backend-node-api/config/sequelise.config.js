import { Sequelize } from "sequelize";
import "dotenv/config"

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: "postgres",
    dialect: "postgres",
    define: {
        timestamps: true,
        underscored: true
    }
});

export default sequelize;

