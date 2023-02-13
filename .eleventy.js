const fs = require('fs');

module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['dist/**/*.css', 'dist/**/*.js'],
  });

  eleventyConfig.addPassthroughCopy({ 'src/public': '/' });

  return {
    dir: {
      input: 'src/pages',
      output: 'dist',
      includes: '../partials',
    },
  };
};
