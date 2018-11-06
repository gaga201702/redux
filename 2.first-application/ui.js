const renderRecipe = (recipe) => `<li>${ recipe.name }</li>`;

const updateUI = () => {
  //get state từ store --> fetch data về từ middleware qua createStore
  const { recipes } = store.getState();

  $('.recipes > ul').html(recipes.map(renderRecipe));
};

const handleAdd = () => {
  const $recipeName = $('.recipes > input');

  store.dispatch(addRecipe($recipeName.val()));

  $recipeName.val('');
};

const loadUI = () => {
  $('#app').append(`
    <div class="recipes">
      <h2>Recipes:</h2>
      <ul></ul>
      <input type="text" />
      <button>Add</button>
    </div>
  `);

  //cập nhật lại view: các state từ store
  store.subscribe(updateUI);

  $(document).on('click', '.recipes > button', handleAdd);

  updateUI();
};
