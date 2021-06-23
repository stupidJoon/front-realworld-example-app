import { Form, Row, Col, Button } from 'react-bootstrap';

function SettingsForm() {
  return (
    <Form>
      <Form.Group className="pb-3">
        <Form.Control type="text" placeholder="URL of profile picture" />
      </Form.Group>
      <Form.Group className="pb-3">
        <Form.Control size="lg" type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group className="pb-3">
        <Form.Control
          size="lg"
          as="textarea"
          rows={8}
          placeholder="Short bio about you"
        />
      </Form.Group>
      <Form.Group className="pb-3">
        <Form.Control size="lg" type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="pb-3">
        <Form.Control size="lg" type="password" placeholder="New Password" />
      </Form.Group>
      <Row className="justify-content-end">
        <Col xs="auto">
          <Button size="lg" type="submit">
            Update Settings
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SettingsForm;
