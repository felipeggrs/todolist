/* eslint-disable no-param-reassign */
// create todo list
function createList(title) {
  return { title, items: [] };
}

// create todo item
function createItem(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
    status: "Pending",
  };
}

// delete todoitem
function deleteItem(todoItemIndex, todoList) {
  todoList.items.splice(todoItemIndex, 1);
  console.log(todoList);
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
    todoItem.description = descValue.value;
    console.log(todoItem);
  });

  dateValue.addEventListener("input", () => {
    todoItem.dueDate = dateValue.value;
    console.log(todoItem);
  });

  priorityValue.addEventListener("change", () => {
    todoItem.priority = priorityValue.value;
    console.log(todoItem);
  });
}

export {
  createList,
  createItem,
  deleteItem,
  assignItemToList,
  updateListValues,
};
