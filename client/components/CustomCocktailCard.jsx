import React from "react";

function CustomCocktailCard({ customCocktail, onImageClick }) {
  return (
    <div className="cocktail-card">
      <img
        src={customCocktail.strDrinkThumb}
        alt={customCocktail.strName}
        onClick={() => onImageClick(customCocktail)}
      />

      <h3>{customCocktail.strName}</h3>
      <p>Category: {customCocktail.strCategory}</p>
      <p>Type: {customCocktail.strAlcoholic}</p>
      <p>Glass: {customCocktail.strGlass}</p>
    </div>
  );
}

export default CustomCocktailCard;
