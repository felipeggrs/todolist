import "./styles.css";
import displayTodoList from "./display";
import { createList, createItem, assignItemToList } from "./engine";
// import { formatDistance, subDays } from "date-fns";

// default list and items to populate the page
const defaultList = createList("default list");
const defaultItem1 = createItem(
  "<Change title>",
  "<Change description>",
  "<Select due date>",
  "<Select priority>"
);

assignItemToList(defaultItem1, defaultList);
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
    const newList = createList(transformedUserInput);
    assignItemToList(defaultItem1, newList);
    newProject.className = "project";
    projectContainer.appendChild(newProject);
    console.log(newList);

    const projectBtn = document.getElementsByClassName("project");
    const projectArray = Array.from(projectBtn);

    projectArray.forEach((project) => {
      project.addEventListener("click", () => {
        displayTodoList(newList);
      });
    });
  }
});
