export function addToCart(id, quantity, price) {
  return {
    type: '@cart/ADD_TO_CART',
    product: { id, quantity, price },
  };
}

export function checkout() {
  return {
    type: '@cart/CHECKOUT',
    payload: null,
  };
}

export function newShop() {
  return {
    type: '@cart/NEW_SHOP',
    payload: null,
  };
}
