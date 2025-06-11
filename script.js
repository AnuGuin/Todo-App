document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // prevent form submission
        const task = input.value.trim();
        if (task) {
            addTodoItem(task);
            input.value = "";
        } else {
            alert("Please enter a task.");
        }
    });

    function addTodoItem(task) {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", () => {
            list.removeChild(li);
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    }
});
