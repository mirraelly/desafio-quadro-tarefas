const inputNewTaskDay = document.querySelector('.new-task-day');
const inputNewTaskNight = document.querySelector('.new-task-night');
const olDayTask = document.getElementsByClassName('task-day')[0];
const olNightTask = document.getElementsByClassName('task-night')[0];
const formDay = document.querySelector('.form-day');
const formNight = document.querySelector('.form-night');

// events
formDay.addEventListener('submit', (event) => {
    event.preventDefault();
    addTaskDay(inputNewTaskDay.value);
})

formNight.addEventListener('submit', (event) => {
    event.preventDefault();
    addTaskNight(inputNewTaskNight.value);
})


// day
function addTaskDay(text) {
    if (olDayTask.children.length > 9) {
        alert('Você atingiu o limite de 10 tarefas no campo Dia.');
        return;
    }

    const itemDay = document.createElement('li');
    itemDay.innerHTML = `${text} <a href="#" class="delete-task">❌</a>`;
    inputNewTaskDay.value = '';
    olDayTask.appendChild(itemDay);

    const deleteTask = itemDay.querySelector('.delete-task');
    deleteTask.addEventListener('click', () => {
        itemDay.remove();
    })
}

// night
function addTaskNight(text) {
    if (olNightTask.children.length > 9) {
        alert('Você atingiu o limite de 10 tarefas no campo Noite.');
        return;
    }

    const itemNight = document.createElement('li');
    itemNight.innerHTML = `${text} <a href="#" class="delete-task">❌</a>`;
    inputNewTaskNight.value = '';
    olNightTask.appendChild(itemNight);

    const deleteTask = itemNight.querySelector('.delete-task');
    deleteTask.addEventListener('click', () => {
        itemNight.remove();
    })
}

