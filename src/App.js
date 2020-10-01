import React, { Fragment, useEffect } from 'react';
import Header from './components/header/header';

import loading from './img/loading.gif';

// const Loading = () => {
// 	return (
// 		<Fragment>
// 			<img src={loading} alt="" />
// 		</Fragment>
// 	);
// };

const App = ({ hideLoader }) => {
	useEffect(() => {
		hideLoader();
	}, []);
	return (
		<Fragment>
			<Header />
			<div className="space" />
		</Fragment>
	);
};

export default App;
