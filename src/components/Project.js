import React from "react";
import project1 from '../images/comingsoon.jpg';
import project2 from '../images/comingsoon.jpg';
import portfolio from '../images/pdw.png';

export default function Project() {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Coming Soon...</h3>
                    <img src={project1} alt="Project 1 Page" />
                    <p>This is where my first project is going to live
                        whenever it is created.
                    </p>

                    <a href="https://esaijimenez.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://esaijimenez.on.fleek.co/" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Coming Soon...</h3>
                    <img src={project2} alt="Project 2 Page" />
                    <p>This is where my second project is going to live
                        whenever it is created.
                    </p>

                    <a href="https://esaijimenez.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://esaijimenez.on.fleek.co/" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Portfolio Website</h3>
                    <img src={portfolio} alt="Portfolio Website Page" />
                    <p>A website I created for my portfolio to show off some of
                        my most notable projects and introduce myself.
                    </p>

                    <a href="https://esaijimenez.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/esaijimenez/portfolio-site" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    )
}