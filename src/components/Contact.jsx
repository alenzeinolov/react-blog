import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Name: ${this.state.name}\nEmail: ${this.state.email}\nMessage: ${this.state.message}`
    );
  };

  render() {
    return (
      <Card style={{ marginTop: '2rem' }}>
        <Card.Body>
          <Card.Title>Contact Us</Card.Title>

          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                as="textarea"
                rows={4}
                onChange={this.handleChange}
                value={this.state.message}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default Contact;
