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
    const domListTitle = document.createElement("div");
    domListTitle.textContent = `${upperListTitle} List`;
    domListTitle.id = "domListTitle";
    domList.appendChild(domListTitle);
    // domList.textContent = `${upperListTitle} List`;
  }

  const contentContainer = document.getElementById("contentContainer");
  contentContainer.innerHTML = ""; // so it doesn't show multiple lists
  contentContainer.appendChild(domList);

  // add todo item button
  const addItemBtn = document.createElement("button");
  addItemBtn.id = "addItemBtn";
  addItemBtn.textContent = "Add New Item";

  if (todoList !== defaultList && todoList !== completedList) {
    domList.appendChild(addItemBtn);
  }

  function addNewItemToDom(item) {
    // Update the existing list with the new item
    const domItem = document.createElement("li");
    domItem.setAttribute("class", "todoCard");

    // title
    const domItemTitle = document.createElement("span");
    domItemTitle.id = "itemProperty";
    domItemTitle.textContent = "Title: ";
    const domItemTitleValue = document.createElement("span");
    domItemTitleValue.textContent = "Change here";
    domItemTitleValue.contentEditable = true;
    if (item.title !== "-") {
      domItemTitleValue.textContent = item.title;
    }

    // description
    const domItemDescription = document.createElement("span");
    domItemDescription.id = "itemProperty";
    domItemDescription.textContent = " Description: ";
    const domItemDescriptionValue = document.createElement("textarea");
    domItemDescriptionValue.placeholder = "Describe your task here";
    if (item.description !== "-") {
      domItemDescriptionValue.textContent = item.description;
    }

    // date
    const domItemDueDate = document.createElement("span");
    domItemDueDate.id = "itemProperty";
    domItemDueDate.textContent = " Due Date: ";

    const domItemDueDateValue = document.createElement("input");
    domItemDueDateValue.type = "date";
    // maintains the selected date displayed correctly after page changes
    domItemDueDateValue.value = item.dueDate;

    // priority
    const domItemPriority = document.createElement("span");
    domItemPriority.id = "itemProperty";
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
    const selectedPriority = options.indexOf(item.priority);
    domItemPriorityValue.selectedIndex = selectedPriority;

    // change BG color based on selected priority
    // low / green
    if (selectedPriority === 1) {
      domItem.setAttribute("style", "background-color: rgb(192, 255, 192);");
    }
    // medium / yellow
    if (selectedPriority === 2) {
      domItem.setAttribute("style", "background-color: rgb(255, 255, 192);");
    }
    // high / red
    if (selectedPriority === 3) {
      domItem.setAttribute("style", "background-color: rgb(255, 192, 192);");
    }

    // delete todoList button
    const itemDeleteBtn = document.createElement("button");
    itemDeleteBtn.className = "itemDeleteBtn";
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
    itemCompleteBtn.textContent = "Completed";

    itemCompleteBtn.addEventListener("click", () => {
      // update item index before deleting
      itemIndex = todoList.items.indexOf(item);
      defaultIndex = defaultList.items.indexOf(item);
      deleteItem(itemIndex, todoList, defaultList, defaultIndex, completedList);
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
      domItem.insertBefore(itemDeleteBtn, domItem.firstChild);
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
