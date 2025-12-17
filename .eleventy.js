module.exports = function(eleventyConfig) {
  // Copy assets to output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/_redirects");

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Add date filter for blog posts
  eleventyConfig.addFilter("dateDisplay", (dateObj) => {
    if (!dateObj) return '';

    const date = new Date(dateObj);

    // Check if date is valid
    if (isNaN(date.getTime())) {
      return 'Ugyldig dato';
    }

    return date.toLocaleDateString('no-NO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Add date filter for sitemap
  eleventyConfig.addFilter("date", (dateObj, format) => {
    if (!dateObj) return '';
    const date = new Date(dateObj);
    if (isNaN(date.getTime())) return '';

    // Simple YYYY-MM-DD format for sitemap
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  });

  // Create blog collection
  eleventyConfig.addCollection("blog", function(collection) {
    return collection.getFilteredByGlob("src/posts/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
