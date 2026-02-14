var todos = [];
var todoParentElm = document.getElementById('todo-parent');
var todoToBeUpdate = null;
var indexToBeUpdate = null;
var updateBtn = document.getElementById('update_btn');
var addBtn = document.getElementById('add_btn');

function deleteTodo(id){
    console.log(id);

    for(var i=0; i<todos.length; i++){
        // console.log(todos[i])

        if( todos[i].id == id){
            // console.log('found at index: '+ i);
            todos.splice(i,1);  // this updates the array (remove the specific object of todo)
            renderTodos(); // re-render the updated array
        }
    }

}

function editTodo(id){
    console.log(id);
    var todoInput = document.getElementById('todo-input');
    
    addBtn.style.display = 'none'
    updateBtn.style.display = 'inline'
    
    for(var i=0; i<todos.length; i++){
        if(id == todos[i].id){
            console.log(todos[i]);
            todoInput.value = todos[i].text;
            todoToBeUpdate = todos[i];
            indexToBeUpdate = i;
        }
        
    }
    
}

function updateTodo(){
    var todoInput = document.getElementById('todo-input');
    console.log(todoInput.value)


    todos[indexToBeUpdate].text = todoInput.value;

    // OR
     
    // todos.splice(indexToBeUpdate, 1, {
    //     id: todoToBeUpdate.id,  // id from previous data
    //     createdAt: todoToBeUpdate.createdAt, /// createAt from previous data
    //     text: todoInput.value,/// new text value from input
    // });
    addBtn.style.display = 'inline';
    updateBtn.style.display = 'none';
    todoInput.value = '';

    renderTodos();// re-render the updated array

}

function addTodo() {
    var todoInput = document.getElementById('todo-input');
    if (todoInput.value.length < 1) {
        alert('please input the todo');
        return;
    };

    var todoObj = {
        id: (new Date().getTime()) + Math.floor(Math.random() * 999), /// generate random id
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
    todoParentElm.innerHTML = '';
    for (var i = 0; i < todos.length; i++) {
        // var pElm = document.createElement('p');
        // pElm.innerText =  todos[i];
        // todoParentElm.appendChild(pElm);

        // OR

        todoParentElm.innerHTML += `<div class='todo'>
        <span>${todos[i].text}</span>
        <button onClick='editTodo(${todos[i].id})'>edit</button>
        <button onClick='deleteTodo(${todos[i].id})'>delete</button>
        <span>${todos[i].createdAt.getDate()} - ${todos[i].createdAt.getMonth() + 1} - ${todos[i].createdAt.getFullYear()}</span>
        </div>`
    }
}
