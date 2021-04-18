import { Todo, TodoList } from './classes'         // Cuando no se específica un archivo, buscará el index.js por defecto
import { crearTodoHtml } from './js/componenetes';

import './styles.css';

export const todoList = new TodoList();


// todoList.todos.forEach( todo => crearTodoHtml( todo ) );
// La linea anterior es similar a la siguiente y solo aplica cuando se recibe un argumento
// en el crearTodoHtml y se tiene un argumento del callback de la funcion llamada, en este caso el forEach
todoList.todos.forEach( crearTodoHtml );
