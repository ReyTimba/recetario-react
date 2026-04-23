function FiltersPanel() {
    return (

        <aside className="filters-card">
            <div className="section-head">
                <h2>Filtros</h2>
                <p>Encuentra recetas rápido</p>
            </div>

            <div className="filters-stack">
                <div className="field">
                    <label htmlFor="queryInput">Buscar</label>
                    <input
                        id="queryInput"
                        type="text"
                        placeholder="Título o ingrediente"
                    />
                </div>

                <div className="field">
                    <label htmlFor="filterCategorySelect">Categoría</label>
                    <select id="filterCategorySelect">
                        <option value="all">Todas</option>
                        <option value="Ensaladas y Cremas">Ensaladas y Cremas</option>
                        <option value="Legumbres, Guisos y Sopas">Legumbres, Guisos y Sopas</option>
                        <option value="Arroces y Pastas">Arroces y Pastas</option>
                        <option value="Carnes y Aves">Carnes y Aves</option>
                        <option value="Pescados y Mariscos">Pescados y Mariscos</option>
                        <option value="Salsas y Aderezos">Salsas y Aderezos</option>
                        <option value="Postres y Repostería">Postres y Repostería</option>
                    </select>
                </div>

                <div className="field">
                    <label htmlFor="filterAvailabilitySelect">Disponibilidad</label>
                    <select id="filterAvailabilitySelect">
                        <option value="all">Todas</option>
                        <option value="menu">Menú</option>
                        <option value="carta">Carta</option>
                    </select>
                </div>

                <div className="field">
                    <label htmlFor="filterTagsSelect">Tags</label>
                    <select id="filterTagsSelect" multiple size="5">
                        <option value="picante">picante</option>
                        <option value="frio">frio</option>
                        <option value="caliente">caliente</option>
                        <option value="sin gluten">sin gluten</option>
                        <option value="sin lactosa">sin lactosa</option>
                    </select>
                </div>

                <label className="check-row">
                    <input id="filterFavoritesCheckbox" type="checkbox" />
                    <span>Solo favoritas</span>
                </label>
            </div>
        </aside>
    )
};
export default FiltersPanel