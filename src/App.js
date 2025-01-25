import './App.css';
import Puffers from './pages/Puffers';
import Men from './pages/Men';
import Women from './pages/Women';
import Sale from './pages/Sale';
import Accessories from './pages/Accessories';
import Giftcard from './pages/Giftcard';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <header className='container__header'>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__list--element'>
              <Link to='/'>
                <Puffers /> Puffers
              </Link>
            </li>
            <li className='nav__list--element'>
              <Link to='/men'>
                <Men />
              </Link>
            </li>
            <li className='nav__list--element'>
              <Link to='/women'>
                <Women />
              </Link>
            </li>

            <li className='nav__list--element'>
              <Link to='/sales'>
                <Sale />
              </Link>
            </li>

            <li className='nav__list--element'>
              <Link to='/accessories'>
                <Accessories />
              </Link>
            </li>

            <li className='nav__list--element'>
              <Link to='/giftcard'>
                <Giftcard />
              </Link>
            </li>

            <li className='nav__list--element'>cart</li>
          </ul>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path='/' element={<Puffers />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/sales' element={<Sale />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/giftcard' element={<Giftcard />} />
        </Routes>
      </div>

      <footer className='container__footer'>footer</footer>
    </div>
  );
}

export default App;
