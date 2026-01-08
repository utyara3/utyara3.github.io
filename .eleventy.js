// .eleventy.js
module.exports = function(eleventyConfig) {
  // Копируем CSS папку
  eleventyConfig.addPassthroughCopy("src/css");
  
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Создаем коллекции для гайдов и статей
  eleventyConfig.addCollection("guides", function(collection) {
    return collection.getFilteredByGlob("src/content/guide/*.md");
  });
  
  eleventyConfig.addCollection("stonescript", function(collection) {
    return collection.getFilteredByGlob("src/content/stonescript/*.md");
  });

  eleventyConfig.addCollection("speedrun", function(collection) {
    return collection.getFilteredByGlob("src/content/speedrun/*.md");
  });
  
  return {
    dir: {
      input: "src",
      includes: "_includes", 
      output: "_site",
      data: "_data"
    },
    // Указываем, что Markdown файлы должны использовать шаблон
    markdownTemplateEngine: "njk"
  };
};