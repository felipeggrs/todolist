import "./styles.css";
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

const defaultList = createList("default list");
const defaultItem = createItem(
  "Wake up",
  "Time to leave the bed",
  "September 20, 2023",
  "High"
);

assignItemToList(defaultItem, defaultList);
console.log(defaultList);
