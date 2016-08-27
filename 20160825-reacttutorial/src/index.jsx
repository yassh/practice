import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({ data: data });
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      },
    });
  }

  handleCommentSubmit(comment) {
    const data = this.state.data;

    comment.id = data.length + 2;
    const newData = data.concat(comment);

    this.setState({ data: newData });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    // setInterval(() => this.loadCommentsFromServer(), this.props.pollInterval);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={(e) => this.handleCommentSubmit(e)} />
      </div>
    );
  }
}

class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.map((comment) => {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

class Comment extends React.Component {
  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <div dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: '',
    };
  }

  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const author = this.state.author.trim();
    const text = this.state.text.trim();

    if (!text || !author) {
      return;
    }

    this.props.onCommentSubmit({ author: author, text: text });
    this.setState({ author: '', text: '' });
  }

  render() {
    return (
      <form className="commentForm" onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" placeholder="Your name" value={this.state.author} onChange={(e) => this.handleAuthorChange(e)} />
        <input type="text" placeholder="Say something..." value={this.state.text} onChange={(e) => this.handleTextChange(e)} />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
