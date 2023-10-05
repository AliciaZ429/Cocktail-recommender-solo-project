import React from "react";

function DetailsModal({ isOpen, cocktail, onClose }) {
  console.log("isOpen:", isOpen);
  console.log("cocktail:", cocktail);
  if (!isOpen || !cocktail) {
    return null;
  }

  // Extract more details from the cocktail object
  const {
    idDrink,
    strTags,
    strIBA,
    strAlcoholic,
    strCategory,
    strGlass,
    strInstructions,
  } = cocktail;

  return (
    <div>
      {isOpen && (
        <div className="overlay">
          <div className="modal">
            <h2>{cocktail.strDrink}</h2>
            <p>ID: {idDrink}</p>
            <p>Type: {strAlcoholic}</p>
            <p>Category: {strCategory}</p>
            <p>Recommended Glass: {strGlass}</p>
            <p>Tags: {strTags}</p>
            <p>IBA: {strIBA}</p>
            <p>
              Ingredients:
              {Object.keys(cocktail)
                .filter(
                  (key) => key.startsWith("strIngredient") && cocktail[key]
                )
                .map((key) => cocktail[key])
                .join(", ")}
            </p>
            <p>
              Recipe:
              {Object.keys(cocktail)
                .filter((key) => key.startsWith("strMeasure") && cocktail[key])
                .map((key) => cocktail[key])
                .join(", ")}
            </p>
            <p>Instructions: {strInstructions}</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsModal;
