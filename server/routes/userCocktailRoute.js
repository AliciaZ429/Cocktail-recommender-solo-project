const express = require("express");
const router = express.Router();
const userCocktailController = require("../controllers/userCocktailController");

// Create a new cocktail
router.post("/", userCocktailController.createCocktail);

// Get a cocktail by ID
router.get("/:idDrink", userCocktailController.getCocktail);

// Update a cocktail by ID
router.put("/:idDrink", userCocktailController.updateCocktail);

// Delete a cocktail by ID
router.delete("/:idDrink", userCocktailController.deleteDrink);

module.exports = router;
