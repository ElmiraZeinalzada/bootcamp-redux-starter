const initialState = {
  state={
  cart: [],
  good: [],
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TOCART': {
      const copiedCart = [...state.cart];
      copiedCart.push(action.payload.cart);
      return {
        ...state,
        cart: copiedCart,
      };
    }
    case 'REMOVE_TODO':
      let copiedCart = [...state.cart].filter(
        (el) => el != action.payload.cart
      );
      return {
        ...state,
        cart: copiedCart,
      };
  }
}
