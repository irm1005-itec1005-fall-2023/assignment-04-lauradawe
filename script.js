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
let todoListArray = [];
let todoForm = document.getElementById("form-todoEntry");
let todoList = document.getElementById("todo-item-list");
let todoInput = document.getElementById("todo-input-1");


todoList.addEventListener("click", todoListClickHandler)


function todoListClickHandler(event){

  if (event.target.tagName === "BUTTON"){
    console.log("You clicked on a button");

    console.log("The data todo id", event.target.dataset.todoID)
    if (event.target.className === "delete-btn"){

    
    var indexToRemove = event.target.dataset.todoID;

    todoListArray.splice(indexToRemove,1)
    
    }
    renderData();

  }


}
// // Handle Submit Form
todoForm.addEventListener("submit", handleTodoForm);

function handleTodoForm(event) {

  // Prevent the default behavior of the form`
  event.preventDefault();


  // This is what you do in add to do app
  // addTodoItem(superHeroInput.value);

  todoListArray.push(todoInput.value);

  // Clear the input
  todoForm.reset();

  // Draw the list
  renderData();
}


// Render the data to the page
function renderData() {

  console.log("Render Data", todoListArray);

  // Clear the list
  todoList.innerHTML = "Let's get those things done. Enter something you want done above";

  for (let i=0; i < todoListArray.length ; i++ ){
    let tempListItem = document.createElement("li");

    tempListItem.textContent = todoListArray[i];

    let tempButton = document.createElement("button");

    tempButton.className = "mark-done-btn";
    tempButton.textContent = "Mark Done!";
    tempButton.dataset.todoID = i;

    tempListItem.prepend(tempButton);

    let tempButton2 = document.createElement("button");

    tempButton2.className = "delete-btn";
    tempButton2.textContent = "Delete!";
    tempButton2.dataset.todoID = i;

    tempListItem.appendChild(tempButton2);

    todoList.appendChild(tempListItem);

  }
}




