import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let posts = [{id:1, text: "Hi, how are you", likesCount: 12},
    {id:2, text: "It is my first post", likesCount: 2}];
let messages = [{id: 1, message: "Hi"}, {id: 2, message: "Hello"}, {id: 3, message: "Hello world"}, {id: 4, message: "Hello world Mother Fucker"}];
let dialogs = [{id: 1, name: "Roma"}, {id: 2, name: "Marta"}, {id: 3, name: "Sasha"}, {id: 4, name: "Vica"}];

root.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
