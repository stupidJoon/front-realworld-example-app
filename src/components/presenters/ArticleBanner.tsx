import { Row, Col } from 'react-bootstrap';
import Article from 'types/Article';
import ArticleUser from './ArticleUser';

interface Props {
  article: Article;
}

function ArticleBanner({ article }: Props) {
  return (
    <Row className="bg-dark p-5 justify-content-center text-white">
      <Col xs="8">
        <Row className="fs-1 fw-bold pb-3">{article?.title}</Row>
        <Row className="align-items-center">
          <ArticleUser article={article} />
        </Row>
      </Col>
    </Row>
  );
}

export default ArticleBanner;
