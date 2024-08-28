import './App.css';
import Body from './components/Body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <p>Hello World</p>
        <nav className='app-nav'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/team'>Team</a>
          <a href='/accordion'>Accordion</a>
          <a href='/login'>Login</a>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/about' element={<About />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/accordion' element={<Accordion />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
