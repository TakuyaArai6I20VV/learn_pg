import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import books from './books';
import EventBasic from './EventBasic';
import ForList from './ForList';
import StateBasic from './StateBasic';
import MyHello from './MyHello';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyHello lastName="鈴木" firstName="一郎" age={1} />
    <EventBasic type="time" />
    <EventBasic type="date" />
    <br />
    <StateBasic init={0}/>
    <ForList src={books}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
