import { Route, Routes } from 'react-router-dom';
import Puffers from './pages/Puffers';
import Men from './pages/Men';
import Women from './pages/Women';
import Giftcard from './pages/Giftcard';
import Layout from './pages/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Puffers />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/giftcard' element={<Giftcard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
