import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';

import './header.css';
import logo from '../../img/logo.png';
import Slider from './slider';
import Showcase from '../showcase/showcase';

const Header = () => {
	const opt = {
		options: {
			rootMargin: '-500px 0px 0px 0px'
		},
		mainOptions: {
			// threshold: 1
		},
		profOptions: {
			rootMargin: '-200px 0px 0px 0px'
		}
	};
	// console.log(opt.options);
	const observer = useRef(
		new IntersectionObserver((entries) => {
			if (!entries[0].isIntersecting) {
				entries[0].target.classList.add('scrolled');
				// observer.current.unobserve(entries[0].target);
			} else {
				entries[0].target.classList.remove('scrolled');
			}
		}, opt.options)
	);
	const target = useCallback((node) => {
		if (observer.current) observer.current.observe(node);
	});

	const mainObserver = useRef(
		new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				entries[0].target.children[0].classList.add('anim');
				mainObserver.current.unobserve(entries[0].target);
			}
		}, opt.mainOptions)
	);
	const main = useCallback((node) => {
		if (mainObserver.current) mainObserver.current.observe(node);
	});
	const profObserver = useRef(
		new IntersectionObserver((entries) => {
			if (!entries[0].isIntersecting) {
				entries[0].target.classList.add('anim');
			} else {
				entries[0].target.classList.remove('anim');
			}
			setTimeout(() => {
				entries[0].target.classList.remove('anim');
				profObserver.current.unobserve(entries[0].target);
			}, 5000);
		}, opt.profOptions)
	);

	const prof = useCallback((node) => {
		if (profObserver.current) profObserver.current.observe(node);
	});

	const hc = useCallback((node) => {
		// console.log(node);
		setTimeout(() => {
			node.classList.add('anim');
		}, 2000);
	});
	return (
		<Fragment>
			{/* <Slider show={true} /> */}
			<div ref={main} id="main-header">
				<Fragment>
					<div className="header-container">
						<div ref={hc} className="header-content">
							<div className="main-nav">
								<div ref={prof} className="prof">
									<img className="log" src={logo} />
								</div>
								<p className="text-title-primary">Hi, My Name is Kirn</p>
							</div>
							<div ref={target} className="text w">
								<p className="text-title">Hi, My Name is Kirn.</p>
								<p className="text-main">
									I'm a Web Developer, I Specialize on both Front-end & Back-end. <br /> Building
									beautiful websites is my passion.
									<br />
									You can contact me anytime or checkout my other projects.
								</p>
							</div>
						</div>
					</div>
					<Showcase />
				</Fragment>
			</div>
		</Fragment>
	);
};

export default Header;
