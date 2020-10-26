import React from 'react'
import './secone.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import img3 from './img/1.svg'
import bc from './img/2.svg'
export const Sectionone = () => {
    AOS.init({
        duration: 1200,
    })
    
    return (
        <div className="mainsec">
        <div className="typrwrt">
        <Typewriter
                    // className="fa"
                  options={{
                    strings: ["You move out"],
                    autoStart: true,
                    loop: true ,
                    delay:'natural',
                    wrapperClassName: "h1",
                    cursorClassName: "Typewriter__cursor",
                    
}}
            />
            <Typewriter
                  options={{
                    strings: ["We clean up.The simplest way to get your bond back. Guaranteed"],
                    autoStart: true,
                    loop: true,
                    delay:'natural',
                    deleteSpeed:3,
                    wrapperClassName: "h6",
                    cursorClassName: "Typewriter__cursor",
}}
            />
        </div>
       
            <h2>worked with organ</h2>
            
            <div data-aos="fade-left" 
        style={{backgroundImage:`url(${bc})`,
        backgroundSize:'cover',
        backgroundPosition:"center",
        backgroundClip: "text", // Removed !important
        color: "transparent",
        backgroundRepeat:'no-repeat'}} 
        className="divimg">
            <div className="img2">
                
            <div className="item" data-aos="slide-up">
                <img className="img3" src={img3} alt=""/>
            </div>
            </div>
            </div>
            </div>

       )
}
