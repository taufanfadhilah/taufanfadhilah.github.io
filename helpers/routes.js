const routes = require("next-routes");

// add('name', 'pattern', 'filename')
module.exports = routes()
  .add("index", "/", "index")
  // Blog
  .add("blog")
  .add('blog.detail', '/blog/:id', 'blog/detail')
  // Design
  .add("design")
  .add('design.detail', '/design/:id', 'design/detail')
  // Experiments
  .add("experiment")
  .add('experiment.detail', '/experiment/:id', 'experiment/detail');


