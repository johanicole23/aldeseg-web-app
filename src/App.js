import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import myTheme from './Styles/myTheme';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1><Typography sx={{color: myTheme.palette.common.customDarkBlue, 
          fontFamily: 'Encode Sans Semi Condensed', fontWeight: 700}}>ALDESEG</Typography></h1>} />
        <Route path="/seguros" element={<h1>Seguros</h1>} />
        <Route path="/nosotros" element={<h1>Nosotros</h1>} />
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
