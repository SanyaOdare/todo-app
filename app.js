// select all elements
const inputBox = document.querySelector(".input-field input");
const addBtn = document.querySelector(".input-field button");

inputBox.onkeyup = () => {
  let userData = inputBox.value; //get user's entered input value
  if(userData.trim() != 0) { // if user input values aren't only spaces
    addBtn.classList.add("active"); // activate the add button
  } else {
    addBtn.classList.remove("active"); // deactivate the add button
  }
}

// if user click on add button
addBtn.onclick = () => {
  let userData = inputBox.value; //get user's entered input value
  let getLocalStorage = localStorage.getItem("New Todo"); // get local storage
  if(getLocalStorage == null) { // if local storage is null
    listArr = []; // create a blank array
  } else {
    listArr = JSON.parse(getLocalStorage); // convert JSON format to JavaScript object
  }
  listArr.push("Hello world!"); // add user data
  localStorage.setItem("New Todo", JSON.stringify(listArr)); // convert JavaScript object to JSON format
}

function showTasks() {
  let getLocalStorage = localStorage.getItem("New Todo"); // get local storage
  if(getLocalStorage == null) { // if local storage is null
    listArr = []; // create a blank array
  } else {
    listArr = JSON.parse(getLocalStorage); // convert JSON format to JavaScript object
  }
  let newLiTag = "";
  listArr.forEach((element, index) => {

  });
}