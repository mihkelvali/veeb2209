let inputElement = document.querySelector('input');
let todoListElement = document.querySelector('.todo-list');

let index = 0
let todos = [];

function toggleIsDone(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].isDone = !todos[i].isDone;
        }
    }
    renderTodos();
}

function deleteTodo(id) {
    console.log(id);
    // todo kustutatakse ja list renderdatakse uuesti
}

function renderTodos() {
    todoListElement.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        let klassid = 'todo';
        if (todos[i].isDone) {
            klassid += ' done';
        }
        todoListElement.innerHTML += `
        <div 
            class="${klassid}" 
            onclick="toggleIsDone(${todos[i].id})"
        >
            ${todos[i].text}
            <span onclick="deleteTodo(${todos[i].id})">[x]</span>
        </div>`
    }
    console.log(todos);
}


inputElement.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        todos.push({
            id: index++,
            text: inputElement.value,
            isDone: false,
        });
        inputElement.value = '';
        renderTodos();
    }
});

renderTodos();
