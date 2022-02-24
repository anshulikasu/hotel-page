import React from 'react';
import './App.css';
import Header from "./Header";
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RestaurantDeal from './RestaurantDeal';
import Reservation from "./Reservation";
import Login from "./Login";
import Cart from "./Cart";
import Footer from "./Footer";


function App() {
  return (
    <Router>
    <div className="app">
    <Header />
      <Switch>
      
      <Route path="/reservation">
        <Reservation />
        <Footer />
      </Route>
      <Route path="/RestaurantDeal">
        <RestaurantDeal />
        <Footer />
      </Route>
      <Route path="/login">
        <Login />
        <Footer /> 
      </Route>
      <Route path="/cart">
        <Cart />
        <Footer />
      </Route>
      <Route path="/">
    <Home />
    <Footer /> 
    </Route>
       

      
      
      </Switch>
      
     
      
    </div>
  
    </Router>
    
  );
}

export default App;
