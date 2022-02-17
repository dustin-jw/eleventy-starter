module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/scss/');
  eleventyConfig.setWatchThrottleWaitTime(2000);

  return {
    dir: {
      input: 'src/pages',
      output: 'dist',
      includes: '../partials',
    },
  };
};
