import React from 'react';
import Card from 'react-bootstrap/Card';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    this.getPost().then((post) => this.setState({ post }));
  }

  async getPost() {
    const id = this.props.match.params.id;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return await response.json();
  }

  render() {
    return (
      <Card style={{ marginTop: '2rem' }}>
        <Card.Body>
          <Card.Title>{this.state.post.title}</Card.Title>
          <Card.Text>{this.state.post.body}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default PostDetail;
