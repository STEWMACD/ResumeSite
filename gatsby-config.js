module.exports = {
  siteMetadata: {
    title: `Stewart MacDonald`,
    description: `A resume and portfolio for Stewart MacDonald`,
    author: `Stewart MacDonald`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -1000
      }
    },
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
    'gatsby-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Resume - Stewart MacDonald`,
        short_name: `S. MacDonald`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    }
  ],
}
