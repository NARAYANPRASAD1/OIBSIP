const inputbox = document.getElementById("inputbox");
const listoftask = document.getElementById("listoftask");

function addlistoftask(){
    if(inputbox.value === ''){
        alert("You must write your task...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listoftask.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listoftask.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listoftask.innerHTML);
}
function showTask(){
    listoftask.innerHTML = localStorage.getItem("data");
}
showTask();