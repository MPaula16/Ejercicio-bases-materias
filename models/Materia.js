const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Materia = sequelize.define(
    "Materia",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        profesor_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "materia",
        timestamps: false
    }
);

module.exports = Materia;