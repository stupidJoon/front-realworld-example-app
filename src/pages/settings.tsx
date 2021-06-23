import Router from 'next/router';
import { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import useUser from 'hooks/useUser';
import UserContext from 'contexts/UserContext';
import Gnb from 'components/presenters/Gnb';
import SettingsForm from 'components/containers/SettingsForm';

function Settings() {
  useUser();
  const { user } = useContext(UserContext);

  const onLogout = () => {
    localStorage.removeItem('jwtToken');
    Router.push('/');
  };

  return (
    <>
      <Gnb user={user} />
      <Container>
        <Row className="justify-content-center">
          <Col xs="6" className="text-center">
            <h1>Your Settings</h1>
            <SettingsForm />
            <hr />
            <Row className="justify-content-start">
              <Col xs="auto">
                <Button variant="outline-danger" onClick={onLogout}>
                  Or click here to logout
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Settings;
