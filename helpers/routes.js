import routes from "next-routes";

// add('name', 'pattern', 'filename')
module.exports = routes()
  .add("index", "/", "index")
  .add("blog")
  .add("projects");


