import React from "react"
import Layout from "../components/layout"
import Kittens from "../components/images/kittens"
import SEO from "../components/seo"
import "../styles/style.css"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <main className="about-1">
      <div className="content-holder about-me about-1">
        <h1 className="page-title">About Amy</h1>
        <div className="row">
          <label>
            <input type="checkbox" />
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>
                  I love helping people and will go to ridiculous lengths to do
                  it.
                </h2>
                <p className="click-on">Click for more info!</p>
              </div>
              <div className="flip-card-back">
                <h3>
                  Farthest to date was probably the time I studied quantum
                  mechanics to help a friend with his homework in uni.
                </h3>
                <h3>Note that I was a Psychology/Anthroplogy double major.</h3>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>I was self-employed for over a decade.</h2>
                <p className="click-on">Click for more info!</p>
              </div>
              <div className="flip-card-back">
                <h3>I've juggled contracts, deadlines, and project specs.</h3>
                <h3>
                  A client of a company I contracted for once personally
                  requested me to handle their jobs due to their appreciation of
                  my research.
                </h3>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>I double majored in Psychology and Anthropology</h2>
                <p className="click-on">Click for more info!</p>
              </div>
              <div className="flip-card-back">
                <h3>
                  Though I didn't choose to pursue either field for a career, I
                  feel like my education in them has led me to develop into a
                  more collaborative individual. I'm often able to see a
                  situation from multiple points of view and put myself into
                  other people's shoes.
                </h3>
              </div>
            </div>
          </label>
        </div>
        <div className="row">
          <label>
            <input type="checkbox" />
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>I'm a half-Brit</h2>
                <p className="click-on">Click for more info!</p>
              </div>
              <div className="flip-card-back">
                <h3>
                  I was born and raised in the States, but I had an East
                  Midlands accent until about third grade.
                </h3>
                <h3>
                  I still slip into English slang/pronunciation on occasion.
                </h3>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>I love debugging.</h2>
                <p className="click-on">Click for more info!</p>
              </div>
              <div className="flip-card-back">
                <h3>
                  While I dislike the fact that it means that someone has a
                  problem with their code, I jump at any chance to try to figure
                  out how to solve whatever issue is going on.
                </h3>
                <h3>
                  I'm trying to work on being less obviously excited about it.
                </h3>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>I'm owned by two Maine Coons</h2>
                <p className="click-on">Click to see said cats!</p>
              </div>
              <div className="flip-card-back cat-photo">
                <Kittens id="kittens" />
              </div>
            </div>
          </label>
        </div>
      </div>
    </main>
    <main className="about-2">
      <div className="content-holder about-me about-2">
        <h1 className="page-title">About Amy</h1>
        <div className="row">
          <label>
            <input type="checkbox" />
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>
                  I love helping people and will go to ridiculous lengths to do
                  it.
                </h2>
                <p className="click-on">Click for more info!</p>
              </div>
              <div className="flip-card-back">
                <h3>
                  Farthest to date was probably the time I studied quantum
                  mechanics to help a friend with his homework in uni.
                </h3>
                <h3>Note that I was a Psychology/Anthroplogy double major.</h3>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>I was self-employed for over a decade.</h2>
                <p className="click-on">Click for more info!</p>
              </div>
              <div className="flip-card-back">
                <h3>I've juggled contracts, deadlines, and project specs.</h3>
                <h3>
                  A client of a company I contracted for once personally
                  requested me to handle their jobs due to their appreciation of
                  my research.
                </h3>
              </div>
            </div>
          </label>
        </div>
        <div className="row">
          <label>
            <input type="checkbox" />
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>I double majored in Psychology and Anthropology</h2>
                <p className="click-on">Click for more info!</p>
              </div>
              <div className="flip-card-back">
                <h3>
                  Though I didn't choose to pursue either field for a career, I
                  feel like my education in them has led me to develop into a
                  more collaborative individual. I'm often able to see a
                  situation from multiple points of view and put myself into
                  other people's shoes.
                </h3>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>I'm a half-Brit</h2>
                <p className="click-on">Click for more info!</p>
              </div>
              <div className="flip-card-back">
                <h3>
                  I was born and raised in the States, but I had an East
                  Midlands accent until about third grade.
                </h3>
                <h3>
                  I still slip into English slang/pronunciation on occasion.
                </h3>
              </div>
            </div>
          </label>
        </div>
        <div className="row">
          <label>
            <input type="checkbox" />
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>I love debugging.</h2>
                <p className="click-on">Click for more info!</p>
              </div>
              <div className="flip-card-back">
                <h3>
                  While I dislike the fact that it means that someone has a
                  problem with their code, I jump at any chance to try to figure
                  out how to solve whatever issue is going on.
                </h3>
                <h3>
                  I'm trying to work on being less obviously excited about it.
                </h3>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>I'm owned by two Maine Coons</h2>
                <p className="click-on">Click to see said cats!</p>
              </div>
              <div className="flip-card-back cat-photo">
                <Kittens id="kittens" />
              </div>
            </div>
          </label>
        </div>
      </div>
    </main>
  </Layout>
)

export default AboutPage
