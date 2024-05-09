import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Form from "./Forms/Form";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Page from "./LanguageSwitcher/Page";
import FormValidationBeginner from "./FormValidation/FormValidationBeginner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <ProductList /> */}
    {/* <Form /> */}
    {/* <Page /> */}
    <FormValidationBeginner />

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
