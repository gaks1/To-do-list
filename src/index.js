import addTask from './modules/addTask.js';
import deleteTask from './modules/deletetask.js';
import editTask from './modules/edittask.js';
import enterATask from './modules/entertask.js';
import './style.css';
import {
  tasks, enterTask, divtasks, clearCompleted,
} from './modules/selector.js';
import { checked, buttonClear } from './modules/clearComplete.js';

enterTask.addEventListener('keyup', (e) => {
  enterATask(e);
});

tasks.forEach((task) => {
  addTask(task);
});

divtasks.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    const taskDivs = document.querySelectorAll('.task');
    const { id } = e.target;
    if (e.target.textContent === 'delete') {
      deleteTask(id, taskDivs);
    }
    taskDivs.forEach((div) => {
      const bt = div.querySelector('.dot');
      bt.textContent = 'more_vert';
      e.target.textContent = 'delete';
      div.style.backgroundColor = 'white';
    });
    const taskDiv = e.target.closest('.task');
    taskDiv.style.backgroundColor = 'yellow';
  }
});

divtasks.addEventListener('blur', () => {
  const taskDivs = document.querySelectorAll('.task');
  taskDivs.forEach((div) => {
    const bt = div.querySelector('.dot');
    bt.textContent = 'more_vert';
    div.style.backgroundColor = 'white';
  });
}, true);

divtasks.addEventListener('click', (e) => {
  editTask(e);
});

divtasks.addEventListener('click', (e) => {
  checked(e);
});

clearCompleted.addEventListener('click', () => {
  buttonClear();
});