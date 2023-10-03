import React, { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);

  // connect to API and fetch data
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php")
      .then((response) => response.json())
      .then((data) => {
        // Store the data in the cocktails state
        setCocktails(data.drinks);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="cocktail-list">
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
}

export default Cocktails;
