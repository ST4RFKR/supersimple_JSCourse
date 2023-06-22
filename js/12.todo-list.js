const todoList = [{
    name: 'name dinner',
    dueData : '2023-06-19',
},
{   name:'wash dishes',
    dueData : '2023-06-19',
}
];

function renderTodoList () {
    let todoListHTML  = '';

    todoList.forEach((todoObject, index) => {
        const {name, dueData} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueData}</div>
        <button class="delete-todo-button"
        >Delete</button>
        `;
        todoListHTML += html;
    });
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    document.querySelectorAll('.delete-todo-button').forEach((item , i ) =>{
        item.addEventListener('click', () => {
            todoList.splice(i, 1);
                renderTodoList();
        })
    })
}
renderTodoList ();

document.querySelector('.todo-add-btn').addEventListener('click', () => {
    addTodo();
})

function addTodo(){

    const inputElem = document.querySelector('.js-name-input');
    const name = inputElem.value;

    const dateInputElem = document.querySelector('.js-date-input');
    const dueData = dateInputElem.value;

    todoList.push({
        name: name,
        dueData: dueData,
    });

    inputElem.value = '';


    renderTodoList();
}
