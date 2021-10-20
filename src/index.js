import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

const todoList = new TodoList();
const tarea = new Todo('aprender javascript');

todoList.nuevoTodo(tarea);

console.log(todoList);
tarea.completado = false;

crearTodoHtml(tarea);