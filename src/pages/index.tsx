import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useUser from 'hooks/useUser';
import UserContext from 'contexts/UserContext';
import Gnb from 'components/presenters/Gnb';
import Banner from 'components/presenters/Banner';
import Feeds from 'components/presenters/Feeds';
import Tags from 'components/containers/Tags';

function Home() {
  useUser();
  const { user } = useContext(UserContext);
  return (
    <Container fluid>
      <Gnb user={user} />
      {Boolean(user) || <Banner />}
      <Container>
        <Row className="m-5">
          <Col xs="8">
            <Feeds />
          </Col>
          <Col xs="4">
            <Tags />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
