/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
import "./styles.css";
import {
  createItem,
  assignItemToList,
  updateListValues,
  deleteItem,
  createList,
  saveProjectInStorage,
  deleteList,
  allLists,
} from "./engine";
import trashIconImg from "./img/trash.svg";
import deleteIconImg from "./img/x-square.svg";

// module to handle DOM elements

const completedList = createList("completed");
const projectContainer = document.getElementById("projectContainer");

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
    // domItemTitle.textContent = "Title: ";
    const domItemTitleValue = document.createElement("span");
    domItemTitleValue.className = "domItemTitleValue";
    domItemTitleValue.textContent = "Task name";
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
    const itemDeleteBtn = document.createElement("img");
    itemDeleteBtn.className = "itemDeleteBtn";
    itemDeleteBtn.src = trashIconImg;
    itemDeleteBtn.alt = "Delete item";
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

    // save to localStorage
    saveProjectInStorage(todoList.title, todoList);
    console.log(todoList.title);

    const item = addNewItemToDom(newItem);
    updateListValues(
      newItem,
      item.domItemTitleValue,
      item.domItemDescriptionValue,
      item.domItemDueDateValue,
      item.domItemPriorityValue,
      todoList
    );
  });

  return { addNewItemToDom, addItemBtn, domList };
}

// HOME
function displayHome(defaultList) {
  const display = displayTodoList(defaultList, defaultList);

  // display each item of the list
  defaultList.items.forEach((item) => {
    const newItem = display.addNewItemToDom(item);
    updateListValues(
      item,
      newItem.domItemTitleValue,
      newItem.domItemDescriptionValue,
      newItem.domItemDueDateValue,
      newItem.domItemPriorityValue
    );
  });
}

function addProjectBtnListener(defaultList) {
  let userInput;
  // input for the user to type the title for the new project
  const userForm = document.createElement("input");
  userForm.setAttribute("type", "text");
  userForm.id = "userForm";

  // button to submit the user value above and create the new project
  const submitButton = document.createElement("button");
  submitButton.id = "submitButton";
  submitButton.textContent = "Add new Project";

  projectContainer.appendChild(userForm);
  projectContainer.appendChild(submitButton);

  submitButton.addEventListener("click", () => {
    userInput = userForm.value;

    projectContainer.removeChild(userForm);
    projectContainer.removeChild(submitButton);

    if (userInput !== "") {
      // add new project to the sidebar
      const individualContainer = document.createElement("div");
      individualContainer.className = "individualContainer";

      const newProject = document.createElement("span");
      const deleteProject = document.createElement("span");
      const deleteIcon = document.createElement("img");
      deleteProject.setAttribute("class", "iconContainer");

      deleteIcon.src = deleteIconImg;
      deleteIcon.alt = "Delete project button";
      newProject.textContent = userInput;

      projectContainer.appendChild(individualContainer);
      individualContainer.appendChild(newProject);
      individualContainer.appendChild(deleteProject);
      deleteProject.appendChild(deleteIcon);

      // modify user input to assign manageable IDs
      const transformedUserInput = userInput.toLowerCase().replace(/\s+/g, "-");
      newProject.id = transformedUserInput;
      newProject.className = "project";

      individualContainer.id = `${transformedUserInput}Container`;

      // make list for the new project
      const newList = createList(transformedUserInput);
      saveProjectInStorage(userInput, newList);

      // make each project display their list when clicked
      const projectBtn = document.getElementById(`${transformedUserInput}`);
      projectBtn.addEventListener("click", () => {
        const display = displayTodoList(newList, defaultList);
        newList.items.forEach((item) => {
          const newItem = display.addNewItemToDom(item);
          updateListValues(
            item,
            newItem.domItemTitleValue,
            newItem.domItemDescriptionValue,
            newItem.domItemDueDateValue,
            newItem.domItemPriorityValue
          );
        });
      });

      deleteIcon.addEventListener("click", () => {
        console.log(newList.title);
        deleteList(newList.title, transformedUserInput);

        if (newList.items.length === 0) {
          displayHome();
        }
      });
      return;
    }
    alert("Please specify the new Project's name");
  });
}

function displayActiveProjectsInStorage(defaultList) {
  for (let i = 2; i < allLists.length; i++) {
    // add new project to the sidebar
    const individualContainer = document.createElement("div");
    individualContainer.className = "individualContainer";

    const newProject = document.createElement("span");
    const deleteProject = document.createElement("span");
    const deleteIcon = document.createElement("img");
    deleteProject.setAttribute("class", "iconContainer");

    deleteIcon.src = deleteIconImg;
    deleteIcon.alt = "Delete project button";

    // project title on sidebar
    const { title } = allLists[i];
    if (title.length > 0) {
      // Convert the first character to uppercase and concatenate it with the rest of the string
      const firstChar = title[0].toUpperCase();
      const restOfTitle = title.slice(1);

      const newTitle = firstChar + restOfTitle;

      // Assign the newTitle to newProject.textContent
      newProject.textContent = newTitle;
    } else {
      // Handle the case where the title is an empty string
      newProject.textContent = title;
    }

    projectContainer.appendChild(individualContainer);
    individualContainer.appendChild(newProject);
    individualContainer.appendChild(deleteProject);
    deleteProject.appendChild(deleteIcon);

    deleteIcon.addEventListener("click", () => {
      deleteList(allLists[i].title, allLists[i].title);
    });

    // // modify user input to assign manageable IDs
    newProject.id = allLists[i].title;
    newProject.className = "project";
    individualContainer.id = `${allLists[i].title}Container`;

    // make each project display their list when clicked
    const projectBtn = document.getElementById(`${allLists[i].title}`);
    projectBtn.addEventListener("click", () => {
      const display = displayTodoList(allLists[i], defaultList);
      allLists[i].items.forEach((item) => {
        const newItem = display.addNewItemToDom(item);
        updateListValues(
          item,
          newItem.domItemTitleValue,
          newItem.domItemDescriptionValue,
          newItem.domItemDueDateValue,
          newItem.domItemPriorityValue,
          allLists[i]
        );
      });
    });
  }
}

export {
  displayTodoList,
  completedList,
  addProjectBtnListener,
  displayHome,
  displayActiveProjectsInStorage,
};
