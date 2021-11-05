const purgecss = require('@fullhuman/postcss-purgecss');

class TailwindExtractor {
  static extract(content) {
    /* eslint-disable no-useless-escape */
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

const purge = purgecss({
  content: ['./src/**/*.html', './src/**/*.js'],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['html', 'js'],
    },
  ],
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV !== 'development' ? [purge] : []),
  ],
};
