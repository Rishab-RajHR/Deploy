const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskClick);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task");

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="deleteBtn">❌</button>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
}

function handleTaskClick(e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.classList.toggle("completed");
  } else if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.remove();
  }
}
