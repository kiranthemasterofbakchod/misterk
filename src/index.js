import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// let load = true;
// setTimeout(() => {
// 	load = false;
// }, 1000);
// if (!load) {
// 	// ReactDOM.render(<Loading />, document.querySelector('.body-swap'));
// } else {
// 	ReactDOM.render(<App />, document.getElementById('body-wrapper'));
// }

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');

ReactDOM.render(<App hideLoader={hideLoader} showLoader={showLoader} />, document.getElementById('body-wrapper'));

// document.querySelector('.body-swap').style.display = 'none';
