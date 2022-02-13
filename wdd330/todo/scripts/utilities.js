function qs(selector) {
    return document.querySelector(selector);
}

function onTouch(elementSelector, callback) {
    // do I need to check if touchend can be used, or is this good?
    // elementSelector.addEventListener('touchend', callback);
    elementSelector.addEventListener('click', callback);
}

function addListItem(todo, elementSelector, completeCB, deleteCB) {
    const li = document.createElement('li');
    li.id = todo.id;
    li.classList.add('task');
    if (todo.completed) {
      li.classList.add('completed');
    }

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'done';
    input.id = 'done';
    if (todo.completed) {
      input.checked = true;
    }

    input.addEventListener('change', () => {
      li.classList.toggle("completed");
      completeCB(todo.id);
    });

    li.appendChild(input);

    const p = document.createElement('p');
    p.innerText = todo.content;
    li.appendChild(p);

    const button = document.createElement('button');
    button.innerText = 'X';
    button.classList.add('delete');
    button.addEventListener('click', () => {
      deleteCB(todo.id);
      li.style.display = "none";
    });
    li.appendChild(button);

    elementSelector.appendChild(li);

    return {li: li, input: input, button: button};
}

function addListFooter(elementSelector) {
    const li = document.createElement('li');
    li.id = "tasks-footer";

    li.innerHTML = `
        <p>3 tasks left</p>
        <label class="active" id="all">
          <input type="radio">
          <p>All</p>
        </label>
        <label id="active">
          <input type="radio">
          <p>Active</p>
        </label>
        <label id="completed">
          <input type="radio">
          <p>Completed</p>
        </label>`;

    elementSelector.appendChild(li);

    let tasks = document.querySelectorAll('.task');
    qs("#all").addEventListener('click', () => {
        for (let task of tasks) {
            task.style.display = "grid";
        }
        qs('#all').classList.add('active');
        qs('#active').classList.remove('active');
        qs('#completed').classList.remove('active');
    });

    qs("#active").addEventListener('click', () => {
        for (let task of tasks) {
            if (!task.classList.contains("completed")) {
                task.style.display = "grid";
            } else {
                task.style.display = "none";
            }
        }
        qs('#active').classList.add('active');
        qs('#all').classList.remove('active');
        qs('#completed').classList.remove('active');
    });
    
    qs("#completed").addEventListener('click', () => {
        for (let task of tasks) {
            if (task.classList.contains("completed")) {
                task.style.display = "grid";
            } else {
                task.style.display = "none";
            }
        }
        qs('#completed').classList.add('active');
        qs('#active').classList.remove('active');
        qs('#all').classList.remove('active');
    });
}

export { qs, onTouch, addListItem, addListFooter };