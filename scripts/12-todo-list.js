const todoList = [{
  name: 'Walk 5000 steps today',
  dueDate: '2022-10-2'
}];

//To show what is inside the list.
renderTodoList();

//render is like to show something in the page.
function renderTodoList () {
  let todoListHTML = '';

  // this is the same code of the forEach loop below.
  // for (let i=0; i < todoList.length; i++) {
    // const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;

  todoList.forEach(function(todoObject, i) {
    // instead of using the next 2 lines of code, use 'destructuring'.
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject; //this is a shortcut called 'destructuring'.

    
    const html = `<div>${name}</div>
                    <div>${dueDate}</div>
                    <button onclick="
                      todoList.splice(${i}, 1);
                      renderTodoList();
                    " class="delete-todo-button">Delete</button>
                    `;

      todoListHTML += html;
  });
  console.log(todoListHTML);
  
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}


function addToDo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-date-input');

  // get the value from the INPUT variable
  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  // if nothing is entered, alert the user!
  if (name === '') {
    alert('You must write something to add')
  } else {
    //add the value or data that is entered into Object Array. 
    todoList.push({name, dueDate});
  }

  //reset or clears the text inside the INPUT table whenever a value is entered. 
  inputElement.value = '';
  console.log(todoList);
  renderTodoList();
}