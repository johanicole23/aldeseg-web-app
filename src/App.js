import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import GeneralInsurances from './Insurances/generalInsurances';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/seguros" Component={GeneralInsurances} />
        <Route path="/nosotros" element={<h1>Nosotros</h1>} />
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
