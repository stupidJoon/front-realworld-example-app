import Tag from 'components/presenters/Tag';
import { KeyboardEvent } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

interface Props {
  tags: Set<string>;
  onTagInputPressed: (event: KeyboardEvent<HTMLInputElement>) => void;
}

function EditorForm({ tags, onTagInputPressed }: Props) {
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
        {Array.from(tags).map((tag) => (
          <Tag key={tag} tag={tag} variant="secondary" />
        ))}
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
