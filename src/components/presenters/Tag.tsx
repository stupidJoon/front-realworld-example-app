import { Button, Col } from 'react-bootstrap';

interface Props {
  tag: string;
  variant: 'secondary' | 'outline-secondary';
}

function Tag({ tag, variant }: Props) {
  return (
    <Col className="p-0" xs="auto">
      <Button className="rounded-pill m-1" variant={variant} size="sm">
        {tag}
      </Button>
    </Col>
  );
}

export default Tag;
