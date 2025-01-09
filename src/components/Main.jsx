import React from "react";

function Main(){
    const [ingredients, setIngredients] = React.useState([]);

    const ingredientItems = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ));

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
            <ul>
                {ingredientItems}
            </ul>
        </main>
    )
}

export default Main;