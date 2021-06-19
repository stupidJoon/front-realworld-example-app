import { Col, Button } from 'react-bootstrap';

interface Props {
  test: string;
}

function Tag({ test }: Props) {
  return (
    <Col className="p-0" xs="auto">
      <Button className="btn-secondary btn-sm rounded-pill m-1">{test}</Button>
    </Col>
  );
}

export default Tag;
