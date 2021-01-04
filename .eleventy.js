module.exports = (eleventyConfig) => {
  
  eleventyConfig.addPassthroughCopy('assets')

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