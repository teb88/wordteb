module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['montserrat'],
      },
      colors: {
        light: '#FAF5F6',
        'letter-default': '#FFFFFF',
        'letter-none': '#3F4251',
        'letter-exists': '#EEC924',
        'letter-in-place': '#2ca41f',
        dark: '#323232',
      },
    },
  },
  plugins: [],
};
