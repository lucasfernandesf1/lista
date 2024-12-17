const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
           <span>${taskText}</span>
           <button class="deleteButton" onclick="deleteTask(this)">Remover</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert('Por favor, digite um item.');
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}



