/* eslint-disable no-use-before-define */
import "./styles.css";
import {
  createItem,
  assignItemToList,
  updateListValues,
  deleteItem,
  createList,
} from "./engine";

// module to handle DOM elements

const completedList = createList("completed");

function displayTodoList(todoList, defaultList) {
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

  if (todoList !== defaultList && todoList !== completedList) {
    domList.appendChild(addItemBtn);
  }

  function addNewItemToDom(item) {
    // Update the existing list with the new item
    const domItem = document.createElement("li");

    // title
    const domItemTitle = document.createElement("span");
    domItemTitle.textContent = "Title: ";
    const domItemTitleValue = document.createElement("span");
    domItemTitleValue.textContent = "<Select title>";
    domItemTitleValue.contentEditable = true;
    if (item.title !== "-") {
      domItemTitleValue.textContent = item.title;
    }

    // description
    const domItemDescription = document.createElement("span");
    domItemDescription.textContent = " Description: ";
    const domItemDescriptionValue = document.createElement("textarea");
    domItemDescriptionValue.placeholder = "Describe your task here";
    if (item.description !== "-") {
      domItemDescriptionValue.textContent = item.description;
    }

    // date
    const domItemDueDate = document.createElement("span");
    domItemDueDate.textContent = " Due Date: ";

    const domItemDueDateValue = document.createElement("input");
    domItemDueDateValue.type = "date";
    // maintains the selected date displayed correctly after page changes
    domItemDueDateValue.value = item.dueDate;

    // priority
    const domItemPriority = document.createElement("span");
    domItemPriority.textContent = " Priority: ";
    const domItemPriorityValue = document.createElement("select");
    domItemPriorityValue.setAttribute("id", "mySelect");
    const options = ["-", "Low", "Medium", "High"];
    options.forEach((option) => {
      const optionTag = document.createElement("option");
      optionTag.value = option;
      optionTag.text = option;
      domItemPriorityValue.appendChild(optionTag);
    });
    // maintains the selected priority displayed correctly after page changes
    domItemPriorityValue.selectedIndex = options.indexOf(item.priority);

    // delete todoList button
    const itemDeleteBtn = document.createElement("button");
    itemDeleteBtn.textContent = "X";
    let itemIndex = todoList.items.indexOf(item);
    let defaultIndex = defaultList.items.indexOf(item);

    itemDeleteBtn.addEventListener("click", () => {
      // update item index before deleting
      itemIndex = todoList.items.indexOf(item);
      defaultIndex = defaultList.items.indexOf(item);
      deleteItem(itemIndex, todoList, defaultList, defaultIndex);
      domList.removeChild(domItem);
    });

    // complete todoItem button
    const itemCompleteBtn = document.createElement("button");
    itemCompleteBtn.textContent = "Done";

    itemCompleteBtn.addEventListener("click", () => {
      // update item index before deleting
      itemIndex = todoList.items.indexOf(item);
      defaultIndex = defaultList.items.indexOf(item);
      deleteItem(itemIndex, todoList, defaultList, defaultIndex, completedList);
      console.log(completedList);
      domList.removeChild(domItem);
    });

    // append all the todo item properties to the li tag
    domItem.appendChild(domItemTitle);
    domItem.appendChild(domItemTitleValue);
    domItem.appendChild(domItemDueDate);
    domItem.appendChild(domItemDueDateValue);
    domItem.appendChild(domItemPriority);
    domItem.appendChild(domItemPriorityValue);
    domItem.appendChild(domItemDescription);
    domItem.appendChild(domItemDescriptionValue);

    // hide remove button from home page
    if (todoList !== defaultList && todoList !== completedList) {
      domItem.appendChild(itemDeleteBtn);
      domItem.appendChild(itemCompleteBtn);
      // put the item before the add button on project lists
      domList.insertBefore(domItem, addItemBtn);
    }

    if (todoList === defaultList || todoList === completedList) {
      // add the item to the defautlist
      domList.appendChild(domItem);

      // show each item's original project in the default list
      // const originalList = document.createElement("div");
      // originalList.textContent = `Project: `;
      // domItem.appendChild(originalList);
    }

    return {
      domItemTitleValue,
      domItemDescriptionValue,
      domItemDueDateValue,
      domItemPriorityValue,
      itemDeleteBtn,
      domItem,
    };
  }

  // add todo item button behavior
  addItemBtn.addEventListener("click", () => {
    console.log(todoList);

    const newItem = createItem("-", "-", "-", "-");
    assignItemToList(newItem, todoList, defaultList);

    const item = addNewItemToDom(newItem);
    updateListValues(
      newItem,
      item.domItemTitleValue,
      item.domItemDescriptionValue,
      item.domItemDueDateValue,
      item.domItemPriorityValue
    );
  });

  return { addNewItemToDom, addItemBtn, domList };
}

export { displayTodoList, completedList };
