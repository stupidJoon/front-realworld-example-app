import { Container } from 'react-bootstrap';
import Gnb from 'components/presenters/Gnb';
import ArticleContainer from 'components/containers/Article';
import useUser from 'hooks/useUser';
import { useContext } from 'react';
import UserContext from 'contexts/UserContext';

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
