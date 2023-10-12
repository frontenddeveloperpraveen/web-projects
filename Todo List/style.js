const add_btn = document.querySelector('#add');
const div = document.querySelector('.display');

// Function to save the task list to localStorage
const saveTaskList = () => {
    const taskList = Array.from(div.children)
      .filter((element) => !element.classList.contains('edit'))
      .map((element) => element.outerHTML)
      .join('');
    
    localStorage.setItem('taskList', taskList);
  }

// Function to load the task list from localStorage
const loadTaskList = () => {
    const savedTaskList = localStorage.getItem('taskList');
    if (savedTaskList) {
        div.innerHTML = savedTaskList;
    }
};

// Add event listener to load the task list on page load
document.addEventListener('DOMContentLoaded', loadTaskList);

add_btn.addEventListener('click', () => {
    const new_div = document.createElement('div');
    const taskInput = document.querySelector('#task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        let htmlContent = `<div>
            <i class="fa-regular fa-square click"></i>
            <p>${taskText}</p>
            <i class="fa-sharp fa-solid fa-circle-xmark cut"></i>
        </div>`;
        
        new_div.innerHTML = htmlContent;
        div.appendChild(new_div);
        taskInput.value = '';
        
        // Save the updated task list
        saveTaskList();
    }
});

div.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('click')) {
        const para = clickedElement.nextElementSibling;
        para.classList.add('edit');
        clickedElement.classList.remove('fa-regular', 'fa-square');
        clickedElement.classList.add('fa-solid', 'fa-square-check');
    } else if (clickedElement.classList.contains('cut')) {
        const divElement = clickedElement.parentElement;
        divElement.remove();
        
        // Save the updated task list
        saveTaskList();
    }
    
    // Save the updated task list if a task is marked as completed
    saveTaskList();
});
