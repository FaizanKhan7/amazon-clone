import React from "react";
import "../../Styles/productStyles.css";
import Product from "../../Product/Product";

function ComputerAndAccesoriesProduct() {
  return (
    <div className="Category_card">
      <div className="Catagory__title__descrpition">
        <h2>Computers & Accessories</h2>
        <p>Buy laptops, moniters, Airpods, keyboards, mouse and more</p>
      </div>
      <div className="product__rows">
        <Product
          id="53"
          title="Apple Pale pink Airbook | 32-inch display"
          price={109999}
          rating={4}
          image={require("../../Assets/Computers&Accessories/21ef237a-af7d-49a0-bbe9-68111c21ad80.jpg")}
        />
        <Product
          id="54"
          title="Hp laptop | Mat Black & Thin | Amd Graphics"
          price={32999}
          rating={3}
          image={require("../../Assets/Computers&Accessories/Best student laptops 2020_ The top laptops for school.jpg")}
        />
        <Product
          id="55"
          title="Dell G3 15 3500 | Full HD Gaming Laptop "
          price={19990}
          rating={4}
          image={require("../../Assets/Computers&Accessories/Hot Dell G3 15 3500 I3500-7722BLK-PUS 15_6_ Full HD Gaming Laptop Overview.jpg")}
        />

        <Product
          id="56"
          title="Acer SB220Q Ultra-Thin Monitor"
          price={25999}
          rating={5}
          image={require("../../Assets/Computers&Accessories/Acer SB220Q bi 21_5 inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA port),Black.jpg")}
        />
        <Product
          id="57"
          title="Apple iMac 21_5-inch 4K"
          price={7999}
          rating={4}
          image={require("../../Assets/Computers&Accessories/Apple iMac 21_5-inch 4K Review.jpg")}
        />
        <Product
          id="58"
          title="LG Monitor | ultrawide and fast refresh"
          price={4999}
          rating={3}
          image={require("../../Assets/Computers&Accessories/Best gaming monitors 2020_ 4K, ultrawide and fast refresh.jpg")}
        />
        <Product
          id="59"
          title="Logitech MK520 Wireless Black Keyboard And Mouse"
          price={1299}
          rating={5}
          image={require("../../Assets/Computers&Accessories/Logitech MK520 Wireless Black Keyboard And Mouse.jpg")}
        />
        <Product
          id="60"
          title="M200 Purple_Blue_Red LED Breathing Backlight Keyboard"
          price={1099}
          rating={4}
          image={require("../../Assets/Computers&Accessories/M200 Purple_Blue_Red LED Breathing Backlight Keyboard.jpg")}
        />
        <Product
          id="61"
          title="iPhone 11 with Airpods"
          price={125999}
          rating={4}
          image={require("../../Assets/Computers&Accessories/iPhone 11.jpg")}
        />
        <Product
          id="62"
          title="Apple Air Pods with Wireless charging case"
          price={9999}
          rating={4}
          image={require("../../Assets/Computers&Accessories/Apple Air Pods with Wireless charging case.jpg")}
        />
        <Product
          id="63"
          title="Beats by Dr_ Dre Mixr Headphones"
          price={2999}
          rating={4}
          image={require("../../Assets/Computers&Accessories/Beats by Dr_ Dre Mixr Headphones Men - Bloomingdale's.jpg")}
        />
        <Product
          id="64"
          title="Sony High-Power Audio System with Bluetooth"
          price={1999}
          rating={4}
          image={require("../../Assets/Computers&Accessories/Sony High-Power Audio System with Bluetooth - V21 - Black.jpg")}
        />
      </div>
    </div>
  );
}

export default ComputerAndAccesoriesProduct;
