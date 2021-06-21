import { Card, Row, Col, Image } from 'react-bootstrap';

function ArticleComment() {
  return (
    <Col xs="12">
      <Card className="p-0">
        <Card.Body>Nice article, TY. Oh, i wrote this sh*t.</Card.Body>
        <Card.Footer>
          <Row className="p-0">
            <Col xs="auto">
              <Image
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '30px',
                }}
                src="https://static.productionready.io/images/smiley-cyrus.jpg"
              />
            </Col>
            <Col xs="auto" className="text-primary">
              Joh
            </Col>
            <Col xs="auto">June 20, 2021</Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default ArticleComment;
