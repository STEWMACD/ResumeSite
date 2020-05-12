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
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: ({node,object,isArray}) => object.label
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-image'
  ],
}
