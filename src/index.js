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
import {
  updateListValues,
  getActiveProjectsInStorage,
  addClickListener,
} from "./engine";

// INITIALIZE
getActiveProjectsInStorage();
displayActiveProjectsInStorage(defaultList);
displayHome(defaultList);

// HOME BTN
addClickListener("homeBtn", () => {
  displayHome(defaultList);
});

// COMPLETED BTN
addClickListener("completedBtn", () => {
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

// ADD PROJECTS BTN
addClickListener("addProjectBtn", () => {
  addProjectBtnListener(defaultList);
});

// ERASE DATA BTN
addClickListener("eraseData", () => {
  localStorage.clear();
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});
