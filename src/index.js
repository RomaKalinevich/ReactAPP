import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store  from "./redux/redux-store";
import reportWebVitals from "./reportWebVitals";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
let reRenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App appState={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
            </StoreContext.Provider>
        </React.StrictMode>
    );
}
reRenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    reRenderEntireTree(state);
});
reportWebVitals();
