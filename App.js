import React , { useState , useEffect } from "react";
import Recipelist from "./Recipelist";
import "./css/App.css"
//import uuidv4 from 'uuid/v4'
export const RecipeContext = React.createContext();


function App() {
  const getRecipes = localStorage.getItem("Recipes");
  const [recipe,setrecipe] = useState(JSON.parse(getRecipes));
  
  useEffect(() => {
      const getRecipes = localStorage.getItem("Recipes");
      console.log(JSON.parse(getRecipes))
      if(getRecipes !== null) setrecipe(JSON.parse(getRecipes))
    } ,[]);

  useEffect(() => {
    console.log(recipe)
      localStorage.setItem("Recipes" , JSON.stringify(recipe))
      console.log('here')
    },[recipe]);
  
  function handleAddRecipe(){
    const newRecipe = {
      //id:uuidv4(),
      id : recipe.length + 1,
      name: 'Meat',
      CookTime : "10 : 00",
      serving : "3",
      instructions : "1. Add salt\n2.Add beaf",
    ingredients : [
      {
      id : 4,
      Iname : "salt",
      amount : "1 tbspn"
      },
      {
      id : 5,
      Iname : "chicken",
      amount : "1 kg"
      }
    ]
  }
    setrecipe([...recipe , newRecipe])
  }
  function handleDelRecipe(id){
    setrecipe(recipe.filter(recipe => recipe.id !== id))
  }
  
  

  const Contextvalue = {
    handleAddRecipe,handleDelRecipe
  }

  return(<RecipeContext.Provider value={Contextvalue}>
  <Recipelist 
    Recipes = {recipe}
  />
  </RecipeContext.Provider>)
}
const Recipes = [
  {
  id : 1,
  name : "Plain Chicken",
  CookTime : "10 : 00",
  serving : "3",
  instructions : "1. Add salt\n2.Add Chicken",
  ingredients : [
    {
      id : 1,
      Iname : "salt",
      amount : "1 tbspn"
    },
    {
      id : 2,
      Iname : "chicken",
      amount : "1 kg"
    }
  ]
}
,
{
  id : 2,
  name : "Craving Chicken",
  CookTime : " 5 : 00",
  serving : "5",
  instructions : "1. Add salt\n2.Add Chicken",
  ingredients : [
    {
      id : 1,
      Iname : "salt",
      amount : "1 tbspn"
    },
    {
      id : 2,
      Iname : "chicken",
      amount : "1 kg"
    }
  ]
}
]

export default App;
