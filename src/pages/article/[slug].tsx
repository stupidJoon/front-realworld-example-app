import { Container } from 'react-bootstrap';
import Gnb from 'components/presenters/Gnb';
import ArticleContainer from 'components/containers/Article';

function Article() {
  return (
    <Container fluid>
      <Gnb />
      <ArticleContainer />
    </Container>
  );
}

export default Article;
