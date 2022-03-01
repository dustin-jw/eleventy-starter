module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/scss/');
  eleventyConfig.addWatchTarget('./src/css/');

  return {
    dir: {
      input: 'src/pages',
      output: 'dist',
      includes: '../partials',
    },
  };
};
