// Seleciona os elementos do DOM
const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const taskDate = document.getElementById("task-date");
const taskTime = document.getElementById("task-time");
const tasksList = document.getElementById("tasks");

// Função para adicionar uma tarefa
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtém os valores do formulário
    const title = taskTitle.value.trim();
    const date = taskDate.value;
    const time = taskTime.value;

    // Verifica se os campos foram preenchidos
    if (!title || !date || !time) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Cria um elemento de lista
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${title} - ${date} às ${time}</span>
        <button onclick="deleteTask(this)">Remover</button>
    `;

    // Adiciona o elemento à lista de tarefas
    tasksList.appendChild(taskItem);

    // Limpa o formulário
    taskForm.reset();
});

// Função para remover uma tarefa
function deleteTask(button) {
    const taskItem = button.parentElement;
    tasksList.removeChild(taskItem);
}