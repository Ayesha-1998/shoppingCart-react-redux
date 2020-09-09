import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import reducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let store=createStore(reducers);


ReactDom.render(
    <Provider store={store}>
         <App />
    </Provider>, document.querySelector("#root")
    );
