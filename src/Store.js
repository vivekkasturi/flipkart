import Rootreducer from "./reducers/Rootreducer";
import { legacy_createStore as createStore } from 'redux';
import {thunk} from "redux-thunk";
import { applyMiddleware, compose } from "redux";

const middleware = [thunk];
const store = createStore(Rootreducer, compose(applyMiddleware(...middleware)));

export default store;
