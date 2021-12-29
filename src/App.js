import './App.css';
import Agent from './Components/Agent';
import Fix from './Components/Fix';
import AgentDetails from './Components/Agentdetails';
import Agentcase from './Components/Agentcase';
import Pickup from './Components/Pickup';
import Onsite from './Components/Onsite';
import Cancel from './Components/Cancel'
import Activecase from './Components/Activecase';
import Admin from './Components/Admin';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Fix />}/>
      <Route exact path='/agent' element={<Agent />}/>
      <Route exact path="/agentdetails" element={<AgentDetails />} />
      <Route exact path="/agentcase" element={<Agentcase />} />
      <Route exact path="/pickup" element={<Pickup />} />
      <Route exact path="/onsite" element={<Onsite />} />
      <Route exact path="/cancel" element={<Cancel />} />
      <Route exact path="/activecase" element={<Activecase />} />
      <Route exact path ="/admin" element={<Admin />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
