
function createTime(){
  let spanHours = document.querySelector(".hours");
  let spanMinutes = document.querySelector(".Minutes");
  let spanSeconds = document.querySelector(".seconds");
  let spanAmPm = document.querySelector(".amPmDisp");
  
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let amPm = checkAmPm();
  
  function checkAmPm(){
    let pm = "pm";
    let am = "am";
    if(hours > 12){
      return pm;
    }else{
      return am;
    }
  }
  function checkHours() {
    if(hours < 13){
      return hours;
    }else{
      return hours - 12;
    }
  }
  function checkMinutes(){
    if(minutes < 10){
      return "0"+minutes;
    }else{
      return minutes;
    }
  }
  function checkSeconds(){
    if(seconds < 10){
      return "0"+seconds;
    }else{
      return seconds;
    }
  }
  spanHours.innerHTML =  `${checkHours()} :`;
  spanMinutes.innerHTML = `${checkMinutes()} :`;
  spanSeconds.innerHTML = `${checkSeconds()}`;
  spanAmPm.innerHTML = amPm;
}

setInterval(createTime, 10);
let addTask = document.getElementById("add");
let addTaskInput = document.getElementById("inputBox");
let displayTaskContainer = document.querySelector(".displayTaskContainer");
let tasks = JSON.parse(localStorage.getItem("taskToSave")) || [];


addTask.addEventListener("click", () => {
  let taskToSave = addTaskInput.value;
  tasks.push(taskToSave);
  localStorage.setItem("taskToSave", JSON.stringify(tasks))
  displayTaskContainer.innerHTML = "";
  tasks.forEach((task) => {
    let tasked = `<div class="taskCont"><input type="checkbox" name="taskdone" id="taskDone"> <p>${task}</p><button id="deleteTask" data-task="${task}">Del</button></div>`;
    displayTaskContainer.innerHTML += tasked;
  });
  
});
tasks.forEach((task) => {
  let tasked = `<div class="taskCont"><input type="checkbox" name="taskdone" id="taskDone"> <p>${task}</p><button id="deleteTask" data-task="${task}">Del</button></div>`;
  displayTaskContainer.innerHTML += tasked;
});
let deleteTasks = document.querySelectorAll("#deleteTask");
deleteTasks.forEach((deleteTask)=>{
  deleteTask.addEventListener("click", () => {
    let elem = deleteTask.dataset.task;
    let occurence = tasks.indexOf(elem);
    console.log(occurence);
  });
});