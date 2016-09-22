import React, { PropTypes } from 'react';
import Todo from './Todo.jsx';

function TodoList({ todos, onTodoClick }) {
  return (
    <ul>
      { todos.map((todo) => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />) }
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
