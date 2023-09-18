import "./styles.css";
import displayTodoList from "./display";
// import { formatDistance, subDays } from "date-fns";

// create todo list
function createList(title) {
  return { title, items: [] };
}

// create todo item
function createItem(title, description, dueDate, priority) {
  return { title, description, dueDate, priority, status: "Pending" };
}

// put the item inside the chosen list
function assignItemToList(todoItem, list) {
  list.items.push(todoItem);
}

// default list and items to populate the page
const defaultList = createList("default list");
const defaultItem1 = createItem(
  "Wake up",
  "Time to leave the bed",
  "September 20, 2023",
  "High"
);

const defaultItem2 = createItem(
  "Sleep",
  "Time to go to bed",
  "September 21, 2023",
  "High"
);

const defaultItem3 = createItem(
  "Study",
  "Time to study",
  "September 22, 2023",
  "Low"
);

assignItemToList(defaultItem1, defaultList);
assignItemToList(defaultItem2, defaultList);
assignItemToList(defaultItem3, defaultList);

const { addItemBtn, domList } = displayTodoList(defaultList);

addItemBtn.addEventListener("click", () => {
  const newItem = createItem("3", "2", "3", "4");
  assignItemToList(newItem, defaultList);
  // Update the existing list with the new item
  const domItem = document.createElement("li");
  domItem.textContent = `Title: ${newItem.title} / Description: ${newItem.description} / Due Date: ${newItem.dueDate} / Priority: ${newItem.priority}`;
  domList.insertBefore(domItem, addItemBtn); // put the item before the add button
});
