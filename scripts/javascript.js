let searchForm = document.querySelector('.search-form');
let input = document.querySelector('input');
let list = document.querySelector('.todo-list');
let clearButton = document.querySelector('.clear-button');
let getItems = document.getElementsByClassName('edit-item');

function createItem(content) {
  let htmlLI = `<li  class="is-clearfix">
                  <span class="is-pulled-left">${content}</span>
                  <span onclick="editItem(event)" class="edit-item is-pulled-right">
                    <span name="check" class="check icon fas fa-home is-medium"></span>
                    <span name="edit" class="edit icon fas fa-edit is-medium"></span>
                    <span name="remove" class="remove icon fas fa-times-circle is-medium"></span>
                  </span>
                </li>`;

  list.insertAdjacentHTML('beforeend', htmlLI);
}

searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let inputText = e.target.querySelector('input');
  let captureMessage = inputText.value;
  createItem(captureMessage)
  inputText.value = ' ';
})

clearButton.addEventListener('click', () => {
  let clear = confirm("Do you really want to clear the list?");
  if (clear)  list.innerHTML = ' ';
});

function editItem(event) {
  let itemClass = event.target.classList;
  let elm = event.currentTarget.parentElement.firstElementChild;
  let elmParent = event.currentTarget.parentElement;

  if (itemClass.contains('remove')) {
    event.currentTarget.parentElement.remove();
  } else if (itemClass.contains('check')) {
    elm.style["text-decoration"] = "line-through";
  } else if (itemClass.contains('edit')) {
    let input = document.createElement('input');
    input.classList = "is-pulled-left";
    input.value = elm.textContent;
    input.onkeyup = function(e){
      if (e.key === 'Enter') {
        let item = document.createElement('span');
        item.classList = "is-pulled-left";
        item.textContent = e.target.value;
        elmParent.insertBefore(item, input);
        input.remove();
    }
    };
    event.currentTarget.parentElement.insertBefore(input, elm);
    elm.remove();
  }
}