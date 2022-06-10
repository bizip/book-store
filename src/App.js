import './App.css';
import NavBar from './Components/layouts/Navbar';
import BookStoreRoutes from './routes/BookStoreRoutes';

const App = () => (
  <div className="App">
    <NavBar />
    <BookStoreRoutes />
  </div>
);

export default App;
