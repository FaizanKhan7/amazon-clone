import React from "react";
import "../../Styles/productStyles.css";
import Product from "../../Product/Product";

function LuggageBagProduct() {
  return (
    <div className="Category_card">
      <div className="Catagory__title__descrpition">
        <h2>Luggage Bags</h2>
        <p>
          Shop backpacks, laptop bags, leather bags, suitcase, trollys and more
        </p>
      </div>
      <div className="product__rows">
        <Product
          id="27"
          title="Gucci-GG Supreme Canvas And Leather Backpack Mens Black"
          price={1999}
          rating={4}
          image={require("../../Assets/luggageBags/Gucci-GGSupremeCanvasAndLeatherBackpackMensBlack.jpg")}
        />
        <Product
          id="28"
          title="Princeton Slim Argentine Leather Backpack"
          price={1299}
          rating={3}
          image={require("../../Assets/luggageBags/PrincetonSlimArgentineLeatherBackpack.jpg")}
        />
        <Product
          id="29"
          title="Under Armour Contender Cream Backpack"
          price={799}
          rating={4}
          image={require("../../Assets/luggageBags/UnderArmourContenderBackpack.jpg")}
        />

        <Product
          id="30"
          title="Briefcase male vintage real leather messenger shoulder portfolio laptop bag case office handbag"
          price={1399}
          rating={5}
          image={require("../../Assets/luggageBags/Briefcase_male_vintage_real_leather_messenger_shoulder_portfolio_laptop_bag_case_office_handbag.jpg")}
        />
        <Product
          id="31"
          title="The Briefcase"
          price={1299}
          rating={4}
          image={require("../../Assets/luggageBags/TheBriefcase.jpg")}
        />
        <Product
          id="32"
          title="The Briefcase 2"
          price={999}
          rating={3}
          image={require("../../Assets/luggageBags/theBriefcase2.jpg")}
        />
        <Product
          id="33"
          title="Kensie 3 Piece Metallic Vertical Rolling Luggage Set with Spinner Wheels Black Suitcases"
          price={3999}
          rating={5}
          image={require("../../Assets/luggageBags/Kensie3PieceMetallicVerticalRollingLuggageSetwithSpinnerWheels(),Black.jpg")}
        />
        <Product
          id="34"
          title="SkyBag Navy Blue SuitCase  "
          price={1299}
          rating={4}
          image={require("../../Assets/luggageBags/skybags.jpg")}
        />
        <Product
          id="35"
          title="Voyageur Luggage Collection"
          price={2999}
          rating={4}
          image={require("../../Assets/luggageBags/VoyageurLuggageCollection.jpg")}
        />
        <Product
          id="36"
          title="Buy Remington Hair Straightener and Dryer Shine Therapy Gift Set Hair dryers Argos"
          price={4999}
          rating={4}
          image={require("../../Assets/luggageBags/west-elm-TravelCollection-PalePink.jpg")}
        />
      </div>
    </div>
  );
}

export default LuggageBagProduct;
