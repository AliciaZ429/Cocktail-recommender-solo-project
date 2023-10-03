import React from "react";
import Cocktails from "./components/Cocktails"; // Import Cocktails component

function App() {
  return (
    <div className="app">
      <header>
        <h1>Cocktail Recommender</h1>
        <h2>Alicia Personal Project</h2>
      </header>
      <main>
        <Cocktails />
      </main>
    </div>
  );
}

export default App;
