export default ({ store }) => {
  return {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      themes: {
        light: {
          primary: "#929292",
          secondary: "#e8e8e8",
          dataCardTitle: "#242424",
          luckyGray: "#767676",
          dynamicBlack: "#1d1d1d",
          dynamicBlack2: "#1d1d1c",
          unicornSilver: "#e8e8e8",
          unicornSilverLight: "#e8e8e880",
          nickel: "#929292",
          white: "#ffffff",
          lightGray: "#0000000d",
          black2: "#00000003",
        },
      },
    },
  };
};
