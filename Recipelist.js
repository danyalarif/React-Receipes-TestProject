import React ,{useContext} from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function Recipelist({Recipes}) {
  const {handleAddRecipe} = useContext(RecipeContext)
const Rec = Recipes.map(recipe => {

    return <Recipe key={recipe.id} {...recipe} />
 }
     )
  return (
    <div className='Recipe-list'>
        {Rec}
        <div className='Add_More_Button'>
        <button 
          className='btn btn--primary'
          onClick={handleAddRecipe}
          >
            Add more</button>
        </div>
    </div>
  )
}
