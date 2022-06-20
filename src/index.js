import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store  from "./redux/state";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
let reRenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App appState={store.getState()} dispatch={store.dispatch.bind(store)}
                 updateNewPostText={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}
reRenderEntireTree(store.getState());

store.subscribe(reRenderEntireTree);
reportWebVitals();
