import { Col, Image, Row, Button } from 'react-bootstrap';

function ArticleUser() {
  return (
    <>
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
    </>
  );
}

export default ArticleUser;
