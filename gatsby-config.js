/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `RathamaManagerUI`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-sass',
    options: {
      implementation: require('sass'),
    },
  },
  "gatsby-plugin-sitemap",
  'gatsby-plugin-react-helmet']
};