module.exports = {
  content: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        primaryLight: '#9effff',
        primaryDark: '#14cba8',
        neutral: '#e0e0e0',
        neutralLight: '#ffffff',
        neutralDark: '#aeaeae',
        textOnPrimary: '#000000',
        textOnSecondary: '#000000'
      }
    }
  },
  plugins: []
}
