import Comment from 'types/Comment';
import { Card, Row, Col, Image } from 'react-bootstrap';
import parseDate from 'utilities/parseDate';
import UserType from 'types/User';

interface Props {
  comment: Comment;
  user: UserType;
  onDelete: () => void;
}

function ArticleComment({ comment, user, onDelete }: Props) {
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
            {user && user.username === comment.author.username && (
              <Col
                xs="auto"
                className="ms-auto"
                style={{ cursor: 'pointer' }}
                onClick={onDelete}>
                🗑️
              </Col>
            )}
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default ArticleComment;
