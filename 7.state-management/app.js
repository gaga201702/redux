const initialState = {
  recipes: {},
  users: {}
};

const store = Redux.createStore(reducer, initialState);

loadUI();

const normalizeUsers = data => {
  const users = {};

  data.forEach(recipe => {
    users[recipe.author.id] = recipe.author;
    recipe.author = recipe.author.id;
  });

  return users;
};

const normalizeRecipes = data => {
  const recipes = {};

  data.forEach(recipe => recipes[recipe.id] = recipe);

  return recipes;
};

const normalizeData = response => {
  store.dispatch({ type: 'SET_USERS', payload: normalizeUsers(response.data) });
  store.dispatch({ type: 'SET_RECIPES', payload: normalizeRecipes(response.data) });
};

//thay bằng server/recipes.json
axios.get('https://api.myjson.com/bins/10eicm')
  .then(normalizeData);
