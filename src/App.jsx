import 'bootstrap/dist/css/bootstrap.min.css';
import NetflixNavbar from './components/NetflixNavbar';
import NetflixContent from './components/NetflixContent';
import NetflixFooter from './components/NetflixFooter';
import './App.css';

function App() {

  return (
    <>
       <NetflixNavbar/>
       <NetflixContent title={"TV SHOW"} startImageIndex={1}/>
       <NetflixContent title={"Preferiti"} startImageIndex={1}/>
       <NetflixContent title={"Nuovi Preferiti"} startImageIndex={1}/>
       <NetflixFooter />
    </>
  )
}

export default App
