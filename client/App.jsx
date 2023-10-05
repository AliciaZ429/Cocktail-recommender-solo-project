import React from "react";
import { Cocktails, AddCustomRecipe } from "./components/Cocktails"; // Import Cocktails component
import { useState } from "react";
import DetailsModal from "./components/DetailsModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCardClick = (cocktail) => {
    setSelectedCocktail(cocktail);
    toggleModal();
  };

  return (
    <div className="app">
      <header>
        <h1>Your Cocktail Menu</h1>
        <nav>
          <ul>
            <li>
              <button onClick={toggleModal}>Add Custom Recipe</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Cocktails onCardClick={handleCardClick} />
      </main>
      {selectedCocktail && (
        <div className="cocktail-card-details">
          <h3>{selectedCocktail.strDrink}</h3>
          <p>Type: {selectedCocktail.strTags}</p>
          <p>Category: {selectedCocktail.strCategory}</p>
          <p>Alcoholic: {selectedCocktail.strAlcoholic}</p>
        </div>
      )}
      <DetailsModal
        isOpen={showModal}
        cocktail={selectedCocktail}
        onClose={toggleModal}
      />
    </div>
  );
}

export default App;
