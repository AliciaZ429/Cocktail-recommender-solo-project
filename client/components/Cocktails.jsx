import React, { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";

export function Cocktails() {
  const [cocktails, setCocktails] = useState([]);

  // connect to API and fetch data
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php")
      .then((response) => response.json())
      .then((data) => {
        // Store the data in the cocktails state
        setCocktails(data.drinks);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="cocktail-list">
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
}

// add custom recipe
export function AddCustomRecipe() {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    // Add more fields as needed
  });

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
        console.log("Custom recipe created successfully");
      } else {
        // Handle errors if any
        console.error("Error creating custom recipe");
      }
    } catch (error) {
      console.error("Error creating custom recipe", error);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Add Custom Recipe</button>
      {/* Add form fields for recipe details */}
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
    </div>
  );
}
