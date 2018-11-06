const logMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  console.log(`Action: ${ action.type }`);

  next(action);
};

const URL = 'https://s3.amazonaws.com/500tech-shared/db.json';//hoặc db.json

//sử dụng axion đề fetch data
function fetchData(url, callback) {
  axios.get(url)
    .then(callback)
    .catch((err) => console.log(`Error fetching recipes: ${ err }`))
}

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type === FETCH_RECIPES) {
    fetchData(URL, ({ data }) => dispatch(setRecipes(data)));
  }

  next(action);
};
