import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useUser from 'hooks/useUser';
import UserContext from 'contexts/UserContext';
import Gnb from 'components/presenters/Gnb';
import EditorForm from 'components/containers/EditorForm';

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
