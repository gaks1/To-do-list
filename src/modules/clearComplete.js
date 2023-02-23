import { tasks } from './selector.js';
import storeTask from './storetask.js';
import addTask from './addTask.js';

const checked = (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    const taskDiv = e.target.closest('.task');
    const task = tasks[taskDiv.getAttribute('id') - 1];
    if (e.target.checked) {
      task.completed = true;
    } else {
      task.completed = false;
    }
    storeTask();
  }
};

const buttonClear = () => {
  const taskDivs = document.querySelectorAll('.task');
  taskDivs.forEach((taskDiv) => {
    taskDiv.parentNode.removeChild(taskDiv);
  });
  const newTasks = tasks.filter((task) => task.completed === false);
  tasks.splice(0);
  let i = 1;
  newTasks.forEach((task) => {
    task.index = i;
    i += 1;
    tasks.push(task);
  });
  tasks.forEach((task) => {
    addTask(task);
  });
  storeTask();
};

export { checked, buttonClear };