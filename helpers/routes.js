const routes = require("next-routes");

// add('name', 'pattern', 'filename')
module.exports = routes()
  .add("index", "/", "index")
  // Blog
  .add("blog")
  .add('blog.detail', '/blog/:id', 'blog/detail')
  // Projects
  .add("projects");


