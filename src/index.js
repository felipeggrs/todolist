/* eslint-disable no-alert */
import "./styles.css";
import {
  displayTodoList,
  completedList,
  addProjectBtnListener,
  displayHome,
  displayActiveProjectsInStorage,
} from "./display";
import {
  createList,
  updateListValues,
  getActiveProjectsInStorage,
} from "./engine";

// default list and items to populate the page
const defaultList = createList("All Projects");
displayTodoList(defaultList, defaultList);

console.log(localStorage);
getActiveProjectsInStorage();
displayActiveProjectsInStorage(defaultList);

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
  displayHome(defaultList);
});

// COMPLETED
const completedBtn = document.getElementById("completedBtn");
completedBtn.addEventListener("click", () => {
  const display = displayTodoList(completedList, defaultList);

  completedList.items.forEach((item) => {
    const newItem = display.addNewItemToDom(item);
    // eslint-disable-next-line no-param-reassign
    item.status = "Completed";
    newItem.domItemTitleValue.contentEditable = false;
    newItem.domItemDescriptionValue.setAttribute("readonly", true);
    newItem.domItemDueDateValue.setAttribute("readonly", true);
    newItem.domItemPriorityValue.setAttribute("disabled", true);
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
  addProjectBtnListener(defaultList);
});
