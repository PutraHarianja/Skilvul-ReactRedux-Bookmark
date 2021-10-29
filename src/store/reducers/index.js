import { ADD_BOOKMARK } from "../actions";
import { combineReducers } from "redux";


function bookmarkReducer(state = [], action) {
    console.log(action)
    if(action.type === "ADD_BOOKMARK"){
        return [...state, action.payload]
    }

    
    return state;
}


export const reducer =  combineReducers({
    bookmark: bookmarkReducer
});

