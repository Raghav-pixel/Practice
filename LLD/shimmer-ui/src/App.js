import './App.css';
import Body from './components/Body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Accordion from './components/Accordion';
import StarRating from './components/StarRating/StarRating';
import Comments from './components/comments/Comments';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Pagination from './components/Pagination/Pagination';
import LiveChat from './components/LiveChat/LiveChat';

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
          <a href='/star'>Star</a>
          <a href='/comments'>Comments</a>
          <a href='/image-slider'>Image-Slider</a>
          <a href='/pagination'>Pagination</a>
          <a href='/live-chat'>Live Chat</a>
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
          <Route path='/star' element={<StarRating />}></Route>
          <Route path='/comments' element={<Comments />}></Route>
          <Route path='/image-slider' element={<ImageSlider />}></Route>
          <Route path='/pagination' element={<Pagination />}></Route>
          <Route path='/live-chat' element={<LiveChat />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
