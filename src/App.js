import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Carausel from './Components/Carausel';
import Productlist from './Components/Productlist';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carausel/>
      <Productlist/>
     <Footer/>
    </div>
  );
}

export default App;
