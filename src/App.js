import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Navigation from './components/Navigation';
import Main from './components/Main';
import "./App.scss";

library.add(fab);

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          {/* <Route exact path = "/" component={Main}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
