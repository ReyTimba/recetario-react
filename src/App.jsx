import { useState } from "react";
import FiltersPanel from "./FiltersPanel";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";

function App() {
  const [view, setView] = useState("list");

  function goBack() {
    setView("list");
  };

  if (view === "list") {
    return (
      <section id="listView" className="view">
        <header className="app-header">
          <div className="view-topbar">
            <p className="eyebrow">Recetario</p>
            <h1 className="app-title">Gestión de recetas</h1>
          </div>
          <button id="openRecipeFormBtn" className="btn btn-primary" type="button"
          onClick= {() => setView("form")}>
            Agregar
          </button>
        </header>
        <div className="list-layout">
          <FiltersPanel />
          <RecipeList />
        </div>
      </section>
    )
  }
  if (view === "form") {
    return (
      <RecipeForm onCancel={goBack}/>
    )
  }
  return null

};

export default App;