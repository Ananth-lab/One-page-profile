import React from "react";
import mine from "../mine.JPG"
import linkedin from "../linkedin.png"
import Mail from "../Mail.png"
export default function Interests(){
    return(
        <section>
        <div className="icon">
        <img className="First-img"src={mine}/>
        </div>
        <h2 className="heading-main"> Anantharaja Bhat B</h2>
        <p className = "sub-text--primary">Frontend Developer</p>
        <p className="sub-text--secondary">anantharaja.com</p>
        <div className="contact-buttons">
            <button><img src = {Mail}/>Email</button>
            <button><img src = {linkedin}/>LinkedIn</button>
        </div>
        </section>
    )
}