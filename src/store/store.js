import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { appReducer, productReducer, productsReducer } from "./reducers";
import { userReducer } from "./reducers/user-reducer";

const reducer = combineReducers({
  app: appReducer,
  product: productReducer,
  products: productsReducer,
  user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
