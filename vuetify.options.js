export default ({ store }) => {
  return {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      themes: {
        light: {
          primary: "#929292",
          secondary: "#e8e8e8",
          dataCardTitle: "#242424",
        },
      },
    },
  };
};
