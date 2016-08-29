import React from 'react';
import is from 'is';

import NotFoundScreen from './NotFoundScreen.jsx';

export default class PhotoScreen extends React.Component {
  render() {
    const id = this.props.id;
    if (!is.integer(id)) return <NotFoundScreen />;
    if (!(0 < id && id < 4)) return <NotFoundScreen />;

    return (
      <div>
        <h1>Photo #{this.props.id}</h1>
      </div>
    );
  }
}
