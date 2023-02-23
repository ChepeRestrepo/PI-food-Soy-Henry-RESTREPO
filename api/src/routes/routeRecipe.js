const express = require("express");
const { Recipe, Diet } = require("../../db.js");
const axios = require("axios");
const {
  getApi,
  getById,
  getByName,
  getByIdDb,
  getAllApi,
} = require("../Middleware/middlewares");

const router = express.Router();

router.get("/", async (req, res) => {
  const { name } = req.query;

  if (name) {
    try {
      const info = await getByName(name);
      res.status(200).send(info);
    } catch (error) {
      res.status(404).send(error);
    }
  } else {
    try {
      const info = await getApi();
      res.status(200).send(info);
    } catch (error) {
      res.status(404).send(error);
    }
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!isNaN(id)) {
    const info = await getById(id);
    res.status(200).send(info);
  } else {
    const Db = await getByIdDb(id);
    res.status(200).send(Db);
  }
});

router.post("/", async (req, res) => {
  const { name, summary, healthScore, steps, img, diet } = req.body;

  if (!name || !summary) {
    res.status(404).send("Nombre y Resumen Obligatorio");
  }
  const allRecipe = await getApi();
  const isRecipe = await allRecipe.find((e) => e.name === name);
  if (!isRecipe) {
    const recipe = await Recipe.create({
      name: name.toLowerCase(),
      summary,
      healthScore,
      steps,
      img,
    });

    const typeDb = await Diet.findAll({
      where: {
        name: diet,
      },
    });

    recipe.addDiet(typeDb);
    return res.status(200).send("Receta creada correctamente");
  }
  res.status(404).send("No se pudo Crear receta");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const verification = await Recipe.findAll({
    where: {
      id: id,
    },
  });

  if (!id) {
    return res.status(404).send("no hay id");
  } else if (!verification.length) {
    return res.status(404).send("Id incorrecto");
  } else {
    await Recipe.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).send("Se elimino");
  }
});

router.put("/:id", async (req, res) => {
  const { id } = res.params;
  const { summary, step, diet, healthScore, name } = req.body;

  const allRecipe = await getApi();
  const aux = allRecipe.find((el) => el.id === id);
  if (aux) {
  } else {
    res.status(404).send("Id no encontrado");
  }
});

module.exports = router;
