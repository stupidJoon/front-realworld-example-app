import EditorForm from 'components/containers/EditorForm';
import Gnb from 'components/presenters/Gnb';
import UserContext from 'contexts/UserContext';
import useUser from 'hooks/useUser';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Editor() {
  useUser();
  const { user } = useContext(UserContext);

  return (
    <>
      <Gnb user={user} />
      <Container>
        <Row className="justify-content-center">
          <Col xs="10" className="text-center">
            <EditorForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Editor;
