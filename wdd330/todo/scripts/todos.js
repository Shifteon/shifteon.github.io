import { readFromLS, writeToLS } from "./ls.js";
import { addListItem, qs, addListFooter, onTouch } from "./utilities.js";

var todolist = null;


export default class Todo {
    constructor() {
        this.elem = qs("#task-list");
        this.key = "todo";

        this.filter = 1;

        getTodo(this.key);

        this.listTodos();
        // this.addListeners();
    }

    addToDo = () => {
        const task = qs('#task').value;

        saveTodo(task, this.key);

        this.listTodos();
        // this.addListeners();
    };

    listTodos = () => {
        if (todolist) {
            this.elem.innerHTML = '';
            // populate the list of todos
            for (let todo of todolist) {
                addListItem(todo, this.elem, this.complete, this.delete);
            }
        }
        addListFooter(this.elem);
    }

    complete = (id) => {
        completeTodo(id, this.key);
    }

    delete = (id) => {
        deleteTodo(id, this.key);
    }

    addListeners = () => {
        
    };
};

function deleteTodo(id, key) {
    if (todolist) {
        let index = todolist.findIndex(item => item.id == id);
        todolist = todolist.filter(todo => todo.id != todolist[index].id);
        console.log(id);

        writeToLS(key, todolist);
    }
    return;
}

function saveTodo(task, key) {
    const timeStamp = Date.now();

    const todo = {
        id: timeStamp,
        content: task,
        completed: false
    };

    if (todolist) {
        todolist.push(todo);
    } else {
        todolist = [];
        todolist.push(todo);
    }

    writeToLS(key, todolist);
}

function getTodo(key) {
    if (todolist) {
        return todolist;
    } else {
        todolist = readFromLS(key);
        return todolist;
    }
}

function completeTodo(id, key) {
    if (todolist) {
        let index = todolist.findIndex((item) => item.id == id);
        console.log(index);

        todolist[index].completed = !todolist[index].completed;

        writeToLS(key, todolist);
    }
}