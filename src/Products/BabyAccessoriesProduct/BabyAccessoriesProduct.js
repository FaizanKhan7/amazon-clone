import React from "react";
import "../../Styles/productStyles.css";
import Product from "../../Product/Product";

function BabyAccessoriesProduct() {
  return (
    <div className="Category_card">
      <div className="Catagory__title__descrpition">
        <h2>Baby Accessories</h2>
        <p>Buy Dipers, cloths, trollys, toys and more</p>
      </div>
      <div className="product__rows">
        <Product
          id="75"
          title="Funny Baby Clothes Baby Bodysuit"
          price={1299}
          rating={5}
          image={require("../../Assets/BabyAccessories/FunnyBabyClothesBabyBodysuit.jpg")}
        />
        <Product
          id="76"
          title="Honey Ribbed Bubble Romper"
          price={999}
          rating={3}
          image={require("../../Assets/BabyAccessories/HoneyRibbedBubbleRomper.jpg")}
        />
        <Product
          id="77"
          title="Kids Baby Girl Coat Jackets Clothing"
          price={399}
          rating={4}
          image={require("../../Assets/BabyAccessories/KidsBabyGirlCoatJacketsClothing.png")}
        />

        <Product
          id="78"
          title="IKEA - FLISAT Children's table"
          price={599}
          rating={5}
          image={require("../../Assets/BabyAccessories/IKEA- FLISATChildren'stable.png")}
        />
        <Product
          id="79"
          title="Nico & Yeye Kitty Modern Solid Maple Kids Chair - White _ White_Maple _ Wood"
          price={799}
          rating={4}
          image={require("../../Assets/BabyAccessories/Nico&Yeye KittyModernSolidMapleKidsChair-WhiteWhite_MapleWood.jpg")}
        />
        <Product
          id="80"
          title="Twin over Twin Star Gaze Bunk Bed in Grey and Blue with Blue Tent (Painted - Bunk Bed - Assembly Required), Kids Unisex, Gray, Donco Kids"
          price={3299}
          rating={3}
          image={require("../../Assets/BabyAccessories/TwinoverTwinStarGazeBunkBedinGreyandBluewithBlueTent(PaintedBunkBed-AssemblyRequired)KidsUnisexGrayDoncoKids.jpg")}
        />
        <Product
          id="81"
          title="Kids Girls Bed Canopy Mosquito Net Curtains Decorative Baby Crib Curtain for Baby Toddlers and Teens - Pink"
          price={1499}
          rating={5}
          image={require("../../Assets/BabyAccessories/KidsGirlsBedCanopyMosquitoNetCurtainsDecorativeBabyCribCurtainforBabyToddlersandTeens-Pink.jpg")}
        />
        <Product
          id="82"
          title="Multifunctional 3 in 1 Baby Stroller"
          price={1599}
          rating={4}
          image={require("../../Assets/BabyAccessories/Multifunctional3in1BabyStroller.jpg")}
        />
      </div>
    </div>
  );
}

export default BabyAccessoriesProduct;
