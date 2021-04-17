import { Todo, TodoList } from './classes'         // Cuando no se específica un archivo, buscará el index.js por defecto
import { crearTodoHtml } from './js/componenetes';

import './styles.css';

export const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');

todoList.nuevoTodo(tarea);

// console.log(tarea);
console.log(todoList);

crearTodoHtml( tarea );