import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ Dashboard }></Route>
          <Route path='/projects/:id' component={ ProjectDetails }></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
