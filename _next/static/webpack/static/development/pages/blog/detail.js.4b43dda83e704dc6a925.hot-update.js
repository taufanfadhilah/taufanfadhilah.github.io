webpackHotUpdate("static/development/pages/blog/detail.js",{

/***/ "./helpers/routes.js":
/*!***************************!*\
  !*** ./helpers/routes.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "./node_modules/next-routes/dist/index.js"); // add('name', 'pattern', 'filename')


module.exports = routes().add("index", "/", "index") // Blog
.add("blog").add('blog.detail', '/blog/:id', 'blog/detail') // Projects
.add("projects");

/***/ })

})
//# sourceMappingURL=detail.js.4b43dda83e704dc6a925.hot-update.js.map