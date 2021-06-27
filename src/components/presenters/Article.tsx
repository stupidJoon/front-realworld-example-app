import ArticleComments from 'components/containers/ArticleComments';
import ArticleBanner from 'components/presenters/ArticleBanner';
import ArticleBody from 'components/presenters/ArticleBody';
import ArticleUser from 'components/presenters/ArticleUser';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import ArticleType from 'types/Article';

interface Props {
  article: ArticleType;
}

function Article({ article }: Props) {
  return (
    <>
      <ArticleBanner article={article} />
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs="8">
            <Row>
              <ArticleBody article={article} />
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
              <ArticleUser article={article} />
            </Row>
            <Row className="py-3">
              <Col>
                <Link href="/signin">
                  <a className="text-decoration-none text-primary">Sign in </a>
                </Link>
                or
                <Link href="/signup">
                  <a className="text-decoration-none text-primary"> sign up </a>
                </Link>
                to add comments on this article.
              </Col>
            </Row>
            <Row className="gy-3">
              <ArticleComments />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Article;
