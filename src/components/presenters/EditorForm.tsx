import { KeyboardEvent } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Tag from 'components/presenters/Tag';

interface Props {
  onTagInputPressed: (event: KeyboardEvent<HTMLInputElement>) => void;
}

function EditorForm({ onTagInputPressed }: Props) {
  return (
    <Form>
      <Form.Group className="pb-3">
        <Form.Control size="lg" type="text" placeholder="Article Title" />
      </Form.Group>
      <Form.Group className="pb-3">
        <Form.Control type="text" placeholder="What's this article about?" />
      </Form.Group>
      <Form.Group className="pb-3">
        <Form.Control
          as="textarea"
          rows={8}
          placeholder="Write your article (in markdown)"
        />
      </Form.Group>
      <Form.Group className="pb-3">
        <Form.Control
          type="text"
          onKeyPress={onTagInputPressed}
          placeholder="Enter tags"
        />
      </Form.Group>
      <Row>
        <Tag tag="test" />
        <Tag tag="test" />
        <Tag tag="test" />
        <Tag tag="test" />
        <Tag tag="test" />
      </Row>
      <Row className="justify-content-end">
        <Col xs="auto">
          <Button size="lg" type="submit">
            Publish Article
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default EditorForm;
