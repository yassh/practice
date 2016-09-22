import React, { PropTypes } from 'react';

function Link({ active, children, onClick }) {
  return (
    <a href={ active ? null : '' } onClick={(e) => {
      e.preventDefault();
      onClick();
    }}>{children}</a>
  );
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
