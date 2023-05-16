import './App.css';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Pages/Home';
import Login from './Pages/Login';
import MovieDetail from './Pages/MovieDetail';
import Favorites from './Pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login } />
      <Route exact path="/home" component={ Home } />
      <Route exact path="/movie/:id" component={ MovieDetail } />
      <Route exact path="/favorites" component={ Favorites } />
    </BrowserRouter>
  );
}

export default App;
