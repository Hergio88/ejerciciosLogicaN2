document.getElementById('addTaskBtn').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    var taskList = document.getElementById('taskList');
    var li = document.createElement('li');
    li.textContent = taskText;
    
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
}
