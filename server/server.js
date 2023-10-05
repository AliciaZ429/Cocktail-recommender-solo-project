console.log("server is running");
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// mongodb link: postgres://kpwtvogg:5d1v5XXjC-00FkDFVrQl5abunp1P_5IN@horton.db.elephantsql.com/kpwtvogg
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://Alicia:123@cluster0.fjuudz5.mongodb.net/";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Cocktail",
});

// Check for successful database connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// require routes here
app.use(express.json());
app.use(cors());
const cocktailRoute = require("./routes/cocktailRoute");
const userCocktailRouter = require("./routes/userCocktailRoute");

// define middleware
app.use("/api", userCocktailRouter);

// catch all 404 err
app.use((req, res) => {
  return res.sendStatus(404);
});

//global err handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
