import React from "react";
import AiRecipe from "./AiRecipe";
import { getRecipeFromMistral } from "../../ai";

function Main(){
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");

    const ingredientItems = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ));

    async function getRecipe(){
        const generatedRecipe = await getRecipeFromMistral(ingredients);
        setRecipe(generatedRecipe);
    }

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients,newIngredient]);
    }
    return (
        <main>
            <form action={addIngredient} className="main-form">
                <input 
                type="text" 
                name='ingredient' 
                aria-label='add-ingredient' 
                placeholder="e.g. Rice"
                />
                <button>+ Add ingredient</button>
            </form>
            {ingredients.length > 0 && <section className="recipe-section">
                <h1>Available ingredients :</h1>
                <ul className="ingredient-list">
                    {ingredientItems}
                </ul>
                {ingredients.length >= 4 ? <div className="get-recipe-container">
                    <div>
                        <h3>Shall i cook it up for you ?</h3>
                        <p>Generates a recipe from the list of ingredients</p>
                    </div>
                    <button onClick={getRecipe}>Cook it Up</button>
                </div> : 
                <div className="insufficient-ingredients">
                    <h1>Insufficient ingredients</h1>
                    <p>Add at least 4 ingredients to generate a recipe</p>
                </div>
                }
            </section>}
            {recipe ? <AiRecipe recipe={recipe}/> : null}
        </main>
    );
}

export default Main;