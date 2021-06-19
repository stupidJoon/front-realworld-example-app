import { Row } from 'react-bootstrap';
import Tag from 'components/Tag';

function Tags() {
  return (
    <Row className="bg-light m-3 p-3">
      <Row>Popular Tags</Row>
      <Row>
        <Tag test="Humanity" />
        <Tag test="Humanity" />
        <Tag test="Gandhi" />
        <Tag test="HITLER" />
        <Tag test="SIDA" />
        <Tag test="BlackLivesMatter" />
        <Tag test="BlackLivesMatter" />
        <Tag test="test" />
        <Tag test="dragons" />
        <Tag test="asdf" />
        <Tag test="afsdfasfasdfasdfasdfasdf" />
        <Tag test="" />
        <Tag test="" />
      </Row>
    </Row>
  );
}

export default Tags;
