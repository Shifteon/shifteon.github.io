import Todo from "./todos.js";
import {qs} from "./utilities.js";

const todo = new Todo();

qs("#add-task").addEventListener('submit', () => {
    todo.addToDo();
    // keep it from submitting to the action
    event.preventDefault();
});