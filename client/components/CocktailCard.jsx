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
      <p>Tag {cocktail.strTags}</p>
      <p>Category: {cocktail.strCategory}</p>
      <p>Alcoholic: {cocktail.strAlcoholic}</p>
    </div>
  );
}

export default CocktailCard;
