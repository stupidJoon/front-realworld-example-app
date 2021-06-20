import { Row, Col, Image, Button } from 'react-bootstrap';

function ArticleBanner() {
  return (
    <Row className="bg-dark p-5 justify-content-center text-white">
      <Col xs="6">
        <Row className="fs-1 fw-bold pb-3">Tom Bombadil is strange</Row>
        <Row className="align-items-center">
          <Col xs="auto">
            <Image
              style={{ width: '32px', height: '32px', borderRadius: '30px' }}
              src="https://static.productionready.io/images/smiley-cyrus.jpg"
            />
          </Col>
          <Col xs="auto">
            <Row>Joh</Row>
            <Row>June 20, 2021</Row>
          </Col>
          <Col xs="auto">
            <Button variant="outline-secondary" size="sm">
              + Follow Joh
            </Button>
          </Col>
          <Col xs="auto" className="px-0">
            <Button variant="outline-success" size="sm">
              💚Favorite Article
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ArticleBanner;
