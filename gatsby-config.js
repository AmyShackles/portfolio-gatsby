module.exports = {
  siteMetadata: {
    charset: `utf-8`,
    theme_color: `#7700d5`,
    background_color: `#7700d5`,
    title: `Amy Shackles`,
    description: `Full Stack Developer`,
    author: `@AmyShackles`,
    viewport: `width=device-width, initial-scale=1, shrink-to-fit=no`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `amyshackles-gatsby-site`,
        short_name: `amyshackles`,
        start_url: `/`,
        background_color: `#7700d5`,
        theme_color: `#7700d5`,
        display: `standalone`,
        icon: `src/images/apple-touch-icon2.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
