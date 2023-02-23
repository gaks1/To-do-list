import { tasks } from './selector.js';

const storeTask = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default storeTask;