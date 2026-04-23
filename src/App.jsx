import { useState } from "react";
import FiltersPanel from "./FiltersPanel";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";



function App() {
  const [view, setView] = useState("list");
  const [recipes, setRecipes] = useState([]);

  //console.log("recetas:", recipes);

  function addProp(obj, key, value) {
    return {
      ...obj, 
      [key]: value
    }
  }

  function addRecipeToState(newRecipe) {
    setRecipes((prevRecipes) => [
      ...prevRecipes, addProp(newRecipe, "id", Date.now())
    ])
  }

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
          <RecipeList  recipes={recipes}/>
        </div>
      </section>
    )
  }
  if (view === "form") {
    return (
      <RecipeForm onCancel={goBack} onAddRecipe={addRecipeToState}/>
    )
  }
  return null

};

export default App;