module.exports = {
  siteMetadata: {
    title: `Stewart MacDonald`,
    description: `A resume and portfolio for Stewart MacDonald`,
    author: `Stewart MacDonald`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/contentData',
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: "Json"
      }
    }
  ],
}
