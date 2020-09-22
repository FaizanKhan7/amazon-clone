import React, { useEffect } from "react";
import Header from "./Header/Header";
import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import firebase from "./firebase";
import { useStateValue } from "./StateProvider";
import Footer from "./components/Footer/Footer";
import MensFashionProduct from "./Products/MensFashionProduct/MensFashionProduct";
import BeautyCareProduct from "./Products/BeautyCareProduct/BeautyCareProduct";
import LuggageBagsProduct from "./Products/LuggageBagsProduct/LuggageBagProduct";
import HomeAndKitchenProduct from "./Products/HomeAndKitchenProduct/HomeAndKitchenProduct";
import WomensFashionProduct from "./Products/WomensFashionProducts/WomensFashionProducts";
import ComputerAndAccessoriesProduct from "./Products/ComputerAndAccesoriesProduct/ComputerAndAccesoriesProduct";
import SportsAndOutdoorProduct from "./Products/SportsAndOutdoorProduct/SportsAndOutdoorProduct";
import BabyAccessoriesProduct from "./Products/BabyAccessoriesProduct/BabyAccessoriesProduct";
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // this will only run only once when the app comonent loads.
    firebase.auth().onAuthStateChanged((authUser) => {
      console.log("The User is - ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    }); //what this does is, as soon as the app loads we attch this listener (if we login it refires the code, if we logout it refires the code, its just always there like a listener )
  }, []);
  return (
    // BEM convention - really nice naming convention to use for styling
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/MensFashionProduct">
            <Header />
            <MensFashionProduct />
          </Route>
          <Route path="/BeautyCareProduct">
            <Header />
            <BeautyCareProduct />
          </Route>
          <Route path="/LuggageBagsProduct">
            <Header />
            <LuggageBagsProduct />
          </Route>
          <Route path="/HomeAndKitchenProduct">
            <Header />
            <HomeAndKitchenProduct />
          </Route>
          <Route path="/WomensFashionProduct">
            <Header />
            <WomensFashionProduct />
          </Route>
          <Route path="/ComputerAndAccessoriesProduct">
            <Header />
            <ComputerAndAccessoriesProduct />
          </Route>
          <Route path="/SportsAndOutdoorProduct">
            <Header />
            <SportsAndOutdoorProduct />
          </Route>
          <Route path="/BabyAccessoriesProduct">
            <Header />
            <BabyAccessoriesProduct />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
