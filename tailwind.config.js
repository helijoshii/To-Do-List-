/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        // 'toDoBg': "url('ToDoBg.jpg')"
        toDoBg: "url('../src/images/bg-image.jpg')",
      },
    },
  },
  plugins: [],
};
