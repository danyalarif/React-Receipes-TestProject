import React , { useContext } from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from './App'


export default function Recipe(props) { 
  const {id,name,CookTime,serving,instructions,ingredients} = props
  const {handleDelRecipe} = useContext(RecipeContext);
  return (
    <div className='recipe'>
        <div className='main_heading'>
            <h3 className='title'>{name}</h3>
        </div>
        <div>
            <button className='btn btn--primary mr-1'>Edit</button>
            <button 
                className='btn btn--danger'
                onClick={() => handleDelRecipe(id)}
                >
                    Delete
            </button>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Cook Time:</span>
            <span className='recipe__value'>{CookTime}</span>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Servings:</span>
            <span>{serving}</span>
        </div>
        <div className='recipe__row'>
            <div className='recipe__label'>Instructions:</div>
            <div className='recipe__value recipe__indented '>{instructions}</div>
        </div>
        <div className='recipe__row'>
            <div className='recipe__label'>Ingredients:</div>
            <div className='recipe__value recipe__indented'>
            <IngredientList ingredients = {ingredients}/>
            </div>
        </div>
    </div>
  )
}
