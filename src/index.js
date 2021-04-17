import { Todo, TodoList } from './classes'         // Cuando no se específica un archivo, buscará el index.js por defecto

import './styles.css';

const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Comprar un unicornio');

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

// console.log(tarea);
console.log(todoList);