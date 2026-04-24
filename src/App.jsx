import { useState, useEffect } from "react";
import FiltersPanel from "./FiltersPanel";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import RecipeDetails from "./RecipeDetails";

function App() {
  const STORAGE_KEY = "recetario_react"

  const saved = localStorage.getItem(STORAGE_KEY);
  const parsed = saved ? JSON.parse(saved) : null;

  const [view, setView] = useState(parsed?.view ?? "list");
  const [recipes, setRecipes] = useState(parsed?.recipes ?? []);
  const [selectRecipe, setSelectRecipe] = useState(parsed?.recipe ?? {})

  useEffect(() => {
    const stateToSave = { view, recipes, selectRecipe };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
  }, [view, recipes, selectRecipe]);

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

  function selectById(id) {
    const selectedRecipe = recipes.find(recipe => recipe.id === id);
    setSelectRecipe({
      ...selectRecipe, selectedRecipe
    })
  }

  function goBack() {
    setView("list");
  };

  function goToDetails() {
    setView("details");
  }

  if (view === "list") {
    return (
      <section id="listView" className="view">
        <header className="app-header">
          <div className="view-topbar">
            <p className="eyebrow">Recetario</p>
            <h1 className="app-title">Gestión de recetas</h1>
          </div>
          <button id="openRecipeFormBtn" className="btn btn-primary" type="button"
            onClick={() => setView("form")}>
            Agregar
          </button>
        </header>
        <div className="list-layout">
          <FiltersPanel />
          <RecipeList recipes={recipes} onDetails={goToDetails} onGetId={selectById}/>
        </div>
      </section>
    )
  }
  if (view === "form") {
    return (
      <RecipeForm onCancel={goBack} onAddRecipe={addRecipeToState} />
    )
  }
  if (view === "details") {
    return (
      <RecipeDetails goToList={goBack}/>
    )
  }
  return null

};

export default App;