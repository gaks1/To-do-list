import { divtasks } from './selector.js';

const addTask = (task) => {
  const div = document.createElement('div');
  div.classList.add('task');
  div.setAttribute('id', task.index);
  div.innerHTML = `<div class = "task-check margin" id="${task.index}">
                    <input type="checkbox" id="${task.index}" ${task.completed ? 'checked' : ''}>
                    <label for="${task.index}">${task.description}</label>
                    </div>
                    <button class="material-symbols-outlined margin dot" id="${task.index}">more_vert</button>`;
  divtasks.appendChild(div);
};

export default addTask;