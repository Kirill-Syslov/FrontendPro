import { useSelector } from 'react-redux';

function TodoFooter() {
  const todoCount = useSelector((state) => state.todos.items.length);

  return (
    <footer>
      Total Todos: {todoCount}
    </footer>
  );
}

export default TodoFooter;
