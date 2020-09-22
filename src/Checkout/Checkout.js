import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src={require("../Assets/amazon_ad.jpg")}
          alt="Amazon-Ad"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Cart</h2>

          {/* <CheckoutProduct
            id="3846"
            title="ldjkgdlfhgdfndsfhsd dfgndfuh lorem ldjkgdlfhgdfndsfhsd dfgndfuh loremldjkgdlfhgdfndsfhsd dfgndfuh loremldjkgdlfhgdfndsfhsd dfgndfuh loremldjkgdlfhgdfndsfhsd dfgndfuh lorem"
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420843434l/18070752.jpg"
            price={199.0}
            rating={4}
          /> */}
          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        {/* Subtotal */}
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
