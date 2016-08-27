import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    this.loadState();
  }

  // componentWillUpdate()にすると、this.stateに値が反映される前に実行されてしまう。
  componentDidUpdate() {
    this.saveState();
  }

  loadState() {
    const json = localStorage.getItem('counter:state');
    if (!json) return;

    this.setState(JSON.parse(json));
  }

  saveState() {
    localStorage.setItem('counter:state', JSON.stringify(this.state));
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <dl>
        <dt>数値</dt>
        <dd>{this.state.count}</dd>
        <dt>増やす</dt>
        <dd><button onClick={(e) => this.increment()}>+</button></dd>
        <dt>減らす</dt>
        <dd><button onClick={(e) => this.decrement()}>-</button></dd>
      </dl>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
