import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Story from './pages/Story'
import Memories from './pages/Memories'
import Future from './pages/Future'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/projeto-amor' exact element ={<Home/>}/>
          <Route path='/story' exact element ={<Story/>}/>
          <Route path='/memories' exact element ={<Memories/>}/>
          <Route path='/future' exact element ={<Future/>}/>

        </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;
