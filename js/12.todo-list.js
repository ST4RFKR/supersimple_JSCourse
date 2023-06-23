
let todoList = JSON.parse(localStorage.getItem('task-item')) || [{
    name: 'name dinner',
    dueData : '2023-06-19',
    checked : false,
},
{   name:'wash dishes',
    dueData : '2023-06-19',
    checked : false,
}
];

function renderTodoList () {
    let todoListHTML  = '';

    todoList.forEach((todoObject, index) => {
        const {name, dueData, checked} = todoObject;
        const html = `
        <div class="js-name-item">${name}</div>
        <div>${dueData}</div>
        <button class="delete-todo-button"
        >Delete</button>
        `;
        todoListHTML += html;
        // saveData();

    });
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    document.querySelectorAll('.delete-todo-button').forEach((item , i ) =>{
        item.addEventListener('click', () => {
            todoList.splice(i, 1);
            saveData();
                renderTodoList();
        });
    });
 
}
renderTodoList ();





document.querySelector('.add-todo-button').addEventListener('click', () => {
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
        checked : false
    });

    inputElem.value = '';


    renderTodoList();
    check ();
    saveData();
}
function check () {
    const jsName = document.querySelectorAll('.js-name-item');
    jsName.forEach((item, i) => {
        item.addEventListener('click', () =>{
            if (!item.classList.contains('checked')){
                item.classList.add('checked');
                todoList[i].checked = true;
                console.log(todoList);
                saveData();
            }else {
                item.classList.remove('checked');
                todoList[i].checked = false;
                console.log(todoList);
                saveData();
            }
        });

        if(todoList[i].checked){
            item.classList.add('checked');
            saveData();
        }else{
            item.classList.remove('checked');
            saveData();
        }
    });
};
check ();

let json = JSON.stringify(todoList);
console.log(json);

function saveData(){
    localStorage.setItem('task-item', JSON.stringify(todoList));
} 
saveData();

