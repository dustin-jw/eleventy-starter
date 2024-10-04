export default function(eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['dist/**/*.css', 'dist/**/*.js'],
  });

  eleventyConfig.addPassthroughCopy({ 'src/public': '/' });
};

export const config = {
  dir: {
    input: 'src/pages',
    output: 'dist',
    includes: '../partials',
  },
}
