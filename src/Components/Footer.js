import React from "react";
import fb from "../fb.png";
import git from "../git.png";
import insta from "../insta.png";
import twit from "../twit.png";

export default function Footer(){
    return(
        <div className="section-footer">
            <img src= {git}/>
            <img src= {twit}/>
            <img src= {insta}/>
            <img src= {fb}/>
        </div>
    )
}