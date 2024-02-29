import { combineReducers } from "redux";
import FooterBtmReducer from './FooterBtmReducer'
import SearchBoxReducer from "./SearchBoxReducer";
// rootReducer.js

export default combineReducers({

    Footerbtm: FooterBtmReducer,
    SearchBox: SearchBoxReducer  
})