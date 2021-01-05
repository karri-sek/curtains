require('dotenv').config({
  path: `.env`,
})

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'curtains',
        accessToken: process.env.API_KEY,
      },
      pages: [
        {
          // (optional, builds pages dynamically)
          type: "Brochure", // TypeName from prismic
          match: "/brochure/:uid", // Pages will be generated under this pattern
          path: "/brochure", // Placeholder page for unpublished documents
          component: require.resolve("./src/pages/index.jsx"),
          // component: require.resolve("./src/04.templates/brochure.js"),
        },
      ],
    },
  ],
}
