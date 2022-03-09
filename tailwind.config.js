module.exports = {
  content: ["./src/index.html","./src/**/*.{html,js}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary': '#3e5cd1',
      }
    },
    fontFamily: {
      'vietnam': ['Be Vietnam Pro', 'sans-serif']
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
