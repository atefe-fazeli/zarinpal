import './App.css';
import Baner from './components/Baner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive';
import SectionSix from './components/SectionSix';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Baner/>
     <SectionOne />
     <SectionTwo />
     <SectionThree/>
     <SectionFour/>
     <SectionFive/>
     <SectionSix/>
     <Footer />
     
    </div>
  );
}

export default App;
