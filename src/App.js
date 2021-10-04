import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer, Hero, How, Events, Stream } from './components';
// import { } from './pages';
// import * as ROUTES from './constants/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <How />
      <Events />
      <Stream />
      <Footer />
    </div>
  );
}

export default App;
