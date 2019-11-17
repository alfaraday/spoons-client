const recipes = [
  {
    id: 1,
    name: `Spring Asparagus Pancetta Hash`,
    time: `1 hour`,
    servings: 4,
    source: `<a href='https://smittenkitchen.com/2010/05/spring-asparagus-pancetta-hash/'>Smitten Kitchen</a>`,
    ingredients: [
      {
        amount: 0.25,
        units: `pounds`,
        namePrep: `pancetta, cut into 1/4-inch dice`,
      },
      {
        amount: 1,
        units: `pounds`,
        namePrep: `Yukon gold potatoes, peeled and cut into a 1/2-inch dice`,
      },
      {
        amount: 1,
        units: null,
        namePrep: `small yellow onion, chopped small`,
      },
      {
        amount: 0.5,
        units: `pounds`,
        namePrep: `asparagus, tough ends trimmed and cut into 1-inch segments`,
      },
      {
        amount: null,
        units: null,
        namePrep: `Salt and pepper to taste`,
      },
    ],
    steps: [
      {
        position: 1,
        instructions: `Heat a 12-inch cast iron frying pan over medium heat. Fry the pancetta, turning it frequently so that it browns and crisps on all sides; this takes about 10 minutes. Remove it with a slotted spoon and drain it on paper towels. Leave the heat on and the renderings in the pan. (With a well-seasoned cast iron, this should be all the fat you need to cook the remainder of the hash. If you’re not using a cast iron, you might need to add a tablespoon or so of oil; if you’ve skipped the pork, you’ll want to start with 2 tablespoons oil.)`,
      },
      {
        position: 2,
        instructions: `Add the potatoes don’t move them for a couple minutes. Use this time to season them well with salt and pepper. Once they’ve gotten a little brown underneath, begin flipping and turning them, then letting them cook again for a few minutes. The idea is not to fight them off the frying pan, once they’ve gotten a little color, it’s easier to flip them and you’ve gotten closer to your goal of getting them evenly browned.`,
      },
      {
        position: 3,
        instructions: `When the potatoes are about three-fourths as crisped and brown as you’d like them — this takes about 15 minutes — add the onion. (I add this now, not earlier, because I find it often burns before the potatoes are done.) Cook for an additional 5 minutes. Add the asparagus, cover the pan and cook for 5 to 8 minutes, or until crisply cooked. (Skinny asparagus will take just 5 minutes; thicker asparagus will take longer.) Remove the lid, return the pancetta to the pan for another minute, to reheat. Taste for seasoning and adjust if needed. Serve immediately.`,
      },
    ],
    tags: [
      `breakfast`,
      `dinner`
    ],
    notes: `Serve with a fried egg, dabs of goat cheese, or green onions.`,
  },
  {
    id: 2,
    name: `Lentils With Pancetta and Cream`,
    time: `1 hour`,
    servings: 4,
    source: `<a href='https://cooking.nytimes.com/recipes/11881-lentils-with-pancetta-and-cream'>NYT Cooking</a>`,
    ingredients: [
      {
        amount: 1,
        units: `cups`,
        namePrep: `dried lentils, preferably French Le Puy variety`,
      },
      {
        amount: 2,
        units: `sprigs`,
        namePrep: `fresh sage`,
      },
      {
        amount: 2,
        units: `ounces`,
        namePrep: `pancetta, finely diced`,
      },
      {
        amount: 0.25,
        units: `cups`,
        namePrep: `chopped shallots`,
      },
      {
        amount: 0.5,
        units: `cups`,
        namePrep: `heavy cream`,
      },
      {
        amount: null,
        units: null,
        namePrep: `Salt and freshly ground black pepper`,
      },
    ],
    steps: [
      {
        position: 1,
        instructions: `Place lentils and sage in a heavy saucepan, cover with water to a depth of one inch, bring to a boil, then lower heat and simmer gently until the lentils are just tender, about 40 minutes. Drain the lentils.`,
      },
      {
        position: 2,
        instructions: `Cook the pancetta in a large skillet, preferably nonstick, until it is lightly browned. Add the shallots and cook over medium heat until the shallots are golden, about seven minutes. Stir in the cream, bring to a boil, lower heat and add the drained lentils.`,
      },
      {
        position: 3,
        instructions: `Cook over low heat, stirring, about 10 minutes, until the cream has thickened enough to cling to the lentils. Season to taste with salt and pepper and serve.`,
      },
    ],
    tags: [
      `easy`,
      `dinner`,
    ],
    notes: `Serve on toasted bread.`,
  }
];

export default recipes;