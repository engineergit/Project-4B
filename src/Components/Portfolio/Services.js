import React from 'react'
import './Services.css'
import service from './img/img.jpg'

export const Services = () => {
    return (
        <div className="Services">
            <h1>Our Services</h1>
            <strong>Dependable, professional, and experienced. Choose from any
            of our cleaning services and we’ll handle the rest.
        </strong>
        <div className="services">
            
            <div className="sno">
            <div className="service1">
            <p>End of Lease Cleaning</p>
                <img src={service} alt="img"/>
                <span>
                With our famous 72-hour bond back guarantee, our cleaners always ensure tenants recover their full rental deposits.

               <a href="sohail.com">LEARN MORE</a>

                </span>
            </div>
            <div className="service1">
            <p>End of Lease Cleaning</p>
                <img src={service} alt="img"/>
                <span>
                With our famous 72-hour bond back guarantee, our cleaners always ensure tenants recover their full rental deposits.

               <a href="sohail.com">LEARN MORE</a>

                </span>
            </div>
            </div>
        </div>
        </div>
    )
}
