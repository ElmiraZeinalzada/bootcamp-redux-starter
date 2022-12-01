const initialState = {
  state={
  cart: [],
  good: [],
  }
};
addCart = () => {
  store.dispatch({
    type: 'ADD_TO_CART',
    payload: {
      todo: this.state.cart,
    },
  });
  this.setState({ cart: '' });
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DELETE FROM CART': {
    }
  }
}
