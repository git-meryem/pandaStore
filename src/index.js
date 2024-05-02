import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HelloWord from "./helloWord/HelloWord";
import Counter from "./counter/Counter";
import Form from "./Forms/form";
import Bar from "./TopBar/Bar";
// import sayHello from './helloWord/HelloWord';
// import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FruitList from "./FruitList/FruitList";
import ToggleName from "./toggle/ToggleName";
import ProductList from "./store/ProductList";
const root = ReactDOM.createRoot(document.getElementById("root"));
const ArrayFruit = [];
root.render(
  <>
    <ProductList />
    {/* <Counter initialValue={3} step={2}/> */}

    {/* <Bar></Bar>
    <Form></Form> */}
    {/* <FruitList fruits={ArrayFruit}></FruitList> */}
    {/* <ToggleName /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
