function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;

    taskList.appendChild(li);

    taskInput.value = "";
}
function addTask() {
    let input = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');

    // Create a new task item
    let taskItem = document.createElement('li');
    let taskName = document.createTextNode(input.value);
    taskItem.appendChild(taskName);

    // Add a percentage input
    let percentageInput = document.createElement('input');
    percentageInput.type = 'number';
    percentageInput.min = '0';
    percentageInput.max = '100';
    percentageInput.value = '0';
    percentageInput.style.marginLeft = '10px';
    taskItem.appendChild(percentageInput);

    // Add the task item to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    input.value = '';
}
