import './index.css';
import { Container, Button } from 'react-bootstrap';

function App() {
  return (
    <Container className="bg-primary-custom text-white p-4">
      <h1>Test Bootstrap</h1>
      <p className="text-accent">This should be teal background with light gray text.</p>
      <Button variant="primary-custom">Click Me</Button>
    </Container>
  );
}

export default App;