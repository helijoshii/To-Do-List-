const inputBox = document.getElementById("input-box");                     // input-box is the id of the input box
const listContainer = document.getElementById("list-container");           // list-container is the id of the ul
const button = document.getElementById("add-task-btn");                    // add-task-btn is the id of the button

function addTask() {                                                      // function to add task
  if (inputBox.value === "") {                                              
    alert("Enter task");
  } else {
    let li = document.createElement("li");                              // creating li element
    li.classList.add("two");                                         // adding class to the li element           
    li.innerHTML = inputBox.value;                            // adding the value of the input box to the li element
    listContainer.appendChild(li);                                  // appending the li element to the ul
    let span = document.createElement("span");
    span.classList.add("one");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";                                          
  saveData();                                                       // calling the saveData function
}

// listContainer.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//     } else if (e.target.tagName === "SPAN") {
//       e.target.parentElement.remove();
//       saveData();
//     }
//   },
//   false
// );

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);            // saving the data to the local storage
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");           // displaying the data from the local storage
};

inputBox.addEventListener("input", (e) => {
  e.target.value = e.target.value.trim();                           // removing the white spaces from the input
  if (!!e.target.value) {                                           // !! converts the value to boolean
    button.classList.add("!bg-[#8a7862]");
  } else {
    button.classList.remove("!bg-[#8a7862]");
  }
});

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {                                          // if the enter key is pressed
    addTask();
  }
});

showTask();
