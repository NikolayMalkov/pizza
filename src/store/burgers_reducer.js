import axios from "axios";

const ADD_BURGER = "ADD-BURGER";

const addBurgers = (items) => {
    return {
        type: ADD_BURGER,
        response: {items}
    }
}

export const setBurgers = () => (dispatch) => {
    axios({
        method: 'get',
        url: 'http://localhost:3000/burgers'
    })
    .then((res) => {
       dispatch(addBurgers(res.data))
    })
}

const initialState = {
    items: [],
    isLoaded: false
}

function burgers_reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_BURGER: {
            return {
                ...state, items: action.response.items, isLoaded: true
            }
        }
        default: return state
    }
}

export default burgers_reducer;