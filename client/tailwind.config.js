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
        neutral: '#8492a6',
        neutralLight: '#d3dce6',
        neutralDark: '#273444',
        textOnPrimary: '#000000',
        textOnSecondary: '#000000'
      }
    }
  },
  plugins: []
}
