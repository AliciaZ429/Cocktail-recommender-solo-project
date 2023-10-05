import React from "react";
import { Cocktails } from "./components/Cocktails";
import { useState, useEffect } from "react";
import DetailsModal from "./components/DetailsModal";
import CreateNewDrink from "./components/CreateNewDrink";
import cocktailImage from "./../assets/AZdrink.jpg";
import CustomCocktailCard from "./components/CustomCocktailCard";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [showCustomRecipeModal, setShowCustomRecipeModal] = useState(false);
  const [isCreateDrinkOpen, setCreateDrinkOpen] = useState(false);
  const [customCocktails, setCustomCocktails] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleCustomRecipeModal = () => {
    setShowCustomRecipeModal(!showCustomRecipeModal);
  };

  const toggleCreateDrink = () => {
    setCreateDrinkOpen(!isCreateDrinkOpen);
  };

  const handleCardClick = (cocktail) => {
    setSelectedCocktail(cocktail);
    toggleModal();
  };

  //fetch custom data
  useEffect(() => {
    fetch("/api/user-cocktails")
      .then((response) => response.json())
      .then((data) => {
        setCustomCocktails(data);
      })
      .catch((error) => {
        console.error("Error fetching custom cocktails:", error);
      });
  }, []);

  return (
    <div className="app">
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item">
            <h1>Your Cocktail Menu</h1>
          </li>
          <li className="navbar-item">
            <button onClick={toggleCreateDrink}>Add Custom Recipe</button>
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
        <div className="cocktail-list">
          {customCocktails.map((customCocktail) => (
            <CustomCocktailCard
              key={customCocktail._id}
              customCocktail={customCocktail}
              onImageClick={handleCardClick} // Replace with your function
            />
          ))}
        </div>
      </main>
      {isCreateDrinkOpen && (
        <div className="popup">
          <CreateNewDrink />
          <button onClick={toggleCreateDrink}>Close</button>
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
