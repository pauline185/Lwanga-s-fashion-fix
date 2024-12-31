const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    //restrict empty items
if(inputBox.value === ''){
    alert("you must write something!");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

}
inputBox.value = '';
saveData();
}
//for checking items
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    
    }
    //for deleting items
    
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");

    }

    showTask()
