import { Row, Col, Image, Button } from 'react-bootstrap';

function Feed() {
  return (
    <>
      <Row className="justify-content-between">
        <Col xs="auto">
          <Row>
            <Col>
              <Image
                style={{ width: '32px', height: '32px', borderRadius: '30px' }}
                src="https://static.productionready.io/images/smiley-cyrus.jpg"
              />
            </Col>
            <Col>
              <Row>ashatunov</Row>
              <Row style={{ fontSize: '0.7rem' }}>June 19, 2021</Row>
            </Col>
          </Row>
        </Col>
        <Col xs="auto">
          <Button variant="outline-success">💚0</Button>
        </Col>
      </Row>
      <Row className="fs-3 fw-bold">ecdew</Row>
      <Row className="fs-5">cewcw</Row>
      <Row>Read more...</Row>
    </>
  );
}

export default Feed;
