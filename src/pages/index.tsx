import { Container } from 'react-bootstrap';
import Gnb from 'components/Gnb';
import Banner from 'components/Banner';
import Feeds from 'components/Feeds';

function Home() {
  return (
    <Container fluid>
      <Gnb />
      <Banner />
      <Feeds />
    </Container>
  );
}

export default Home;
