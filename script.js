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

    const taskElement = document.createElement("div");
    taskElement.textContent = task.title;
    taskElement.classList.add("task-item");
    taskList.appendChild(taskElement);
    console.log(tasks);

    taskElement.addEventListener("click", function () {
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

            const taskIndex = tasks.indexOf(task);

            tasks.splice(taskIndex, 1);

            taskElement.remove();

            detailsContent.innerHTML = "";

        });

    });
});



