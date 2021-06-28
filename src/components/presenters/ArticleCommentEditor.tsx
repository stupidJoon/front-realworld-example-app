import { ChangeEvent } from 'react';
import { Col, Card, Row, Form, Button } from 'react-bootstrap';

interface Props {
  comment: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onPost: () => void;
}

function ArticleCommentEditor({ comment, onChange, onPost }: Props) {
  return (
    <Col xs="12" className="py-3">
      <Card className="p-0">
        <Card.Body>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write a comment..."
            value={comment}
            onChange={onChange}
          />
        </Card.Body>
        <Card.Footer>
          <Row className="justify-content-end">
            <Col xs="auto">
              <Button size="sm" onClick={onPost}>
                Post Comment
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default ArticleCommentEditor;
