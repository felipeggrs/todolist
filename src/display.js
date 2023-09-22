import "./styles.css";
import { createItem, assignItemToList, updateListValues } from "./engine";

// module to handle DOM elements

export default function displayTodoList(todoList) {
  // display list title
  const listTitle = todoList.title;
  const domList = document.createElement("ul");
  domList.setAttribute("role", "list"); // css reset custom property

  // modify first char to uppercase to display as list title on the page
  if (listTitle.length > 0) {
    const upperListTitle =
      listTitle.charAt(0).toUpperCase() + listTitle.slice(1);
    domList.textContent = `${upperListTitle} List`;
  }

  const contentContainer = document.getElementById("contentContainer");
  contentContainer.innerHTML = ""; // so it doesn't show multiple lists
  contentContainer.appendChild(domList);

  // add todo item button
  const addItemBtn = document.createElement("button");
  addItemBtn.textContent = "Add";
  domList.appendChild(addItemBtn);

  function addNewItemToDom() {
    console.log(todoList);
    const newItem = createItem("-", "-", "-", "-");
    assignItemToList(newItem, todoList);

    // Update the existing list with the new item
    const domItem = document.createElement("li");

    // title
    const domItemTitle = document.createElement("span");
    domItemTitle.textContent = "Title: ";
    const domItemTitleValue = document.createElement("span");
    domItemTitleValue.textContent = "<Change here>";
    domItemTitleValue.contentEditable = true;

    // description
    const domItemDescription = document.createElement("span");
    domItemDescription.textContent = " Description: ";
    const domItemDescriptionValue = document.createElement("span");
    domItemDescriptionValue.textContent = "<Change here>";
    domItemDescriptionValue.contentEditable = true;

    // date
    const domItemDueDate = document.createElement("span");
    domItemDueDate.textContent = " Due Date: ";
    const domItemDueDateValue = document.createElement("span");
    domItemDueDateValue.textContent = "<Change here>";
    domItemDueDateValue.contentEditable = true;

    // priority
    const domItemPriority = document.createElement("span");
    domItemPriority.textContent = " Priority: ";
    const domItemPriorityValue = document.createElement("span");
    domItemPriorityValue.textContent = "<Change here>";
    domItemPriorityValue.contentEditable = true;

    updateListValues(
      newItem,
      domItemTitleValue,
      domItemDescriptionValue,
      domItemDueDateValue,
      domItemPriorityValue
    );

    domItem.appendChild(domItemTitle);
    domItem.appendChild(domItemTitleValue);
    domItem.appendChild(domItemDescription);
    domItem.appendChild(domItemDescriptionValue);
    domItem.appendChild(domItemDueDate);
    domItem.appendChild(domItemDueDateValue);
    domItem.appendChild(domItemPriority);
    domItem.appendChild(domItemPriorityValue);

    // put the item before the add button
    domList.insertBefore(domItem, addItemBtn);
    return { addNewItemToDom };
  }

  addItemBtn.addEventListener("click", addNewItemToDom);
}
