module.exports = (eleventyConfig) => {
  
  eleventyConfig.addPassthroughCopy('assets/img/')
  eleventyConfig.addPassthroughCopy('assets/font/')
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