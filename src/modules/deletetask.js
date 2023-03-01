import storeTask from './storetask.js';
import { tasks } from './selector.js';
import addTask from './addTask.js';

const deleteTask = (id, taskDivs) => {
  if (tasks.length === 1) {
    tasks.pop();
  }
  tasks.splice(id - 1, 1);
  taskDivs.forEach((taskDiv) => {
    taskDiv.parentNode.removeChild(taskDiv);
  });
  let i = 1;
  tasks.forEach((task) => {
    task.index = i;
    i += 1;
    addTask(task);
    storeTask();
  });
};

export default deleteTask;