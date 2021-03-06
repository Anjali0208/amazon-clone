export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //logic for adding item into basket
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVING_FROM_BASKET":
      //logic for removing from basket

      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log("action.id", action.id);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id : ${action.id}) as its not there`
        );
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

// export default reducer;
