import React from "react";
import { Cocktails, AddCustomRecipe } from "./components/Cocktails"; // Import Cocktails component

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Your Cocktail Menu</h1>
        <h2>Alicia Personal Project</h2>
      </header>
      <main>
        <Cocktails />
        <AddCustomRecipe />
      </main>
    </div>
  );
}

export default App;
