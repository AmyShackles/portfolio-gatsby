import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import LeftArrow from "../../images/angle-double-left.svg"
import RightArrow from "../../images/angle-double-right.svg"
import DesignImages from "../../components/images/socialmediadashboarddesign.js"
import SEO from "../../components/seo"
import "../../styles/style.css"

const SocialMediaDashboard = () => (
  <Layout>
    <SEO title="Social Media Dashboard" />
    <div role="navigation">
      <div className="content-nav">
        <ul>
          <li>
            <Link to="/projects/notesForGreatGood">
              <img src={LeftArrow} alt="link to Notes for Great Good" />
            </Link>
          </li>
          <li>
            <div className="linkToProjects">
              <Link to="/projects"> Projects</Link>
            </div>
          </li>
          <li>
            <Link to="/projects/baseConverter">
              <img src={RightArrow} alt="link to Base Converter" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <main className="main-projects">
      <div className="img-text">
        <div className="main-text">
          <h1 className="page-title">Social Media Dashboard</h1>
          <h2>
            Social Media Dashboard is a responsively designed view with a dark
            theme toggle switch built to match designs provided. Below are some
            of the designs provided and screenshots of the deployed website in
            comparison.
          </h2>
          <div className="project-details">
            <h2 className="tech">Tech</h2>
            <ul>
              <li>
                <h3>HTML, CSS</h3>
              </li>
              <li>
                <h3>Language : JavaScript</h3>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <a
              href="https://github.com/AmyShackles/social-media-dashboard-with-theme-switcher"
              aria-label="link to Github repo for Social Media Dashboard"
              className="button"
              role="button"
              type="button"
            >
              <span>Source Code</span>
            </a>
            <a
              href="https://social-dashboard-challenge.netlify.com/"
              aria-label="link to hosted Social Media Dashboard website"
              className="button"
              type="button"
              role="button"
            >
              <span>Website</span>
            </a>
          </div>
        </div>
      </div>
      <DesignImages id="socialMediaDashboardDesigns" />
    </main>
  </Layout>
)

export default SocialMediaDashboard
