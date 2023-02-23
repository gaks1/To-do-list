import addTask from './addTask.js';
import { tasks, enterTask } from './selector.js';
import storeTask from './storetask.js';

const enterATask = (e) => {
  if (e.key === 'Enter') {
    const task = {
      index: tasks.length + 1,
      description: enterTask.value,
      completed: false,
    };
    const taskDivs = document.querySelectorAll('.task');
    taskDivs.forEach((taskDiv) => {
      taskDiv.parentNode.removeChild(taskDiv);
    });
    tasks.push(task);
    tasks.forEach((task) => {
      addTask(task);
    });
    enterTask.value = '';
    storeTask();
  }
};

export default enterATask;
