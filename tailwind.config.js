module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'body-color': '#F6F6F6',
        'sidebar-bg': '#05050B',
        'sidebar-hover': '#232328',
        'sidebar-text-color': '#E7EEF8',
        'button-bg-color': '#fdfdfe',
        'button-bg-hover': '#e7eef8',
        'button-color': '#7f8388;',
        'color-gray': '#808191',
        'link-gray': '#edf0ff',
        'link-blue': '#4d69fa',
        'table-bg': 'rgba(0,0,0,.038)',
      },
      fontFamily: {
        sans: ['Opan-Sans', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        'fade-out': 'fadeOut 300ms ease',
      },
      boxShadow: {
        'custom-shadow-1': '0 3px 5px rgba(0,0,0,.125)',
      },
    },
  },
  plugins: [],
};
