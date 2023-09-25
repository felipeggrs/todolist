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

  function addNewItemToDom(item) {
    // Update the existing list with the new item
    const domItem = document.createElement("li");

    // title
    const domItemTitle = document.createElement("span");
    domItemTitle.textContent = "Title: ";
    const domItemTitleValue = document.createElement("span");
    domItemTitleValue.textContent = "<Change here>";
    domItemTitleValue.contentEditable = true;
    if (item.title !== "-") {
      domItemTitleValue.textContent = item.title;
    }

    // description
    const domItemDescription = document.createElement("span");
    domItemDescription.textContent = " Description: ";
    const domItemDescriptionValue = document.createElement("span");
    domItemDescriptionValue.textContent = "<Change here>";
    domItemDescriptionValue.contentEditable = true;
    if (item.description !== "-") {
      domItemDescriptionValue.textContent = item.description;
    }

    // date
    const domItemDueDate = document.createElement("span");
    domItemDueDate.textContent = " Due Date: ";
    const domItemDueDateValue = document.createElement("span");
    domItemDueDateValue.textContent = "<Change here>";
    domItemDueDateValue.contentEditable = true;
    if (item.dueDate !== "-") {
      domItemDueDateValue.textContent = item.dueDate;
    }

    // priority
    const domItemPriority = document.createElement("span");
    domItemPriority.textContent = " Priority: ";
    const domItemPriorityValue = document.createElement("span");
    domItemPriorityValue.textContent = "<Change here>";
    domItemPriorityValue.contentEditable = true;
    if (item.priority !== "-") {
      domItemPriorityValue.textContent = item.priority;
    }

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

    return {
      domItemTitleValue,
      domItemDescriptionValue,
      domItemDueDateValue,
      domItemPriorityValue,
    };
  }

  // add todo item button behavior
  addItemBtn.addEventListener("click", () => {
    console.log(todoList);
    const newItem = createItem("-", "-", "-", "-");
    assignItemToList(newItem, todoList);

    const item = addNewItemToDom(newItem);
    updateListValues(
      newItem,
      item.domItemTitleValue,
      item.domItemDescriptionValue,
      item.domItemDueDateValue,
      item.domItemPriorityValue
    );
  });

  return { addNewItemToDom };
}
