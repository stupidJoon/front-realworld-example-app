import { Row } from 'react-bootstrap';
import Tag from './Tag';

interface Props {
  tags: Array<string>;
}

function Tags({ tags }: Props) {
  return (
    <Row className="bg-light m-3 p-3">
      <Row>Popular Tags</Row>
      <Row>
        {tags?.map((tag) => (
          <Tag key={tag} tag={tag} variant="secondary" />
        ))}
      </Row>
    </Row>
  );
}

export default Tags;
