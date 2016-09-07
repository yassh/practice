import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index.js';
import Link from '../components/Link.jsx';

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
