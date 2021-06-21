import Comment from 'types/Comment';
import { Card, Row, Col, Image } from 'react-bootstrap';
import parseDate from 'utilities/parseDate';

interface Props {
  comment: Comment;
}

function ArticleComment({ comment }: Props) {
  return (
    <Col xs="12">
      <Card className="p-0">
        <Card.Body>{comment.body}</Card.Body>
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
              {comment.author.username}
            </Col>
            <Col xs="auto">{parseDate(comment.updatedAt)}</Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default ArticleComment;
