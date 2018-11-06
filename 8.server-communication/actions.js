const fetchRecipes = () => ({
  type: API_REQUEST,
  payload: {
    url: 'https://api.myjson.com/bins/xfcbq',//hoặc db.json
    next: FETCH_RECIPES
  }
});
