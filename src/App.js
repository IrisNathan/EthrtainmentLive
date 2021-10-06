import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer, Hero, How, Events, Stream } from './components';
import { Streamer, Viewer } from './pages';
import * as ROUTES from './constants/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <How />
      <Events />
      <Stream />
      <Streamer />
      <Viewer />
      <Footer />
    </div>
  );
}

export default App;
