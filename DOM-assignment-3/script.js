const table = document.querySelector("tbody");
let todo_data = JSON.parse(localStorage.getItem("todo-data")) || [];

add_eliment();

document.getElementById("form").addEventListener("submit", (el) => {
  el.preventDefault();

  const task = document.getElementById("task");
  const priority = document.getElementById("priority");

  if (task.value == "" && priority.value == "") {
    alert("Input field must be fill");
  } else {
    const task_obj = {
      id: todo_data.length + 1,
      task: task.value,
      priority: priority.value,
    };

    todo_data.push(task_obj);
    localStorage.setItem("todo-data", JSON.stringify(todo_data));

    task.value = "";
    priority.value = "";

    add_eliment();
  }
});

function add_eliment() {
  table.innerHTML = "";

  todo_data.forEach((el) => {
    const table_row = document.createElement("tr");

    const table_task = document.createElement("td");
    table_task.innerText = el.task;

    const table_priority = document.createElement("td");
    table_priority.innerText = el.priority;

    const table_button = document.createElement("td");
    table_button.innerText = "Delete";
    table_button.style.backgroundColor = "red";
    table_button.style.color = "white";

    table_button.addEventListener("click", () => {
      todo_data = todo_data.filter((item) => item.id !== el.id);
      localStorage.setItem("todo-data", JSON.stringify(todo_data));
      add_eliment();
    });

    table_row.appendChild(table_task);
    table_row.appendChild(table_priority);
    table_row.appendChild(table_button);

    table.appendChild(table_row);
  });
}

