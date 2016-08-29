import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'director';

import IndexScreen from './IndexScreen.jsx';
import LoginScreen from './LoginScreen.jsx';
import PhotoIndexScreen from './PhotoIndexScreen.jsx';
import PhotoScreen from './PhotoScreen.jsx';
import NotFoundScreen from './NotFoundScreen.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: null,
    };
  }

  componentDidMount() {
    const router = new Router({
      '/': () => {
        this.setState({ screen: <IndexScreen /> });
      },
      '/login': () => {
        this.setState({ screen: <LoginScreen /> });
      },
      '/photos': () => {
        this.setState({ screen: <PhotoIndexScreen /> });
      },
      '/photos/:id': (id) => {
        id = parseInt(id, 10);
        this.setState({ screen: <PhotoScreen id={id} /> });
      },
      '*': () => {
        this.setState({ screen: <NotFoundScreen /> });
      },
    });
    router.configure({ strict: false });
    router.init('/');
  }

  render() {
    return this.state.screen;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
