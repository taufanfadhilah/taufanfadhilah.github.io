webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./helpers/routes.js":
/*!***************************!*\
  !*** ./helpers/routes.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "./node_modules/next-routes/dist/index.js"); // add('name', 'pattern', 'filename')


module.exports = routes().add("index", "/", "index") // Blog
.add("blog").add('blog.detail', '/blog/detail/:id', 'blog/detail') // Projects
.add("projects");

/***/ })

})
//# sourceMappingURL=blog.js.d7a6c61f5e64cb6b0aab.hot-update.js.map