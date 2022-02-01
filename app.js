// select all elements
const inputBox = document.querySelector(".input-field input");
const addBtn = document.querySelector(".input-field button");
const todoList = document.querySelector(".todo-list");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
  let userData = inputBox.value; //get user's entered input value
  if(userData.trim() != 0) { // if user input values aren't only spaces
    addBtn.classList.add("active"); // activate the add button
  } else {
    addBtn.classList.remove("active"); // deactivate the add button
  }
}

showTasks(); // call showTasks function

// if user click on add button
addBtn.onclick = () => {
  let userData = inputBox.value; //get user's entered input value
  let getLocalStorage = localStorage.getItem("New Todo"); // get local storage
  if(getLocalStorage == null) { // if local storage is null
    listArr = []; // create a blank array
  } else {
    listArr = JSON.parse(getLocalStorage); // convert JSON format to JavaScript object
  }
  listArr.push(userData); // add user data
  localStorage.setItem("New Todo", JSON.stringify(listArr)); // convert JavaScript object to JSON format
  showTasks(); // call showTasks function
  addBtn.classList.remove("active"); // deactivate the add button
}
// add task list function - inside ul
function showTasks() {
  let getLocalStorage = localStorage.getItem("New Todo"); // get local storage
  if(getLocalStorage == null) { // if local storage is null
    listArr = []; // create a blank array
  } else {
    listArr = JSON.parse(getLocalStorage); // convert JSON format to JavaScript object
  }
  const pendingNum = document.querySelector(".pending-number");
  pendingNum.textContent = listArr.length; // li array value in pendingNum
  if(listArr.length > 0) { //if array length is greater than zero
    deleteAllBtn.classList.add("active"); //activate the ClearAll button
  } else {
    deleteAllBtn.classList.remove("active"); // deactivate the ClearAll button
  }
  let newLiTag = "";
  listArr.forEach((element, index) => {
    newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; // add new li tag inside ul tag
  inputBox.value = ""; // clear input field once task is added
}

// delete task function
function deleteTask(index) {
  let getLocalStorage = localStorage.getItem("New Todo");
  listArr = JSON.parse(getLocalStorage);
  listArr.splice(index, 1); // delete or remove particular index li
  // remove the li again and update the local storage
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
}

// delete all tasks function
deleteAllBtn.onclick = () => {
  listArr = []; // empty an array
  // update local storage after deleting all tasks
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
}