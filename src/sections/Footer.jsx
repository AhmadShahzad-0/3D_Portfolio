import React from 'react'
import { socialImgs } from '../constants/index.js'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col justify-center md:items-start items-center'>
                <h3>About Me</h3>
                <p>I'm Ahmad, a Full Stack Developer turning complex ideas into smart, scalable digital solutions.</p>
            </div>
            <div className='socials'>
                {socialImgs.map((img) => (
                    <a href={img.url} key={img.url} className='icon' target='_blank'>
                        <img src={img.imgPath} />
                    </a>
                ))}
            </div>

            <div className='flex flex-col justify-center'>
                <p className='text-center md:text-end'>
                    © {new Date().getFullYear()} Ahmad | Shahzad. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer