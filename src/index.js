import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/redux-store";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
let reRenderEntireTree = () => {
    root.render(
            <Provider store={store}>
                <App/>
            </Provider>
    );
}
reRenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    reRenderEntireTree(state);
});
reportWebVitals();
