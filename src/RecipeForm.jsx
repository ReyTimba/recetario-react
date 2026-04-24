import { useState } from "react";
import IngredientsCard from "./IngredientsCard";

function RecipeForm(props) {
  const [recipe, setRecipe] = useState({
    title: "",
    availability: "",
    category: "",
    ingredients: [],
    steps: "",
    tags: [],
    favorite: false,
  });


  function addIngredients(newIngredient) {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: [
        ...prevRecipe.ingredients, newIngredient
      ]
    }));
  }

  function isRecipeValid() {
    const hasTitle = !!recipe.title?.trim();
    const hasAvailability = !!recipe.availability;
    const hasCategory = !!recipe.category
    const hasIngredients = recipe.ingredients.length > 0;
    const hasSteps = !!recipe.steps?.trim();
    return (hasTitle && hasAvailability && hasCategory && hasIngredients && hasSteps)
  }

  function handleAddRecipe(event) {
    event.preventDefault();
    if (!isRecipeValid()) return;
    props.onAddRecipe(recipe);
    props.onCancel();
  }

  return (
    <section id="formView" className="view">
      <div className="view-topbar">
        <div>
          <h2>Nueva receta</h2>
          <p>Introduce los datos principales y añade ingredientes uno por uno</p>
        </div>
        <button id="cancelRecipeFormBtn" className="btn btn-primary" type="button"
          onClick={() => { props.onCancel() }}>
          Cancelar
        </button>
      </div>
      <form id="recipeForm" className="recipe-form-card" onSubmit={handleAddRecipe}>
        <div className="form-grid">
          {/*in_titulo*/}
          <div className="field field-span-2">
            <label htmlFor="titleInput">Título</label>
            <input id="titleInput"
              type="text"
              placeholder="Ej: Pollo al horno"
              value={recipe.title}
              onChange={(event) => {
                setRecipe({
                  ...recipe,
                  title: event.target.value,
                });
              }}
            />
          </div>
          {/*in_availability*/}
          <div className="field">
            <label htmlFor="availabilitySelect">Disponibilidad</label>
            <select id="availabilitySelect"
              value={recipe.availability}
              onChange={(event) => {
                setRecipe({
                  ...recipe,
                  availability: event.target.value,
                });
              }}>
              <option value="">Selecciona una opción</option>
              <option value="menu">Menú</option>
              <option value="carta">Carta</option>
            </select>
          </div>
          {/*in_category*/}
          <div className="field">
            <label htmlFor="categorySelect">Categoría</label>
            <select id="categorySelect"
              value={recipe.category}
              onChange={(event) => {
                setRecipe({
                  ...recipe,
                  category: event.target.value,
                })
              }}>
              <option value="">Selecciona una categoría</option>
              <option value="Ensaladas y Cremas">Ensaladas y Cremas</option>
              <option value="Legumbres, Guisos y Sopas">Legumbres, Guisos y Sopas</option>
              <option value="Arroces y Pastas">Arroces y Pastas</option>
              <option value="Carnes y Aves">Carnes y Aves</option>
              <option value="Pescados y Mariscos">Pescados y Mariscos</option>
              <option value="Salsas y Aderezos">Salsas y Aderezos</option>
              <option value="Postres y Repostería">Postres y Repostería</option>
            </select>
          </div>
          {/*in_steps*/}
          <div className="field field-span-2">
            <label htmlFor="stepsInput">Preparación</label>
            <textarea
              id="stepsInput"
              rows="7"
              placeholder="Escribe los pasos de la receta..."
              value={recipe.steps}
              onChange={(event) => {
                setRecipe({
                  ...recipe,
                  steps: event.target.value
                });
              }}
            ></textarea>
          </div>
          {/*in_tags*/}
          <div className="field field-span-2">
            <label htmlFor="tagsSelect">Tags</label>
            <select id="tagsSelect" multiple size="5"
              value={recipe.tags}
              onChange={(event) => {
                const selectedTags = Array.from(
                  event.target.selectedOptions,
                  (options) => options.value
                );
                setRecipe({
                  ...recipe,
                  tags: selectedTags,
                })
              }}>
              <option value="picante">picante</option>
              <option value="frio">frio</option>
              <option value="caliente">caliente</option>
              <option value="sin gluten">sin gluten</option>
              <option value="sin lactosa">sin lactosa</option>
            </select>
            <small className="hint">Mantén pulsado Ctrl o Cmd para seleccionar varios.</small>
          </div>
        </div>

        <IngredientsCard onAddIngredient={addIngredients} />

        <ul id="tempIngredientsList" className="temp-ingredients-list">
          {/*render*/}
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              <span>
                {ingredient.name} - {ingredient.qty} {ingredient.unit}
              </span>
            </li>
          ))}
        </ul>


        <div className="form-footer">
          <label className="check-row">
            <input id="favoriteCheckbox" type="checkbox"
              checked={recipe.favorite}
              onChange={(event) => {
                setRecipe({
                  ...recipe,
                  favorite: event.target.checked
                })
              }} />
            <span>Marcar como favorita</span>
          </label>

          <button id="addRecipeBtn" className="btn btn-primary" type="submit">
            Guardar receta
          </button>
        </div>
      </form>
    </section>

  )
};
export default RecipeForm;