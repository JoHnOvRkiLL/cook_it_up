function Main(){
    const ingredients = ['nig1','nig2','nog3'];

    const ingredientItems = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ));

    function handleOnSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        ingredients.push(newIngredient);
        console.log(ingredients);
    }
    return (
        <main>
            <form className="main-form" onSubmit={handleOnSubmit}>
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