const button = document.querySelector("button");
const container = document.querySelector("#container");
const inputField = document.querySelector("#task-name");

let todos = [];

const renderTodos = () => {
  container.innerHTML = "";
  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = todo;
    container.appendChild(listItem);
    listItem.addEventListener("click", (e) => {
      const newTodos = todos.filter((todo) => todo !== listItem.innerText);
      todos = newTodos;
      renderTodos();
    });
  });
};

button.addEventListener("click", function (myEvent) {
  myEvent.stopPropagation();
  const taskName = inputField.value;
  todos.push(taskName);
  renderTodos();
  inputField.value = "";
});
