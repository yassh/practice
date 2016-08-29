import React from 'react';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  clear() {
    this.setState({
      username: '',
      password: '',
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const username = this.state.username;
    const password = this.state.password;

    alert(`${username}さん、こんにちは！`);
    this.clear();
  }

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <dl>
            <dt>ユーザー名</dt>
            <dd><input type="text" value={this.state.username} onInput={(e) => this.setState({ username: e.target.value })} /></dd>
            <dt>パスワード</dt>
            <dd><input type="password" value={this.state.password} onInput={(e) => this.setState({ password: e.target.value })} /></dd>
            <dt>ボタン</dt>
            <dd><button type="submit">ログイン</button></dd>
          </dl>
        </form>
      </div>
    );
  }
}
