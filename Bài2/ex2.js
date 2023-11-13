const submitTodo = document.querySelector(".form-input > button");
const todoText = document.getElementById("input-text");
const allTodos = document.getElementById("all-todo");

function them(text) {
    var newTodo = document.createElement("div");
    newTodo.classList.add("todo-task");
    newTodo.innerHTML = `<p>${text}</p>
                        <button class="btn xoa">Xoa</button>
                         `;
    allTodos.appendChild(newTodo);
    todoText.value = "";
}

submitTodo.addEventListener("click", (event) => {
    event.preventDefault(); // not load again
    them(todoText.value);
});

allTodos.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
        e.target.classList.toggle("checked");
    }
    if (e.target.classList.contains("xoa")) {
        e.target.parentElement.remove();
    }
});