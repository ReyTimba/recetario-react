function RecipeList({ recipes, onDetails }) {



    return (

        <section className="recipes-card">
            <div className="section-head section-head-inline">
                <div>
                    <h2>Recetas</h2>
                    <p>Tu lista principal</p>
                </div>
            </div>

            <ul id="recipesList" className="recipes-list">
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <span>{recipe.title}</span>
                        <button data-id={recipe.id}
                        onClick={() => {
                            onDetails(recipe.id);                            
                        }}
                        
                        >Detalles</button>
                    </li>
                ))}
            </ul>
        </section>
    )
};
export default RecipeList;