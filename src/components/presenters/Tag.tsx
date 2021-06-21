import { Col, Button } from 'react-bootstrap';

interface Props {
  tag: string;
}

function Tag({ tag }: Props) {
  return (
    <Col className="p-0" xs="auto">
      <Button className="btn-secondary btn-sm rounded-pill m-1">{tag}</Button>
    </Col>
  );
}

export default Tag;
