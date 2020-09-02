import React, { useState } from 'react'
import { Ingredients } from './Ingredients/Ingredients'
import { Recipes } from './Recipes/Recipes'
import { Recipe } from './Recipes/Recipe'
import { useIngredients } from '../hooks/ingredients'
import { useRecipes } from '../hooks/recipes'
import { useEffect } from 'react'

export function Site() {

    const [page, setPage] = useState('recipes')
    const {
        ingredients,
        fetchIngredients,
        deleteIngredient,
        updateIngredient,
        createIngredient,
    } = useIngredients()

    const {
        recipes,
        recipe,
        deselectRecipe,
        fetchRecipes,
        fetchRecipe,
    } = useRecipes()

    let content = null
    if (page === 'ingredients') {
        content = <Ingredients ingredients={ingredients} onDelete={deleteIngredient}
            onUpdate={updateIngredient}
            onCreate={createIngredient}
        />
    } else if (page === 'recipes') {
        content = <Recipes recipes={recipes} onClick={fetchRecipe} />
    }

    useEffect(function () {
        if (page === 'ingredients') {
            fetchIngredients()
        }
        if (page === 'recipes') {
            fetchRecipes()
        }
    }, [page, fetchIngredients])

    return <>
        <NavBar currentPage={page} onClick={setPage} />
        <div className="container">
            {recipe ? <Recipe recipe={recipe} onClose={deselectRecipe} /> : null}
            {content}
        </div>

    </>
}

function NavBar({ currentPage, onClick }) {

    const navClass = function (page) {
        let className = 'nav-item'
        if (page === currentPage) {
            className = ' active'
        }
        return className;
    }
    return <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <a href="#recipes" className="navbar-brand" onClick={() => onClick('recipes')}>Recettes</a>
        <ul className="navbar-nav mr-auto">
            <li className={navClass('recipes')}>
                <a href="#recipes" className="nav-link" onClick={() => onClick('recipes')}>Recettes</a>
            </li>
            <li className={navClass('ingrédients')}>
                <a href="#ingredients" className="nav-link" onClick={() => onClick('ingredients')}>Ingrédients</a>
            </li>
        </ul>
    </nav>

}