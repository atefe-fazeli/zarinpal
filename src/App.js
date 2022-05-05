import './App.css';
import Baner from './components/Baner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import SectionFour from './components/SectionFour'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Baner/>
     <SectionOne />
     <SectionTwo />
     <SectionThree/>
     <SectionFour/>
     <Footer />
     
    </div>
  );
}

export default App;
