import React from "react";
import "./Catagories.css";
import { Link } from "react-router-dom";
function Catagories() {
  return (
    <div className="catagories">
      <Link to="/MensFashionProduct">
        <div className="catagories__Cards">
          <h3>Men's Fashion</h3>
          <img src={require("../../Assets/men_s_fashion.jpg")} alt="t-shirts" />
          <p>Shop Now </p>
        </div>
      </Link>
      <Link to="/BeautyCareProduct">
        <div className="catagories__Cards">
          <h3>Beauty Care</h3>
          <img
            src={require("../../Assets/beauty_care.jpg")}
            alt="beauty-care"
          />
          <p>Shop Now </p>
        </div>
      </Link>
      <Link to="/LuggageBagsProduct">
        <div className="catagories__Cards">
          <h3>Luggage Bags</h3>
          <img
            src={require("../../Assets/luggages.jpg")}
            alt="luggages-bags-trollies"
          />
          <p>Shop Now </p>
        </div>
      </Link>
      <Link to="/HomeAndKitchenProduct">
        <div className="catagories__Cards">
          <h3>Home and Kitchen</h3>
          <img
            src={require("../../Assets/home_and_kitchen.jpg")}
            alt="kitchen"
          />
          <p>Shop Now </p>
        </div>
      </Link>
      <Link to="/WomensFashionProduct">
        <div className="catagories__Cards">
          <h3>Women's Fashion</h3>
          <img
            src={require("../../Assets/women_s_fashion.jpg")}
            alt="Women's-Slippers"
          />
          <p>Shop Now </p>
        </div>
      </Link>
      <Link to="/ComputerAndAccessoriesProduct">
        <div className="catagories__Cards">
          <h3>Computers & Accessories</h3>
          <img
            src={require("../../Assets/computer_and_accesor_1Sfzh.jpg")}
            alt="Computer"
          />
          <p>Shop Now </p>
        </div>
      </Link>
      <Link to="/SportsAndOutdoorProduct">
        <div className="catagories__Cards">
          <h3>Sports & Outdoor</h3>
          <img src={require("../../Assets/sports_and_outdoor.jpg")} alt="Gym" />
          <p>Shop Now </p>
        </div>
      </Link>
      <Link to="/BabyAccessoriesProduct">
        <div className="catagories__Cards">
          <h3>Baby Accessories</h3>
          <img
            src={require("../../Assets/baby_accesories.jpg")}
            alt="baby_accesories"
          />
          <p>Shop Now </p>
        </div>
      </Link>
    </div>
  );
}

export default Catagories;
