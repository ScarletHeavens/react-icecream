import axios from "axios";

export const setToggleGFetching = (payload) => ({
    type: "TOGGLE_FETCHING",
    payload,
});

export const setItems = (item) => ({
    type: 'SET_ITEMS',
    payload: item,
});


export const fetchItems = (sortBy, category) => (dispatch) => {
    axios.get(`/pizzas?${
        category !== null? `category=${category}` : ''
    }&_sort=${sortBy}&_order=desc`).then(({data}) => {
    dispatch(setItems(data))});
    dispatch(setToggleGFetching(false));
    }