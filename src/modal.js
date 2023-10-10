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
    textInput.type = "text";
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