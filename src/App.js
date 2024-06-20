import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Menu from './pages/Menu';
import Registro from './pages/Registro';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
      </Routes>
    </div>
  );
}

export default App;
