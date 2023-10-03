import React from "react";

function CocktailCard({ cocktail }) {
  return (
    <div className="cocktail-card">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h3>{cocktail.strDrink}</h3>
      <p>Type: {cocktail.strTags}</p>
      <p>Category: {cocktail.strCategory}</p>
      <p>Alcoholic: {cocktail.strAlcoholic}</p>
    </div>
  );
}

export default CocktailCard;
