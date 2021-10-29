import { createStore } from "redux";
import { reducer } from "./reducers";


export const store_Reducer = createStore(reducer);