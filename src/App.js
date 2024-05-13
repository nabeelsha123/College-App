import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <Gallery/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
