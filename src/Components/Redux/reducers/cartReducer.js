const defaultState = {
  items: {},
  totalPrice: 0,
  totalItems: 0,
  isPaid: false,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) =>{
        return val[key];
    }, obj[firstKey]);
}
const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
}, 0);
};


const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM_CART": {
      const currentItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const copyItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentItems,
          totalPrice: getTotalPrice(currentItems),
        },
      };

      const totalCount = getTotalSum(copyItems, "items.length");
      const totalPrice = getTotalSum(copyItems, "totalPrice");

      return {
        ...state,
        items: copyItems,
        totalItems: totalCount,
        totalPrice,
      };
    }
    case "EMPTY_CART": {
      return {
        totalPrice: 0,
        totalItems: 0,
        items: {},
      };
    }

    case "REMOVE_ITEM": {
      const copyItems = { ...state.items };
      const currentTotalPrice = copyItems[action.payload].totalPrice;
      const currentTotalItems = copyItems[action.payload].items.length;

      delete copyItems[action.payload];
      return {
        ...state,
        items: copyItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalItems: state.totalItems - currentTotalItems,
      };
    }

    case "PLUS_ITEM": {
      {
        const newItems = [
          ...state.items[action.payload].items,state.items[action.payload].items[0],];
        const newState = {
            ...state.items,
            [action.payload]: {
                items: newItems,
                totalPrice: getTotalPrice(newItems),
              },
            };
        const totalCount = getTotalSum(newState, "items.length");
        const totalPrice = getTotalSum(newState, "totalPrice");

        return {
            ...state, 
            items: newState,
            totalItems: totalCount,
            totalPrice
        };
      }};

    case "MINUS_ITEM": {
      {
        const oldItems = state.items[action.payload].items;
        const newItems = oldItems.length > 1
            ? state.items[action.payload].items.slice(1) : oldItems;
        const newState = {
          ...state.items,
          [action.payload]: {
              items: newItems,
              totalPrice: getTotalPrice(newItems),
            },
          };
         

        const totalCount = getTotalSum(newState, 'items.length');
        const totalPrice = getTotalSum(newState, 'totalPrice');

        return {
            ...state,
            items: newState, 
            totalItems: totalCount, 
            totalPrice,
        };
      }
    }
    case "CLICKED_PAID": {
      return {
        ...state,
        isPaid: action.payload,
      }
    }

    default:
      return state;
  }
};


export default cartReducer;
