import React from "react";

function DetailsModal({ isOpen, cocktail, onClose }) {
  if (!isOpen || !cocktail) {
    return null;
  }

  // Extract more details from the cocktail object
  const {
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3 /* Add more ingredients */,
  } = cocktail;

  return (
    <div className="details-modal">
      <div className="modal-content">
        <h2>{cocktail.strDrink}</h2>
        <p>Instructions: {strInstructions}</p>
        <p>
          Ingredients:
          {Object.keys(cocktail)
            .filter((key) => key.startsWith("strIngredient") && cocktail[key])
            .map((key) => cocktail[key])
            .join(", ")}
        </p>
        {/* Add more details as needed */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default DetailsModal;
