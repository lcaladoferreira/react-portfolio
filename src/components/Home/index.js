import { useState } from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo';
import "./index.scss";

const Home = () => {
const [letterClass] = useState('text-animate')
const nameArray = ['C', 'a', 'l', 'a', 'd', 'o']
const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    

    
    return (
        <div className="container home-page"> 
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i, </span>
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <span className={`${letterClass} _15`}></span>
                <span className={`${letterClass} _16`}>L</span>
                <span className={`${letterClass} _17`}>e</span>
                <span className={`${letterClass} _18`}>a</span>
                <span className={`${letterClass} _19`}>n</span>
                <span className={`${letterClass} _20`}>d</span>
                <span className={`${letterClass} _21`}>r</span>
                <span className={`${letterClass} _22`}>o</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <br/> 
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={22} />
            </h1>
            <h2>Frontend Developer / React, Angular and VueJS </h2>
            <Link to="/contact" className="flat-button">
                CONTACT ME
                </Link>
        </div>
       <Logo/>
    </div>
  );    


  
}

export default Home