module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#00B87C',
        secondary: '#1A61DB',
        accent: '#B8003C',
        error: '#F40101',
        light: '#E5E5E5',
        bg: {
          lightGrey: '#F6F6F6',
          white: '#FFFFFF'
        },
        success: '#008B5E',
        text: {
          header: '#242424',
          body: '#3A3A3A',
          navbar: '#999999',
          time: '#C1C1C1',
          lightIcon: '#BEBEBE'
        },
        avatar: {
          one: '#F7E0FF',
          two: '#F8FFCD',
          three: '#FFF0F0',
          four: '#ACFFE6',
          five: '#E3EEFF'
        }
      },
      fontFamily: {
        lato: ['Lato']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
