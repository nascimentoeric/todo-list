import "./components/todo-task.js";


const tasks = [];

const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const descriptionInput = document.getElementById("task-description");

const taskList = document.querySelector(".tasks");
const detailsContent = document.querySelector(".details-content");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    const task = {
        title: titleInput.value,
        description: descriptionInput.value,
        completed: false
    };

    tasks.push(task);

    const taskElement = document.createElement("todo-task");

    taskElement.setAttribute("title", task.title);
    taskElement.setAttribute("description", task.description);

    taskList.appendChild(taskElement);

    form.reset();

});


taskList.addEventListener("task-selected", function (event) {

    const task = event.detail;

    showTaskDetails(task);

});


function showTaskDetails(task) {

    detailsContent.innerHTML = "";

    const title = document.createElement("h3");

    title.textContent = task.title;
    title.classList.add("detail-title");


    const description = document.createElement("p");

    description.textContent = task.description;
    description.classList.add("detail-description");


    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Excluir tarefa";
    deleteButton.classList.add("delete-button");


    detailsContent.appendChild(title);
    detailsContent.appendChild(description);
    detailsContent.appendChild(deleteButton);


    deleteButton.addEventListener("click", function () {

        const taskIndex = tasks.findIndex(
            item => item.title === task.title &&
                item.description === task.description
        );

        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
        }

        const taskElements = document.querySelectorAll("todo-task");

        taskElements.forEach(function (element) {

            if (
                element.getAttribute("title") === task.title &&
                element.getAttribute("description") === task.description
            ) {
                element.remove();
            }

        });

        detailsContent.innerHTML = `
            <p>Selecione uma tarefa para visualizar seus detalhes.</p>
        `;

    });

}
