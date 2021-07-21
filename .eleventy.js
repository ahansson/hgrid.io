module.exports = (eleventyConfig) => {
  
  eleventyConfig.addWatchTarget("assets/scss/main.scss");
  eleventyConfig.addPassthroughCopy('assets/css/style.min.css')
  eleventyConfig.addPassthroughCopy('assets/css/style.min.css.map')
  eleventyConfig.addPassthroughCopy('assets/css/style.css')
  eleventyConfig.addPassthroughCopy('assets/img/')
  eleventyConfig.addPassthroughCopy('assets/font/')
  eleventyConfig.addPassthroughCopy('assets/js/')
  eleventyConfig.addPassthroughCopy('_redirects')

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md', 'js'],
    dir: {
      input: 'src',
      output: '_public'
    }
  }
}