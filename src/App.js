import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/layouts/NavBar';
import Category from './Components/pages/Category';
import Book from './Components/pages/Book';
import Home from './Components/pages/Home';

const App = () => (
  <div className="App">
    <Routes>
      <NavBar />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/book" element={<Book />} />
      <Route exact path="/category" element={<Category />} />
    </Routes>
  </div>
);

export default App;
