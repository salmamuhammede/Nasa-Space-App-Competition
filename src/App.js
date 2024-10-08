
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/About/About.js'
import Sheet from './components/Sheet/Sheet.js'
import Ebook from './components/Ebook/Ebook.js'
import Game from './components/Game/Game.js'
import AI from './components/AI/AI.js'
import './App.css';

function App() {

  return (
    <div className="App">
     <Router> {/* Wrap your entire app in a Router */}
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About/>} />
            <Route exact path="/Sheet" element={<Sheet />} />
            <Route exact path="/Game" element={<Game />} />
	          <Route exact path="/Ebook" element={<Ebook />} />
            <Route exact path="/AI" element={<AI/>} />
          </Routes>
        </div>
      </div>
    </Router>
        
    </div>
  );
}

export default App;
