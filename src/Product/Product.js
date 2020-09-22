// import React from "react";
// import "./Product.css";
// import { useStateValue } from "../StateProvider";
// function Product({ id, title, image, price, rating }) {
//   const [{ cart }, dispatch] = useStateValue();

//   // console.log("this is the cart", cart);
//   const addToCart = () => {
//     // Dispatch the item into the data layer
//     dispatch({
//       type: "ADD_TO_CART",
//       item: {
//         id: id,
//         title: title,
//         image: image,
//         price: price,
//         rating: rating,
//       },
//     });
//   };
//   return (
//     <div className="product">
//       <div className="product__info">
//         <p>{title}</p>
//         <p className="product__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="product__rating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <span role="img" aria-label="star">
//                 ⭐
//               </span>
//             ))}
//         </div>
//       </div>

//       <img src={image} alt="Zero-to-one-Book" />
//       <button onClick={addToCart}>Add to Cart</button>
//     </div>
//   );
// }

// export default Product;

import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";
function Product({ id, title, image, altText, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  console.log("this is the cart", cart);
  const addToCart = () => {
    // Dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>&#x20B9;</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
        <img src={image} alt={altText} />
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
