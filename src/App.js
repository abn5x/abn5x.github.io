import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './components/Routes'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
