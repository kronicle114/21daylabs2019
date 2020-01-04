
## Challenge #20 - Bouncy Castles
There's a new attraction at this year's town festival. The organizers have decided to bring in several inflatable attractions, but they have no clue how to much blow them up. Each attraction needs to be pumped to a precise volume to achieve maximum festival fun!

The attractions are each made up of a combination of several different shapes: cones, spheres and prisms. For example, the giant inflatable duck is made up of two spheres (the body and head) and a cone (the beak) 🦆.

### ### Instructions
Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

- `sphereVolume()` will calculate the volume of a sphere given a radius
- `coneVolume()` will calculate the volume of a cone given a radius and a height
- `prismVolume()` will calculate the volume of a prism given a height, a width, and a depth

The fourth function, `totalVolume()`, will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.

Don't worry about getting the answers to the perfect precision: our tests will check to see that you're within a correct range.

Examples
Input:
```javascript
const sphere = {
  type: 'sphere',
  radius: 2
}

sphereVolume(sphere.radius) // 33.5102
```


Input:
```javascript
const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

coneVolume(cone.radius, cone.height) // 47.12385
```

Input:
```javascript
const prism = {
  type: 'prism',
  height: 3,
  width: 4,
  depth: 5
}

prismVolume(prism.height, prism.width, prism.depth) // 60
```
Input:
```javascript
const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}


const duck = [
  largeSphere,
  smallSphere,
  cone
]

totalVolume(duck) // 272318.257
```

## Challenge #21 - The Great Codeville Bake-off
The town festival is tomorrow and the organizers have only just realized that they've booked two bakeries to cater desserts, but only have one kitchen available. Instead of just choosing one bakery, let's help them figure out a way to work together.

Both of bakeries have a specialty, so they have each have a stock of specific ingredients.

Lucky for the festival organizers, we've found a recipe book in the town library with TONS of fusion recipes, unfortunately it's 1000 of pages long and we don't have much time. Let's write a function that helps determine which recipes match the ingredients that both bakeries have in stock.

### Instructions
We need to complete a function called chooseRecipe(), which will receive three parameters:

- An array of ingredients in stock at Bakery A
- An array of ingredients in stock at Bakery B
- An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)

We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.

Our `chooseRecipe()` function should return the name of the correct recipe.

Note: In the tests there will always be a single correct answer, and you will NOT need to consider special cases. For example, you do NOT need to worry about cases where one bakery has BOTH the ingredients for a recipe.

Examples
Input:
```javascript
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

const output = 'Persian Cheesecake'
```

Hint: This one is a doozy! We might want to start by creating a helper function called ingredientCheck() that will take in one bakery at a time, and as well as the recipes.ingredients array to check if the given bakery possesses any of the ingredients from that recipe.

We can use JavaScript's handy built in .includes method to easily check whether an array contains a specific value.