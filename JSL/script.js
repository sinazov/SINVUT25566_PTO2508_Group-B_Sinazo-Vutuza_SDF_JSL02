// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");
// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):",
).toLowerCase();
// Keep asking until the user enters a valid status for task 1
// This loop prevents invalid status from being stored
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):",
  ).toLowerCase();
}
// Ask the user for the title and description of task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
// Ask for the status of task 2 and convert it to lowercase
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):",
).toLowerCase();

// Keep asking until the user enters a valid status for task 2
// This loop prevents invalid status from being stored

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):",
  ).toLowerCase();
}