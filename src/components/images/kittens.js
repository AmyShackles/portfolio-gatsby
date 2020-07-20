import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Kittens = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kittens.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 230) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <Img
      placeholderClassName={props.id}
      fixed={data.file.childImageSharp.fixed}
      alt="Black and white photo of Robert Lazarus (a brown striped tabby Maine Coon) and Dylan Thomas (a brown and white Maine Coon)"
    />
  )
}

export default Kittens
