module.exports = {
  siteMetadata: {
    title: "Filip Krawczyk",
    titleTemplate: "%s – Filip Krawczyk"
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
  ],
};
