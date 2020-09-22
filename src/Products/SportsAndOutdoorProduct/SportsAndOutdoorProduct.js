import React from "react";
import "../../Styles/productStyles.css";
import Product from "../../Product/Product";

function SportsAndOutdoorProduct() {
  return (
    <div className="Category_card">
      <div className="Catagory__title__descrpition">
        <h2>Sports And Outdoor</h2>
        <p>
          Buy Skateboards, basketball, football, cricket things, gym items,
          boxing bag and more
        </p>
      </div>
      <div className="product__rows">
        <Product
          id="65"
          title="Chrome Wheels 31 inch Skateboard "
          price={1299}
          rating={5}
          image={require("../../Assets/Sport&Outdoor/ChromeWheels31inchSkateboardCompleteLongboardDoubleKickSkaterdCruiserLayerMapleDeckforExtremeSportsandOutdoors.jpg")}
        />
        <Product
          id="66"
          title="SCOREMASTER Batting Cricket Set With Wheeled Bag & Kashmir Willow Bat"
          price={999}
          rating={3}
          image={require("../../Assets/Sport&Outdoor/SCOREMASTERBattingCricketSetWithWheeledBag&KashmirWillowBatFastShipp.jpg")}
        />
        <Product
          id="67"
          title="Football (Soccer) Crowd and Referee Sound Effects | Let's football | black & white patches | size 5 | Grass ball | Football"
          price={399}
          rating={4}
          image={require("../../Assets/Sport&Outdoor/Football(Soccer)CrowdandRefereeSoundEffects.jpg")}
        />

        <Product
          id="68"
          title="Basket ball | trow that ball in the net "
          price={499}
          rating={5}
          image={require("../../Assets/Sport&Outdoor/basketball.jpg")}
        />
        <Product
          id="69"
          title="Boxing bag with hand gloves 8 ounces & face kit mask"
          price={1399}
          rating={4}
          image={require("../../Assets/Sport&Outdoor/fc509441-93d4-4003-aec1-958b4978f66f.jpg")}
        />
        <Product
          id="70"
          title="CLETO REYES BOXING SHORTS SATIN BLACK_GOLD"
          price={1299}
          rating={3}
          image={require("../../Assets/Sport&Outdoor/CLETOREYESBOXINGSHORTSSATINBLACK_GOLD.jpg")}
        />
        <Product
          id="71"
          title="Body-Solid GDR363 Pro Dumbell Rack"
          price={2299}
          rating={5}
          image={require("../../Assets/Sport&Outdoor/Body-SolidGDR363ProDumbellRack.png")}
        />
        <Product
          id="72"
          title="Dumbells 15kgs | Removable plates | 1 plate is equal to 5kgs | Stainless still plates"
          price={399}
          rating={4}
          image={require("../../Assets/Sport&Outdoor/dumbells 15kgs.jpg")}
        />
        <Product
          id="73"
          title="Barbell Complex 9 Exercises | 5 feet Long rod | 10kgs of plates (2x) | heavy material | Gym Workout Olampic barbell"
          price={789}
          rating={4}
          image={require("../../Assets/Sport&Outdoor/BarbellComplex_9Exercises.jpg")}
        />
        <Product
          id="74"
          title="Marcy 150-lb Stack Home Gym"
          price={7899}
          rating={4}
          image={require("../../Assets/Sport&Outdoor/Marcy150-lb_StackHomeGym.jpg")}
        />
      </div>
    </div>
  );
}

export default SportsAndOutdoorProduct;
