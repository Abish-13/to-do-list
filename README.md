# JavaScript To-Do List Application

`[HTML5]` `[CSS3]` `[JavaScript (ES6+)]`

This is a foundational front-end project that demonstrates core skills in web development. It's a simple, yet effective, To-Do List application built from scratch using only vanilla JavaScript, HTML, and CSS.

This project serves as a practical example of key JavaScript concepts used to build modern, interactive web applications.

**[➡️ View the Live Demo Here](https://abish-13.github.io/to-do-list/)**

## ✨ Core Features

* **Add New Tasks:** Users can add new tasks to the list via the input form.
* **Remove Tasks:** Individual tasks can be deleted one by one.
* **Mark as Completed:** Users can click on a task to toggle its completion status, which applies a "line-through" style.
* **Responsive Design:** The layout is clean and functional on all screen sizes.

---

## 🛠️ Key Concepts & Skills Demonstrated

This project is a strong portfolio piece for an internship or junior role because it demonstrates a solid understanding of:

* **DOM Manipulation:**
    * Dynamically creating new elements (`document.createElement`) for each task.
    * Appending elements to the DOM (`.appendChild`) to build the list.
    * Removing elements from the DOM (`.removeChild`) for the delete functionality.

* **Event Handling:**
    * Using `addEventListener` to listen for form `submit` events (to add a task).
    * Using `event.preventDefault()` to stop the form from its default browser-refresh behavior.
    * Listening for `click` events to handle task completion and removal.

* **Event Delegation:**
    * **(This is a key skill!)** Instead of adding a separate event listener to every single task's "Remove" button, a single listener is attached to the parent `<ul>` (`#task-list`).
    * This is a far more efficient and performant approach that uses the `event.target` property to identify which specific element (e.g., a `<span>` or a `<button>`) was clicked.

* **CSS & Dynamic Styling:**
    * Using `.classList.toggle()` in JavaScript to dynamically add or remove the `.completed` CSS class, which changes the task's appearance.

---

## 🚀 Future Enhancements

This project has a solid foundation. The next steps to take it further would be:

* **Local Storage:** Implement `localStorage` to save the user's tasks, so they persist even after the browser is refreshed.
* **Edit Tasks:** Add functionality to allow the user to edit an existing task's text.
* **Filter Tasks:** Add buttons to filter the list (e.g., "All," "Active," "Completed").

---

## 🔧 How to Run Locally

1.  Clone this repository:
    ```sh
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
    ```
2.  Navigate to the project folder:
    ```sh
    cd YOUR_REPOSITORY_NAME
    ```
3.  Open `index.html` in your web browser.

---


