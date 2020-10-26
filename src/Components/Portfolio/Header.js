import React, { useState } from 'react'
import Close from './img/times-solid.svg'
import './Header.css'
import Menu from './img/bars-solid.svg'
export const Header = () => {
    const [toggle, setToggle] = useState(false);
    const fun = (toggle)=>{
        setToggle(toggle);
        let a =document.getElementsByTagName("body")[0]
        console.log(toggle)
        if(toggle){
            a.style.overflowY='hidden'
        }
        else{
            a.style.overflowY="scroll"            
        }
    }
    return (
        <div>
            <div className="menu"  >
                <img src={toggle ? Close :Menu} alt="menu" width="20" onClick={() => fun(!toggle)} />
            </div>
            <p id="votcher">Try voucher code HALLOWEEN20 for 20% OFF <span aria-labelledby='jsx-a11y/accessible-emoji' role="img">😜</span>. Expires 31/10/2020.</p>
            <div className="sohailLink">
                <h1 className="logo">Sohail</h1>
                <div className={toggle ? "toggle mbl-d-none" : "mbl-d-none"} >
                    <select>
                        <option>LOCATION</option>
                    </select>
                    <select>
                        <option>SERVICES</option>
                    </select>
                    <select>
                        <option>RESOURCES</option>
                    </select>
                    <select>
                        <option>BLOG</option>
                    </select>
                    <select>
                        <option>REVIEWS</option>
                    </select>
                    <button id="buttonhead">GET A QUOTE</button>


                </div>
            </div>
            {/* <span  className="close" onClick={() => fun(!toggle)}>
                <img src={Close} className="close" alt="close" width="20" />
            </span> */}

        </div>
    )
}
