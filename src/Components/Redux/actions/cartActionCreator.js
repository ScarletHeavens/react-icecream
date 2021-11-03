export const addItemCart = (itemObj) => ({
    type: 'ADD_ITEM_CART',
    payload: itemObj,
});

export const emptyCart = () => ({
    type: 'EMPTY_CART',
});

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id,
});

export const plusItem = (id) => ({
    type: 'PLUS_ITEM',
    payload: id, 
})

export const minusItem = (id) => ({
    type: 'MINUS_ITEM',
    payload: id, 
})

export const clickedPaid = (payload) => ({
    type: "CLICKED_PAID",
    payload,
});