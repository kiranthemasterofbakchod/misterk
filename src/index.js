import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// let load = true;
// setTimeout(() => {
// 	load = false;
// }, 1000);
// if (!load) {
// 	// ReactDOM.render(<Loading />, document.querySelector('.body-swap'));
// } else {
// 	ReactDOM.render(<App />, document.getElementById('body-wrapper'));
// }

const loader = document.querySelector('.sweep')

const main = document.querySelector('.sweep-head')
const showLoader = () => main.classList.remove('sweep--hide')
const hideLoader = () => main.classList.add('sweep--hide')

ReactDOM.render(
  <App hideLoader={hideLoader} showLoader={showLoader} />,
  document.getElementById('body-wrapper')
)

// document.querySelector('.body-swap').style.display = 'none';
