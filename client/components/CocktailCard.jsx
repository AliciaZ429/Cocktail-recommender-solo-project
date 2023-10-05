import React, { useState } from "react";

function CocktailCard({ cocktail, onImageClick }) {
  return (
    <div className="cocktail-card">
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        onClick={() => onImageClick(cocktail)}
      />

      <h3>{cocktail.strDrink}</h3>
      <p>Category: {cocktail.strCategory}</p>
      <p>Type: {cocktail.strAlcoholic}</p>
      <p>Glass: {cocktail.strGlass}</p>
    </div>
  );
}

export default CocktailCard;
