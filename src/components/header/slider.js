import React, { Fragment, useState } from 'react';

import './header.scss';

const Slider = ({ show }) => {
	// debugger;
	const [ estyle, setestyle ] = useState({ transform: 'none' });
	setTimeout(() => {
		setestyle({
			transform: 'translateY(-100%)',
			transition: 'transform 750ms',
			zIndex: 1000,
			display: 'none'
		});
	}, 1500);
	return (
		<Fragment>
			{show ? (
				<div style={estyle} className="header-slider">
					{/* <div className="overlay" /> */}
					<div className="main-slider">
						<div className="side-greet">Hello</div>
						<div className="logo-slider">
							<div className="lgo">
								<span id="k">Welcome</span>
								<br />
							</div>
						</div>
					</div>
				</div>
			) : null}
		</Fragment>
	);
};

export default Slider;
