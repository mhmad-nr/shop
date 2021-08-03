import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./redux/reducer/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from "redux-logger";

const middleware = [];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<h2>لطفا صر کنید</h2>}>
            <App />
        </Suspense>
    </Provider>
    , document.getElementById('root'));

