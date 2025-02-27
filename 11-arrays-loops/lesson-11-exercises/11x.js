// When loading the page, load from localStorage.
const todoList = JSON.parse(localStorage.getItem('todoList'));



//To show what is inside the list.
renderTodoList();

//render is like to show something in the page.
function renderTodoList () {
  let todoListHTML = '';

  for (let i=0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      const name = todoObject.name;
      const dueDate = todoObject.dueDate;

      const html = `<div>${name}</div>
                    <div>${dueDate}</div>
                    <button onclick="
                      todoList.splice(${i}, 1);
                      renderTodoList();
                      
                      // Whenever we update the todo list, save in localStorage.
                      saveTodoList();" 
                      class="delete-todo-button">Delete</button>
                    `;

      todoListHTML += html;
  
      
  }
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

  //add the value or data that is entered into Object Array. 
  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name, 
    dueDate
  });

  //reset the text inside the INPUT table
  inputElement.value = '';
  console.log(todoList);
  renderTodoList();
  
  // Whenever we update the todo list, save in localStorage.
  saveTodoList();
}

// Function to save the todo list in local storage
function saveTodoList() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}