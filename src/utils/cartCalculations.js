export const calculateItemTotal = (price, quantity) => {
  return price * quantity;
};

export const calculateCartTotal = (cart) => {
  return cart.reduce((total, item) => total + calculateItemTotal(item.price, item.quantity), 0);
};