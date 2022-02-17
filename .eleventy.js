module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/scss/');

  return {
    dir: {
      input: 'src/pages',
      output: 'dist',
      includes: '../partials',
    },
  };
};
