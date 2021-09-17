exports.ids = [14];
exports.modules = {

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(350);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("73da44d4", content, true, context)
};

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_7c991424_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(305);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_7c991424_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_7c991424_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_7c991424_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_7c991424_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_7c991424_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-7c991424]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-7c991424]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-7c991424]{font-size:28px;line-height:44px}}.use-text-title2[data-v-7c991424]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-7c991424]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-7c991424]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-7c991424]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-7c991424]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-7c991424]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-7c991424]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-7c991424]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-7c991424]{font-size:16px;line-height:24px}}.use-text-caption[data-v-7c991424],.use-text-paragraph[data-v-7c991424]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-7c991424]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-7c991424]{display:none!important}}@media(max-width:1279px){.use-hidden-md-down[data-v-7c991424]{display:none!important}}@media(max-width:959px){.use-hidden-sm-down[data-v-7c991424]{display:none!important}}@media(max-width:599px){.use-hidden-xs-down[data-v-7c991424]{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up[data-v-7c991424]{display:none!important}}@media(min-width:960px){.use-hidden-md-up[data-v-7c991424]{display:none!important}}@media(min-width:600px){.use-hidden-sm-up[data-v-7c991424]{display:none!important}}.main-wrap[data-v-7c991424]{position:relative;width:100%;overflow:hidden}.theme--light .main-wrap[data-v-7c991424]{color:rgba(0,0,0,.87)}.theme--dark .main-wrap[data-v-7c991424]{color:#fff;background-color:#303030}.theme--light .main-wrap[data-v-7c991424]{background-color:#fff}.space-bottom[data-v-7c991424]{margin-bottom:160px}.space-top[data-v-7c991424]{margin-top:160px}.container-wrap[data-v-7c991424]{margin-top:80px;padding:32px}.container-wrap>section[data-v-7c991424]{position:relative}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blank-page.vue?vue&type=template&id=7c991424&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section id=\"home\" data-v-7c991424></section> "),_vm._ssrNode("<div class=\"main-wrap\" data-v-7c991424>","</div>",[_c('main-header',{attrs:{"invert":""}}),_vm._ssrNode(" <div class=\"container-wrap\" data-v-7c991424><section class=\"space-top space-bottom\" data-v-7c991424><h2 class=\"display-3 text-center mb-4\" data-v-7c991424>\n            titulo\n          </h2> <h4 class=\"display-1 text-center\" data-v-7c991424>\nsubtitlo\n          </h4></section></div> "),_vm._ssrNode("<section class=\"spaceTop\" data-v-7c991424>","</section>",[_c('main-footer')],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blank-page.vue?vue&type=template&id=7c991424&scoped=true&

// EXTERNAL MODULE: ./components/Header/index.js + 26 modules
var Header = __webpack_require__(73);

// EXTERNAL MODULE: ./components/Footer/index.js + 5 modules
var Footer = __webpack_require__(74);

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blank-page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var blank_pagevue_type_script_lang_js_ = ({
  components: {
    'main-header': Header["a" /* default */],
    'main-footer': Footer["a" /* default */]
  },

  head() {
    return {
      title: brand["a" /* default */].agency.name + ' - Blank Page'
    };
  }

});
// CONCATENATED MODULE: ./pages/blank-page.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blank_pagevue_type_script_lang_js_ = (blank_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/blank-page.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(349)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blank_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7c991424",
  "fa93a34e"
  
)

/* harmony default export */ var blank_page = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blank-page.js.map