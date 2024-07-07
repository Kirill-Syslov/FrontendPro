// import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../core/store';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoFooter from '../components/TodoFooter';
import "../App/App.css"


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
        <TodoFooter />
      </div>
    </Provider>
  );
}

export default App;
