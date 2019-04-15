import { createStore } from "redux";

let initialState = {
  name: "",
  category: "",
  authorFirst: "",
  authorLast: "",
  ingredients: [],
  instructions: [],
  recipes: [],
  id: -1
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const AUTHOR_FIRST = "AUTHOR_FIRST";
export const AUTHOR_LAST = "AUTHOR_LAST";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS";
export const UPDATE_RECIPES = "UPDATE_RECIPES";
export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const RESET_FIELDS = "RESET_FIELDS";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(state);
  console.log(state.recipes);
  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload };
    case UPDATE_CATEGORY:
      return { ...state, category: payload };
    case AUTHOR_FIRST:
      return { ...state, authorFirst: payload };
    case AUTHOR_LAST:
      return { ...state, authorLast: payload };
    case UPDATE_INGREDIENTS:
      const newIngredients = [...state.ingredients, payload];
      return { ...state, ingredients: newIngredients };
    case UPDATE_INSTRUCTIONS:
      const newInstructions = [...state.instructions, payload];
      return { ...state, instructions: newInstructions };
    case UPDATE_RECIPES:
      const {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      } = state;
      const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions,
        id: state.recipes.length
      };

      console.log(recipe, state.recipes);

      const newRecipes = [...state.recipes, recipe];
      return { ...state, recipes: newRecipes };

    case REMOVE_RECIPE:
      const { id } = state;
      const updatedRecipes = [
        ...state.recipes.slice(0, id),
        ...state.recipes.slice(id + 1)
      ];
      return { ...state, recipes: updatedRecipes };
    case RESET_FIELDS:
      return {
        ...state,
        name: "",
        category: "",
        authorFirst: "",
        authorLast: "",
        ingredients: [],
        instructions: []
      };
    default:
      return state;
  }
}

export default createStore(reducer);
