import { Link } from 'react-router-dom';
import Router from './components/Router';

function App() {
  console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL);
  return (
    <Router></Router>
  );
}

export default App;
