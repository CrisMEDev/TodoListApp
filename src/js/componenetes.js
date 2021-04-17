
// Referencias en el html
const divTodoList = document.querySelector('.todo-list');


export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');          // Se agrega dentro del div la etiqueta en la variable htmlTodo
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);          // INSERTA EL PRIMER HIJO (PARA NO INSERTAR EL DIV Y SOLO EL li)

    return div.firstElementChild;

}

