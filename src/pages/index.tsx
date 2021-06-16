import { Button } from 'react-bootstrap';

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

export default function Home() {
  return <Button variant="primary">Primary</Button>;
}
