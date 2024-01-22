/* eslint-disable no-alert */
import "./styles.css";
import {
  displayTodoList,
  completedList,
  addProjectBtnListener,
  displayHome,
  displayActiveProjectsInStorage,
  defaultList,
} from "./display";
import { updateListValues, getActiveProjectsInStorage } from "./engine";

getActiveProjectsInStorage();
displayActiveProjectsInStorage(defaultList);
displayHome(defaultList);
// displayTodoList(defaultList, defaultList);

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
  displayHome(defaultList);
});

// COMPLETED
const completedBtn = document.getElementById("completedBtn");
console.log(localStorage);
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

const eraseDataBtn = document.getElementById("eraseData");
eraseDataBtn.addEventListener("click", () => {
  localStorage.clear();
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});
