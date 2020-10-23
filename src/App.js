import React, { Fragment, useEffect } from 'react'
import Contact from './components/contact/contact'
import Header from './components/header/header'
import Showcase from './components/showcase/showcase'

import loading from './img/loading.gif'

// "homepage": "http://kiranthemasterofbakchod.github.io/misterk",

const App = ({ hideLoader }) => {
  useEffect(() => {
    hideLoader()
  }, [])
  return (
    <Fragment>
      <Header />

      <Showcase />
      <Contact />
      <div className='space' />
    </Fragment>
  )
}

export default App
