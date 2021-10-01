import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer } from './components';
import { Home, About, Events} from './pages';
import * as ROUTES from './constants/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
