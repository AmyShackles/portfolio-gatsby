import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import LeftArrow from "../../images/angle-double-left.svg"
import RightArrow from "../../images/angle-double-right.svg"
import Screenshot from "../../components/images/notesforgreatgood"
import SEO from "../../components/seo"
import "../../styles/style.css"

const NotesForGreatGood = () => (
  <Layout>
    <SEO title="Notes For Great Good" />
    <div role="navigation">
      <div class="content-nav">
        <ul>
          <li>
            <Link to="/projects/lispInterpreter">
              <img src={LeftArrow} alt="arrow left" />
            </Link>
          </li>
          <li>
            <div class="linkToProjects">
              <Link to="/projects"> Projects</Link>
            </div>
          </li>
          <li>
            <Link to="/projects/baseConverter">
              <img src={RightArrow} alt="arrow right" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <main role="main">
      <div className="img-text">
        <Screenshot id="notes-for-great-good-screenshot" />
        <div className="main-text">
          <h1 className="page-title">Notes for Great Good</h1>
          <h2>
            Notes for Great Good was built using a Gatsby starter template for
            blogs and is an application I made to be able to more easily
            distribute notes I've taken on lectures, books, etc. in the hopes
            they may be helpful to others. Each note has tags associated with
            them and individuals can sort notes by tag in order to find notes on
            their topic of interest.
          </h2>
          <div className="project-details">
            <h2 className="tech">Tech</h2>
            <ul>
              <li>
                <h3>
                  Gatsby, GraphQL, gatsby-source-filesystem,
                  gatsby-transformer-remark, gatsby-transformer-sharp
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
            href="https://github.com/AmyShackles/class-notes"
            aria-label="link to Github repo for notes-for-great-good"
            className="button"
            role="button"
            type="button"
          >
            <span>Source Code</span>
          </a>
          <a
            href="https://notes-for-great-good.netlify.com"
            aria-label="link to notes-for-great-good.netlify website"
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

export default NotesForGreatGood
