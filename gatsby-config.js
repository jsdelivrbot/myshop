module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: `039314cb195c9a01c8ed1c476c4ca7` },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'NjZiYWNmY2QtM2Y3YS00NmJiLTg5NDUtODcyMmE2ZTEwYTFjNjM2NjY1MDMxNjAzMjg5MzU1',
        autopop: true
      }
    },
  ],
}
