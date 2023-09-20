import "./styles.css";
import displayTodoList from "./display";
import { createList, createItem, assignItemToList } from "./engine";
// import { formatDistance, subDays } from "date-fns";

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

displayTodoList(defaultList);

// add new todo to the list

// chatgpt working solution:
// function createEditableItem(todoItem) {
//   const listItem = document.createElement("li");

//   // Create non-editable text nodes for property labels
//   const titleLabel = document.createTextNode("Title: ");
//   const descriptionLabel = document.createTextNode("Description: ");
//   const dueDateLabel = document.createTextNode("Due Date: ");
//   const priorityLabel = document.createTextNode("Priority: ");

//   // Create editable div elements for the above property values
//   const titleDiv = document.createElement("div");
//   titleDiv.textContent = todoItem.title;
//   titleDiv.contentEditable = true;
//   titleDiv.addEventListener("input", () => {
//     // Update the title when the user edits it
//     todoItem.title = titleDiv.textContent;
//   });

//   const descriptionDiv = document.createElement("div");
//   descriptionDiv.textContent = todoItem.description;
//   descriptionDiv.contentEditable = true;
//   descriptionDiv.addEventListener("input", () => {
//     // Update the description when the user edits it
//     todoItem.description = descriptionDiv.textContent;
//   });

//   const dueDateDiv = document.createElement("div");
//   dueDateDiv.textContent = todoItem.dueDate;
//   dueDateDiv.contentEditable = true;
//   dueDateDiv.addEventListener("input", () => {
//     // Update the due date when the user edits it
//     todoItem.dueDate = dueDateDiv.textContent;
//   });

//   const priorityDiv = document.createElement("div");
//   priorityDiv.textContent = todoItem.priority;
//   priorityDiv.contentEditable = true;
//   priorityDiv.addEventListener("input", () => {
//     // Update the priority when the user edits it
//     todoItem.priority = priorityDiv.textContent;
//   });

//   // Append the label and editable value elements to the list item
//   listItem.appendChild(titleLabel);
//   listItem.appendChild(titleDiv);
//   listItem.appendChild(descriptionLabel);
//   listItem.appendChild(descriptionDiv);
//   listItem.appendChild(dueDateLabel);
//   listItem.appendChild(dueDateDiv);
//   listItem.appendChild(priorityLabel);
//   listItem.appendChild(priorityDiv);

//   return listItem;
// }

// function addEditableItemToList(todoItem) {
//   const domItem = createEditableItem(todoItem);
//   domList.insertBefore(domItem, addItemBtn);
// }

// // Event listener to add new todo item
// addItemBtn.addEventListener("click", () => {
//   const newItem = createItem(
//     "New Title",
//     "New Description",
//     "New Due Date",
//     "New Priority"
//   );
//   assignItemToList(newItem, defaultList);
//   addEditableItemToList(newItem, defaultList);
// });
