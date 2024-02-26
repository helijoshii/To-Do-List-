const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("Enter task");
    }
    else{
        let li = document.createElement("li");
        li.classList.add("two");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");;
        span.classList.add("one");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

inputBox.addEventListener("keydown",(e)=>
{
    if(e.key==="Enter")
    {
        addTask();
    }
});

showTask();