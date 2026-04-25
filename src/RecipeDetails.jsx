import { useState } from "react";

function RecipeDetails({ goToList, selectRecipe, deleteRecipe }) {
    const [base, setBase] = useState(1);
    const [target, setTarget] = useState(1);

    if (!selectRecipe) {
            return null;
        }

    return (
        
        <section id="recipeDetailView" className="view">
            <div className="view-topbar">
                <button id="backToListBtn" className="btn btn-ghost" type="button"
                    onClick={goToList}>
                    Volver
                </button>

                <div className="detail-actions">
                    <button id="editRecipeBtn" className="btn btn-secondary" type="button">
                        Editar
                    </button>
                    <button id="deleteRecipeBtn" className="btn btn-danger" type="button"
                    onClick={() => {
                        deleteRecipe(selectRecipe.id);
                    }}>
                        Eliminar
                    </button>
                </div>
            </div>

            <article className="detail-card">
                <header className="detail-header">
                    <div className="detail-title-block">
                        <h2 id="recipeDetailTitle">
                            {selectRecipe.title}
                        </h2>

                        <div className="detail-meta">
                            <span id="recipeDetailCategory" className="badge">{selectRecipe.category}</span>
                            <span id="recipeDetailAvailability" className="badge">{selectRecipe.availability}</span>
                        </div>
                    </div>

                    <label className="check-row">
                        <input id="recipeDetailFavoriteCheckbox" type="checkbox" />
                        <span>Favorita</span>
                    </label>
                </header>

                <section className="detail-section">
                    <div className="section-head section-head-inline">
                        <div>
                            <h3>Escalado</h3>
                            <p>Ajusta cantidades según raciones</p>
                        </div>
                    </div>

                    <div className="scale-box">
                        <div className="field">
                            <label htmlFor="recipeScaleBaseInput">Raciones base</label>
                            <input id="recipeScaleBaseInput"
                                type="number"
                                min="1"
                                step="1"
                                value={base}
                                onChange={(event) => {
                                    setBase(Number(event.target.value))
                                }}
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="recipeScaleTargetInput">Raciones deseadas</label>
                            <input id="recipeScaleTargetInput"
                                type="number"
                                min="1"
                                step="1"
                                value={target}
                                onChange={(event) => { setTarget(Number(event.target.value)) }}
                            />
                        </div>

                        <div className="scale-result" id="recipeScaleRatio">
                            Escala: x1
                        </div>
                    </div>
                </section>

                <section className="detail-grid">
                    <section className="detail-section">
                        <h3>Ingredientes</h3>
                        <ul id="recipeDetailIngredientsList" className="detail-list" >
                            {/*<!-- render -->*/}
                            {selectRecipe?.ingredients?.map(({ id, name, qty, unit }) => {
                                return (
                                <li key={id}>{name} - {qty}{unit}</li>
                            );
                            })}
                        </ul>
                    </section>

                    <section className="detail-section">
                        <h3>Tags</h3>
                        <ul id="recipeDetailTagsList" className="tags-list">
                            {/*<!-- render -->*/}

                        </ul>
                    </section>
                </section>

                <section className="detail-section">
                    <h3>Preparación</h3>
                    <div id="recipeDetailSteps" className="recipe-steps">
                        {/*<!-- render -->*/}
                        <p>{selectRecipe.steps}</p>
                    </div>
                </section>

                <section className="detail-section">
                    <div className="section-head section-head-inline">
                        <div>
                            <h3>Receta enlazada</h3>
                            <p>Busca y enlaza otra receta</p>
                        </div>
                    </div>

                    <div className="link-grid">
                        <div className="field">
                            <label htmlFor="linkRecipeSearchInput">Buscar receta</label>
                            <input
                                id="linkRecipeSearchInput"
                                type="text"
                                placeholder="Buscar por nombre..."
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="linkRecipeSelect">Seleccionar receta</label>
                            <select id="linkRecipeSelect">
                                <option value="">Selecciona una receta</option>
                            </select>
                        </div>
                    </div>

                    <div className="detail-actions">
                        <button id="linkRecipeBtn" className="btn btn-primary" type="button">
                            Enlazar
                        </button>
                        <button id="unlinkRecipeBtn" className="btn btn-ghost" type="button">
                            Quitar enlace
                        </button>
                    </div>

                    <div id="linkedRecipePreview" className="linked-recipe-preview">
                        Sin receta enlazada
                    </div>
                </section>
            </article>
        </section>
    )
}
export default RecipeDetails;