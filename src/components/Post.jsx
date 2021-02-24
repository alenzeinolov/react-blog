import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <Card style={{ marginTop: '2rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Link to={`/post/${post.id}`}>Read more...</Link>
      </Card.Body>
    </Card>
  );
}

export default Post;
