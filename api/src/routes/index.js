const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routeDiets = require("./route/routeDiets");
const routeRecipes = require("./route/routeRecipe");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", routeRecipes);
router.use("/diets", routeDiets);

module.exports = router;
