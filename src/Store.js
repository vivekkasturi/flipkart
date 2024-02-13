import thunk from "redux-thunk";
import { legacy_createStore as createStore,applyMiddleware, compose } from "redux";


const middleware = [thunk];
const store = createStore(compose(applyMiddleware(...middleware)));

export default store;
