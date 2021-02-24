import React from 'react';
import Card from 'react-bootstrap/Card';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.updatePosts().then((data) => {
      this.setState({ isLoading: false, posts: data });
    });
  }

  async updatePosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  }

  render() {
    const loading = (
      <Card style={{ marginTop: '2rem' }}>
        <Card.Body>Loading...</Card.Body>
      </Card>
    );
    const noPosts = (
      <Card style={{ marginTop: '2rem' }}>
        <Card.Body>No posts yet...</Card.Body>
      </Card>
    );
    const posts = this.state.posts.map((post) => (
      <Post key={post.id} post={post} />
    ));
    if (this.state.isLoading) {
      return loading;
    } else {
      return posts.length > 0 ? posts : noPosts;
    }
  }
}

export default Posts;
