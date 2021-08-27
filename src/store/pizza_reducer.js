import axios from 'axios';

const ADD_PIZZA = 'ADD_PIZZA'

export const addPizza = (items) => {
    return {
        type: ADD_PIZZA,
        response: {
            items
        }
    }
}

export const setPizzas = () => (dispatch) => {
    axios({
        method: 'get',
        url: 'http://localhost:3000/pizzas'
    })
    .then((res) => {
       dispatch(addPizza(res.data))
    })
}

const initialState = {
    items: [],
    isLoaded: false
}

function pizza_reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PIZZA:
            return { ...state, items: action.response.items, isLoaded: true };
        default: 
            return state
    }
}

export default pizza_reducer;