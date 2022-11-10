import React from "react"
import ProfilePic from "../images/profipic.png"
import Github from "../images/github1.png"
import Linkedin from "../images/linkedin6.png"
import Twitter from "../images/twitter1.png"

export default function Header() {
    return (
        <section className="profile">
            <img src={ProfilePic} alt="" className="profile--pic" />
            <div className="profile--header--content">
                <h1 className="profile--header"> Esai Jimenez</h1>
                <p className="profile--text"> Blockchain Developer </p>

                <div className="button--socials">
                    <a href="https://github.com/esaijimenez" target="_blank" className="social--icon">
                        <img src={Github} alt="" />
                    </a>

                    <a href="https://www.linkedin.com/in/esai-jimenez/" target="_blank" className="social--icon">
                        <img src={Linkedin} alt="" />
                    </a>

                    <a href="https://twitter.com/esaiximenez" target="_blank" className="social--icon">
                        <img src={Twitter} alt="" />
                    </a>
                </div>
            </div>

        </section>
    )
}