const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "universidad_parcial",
    "root",
    "30000125726",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = sequelize;