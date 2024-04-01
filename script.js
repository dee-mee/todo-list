function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var newTaskDiv = document.createElement('div');
    taskList.appendChild(newTaskDiv);
    newTaskDiv.id = 'task' + (taskList.childElementCount + 1);
    newTaskDiv.innerHTML = "<span id='task'>" + taskInput.value + "</span> <button onclick='deleteTask(\"" + newTaskDiv.id + "\")'>Delete</button>";
    taskInput.value = "";
  }
  
  function deleteTask(taskId) {
    var task = document.getElementById(taskId);
    task.parentNode.removeChild(task);
  }