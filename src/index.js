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

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
  displayTodoList(defaultList);
});

const addProjectBtn = document.getElementById("addProjectBtn");
addProjectBtn.addEventListener("click", () => {
  const userInput = `${prompt("Type new project name")}`;
  if (userInput !== "null") {
    const projectContainer = document.getElementById("projectContainer");
    const newProject = document.createElement("div");
    const transformedUserInput = userInput.toLowerCase().replace(/\s+/g, "-");
    newProject.textContent = userInput;
    newProject.id = transformedUserInput;
    newProject.className = "project";
    projectContainer.appendChild(newProject);
  }
});
