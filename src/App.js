import './shared/page/home/main.scss';
import { Route, Routes } from 'react-router-dom';
import Feedback from './pages/Feedback.tsx';
import Lobby from './pages/Lobby.tsx';
import Ranking from './pages/Ranking.tsx';
import Main from './pages/Main.tsx';
import RoomSearch from './pages/RoomSearch.tsx';


function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/lobby' element={<Lobby/>}/>
          <Route path='/ranking' element={<Ranking/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/lobby/:type' element={<RoomSearch/>}/>
        </Routes>
      </div>
  );
}

export default App;
