import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import AboutUs from './AboutUs/aboutUs';
import GeneralInsurances from './Insurances/generalInsurances';
import lifeInsurance from './Insurances/SpecificInsurances/lifeInsurance';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/seguros" Component={GeneralInsurances} />
        <Route path="/seguro-vida" Component={lifeInsurance} />
        <Route path="/nosotros" Component={AboutUs} />
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
