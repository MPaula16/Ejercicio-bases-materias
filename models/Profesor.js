const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Profesor = sequelize.define(
    "Profesor",
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

        correo: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        }
    },
    {
        tableName: "profesor",
        timestamps: false
    }
);

module.exports = Profesor;