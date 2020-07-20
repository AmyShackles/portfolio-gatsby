import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import LaptopIcon from "../images/laptop-code.svg"
import Avatar from "../components/images/avatar"
import SEO from "../components/seo"
import "../styles/style.css"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Seattle-based Full-stack Developer For Hire"
    />
    <main>
      <div className="content-holder main-page">
        <Avatar id="avatar"/>
        <h1 className="page-title name">Amy Shackles</h1>
        <div className="fa laptop-code">
          <img className="fa laptop-code" src={LaptopIcon} alt="laptop icon" />
        </div>
        <h2 className="home-description">
          Full Stack Software Development Engineer
          <br />
          Calligrapher
          <br />
          Singer
          <br />
          Reasonable Cat Lady
        </h2>
        <Link
          to="/projects"
          className="button main-page-button"
          type="button"
          role="button"
        >
          View projects
        </Link>
      </div>
    </main>
  </Layout>
)

export default IndexPage
