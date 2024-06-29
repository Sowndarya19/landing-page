/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/img/hello.jpg')", // Define your custom image
      },
     
    },
    fontFamily:{ DMserif:['DM Serif Display', 'serif']

    }
  },
  plugins: [],
}

