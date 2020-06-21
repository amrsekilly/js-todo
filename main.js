const button = document.querySelector("button");
const container = document.querySelector("#container");
const inputField = document.querySelector("#task-name");

// const todos = ["test"];

const renderTodo = (todo) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = todo;
  container.appendChild(listItem);
};

button.addEventListener("click", function (myEvent) {
  myEvent.stopPropagation();
  const taskName = inputField.value;
  renderTodo(taskName);
  inputField.value = "";
});
