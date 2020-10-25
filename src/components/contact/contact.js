import React, { useCallback, useRef } from 'react'

import './contact.css'

const Contact = () => {
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log(entries[0].target)
          entries[0].target.classList.add('anim')
        } else {
          entries[0].target.classList.remove('anim')
        }
      },
      {
        rootMargin: '0px 0px -300px 0px',
      }
    )
  )
  const contact = useCallback((node) => {
    if (observer.current) observer.current.observe(node)
  })
  return (
    <div className='contact'>
      <div ref={contact} className='skills-container'>
        <div className='sect-a'>
          <span className='skill-title'>FRONT-END</span>
          <ul className='skills'>
            <li className='skill'>HTML</li>
            <li className='skill'>CSS</li>
            <li className='skill'>JAVASCRIPT</li>
          </ul>
        </div>
        <div className='frame'>
          <span className='skill-title'>FAMEWORKS</span>
          <ul className='skills'>
            <li className='skill'>REACT</li>
            <li className='skill'>SASS</li>
            <li className='skill'>EXPRESS.JS</li>
          </ul>
        </div>
        <div className='sect-b'>
          <span className='skill-title'> BACK-END</span>
          <ul className='skills'>
            <li className='skill'>NODE.JS</li>
            <li className='skill'>MONGODB</li>
            <li className='skill'>PASSPORT.JS</li>
          </ul>
        </div>
      </div>
      <div className='git-container'>
        <div className='git-content'>
          <a
            target='_blank'
            href='https://github.com/thekiran'
            className='contact-btn'>
            <i className='fab fa-github fa-2x'></i>
            {/* Github */}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
