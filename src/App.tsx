import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Header from './components/Header';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/carteira" element={ <Header /> } />
    </Routes>
  );
}

export default App;
