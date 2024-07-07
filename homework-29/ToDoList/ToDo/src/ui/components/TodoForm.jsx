import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../core/slice/toDoSlice';

function TodoForm() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.length >= 5) {
      dispatch(addTodo({
        id: Date.now(),
        task,
      }));
      setTask('');
    } else {
      alert('Task should be at least 5 characters long');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a Task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
