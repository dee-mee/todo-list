function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');
  var newTaskDiv = document.createElement('div');
  var taskId = 'task' + (taskList.childElementCount + 1);
  newTaskDiv.id = taskId;
  newTaskDiv.innerHTML = "<input type='checkbox' id='checkbox" + (taskList.childElementCount + 1) + "' onclick='toggleTaskCompleted(\"" + taskId + "\")'>" + 
                         "<span id='task'>" + taskInput.value + "</span> <button onclick='deleteTask(\"" + taskId + "\")'>Delete</button>";
  taskList.appendChild(newTaskDiv);
  
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push({ task: taskInput.value, completed: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  taskInput.value = "";
}

function deleteTask(taskId) {
  var task = document.getElementById(taskId);
  task.parentNode.removeChild(task);
  
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  var index = parseInt(taskId.slice(4)) - 1; 
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function toggleTaskCompleted(taskId) {
  var task = document.getElementById(taskId);
  var checkbox = task.querySelector('input[type="checkbox"]');
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  var index = parseInt(taskId.slice(4)) - 1; 
  tasks[index].completed = checkbox.checked;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  var activeTab = document.querySelector('.tabs .active');
  if (activeTab) {
      var tabName = activeTab.textContent.trim().toLowerCase();
      if (tabName === 'all') {
          showAllTasks();
      } else if (tabName === 'completed') {
          showCompletedTasks();
      } else if (tabName === 'pending') {
          showPendingTasks();
      }
  }
}

function showAllTasks() {
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  displayTasks(tasks);
}

function showCompletedTasks() {
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  var completedTasks = tasks.filter(task => task.completed);
  displayTasks(completedTasks);
}

function showPendingTasks() {
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  var pendingTasks = tasks.filter(task => !task.completed);
  displayTasks(pendingTasks);
}

function displayTasks(tasks) {
  var taskList = document.getElementById('taskList');
  taskList.innerHTML = ""; 

  tasks.forEach(function(task, index) {
      var taskId = 'task' + (index + 1);
      var newTaskDiv = document.createElement('div');
      newTaskDiv.id = taskId;
      newTaskDiv.innerHTML = "<input type='checkbox' id='checkbox" + (index + 1) + "' onclick='toggleTaskCompleted(\"" + taskId + "\")'" + 
                             (task.completed ? ' checked' : '') + ">" +
                             "<span id='task'" + (task.completed ? ' style="text-decoration: line-through;"' : '') + ">" + task.task + "</span> <button class='task-delete-button' onclick='deleteTask(\"" + taskId + "\")'>Delete</button>";
      taskList.appendChild(newTaskDiv);
  });
}

window.onload = function() {
  showAllTasks(); 
};
