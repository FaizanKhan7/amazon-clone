import React from "react";
import "../../Styles/productStyles.css";
import Product from "../../Product/Product";

function HomeAndKitchenProduct() {
  return (
    <div className="Category_card">
      <div className="Catagory__title__descrpition">
        <h2>Home And Kitchen Products</h2>
        <p>
          Plates, glasses, lunch boxes, ovens , refrigerators, sofas and more
        </p>
      </div>
      <div className="product__rows">
        <Product
          id="37"
          title="Garden Grove Collection Plates"
          price={699}
          rating={4}
          image={require("../../Assets/HomeAndKitchen/GardenGroveCollection.jpg")}
        />
        <Product
          id="38"
          title="Lorren Home Trends Medici 10_ Crystal Dinner Plates (Set Of 4)"
          price={599}
          rating={3}
          image={require("../../Assets/HomeAndKitchen/Lorren Home Trends Medici 10_ Crystal Dinner Plates (Set Of 4) Clear.jpg")}
        />
        <Product
          id="39"
          title="Sicily Mixed Dipping Bowls, Set of 4, Large"
          price={1299}
          rating={4}
          image={require("../../Assets/HomeAndKitchen/Sicily Mixed Dipping Bowls, Set of 4, Large.jpg")}
        />

        <Product
          id="40"
          title="Anthropologie Sping colors lunch box"
          price={899}
          rating={5}
          image={require("../../Assets/HomeAndKitchen/The_Best_Kitchen_Products_to_Buy_at_Anthropologie’s_Spring_Sale_This_Weekend.jpg")}
        />
        <Product
          id="41"
          title="Microwave Double Layer Lunch Box with chop sticks"
          price={1299}
          rating={4}
          image={require("../../Assets/HomeAndKitchen/Microwave_Double_Layer_Lunch_Box_Wooden_Bento_Box_Portable_Container_Box_BPA_Free_Negamy.jpg")}
        />
        <Product
          id="42"
          title="Schott Zwiesel Modo Glassware (Set of 4)"
          price={599}
          rating={3}
          image={require("../../Assets/HomeAndKitchen/Schott_Zwiesel_Modo_Glassware_(Set of 4).jpg")}
        />
        <Product
          id="43"
          title="LG Electric Range with Double Oven"
          price={3999}
          rating={5}
          image={require("../../Assets/HomeAndKitchen/Are Two Ovens Better Than One_ (My LG Electric Range with Double Oven Review) _ The DIY Mommy.jpg")}
        />
        <Product
          id="44"
          title="BLACK+DECKER 0.7 ft 700W Microwave Oven"
          price={1299}
          rating={4}
          image={require("../../Assets/HomeAndKitchen/BLACK+DECKER 0_7 cu ft 700W Microwave Oven - Black EM720CPN-P.jpg")}
        />
        <Product
          id="45"
          title="Referigirator Referigirator Referigirator Referigirator"
          price={2999}
          rating={4}
          image={require("../../Assets/HomeAndKitchen/Make a Small Kitchen Look Bigger_ 5 Design Ideas _ Living in a Fixer Upper.jpg")}
        />
        <Product
          id="46"
          title="Refrigerators & Smart Fridges _ Samsung US"
          price={4999}
          rating={4}
          image={require("../../Assets/HomeAndKitchen/Refrigerators & Smart Fridges _ Samsung US.jpg")}
        />
        <Product
          id="47"
          title="Tower Dish Storage Rack Large in Various Colors"
          price={1999}
          rating={4}
          image={require("../../Assets/HomeAndKitchen/Tower_Dish_Storage_Rack_Large_in_Various_Colors.jpg")}
        />
        <Product
          id="48"
          title="A-Shelf Trimmable Drawer Knife - Natural Wood"
          price={1999}
          rating={4}
          image={require("../../Assets/HomeAndKitchen/Rev-A-Shelf 4WKB-1 4WKB Series 18-1_2_ Wide Trimmable Drawer Knife - Natural Wood.jpg")}
        />
        <Product
          id="49"
          title="Rectangular Faux Marble Dining Table Gold Base Stainless Steel"
          price={1999}
          rating={4}
          image={require("../../Assets/HomeAndKitchen/Contemporary 63_ Rectangular Faux Marble Dining Table Gold Base Stainless Steel.jpg")}
        />
        <Product
          id="50"
          title="Dining Room Decor Modern Dinning Table"
          price={1999}
          rating={4}
          image={require("../../Assets/HomeAndKitchen/Dining Room Decor Modern Dinning Table.jpg")}
        />
        <Product
          id="51"
          title="Nesta Chesterfield Right Corner Sofa In Blue Velvet _ Furniture in Fashion"
          price={3999}
          rating={4}
          image={require("../../Assets/HomeAndKitchen/Nesta Chesterfield Right Corner Sofa In Blue Velvet _ Furniture in Fashion.jpg")}
        />
        <Product
          id="52"
          title="Varianne Curved Sectional Sofa"
          price={4999}
          rating={4}
          image={require("../../Assets/HomeAndKitchen/Varianne_Curved_Sectional_Sofa.jpg")}
        />
      </div>
    </div>
  );
}

export default HomeAndKitchenProduct;
