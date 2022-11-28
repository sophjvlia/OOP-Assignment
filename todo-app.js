// My code's a mess sorry about that hahaha
// I'm confused on how to implement the class into my code
// And when I add multiple tasks to my taskList array, it just replaces the previous one

const prompt = require('prompt-sync')({sigint:true});

var taskList = [];

class Task {
    constructor(task) {
        this.task = task;
    }

    viewTask() {
        for (var i = 0; i < taskList.length; i++) {
            if (taskList === []) {
                console.log('You have 0 tasks!');
            } else {
                console.log(`#${i} - ${taskList[i]}`);
            }
        };
    }

    addTask() {
        taskList.splice(taskList.length, 0, this.task);
        console.log(taskList);
    }
}

function displayTodoApp() {
    console.log(`
    --------- TO-DO APP ----------
    What would you like to do?
    1. View my to-do list.
    2. Add a new task.
    3. Edit a task.
    4. Complete a task.
    5. Delete a task.
    6. Quit app.
    `)

    var userInput = prompt('Enter (1/2/3/4/5/6): ');

    switch(userInput) {
        case '2':
            var addTask = prompt('Enter your task: ');
            var task = new Task(addTask + ' ❌');
            task.addTask();
            console.log(taskList.values());
            
        case '1':
            task.viewTask();
            break;
        case '3':
            let editTask = prompt('Enter the task number you would like to edit: ');
            let newTask = prompt('Change the task to: ');
            taskList.splice(Number(editTask), 1, newTask);
            
            break;
        case '4': 
            let completedTask = prompt('Enter the task number you want to mark as complete: ');
            taskList[Number(completedTask)] = taskList[Number(completedTask)] + ' ✔️';
            console.log(taskList);
            break;
        case '5': 
            let deleteTask = prompt('Enter the task number you want to delete: ');
            taskList.splice(Number(deleteTask), 1);
            console.log(taskList);
            break;
        case '6':
            break;
    }
}

displayTodoApp()