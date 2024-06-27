/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      width: {
        '25vw': '25vw',
        '50vw': '50vw',
        '103p': '103%',
      },
      height: {
        '25vw': '25vw',
        '50vw': '50vw',
        '30rem': '30rem',
        '50rem': '50rem',
        '75rem': '75rem',
        '100svh': '100svh',
        '103p': '103%',

      },
      maxWidth: {
        '25vw': '25vw',
        '50vw': '50vw',
        '75vw': '75vw',
        '50rem': '50rem',
      },
      translate: {
        '-110svh': '-110svh',
        '-200svh': '-200svh',
        '-300svh': '-300svh',
      },
    },
  },
  plugins: [],
}
