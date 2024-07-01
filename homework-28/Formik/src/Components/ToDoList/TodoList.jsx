import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ToDoList.module.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const validationSchema = Yup.object({
    task: Yup.string()
      .min(5, 'Task must be at least 5 characters long')
      .required('Task is required')
  });

  const addTask = (values, { resetForm }) => {
    setTasks([...tasks, values.task]);
    resetForm();
  };

  return (
    <div className={s.container}>
      <h1>To Do List</h1>
      <Formik
        initialValues={{ task: '' }}
        validationSchema={validationSchema}
        onSubmit={addTask}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="task" placeholder="Add a Task" />
              <ErrorMessage name="task" component="div" className={s.error} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Add
            </button>
          </Form>
        )}
      </Formik>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => {
              const newTasks = [...tasks];
              newTasks.splice(index, 1);
              setTasks(newTasks);
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
