const table = document.querySelector("tbody");

document.getElementById("form").addEventListener("submit", (el) => {
  el.preventDefault();

  const task = document.getElementById("task");
  const priority = document.getElementById("priority");

  if(task.value == "" && priority.value == ""){
    alert('Input field must be fill');
  }else{
    add_eliment(task.value, priority.value);
  }
});

function add_eliment(task_value, priority_value) {
  let table_row = document.createElement("tr");

  const table_task = document.createElement("td");
  table_task.innerText = task_value;

  const table_priority = document.createElement("td");
  table_priority.innerText = priority_value;

  const table_buttton = document.createElement("td");
  table_buttton.classList.add("delete");

  table_buttton.style.backgroundColor = "red";
  table_buttton.style.color = "white";
  table_buttton.innerText = "Delete";

  table_row.appendChild(table_task);
  table_row.appendChild(table_priority);
  table_row.appendChild(table_buttton);

  table.appendChild(table_row);

  table_buttton.addEventListener('click', () => {
    table_row.remove();
  })
}
