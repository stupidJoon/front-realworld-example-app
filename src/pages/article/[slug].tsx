import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import Gnb from 'components/Gnb';
import ArticleBanner from 'components/ArticleBanner';

function Article() {
  return (
    <Container fluid>
      <Gnb />
      <ArticleBanner />
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs="6">
            <Row>
              <Col
                dangerouslySetInnerHTML={{
                  __html: `<h1>Tom Bombadil is strange</h1>
                       <h2>Tom childhood</h2>
                       <p>
                         He born in <i>Middleearth</i> It's far far <b>away</b> from here.
                       </p>
                       <h2>Casual life</h2>
                       <p>Tom doesn't work. He's happy all day long.</p>
                       <h2>Tom's quotes</h2>
                       <ul>
                         <li>
                           <em>heheheheh</em>
                         </li>
                         <li>
                           <em>muahaha</em>
                         </li>
                         <li>
                           <em>no worries</em>
                         </li>
                       </ul>
                       <p>&ltlink&gt</p>`,
                }}></Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row className="justify-content-end align-items-center">
              <Col xs="auto">
                <Image
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '30px',
                  }}
                  src="https://static.productionready.io/images/smiley-cyrus.jpg"
                />
              </Col>
              <Col xs="auto">
                <Row>Joh</Row>
                <Row>June 20, 2021</Row>
              </Col>
              <Col xs="auto">
                <Button variant="outline-secondary" size="sm">
                  + Follow Joh
                </Button>
              </Col>
              <Col xs="auto" className="px-0">
                <Button variant="outline-success" size="sm">
                  💚Favorite Article
                </Button>
              </Col>
            </Row>
            <Row className="py-3">
              <Col>Sign in or sign up to add comments on this article.</Col>
            </Row>
            <Row>
              <Card className="p-0">
                <Card.Body>Nice article, TY. Oh, i wrote this sh*t.</Card.Body>
                <Card.Footer>
                  <Row className="p-0">
                    <Col xs="auto">
                      <Image
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '30px',
                        }}
                        src="https://static.productionready.io/images/smiley-cyrus.jpg"
                      />
                    </Col>
                    <Col xs="auto" className="text-primary">
                      Joh
                    </Col>
                    <Col xs="auto">June 20, 2021</Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Article;
