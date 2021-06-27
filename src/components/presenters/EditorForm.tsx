import { ChangeEvent, KeyboardEvent, MouseEvent, SyntheticEvent } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

interface Errors {
  title?: Array<string>;
  description?: Array<string>;
  body?: Array<string>;
}

interface Props {
  title: string;
  description: string;
  body: string;
  tags: Array<string>;
  errors: Errors;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: SyntheticEvent) => void;
  onTagInputPressed: (event: KeyboardEvent<HTMLInputElement>) => void;
  onTagDeleted: (event: MouseEvent<HTMLDivElement>) => void;
}

function EditorForm({
  title,
  description,
  body,
  tags,
  errors,
  onChange,
  onSubmit,
  onTagInputPressed,
  onTagDeleted,
}: Props) {
  return (
    <>
      {errors.title?.map((error) => (
        <Row key={error}>
          <Col xs="auto">
            <ul>
              <li className="text-danger">{`title ${error}`}</li>
            </ul>
          </Col>
        </Row>
      ))}
      {errors.description?.map((error) => (
        <Row key={error}>
          <Col xs="auto">
            <ul>
              <li className="text-danger">{`description ${error}`}</li>
            </ul>
          </Col>
        </Row>
      ))}
      {errors.body?.map((error) => (
        <Row key={error}>
          <Col xs="auto">
            <ul>
              <li className="text-danger">{`body ${error}`}</li>
            </ul>
          </Col>
        </Row>
      ))}

      <Form onSubmit={onSubmit}>
        <Form.Group className="pb-3">
          <Form.Control
            type="text"
            name="title"
            placeholder="Article Title"
            size="lg"
            value={title}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Control
            type="text"
            name="description"
            placeholder="What's this article about?"
            value={description}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Control
            name="body"
            placeholder="Write your article (in markdown)"
            as="textarea"
            rows={8}
            value={body}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Control
            type="text"
            name="tag"
            placeholder="Enter tags"
            onKeyPress={onTagInputPressed}
          />
        </Form.Group>
        <Row>
          {tags.map((tag) => (
            <Col
              key={tag}
              className="m-1 px-3 rounded-pill bg-secondary text-light"
              xs="auto">
              <Row>
                <Col
                  className="p-1"
                  onClick={onTagDeleted}
                  style={{ cursor: 'pointer' }}>
                  x
                </Col>
                <Col className="p-1">{tag}</Col>
              </Row>
            </Col>
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
    </>
  );
}

export default EditorForm;
