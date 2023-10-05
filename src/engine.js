/* eslint-disable no-param-reassign */
// create todo list

const allLists = [];

function createList(title) {
  const newList = { title, items: [] };

  // Push the newly created list into the 'allLists' array
  allLists.push(newList);
  return newList;
}

function deleteList(title) {
  const indexToDelete = allLists.findIndex((list) => list.title === title);

  if (indexToDelete !== -1) {
    if (allLists[indexToDelete].items.length === 0) {
      // Delete the list itself
      allLists.splice(indexToDelete, 1);

      const projectContainer = document.getElementById("projectContainer");
      const individualContainer = document.getElementById(
        "individualContainer"
      );
      projectContainer.removeChild(individualContainer);

      return;
    }
    alert("Please clear the list before deleting it");
  }
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
function deleteItem(
  todoItemIndex,
  todoList,
  defaultList,
  defaultIndex,
  completedList
) {
  defaultList.items.splice(defaultIndex, 1);
  const [todoItem] = todoList.items.splice(todoItemIndex, 1);

  if (completedList) {
    completedList.items.push(todoItem);
  }
}

// put the item inside the chosen list
function assignItemToList(todoItem, list, defaultList) {
  defaultList.items.push(todoItem);
  if (list !== defaultList) {
    list.items.push(todoItem);
  }
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
  deleteList,
  createItem,
  deleteItem,
  assignItemToList,
  updateListValues,
};
