import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/style.css"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <main role="main">
      <div className="content-holder">
        <h1 className="page-title">Projects</h1>
        <div>
          <div className="row">
            <label>
              <input type="checkbox" />
              <div className="flip-card-inner">
                <div className="flip-card-front left">
                  <h2>Base Converter</h2>
                  <p className="click-on">Click me!</p>
                </div>
                <div className="flip-card-back right">
                  <h3>
                    Takes hexadecimal, octal, binary, or decimal numbers as
                    input and outputs the representation of that number in other
                    bases.
                  </h3>
                  <h3>Written in C++</h3>
                  <div className="buttons">
                    <a
                      id="baseConverterProjectDescription"
                      href="baseConverter.html"
                      className="button"
                      type="button"
                      role="button"
                      aria-label="link to source code for Base Converter"
                    >
                      <p>
                        Project
                        <br />
                        Description
                      </p>
                    </a>
                    <a
                      id="baseConverterProgram"
                      href="https://repl.it/@AmyShackles/NumbersInDifferentBases?lite=1&amp;outputonly=1"
                      className="button responsive"
                      type="button"
                      role="button"
                      aria-label="link to use program Base Converter"
                    >
                      <p>Program</p>
                    </a>
                  </div>
                </div>
              </div>
            </label>
            <label>
              <input type="checkbox" />
              <div className="flip-card-inner">
                <div className="flip-card-front right">
                  <h2>Check Your Digits</h2>
                  <p className="click-on">Click me!</p>
                </div>
                <div className="flip-card-back left">
                  <h3>
                    Checks whether a number is a valid ISBN-10 or ISBN-13 number
                    or provides check digit for either.
                  </h3>
                  <h3>Written in C++</h3>
                  <div className="buttons">
                    <a
                      id="checkYourDigitsProjectDescription"
                      aria-label="link to source code for Check Your Digits"
                      className="button"
                      type="button"
                      role="button"
                      href="checkYourDigits.html"
                    >
                      <p>
                        Project
                        <br />
                        Description
                      </p>
                    </a>
                    <a
                      id="checkYourDigitsProgram"
                      aria-label="link to use program Check Your Digits"
                      className="button responsive"
                      type="button"
                      role="button"
                      href="https://repl.it/@AmyShackles/CheckYourDigits?lite=1&amp;outputonly=1"
                    >
                      <p>Program</p>
                    </a>
                  </div>
                </div>
              </div>
            </label>
          </div>
          <div className="row">
            <label>
              <input type="checkbox" />
              <div className="flip-card-inner">
                <div className="flip-card-front left">
                  <h2>Contract Alchemy</h2>
                  <p className="click-on">Click me!</p>
                </div>
                <div className="flip-card-back right">
                  <h3>
                    Point of Sale application for independent contractors to
                    manage their contracts.
                  </h3>
                  <h3>
                    Written with React, Django, PostgreSQL, GraphQL, and Stripe
                    integration
                  </h3>
                  <div className="buttons">
                    <a
                      id="contractAlchemyProjectDescription"
                      href="contractAlchemy.html"
                      role="button"
                      type="button"
                      className="button"
                      aria-label="link to description for contractAlchemy"
                    >
                      Project
                      <br />
                      Description
                    </a>
                    <a
                      id="contractAlchemyWebsite"
                      href="https://www.contractalchemypos.com"
                      role="button"
                      type="button"
                      className="button"
                      aria-label="link to contractAlchemy website"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </label>
            <label>
              <input type="checkbox" />
              <div className="flip-card-inner">
                <div className="flip-card-front right">
                  <h2>Icons for Great Good</h2>
                  <p className="click-on">Click me!</p>
                </div>
                <div className="flip-card-back left">
                  <h3>
                    Website that takes user input and uses the Robohash API to
                    hash the string and return a robot of a given type.
                  </h3>
                  <h3>Written with with React using the Fetch API</h3>
                  <div className="buttons">
                    <a
                      id="iconsForGreatGoodProjectDescription"
                      href="iconsForGreatGood.html"
                      className="button"
                      type="button"
                      role="button"
                      aria-label="link to project description for Icons for Great Good"
                    >
                      <p>
                        Project
                        <br />
                        Description
                      </p>
                    </a>
                    <a
                      id="iconsForGreatGoodWebsite"
                      href="https://icons-for-great-good.netlify.com"
                      aria-label="link to Icons for Great Good website"
                      role="button"
                      type="button"
                      className="button"
                    >
                      <p>Website</p>
                    </a>
                  </div>
                </div>
              </div>
            </label>
          </div>
          <div className="row">
            <label>
              <input type="checkbox" />
              <div className="flip-card-inner">
                <div className="flip-card-front right">
                  <h2>Lisp Interpreter</h2>
                  <p className="click-on">Click me!</p>
                </div>
                <div className="flip-card-back left">
                  <h3>Program that lets you write Lisp in a repl!</h3>
                  <h3>Written in C</h3>
                  <div className="buttons">
                    <a
                      id="lispInterpreterProjectDescription"
                      href="lispInterpreter.html"
                      className="button"
                      type="button"
                      role="button"
                      aria-label="link to project description for LispInterpreter"
                    >
                      <p>
                        Project
                        <br />
                        Description
                      </p>
                    </a>
                    <a
                      id="lispInterpreterProgram"
                      href="https://repl.it/@AmyShackles/LispInterpreter?lite=1&amp;outputonly=1"
                      aria-label="link to program to run Lisp Interpreter"
                      role="button"
                      type="button"
                      className="button responsive"
                    >
                      <p>Program</p>
                    </a>
                  </div>
                </div>
              </div>
            </label>
            <label>
              <input type="checkbox" />
              <div className="flip-card-inner">
                <div className="flip-card-front right">
                  <h2>Notes For Great Good</h2>
                  <p className="click-on">Click me!</p>
                </div>
                <div className="flip-card-back left">
                  <h3>
                    Application hosting some of the notes I've taken on topics
                    related to computer science.
                  </h3>
                  <h3>Written with Gatsby</h3>
                  <div className="buttons">
                    <a
                      id="notesForGreatGoodProjectDescription"
                      href="notesforgreatgood.html"
                      role="button"
                      type="button"
                      className="button"
                      aria-label="link to project description for Notes For Great Good"
                    >
                      Project
                      <br />
                      Description
                    </a>
                    <a
                      id="notesForGreatGoodWebsite"
                      href="https://notes-for-great-good.netlify.com/"
                      role="button"
                      type="button"
                      className="button"
                      aria-label="link to website Notes For Great Good"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default ProjectsPage
