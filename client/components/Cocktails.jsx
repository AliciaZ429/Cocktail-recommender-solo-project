import React, { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";
//import DetailsModal from "./DetailsModal";

export function Cocktails({ onCardClick }) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    // Fetch cocktails data from your API or source
    // For example:
    fetch("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php")
      .then((response) => response.json())
      .then((data) => {
        // Check if data.drinks is defined before setting state
        if (data.drinks) {
          setCocktails(data.drinks);
        }
      })
      .catch((error) => {
        console.error("Error fetching cocktails data:", error);
      });
  }, []);

  return (
    <div className="cocktail-list">
      {/* Check if cocktails is defined before mapping */}
      {cocktails &&
        cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            cocktail={cocktail}
            onImageClick={onCardClick}
          />
        ))}
    </div>
  );
}
