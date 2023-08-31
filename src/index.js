import axios from 'axios';
const URL = 'https://books-backend.p.goit.global/books/category-list';
const categoriesList = document.querySelector('.categories-list');

async function getCategories() {
  const { data } = await axios.get(URL);
  return data;
}

function createListCategory(arr) {
  return arr
    .map(
      ({ list_name }) =>
        `
     <a href="" class="categories-link"> <li class="categories-list-item">${list_name}</li></a>
  `
    )
    .join('');
}

async function getListCategories() {
  try {
    const category = await getCategories();
    categoriesList.insertAdjacentHTML(
      'beforeend',
      createListCategory(category)
    );
  } catch (err) {
    console.log('TRY-CATCH:', err);
  }
}
getListCategories();

categoriesList.addEventListener('click', e => {
  e.preventDefault();
  // console.log(e.target);
  //   if (
  //     !e.target.classList.contains('categories-list-item') &&
  //     e.target.textContent === e.target.textContent.toUpperCase()
  //   ) {
  //     console.log(e.target.textContent === e.target.textContent.toUpperCase());
  //     return;
  //   } else {
  //     e.target.classList.add('category-active');
  //   }
});
