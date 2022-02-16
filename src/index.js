import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from "./Components/About"
import Info from "./Components/Info"
import Footer from "./Components/Footer"
import reportWebVitals from './reportWebVitals';
import Interests from "./Components/Interests"
ReactDOM.render(
  <React.StrictMode>
    <div className='main-div'>
    <Interests/>
    <About/>
    <Info/>
    <Footer/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
