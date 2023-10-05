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
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item">
            <h1>Your Cocktail Menu</h1>
          </li>
          <li className="navbar-item">
            <button onClick={toggleModal}>Add Custom Recipe</button>
          </li>
        </ul>
      </nav>
      <header>
        <div className="slogan">
          <p>
            Cocktails are a celebration of the fine balance <br></br> between
            taste and presentation
          </p>
        </div>
      </header>
      <main>
        <Cocktails onCardClick={handleCardClick} />
      </main>
      <DetailsModal
        isOpen={showModal}
        cocktail={selectedCocktail}
        onClose={toggleModal}
      />
    </div>
  );
}

export default App;
