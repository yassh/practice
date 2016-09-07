import { connect } from 'react-redux';
import { toggleTodo } from '../actions/index.js';
import TodoList from '../components/TodoList.jsx';

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter((t) => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter((t) => !t.completed);
  }
}

function mapStateToProps(state) {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter) };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
