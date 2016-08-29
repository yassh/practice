import React from 'react';

export default class PhotoIndexScreen extends React.Component {
  render() {
    return (
      <div>
        <h1>Photos</h1>
        <ul>
          <li><a href="#/photos/1">Photo #1</a></li>
          <li><a href="#/photos/2">Photo #2</a></li>
          <li><a href="#/photos/3">Photo #3</a></li>
        </ul>
      </div>
    );
  }
}
