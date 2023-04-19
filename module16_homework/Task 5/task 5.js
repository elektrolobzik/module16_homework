const idInput = document.getElementById('user-id-input');
const idButton = document.getElementById('get-todos-button');
const todoList = document.getElementById('todos-list');

idButton.addEventListener('click', () => {
  const userId = idInput.value;
  const url = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      } else {
          return response.json();
      }
    })
    .then(todos => {
      todoList.innerHTML = '';

      if (todos.length === 0) {
        return (todoList.innerHTML = 'У пользователя нет задач.');
      }

      const todosElements = todos.map(todo => {
        const li = document.createElement('li');

        if (todo.completed) {
          li.innerHTML = `<del>${todo.title}</del>`;
        } else {
          li.innerHTML = todo.title;
        }
        return li;
      });

      todosElements.forEach(todoElement => {
        todoList.appendChild(todoElement);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      todoList.innerHTML = 'Произошла ошибка при получении задач. Попробуйте позже.';
    });
});