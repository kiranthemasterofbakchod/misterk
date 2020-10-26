import React, { useCallback, useRef, useState } from 'react'
import Project from './project'

import photo2 from '../../img/photo2.jpg'
import hotel from '../../img/photo1.png'

import './showcase.css'

const data = [
  {
    content: <p>Hotel WebSite</p>,
    src: hotel,
    codeStatus: true,
    url: 'https://thekiran.github.io/hotelsite/',
    repo: 'https://github.com/thekiran/hotelsite',
  },
  {
    content: <p>Weather App</p>,
    src: photo2,
    codeStatus: true,
    url: 'https://weatherappkiran.herokuapp.com/',
    repo: 'https://github.com/thekiran/weather-app',
  },
  // {
  //   content: <p>more details gagi click madi</p>,
  //   src: '',
  //   codeStatus: true,
  //   url: '',
  // },
  // {
  //   content: <p>more details gagi click madi</p>,
  //   src: '',
  //   codeStatus: true,
  //   url: '',
  // },
]
const Showcase = () => {
  // const options = {
  // 	rootMargin: '0px 0px -150px 0px'
  // };
  // const observer = useRef(
  // 	new IntersectionObserver((entry) => {
  // 		// console.log(entry[0].isIntersecting);
  // 		if (entry[0].isIntersecting) {
  // 			entry[0].target.classList.add('anim');
  // 			observer.current.unobserve(entry[0].target);
  // 		}
  // 		// else {
  // 		// 	entry[0].target.classList.remove('anim');
  // 		// }
  // 	}, options)
  // );

  // const show = useCallback((node) => {
  // 	if (observer.current) observer.current.observe(node);
  // });
  const show = useCallback((node) => {
    setTimeout(() => {
      // node.classList.add('anim')
    }, 1000)
  })
  return (
    <div className='showcase-container' ref={show}>
      <div className='showcase-content'>
        <div className='showcase'>
          {data.map((ele, index, shower) => {
            return (
              <Project
                key={index}
                index={index}
                codeStatus={ele.codeStatus}
                content={ele.content}
                src={ele.src}
                shower={true}
                url={ele.url}
                repo={ele.repo}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Showcase
