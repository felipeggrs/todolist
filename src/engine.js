/* eslint-disable no-param-reassign */
// create todo list

const allLists = [];
const projectContainer = document.getElementById("projectContainer");

function createList(title) {
  const newList = { title, items: [] };
  console.log(allLists);

  // Push the newly created list into the 'allLists' array
  allLists.push(newList);
  return newList;
}

function deleteList(title, transformedUserInput) {
  const indexToDelete = allLists.findIndex((list) => list.title === title);
  console.log(allLists);
  console.log(`indexToDelete:${indexToDelete}`);

  if (indexToDelete !== -1) {
    if (allLists[indexToDelete].items.length === 0) {
      // Delete the list itself
      localStorage.removeItem(title);
      allLists.splice(indexToDelete, 1);

      const individualContainer = document.getElementById(
        `${transformedUserInput}Container`
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

// localStorage item updating main function
function updateItemToStorage(todoItem, todoList, property) {
  const itemIndex = todoList.items.indexOf(todoItem);
  const list = JSON.parse(localStorage.getItem(todoList.title));
  list.items[itemIndex][property] = todoItem[property];
  const updatedList = JSON.stringify(list);
  localStorage.setItem(todoList.title, updatedList);
}

// Update the title, description, due date and priority when the user edits it
function updateListValues(
  todoItem,
  titleValue,
  descValue,
  dateValue,
  priorityValue,
  todoList
) {
  titleValue.addEventListener("input", () => {
    // realtime update
    todoItem.title = titleValue.textContent;
    // localStorage updating
    updateItemToStorage(todoItem, todoList, "title");
  });

  descValue.addEventListener("input", () => {
    // realtime update
    todoItem.description = descValue.value;
    // localStorage updating
    updateItemToStorage(todoItem, todoList, "description");
  });

  dateValue.addEventListener("input", () => {
    // realtime update
    todoItem.dueDate = dateValue.value;
    // localStorage updating
    updateItemToStorage(todoItem, todoList, "dueDate");
  });

  priorityValue.addEventListener("change", () => {
    // realtime update
    todoItem.priority = priorityValue.value;
    // localStorage updating
    updateItemToStorage(todoItem, todoList, "priority");
  });
}

function saveProjectInStorage(userInput, project) {
  localStorage.setItem(userInput.toLowerCase(), JSON.stringify(project));
  console.log(localStorage);
}

function getActiveProjectsInStorage() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < localStorage.length; i++) {
    const storageKey = localStorage.key(i);
    const project = JSON.parse(localStorage.getItem(storageKey));
    allLists.push(project);
    console.log(allLists);
  }
}

export {
  createList,
  deleteList,
  createItem,
  deleteItem,
  assignItemToList,
  updateListValues,
  saveProjectInStorage,
  getActiveProjectsInStorage,
  allLists,
};
