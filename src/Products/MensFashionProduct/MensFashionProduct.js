import React from "react";
import Product from "../../Product/Product";
import "../../Styles/productStyles.css";
function MensFashionProduct() {
  return (
    <div className="Category_card">
      <div className="Catagory__title__descrpition">
        <h2>Mens Fashion Product</h2>
        <p>
          Shop T-shirts, Shirts, Sweatshirts, Shakets, Trackpants, Blazers and
          more
        </p>
      </div>
      <div className="product__rows">
        <Product
          id="1"
          title="Gucci Black T-shirt | Regular Fit | 180 GSM Premium Bio Wash fabric
        |100% Cotton Super Combed Fabric, Pre-Shrunk, Comfort Fit"
          price={699}
          rating={4}
          image={require("../../Assets/MensFashion/gucci_oversized_logo_f2Jss.jpg")}
          altText="t-shirt"
        />
        <Product
          id="2"
          title="Nike Rise 365 Wild Run | The Nike Rise 365 Wild Run Top delivers versatile performance for everyday running."
          price={1296}
          rating={5}
          image={require("../../Assets/MensFashion/nike_sportswear_shor_dqXIA.jpg")}
          altText="t-shirt"
        />
        <Product
          id="3"
          title="Vans Tropical T-shirt | 100% Cotton | Slim Fit | Premium Bio Wash fabric | Live the Vans life Bro"
          price={849}
          rating={3}
          image={require("../../Assets/MensFashion/vans_tropical_print__51xqo.jpg")}
          altText="t-shirt"
        />

        <Product
          id="4"
          title="Fjallraven Men's Shirt | Awesome Flannel shirt | Perfect Fit"
          price={799}
          rating={3}
          image={require("../../Assets/MensFashion/fjallraven_men_s_fja_Jhxxy.jpg")}
          altText="shirt"
        />
        <Product
          id="5"
          title="Fjallraven Men's Shirt | Awesome Flannel shirt | Blue And Red Chex Combined"
          price={759}
          rating={5}
          image={require("../../Assets/MensFashion/men_s_long_sleeved_f_bwHku.jpg")}
          altText="shirt"
        />
        <Product
          id="6"
          title="Fjallraven Men's Shirt | Awesom Flannel shirt | Perfect Fit"
          price={699}
          rating={4}
          image={require("../../Assets/MensFashion/men_s_primaloft_line_wkpAw.jpg")}
          altText="shirt"
        />
        <Product
          id="7"
          title="Carhartt Duch Active Winter Were Jacket | With Hodd"
          price={1899}
          rating={5}
          image={require("../../Assets/MensFashion/carhartt_duck_active_jmFWi.jpg")}
          altText="Jacket"
        />
        <Product
          id="8"
          title="Men's unshrinkable Blue Sweatshirt"
          price={1299}
          rating={4}
          image={require("../../Assets/MensFashion/men_s_unshrinkable_m_Ht8oB.jpg")}
          altText="Jacket"
        />
        <Product
          id="9"
          title="Woolrich men's broml SweatShirt | Quarter zip | Perfect fit"
          price={1599}
          rating={5}
          image={require("../../Assets/MensFashion/woolrich_men_s_broml_waMPr.jpg")}
          altText="Jacket"
        />
        <Product
          id="10"
          title="Men's Wrangler retro blue jeans pant | Strechable"
          price={599}
          rating={4}
          image={require("../../Assets/MensFashion/men_s_wrangler_retro_ZhO61.jpg")}
          altText="jeans"
        />
        <Product
          id="11"
          title="Men's stetson blue jeans pant | Strechable"
          price={699}
          rating={3}
          image={require("../../Assets/MensFashion/mens_stetson_blue_co_OTTke.jpg")}
          altText="jeans"
        />
        <Product
          id="12"
          title="Men's levi's blue jeans pant | Non-Strechable"
          price={799}
          rating={5}
          image={require("../../Assets/MensFashion/silver_jeans_co__big_oGvs5.jpg")}
          altText="jeans"
        />
        <Product
          id="13"
          title="Nike's Air Jordon | Black, Blue & Red "
          price={2999}
          rating={5}
          image={require("../../Assets/MensFashion/jordan_1_retro_high__Qb0tY.jpg")}
          altText="Shoes"
        />
        <Product
          id="14"
          title="New Balance"
          price={1999}
          rating={5}
          image={require("../../Assets/MensFashion/new_balance_women_57_mCl81.jpg")}
          altText="Shoes"
        />
        <Product
          id="15"
          title="Trenton sleek chukka | Woods Wear | Party Wear"
          price={2599}
          rating={4}
          image={require("../../Assets/MensFashion/trenton_sleek_chukka_a6gnw.jpg")}
          altText="Shoes"
        />
      </div>
    </div>
  );
}

export default MensFashionProduct;
