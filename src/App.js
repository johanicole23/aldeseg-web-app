import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/seguros" element={<h1>Seguros</h1>} />
        <Route path="/nosotros" element={<h1>Nosotros</h1>} />
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
