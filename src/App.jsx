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
  const [selectRecipe, setSelectRecipe] = useState(parsed?.selectRecipe ?? null)

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
      ...prevRecipes, addProp(newRecipe, "id", crypto.randomUUID())
    ])
  }

  function goBack() {
    setView("list");
  };

  function handleShowDetails(id) {
  const selectedRecipe = recipes.find(r => r.id === id);
  if (!selectedRecipe) return;

  setSelectRecipe(selectedRecipe);
  setView("details");
}

  function deleteRecipe(id) {
    const filteredRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(filteredRecipes);
    setSelectRecipe(null);
    setView("list")
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
          <RecipeList recipes={recipes} onDetails={handleShowDetails}  />
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
      <RecipeDetails
        goToList={goBack} 
        selectRecipe={selectRecipe}
        deleteRecipe={deleteRecipe}/>
    )
  }
  return null

};

export default App;