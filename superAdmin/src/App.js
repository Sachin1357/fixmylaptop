import './App.css';
import Masterdata from './Component/Masterdata';
import Revenuereporting from './Component/Revenuereporting';
import Casereporting from './Component/Casereporting';
import Footer from './Component/Footer';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Agent from './Component/Agent';
import Invoice from './Component/Invoice';
import Product from './Component/Product';
import States from './Component/States';
import Cities from './Component/Cities';
import Admin from './Component/Admin';
import Billing from './Component/Billing';
import Modal from './Component/Modal'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Masterdata />} />
        <Route path="/masterdata" element={<Masterdata />} />
        <Route path="/revenuereporting" element={<Revenuereporting />} />
        <Route path="/casereporting" element={<Casereporting />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/states" element={<States />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
