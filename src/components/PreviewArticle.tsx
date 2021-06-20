import Link from 'next/link';
import { Row, Col, Image, Button } from 'react-bootstrap';
import Tag from './Tag';

function PreviewArticle() {
  return (
    <>
      <Row className="justify-content-between">
        <Col xs="auto">
          <Row className="align-items-center">
            <Col>
              <Image
                style={{ width: '32px', height: '32px', borderRadius: '30px' }}
                src="https://static.productionready.io/images/smiley-cyrus.jpg"
              />
            </Col>
            <Col>
              <Row className="text-primary">ashatunov</Row>
              <Row className="text-secondary" style={{ fontSize: '0.7rem' }}>
                June 19, 2021
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs="auto">
          <Button variant="outline-success">💚0</Button>
        </Col>
      </Row>
      <Row className="fs-3 fw-bold">
        <Col>
          <Link href="/article/ecdew-a">
            <a className="text-decoration-none text-dark">ecdew</a>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="fs-5 text-secondary">
            <Col>
              <Link href="/article/ecdew-a">
                <a className="text-decoration-none text-secondary">cewcw</a>
              </Link>
            </Col>
          </Row>
          <Row className="text-secondary">
            <Col>
              <Link href="/article/ecdew-a">
                <a className="text-decoration-none text-secondary">
                  Read more...
                </a>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col xs="auto">
          <Row>
            <Tag test="test" />
            <Tag test="test" />
            <Tag test="test" />
            <Tag test="test" />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default PreviewArticle;
