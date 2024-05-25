function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');
  var newTaskDiv = document.createElement('div');
  var taskId = 'task' + (taskList.childElementCount + 1);
  newTaskDiv.id = taskId;
  newTaskDiv.innerHTML = "<span id='task'>" + taskInput.value + "</span> <button onclick='deleteTask(\"" + taskId + "\")'>Delete</button>";
  taskList.appendChild(newTaskDiv);
  
  // Save task to localStorage
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(taskInput.value);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  taskInput.value = "";
}

function deleteTask(taskId) {
  var task = document.getElementById(taskId);
  task.parentNode.removeChild(task);
  
  // Remove task from localStorage
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  var index = parseInt(taskId.slice(4)) - 1; // Extracting task index from taskId
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage on page load
window.onload = function() {
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  var taskList = document.getElementById('taskList');
  tasks.forEach(function(task, index) {
      var taskId = 'task' + (index + 1);
      var newTaskDiv = document.createElement('div');
      newTaskDiv.id = taskId;
      newTaskDiv.innerHTML = "<span id='task'>" + task + "</span> <button onclick='deleteTask(\"" + taskId + "\")'>Delete</button>";
      taskList.appendChild(newTaskDiv);
  });
};
