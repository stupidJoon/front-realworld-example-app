import dayjs from 'dayjs';
import Link from 'next/link';
import { Button, Col, Image, Row } from 'react-bootstrap';
import Article from 'types/Article';
import Tag from './Tag';

interface Props {
  article: Article;
  isLast: boolean;
}

function PreviewArticle({ article, isLast }: Props) {
  return (
    <>
      <Row className="justify-content-between">
        <Col xs="auto">
          <Row className="align-items-center">
            <Col>
              <Image
                style={{ width: '32px', height: '32px', borderRadius: '30px' }}
                src={
                  article.author.image ??
                  'https://static.productionready.io/images/smiley-cyrus.jpg'
                }
              />
            </Col>
            <Col xs="auto">
              <Row className="text-primary">{article.author.username}</Row>
              <Row className="text-secondary" style={{ fontSize: '0.7rem' }}>
                {dayjs(article.updatedAt).format('MMM D, YYYY')}
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs="auto">
          <Button variant="outline-success">
            {`💚 ${article.favoritesCount}`}
          </Button>
        </Col>
      </Row>
      <Row className="fs-3 fw-bold">
        <Col>
          <Link href={`/article/${article.slug}`}>
            <a className="text-decoration-none text-dark">{article.title}</a>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="fs-5 text-secondary">
            <Col>
              <Link href={`/article/${article.slug}`}>
                <a className="text-decoration-none text-secondary">
                  {article.description}
                </a>
              </Link>
            </Col>
          </Row>
          <Row className="text-secondary">
            <Col>
              <Link href={`/article/${article.slug}`}>
                <a className="text-decoration-none text-secondary">
                  Read more...
                </a>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col xs="auto">
          <Row>
            {article.tagList.map((tag) => (
              <Tag key={tag} tag={tag} variant="outline-secondary" />
            ))}
          </Row>
        </Col>
      </Row>
      {isLast ? null : <hr />}
    </>
  );
}

export default PreviewArticle;
