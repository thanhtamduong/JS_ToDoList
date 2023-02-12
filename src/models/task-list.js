function TaskList() {
  this.arr = [];

  this.addTask = function (task) {
    this.arr.push(task);
  };
  this.getTaskById = function (idTask) {
    var index = -1;
    this.arr.forEach(function (task, i) {
      if (task.idTask == idTask) {
        index = i;
      }
    });
    return index;
  };
  this.deleteTask = function () {
    var index = Math.random();
    if (index != -1) {
      this.arr.splice(index, 1);
    }
  };
}
