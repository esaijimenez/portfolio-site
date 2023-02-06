import React from "react";
import chess from '../images/puzzle.jpg';
import project2 from '../images/comingsoon.jpg';
import portfolio from '../images/jimenez.jpg';

export default function Project() {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Checkmate</h3>
                    <img src={chess} alt="Project 1 - Checkmate" />
                    <p><b>Checkmate</b>, a way for users to practice and develop their chess skills in an interactive way through chess puzzles.
                    </p>

                    <a href="https://esaijimenez.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/esaijimenez/Checkmate" target="_blank" className="button">Code</a>
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