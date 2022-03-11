module.exports = {
  content: ["./src/index.html","./src/**/*.{html,js}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary': '#3e5cd1',
        'secondary' : '#1f3e72',
      },
      backgroundImage: {
        "nurse": "url('https://i.imgur.com/hVSInLf.jpg')",
        "nurse2": "url('https://i.imgur.com/O0C4BI6.jpg')",
        "nurse3": "url('https://i.imgur.com/GgGVLU8.jpg')"

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
