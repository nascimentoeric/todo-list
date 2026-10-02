import "./components/todo-task.js";
import "./components/task-details.js";


const tasks = [];

const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const descriptionInput = document.getElementById("task-description");

const taskList = document.querySelector(".tasks");
const details = document.querySelector("task-details");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    const task = {
        id: crypto.randomUUID(),
        title: titleInput.value,
        description: descriptionInput.value,
        completed: false
    };

    tasks.push(task);


    const taskElement = document.createElement("todo-task");

    taskElement.setAttribute("task-id", task.id);
    taskElement.setAttribute("title", task.title);
    taskElement.setAttribute("description", task.description);


    taskList.appendChild(taskElement);


    form.reset();

});


taskList.addEventListener("task-selected", function (event) {

    const task = tasks.find(function (task) {
        return task.id === event.detail.id;
    });

    if (task) {
        details.showTask(task);
    }

});


details.addEventListener("task-deleted", function (event) {

    const taskId = event.detail.id;


    const taskIndex = tasks.findIndex(function (task) {
        return task.id === taskId;
    });


    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
    }


    const taskElement =
        document.querySelector(`todo-task[task-id="${taskId}"]`);


    if (taskElement) {
        taskElement.remove();
    }


    details.clear();

});