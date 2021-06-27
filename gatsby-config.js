module.exports = {
  siteMetadata: {
    title: "Filip Krawczyk",
    titleTemplate: "%s – Filip Krawczyk",
    url: "https://filipkrw.io",
    description: "Aspiring Software Engineer, Final Year BSc Computer Science Student at Brunel University London",
    image: "", // todo
    twitterUsername: "@filipkrw"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-hello-friend-ng",
      options: {
        menuLinks: [
          // {
          //   name: "About",
          //   link: "/about",
          // },
          {
            name: "Blog",
            link: "/blog",
          },
          // {
          //   name: "Projects",
          //   link: "/projects",
          // }
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-RC07QZCERZ",
        ],
      },
    },
  ],
};
