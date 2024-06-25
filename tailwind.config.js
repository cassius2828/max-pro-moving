/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      width: {
        '25vw': '25vw',
        '50vw': '50vw',
      },
      height: {
        '25vw': '25vw',
        '50vw': '50vw',
        '30rem': '30rem',
        '50rem': '50rem',
        '75rem': '75rem',
        '100svh': '100svh',
      },
      maxWidth: {
        '25vw': '25vw',
        '50vw': '50vw',
        '75vw': '75vw',
        '50rem': '50rem',
      },
      translate: {
        '-110svh': '-110svh',
      },
    },
  },
  plugins: [],
}
