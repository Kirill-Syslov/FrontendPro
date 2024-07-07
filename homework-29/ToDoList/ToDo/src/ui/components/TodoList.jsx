import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos.items);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}

export default TodoList;
