import React, { Fragment, useCallback, useEffect, useState } from 'react'

const Project = ({ index, content, src, codeStatus, shower, url, repo }) => {
  // console.log(index);
  // const showf = () => {
  // 	if (shower) {
  // 		if (index === 0) {
  // 			pro = useCallback((node) => {
  // 				node.classList.add('anim');
  // 			});
  // 		} else if (index === 1) {
  // 			pro = useCallback((node) => {
  // 				node.classList.add('anim1');
  // 			});
  // 		}
  // 	}
  // };
  if (shower) {
    if (index === 0) {
      pro = useCallback((node) => {
        node.classList.add('anim')
      })
    }
    // pro = useCallback((node) => {
    // 	if (index === 0) {
    // 		node.classList.add('anim');
    // 	} else if (index === 1) {
    // 		node.classList.add('anim1');
    // 	}
    // });
  }
  let pro = useCallback((node) => {
    if (shower) {
      if (index === 0) {
        setTimeout(() => {
          node.classList.add('anim')
        }, 250)
      } else if (index === 1) {
        setTimeout(() => {
          node.classList.add('anim')
        }, 500)
      } else if (index === 2) {
        setTimeout(() => {
          node.classList.add('anim')
        }, 750)
      } else if (index === 3) {
        setTimeout(() => {
          node.classList.add('anim')
        }, 1000)
      }
    }
  })

  return (
    <Fragment>
      <div ref={pro} className='project'>
        <div className='pro-img'>
          <img src={src} alt='' loading='lazy' />
        </div>
        <div className='pro-content-box'>
          <div className='pro-content'>
            {content}
            <div className='triggers'>
              <a href={url} target='_blank'>
                <button>View Site</button>
              </a>
              {codeStatus ? (
                <a href={repo} target='_blank'>
                  <button>View Code</button>
                </a>
              ) : (
                <button className='disabled'>Private Code</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Project
