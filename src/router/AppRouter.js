import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Historical } from '../pages/historical/Historical';
import { LiveCases } from '../pages/live/LiveCases';
import { Vaccines } from '../pages/vaccines/Vaccines';
import { Navbar } from '../shared/navbar/Navbar';
import './router.css';

export const AppRouter = () => {
    return (
        <Router>
        <div className="router-container">
          <Navbar/>
          <Switch>
            <Route exact path="/live">
              <LiveCases />
            </Route>
            <Route exact path="/historical">
              <Historical />
            </Route>
            <Route exact path="/vaccines">
              <Vaccines />
            </Route>
            <Route path="/">
              <LiveCases />
            </Route>
          </Switch>
        </div>
      </Router>
    )
}
