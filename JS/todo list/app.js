var todos = [];
var todoParentElm = document.getElementById('todo-parent')

function addTodo() {
    var todoInput = document.getElementById('todo-input');
    if (todoInput.value.length < 1) {
        alert('please input the todo');
        return;
    };

    var todoObj = {
        text: todoInput.value,
        createdAt: new Date(),
    }
    todos.push(todoObj);

    todoInput.value = '';
    renderTodos();
    console.log(todos)
}

// CRUD
// C - create
// R - read
// U - update
// D - delete

function renderTodos() {
    todoParentElm.innerHTML = ''
    for (var i = 0; i < todos.length; i++) {
        // var pElm = document.createElement('p');
        // pElm.innerText =  todos[i];
        // todoParentElm.appendChild(pElm);

        todoParentElm.innerHTML += `<div class='todo'>
        <span>${todos[i].text}</span>
        <button>delete</button>
        <span>${todos[i].createdAt.getDate()} - ${todos[i].createdAt.getMonth() + 1} - ${todos[i].createdAt.getFullYear()}</span>
        </div>`
    }
}

