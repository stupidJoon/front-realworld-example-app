import { Tabs, Tab } from 'react-bootstrap';
import Feed from 'components/containers/Feed';

function Feeds() {
  return (
    <Tabs defaultActiveKey="global" className="mb-3">
      <Tab eventKey="global" title="Global Feed">
        <Feed />
      </Tab>
      <Tab eventKey="test" title="#test">
        <Feed />
      </Tab>
    </Tabs>
  );
}

export default Feeds;
