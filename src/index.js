document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form")
  const taskDesc = document.getElementById("new-task-description")
  const taskList = document.getElementById("tasks")

  taskForm.addEventListener("submit", addDesc)
});

const addDesc = event => {
  event.preventDefault()
  const taskDesc = document.getElementById("new-task-description")
  const li = document.createElement("li")
  li.innerText = taskDesc.value 
  addTask(li)
  event.target.reset()
}

const addTask = task => {
  const button = document.createElement("button")
  button.innerText = "X"
  task.innerText += " "
  task.appendChild(button)
  document.getElementById("tasks").appendChild(task)
  task.addEventListener("click", taskButton) 
}

