module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: '#00B87C',
        primary: '#1A61DB',
        shiraz: '#B8003C',
        backGround: 'rgba(0, 0, 0, 0.6)',
        text: {
          shaft: '#242424',
          shaftlight: '#3A3A3A',
          dustygray: '#999999',
          silverlight: '#C1C1C1',
          silver: '#BEBEBE',
        },
        error: '#F40101',
        wildsand: '#F6F6F6',
        white: '#FFF',
        success: '#008B5E',
        lightGreen: '#F0FFFB',
        avatar: {
          pink: '#F7E0FF',
          yellow: '#F8FFCD',
          chablis: '#FFF0F0',
          aeroblue: '#ACFFE6',
          bluelight: '#E3EEFF',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
