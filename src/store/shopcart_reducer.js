const ADD_ITEM = 'ADD-ITEM';
const REMOVE_ITEM = 'REMOVE-ITEM'

export const addToCart = (id, name, price) => {
    return {
        type: ADD_ITEM,
        response: {id, name, price}
    }
}

export const removeFromCart = (id, price) => {
    return {
        type: REMOVE_ITEM,
        id,
        price
    }
}

const initialState = {
    items: [],
    totalPrice: 0
}


function shopcart_reducer(state = initialState, action) {
    switch (action.type){
        case ADD_ITEM: {
            const item = action.response
            return { 
                ...state, items: [...state.items, item], totalPrice: state.totalPrice + item.price
            }
        }
        case REMOVE_ITEM: {
            return {
                ...state, items: state.items.filter((item) => item.id !== action.id), totalPrice: state.totalPrice - action.price
            }
        }
        default: return state
    }
}

export default shopcart_reducer;