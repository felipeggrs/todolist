// module to handle DOM elements

export default function displayTodoList(todoList) {
  // display list title
  const listTitle = todoList.title;
  const domList = document.createElement("ul");
  domList.setAttribute("role", "list"); // css reset custom property
  domList.textContent = listTitle;

  const contentContainer = document.getElementById("contentContainer");
  contentContainer.innerHTML = ""; // so it doesn't show multiple lists
  contentContainer.appendChild(domList);

  // display each todo item inside the list
  todoList.items.forEach((item) => {
    const domItem = document.createElement("li");
    domItem.textContent = `Title: ${item.title} / Description: ${item.description} / Due Date: ${item.dueDate} / Priority: ${item.priority}`;
    domList.appendChild(domItem);
  });

  // add todo item button
  const addItemBtn = document.createElement("button");
  addItemBtn.textContent = "Add";
  domList.appendChild(addItemBtn);

  return { addItemBtn, domList };
}
