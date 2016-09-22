import React, { PropTypes } from 'react';

function Todo({ onClick, completed, text }) {
  return (
    <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </li>
  );
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
