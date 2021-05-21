import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import AboutApp from "../pages/AboutApp.js";
import Calc from "../pages/Calculator.js";
import InfoUser from "../pages/InfoUser.js";
import MainPage from '../pages/MainPage.js'
import Registration from "../pages/Registration.js";
import SignIn from "../pages/SignIn.js";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/calculator'>
        <Calc/>
      </Route>
      <Route path='/registration'>
        <Registration/>
      </Route>
      <Route path='/signIn'>
        <SignIn/>
      </Route>
      <Route path='/info'>
        <InfoUser/>
      </Route>
      <Route path='/about'>
        <AboutApp/>
      </Route>
      <Route path=''>
        <MainPage/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
