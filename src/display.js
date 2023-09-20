import "./styles.css";
import { createItem, assignItemToList } from "./engine";

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

  addItemBtn.addEventListener("click", () => {
    console.log(todoList);
    const newItem = createItem("-", "-", "-", "-");
    assignItemToList(newItem, todoList);

    // Update the existing list with the new item
    const domItem = document.createElement("li");

    const domItemTitle = document.createElement("span");
    domItemTitle.textContent = "Title: ";

    const domItemTitleValue = document.createElement("span");
    domItemTitleValue.textContent = "<Change here>";
    domItemTitleValue.contentEditable = true;
    domItemTitleValue.addEventListener("input", () => {
      // Update the title when the user edits it
      newItem.title = domItemTitleValue.textContent;
    });

    const domItemDescription = document.createElement("span");
    domItemDescription.textContent = " Description: ";

    const domItemDescriptionValue = document.createElement("span");
    domItemDescriptionValue.textContent = "<Change here>";
    domItemDescriptionValue.contentEditable = true;
    domItemDescriptionValue.addEventListener("input", () => {
      // Update the description when the user edits it
      newItem.description = domItemDescriptionValue.textContent;
    });

    const domItemDueDate = document.createElement("span");
    domItemDueDate.textContent = " Due Date: ";

    const domItemDueDateValue = document.createElement("span");
    domItemDueDateValue.textContent = "<Change here>";
    domItemDueDateValue.contentEditable = true;
    domItemDueDateValue.addEventListener("input", () => {
      // Update the due date when the user edits it
      newItem.dueDate = domItemDueDateValue.textContent;
    });

    const domItemPriority = document.createElement("span");
    domItemPriority.textContent = " Priority: ";

    const domItemPriorityValue = document.createElement("span");
    domItemPriorityValue.textContent = "<Change here>";
    domItemPriorityValue.contentEditable = true;
    domItemPriorityValue.addEventListener("input", () => {
      // Update the priority when the user edits it
      newItem.priority = domItemPriorityValue.textContent;
    });

    domItem.appendChild(domItemTitle);
    domItem.appendChild(domItemTitleValue);
    domItem.appendChild(domItemDescription);
    domItem.appendChild(domItemDescriptionValue);
    domItem.appendChild(domItemDueDate);
    domItem.appendChild(domItemDueDateValue);
    domItem.appendChild(domItemPriority);
    domItem.appendChild(domItemPriorityValue);

    domList.insertBefore(domItem, addItemBtn); // put the item before the add button
  });

  return { addItemBtn, domList };
}
