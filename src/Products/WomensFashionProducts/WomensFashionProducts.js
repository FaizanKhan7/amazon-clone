import React from "react";
import "../../Styles/productStyles.css";
import Product from "../../Product/Product";

function WomensFashionProducts() {
  return (
    <div className="Category_card">
      <div className="Catagory__title__descrpition">
        <h2>Women's Fashion Products</h2>
        <p>Dresses, coats, sweatsirts, watches, shoes and more</p>
      </div>
      <div className="product__rows">
        <Product
          id="53"
          title="Contrast Ribbed Trim Drop Shoulder luffy Sweatshirt"
          price={699}
          rating={4}
          image={require("../../Assets/WomensFashion/ContrastRibbedTrimDropShoulderluffySweatshirt.jpg")}
        />
        <Product
          id="54"
          title="patch work Fluffy Flannel long sleeve Sweatshirts"
          price={799}
          rating={5}
          image={require("../../Assets/WomensFashion/patchworkFluffyFlannellongsleeveSweatshirts.png")}
        />
        <Product
          id="55"
          title="Best Rolex Watches For Women | 
          Sliver & Black"
          price={2999}
          rating={4}
          image={require("../../Assets/WomensFashion/BestRolexWatchesForWomen.jpg")}
        />

        <Product
          id="56"
          title="Finiera Minimalist Black Steel Watch"
          price={2599}
          rating={3}
          image={require("../../Assets/WomensFashion/Finiera_Minimalist_Black_Steel_Watch.jpg")}
        />
        <Product
          id="57"
          title="Petite Melrose Black | Best of the Best"
          price={1599}
          rating={5}
          image={require("../../Assets/WomensFashion/Petite_Melrose_(Black).jpg")}
        />
        <Product
          id="58"
          title="Mara Hoffman Dolores Boiled Wool Coat dustyrose"
          price={1799}
          rating={4}
          image={require("../../Assets/WomensFashion/MaraHoffmanDoloresBoiledWoolCoat-dustyrose.jpg")}
        />
        <Product
          id="59"
          title="THE COCOON COAT"
          price={1199}
          rating={5}
          image={require("../../Assets/WomensFashion/THECOCOONCOAT.jpg")}
        />
        <Product
          id="60"
          title="From our hand's Bracelet to yours"
          price={299}
          rating={4}
          image={require("../../Assets/WomensFashion/Fromourhand'sBracelettoyours.jpg")}
        />
        <Product
          id="61"
          title="Rings and Dainty Gold Jewelry | Party Wear | Set of Four | Plane band | Ribbon Band | Doodle"
          price={499}
          rating={3}
          image={require("../../Assets/WomensFashion/The Everyday Jewelry I Never Take Off (Stories Behind My Wedding Rings and Dainty Gold Jewelry) _ Fashion Jackson.jpg")}
        />
        <Product
          id="62"
          title="Chiko Whitnee Square Toe Block Heels Loafer"
          price={899}
          rating={4}
          image={require("../../Assets/WomensFashion/Chiko Whitnee Square Toe Block Heels Loafer.jpg")}
        />
        <Product
          id="63"
          title="Chiko Acacia Square Toe Block Heels Loafer"
          price={899}
          rating={4}
          image={require("../../Assets/WomensFashion/ChikoAcaciaSquareToeBlockHeelsLoafer.jpg")}
        />
        <Product
          id="64"
          title="Women's Sneakers | White Outfit "
          price={799}
          rating={4}
          image={require("../../Assets/WomensFashion/womenfashionsneakersoutfit.jpg")}
        />
      </div>
    </div>
  );
}

export default WomensFashionProducts;
