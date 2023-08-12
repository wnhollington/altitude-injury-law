/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Stellar Property Services LLC`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Providing stellar service in everything we do.`,
    contact: {
      phone: "303-909-1227",
      email: "tyler@stellarpsllc.com"
    },
    social: {
      facebook: ``,
      youtube: ``,
    }
  },
  plugins: 
  [
      "gatsby-plugin-image", 
      "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/logo.webp"
      }
    }, 
    "gatsby-transformer-remark", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "lightbox",
        "path": "./src/images/lightbox"
      },
      __key: "lightbox"
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`
        }
      }
    },
    // {
    //   resolve: `gatsby-source-google-reviews-en`,
    //   options: {
    //     placeId: process.env.GOOGLE_PLACES_ID,
    //     apiKey: process.env.GOGGLE_API_KEY,
    //   },
    // },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -200
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_TRACKING_ID
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
  ]
};