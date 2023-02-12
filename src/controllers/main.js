var taskList = new TaskList();
function getEle(id) {
  return document.getElementById(id);
}

function layDataTask() {
  var taskName = getEle("newTask").value;

  var idTask = Math.random();
  var task = new Task(idTask, taskName);

  console.log(idTask, taskName);

  return task;
}

getEle("addItem").addEventListener("click", function () {
  var task = layDataTask();
  taskList.addTask(task);
  renderData(taskList.arr);
  Reset();
  setLocalStorage();
});

function deleteToDo(idTask) {
  console.log("dele");
  taskList.deleteTask(idTask);
  renderData(taskList.arr);
  setLocalStorage();
}

function renderData(data) {
  var content = "";
  data.forEach((taskList) => {
    content += `
    <li>
      <span>${taskList.taskName}</span>
      <div class="buttons">
      <button class="remove" data-index="" onclick="deleteToDo('${taskList.idTask}')">
          <i class="fa fa-trash-alt"></i>
      </button>
      <button class="complete" data-index="" onclick="completeToDo('${taskList.idTask}')" >
          <i class="far fa-check-circle"></i>
          <i class="fas fa-check-circle"></i>
      </button>
  </div>
    </li>
    `;
  });
  getEle("todo").innerHTML = content;
}

//Reset
function Reset() {
  getEle("newTask").value = " ";
}

///Luu todo
function setLocalStorage() {
  var dataString = JSON.stringify(taskList.arr);
  localStorage.setItem("TODO", dataString);
}
getLocalStorage();
//Lay data tulocalstorage
function getLocalStorage() {
  var dataString = localStorage.getItem("TODO");
  var dataJson = JSON.parse(dataString);
  taskList.arr = dataJson;
  //Render
  renderData(taskList.arr);
}
