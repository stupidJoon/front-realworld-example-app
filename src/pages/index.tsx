import { Container, Row, Col } from 'react-bootstrap';
import Gnb from 'components/presenters/Gnb';
import Banner from 'components/presenters/Banner';
import Feeds from 'components/presenters/Feeds';
import Tags from 'components/containers/Tags';

function Home() {
  return (
    <Container fluid>
      <Gnb />
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
