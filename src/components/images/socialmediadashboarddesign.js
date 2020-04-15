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

const SocialMediaDashboardDesign = props => {
  const data = useStaticQuery(graphql`
    query {
      mobileDesignDark: file(relativePath: { eq: "mobile-design-dark.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileDesignLight: file(relativePath: { eq: "mobile-design-light.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopDesignDark: file(relativePath: { eq: "desktop-design-dark.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopDesignLight: file(
        relativePath: { eq: "desktop-design-light.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileDark: file(
        relativePath: { eq: "social-media-dashboard-mobile-dark.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileLight: file(
        relativePath: { eq: "social-media-dashboard-mobile-light.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopDark: file(
        relativePath: { eq: "social-media-dashboard-dark.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopLight: file(
        relativePath: { eq: "social-media-dashboard-light.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className="social-media-dashboard-design-images">
      <div className="mobile-designs">
        <h2 className="mobile-dark-mode">Mobile Dark Mode</h2>
        <h3>Design</h3>
        <h3>Screenshot of Website</h3>
        <Img
          placeholderClassName={props.id}
          fluid={data.mobileDesignDark.childImageSharp.fluid}
        />
        <Img
          placeholderClassName={props.id}
          fluid={data.mobileDark.childImageSharp.fluid}
        />
        <h2 className="mobile-light-mode">Mobile Light Mode</h2>
        <h3>Design</h3>
        <h3>Screenshot of Website</h3>
        <Img
          placeholderClassName={props.id}
          fluid={data.mobileDesignLight.childImageSharp.fluid}
        />
        <Img
          placeholderClassName={props.id}
          fluid={data.mobileLight.childImageSharp.fluid}
        />
      </div>
      <div className="desktop-designs">
        <h2 className="desktop-dark-mode">Desktop Dark Mode</h2>
        <h3>Design</h3>
        <h3>Screenshot of Website</h3>
        <Img
          placeholderClassName={props.id}
          fluid={data.desktopDesignDark.childImageSharp.fluid}
        />
        <Img
          placeholderClassName={props.id}
          fluid={data.desktopDark.childImageSharp.fluid}
        />
        <h2 className="desktop-light-mode">Desktop Light Mode</h2>
        <h3>Design</h3>
        <h3>Screenshot of Website</h3>
        <Img
          placeholderClassName={props.id}
          fluid={data.desktopDesignLight.childImageSharp.fluid}
        />
        <Img
          placeholderClassName={props.id}
          fluid={data.desktopLight.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}

export default SocialMediaDashboardDesign
