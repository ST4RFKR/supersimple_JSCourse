const todoList = [{
    name: 'name dinner',
    dueData : '2023-06-19',
},
{   name:'wash dishes',
    dueData : '2023-06-19',
}
];
const addButton = document.querySelector('.todo-add-btn');

function renderTodoList () {
    
    let todoListHTML  = '';
    for(let i = 0;i < todoList.length;i++){
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueData = todoObject.dueData;
        const {name, dueData} = todoObject;

        const html = `
        <div>${name}</div>
        <div>${dueData}</div>
        <button class="delete-todo-button" onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>
        `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
renderTodoList ();

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
