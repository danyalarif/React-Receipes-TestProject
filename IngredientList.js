import React from 'react'
import Ing from './Ing'

export default function IngredientList({ingredients}) {
    const ing = ingredients.map(ingredient => {
        return <Ing key={ingredient.id} {...ingredient} />
     })
    return (
        <div className='ingredient-grid'>
            {ing}
        </div>
    )
}
