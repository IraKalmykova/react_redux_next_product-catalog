export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const BASKET_ITEM_INCREASED = 'BASKET_ITEM_INCREASED';
export const BASKET_ITEM_DECREASED = 'BASKET_ITEM_DECREASED';
export const BASKET_ITEM_REMOVED = 'BASKET_ITEM_REMOVED';

export const addToBasket = (productId, productTitle, productPrice) => ({
  type: ADD_TO_BASKET,
  productId,
  productTitle,
  productPrice,
});

export const increaseBasketItem = (productId, productPrice) => ({
  type: BASKET_ITEM_INCREASED,
  productId,
  productPrice,
});

export const decreaseBasketItem = (productId, productPrice) => ({
  type: BASKET_ITEM_DECREASED,
  productId,
  productPrice,
});

export const removeBasketItem = productId => ({
  type: BASKET_ITEM_REMOVED,
  productId,
});
