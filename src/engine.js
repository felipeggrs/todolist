/* eslint-disable no-param-reassign */
// create todo list

const allLists = [];
const projectContainer = document.getElementById("projectContainer");

function createList(title) {
  const newList = { title, items: [] };

  // Push the newly created list into the 'allLists' array
  allLists.push(newList);
  return newList;
}

function deleteList(title, transformedUserInput) {
  const indexToDelete = allLists.findIndex((list) => list.title === title);

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
    token: `${Math.floor(Math.random() * 1000000) + 1}`,
  };
}

function saveListToLocalStorage(key, list) {
  localStorage.setItem(key, JSON.stringify(list));
}

function deleteItem(
  todoItemIndex,
  todoList,
  defaultList,
  defaultIndex,
  completedList
) {
  // Remove item from defList (defaultList saved in Storage) and update in localStorage
  const defList = JSON.parse(localStorage.getItem("all projects"));
  defList.items.splice(defaultIndex, 1);
  saveListToLocalStorage("all projects", defList);

  // Remove item from todoList and update in localStorage
  const [todoItem] = todoList.items.splice(todoItemIndex, 1);
  saveListToLocalStorage(todoList.title, todoList);

  if (completedList) {
    // Move the item to completedList and update in localStorage
    completedList.items.push(todoItem);
    saveListToLocalStorage("completed", completedList);
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
  console.log("updateItemToStorage function");
  const itemIndex = todoList.items.indexOf(todoItem);
  const list = JSON.parse(localStorage.getItem(todoList.title));
  list.items[itemIndex][property] = todoItem[property];
  const updatedList = JSON.stringify(list);
  localStorage.setItem(todoList.title, updatedList);

  // update Home as well
  localStorage.setItem("all projects", JSON.stringify(allLists[0]));
  const allProjects = JSON.parse(localStorage.getItem("all projects"));

  list.items.forEach((listItem) => {
    const index = allProjects.items.findIndex(
      (projectItem) => projectItem.token === listItem.token
    );

    if (index !== -1) {
      allProjects.items[index] = listItem; // Replace existing item in allProjects
    } else {
      allProjects.items.push(listItem); // Add item if it doesn't exist in allProjects
    }
  });
  console.log(allProjects);

  localStorage.setItem("all projects", JSON.stringify(allProjects));
  allLists[0].items = allProjects.items;
}

function saveProjectInStorage(userInput, project) {
  localStorage.setItem(userInput.toLowerCase(), JSON.stringify(project));
  console.log(localStorage);
}

// Update the title, description, due date and priority when the user edits it
function updateListValues(
  todoItem,
  titleValue,
  descValue,
  dateValue,
  priorityValue,
  todoList,
  defaultList
) {
  titleValue.addEventListener("input", () => {
    // realtime update
    todoItem.title = titleValue.textContent;
    // save to localStorage
    saveProjectInStorage(todoList.title, todoList);
    saveProjectInStorage(defaultList.title, defaultList);

    // localStorage updating
    updateItemToStorage(todoItem, todoList, "title");
  });

  descValue.addEventListener("input", () => {
    // realtime update
    todoItem.description = descValue.value;
    // save to localStorage
    saveProjectInStorage(todoList.title, todoList);
    saveProjectInStorage(defaultList.title, defaultList);
    // localStorage updating
    updateItemToStorage(todoItem, todoList, "description");
  });

  dateValue.addEventListener("input", () => {
    // realtime update
    todoItem.dueDate = dateValue.value;
    // save to localStorage
    saveProjectInStorage(todoList.title, todoList);
    saveProjectInStorage(defaultList.title, defaultList);
    // localStorage updating
    updateItemToStorage(todoItem, todoList, "dueDate");
  });

  priorityValue.addEventListener("change", () => {
    // realtime update
    todoItem.priority = priorityValue.value;
    // save to localStorage
    saveProjectInStorage(todoList.title, todoList);
    saveProjectInStorage(defaultList.title, defaultList);
    // localStorage updating
    updateItemToStorage(todoItem, todoList, "priority");
  });
}

function getActiveProjectsInStorage() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < localStorage.length; i++) {
    const storageKey = localStorage.key(i);
    const project = JSON.parse(localStorage.getItem(storageKey));

    // Check if an object with the same title already exists
    const existingIndex = allLists.findIndex(
      (item) => item.title === project.title
    );

    if (existingIndex !== -1) {
      // If it exists, replace the existing object with the new one
      allLists[existingIndex] = project;
    } else {
      // If it doesn't exist, add the new object to the array
      allLists.push(project);
    }
  }
}

function addClickListener(elementId, callback) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", callback);
  } else {
    console.error(`Element with id ${elementId} not found.`);
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
  addClickListener,
  allLists,
};
