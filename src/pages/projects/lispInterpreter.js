import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import LeftArrow from "../../images/angle-double-left.svg"
import RightArrow from "../../images/angle-double-right.svg"
import SEO from "../../components/seo"
import "../../styles/style.css"

const LispInterpreter = () => (
  <Layout>
    <SEO title="Lisp Interpreter" />
    <div role="navigation">
      <div className="content-nav">
        <ul>
          <li>
            <Link
              to="/projects/iconsForGreatGood"
            >
              <img src={LeftArrow} alt="link to Icons for Great Good" />
            </Link>
          </li>
          <li>
            <div className="linkToProjects">
              <Link to="/projects"> Projects</Link>
            </div>
          </li>
          <li>
            <Link
              to="/projects/montyHall"
            >
              <img src={RightArrow} alt="link to Monty Hall" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <main className="main-projects">
      <div id="lisp-interpreter" className="content-holder two-navs">
        <div className="content-main content-left">
          <div id="lisp-inside" className="left-inside">
            <h1 className="page-title">Lisp Interpreter in C</h1>
            <h2>
              Program constructs a grammar for a Lisp language variant and
              parses the input based on that grammar. On startup, a Lisp
              standard library is passed in, allowing for better ease of use
              (more shorthand syntax for declaring functions, etc.).
            </h2>
            <h2>Syntax table:</h2>
            <div className="description-box">
              <div className="div-outside-table">
                <table className="tg">
                  <thead>
                    <tr>
                      <th className="tg-8nd3">Symbol</th>
                      <th className="tg-xt0r">Input type</th>
                      <th className="tg-rlwy">Example input</th>
                      <th className="tg-jua3">Example output</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-8nd3">!=</td>
                      <td className="tg-xt0r">Num</td>
                      <td className="tg-rlwy">!= 2 3</td>
                      <td className="tg-jua3">1</td>
                    </tr>
                    <tr>
                      <td className="tg-8nd3">*</td>
                      <td className="tg-xt0r">Num</td>
                      <td className="tg-rlwy">* 2 5</td>
                      <td className="tg-jua3">10</td>
                    </tr>
                    <tr>
                      <td className="tg-8nd3">+</td>
                      <td className="tg-xt0r">Num</td>
                      <td className="tg-rlwy">+ 7 8</td>
                      <td className="tg-jua3">15</td>
                    </tr>
                    <tr>
                      <td className="tg-8nd3">-</td>
                      <td className="tg-xt0r">Num</td>
                      <td className="tg-rlwy">- 5 2</td>
                      <td className="tg-jua3">3</td>
                    </tr>
                    <tr>
                      <td className="tg-8nd3">/</td>
                      <td className="tg-xt0r">Num</td>
                      <td className="tg-rlwy">/ 8 2</td>
                      <td className="tg-jua3">4</td>
                    </tr>
                    <tr>
                      <td className="tg-8nd3">&lt;</td>
                      <td className="tg-xt0r">Num</td>
                      <td className="tg-rlwy">&lt; 10 5</td>
                      <td className="tg-jua3">0</td>
                    </tr>
                    <tr>
                      <td className="tg-8nd3">&lt;=</td>
                      <td className="tg-xt0r">Num</td>
                      <td className="tg-rlwy">&lt;= 10 10</td>
                      <td className="tg-jua3">1</td>
                    </tr>
                    <tr>
                      <td className="tg-8nd3">==</td>
                      <td className="tg-xt0r">Num</td>
                      <td className="tg-rlwy">== 2 3</td>
                      <td className="tg-jua3">0</td>
                    </tr>
                    <tr>
                      <td className="tg-8nd3">&gt;</td>
                      <td className="tg-xt0r">Num</td>
                      <td className="tg-rlwy">&gt; 10 5</td>
                      <td className="tg-jua3">1</td>
                    </tr>
                    <tr>
                      <td className="tg-fqww">&gt;=</td>
                      <td className="tg-rlwy">Num</td>
                      <td className="tg-rlwy">&gt;= 2 3</td>
                      <td className="tg-jua3">0</td>
                    </tr>
                    <tr>
                      <td className="tg-fqww"></td>
                      <td className="tg-rlwy">Q-Expr</td>
                      <td className="tg-rlwy">{`def {add} ( {x y} {+ x y})`}</td>
                      <td className="tg-jua3">()</td>
                    </tr>
                    <tr>
                      <td className="tg-fqww">def</td>
                      <td className="tg-rlwy">Q-Expr</td>
                      <td className="tg-rlwy">{`def {x} {10}`}</td>
                      <td className="tg-jua3">()</td>
                    </tr>
                    <tr>
                      <td className="tg-fqww">eval</td>
                      <td className="tg-rlwy">Q-Expr</td>
                      <td className="tg-rlwy">{`eval {head (list 1 2 3 4)}`}</td>
                      <td className="tg-jua3">{1}</td>
                    </tr>
                    <tr>
                      <td className="tg-fqww">head</td>
                      <td className="tg-rlwy">Q-Expr</td>
                      <td className="tg-rlwy">{`head {1 2 3 5}`}</td>
                      <td className="tg-jua3">{1}</td>
                    </tr>
                    <tr>
                      <td className="tg-fqww">tail</td>
                      <td className="tg-rlwy">Q-Expr</td>
                      <td className="tg-rlwy">{`tail {1 2 3 5}`}</td>
                      <td className="tg-jua3">{5}</td>
                    </tr>
                    <tr>
                      <td className="tg-fqww">if</td>
                      <td className="tg-rlwy">1 S-Expr, 2 Q-Expr</td>
                      <td className="tg-rlwy">{`if (== 2 1) {+ 10 5} {* 10 5}`}</td>
                      <td className="tg-jua3">50</td>
                    </tr>
                    <tr>
                      <td className="tg-fqww">join</td>
                      <td className="tg-rlwy">Q-Expr</td>
                      <td className="tg-rlwy">{`join {1 2} {7 8}`}</td>
                      <td className="tg-jua3">{`{1 2 7 8}`}</td>
                    </tr>
                    <tr>
                      <td className="tg-fqww">list</td>
                      <td className="tg-rlwy">Sym/Num</td>
                      <td className="tg-rlwy">list 1 2 3</td>
                      <td className="tg-jua3">{`{1 2 3}`}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="project-details">
              <h2>Tech:</h2>
              <ul>
                <li>
                  <h3>Language : C</h3>
                </li>
                <li>
                  <h3>Library : mpc parser combinator library</h3>
                </li>
              </ul>
              <div className="buttons">
                <a
                  href="https://github.com/amyshackles/buildyourownlisp"
                  aria-label="link to source code for Lisp Interpreter in C on Github"
                  className="button"
                  type="button"
                  role="button"
                >
                  <span>Source Code</span>
                </a>
                <a
                  href="https://repl.it/@AmyShackles/LispInterpreter?outputonly=1"
                  aria-label="link to program for Lisp Interpreter"
                  className="button responsive"
                  type="button"
                  role="button"
                >
                  <span>Program</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="item full-height">
            <iframe
              title="LispInterpreter"
              className="scale-with-grid lazy"
              height="100%"
              width="100%"
              data-src="https://repl.it/@AmyShackles/LispInterpreter?lite=1&amp;outputonly=1"
              frameBorder="no"
              src="https://repl.it/@AmyShackles/LispInterpreter?lite=1&amp;outputonly=1"
              allowtransparency="true"
              allowFullScreen={true}
              data-was-processed="true"
              sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
            ></iframe>
            <div id="summary">Info</div>
            <div id="detail">
              <p>Press the green play button to start Lisp interpreter.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default LispInterpreter
