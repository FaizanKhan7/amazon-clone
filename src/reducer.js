// a reducer is essentially how we are able to actually dispatch the action into the data layer.
// pushing the datat to the data layer is where a reducer plays a important part
// The CONTEXT API & REDUX are not the samething but they are the same pattern, uses a idea of store..  which basically like a global store for a application

export const initialState = {
  cart: [],
  user: null,
};

// Selector - this is actually something which is highly used in  production environmen & also it is a professional pratice
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0); // there purpose of reduce is it essentially it goes ahead and itirates the cartand then it tally's up the total. so we have initial amount and we're going to itirate the item. So, every time it loops through we want the item price to add to the total amount where initial amount is going to be zero. its just a fancy way of writting for loop.

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    //Imagine reducer is like something that's always listening for a dispatch..something like that but always listening. So, in return we are returning whatever the state originmally was. but we're changing the cart, where we are saying like the basket should now be 'whatever the cart currently was Plus whatever we actually decided to add the action that we passed to the item in the action.'
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `can't remove th eproduct (id: ${action.id}) as its not in the cart`
        );
      }

      return {
        ...state,
        cart: newCart,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
