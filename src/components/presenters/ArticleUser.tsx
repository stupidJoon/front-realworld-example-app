import { Col, Image, Row, Button } from 'react-bootstrap';
import Article from 'types/Article';
import parseDate from 'utilities/parseDate';

interface Props {
  article: Article;
}

function ArticleUser({ article }: Props) {
  return (
    <>
      <Col xs="auto">
        <Image
          style={{ width: '32px', height: '32px', borderRadius: '30px' }}
          src="https://static.productionready.io/images/smiley-cyrus.jpg"
        />
      </Col>
      <Col xs="auto">
        <Row>{article?.author?.username}</Row>
        <Row>{parseDate(article?.updatedAt)}</Row>
      </Col>
      <Col xs="auto">
        <Button variant="outline-secondary" size="sm">
          {`+ Follow ${article?.author?.username}`}
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
