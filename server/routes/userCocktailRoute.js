const express = require("express");
const router = express.Router();
const userCocktailController = require("../controllers/userCocktailController");

// Create a new cocktail
router.post("/user-cocktail", userCocktailController.createCocktail);

// Get all custom cocktail by ID
router.get("/user-cocktails", userCocktailController.getAllCocktails);

// Update a cocktail by ID
router.put("/:idDrink", userCocktailController.updateCocktail);

// Delete a cocktail by ID
router.delete("/:idDrink", userCocktailController.deleteDrink);

module.exports = router;
