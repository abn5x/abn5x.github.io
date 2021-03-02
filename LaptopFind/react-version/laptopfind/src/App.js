import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Components/Header'
import './styles/main.css';

function App() {
  return (
    <Router>
      <Header></Header>
    </Router>
  );
}

export default App;
