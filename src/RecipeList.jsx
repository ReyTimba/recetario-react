//import { useState } from "react";
function RecipeList() {
    //const [recipe, setRecipe] = useState([]);
    return (

        <section class="recipes-card">
            <div class="section-head section-head-inline">
                <div>
                    <h2>Recetas</h2>
                    <p>Tu lista principal</p>
                </div>
            </div>

            <ul id="recipesList" class="recipes-list">

            </ul>
        </section>
    )
};
export default RecipeList;