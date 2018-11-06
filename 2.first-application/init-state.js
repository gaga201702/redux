

const initState = {
    "recipes": [
      {
        "name": "Omelette"
      },
      {
        "name": "Waffle"
      }
    ],
    "ingredients": [
      {
        "name": "Eggs",
        "quantity": 2,
        "measure": "large",
        "recipe": "Omelette"
      },
      {
        "name": "Eggs",
        "quantity": 1,
        "measure": "large",
        "recipe": "Waffle"
      },
      {
        "name": "Milk",
        "quantity": 1,
        "measure": "cups",
        "recipe": "Waffle"
      },
      {
        "name": "Sugar",
        "quantity": 2,
        "measure": "tbsp",
        "recipe": "Waffle"
      }
    ]
  }



  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_RECIPE':
        return Object.assign({}, state, {
          recipes: state.recipes.concat({ name: action.name })
           });
      case 'ADD_INGREDIENT':
        return  Object.assign({}, state, {
          ingredients: state.ingredients.concat({ name: action.name,recipe: action.recipe,quantity:action.quantity })
           });
      default:
        return state;
    }
  };
  const logMiddleware = ({ getState, dispatch }) => (next) => (action) => {
    console.log(`Action: ${ action.type }`);
   next(action);
  };

  const store = Redux.createStore(reducer, initState);

  console.log(store.getState());

  store.subscribe(() => console.log("Store changed"));
  store.dispatch({type:"abc"});
  console.log(store.getState());

  store.dispatch({ type: 'ADD_RECIPE', name: 'Pancake' });
  console.log(store.getState());

const addIngredient = (name,quantity,recipe)=>({
  type:'ADD_INGREDIENT',name,quantity,recipe
});
store.dispatch(addIngredient('a',123,'b'));
console.log(store.getState());


