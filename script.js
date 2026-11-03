let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        let span = document.createElement("span");

        span.textContent = task.name;

        if (task.completed) {
            span.classList.add("completed");
        }

        span.onclick = function() {
            toggleTask(index);
        };

        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.classList.add("delete-btn");

        deleteButton.onclick = function() {
            deleteTask(index);
        };

        li.appendChild(span);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });

}

function addTask() {

    let input = document.getElementById("taskInput");

    let taskName = input.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        name: taskName,
        completed: false
    });

    saveTasks();

    input.value = "";

    displayTasks();

}

function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

    displayTasks();

}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();

}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

displayTasks();