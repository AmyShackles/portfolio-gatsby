import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import LeftArrow from "../../images/angle-double-left.svg"
import RightArrow from "../../images/angle-double-right.svg"
import Screenshot from "../../components/images/montyhall"
import SEO from "../../components/seo"
import "../../styles/style.css"

const MontyHall = () => (
  <Layout>
    <SEO title="Notes For Great Good" />
    <div role="navigation">
      <div className="content-nav">
        <ul>
          <li>
            <Link to="/projects/lispInterpreter">
              <img src={LeftArrow}  alt="link to Lisp Interpreter"/>
            </Link>
          </li>
          <li>
            <div className="linkToProjects">
              <Link to="/projects"> Projects</Link>
            </div>
          </li>
          <li>
            <Link to="/projects/notesForGreatGood">
              <img src={RightArrow} alt="link to Notes for Great Good"/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <main className="main-projects">
      <div className="img-text">
        <Screenshot id="monty-hall-screenshot" />
        <div className="main-text">
          <h1 className="page-title">Monty Hall</h1>
          <h2>
            Monty Hall is a browser game built using a Create React App starter.  
            Meant to simulate the Monty Hall problem, the user is presented with three closed doors and asked to choose a door.
            Once the user has selected a door, Monty will open a different door to reveal a goat.
            Monty then asks whether you would like to switch doors or stick with the original door you chose.
            Monty then reveals whether or not your choice led to you choosing the prize door.
            Users can run this simulation as many times as they'd like and the win percentages along with the percentage of the time they switched doors or stuck with the original door is provided.
          </h2>
          <div className="project-details">
            <h2 className="tech">Tech</h2>
            <ul>
              <li>
                <h3>
                  React, React Portals, React Hooks
                </h3>
              </li>
              <li>
                <h3>Language : JavaScript</h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="buttons">
          <a
            href="https://github.com/AmyShackles/monty_hall"
            aria-label="link to Github repo for notes-for-great-good"
            className="button"
            role="button"
            type="button"
          >
            <span>Source Code</span>
          </a>
          <a
            href="https://monty-hall.netlify.app/"
            aria-label="link to https://monty-hall.netlify.app/ website"
            className="button"
            type="button"
            role="button"
          >
            <span>Website</span>
          </a>
        </div>
      </div>
    </main>
  </Layout>
)

export default MontyHall
