import React from "react"
//conider accessibilty

export default function Hero () {
    return (
        <div className="hero">
            <div className="hero__image">
                <img src="../../images/hero.png" className="hero__image--hero"></img>
            </div>
            
            <div className="hero__text">
                <h1 className="hero__text--heading">Online Experiences</h1>
                <p className="hero__text--caption">Join unique interactive activities 
                                led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}