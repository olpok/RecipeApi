import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from "../../ui/Loader";
import { useState } from 'react';
import { Button } from '../../ui/Button';

export function Ingredients({ ingredients, onDelete }) {
    return <div>
        <h1> Ingredients </h1>
        {ingredients === null ? <Loader /> : <IngredientsList ingredients={ingredients} onDelete={onDelete} />}
    </div>
}

export function IngredientsList({ ingredients, onDelete }) {
    return <ul>
        {ingredients.map(ingredient => <Ingredient key={ingredient.id} ingredient={ingredient} onDelete={onDelete} />)}
    </ul>
}

function Ingredient({ ingredient, onDelete }) {
    const [loading, setLoading] = useState(false);
    const handleDelete = async function (e) {
        e.preventDefault();
        setLoading(true);
        await onDelete(ingredient)

    }

    return <li>{ingredient.title}
        <Button type="danger" onClick={handleDelete} loading={loading}>Supprimer </Button>
    </li>
}

Ingredients.propTypes = {
    ingredients: PropTypes.array
}

