import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Qa from './QA/Qa';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="">
     <Nav></Nav>
     <Home></Home>
     <Qa></Qa>
     <Footer></Footer>
    </div>
  );
}

export default App;
