module.exports = (eleventyConfig) => {
  
  eleventyConfig.addWatchTarget("/src/_assets/scss/main.scss");
  eleventyConfig.addPassthroughCopy('/src/_assets/css/style.min.css')
  eleventyConfig.addPassthroughCopy('/src/_assets/css/style.min.css.map')
  eleventyConfig.addPassthroughCopy('/src/_assets/css/style.css')
  eleventyConfig.addPassthroughCopy('/src/_assets/img/')
  eleventyConfig.addPassthroughCopy('/src/_assets/js/')

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