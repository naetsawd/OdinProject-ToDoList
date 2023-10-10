import penIcon from "./images/pencil.png"
import minusIcon from "./images/minus.png";

function makeTask(task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    
    const taskDesc = document.createElement("p");
    taskDesc.classList.add("taskDesc");
    taskDesc.textContent = task.text;

    const editTaskBtn = document.createElement("img");
    editTaskBtn.classList.add("taskBtns");
    editTaskBtn.src = penIcon;

    editTaskBtn.onclick = function() {
        const modalContainer = document.getElementById("modalContainer");
        modalContainer.style.display = "block";

        const actionName = document.getElementById("actionName");
        actionName.textContent = "Edit Task"

        const textLabel = document.getElementById("textLabel");
        textLabel.textContent = "Enter New Description: ";

        const textInput = document.getElementById("textInput");
        textInput.value = task.text;

        const dateInput = document.getElementById("dateInput");
        dateInput.value = task.date;

        const submitBtn = document.getElementById("submitBtn");
        submitBtn.onclick = function() {
            let currentList = localStorage.getItem("currentList");
            let newTask = submitDesc("edit");

            if (newTask) {
                if (currentList === "Today" || currentList === "This Month") {
                    saveNewTaskDesc(task, newTask, currentList)
                } else {
                    saveNewTaskDesc(task, newTask, currentList);
                }
            }
        }
    }

    const removeTaskBtn = document.createElement("img");
    removeTaskBtn.classList.add("taskBtns");
    removeTaskBtn.src = minusIcon;

    removeTaskBtn.onclick = function () {
        removeTask(task.text, task.date);
    }

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("dateContainer");

    const dateParts = task.date.split("-");
    const dueDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = dueDate.toLocaleDateString('en-US', options);

    const taskDate = document.createElement("p");
    taskDate.classList.add("taskDate");
    taskDate.textContent = formattedDate;

    dateContainer.appendChild(taskDate);
    taskContainer.appendChild(dateContainer);
    taskContainer.appendChild(taskDesc);
    taskContainer.appendChild(editTaskBtn);
    taskContainer.appendChild(removeTaskBtn);

    return taskContainer;
}

function getSavedTasks() {
    let currentList = localStorage.getItem("currentList");
    let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];

    if (tasksStorage.length > 1 && tasksStorage.every(task => task.date)) {
        tasksStorage.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    const taskElements = [];

    tasksStorage.forEach(task => {
        const taskElement = makeTask(task);
        taskElements.push(taskElement);
    });

    return taskElements;
}

export function addAllTasks() {
    const allTasksContainer = document.getElementById("allTasksContainer");
    allTasksContainer.innerHTML = "";

    localStorage.setItem("TodayTasks", JSON.stringify(todayTasks()));
    localStorage.setItem("This MonthTasks", JSON.stringify(monthTasks()));

    if (getSavedTasks().length !== 0) {
        getSavedTasks().forEach(task => {
            allTasksContainer.appendChild(task);
        });
    } else {
        const addTaskMsg = document.createElement("p")
        addTaskMsg.id = "addTaskMsg"
        addTaskMsg.textContent = "Add a task to get started!";

        allTasksContainer.appendChild(addTaskMsg);
    }
}

function saveNewTaskDesc(oldTask, newTask, currentList) {
    if (currentList === "Today" || currentList === "This Month") {
        currentList = "Inbox"
    }

    let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];
    
    let index = tasksStorage.findIndex(task => task.text === oldTask.text && task.date === oldTask.date);

    if (newTask === null || newTask.text.trim() === "") {
        newTask = oldTask;
    } else {
        tasksStorage[index] = newTask;
    }

    localStorage.setItem(currentList + "Tasks", JSON.stringify(tasksStorage));

    addAllTasks();
}

export function removeTask(text, date) {
    let currentList = localStorage.getItem("currentList");

    if (currentList === "Today" || currentList === "This Month") {
        let tasksStorage = JSON.parse(localStorage.getItem("InboxTasks")) || [];
        tasksStorage = tasksStorage.filter(task => task.text !== text || task.date !== date);

        localStorage.setItem("InboxTasks", JSON.stringify(tasksStorage));
    } else {
        let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];
        tasksStorage = tasksStorage.filter(task => task.text !== text || task.date !== date);

        localStorage.setItem(currentList + "Tasks", JSON.stringify(tasksStorage));
    }

    addAllTasks();
}

export function modal() {
    const modalContainer = document.createElement("div");
    modalContainer.id = "modalContainer";

    const modalHeader = document.createElement("div");
    modalHeader.id = "modalHeader";

    const actionName = document.createElement("p");
    actionName.id = "actionName";
    actionName.textContent = "Add task";

    const closeBtn = document.createElement("div");
    closeBtn.id = "closeModal";
    closeBtn.innerHTML = "&times;";

    const modalContent = document.createElement("div");
    modalContent.id = "modalContent";

    const modalInputContainer = document.createElement("div");
    modalInputContainer.id = "modalInputContainer";

    const textLabel = document.createElement("label");
    textLabel.id = "textLabel";
    textLabel.setAttribute("for", "textInput");
    textLabel.textContent = "Enter Description";

    const textInput = document.createElement("input");
    textInput.type = "textInput";
    textInput.id = "textInput";

    const dateLabel = document.createElement("label");
    dateLabel.id = "dateLabel";
    dateLabel.setAttribute("for", "dateInput");
    dateLabel.textContent = "Select Date: ";

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "dateInput";

    const submitBtn = document.createElement("button");
    submitBtn.id = "submitBtn";
    submitBtn.textContent = "Submit";

    closeBtn.onclick = function() {
        modalContainer.style.display = "none";
        textInput.value = "";
        dateInput.value = "";
        dateLabel.style.display = "block";
        dateInput.style.display = "block";
    }
    
    window.onclick = function(event) {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
            textInput.value = "";
            dateInput.value = "";
            dateLabel.style.display = "block";    
            dateInput.style.display = "block";
        }
    }

    modalHeader.appendChild(actionName);
    modalHeader.appendChild(closeBtn);
    modalInputContainer.appendChild(textLabel);
    modalInputContainer.appendChild(textInput);
    modalInputContainer.appendChild(dateLabel);
    modalInputContainer.appendChild(dateInput);
    modalInputContainer.appendChild(submitBtn);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalInputContainer);
    modalContainer.appendChild(modalContent);

    return modalContainer;
}

export function submitDesc(type) {
    const modalContainer = document.getElementById("modalContainer");
    const textInput = document.getElementById("textInput").value;
    const dateInput = document.getElementById("dateInput").value;
    
    let selectedDate = new Date(dateInput);
    let currentList = localStorage.getItem("currentList");
    let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];
    let taskPresent = tasksStorage.some(task => task.text === textInput.trim() && task.date === selectedDate.toJSON().substring(0, 10));

    if (!textInput || !dateInput && type !== "project") {
        alert("Please do not leave fields blank.");
    } else if (taskPresent && type !== "project") {
        alert("Please enter a unique description and date.");
    } else {
        modalContainer.style.display = "none";

        if (type === "add" || type === "edit") {
            return ({
                text: textInput.trim(),
                date: selectedDate.toJSON().substring(0, 10)
            });
        } else if (type === "project") {
            return textInput;
        }
    }
}

function todayTasks() {
    let inboxList = JSON.parse(localStorage.getItem("InboxTasks")) || [];
    let todayDate = new Date().toISOString().substring(0, 10);
    let todayTasks = inboxList.filter(task => task.date === todayDate);

    return todayTasks;
}

function monthTasks() {
    let inboxList = JSON.parse(localStorage.getItem("InboxTasks")) || [];
    let currentMonthYear = new Date().toISOString().substring(0, 7);
    let thisMonthTasks = inboxList.filter(task => task.date.startsWith(currentMonthYear));

    return thisMonthTasks;
}