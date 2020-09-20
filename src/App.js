import React from 'react';
import {
  HashRouter, Switch, Route,
} from 'react-router-dom';
import './App.css';
import Home from './conatiners/home/home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Switch>
            <Route exact={false} path="/" component={Home} key="AppLogin" />
          </Switch>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
