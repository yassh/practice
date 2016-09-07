import React from 'react';
import AddTodo from '../containers/AddTodo.jsx';
import VisibleTodoList from '../containers/VisibleTodoList.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
