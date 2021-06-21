import { Col } from 'react-bootstrap';
import Article from 'types/Article';

interface Props {
  article: Article;
}

function ArticleBody({ article }: Props) {
  return (
    <Col
      dangerouslySetInnerHTML={{
        __html: article?.body,
      }}
    />
  );
}

export default ArticleBody;
