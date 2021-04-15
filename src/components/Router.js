import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EndGame from './EndGame'
import App from '../App.js'

export default function Routerz(){
 return (
     <Router>
       <Switch>
         <Route exact path="/">
           <App />
         </Route>
         <Route path="/endGame">
           <EndGame />
         </Route>
       </Switch>
     </Router>
 );
}