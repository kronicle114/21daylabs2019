const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard']
const bakeryB = ['milk', 'butter', 'cream cheese']
const recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
]

const chooseRecipe = (_bakeryA, _bakeryB, _recipes) => {
    const allIngredients = [..._bakeryA, ..._bakeryB]
    let validRecipe = ''
    _recipes.forEach(recipe => {
        for (let i = 0; i < recipe.ingredients.length; i++) {
            let firstIngredient = recipe.ingredients[i]
            let secondIngredient = recipe.ingredients[i+1]
            if (allIngredients.includes(firstIngredient) && allIngredients.includes(secondIngredient)) {
                validRecipe = recipe.name
            }
        }
    });

    return validRecipe
}

console.log(chooseRecipe(bakeryA, bakeryB, recipes))