import React , {useState , useEffect} from 'react'
import './About.scss';

import { motion } from 'framer-motion';
import {images} from '../../constants'

const abouts = [
  {title:'Web Development' , description:'I am Good Web Developer.' , imgURL:images.about01},
  {title:'Web Design' , description:'I am Good Web Developer.' , imgURL:images.about02},
  {title:'UI/UX' , description:'I am Good Web Developer.' , imgURL:images.about03},
  {title:'Web Animations' , description:'I am Good Web Developer.' , imgURL:images.about04},
]

const About = () => {
  return (
    <>
      <h2 className='head-text' style={{marginTop:20}}><span>Python Developer</span>
      <br/>
      <p>And</p>
      <span> Machine Learning Enthusiast</span> </h2>

      <div className='app__profiles'>
         {abouts.map((about,index) => (
           <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5, type:'tween'}}
            className="app__profile-item"
            key = {about.title + index}
           >
            <img src={about.imgURL} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop:10}}>{about.description}</p>
           </motion.div>
         ))}
      </div>
    </>
  )
}

export default About