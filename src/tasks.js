function makeTask(desc) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    
    const taskDesc = document.createElement("p");
    taskDesc.classList.add("taskDesc");
    taskDesc.textContent = desc;

    const editTaskBtn = document.createElement("p");
    editTaskBtn.classList.add("editTaskBtn");
    editTaskBtn.textContent = "edit";

    editTaskBtn.onclick = function() {
        const modalContainer = document.getElementById("modalContainer");
        modalContainer.style.display = "block";

        const input = document.getElementById("descInput");
        input.value = desc;

        const submitBtn = document.getElementById("button");
        submitBtn.onclick = function() {
            saveNewTaskDesc(desc, submitDesc("edit"));
        }
    }

    const removeTaskBtn = document.createElement("p");
    removeTaskBtn.classList.add("removeTaskBtn");
    removeTaskBtn.textContent = "rm";

    removeTaskBtn.onclick = function () {
        removeTask(desc);
    }

    taskContainer.appendChild(taskDesc);
    taskContainer.appendChild(editTaskBtn);
    taskContainer.appendChild(removeTaskBtn);

    return taskContainer;
}

function getSavedTasks() {
    let currentList = localStorage.getItem("currentList")
    let tasksStorage = JSON.parse(localStorage.getItem(currentList+"Tasks")) || [];
    localStorage.setItem(currentList+"Tasks", JSON.stringify(tasksStorage));

    const taskElements = [];
    
    tasksStorage.forEach(task => {
        const taskElement = makeTask(task);
        taskElements.push(taskElement);
    });

    return taskElements;
}

export function addAllTasks(allTasksContainer) {
    allTasksContainer.innerHTML = "";
    getSavedTasks().forEach(task => {
        allTasksContainer.appendChild(task);
    });
}

function saveNewTaskDesc(oldDesc,newDesc) {
    let currentList = localStorage.getItem("currentList");
    let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];
    let index = tasksStorage.indexOf(oldDesc);

    if (newDesc === null || newDesc.trim() === "") {
        newDesc = oldDesc;
    } else {
        tasksStorage[index] = newDesc;
    }

    localStorage.setItem(currentList + "Tasks", JSON.stringify(tasksStorage));

    addAllTasks(allTasksContainer);
}

export function removeTask(desc) {
    let currentList = localStorage.getItem("currentList");
    let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];

    tasksStorage = tasksStorage.filter(task => task !== desc);

    localStorage.setItem(currentList + "Tasks", JSON.stringify(tasksStorage));

    addAllTasks(allTasksContainer);
}

export function modal() {
    const modalContainer = document.createElement("div");
    modalContainer.id = "modalContainer";

    const modalHeader = document.createElement("div");
    modalHeader.id = "modalHeader";

    const closeBtn = document.createElement("div");
    closeBtn.id = "closeModal";
    closeBtn.innerHTML = "&times;";

    closeBtn.onclick = function() {
        modalContainer.style.display = "none";
        input.value = "";
    }

    const modalContent = document.createElement("div");
    modalContent.id = "modalContent";

    const modalInputContainer = document.createElement("div");
    modalInputContainer.id = "modalInputContainer";
    
    const label = document.createElement("label");
    label.id = "label";
    label.setAttribute("for", "descInput");
    label.textContent = "Enter Description: ";
    
    const input = document.createElement("input");
    input.type = "text";
    input.id = "descInput";
    
    const submitBtn = document.createElement("button");
    submitBtn.id = "button"
    submitBtn.textContent = "Submit";

    window.onclick = function(event) {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
            input.value = "";
        }
    }

    modalHeader.appendChild(closeBtn);
    modalInputContainer.appendChild(label);
    modalInputContainer.appendChild(input);
    modalInputContainer.appendChild(submitBtn);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalInputContainer);
    modalContainer.appendChild(modalContent);

    return modalContainer;
}

export function submitDesc(type) {
    const input = document.getElementById("descInput").value;
    const modalContainer = document.getElementById("modalContainer");

    let currentList = localStorage.getItem("currentList");
    let tasksStorage = JSON.parse(localStorage.getItem(currentList+"Tasks")) || [];
    let taskPresent = tasksStorage.filter(task => task === input.trim());
    
    if (input === null || input.trim() === "" && type !== "project") {
        alert("Please enter a description");
    } else if (taskPresent.length !== 0 && type !== "project") {
        alert("Please enter a unique description");
    } else {
        modalContainer.style.display = "none";

        if (type === "add") {
            tasksStorage.push(input.trim());
        } else {
            return input.trim();
        }
    }

    localStorage.setItem(currentList+"Tasks", JSON.stringify(tasksStorage));
    addAllTasks(allTasksContainer);
}