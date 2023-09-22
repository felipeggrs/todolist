/* eslint-disable no-param-reassign */
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

// Update the title, description, due date and priority when the user edits it
function updateListValues(
  todoItem,
  titleValue,
  descValue,
  dateValue,
  priorityValue
) {
  titleValue.addEventListener("input", () => {
    todoItem.title = titleValue.textContent;
    console.log(todoItem);
  });

  descValue.addEventListener("input", () => {
    todoItem.description = descValue.textContent;
    console.log(todoItem);
  });

  dateValue.addEventListener("input", () => {
    todoItem.dueDate = dateValue.textContent;
    console.log(todoItem);
  });

  priorityValue.addEventListener("input", () => {
    todoItem.priority = priorityValue.textContent;
    console.log(todoItem);
  });
}

export { createList, createItem, assignItemToList, updateListValues };
