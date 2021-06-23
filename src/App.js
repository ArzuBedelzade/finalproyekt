import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Particles from 'react-particles-js';
import About from './components/About'
import Services from './components/Services';

function App() {
  return (
    <>
    <Particles
    params = {{
      number:30,
      density: {
        enable: true,
        value_area: 900
      }
   
    }}
    />

     <Navbar />
     <Header />
     <About/>
     <Services />
     </>
  );
}

export default App;
