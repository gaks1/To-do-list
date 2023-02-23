export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
export const divtasks = document.querySelector('.tasks');
export const enterTask = document.querySelector('input');
export const clearCompleted = document.querySelector('.complete');