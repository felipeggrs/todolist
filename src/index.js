/* eslint-disable no-alert */
import "./styles.css";
import { displayTodoList, completedList } from "./display";
import { createList, updateListValues, deleteList } from "./engine";
import deleteIconImg from "./img/x-square.svg";

// default list and items to populate the page
const defaultList = createList("All Projects");
displayTodoList(defaultList, defaultList);

// HOME
function displayHome() {
  const display = displayTodoList(defaultList, defaultList);
  console.log(defaultList);

  // display each item of the list
  defaultList.items.forEach((item) => {
    const newItem = display.addNewItemToDom(item);
    console.log(item);
    updateListValues(
      item,
      newItem.domItemTitleValue,
      newItem.domItemDescriptionValue,
      newItem.domItemDueDateValue,
      newItem.domItemPriorityValue
    );
  });
}

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", displayHome);

// COMPLETED
const completedBtn = document.getElementById("completedBtn");
completedBtn.addEventListener("click", () => {
  console.log(completedList);
  const display = displayTodoList(completedList, defaultList);

  completedList.items.forEach((item) => {
    const newItem = display.addNewItemToDom(item);
    // eslint-disable-next-line no-param-reassign
    item.status = "Completed";
    newItem.domItemTitleValue.contentEditable = false;
    newItem.domItemDescriptionValue.setAttribute("readonly", true);
    newItem.domItemDueDateValue.setAttribute("readonly", true);
    newItem.domItemPriorityValue.setAttribute("disabled", true);
    console.log(item);
    updateListValues(
      item,
      newItem.domItemTitleValue,
      newItem.domItemDescriptionValue,
      newItem.domItemDueDateValue,
      newItem.domItemPriorityValue
    );
  });
});

// ADD PROJECTS
const addProjectBtn = document.getElementById("addProjectBtn");
addProjectBtn.addEventListener("click", () => {
  // grab user input for the project's title
  const userInput = `${prompt("Type new project name")}`;
  if (userInput !== "null") {
    // add new project to the sidebar
    const projectContainer = document.getElementById("projectContainer");
    const individualContainer = document.createElement("div");
    individualContainer.id = "individualContainer";

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

    // make list for the new project
    const newList = createList(transformedUserInput);

    // make each project display their list when clicked
    const projectBtn = document.getElementById(`${transformedUserInput}`);
    projectBtn.addEventListener("click", () => {
      const display = displayTodoList(newList, defaultList);
      console.log(newList);
      newList.items.forEach((item) => {
        console.log(item);
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
      deleteList(newList.title);

      if (newList.items.length === 0) {
        displayHome();
      }
    });
  }
});
