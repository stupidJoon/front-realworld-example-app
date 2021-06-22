import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Gnb from 'components/containers/Gnb';
import Banner from 'components/presenters/Banner';
import Feeds from 'components/presenters/Feeds';
import Tags from 'components/containers/Tags';
import UserType from 'types/User';

function Home() {
  const [user, setUser] = useState<UserType>();
  console.log(user);
  return (
    <Container fluid>
      <Gnb setUser={setUser} />
      <Banner />
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
