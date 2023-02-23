import storeTask from './storetask.js';
import { tasks } from './selector.js';

const editTask = (e) => {
  if (e.target.nodeName === 'LABEL') {
    const taskDiv = e.target.closest('.task');
    const task = tasks[taskDiv.getAttribute('id')];
    const editInput = document.createElement('input');
    editInput.value = task.description;
    e.target.parentNode.replaceChild(editInput, e.target);
    editInput.focus();

    editInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        task.description = editInput.value;
        storeTask();
        const newLabel = document.createElement('label');
        newLabel.setAttribute('for', task.index);
        newLabel.textContent = task.description;
        editInput.parentNode.replaceChild(newLabel, editInput);
      }
    });
    editInput.addEventListener('blur', () => {
      task.description = editInput.value;
      storeTask();
      const newLabel = document.createElement('label');
      newLabel.setAttribute('for', task.index);
      newLabel.textContent = task.description;
      editInput.parentNode.replaceChild(newLabel, editInput);
    });
  }
};

export default editTask;