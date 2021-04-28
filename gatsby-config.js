module.exports = {
  siteMetadata: {
    title: "filipkrw",
  },
  plugins: [
    {
      resolve: "gatsby-theme-hello-friend-ng",
      options: {
        menuLinks: [
          {
            name: "About",
            link: "/about",
          },
          {
            name: "Blog",
            link: "/blog",
          },
          {
            name: "Projects",
            link: "/projects",
          }
        ],
      },
    },
  ],
};
