import React, { useState } from "react";
import cocktailImage from "../../assets/AZdrink.jpg";

const CreateNewDrink = () => {
  const [idDrink, setIdDrink] = useState("");
  const [strName, setStrName] = useState("");
  const [strTags, setStrTags] = useState("");
  const [strIBA, setStrIBA] = useState("");
  const [strAlcoholic, setStrAlcoholic] = useState("");
  const [strCategory, setStrCategory] = useState("");
  const [strGlass, setStrGlass] = useState("");
  const [strInstructions, setStrInstructions] = useState("");
  const [strIngredient1, setStrIngredient1] = useState("");
  const [strIngredient2, setStrIngredient2] = useState("");
  const [strIngredient3, setStrIngredient3] = useState("");
  const [strMeasure1, setStrMeasure1] = useState("");
  const [strMeasure2, setStrMeasure2] = useState("");
  const [strMeasure3, setStrMeasure3] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the form data
    const newDrink = {
      idDrink,
      strName,
      strTags,
      strIBA,
      strAlcoholic,
      strCategory,
      strGlass,
      strInstructions,
      strDrinkThumb: cocktailImage,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strMeasure1,
      strMeasure2,
      strMeasure3,
    };

    try {
      console.log(`this is new drink, ${newDrink}`);
      const response = await fetch("/api/user-cocktail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDrink),
      });

      if (response.ok) {
        // Recipe created successfully, handle the response
        console.log("Custom recipe created successfully");
        // Reset the form fields after successful creation
        setIdDrink("");
        setStrName("");
        setStrTags("");
        setStrIBA("");
        setStrAlcoholic("");
        setStrCategory("");
        setStrGlass("");
        setStrInstructions("");
        strIngredient1("");
        strIngredient2("");
        strIngredient3("");
        strMeasure1("");
        strMeasure2("");
        strMeasure3("");
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
      <h2>Create a New Drink</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID Drink:</label>
          <input
            type="text"
            value={idDrink}
            onChange={(e) => setIdDrink(e.target.value)}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={strName}
            onChange={(e) => setStrName(e.target.value)}
          />
        </div>
        <div>
          <label>Tags:</label>
          <input
            type="text"
            value={strTags}
            onChange={(e) => setStrTags(e.target.value)}
          />
        </div>
        <div>
          <label>Alcoholic:</label>
          <input
            type="text"
            value={strAlcoholic}
            onChange={(e) => setStrAlcoholic(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={strCategory}
            onChange={(e) => setStrCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Glass:</label>
          <input
            type="text"
            value={strGlass}
            onChange={(e) => setStrGlass(e.target.value)}
          />
        </div>

        <div>
          <label>Ingredient 1:</label>
          <input
            type="text"
            value={strIngredient1}
            onChange={(e) => setStrIngredient1(e.target.value)}
          />
        </div>
        <div>
          <label>Ingredient 2:</label>
          <input
            type="text"
            value={strIngredient2}
            onChange={(e) => setStrIngredient2(e.target.value)}
          />
        </div>
        <div>
          <label>Ingredient 3:</label>
          <input
            type="text"
            value={strIngredient3}
            onChange={(e) => setStrIngredient3(e.target.value)}
          />
        </div>
        <div>
          <label>Measure 1:</label>
          <input
            type="text"
            value={strMeasure1}
            onChange={(e) => setStrMeasure1(e.target.value)}
          />
        </div>
        <div>
          <label>Measure 2:</label>
          <input
            type="text"
            value={strMeasure2}
            onChange={(e) => setStrMeasure2(e.target.value)}
          />
        </div>
        <div>
          <label>Measure 3:</label>
          <input
            type="text"
            value={strMeasure3}
            onChange={(e) => setStrMeasure3(e.target.value)}
          />
        </div>
        <button type="submit">Create Drink</button>
      </form>
    </div>
  );
};

export default CreateNewDrink;
