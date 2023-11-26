/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appID = "app";
const headingText = "TADA!  ...a magical To Do manager. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.prepend(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();


// My code starts here

// Create our variables
let todoItems = [];
let idCounter = 0;
//let todoListArray = [];
let todoForm = document.getElementById("form-todoEntry");
let todoList = document.getElementById("todo-item-list");
let todoInput = document.getElementById("todo-input-1");
let todoClearBtn = document.getElementById("clear-btn");



// Handle Submit Form
todoForm.addEventListener("submit", handleTodoForm);

function handleTodoForm(event) {

  event.preventDefault();

  addToDoItem(todoInput.value);

  // Clear the input
  todoForm.reset();

  // Draw the list
  renderData();
}


todoList.addEventListener("click", todoListClickHandler);

function todoListClickHandler(event){

  if (event.target.tagName === "BUTTON"){
    console.log("You clicked on a button");

    console.log("The data todo id", event.target.dataset.todoListId)
    if (event.target.className === "delete-btn"){
      var listIdToRemove = event.target.dataset.todoListId;

      removeToDoItem(todoItems[listIdToRemove].id);
    }
    else if (event.target.className === "mark-done-btn"){
      var listIdToMarkDone = event.target.dataset.todoListId;

      markToDoItemAsCompleted(todoItems[listIdToMarkDone].id);
    }
    renderData();

  }
}

todoClearBtn.addEventListener("click", clearButtonClickHandler);

function clearButtonClickHandler(event){
  clearCompletedTasks();
  renderData();
}

// Render the data to the page
function renderData() {

  // Clear the list
  todoList.innerHTML = "";

  for (let i=0; i < todoItems.length ; i++ ){
    let tempListItem = document.createElement("li");

    tempListItem.textContent = todoItems[i].text;

    let tempButton = document.createElement("button");

    tempButton.className = "mark-done-btn";
    tempButton.textContent = "Mark Done!";
    tempButton.dataset.todoListId = i;

    tempListItem.prepend(tempButton);

    let tempButton2 = document.createElement("button");

    tempButton2.className = "delete-btn";
    tempButton2.textContent = "Delete!";
    tempButton2.dataset.todoListId = i;

    tempListItem.appendChild(tempButton2);

    todoList.appendChild(tempListItem);

  }
  //console.log(todoItems);
  //console.log(todoList);
}

/*  ------------------------------
 Todo Array Functions from Assignment 03
    ------------------------------    */

function addToDoItem(text) {
  // Implement the logic to add a task here
  
  let todo =
  {
    id: idCounter,
    text: text,
    completed: false,
  };

  todoItems.push(todo);

  idCounter = idCounter + 1;
}

function removeToDoItem(todoId) {

  for (let i = 0; i < todoItems.length; i = i + 1) {
    if (todoItems[i].id == todoId) {
      for (let j = i; j < todoItems.length; j = j + 1)
      {
        todoItems[j] = todoItems[j+1];
      }
      todoItems.pop();
    }
  }

  //  let x = todoItems.splice(todoId,1);
}

function markToDoItemAsCompleted(todoId) {

  for (let i = 0; i < todoItems.length; i = i + 1) {
    if (todoItems[i].id == todoId) {
      todoItems[i].completed = true;
    }
  }
 console.log("I tried to mark item done!")
}

function deleteToDoItem(todoId) {
  // Implement the logic to remove a task here

  let isAMatch = false;

  for (let i = 0; i < todoItems.length; i = i + 1) {
    if (todoItems[i].id == todoId) {
      for (let j = i; j < todoItems.length; j = j + 1)
      {
        todoItems[j] = todoItems[j+1];
      }
      todoItems.pop();

      isAMatch = true;

      //const x = todoItems.splice(i,1);
    }    
  }
  return isAMatch;
}

function clearCompletedTasks() {
  // Implement the logic to clear completed tasks here

  let isAMatch = false;

  for (let i = 0; i < todoItems.length; i = i + 1) {
    if (todoItems[i].completed == true) {
      for (let j = i; j < todoItems.length; j = j + 1)
      {
        todoItems[j] = todoItems[j+1];
      }
      todoItems.pop();
      i = i - 1;

      //const x = todoItems.splice(i,1);
      //console.log(todoItems);
      isAMatch = true;
    }    
  }
  return isAMatch;
}




