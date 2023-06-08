const qS = document.querySelector.bind(document);

qS('#todo-btn').onclick = async () => {
  const id = qS('#todo-input').value;
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const toDo = await response.json();
  
  qS('#display-div').innerHTML = `
    <div>ID: ${toDo.id}</div>
    <div>Title: ${toDo.title}</div>
    <div>Completed: ${toDo.completed}</div>
  `;
  console.log(toDo);
};