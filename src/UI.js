import logo from './images/logo.svg';
import addIcon from './images/plus.png';

const plannerObjects = [
    { title: "Today" },
    { title: "This Month" },
];

const projectObjects = [
    { title: "P1" },
    { title: "P2" }
];

const sectionLists = [
    { title: "Planner", list: plannerObjects },
    { title: "Projects", list: projectObjects}
]

export function makeUI() {
    if (!localStorage.getItem("currentList")) {
        localStorage.setItem("currentList", "Today");
    }

    makeHeader();
    makeSidebar();
    makeContent();
}

function makeHeader() {
    const header = document.getElementById("header");

    const headerLogo = document.createElement("img");
    headerLogo.id = "headerLogo";
    headerLogo.src = logo;

    const headerTitle = document.createElement("p")
    headerTitle.id = "headerTitle";
    headerTitle.textContent = "Unorganized";

    header.appendChild(headerLogo);
    header.appendChild(headerTitle);
}

function makeSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = "";

    sectionLists.forEach(({title, list}) => {
        sidebar.appendChild(makeSidebarSection(title, list));
    })
}

function makeSidebarSection(title, list) {
    const section = document.createElement("div");
    section.classList.add("sidebarSection")

    const sectionTitle = document.createElement("p")
    sectionTitle.classList.add("sectionTitle")
    sectionTitle.textContent = title;

    const addProject = document.createElement("p")
    addProject.classList.add("sectionItem")
    addProject.textContent = "+ Add Project";

    section.appendChild(sectionTitle);

    if (title == "Projects") {section.appendChild(addProject)};

    list.forEach(({title}) => {
        const sectionItem = document.createElement("p")
        sectionItem.classList.add("sectionItem")
        sectionItem.textContent = title;

        if (localStorage.getItem("currentList") === title) {
            sectionItem.style.backgroundColor = "rgba(0, 0, 0, 0.20)";
            sectionItem.style.borderRadius = "10px";
        };

        sectionItem.addEventListener("click", function() {
            localStorage.setItem("currentList",title);

            makeSidebar();
            makeContent();
        });

        section.appendChild(sectionItem);
    })

    return section;
}

function makeContent() {
    const content = document.getElementById("content")
    content.innerHTML = "";

    const titleContainer = document.createElement("div");
    titleContainer.id = "titleContainer";

    const listTitle = document.createElement("p");
    listTitle.id = "listTitle";
    listTitle.textContent = localStorage.getItem("currentList");

    const addTaskBtn = document.createElement("img");
    addTaskBtn.id = "addTaskBtn";
    addTaskBtn.src = addIcon;

    const line = document.createElement("div");
    line.id = "line";

    const allTasksContainer = document.createElement("div");
    allTasksContainer.id = "allTasksContainer";

    addTaskBtn.addEventListener("click", function () {
        let currentList = localStorage.getItem("currentList")
        let tasksStorage = JSON.parse(localStorage.getItem(currentList+"Tasks")) || []

        tasksStorage.push(createTaskPopUp());
        localStorage.setItem(currentList+"Tasks", JSON.stringify(tasksStorage));

        addTask(allTasksContainer);
        removeTask(null);
    });
    
    addTask(allTasksContainer);

    titleContainer.appendChild(listTitle);
    titleContainer.appendChild(addTaskBtn);
    content.appendChild(titleContainer);
    content.appendChild(line);
    content.appendChild(allTasksContainer);
}

function createTaskPopUp() {
    let title = prompt("Please enter task title");  
    let currentList = localStorage.getItem("currentList");
    let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];
    let titlePresent = tasksStorage.filter(task => task === title.trim());

    if (title === null || title.trim() === "") {
        return null;
    } else if (titlePresent.length !== 0) {
        alert("Please enter a unique title");
        return createTaskPopUp();
    } else {
        return title.trim();
    }
}

function makeTask(title) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    
    const taskTitle = document.createElement("p");
    taskTitle.classList.add("taskTitle");
    taskTitle.textContent = title;

    const editTaskBtn = document.createElement("p");
    editTaskBtn.classList.add("editTaskBtn");
    editTaskBtn.textContent = "edit";

    editTaskBtn.addEventListener("click", function () {
        taskTitle.textContent = editTaskPopUp(title);
    });

    const removeTaskBtn = document.createElement("p");
    removeTaskBtn.classList.add("removeTaskBtn");
    removeTaskBtn.textContent = "rm";

    removeTaskBtn.addEventListener("click", function () {
        removeTask(title);
    });

    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(editTaskBtn);
    taskContainer.appendChild(removeTaskBtn);

    return taskContainer;
}

function editTaskPopUp(currentTitle) {
    let title = prompt("Please enter new task title");
    let currentList = localStorage.getItem("currentList");
    let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];
    let titlePresent = tasksStorage.filter(task => task === title.trim());

    if (title === null || title.trim() === "") {
        return currentTitle;
    } else if (title === currentTitle || titlePresent.length !== 0) {
        alert("Please enter a unique title");
        return editTaskPopUp(currentTitle);
    } else {
        return title.trim();
    }
}

function saveTasks() {
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

function addTask(allTasksContainer) {
    allTasksContainer.innerHTML = "";
    saveTasks().forEach(task => {
        allTasksContainer.appendChild(task);
    });
}

function removeTask(title) {
    let currentList = localStorage.getItem("currentList");
    let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];

    tasksStorage = tasksStorage.filter(task => task !== title);

    localStorage.setItem(currentList + "Tasks", JSON.stringify(tasksStorage));

    addTask(allTasksContainer);
}