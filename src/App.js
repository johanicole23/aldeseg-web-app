import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import AboutUs from './AboutUs/aboutUs';
import GeneralInsurances from './Insurances/generalInsurances';
import lifeInsurance from './Insurances/SpecificInsurances/lifeInsurance';
import healthInsurance from './Insurances/SpecificInsurances/healthInsurance';
import vehicleInsurance from './Insurances/SpecificInsurances/vehicleInsurance';
import responsabilityInsurance from './Insurances/SpecificInsurances/responsabilityInsurance';
import homeInsurance from './Insurances/SpecificInsurances/homeInsuranse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/seguros" Component={GeneralInsurances} />
        <Route path="/seguro-vida" Component={lifeInsurance} />
        <Route path="/seguro-salud" Component={healthInsurance} />
        <Route path="/seguro-vehiculo" Component={vehicleInsurance} />
        <Route path="/seguro-responsabilidad" Component={responsabilityInsurance} />
        <Route path="/seguro-hogar" Component={homeInsurance} />
        <Route path="/nosotros" Component={AboutUs} />
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
