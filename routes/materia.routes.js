const express = require("express");

const router = express.Router();

const Materia = require("../models/Materia");
const Profesor = require("../models/Profesor");

router.get("/materias", async (req, res) => {
    try {

        const materias = await Materia.findAll({
            attributes: ["nombre"],
            include: [
                {
                    model: Profesor,
                    attributes: ["nombre"]
                }
            ]
        });

        res.json(materias);

    } catch (error) {

        console.error("Error al consultar materias:", error.message);

        res.status(500).json({
            error: "Error al consultar las materias"
        });
    }
});

module.exports = router;