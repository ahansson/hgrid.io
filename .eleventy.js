module.exports = (eleventyConfig) => {
  
  eleventyConfig.addPassthroughCopy('assets/css/styles.min.css')
  eleventyConfig.addPassthroughCopy('assets/css/styles.min.map')
  eleventyConfig.addPassthroughCopy('assets/img/**')

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