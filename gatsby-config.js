module.exports = {
  siteMetadata: {
    title: 'Eyal Benvenisti | Designer',
    description: 'Another website on the web',
    keywords: 'eyal benvenisti, portfolio',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSwitcherEnabled: 'false',
        titleType: 'append',
        theme: {
          homepage: 'dark',
          interior: 'dark',
        },
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/EyalBenvenisti/my-carbon-site/',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
