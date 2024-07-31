import { IngredientsType, InstructionsType, NutritionsType, PreparInfoType, StringType } from "../types";

const omeletteTitle: StringType = "Simple Omelette Recipe";
const omelettedescription: StringType = "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.";
const preparTime: StringType = "Preparation time";
const preparInfo: PreparInfoType[] = [
    {
        id: 1, 
        bold: "Total:", 
        normal: "Approximately 10 minutes"
    },
    {
        id: 2, 
        bold: "Preparation:", 
        normal: "5 minutes"
    },
    {
        id: 3, 
        bold: "Cooking:", 
        normal: "5 minutes"
    },
];
const ingredientTitle: StringType = "Ingredients";
const ingredients: IngredientsType[] = [
    {
        id: 1,
        text: "2-3 large eggs"
    },
    {
        id: 2,
        text: "Salt, to taste"
    },
    {
        id: 3,
        text: "Pepper, to taste"
    },
    {
        id: 4,
        text: "1 tablespoon of butter or oil"
    },
    {
        id: 5,
        text: "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
    },
]

const instructionTitle: StringType = "Instructions";
const instructions: InstructionsType[] = [
    {
        id: 1,
        bold: "Beat the eggs:",
        normal: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
    },
    {
        id: 2,
        bold: "Heat the pan:",
        normal: "Place a non-stick frying pan over medium heat and add butter or oil."
    },
    {
        id: 3,
        bold: "Cook the omelette:",
        normal: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
    },
    {
        id: 4,
        bold: "Add fillings (optional):",
        normal: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
    },
    {
        id: 5,
        bold: "Fold and serve:",
        normal: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
    },
    {
        id: 6,
        bold: "Enjoy:",
        normal: "Serve hot, with additional salt and pepper if needed."
    },
]
const nutritionTitle: StringType = "Nutrition";
const nutritionInfo: StringType = "The table below shows nutritional values per serving without the additional fillings."
const nutritions: NutritionsType[] = [
    {
        id: 1,
        serving: "Calories",
        value: "277kcal",
    },
    {
        id: 2,
        serving: "Carbs",
        value: "0g",
    },
    {
        id: 3,
        serving: "Protein",
        value: "20g",
    },
    {
        id: 4,
        serving: "Fat",
        value: "22g",
    },
    
]

export {
    omeletteTitle,
    omelettedescription,
    preparTime,
    preparInfo,
    ingredientTitle,
    ingredients,
    instructionTitle,
    instructions,
    nutritionInfo,
    nutritionTitle,
    nutritions
}