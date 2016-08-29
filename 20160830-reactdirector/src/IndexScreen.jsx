import React from 'react';

export default class IndexScreen extends React.Component {
  render() {
    return (
      <div>
        <h1>Index</h1>
        <ul>
          <li><a href="#/login">Log in</a></li>
          <li><a href="#/photos">Photos</a></li>
        </ul>
      </div>
    );
  }
}
