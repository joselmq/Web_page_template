// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Page1 from "./Page1";
// import Page2 from "./Page2";

//  ReactDOM.render(
//    <BrowserRouter>
//     <Switch>
//      <Route exact path="/" component={Page1} />
//      <Route path="/page2" component={Page2} />
//    </Switch>
//    </BrowserRouter>,
//    rootElement
//  );


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Second_page from "./Second_page";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={App} />
   <Route path="/Second_page" component={Second_page} />
 </Switch>
 </BrowserRouter>,
 rootElement
);