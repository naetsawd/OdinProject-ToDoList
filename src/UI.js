import logo from './images/logo.svg';

const plannerObjects = [
    { name: "Today" },
    { name: "This Month" }
];

const projectObjects = [
    { name: "P1" },
    { name: "P2" },
    { name: "+ Add Project" }
];

const sectionLists = [
    { name: "Planner", list: plannerObjects },
    { name: "Projects", list: projectObjects}
]

export function makeUI() {
    makeHeader();
    makeSidebar();
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

    sectionLists.forEach(({name, list}) => {
        sidebar.appendChild(makeSidebarSection(name, list));
    })
}

function makeSidebarSection(sectionName, sectionList) {
    const section = document.createElement("div");
    section.classList.add("sidebarSection")

    const sectionTitle = document.createElement("p")
    sectionTitle.classList.add("sectionTitle")
    sectionTitle.textContent = sectionName;

    section.appendChild(sectionTitle);

    sectionList.forEach(({name}) => {
        const sectionItem = document.createElement("p")
        sectionItem.classList.add("sectionItem")
        sectionItem.textContent = name;

        section.appendChild(sectionItem);
    })

    return section;
}