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
// add custom recipe
// export function AddCustomRecipe() {
//   const [formData, setFormData] = useState({
//     name: "",
//     ingredients: "",
//     instructions: "",
//     // Add more fields as needed
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Send a POST request to your backend to create the custom recipe
//     try {
//       const response = await fetch("/api/user-cocktails", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Recipe created successfully, handle the response
//         console.log("Custom recipe created successfully");
//       } else {
//         // Handle errors if any
//         console.error("Error creating custom recipe");
//       }
//     } catch (error) {
//       console.error("Error creating custom recipe", error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleSubmit}>Add Custom Recipe</button>
//       {/* Add form fields for recipe details */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Recipe Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />
//         {/* Add more input fields for ingredients, instructions, etc. */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

export function AddCustomRecipe() {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    // Add more fields as needed
  });

  const [createdCocktail, setCreatedCocktail] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your backend to create the custom recipe
    try {
      const response = await fetch("/api/user-cocktails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Recipe created successfully, handle the response
        const createdRecipe = await response.json();
        setCreatedCocktail(createdRecipe);
      } else {
        console.error("Error creating custom recipe");
      }
    } catch (error) {
      console.error("Error creating custom recipe", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {/* Add more input fields for ingredients, instructions, etc. */}
        <button type="submit">Submit</button>
      </form>
      {createdCocktail && (
        <div>
          {/* Display the newly created cocktail */}
          <h2>Newly Created Cocktail</h2>
          <h3>{createdCocktail.name}</h3>
          {/* Display other cocktail details */}
        </div>
      )}
    </div>
  );
}
