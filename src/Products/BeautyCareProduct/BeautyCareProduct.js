import React from "react";
import Product from "../../Product/Product";

function BeautyCareProduct() {
  return (
    <div className="Category_card">
      <div className="Catagory__title__descrpition">
        <h2>Beauty Care Product</h2>
        <p>
          Shop Creams, lotins, shampoos, conditionrs, soaps, straigtners and
          more
        </p>
      </div>
      <div className="product__rows">
        <Product
          id="16"
          title="Fair & lovely | Just apply and become beautiful"
          price={99}
          rating={4}
          image={require("../../Assets/BeautyCare/Skin_Care.jpg")}
        />
        <Product
          id="17"
          title="Coco Rose Fudge Whipped Body Butter 4oz cream"
          price={299}
          rating={3}
          image={require("../../Assets/BeautyCare/Coco_Rose_Fudge_Whipped_Body_Butter_4oz.jpg")}
        />
        <Product
          id="18"
          title="The Natural Skin Care Our Founder Loves A Conscious Collection"
          price={999}
          rating={4}
          image={require("../../Assets/BeautyCare/The_Natural_Skin_Care_Our_Founder__Loves_A_Conscious_Collection.jpg")}
        />

        <Product
          id="19"
          title="TRESemme Shampoo | Hair fall defense | Black Natural"
          price={399}
          rating={5}
          image={require("../../Assets/BeautyCare/Tresemehd.jpg")}
        />
        <Product
          id="20"
          title="Biotique Shampoo | Hair fall rescue | Black Natural"
          price={299}
          rating={4}
          image={require("../../Assets/BeautyCare/Best_Hair_Fall_Shampoo_India_Trabeauli.jpg")}
        />
        <Product
          id="21"
          title="WoW shampoo | Cleanzy hair | Best shampoo "
          price={699}
          rating={4}
          image={require("../../Assets/BeautyCare/WOW_Apple_Cider_Vinegar_No_Parabens_&_Sulphate_Shampoo,_300mL.png")}
        />
        <Product
          id="22"
          title="Medimix soap and Face wash"
          price={199}
          rating={5}
          image={require("../../Assets/BeautyCare/Medimix_Soaps_And_Washes_in_India_2020_Update.jpg")}
        />
        <Product
          id="23"
          title="Pears Soap "
          price={58}
          rating={4}
          image={require("../../Assets/BeautyCare/Pears_Soap_Pure_&_Gentle_With_Lemon_Flower_Exctracts_125G.jpg")}
        />
        <Product
          id="24"
          title="Dettol Original LOL"
          price={49}
          rating={4}
          image={require("../../Assets/BeautyCare/Dettol_Soap.jpg")}
        />
        <Product
          id="25"
          title="Buy Remington Hair Straightener and Dryer Shine Therapy Gift Set Hair dryers Argos"
          price={599}
          rating={4}
          image={require("../../Assets/BeautyCare/Buy_Remington_Hair_Straightener_and_Dryer_Shine_Therapy_Gift_Set_Hair_dryers_Argos.jpg")}
        />
        <Product
          id="26"
          title="Hair Straighteners with Ceramic Plates 2 IN 1 Hair Straightener and Curler Professional Hair Straighteners With Temperature Control Box"
          price={699}
          rating={3}
          image={require("../../Assets/BeautyCare/Hair_Straighteners_with_Ceramic_Plates_2_IN_1_Hair_Straightener_and_Curler_Professional_Hair_Straighteners_With_Temperature_Control_With_Box_Comb_Clips_Wish.jpg")}
        />
      </div>
    </div>
  );
}

export default BeautyCareProduct;
