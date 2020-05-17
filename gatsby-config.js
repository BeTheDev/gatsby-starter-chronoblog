module.exports = {
  siteMetadata: {
    siteTitle: 'CCY Dev Blog',
    siteDescription: 'My new Blog using Gatsby Chronoblog Theme',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://ccy.netlify.app/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Francisco Choi', // for example - 'Ivan Ganev'
    authorDescription: 'Learning Coding & Being a Developer', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `envelope`,
        url: `mailto:cyongchoi88@gmail.com`
      },
      {
        icon: `github`,
        url: `https://github.com/daonez`
      },
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/franciscochoi/`
      }
      // {
      //   icon: `node-js`,
      //   url: `https://www.npmjs.com/package/gatsby-theme-chronoblog`
      // }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
