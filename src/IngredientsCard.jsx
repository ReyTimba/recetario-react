import { useState } from "react";

function IngredientsCard(props) {
    const [ingredient, setIngredient] = useState({
        name: "",
        qty: "",
        unit: ""
    });

    function isIngredientValid() {
        const hasName = !!ingredient.name?.trim();
        const hasQty = !!ingredient.qty;
        const hasUnit = !!ingredient.unit;

        return (hasName && (hasQty === hasUnit));
    }

    function handleAdd() {
        if (!isIngredientValid()) return;

        props.onAddIngredient(ingredient);

        setIngredient({
            name: "",
            qty: "",
            unit: ""
        });
    }

    return (
        <section className="ingredients-card">
            <div className="section-head section-head-inline">
                <div>
                    <h3>Ingredientes</h3>
                    <p>Añádelos antes de guardar la receta</p>
                </div>
            </div>

            <div className="ingredient-entry-grid">
                <div className="field">
                    <label htmlFor="ingredientNameInput">Ingrediente</label>
                    <input id="ingredientNameInput"
                        type="text"
                        placeholder="Ej: Pollo"
                        value={ingredient.name}
                        onChange={(event) => {
                            setIngredient({
                                ...ingredient,
                                name: event.target.value
                            });
                        }} />
                </div>

                <div className="field">
                    <label htmlFor="ingredientQtyInput">Cantidad</label>
                    <input id="ingredientQtyInput"
                        type="number"
                        min="1"
                        step="any"
                        placeholder="500"
                        value={ingredient.qty}
                        onChange={(event) => {
                            setIngredient({
                                ...ingredient,
                                qty: event.target.value
                            });
                        }} />
                </div>

                <div className="field">
                    <label htmlFor="ingredientUnitSelect">Unidad</label>
                    <select id="ingredientUnitSelect"
                        value={ingredient.unit}
                        onChange={(event) => {
                            setIngredient({
                                ...ingredient,
                                unit: event.target.value
                            });
                        }}>
                        <option value="">Sin unidad</option>
                        <option value="gr">gr</option>
                        <option value="kg">kg</option>
                        <option value="ml">ml</option>
                        <option value="l">l</option>
                        <option value="unidad">unidad</option>
                        <option value="cucharada">cucharada</option>
                        <option value="cucharadita">cucharadita</option>
                    </select>
                </div>

                <div className="ingredient-entry-action">
                    <button id="addIngredientBtn"
                        className="btn btn-secondary"
                        type="button"
                        onClick={handleAdd}>
                        Añadir
                    </button>
                </div>
            </div>




        </section>
    )
}

export default IngredientsCard;