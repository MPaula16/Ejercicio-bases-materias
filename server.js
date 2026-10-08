const express = require("express");
const sequelize = require("./database");

const Profesor = require("./models/Profesor");
const Materia = require("./models/Materia");

const profesorRoutes = require("./routes/profesor.routes");
const materiaRoutes = require("./routes/materia.routes");

const app = express();

app.use(express.json());

// Relaciones
Profesor.hasMany(Materia, {
    foreignKey: "profesor_id"
});

Materia.belongsTo(Profesor, {
    foreignKey: "profesor_id"
});

// Rutas
app.use("/profesores", profesorRoutes);
app.use("/materias", materiaRoutes);

async function iniciarServidor() {
    try {
        await sequelize.authenticate();

        console.log("Conexión exitosa a universidad_parcial");

        app.listen(3000, () => {
            console.log("Servidor en http://localhost:3000");
        });

    } catch (error) {
        console.error("Error de conexión:");
        console.error(error.message);
    }
}

iniciarServidor();