taskInput.addEventListener("keydown",(event)=>{
   if(event.key === "Enter")
    addTask();
})

function addTask(){
    var taskInput = document.getElementById("taskInput");
    var listTask = document.getElementById("listTask");

    var li = document.createElement("li");
    li.innerHTML = taskInput.value;
    var deleteButton = document.createElement("span");
    deleteButton.innerHTML = "&#x2716";
    deleteButton.addEventListener("click",()=>{
        li.remove();
    })

    li.appendChild(deleteButton);
    listTask.appendChild(li);
    taskInput.value = "";
}