let defaultState = {
    items: [],
    isFetched: false,
}

const filterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_ITEMS": 
          return {
               ...state,
               items: action.payload,
               isFetched: true 
               }
        case "TOGGLE_FETCHING":
            return {
                ...state,
                isFetched: action.payload,
            }
        default: return state;
        }
    }


export default filterReducer;