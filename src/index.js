/* eslint-disable no-alert */
import "./styles.css";
import displayTodoList from "./display";
import { createList } from "./engine";
// import { formatDistance, subDays } from "date-fns";

// default list and items to populate the page
const defaultList = createList("default");
displayTodoList(defaultList);

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
  displayTodoList(defaultList);
});

// button for the user to add new projects
const addProjectBtn = document.getElementById("addProjectBtn");
addProjectBtn.addEventListener("click", () => {
  // grab user input for the project's title
  const userInput = `${prompt("Type new project name")}`;
  if (userInput !== "null") {
    // add new project to the sidebar
    const projectContainer = document.getElementById("projectContainer");
    const newProject = document.createElement("div");
    newProject.textContent = userInput;
    projectContainer.appendChild(newProject);

    // modify user input to assign manageable IDs
    const transformedUserInput = userInput.toLowerCase().replace(/\s+/g, "-");
    newProject.id = transformedUserInput;
    newProject.className = "project";

    // make list for the new project
    const newList = createList(transformedUserInput);

    // make each project display their list when clicked
    const projectBtn = document.getElementsByClassName("project");
    const projectArray = Array.from(projectBtn);
    projectArray.forEach((project) => {
      project.addEventListener("click", () => {
        displayTodoList(newList);
      });
    });
  }
});
