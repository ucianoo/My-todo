const addForm = document.querySelector('.add');
const todosUL = document.querySelector('.todos');


addForm.addEventListener('submit', e => {

    const todo = addForm.add.value.trim();
     console.log(todo)
    e.preventDefault();

    if(todo.length) {
        generateTodo(todo)
        addForm.reset();
    }
})

const generateTodo = (todo) => {
    const html = `
    <li>
     <span>${todo}</span>
     <i class="fa-regular fa-trash-can delete"></i>
    </li>
    `;
    todosUL.innerHTML += html;
}

todosUL.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

