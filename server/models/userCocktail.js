const mongoose = require("mongoose");

const cocktailSchema = new mongoose.Schema({
  idDrink: String,
  strDrink: String,
  strTags: String,
  // Add other fields for cocktail details
});

module.exports = mongoose.model("UserCocktail", cocktailSchema);
