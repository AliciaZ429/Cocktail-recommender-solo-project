const UserCocktail = require("../models/userCocktail");

const userCocktailController = {
  // Create a new drink in the Database
  // Their information will be sent in the request body
  // This should send the created recipe

  async createCocktail(req, res, next) {
    try {
      const cocktail = new UserCocktail(req.body);
      const result = await cocktail.save();

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

  // Get a drink from the database and send it in the response
  // param: idDrink
  async getCocktail(req, res, next) {
    // takeaway: colon means key in req.params, ? means key in req.query
    try {
      const id = req.params.idDrink;
      const result = await UserCocktail.findOne({ idDrink: id });

      if (!result) {
        next({
          log: "drink not found",
          status: 404,
          message: { err: "Drink not found" },
        });
      } else {
        res.status(200).json(result);
      }
    } catch (err) {
      next({
        log: "Error finding drink",
        status: 500,
        message: { err: "An error occurred when finding drink" },
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
