import { Container, Row, Col } from 'react-bootstrap';
import Gnb from 'components/Gnb';
import ArticleBanner from 'components/ArticleBanner';
import ArticleBody from 'components/ArticleBody';
import ArticleUser from 'components/ArticleUser';
import ArticleComment from 'components/ArticleComment';

function Article() {
  return (
    <Container fluid>
      <Gnb />
      <ArticleBanner />
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs="6">
            <Row>
              <ArticleBody />
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row className="justify-content-end align-items-center">
              <ArticleUser />
            </Row>
            <Row className="py-3">
              <Col>Sign in or sign up to add comments on this article.</Col>
            </Row>
            <Row className="gy-3">
              <ArticleComment />
              <ArticleComment />
              <ArticleComment />
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Article;
