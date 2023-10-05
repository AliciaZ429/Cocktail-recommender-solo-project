const UserCocktail = require("../models/userCocktail");

const userCocktailController = {
  // Create a new drink in the Database
  // Their information will be sent in the request body
  // This should send the created recipe

  async createCocktail(req, res, next) {
    try {
      // Get the data for the new drink from the request body
      const {
        idDrink,
        strName,
        strTags,
        strIBA,
        strAlcoholic,
        strCategory,
        strGlass,
        strInstructions,
        strDrinkThumb,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strMeasure1,
        strMeasure2,
        strMeasure3,
      } = req.body;

      // Create a new UserCocktail document
      const newCocktail = new UserCocktail({
        idDrink,
        strName,
        strTags,
        strIBA,
        strAlcoholic,
        strCategory,
        strGlass,
        strInstructions,
        strDrinkThumb,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strMeasure1,
        strMeasure2,
        strMeasure3,
      });

      // Save the new cocktail to the database
      const result = await newCocktail.save();

      res.status(201).json(result);
    } catch (err) {
      console.log(err);
      next({
        log: "Error creating drink",
        status: 500,
        message: { err: "An error occurred when creating drink" },
      });
    }
  },

  // Get all custom cocktails
  async getAllCocktails(req, res, next) {
    try {
      // Query the database to retrieve all custom cocktails
      const customCocktails = await UserCocktail.find({});

      // Send the custom cocktails as a JSON response
      res.json(customCocktails);
    } catch (err) {
      console.error("Error fetching custom cocktails:", err);
      // Handle any errors that occur during the database query
      next({
        log: "Error fetching custom cocktails",
        status: 500,
        message: { err: "An error occurred when fetching custom cocktails" },
      });
    }
  },

  // Get a recipe from the database and update info
  // The id will be in the request parameter 'idDrink'
  // The id will be in the request body

  async updateCocktail(req, res, next) {
    try {
      const result = await UserCocktail.findOneAndUpdate(
        // update logic unsure. Waiting to modify
        { firstName: req.params.name },
        { firstName: req.body.name },
        { new: true }
      );

      if (!result) {
        next({
          log: "Drink not found",
          status: 404,
          message: { err: "Drink not found" },
        });
      } else {
        res.status(200).json(result);
      }
    } catch (err) {
      next({
        log: "Error updating drink",
        status: 500,
        message: { err: "An error occurred when updating drink recipe" },
      });
    }
  },

  // Delete a recipe from the database
  // This should send a success status code

  async deleteDrink(req, res, next) {
    try {
      const result = await UserCocktail.findOneAndDelete({
        idDrink: req.params.idDrink,
      });

      if (!result) {
        next({
          log: "Drink not found",
          status: 404,
          message: { err: "Drink not found" },
        });
      } else {
        // Question: when successfully deleted, do i need to send a status?
        res.status(200).json({ message: "Drink deleted!" });
      }
    } catch (err) {
      next({
        log: "Error deleting drink",
        status: 500,
        message: { err: "An error occurred when deleting drink" },
      });
    }
  },
};

module.exports = userCocktailController;
