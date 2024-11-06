import './components/page/home/main.scss';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main.tsx';
import Feedback from './pages/Feedback.tsx';
import Lobby from './pages/Lobby.tsx';
import Ranking from './pages/Ranking.tsx';


function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/lobby' element={<Lobby/>}/>
          <Route path='/ranking' element={<Ranking/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
        </Routes>
      </div>
  );
}

export default App;
