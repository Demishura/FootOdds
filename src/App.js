import logo from './logo.svg';
import './App.css';
import Cabecera from './Header/Header';
import NavBar from './NavBar/NavBar';
import LastMatches from './LastMatches/LastMatches';
import NextMatches from './NextMatches/NextMatches';
import OddCalculator from './OddCalculator/OddCalculator';
import ImageGallery from './Gallery/Gallery';
import TemporaryDrawer from './Drawe/Drawer';
import 'tailwindcss/tailwind.css'
import { Route,Routes } from 'react-router-dom';
import Resultados from './Laliga/Resultados';
import Clasificacion from './Laliga/Clasificacion';

function App() {
  return (
    <div className="App">
      <Cabecera/>
      <TemporaryDrawer/>
      <NavBar/>
      <div className='flex flex-nowrap max-sm:flex-col'>
      <Routes>
        <Route path='/' element={<><ImageGallery/><LastMatches/></>}/>
        <Route path='/Laliga/Resultados' element={<Resultados/>}/>
        <Route path='/Laliga/Clasificacion' element={<Clasificacion/>}/>
      </Routes>
      </div>
      Esta es una prueba de nueva version
    
      
      
    </div>
  );
}

export default App;
