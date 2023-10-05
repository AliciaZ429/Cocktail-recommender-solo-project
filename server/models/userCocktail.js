const mongoose = require("mongoose");

const cocktailSchema = new mongoose.Schema({
  idDrink: String,
  strDrink: String,
  strTags: String,
  strName: String,
  strIBA: String,
  strAlcoholic: String,
  strCategory: String,
  strGlass: String,
  strInstructions: String,
  strDrinkThumb: String,
  strIngredient1: String,
  strIngredient2: String,
  strIngredient3: String,
  strMeasure1: String,
  strMeasure2: String,
  strMeasure3: String,
});

module.exports = mongoose.model("UserCocktail", cocktailSchema);
