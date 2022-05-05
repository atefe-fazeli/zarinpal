import './App.css';
import Baner from './components/Baner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Baner/>
     <SectionOne />
     <Footer />
     
    </div>
  );
}

export default App;
