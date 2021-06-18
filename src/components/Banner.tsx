import { Row, Col } from 'react-bootstrap';

function Banner() {
  return (
    <Row className="text-center bg-primary text-white p-5">
      <Row>
        <Col className="fs-1 fw-bold">conduit</Col>
      </Row>
      <Row>
        <Col className="fs-5">A place to share your knowledge.</Col>
      </Row>
    </Row>
  );
}

export default Banner;
