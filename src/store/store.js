import pizza_reducer from "./pizza_reducer";
import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import shopcart_reducer from "./shopcart_reducer";
import burgers_reducer from "./burgers_reducer";
import sushi_reducer from "./sushi_reducer"

let reducers = combineReducers({
    pizza: pizza_reducer,
    burgers: burgers_reducer,
    sushi: sushi_reducer,
    shopcart: shopcart_reducer
})


export let store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)))
     