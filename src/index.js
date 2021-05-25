import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './pages/arq';
import Cadastro from './pages/Cadastro'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        
        <Route path="/" exact={true} component={App}/>
        <Route path="/Cadastro" component={Cadastro}/>
        
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

//parei em 40:53