const express = require("express");
const router = express.Router();

const Profesor = require("../models/Profesor");

// GET - obtener todos los profesores
router.get("/", async (req, res) => {
    try {
        const profesores = await Profesor.findAll();
        res.json(profesores);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// POST - crear un profesor
router.post("/", async (req, res) => {
    try {
        const { nombre, correo } = req.body;

        const profesor = await Profesor.create({
            nombre,
            correo
        });

        res.status(201).json(profesor);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;