import { useState } from 'react'
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
import SearchUi from './components/SearchUi/SearchUi';
import FolderStructure from './components/FolderStructure/FolderStructure';
import folderData from './data/FolderData';

function App() {
  const [folderState, setFolderState] = useState({});

  const handleToggle = (path) => {
    setFolderState((prev) => {
      return {
        ...prev,
        [path]: !prev[path],
      };
    })
  }
console.log(folderState, "folderState")
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
          <a href='/search-ui'>Search UI</a>
          <a href='/folder'>Folder</a>
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
          <Route path='/search-ui' element={<SearchUi />}></Route>
          <Route path='/folder' element={<FolderStructure folderData={folderData} folderState={folderState} folderToggle={handleToggle} currentPath="" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
