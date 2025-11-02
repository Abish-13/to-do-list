// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Get references to the main DOM elements
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // --- 1. Add Task ---
    taskForm.addEventListener("submit", function(event) {
        // Prevent the form from reloading the page
        event.preventDefault(); 
        
        // Get the text from the input field (and trim whitespace)
        const taskText = taskInput.value.trim();

        // If the input isn't empty, add the task
        if (taskText !== "") {
            addTask(taskText);
            // Clear the input field
            taskInput.value = "";
            // Focus the input field for the next task
            taskInput.focus();
        }
    });

    // Function to create and add a new task item
    function addTask(text) {
        // Create the <li> element
        const li = document.createElement("li");

        // Create the <span> for the task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = text;
        
        // Create the "Remove" button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn"; // Add class for styling

        // Assemble the task item
        li.appendChild(taskSpan);
        li.appendChild(removeBtn);

        // Add the new task item to the list
        taskList.appendChild(li);
    }


    // --- 2. Remove Task & 3. Mark as Completed ---
    
    // Use event delegation on the task list
    taskList.addEventListener("click", function(event) {
        
        const clickedElement = event.target;
        
        // Check if the "Remove" button was clicked
        if (clickedElement.classList.contains("remove-btn")) {
            // Get the parent <li> and remove it
            const taskItem = clickedElement.parentElement;
            taskList.removeChild(taskItem);
        }
        
        // Check if the task text (span) was clicked
        if (clickedElement.tagName === "SPAN") {
            // Get the parent <li> and toggle the 'completed' class
            const taskItem = clickedElement.parentElement;
            taskItem.classList.toggle("completed");
        }
    });

});