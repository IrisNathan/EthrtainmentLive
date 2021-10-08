import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Viewer, Streamer } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/viewer'>
            <Viewer />
          </Route>
          <Route path='/streamer'>
            <Streamer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
