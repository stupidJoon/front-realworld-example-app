import { Row, Col } from 'react-bootstrap';
import ArticleUser from './ArticleUser';

function ArticleBanner() {
  return (
    <Row className="bg-dark p-5 justify-content-center text-white">
      <Col xs="8">
        <Row className="fs-1 fw-bold pb-3">Tom Bombadil is strange</Row>
        <Row className="align-items-center">
          <ArticleUser />
        </Row>
      </Col>
    </Row>
  );
}

export default ArticleBanner;
