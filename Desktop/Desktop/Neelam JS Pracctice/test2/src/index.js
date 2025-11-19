import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App, { Fourth, Third, Car2, Header } from './App';
import reportWebVitals from './reportWebVitals';
import Car from './App';
import { Second } from './App';
import Demo , {Demo2} from './testing';
import LoginPage from './logintest';
import Screen from './screen/demo';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Car></Car>
    <Second></Second>
    <Third cl={"1234"}></Third>
    <Fourth cl={"99d"}></Fourth>
    <Car2></Car2>
    <Header></Header> */}
    {/* <Demo  pr={"delhi"}></Demo>
    // <Demo2 pr={"noida"}></Demo2> */}
    
    {/* <LoginPage></LoginPage> */}
    <App></App>
    
{/* <Screen></Screen> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
