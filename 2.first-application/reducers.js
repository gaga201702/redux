const recipesReducer = (recipes = [], action) => {
  switch (action.type) {
    case ADD_RECIPE:
      const newRecipe = { name: action.name };
      return recipes.concat(newRecipe);

    case SET_RECIPES:
      return action.payload.recipes;
  }

  return recipes;
};

const ingredientsReducer = (ingredients = [], action) => {
  return ingredients;
}

//rootReducer : tập hợp các reducer 
const rootReducer = Redux.combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
});
