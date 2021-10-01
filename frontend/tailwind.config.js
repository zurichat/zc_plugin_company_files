module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  prefix: "tw-",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(220px, 1fr))",
      },
      colors: {
        primary: "#00B87C",
        secondary: "#1A61DB",
        accent: "#B8003C",
        error: "#F40101",
        bgLight: "#E5E5E5",
        backGround: "rgba(0, 0, 0, 0.6)",
        border: "#BEBEBE",
        bg: {
          lightGrey: "#F6F6F6",
          white: "#FFFFFF",
          lightGreen: "#f0fbf8",
          trashRow: "#FAFAFA",
        },
        success: "#008B5E",
        text: {
          header: "#242424",
          body: "#3A3A3A",
          navbar: "#999999",
          grey: "#4A4A4A",
          time: "#C1C1C1",
          lightIcon: "#BEBEBE",
        },
        file: {
          one: "#F7E0FF",
          two: "#F8FFCD",
          three: "#FFF0F0",
          four: "#ACFFE6",
          doc: "#E3EEFF",
          pdf: "#FED4D4",
          xls: "#D7FCEB",
          ppt: "#FCE7DE",
        },
        trashDur: "#616161",
      },
      avatar: {
        one: "#F7E0FF",
        two: "#F8FFCD",
        three: "#FFF0F0",
        four: "#ACFFE6",
        five: "#E3EEFF",
      },
    },
    fontFamily: {
      lato: ["Lato"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
