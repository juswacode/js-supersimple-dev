const todoList = [];

//To show what is inside the list.
renderTodoList();

//render is like to show something in the page.
function renderTodoList () {
  let todoListHTML = '';

  for (let i=0; i < todoList.length; i++) {
      const todo = todoList[i];
      const html = `<p>${todo}</p>`;
      todoListHTML += html;
  
      
  }
  console.log(todoListHTML);
  
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}


function addToDo() {
  const inputElement = document.querySelector('.js-name-input');

  // get the value from the INPUT variable
  const name = inputElement.value;

  //add the value or data that is entered into Array. 
  todoList.push(name);

  //reset the text inside the INPUT table
  inputElement.value = '';
  console.log(todoList);
  renderTodoList();
}