import ArticleContainer from 'components/containers/Article';
import Gnb from 'components/presenters/Gnb';
import UserContext from 'contexts/UserContext';
import useUser from 'hooks/useUser';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';

function Article() {
  useUser();
  const { user } = useContext(UserContext);

  return (
    <Container fluid>
      <Gnb user={user} />
      <ArticleContainer />
    </Container>
  );
}

export default Article;
