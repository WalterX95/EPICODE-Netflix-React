import 'bootstrap/dist/css/bootstrap.min.css';
import NetflixNavbar from './components/NetflixNavbar';
import NetflixContent from './components/NetflixContent';
import NetflixFooter from './components/NetflixFooter';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  const apiKey = 'f2dd75be';

  return (
    <div style={{ backgroundColor: '#221f1f', color: '#f5f5f1' }}>
      <NetflixNavbar />
      <Container fluid className="px-4">
        <NetflixContent
          title="Trending Now"
          apiUrl={`https://www.omdbapi.com/?apikey=${apiKey}&s=Star%20Wars`}
        />
        <NetflixContent
          title="Watch it Again"
          apiUrl={`https://www.omdbapi.com/?apikey=${apiKey}&s=Harry%20Potter`}
        />
        <NetflixContent
          title="New Releases"
          apiUrl={`https://www.omdbapi.com/?apikey=${apiKey}&s=Lord%20of%20the%20Rings`}
        />
      </Container>
      <NetflixFooter />
    </div>
  );
};

export default App
