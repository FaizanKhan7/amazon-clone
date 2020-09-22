import React from "react";
import "./Home.css";
// import Product from "../Product/Product";
import CarouselTop from "../components/Carousel/Carousel";
import Catagories from "../components/Catagories/Catagories";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__banner"
          src={require("../Assets/amazon_banner.jpg")}
          alt=""
        />
        <CarouselTop />

        <Catagories />

        {/* <div className="home__row">
          <Product
            id="122443758"
            title="Zero to One"
            price={29.99}
            image={require("../Assets/Zero-to-one.png")}
            rating={5}
          />
          <Product
            id="132165461"
            title="LG 22 inch (55cm) IPS Monitor - Full HD, IPS Panel with VGA, HDMI, DVI"
            price={525.99}
            image={require("../Assets/lg_22inch_ips_monitor.jpg")}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="12893754532"
            title="Samsung Galaxy Gear Smartwatch- Retail Packaging - Jet Black "
            price={329.99}
            image={require("../Assets/samsung_galaxy_gear_smartwatch.jpg")}
            rating={3}
          />
          <Product
            id="12"
            title="Echo (2nd Generation) International Version – Charcoal Fabric"
            price={99.99}
            image={require("../Assets/Alexa_echo.jpg")}
            rating={5}
          />
          <Product
            id="12"
            title="Apple iphone11"
            price={1099.99}
            image={require("../Assets/apple_iphone12.jpg")}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12"
            title="Lewis Sofa"
            price={699.99}
            image={require("../Assets/lewis_sofa.jpg")}
            rating={3}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
