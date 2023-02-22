import './style.css';

const tasks = [
  { description: 'Walk the dog', completed: false, index: 0 },
  { description: 'Buy groceries', completed: false, index: 1 },
  { description: 'Do laundry', completed: false, index: 2 },
  { description: 'Call mom', completed: false, index: 3 },
];

const divtasks = document.querySelector('.tasks');

const addTask = (task) => {
  const div = document.createElement('div');
  div.classList.add('task');
  div.innerHTML = `<div class = "task-check">
                    <input type="checkbox" id="${task.index}" ${task.completed ? 'checked' : ''}>
                    <label for="${task.index}">${task.description}</label>
                    </div>
                    <span class="material-symbols-outlined">more_vert</span>`;
  divtasks.appendChild(div);
};

tasks.forEach((task) => {
  addTask(task);
});
