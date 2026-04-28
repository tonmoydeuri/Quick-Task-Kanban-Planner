function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value.trim() === "") return;

    const task = document.createElement('div');
    task.className = 'task';
    task.draggable = true;
    task.id = 'task-' + Date.now();
    task.innerText = input.value;
    
    task.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    document.querySelector('#todo .task-list').appendChild(task);
    input.value = "";
}

function allowDrop(e) { e.preventDefault(); }

function drop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const task = document.getElementById(data);
    const target = e.target.closest('.column').querySelector('.task-list');
    target.appendChild(task);
}