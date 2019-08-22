import {
  ADD_TO_BASKET,
  BASKET_ITEM_INCREASED,
  BASKET_ITEM_DECREASED,
  BASKET_ITEM_REMOVED,
} from './actions';

export const initialState = {
  basketItems: [],
  basketItemsQuantity: 0,
};

const reducer = (state = initialState, action) => {
  const copyBasketItems = { ...state.basketItems };

  switch (action.type) {
    case ADD_TO_BASKET:
      if (state.basketItems[action.productId]) {
        return {
          ...state,
          basketItems: {
            ...state.basketItems,
            [action.productId]: {
              ...state.basketItems[action.productId],
              count: state.basketItems[action.productId].count + 1,
            },
          },
        };
      }

      return {
        ...state,
        basketItems: {
          ...state.basketItems,
          [action.productId]: {
            ...state.basketItems[action.productId],
            id: action.productId,
            title: action.productTitle,
            price: action.productPrice,
            count: 1,
          },
        },
      };

    case BASKET_ITEM_INCREASED:
      return {
        ...state,
        basketItems: {
          ...state.basketItems,
          [action.productId]: {
            ...state.basketItems[action.productId],
            count: state.basketItems[action.productId].count + 1,
          },
        },
      };

    case BASKET_ITEM_DECREASED:
      return {
        ...state,
        basketItems: {
          ...state.basketItems,
          [action.productId]: {
            ...state.basketItems[action.productId],
            count: state.basketItems[action.productId].count > 1
              ? state.basketItems[action.productId].count - 1
              : 1,
          },
        },
      };

    case BASKET_ITEM_REMOVED:
      delete copyBasketItems[action.productId];

      return {
        ...state,
        basketItems: copyBasketItems,
      };

    default:
      return state;
  }
};

export default reducer;
