import axios from "axios";

const ADD_SUSHI = "ADD-SUSHI";

const addSushi = (items) => {
    return {
        type: ADD_SUSHI,
        response: {items}
    }
}

export const setSushi = () => (dispatch) => {
    axios({
        method: 'get',
        url: 'http://localhost:3000/sushi'
    })
    .then((res) => {
       dispatch(addSushi(res.data))
    })
}

const initialState = {
    items: [],
    isLoaded: false
}

function sushi_reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SUSHI: {
            return {
                ...state, items: action.response.items, isLoaded: true
            }
        }
        default: return state
    }
}

export default sushi_reducer;