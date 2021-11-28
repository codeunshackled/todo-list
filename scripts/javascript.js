let searchForm = document.querySelector('.search-form');
let input = document.querySelector('input');
let list = document.querySelector('.todo-list');

function createItem(content) {
  let htmlLI = `<li class="is-clearfix">
                  <span class="is-pulled-left">${content}</span>
                  <span class="is-pulled-right">
                    <span class="icon"><i class="fas fa-home"></i></span>
                    <span class="icon"><i class="fas fa-edit"></i></span>
                    <span class="icon"><i class="fas fa-times-circle"></i></span>
                  </span>
                </li>`;

  list.insertAdjacentHTML('beforeend', htmlLI);


  // creates element
  // inserts content into element
  // inserts element into list

}

searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let inputText = e.target.querySelector('input');
  let captureMessage = inputText.value;
  console.log(captureMessage);
  createItem(captureMessage)
  inputText.value = ' ';



})