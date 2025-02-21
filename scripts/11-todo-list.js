const todoList = [{
  name: 'Read scriptures',
  dueDate: '2022-10-2'
}];

//To show what is inside the list.
renderTodoList();

//render is like to show something in the page.
function renderTodoList () {
  let todoListHTML = '';

  for (let i=0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      const name = todoObject.name;
      const dueDate = todoObject.dueDate;

      const html = `<p>
                      ${name} ${dueDate}
                      <button onclick="
                      todoList.splice(${i}, 1);
                      renderTodoList();
                      ">Delete</button>
                    </p>`;

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
  todoList.push({name, dueDate
  });

  //reset the text inside the INPUT table
  inputElement.value = '';
  console.log(todoList);
  renderTodoList();
}