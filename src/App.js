import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Proyects from './pages/proyects'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Home} exact />
        <Route path={"/about"} component={About} />
        <Route path={"/proyects"} component={Proyects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;