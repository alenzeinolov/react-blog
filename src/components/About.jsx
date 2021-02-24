import Card from 'react-bootstrap/Card';

function About(props) {
  return (
    <Card style={{ marginTop: '2rem' }}>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          laoreet euismod mauris, et accumsan eros elementum id. Ut iaculis orci
          purus. Curabitur posuere efficitur ante, in lacinia tortor sagittis
          id. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Phasellus finibus condimentum erat vel ultrices. Integer pellentesque
          felis ex, ut posuere nisi euismod ultrices. Donec vestibulum volutpat
          turpis, molestie bibendum libero.
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

export default About;
