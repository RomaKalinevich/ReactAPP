import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/redux-store";
import reportWebVitals from "./reportWebVitals";
import StoreContext from "./StoreContext";
import Provider from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
debugger;
let reRenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
}
reRenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    reRenderEntireTree(state);
});
reportWebVitals();
