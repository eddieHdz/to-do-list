import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));










/* const tarea = new Todo('aprender javascript');

todoList.nuevoTodo(tarea);
tarea.completado = false;

crearTodoHtml(tarea);

localStorage.setItem('mi-key','ABCD');
setTimeout(() => {
    localStorage.removeItem('mi-key');
},1500); */