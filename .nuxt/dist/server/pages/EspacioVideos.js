exports.ids = [13];
exports.modules = {

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(249);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7bf5eb48", content, true, context)
};

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2d01265a", content, true, context)
};

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(253);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5afead6e", content, true, context)
};

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(255);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c3037ba8", content, true, context)
};

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(257);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3561d301", content, true, context)
};

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardActions; });
/* unused harmony export VCardSubtitle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VCardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(259);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7705c775", content, true, context)
};

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Hidden; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Hidden/Hidden.vue?vue&type=template&id=057339fd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mq-layout',{attrs:{"mq":_vm.breakpoints}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Hidden/Hidden.vue?vue&type=template&id=057339fd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hidden/Hidden.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Hiddenvue_type_script_lang_js_ = ({
  props: {
    point: {
      type: String,
      required: true
    }
  },
  computed: {
    breakpoints() {
      switch (this.point) {
        case 'smUp':
          return ['xsDown'];

        case 'mdUp':
          return ['xsDown', 'smDown'];

        case 'lgUp':
          return ['xsDown', 'smDown', 'mdDown'];

        case 'xsDown':
          return ['smDown', 'mdDown', 'lgDown', 'xl'];

        case 'smDown':
          return ['mdDown', 'lgDown', 'xl'];

        case 'mdDown':
          return ['lgDown', 'xl'];

        case 'lgDown':
          return 'xl';

        default:
          return 'xl';
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Hidden/Hidden.vue?vue&type=script&lang=js&
 /* harmony default export */ var Hidden_Hiddenvue_type_script_lang_js_ = (Hiddenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Hidden/Hidden.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Hidden_Hiddenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6714fdaf"
  
)

/* harmony default export */ var Hidden = (component.exports);
// CONCATENATED MODULE: ./components/Hidden/index.js


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],
  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  agency: ['https://via.placeholder.com/964x723/1071ef/FFFFFF', 'https://via.placeholder.com/1280x825/99d8ff/FFFFFF', 'https://via.placeholder.com/490x327/ffc999/FFFFFF', 'https://via.placeholder.com/490x327/ffc999/FFFFFF', 'https://via.placeholder.com/490x327/ffc999/FFFFFF', 'https://via.placeholder.com/331x690/fdcc0c/FFFFFF', 'https://via.placeholder.com/521x309/4a0cfd/FFFFFF', 'https://via.placeholder.com/521x309/ffe55b/FFFFFF', 'https://via.placeholder.com/713x309/79c0ff/FFFFFF', 'https://via.placeholder.com/711x693/52596b/FFFFFF']
};
/* harmony default export */ __webpack_exports__["a"] = (imgAPI);

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VProgressLinear_VProgressLinear_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(243);
/* harmony import */ var _src_components_VProgressLinear_VProgressLinear_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VProgressLinear_VProgressLinear_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _mixins_proxyable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
 // Components

 // Mixins




 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_3__[/* factory */ "b"])(['absolute', 'fixed', 'top', 'bottom']), _mixins_proxyable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-progress-linear',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: null
    },
    backgroundOpacity: {
      type: [Number, String],
      default: null
    },
    bufferValue: {
      type: [Number, String],
      default: 100
    },
    color: {
      type: String,
      default: 'primary'
    },
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    query: Boolean,
    reverse: Boolean,
    rounded: Boolean,
    stream: Boolean,
    striped: Boolean,
    value: {
      type: [Number, String],
      default: 0
    }
  },

  data() {
    return {
      internalLazyValue: this.value || 0
    };
  },

  computed: {
    __cachedBackground() {
      return this.$createElement('div', this.setBackgroundColor(this.backgroundColor || this.color, {
        staticClass: 'v-progress-linear__background',
        style: this.backgroundStyle
      }));
    },

    __cachedBar() {
      return this.$createElement(this.computedTransition, [this.__cachedBarType]);
    },

    __cachedBarType() {
      return this.indeterminate ? this.__cachedIndeterminate : this.__cachedDeterminate;
    },

    __cachedBuffer() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__buffer',
        style: this.styles
      });
    },

    __cachedDeterminate() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: `v-progress-linear__determinate`,
        style: {
          width: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "f"])(this.normalizedValue, '%')
        }
      }));
    },

    __cachedIndeterminate() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          'v-progress-linear__indeterminate--active': this.active
        }
      }, [this.genProgressBar('long'), this.genProgressBar('short')]);
    },

    __cachedStream() {
      if (!this.stream) return null;
      return this.$createElement('div', this.setTextColor(this.color, {
        staticClass: 'v-progress-linear__stream',
        style: {
          width: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "f"])(100 - this.normalizedBuffer, '%')
        }
      }));
    },

    backgroundStyle() {
      const backgroundOpacity = this.backgroundOpacity == null ? this.backgroundColor ? 1 : 0.3 : parseFloat(this.backgroundOpacity);
      return {
        opacity: backgroundOpacity,
        [this.isReversed ? 'right' : 'left']: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "f"])(this.normalizedValue, '%'),
        width: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "f"])(this.normalizedBuffer - this.normalizedValue, '%')
      };
    },

    classes() {
      return {
        'v-progress-linear--absolute': this.absolute,
        'v-progress-linear--fixed': this.fixed,
        'v-progress-linear--query': this.query,
        'v-progress-linear--reactive': this.reactive,
        'v-progress-linear--reverse': this.isReversed,
        'v-progress-linear--rounded': this.rounded,
        'v-progress-linear--striped': this.striped,
        ...this.themeClasses
      };
    },

    computedTransition() {
      return this.indeterminate ? _transitions__WEBPACK_IMPORTED_MODULE_1__[/* VFadeTransition */ "c"] : _transitions__WEBPACK_IMPORTED_MODULE_1__[/* VSlideXTransition */ "d"];
    },

    isReversed() {
      return this.$vuetify.rtl !== this.reverse;
    },

    normalizedBuffer() {
      return this.normalize(this.bufferValue);
    },

    normalizedValue() {
      return this.normalize(this.internalLazyValue);
    },

    reactive() {
      return Boolean(this.$listeners.change);
    },

    styles() {
      const styles = {};

      if (!this.active) {
        styles.height = 0;
      }

      if (!this.indeterminate && parseFloat(this.normalizedBuffer) !== 100) {
        styles.width = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "f"])(this.normalizedBuffer, '%');
      }

      return styles;
    }

  },
  methods: {
    genContent() {
      const slot = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* getSlot */ "l"])(this, 'default', {
        value: this.internalLazyValue
      });
      if (!slot) return null;
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__content'
      }, slot);
    },

    genListeners() {
      const listeners = this.$listeners;

      if (this.reactive) {
        listeners.click = this.onClick;
      }

      return listeners;
    },

    genProgressBar(name) {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          [name]: true
        }
      }));
    },

    onClick(e) {
      if (!this.reactive) return;
      const {
        width
      } = this.$el.getBoundingClientRect();
      this.internalValue = e.offsetX / width * 100;
    },

    normalize(value) {
      if (value < 0) return 0;
      if (value > 100) return 100;
      return parseFloat(value);
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-progress-linear',
      attrs: {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': this.normalizedBuffer,
        'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue
      },
      class: this.classes,
      style: {
        bottom: this.bottom ? 0 : undefined,
        height: this.active ? Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "f"])(this.height) : 0,
        top: this.top ? 0 : undefined
      },
      on: this.genListeners()
    };
    return h('div', data, [this.__cachedStream, this.__cachedBackground, this.__cachedBuffer, this.__cachedBar, this.genContent()]);
  }

}));

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(268);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("fa791f10", content, true, context)
};

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(271);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1ff20a04", content, true, context)
};

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(273);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("985ce626", content, true, context)
};

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const useYoutube = {
  use: true
};
/* harmony default export */ __webpack_exports__["a"] = (useYoutube);

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_VProgressLinear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(237);


/**
 * Loadable
 *
 * @mixin
 *
 * Used to add linear progress bar to components
 * Can use a default bar with a specific color
 * or designate a custom progress linear bar
 */

/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend().extend({
  name: 'loadable',
  props: {
    loading: {
      type: [Boolean, String],
      default: false
    },
    loaderHeight: {
      type: [Number, String],
      default: 2
    }
  },
  methods: {
    genProgress() {
      if (this.loading === false) return null;
      return this.$slots.progress || this.$createElement(_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        props: {
          absolute: true,
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          height: this.loaderHeight,
          indeterminate: true
        }
      });
    }

  }
}));

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VProgressLinear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);


/* harmony default export */ __webpack_exports__["a"] = (_VProgressLinear__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/WithDecoration.vue?vue&type=template&id=87d7b0bc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"title-deco\" data-v-87d7b0bc><h3 data-v-87d7b0bc>"+_vm._ssrEscape("\n      "+_vm._s(_vm.text)+"\n    ")+"</h3></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Title/WithDecoration.vue?vue&type=template&id=87d7b0bc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/WithDecoration.vue?vue&type=script&lang=js&
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
/* harmony default export */ var WithDecorationvue_type_script_lang_js_ = ({
  props: {
    text: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Title/WithDecoration.vue?vue&type=script&lang=js&
 /* harmony default export */ var Title_WithDecorationvue_type_script_lang_js_ = (WithDecorationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Title/WithDecoration.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(254)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Title_WithDecorationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "87d7b0bc",
  "0ddc2ed2"
  
)

/* harmony default export */ var WithDecoration = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(241);
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(236);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }

}));

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e23b7040", content, true)

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none!important}}@media(max-width:1279px){.use-hidden-md-down{display:none!important}}@media(max-width:959px){.use-hidden-sm-down{display:none!important}}@media(max-width:599px){.use-hidden-xs-down{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up{display:none!important}}@media(min-width:960px){.use-hidden-md-up{display:none!important}}@media(min-width:600px){.use-hidden-sm-up{display:none!important}}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(244);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("cf87dc84", content, true)

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none!important}}@media(max-width:1279px){.use-hidden-md-down{display:none!important}}@media(max-width:959px){.use-hidden-sm-down{display:none!important}}@media(max-width:599px){.use-hidden-xs-down{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up{display:none!important}}@media(min-width:960px){.use-hidden-md-up{display:none!important}}@media(min-width:600px){.use-hidden-sm-up{display:none!important}}.theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%;z-index:1}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%;z-index:2}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Square_vue_vue_type_style_index_0_id_aff0c828_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(222);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Square_vue_vue_type_style_index_0_id_aff0c828_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Square_vue_vue_type_style_index_0_id_aff0c828_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Square_vue_vue_type_style_index_0_id_aff0c828_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Square_vue_vue_type_style_index_0_id_aff0c828_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Square_vue_vue_type_style_index_0_id_aff0c828_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-aff0c828]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-aff0c828]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-aff0c828]{font-size:28px;line-height:44px}}.use-text-title2[data-v-aff0c828]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-aff0c828]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-aff0c828]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-aff0c828]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-aff0c828]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-aff0c828]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-aff0c828]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-aff0c828]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-aff0c828]{font-size:16px;line-height:24px}}.use-text-caption[data-v-aff0c828],.use-text-paragraph[data-v-aff0c828]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-aff0c828]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-aff0c828]{display:none!important}}@media(max-width:1279px){.use-hidden-md-down[data-v-aff0c828]{display:none!important}}@media(max-width:959px){.use-hidden-sm-down[data-v-aff0c828]{display:none!important}}@media(max-width:599px){.use-hidden-xs-down[data-v-aff0c828]{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up[data-v-aff0c828]{display:none!important}}@media(min-width:960px){.use-hidden-md-up[data-v-aff0c828]{display:none!important}}@media(min-width:600px){.use-hidden-sm-up[data-v-aff0c828]{display:none!important}}.parallax-wrap[data-v-aff0c828]{position:absolute;width:100%;height:100%;overflow:hidden;left:0;z-index:0}@media(max-width:1279px){.parallax-wrap[data-v-aff0c828]{display:none}}.inner-parallax[data-v-aff0c828],.inner-parallax .figure[data-v-aff0c828]{height:800px;width:100%;position:absolute;display:block}.inner-parallax .figure[data-v-aff0c828]  .Masthead,.inner-parallax .figure[data-v-aff0c828]  .Masthead__image{overflow:visible}.inner-parallax .figure>div[data-v-aff0c828]{height:800px;width:100%;display:block;position:absolute;top:0}.inner-parallax-single[data-v-aff0c828],.inner-parallax-single .figure[data-v-aff0c828],.inner-parallax-single .figure>div[data-v-aff0c828]{height:100vh;width:100%;position:absolute;display:block}.parallax-square[data-v-aff0c828]{transform:rotate(45deg);position:absolute}@media(min-width:1920px){.parallax-square[data-v-aff0c828]{display:none}}.parallax-primary[data-v-aff0c828]{background:var(--v-primary-base);width:405px;height:405px;opacity:.08;border-radius:80px}.parallax-secondary[data-v-aff0c828]{width:205px;height:205px;opacity:.1}.parallax-secondary[data-v-aff0c828],.parallax-secondary-single[data-v-aff0c828]{background:var(--v-secondary-base);border-radius:40px}.parallax-secondary-single[data-v-aff0c828]{width:305px;height:305px;opacity:.08}.banner .parallax-primary[data-v-aff0c828]{top:110px}[dir=ltr] .banner .parallax-primary[data-v-aff0c828]{right:300px}[dir=rtl] .banner .parallax-primary[data-v-aff0c828]{left:300px}.banner .parallax-secondary[data-v-aff0c828]{top:100px}[dir=ltr] .banner .parallax-secondary[data-v-aff0c828]{right:100px}[dir=rtl] .banner .parallax-secondary[data-v-aff0c828]{left:100px}.about[data-v-aff0c828]{top:350px}.about .parallax-primary[data-v-aff0c828]{top:190px}[dir=ltr] .about .parallax-primary[data-v-aff0c828]{left:60px}[dir=rtl] .about .parallax-primary[data-v-aff0c828]{right:60px}[dir=ltr] .about .parallax-secondary[data-v-aff0c828]{left:0}[dir=rtl] .about .parallax-secondary[data-v-aff0c828]{right:0}.dots-wrap[data-v-aff0c828]{top:800px;height:1000px;position:absolute;z-index:2}.testi[data-v-aff0c828]{top:-400px}[dir=ltr] .testi[data-v-aff0c828]{left:50px}[dir=rtl] .testi[data-v-aff0c828]{right:50px}.parallax-dot[data-v-aff0c828]{width:845px;height:1099px;opacity:.2;top:90px;transform:scale(.5);position:absolute}.theme--dark .parallax-dot[data-v-aff0c828]{fill:hsla(0,0%,100%,.5)}.theme--light .parallax-dot[data-v-aff0c828]{fill:rgba(0,0,0,.38)}[dir=ltr] .parallax-dot[data-v-aff0c828]{left:10px}[dir=rtl] .parallax-dot[data-v-aff0c828]{right:10px}.v-application--is-rtl .parallax-dot[data-v-aff0c828]{transform-origin:top right}.v-application--is-ltr .parallax-dot[data-v-aff0c828]{transform-origin:top left}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoBanner_vue_vue_type_style_index_0_id_66290338_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(223);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoBanner_vue_vue_type_style_index_0_id_66290338_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoBanner_vue_vue_type_style_index_0_id_66290338_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoBanner_vue_vue_type_style_index_0_id_66290338_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoBanner_vue_vue_type_style_index_0_id_66290338_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoBanner_vue_vue_type_style_index_0_id_66290338_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-66290338]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-66290338]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-66290338]{font-size:28px;line-height:44px}}.use-text-title2[data-v-66290338]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-66290338]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-66290338]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-66290338]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-66290338]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-66290338]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-66290338]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-66290338]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-66290338]{font-size:16px;line-height:24px}}.use-text-caption[data-v-66290338],.use-text-paragraph[data-v-66290338]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-66290338]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-66290338]{display:none!important}}@media(max-width:1279px){.use-hidden-md-down[data-v-66290338]{display:none!important}}@media(max-width:959px){.use-hidden-sm-down[data-v-66290338]{display:none!important}}@media(max-width:599px){.use-hidden-xs-down[data-v-66290338]{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up[data-v-66290338]{display:none!important}}@media(min-width:960px){.use-hidden-md-up[data-v-66290338]{display:none!important}}@media(min-width:600px){.use-hidden-sm-up[data-v-66290338]{display:none!important}}.hero-content[data-v-66290338]{position:relative}.hero-content>.container[data-v-66290338]{padding-left:0!important;padding-right:0!important;margin:0 auto}@media(min-width:1280px){.hero-content[data-v-66290338]{margin-bottom:0}[dir=ltr] .hero-content[data-v-66290338]{padding-left:48px}[dir=rtl] .hero-content[data-v-66290338]{padding-right:48px}}@media(max-width:959px){.hero-content[data-v-66290338]{margin-bottom:0;padding-bottom:96px}}.banner-text[data-v-66290338]{position:relative;z-index:4;padding:32px 0}@media(min-width:960px){.theme--light .banner-text[data-v-66290338]{color:rgba(0,0,0,.87)}.theme--dark .banner-text[data-v-66290338]{color:#fff}}@media(max-width:1279px){.banner-text[data-v-66290338]{padding:48px 0}}@media(max-width:959px){.banner-text[data-v-66290338]{padding:32px;max-width:640px;margin:0 auto;text-align:center;color:#fff}}.title[data-v-66290338]{margin-top:96px;margin-bottom:24px}@media(max-width:1279px){.title[data-v-66290338]{margin-top:120px}}.title h3[data-v-66290338]{font-family:\"Roboto Condensed\"}.text-helper[data-v-66290338]{display:inline-block}@media(min-width:1280px){[dir=ltr] .text-helper[data-v-66290338]{padding-right:80px}[dir=rtl] .text-helper[data-v-66290338]{padding-left:80px}}.second-row[data-v-66290338]{display:flex;align-items:center}.subtitle[data-v-66290338]{margin-bottom:24px}@media(min-width:1280px){[dir=ltr] .subtitle[data-v-66290338]{padding-right:64px}[dir=rtl] .subtitle[data-v-66290338]{padding-left:64px}}@media(min-width:960px){.subtitle[data-v-66290338]{margin-bottom:40px}}[data-v-66290338] .button.v-btn{min-width:200px;height:48px}@media(max-width:959px){.banner-text .button[data-v-66290338]{color:var(--v-secondarylight-base)!important;border-color:var(--v-secondarylight-base)}}[dir=ltr] .icon[data-v-66290338]{margin-left:8px}[dir=rtl] .icon[data-v-66290338]{margin-right:8px}.v-application--is-rtl .icon[data-v-66290338]{transform:rotate(180deg)}.mobile-cover[data-v-66290338]{position:absolute;top:0;left:0;margin:0;height:100%;background:#000}.mobile-cover img[data-v-66290338]{min-width:100%;height:100%;opacity:.5}@media(max-width:599px){.mobile-cover img[data-v-66290338]{opacity:.4}}.video-wrap[data-v-66290338]{position:relative}.video-figure[data-v-66290338]{border-radius:80px;overflow:hidden;position:absolute;width:1040px;height:840px;top:0}[dir=ltr] .video-figure[data-v-66290338]{left:0}[dir=rtl] .video-figure[data-v-66290338]{right:0}.v-application--is-rtl .video-figure[data-v-66290338]{box-shadow:30px 20px 0 0 var(--v-primary-base)}.v-application--is-ltr .video-figure[data-v-66290338]{box-shadow:-30px 20px 0 0 var(--v-primary-base)}@media(min-width:600px){.video-figure[data-v-66290338]{top:-920px}[dir=ltr] .video-figure[data-v-66290338]{left:-110px}[dir=rtl] .video-figure[data-v-66290338]{right:-110px}.v-application--is-rtl .video-figure[data-v-66290338]{transform:rotate(75deg)}.v-application--is-ltr .video-figure[data-v-66290338]{transform:rotate(-75deg)}}@media(min-width:960px){.video-figure[data-v-66290338]{width:1200px;top:-650px}.v-application--is-rtl .video-figure[data-v-66290338]{transform:rotate(45deg)}.v-application--is-ltr .video-figure[data-v-66290338]{transform:rotate(-45deg)}[dir=ltr] .video-figure[data-v-66290338]{left:-200px}[dir=rtl] .video-figure[data-v-66290338]{right:-200px}}.overlay[data-v-66290338]{position:absolute;top:0;left:0;opacity:.3;width:100%;height:100%;z-index:10}.inner-figure[data-v-66290338]{width:100%;height:100%;position:relative}@media(min-width:600px){.inner-figure[data-v-66290338]{top:-140px}[dir=ltr] .inner-figure[data-v-66290338]{left:400px}[dir=rtl] .inner-figure[data-v-66290338]{right:400px}.v-application--is-rtl .inner-figure[data-v-66290338]{transform:rotate(-75deg);transform-origin:top right}.v-application--is-ltr .inner-figure[data-v-66290338]{transform:rotate(75deg);transform-origin:top left}}@media(min-width:960px){.v-application--is-rtl .inner-figure[data-v-66290338]{transform:rotate(-45deg)}.v-application--is-ltr .inner-figure[data-v-66290338]{transform:rotate(45deg)}[dir=ltr] .inner-figure[data-v-66290338]{left:130px}[dir=rtl] .inner-figure[data-v-66290338]{right:130px}}.inner-figure img[data-v-66290338]{display:block;width:100%;z-index:2;position:relative}.inner-figure .video[data-v-66290338]{display:block;width:100%;top:150px;position:fixed}.v-application--is-ltr .inner-figure .video[data-v-66290338]{left:30px}.v-application--is-rtl .inner-figure .video[data-v-66290338]{right:-50px}.inner-figure .video[data-v-66290338]  iframe{width:100%}.inner-figure:hover .btn-play[data-v-66290338]{opacity:1}.btn-play[data-v-66290338]{position:absolute;top:46%;left:46%;z-index:20;width:80px;height:80px;opacity:0;transition:opacity .5s ease;background:#fff!important}.theme--dark .btn-play[data-v-66290338]{box-shadow:0 1px 5px 0 rgba(50,50,50,.2),0 2px 2px 0 rgba(50,50,50,.14),0 3px 1px -2px rgba(50,50,50,.12)}.theme--light .btn-play[data-v-66290338]{box-shadow:0 1px 5px 0 hsla(0,0%,50.2%,.2),0 2px 2px 0 hsla(0,0%,50.2%,.14),0 3px 1px -2px hsla(0,0%,50.2%,.12)}.btn-play .v-icon[data-v-66290338]{font-size:50px;color:var(--v-primary-base)}.logo img[data-v-66290338]{transition:all .3s ease;max-width:280px;height:320px;width:280px}[dir=ltr] .logo img[data-v-66290338]{margin-right:8px}[dir=rtl] .logo img[data-v-66290338]{margin-left:8px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_33775d89_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_33775d89_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_33775d89_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_33775d89_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_33775d89_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_33775d89_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-33775d89]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-33775d89]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-33775d89]{font-size:28px;line-height:44px}}.use-text-title2[data-v-33775d89]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-33775d89]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-33775d89]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-33775d89]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-33775d89]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-33775d89]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-33775d89]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-33775d89]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-33775d89]{font-size:16px;line-height:24px}}.use-text-caption[data-v-33775d89],.use-text-paragraph[data-v-33775d89]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-33775d89]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-33775d89]{display:none!important}}@media(max-width:1279px){.use-hidden-md-down[data-v-33775d89]{display:none!important}}@media(max-width:959px){.use-hidden-sm-down[data-v-33775d89]{display:none!important}}@media(max-width:599px){.use-hidden-xs-down[data-v-33775d89]{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up[data-v-33775d89]{display:none!important}}@media(min-width:960px){.use-hidden-md-up[data-v-33775d89]{display:none!important}}@media(min-width:600px){.use-hidden-sm-up[data-v-33775d89]{display:none!important}}.counter-wrap[data-v-33775d89]{margin:24px 0}.counter-item[data-v-33775d89]{align-items:center;justify-content:center}.counter-item p[data-v-33775d89]{font-size:22px;text-transform:capitalize}@media(min-width:960px){.counter-item[data-v-33775d89]{display:flex}}.counter-item .text[data-v-33775d89]{text-align:center}.counter-item .text h3[data-v-33775d89]{position:relative;font-weight:700;padding-bottom:16px;margin-bottom:32px}.counter-item .text h3[data-v-33775d89]:after{content:\"\";width:50px;height:8px;border-radius:5px;background:var(--v-primary-base);position:absolute;bottom:-16px;left:calc(50% - 25px)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WithDecoration_vue_vue_type_style_index_0_id_87d7b0bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WithDecoration_vue_vue_type_style_index_0_id_87d7b0bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WithDecoration_vue_vue_type_style_index_0_id_87d7b0bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WithDecoration_vue_vue_type_style_index_0_id_87d7b0bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WithDecoration_vue_vue_type_style_index_0_id_87d7b0bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WithDecoration_vue_vue_type_style_index_0_id_87d7b0bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-87d7b0bc]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-87d7b0bc]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-87d7b0bc]{font-size:28px;line-height:44px}}.use-text-title2[data-v-87d7b0bc]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-87d7b0bc]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-87d7b0bc]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-87d7b0bc]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-87d7b0bc]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-87d7b0bc]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-87d7b0bc]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-87d7b0bc]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-87d7b0bc]{font-size:16px;line-height:24px}}.use-text-caption[data-v-87d7b0bc],.use-text-paragraph[data-v-87d7b0bc]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-87d7b0bc]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-87d7b0bc]{display:none!important}}@media(max-width:1279px){.use-hidden-md-down[data-v-87d7b0bc]{display:none!important}}@media(max-width:959px){.use-hidden-sm-down[data-v-87d7b0bc]{display:none!important}}@media(max-width:599px){.use-hidden-xs-down[data-v-87d7b0bc]{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up[data-v-87d7b0bc]{display:none!important}}@media(min-width:960px){.use-hidden-md-up[data-v-87d7b0bc]{display:none!important}}@media(min-width:600px){.use-hidden-sm-up[data-v-87d7b0bc]{display:none!important}}.title-default[data-v-87d7b0bc]{padding:0 32px}.title-primary[data-v-87d7b0bc]{font-size:48px;line-height:62px;font-family:\"Roboto Condensed\";text-transform:capitalize;font-weight:700;margin-bottom:64px;position:relative}.theme--dark .title-primary[data-v-87d7b0bc]{color:var(--v-primarylight-base)}.theme--light .title-primary[data-v-87d7b0bc]{color:var(--v-primarydark-base)}@media(max-width:1279px){.title-primary[data-v-87d7b0bc]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-primary[data-v-87d7b0bc]{text-align:center;margin-bottom:32px}}@media(max-width:599px){.title-primary[data-v-87d7b0bc]{font-size:32px;line-height:42px}}.title-secondary[data-v-87d7b0bc]{color:var(--v-secondarydark-base);font-size:48px;line-height:62px;font-family:\"Roboto Condensed\";text-transform:capitalize;font-weight:700;margin-bottom:64px;position:relative}@media(max-width:1279px){.title-secondary[data-v-87d7b0bc]{font-size:38px;line-height:50px}}@media(max-width:599px){.title-secondary[data-v-87d7b0bc]{font-size:32px;line-height:42px}}.title-deco[data-v-87d7b0bc],.title-deco h3[data-v-87d7b0bc]{position:relative}.title-deco h3[data-v-87d7b0bc]{font-family:\"Roboto Condensed\";color:#fff;width:120px;text-transform:capitalize;font-size:48px;font-Weight:700;line-height:62px}[dir=ltr] .title-deco h3[data-v-87d7b0bc]{padding-left:20px}[dir=rtl] .title-deco h3[data-v-87d7b0bc]{padding-right:20px}@media(min-width:1280px){.title-deco h3[data-v-87d7b0bc]{height:160px}[dir=ltr] .title-deco h3[data-v-87d7b0bc]{margin-left:24px}[dir=rtl] .title-deco h3[data-v-87d7b0bc]{margin-right:24px}}@media(min-width:960px){.title-deco h3[data-v-87d7b0bc]{padding-top:40px;margin-top:80px}}@media(min-width:960px)and (max-width:1279px){[dir=ltr] .title-deco h3[data-v-87d7b0bc]{margin-left:56px}[dir=rtl] .title-deco h3[data-v-87d7b0bc]{margin-right:56px}}@media(max-width:1279px){.title-deco h3[data-v-87d7b0bc]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-deco h3[data-v-87d7b0bc]{width:auto;text-align:center}[dir=ltr] .title-deco h3[data-v-87d7b0bc]{padding-left:0}[dir=rtl] .title-deco h3[data-v-87d7b0bc]{padding-right:0}.theme--dark .title-deco h3[data-v-87d7b0bc]{color:var(--v-primarylight-base)}.theme--light .title-deco h3[data-v-87d7b0bc]{color:var(--v-primarydark-base)}}@media(max-width:599px){.title-deco h3[data-v-87d7b0bc]{font-size:32px;line-height:42px}}.title-deco[data-v-87d7b0bc]:before{content:\"\";width:210px;height:210px;background:var(--v-primary-base);border-radius:24px;position:absolute;top:0}[dir=ltr] .title-deco[data-v-87d7b0bc]:before{left:0}[dir=rtl] .title-deco[data-v-87d7b0bc]:before{right:0}.v-application--is-rtl .title-deco[data-v-87d7b0bc]:before{transform:rotate(-45deg)}.v-application--is-ltr .title-deco[data-v-87d7b0bc]:before{transform:rotate(45deg)}@media(max-width:1279px){[dir=ltr] .title-deco[data-v-87d7b0bc]:before{left:24px}[dir=rtl] .title-deco[data-v-87d7b0bc]:before{right:24px}}@media(max-width:959px){.title-deco[data-v-87d7b0bc]:before{display:none}}@media(min-width:1280px){.title-icon-deco[data-v-87d7b0bc]{width:350px}}.title-icon-deco[data-v-87d7b0bc]:before{content:\"\";width:480px;height:480px;border-radius:24px;position:absolute;top:120px}.theme--dark .title-icon-deco[data-v-87d7b0bc]:before{background:#303030}.theme--light .title-icon-deco[data-v-87d7b0bc]:before{background:#fff}.v-application--is-rtl .title-icon-deco[data-v-87d7b0bc]:before{transform:rotate(-45deg)}.v-application--is-ltr .title-icon-deco[data-v-87d7b0bc]:before{transform:rotate(45deg)}[dir=ltr] .title-icon-deco[data-v-87d7b0bc]:before{right:80px}[dir=rtl] .title-icon-deco[data-v-87d7b0bc]:before{left:80px}@media(max-width:959px){.title-icon-deco[data-v-87d7b0bc]:before{display:none}}.theme--dark .title-icon-deco.extend[data-v-87d7b0bc]:before{box-shadow:-30px 20px 0 0 var(--v-secondarydark-base)}.theme--light .title-icon-deco.extend[data-v-87d7b0bc]:before{box-shadow:-30px 20px 0 0 var(--v-secondarylight-base)}.title-icon-deco h3[data-v-87d7b0bc]{font-weight:700;text-transform:capitalize;width:200px;min-height:120px;font-family:\"Roboto Condensed\";font-size:48px;line-height:62px;position:relative}.theme--dark .title-icon-deco h3[data-v-87d7b0bc]{color:var(--v-primarylight-base)}.theme--light .title-icon-deco h3[data-v-87d7b0bc]{color:var(--v-primarydark-base)}@media(max-width:1279px){.title-icon-deco h3[data-v-87d7b0bc]{font-size:38px;line-height:50px;width:100%;text-align:center}}@media(max-width:599px){.title-icon-deco h3[data-v-87d7b0bc]{font-size:32px;line-height:42px}}.title-icon-deco .icon[data-v-87d7b0bc]{position:relative;font-size:100px!important;color:var(--v-secondarylight-base);display:block;margin:16px 0 24px}[dir=ltr] .title-icon-deco .icon[data-v-87d7b0bc]{text-align:left}[dir=rtl] .title-icon-deco .icon[data-v-87d7b0bc]{text-align:right}@media(max-width:1279px){.title-icon-deco .icon[data-v-87d7b0bc]{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_74865dc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(226);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_74865dc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_74865dc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_74865dc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_74865dc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_74865dc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-74865dc0]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-74865dc0]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-74865dc0]{font-size:28px;line-height:44px}}.use-text-title2[data-v-74865dc0]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-74865dc0]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-74865dc0]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-74865dc0]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-74865dc0]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-74865dc0]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-74865dc0]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-74865dc0]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-74865dc0]{font-size:16px;line-height:24px}}.use-text-caption[data-v-74865dc0],.use-text-paragraph[data-v-74865dc0]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-74865dc0]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-74865dc0]{display:none!important}}@media(max-width:1279px){.use-hidden-md-down[data-v-74865dc0]{display:none!important}}@media(max-width:959px){.use-hidden-sm-down[data-v-74865dc0]{display:none!important}}@media(max-width:599px){.use-hidden-xs-down[data-v-74865dc0]{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up[data-v-74865dc0]{display:none!important}}@media(min-width:960px){.use-hidden-md-up[data-v-74865dc0]{display:none!important}}@media(min-width:600px){.use-hidden-sm-up[data-v-74865dc0]{display:none!important}}.root blockquote[data-v-74865dc0]{font-size:28px;font-style:italic;margin:40px 0 0}.theme--light .root blockquote[data-v-74865dc0]{color:rgba(0,0,0,.54)}.theme--dark .root blockquote[data-v-74865dc0]{color:hsla(0,0%,100%,.7)}.v-application--is-ltr .root blockquote[data-v-74865dc0]{border-left:4px solid}.v-application--is-rtl .root blockquote[data-v-74865dc0]{border-right:4px solid}.theme--light .root blockquote[data-v-74865dc0]{border-left-color:#d8d8d8}.theme--dark .root blockquote[data-v-74865dc0]{border-left-color:rgba(0,0,0,.38)}[dir=ltr] .root blockquote[data-v-74865dc0]{padding-left:40px}[dir=rtl] .root blockquote[data-v-74865dc0]{padding-right:40px}@media(max-width:599px){.root blockquote[data-v-74865dc0]{margin:0;font-size:20px;line-height:32px}[dir=ltr] .root blockquote[data-v-74865dc0]{padding-left:16px}[dir=rtl] .root blockquote[data-v-74865dc0]{padding-right:16px}}@media(max-width:959px){.root h4[data-v-74865dc0]{text-align:center;margin-top:-24px}}.puzzle[data-v-74865dc0]{position:relative;top:-40px}[dir=ltr] .puzzle[data-v-74865dc0]{left:60px}[dir=rtl] .puzzle[data-v-74865dc0]{right:60px}.puzzle div[data-v-74865dc0]{overflow:hidden;position:absolute;background:#dedede}.v-application--is-rtl .puzzle div[data-v-74865dc0]{transform:rotate(-45deg)}.v-application--is-ltr .puzzle div[data-v-74865dc0]{transform:rotate(45deg)}.puzzle span[data-v-74865dc0]{background:url(https://via.placeholder.com/1280x825/99d8ff/FFFFFF) no-repeat fixed;background-size:auto 800px;width:560px;height:1000px;display:block;position:relative;top:-110px}.v-application--is-rtl .puzzle span[data-v-74865dc0]{transform:rotate(45deg)}.v-application--is-ltr .puzzle span[data-v-74865dc0]{transform:rotate(-45deg)}[dir=ltr] .puzzle span[data-v-74865dc0]{left:0}[dir=rtl] .puzzle span[data-v-74865dc0]{right:0}.piece-big[data-v-74865dc0]{width:300px;height:150px;top:-175px;border-radius:32px}[dir=ltr] .piece-big[data-v-74865dc0]{left:100px}[dir=rtl] .piece-big[data-v-74865dc0]{right:100px}.piece-small-top[data-v-74865dc0]{width:100px;height:100px;border-radius:24px;top:12px}[dir=ltr] .piece-small-top[data-v-74865dc0]{left:170px}[dir=rtl] .piece-small-top[data-v-74865dc0]{right:170px}.piece-small-bottom[data-v-74865dc0]{width:100px;height:100px;border-radius:24px;top:90px}[dir=ltr] .piece-small-bottom[data-v-74865dc0]{left:90px}[dir=rtl] .piece-small-bottom[data-v-74865dc0]{right:90px}.title-default[data-v-74865dc0]{padding:0 32px}.title-primary[data-v-74865dc0]{font-size:48px;line-height:62px;font-family:\"Roboto Condensed\";text-transform:capitalize;font-weight:700;margin-bottom:64px;position:relative}.theme--dark .title-primary[data-v-74865dc0]{color:var(--v-primarylight-base)}.theme--light .title-primary[data-v-74865dc0]{color:var(--v-primarydark-base)}@media(max-width:1279px){.title-primary[data-v-74865dc0]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-primary[data-v-74865dc0]{text-align:center;margin-bottom:32px}}@media(max-width:599px){.title-primary[data-v-74865dc0]{font-size:32px;line-height:42px}}.title-secondary[data-v-74865dc0]{color:var(--v-secondarydark-base);font-size:48px;line-height:62px;font-family:\"Roboto Condensed\";text-transform:capitalize;font-weight:700;margin-bottom:64px;position:relative}@media(max-width:1279px){.title-secondary[data-v-74865dc0]{font-size:38px;line-height:50px}}@media(max-width:599px){.title-secondary[data-v-74865dc0]{font-size:32px;line-height:42px}}.title-deco[data-v-74865dc0],.title-deco h3[data-v-74865dc0]{position:relative}.title-deco h3[data-v-74865dc0]{font-family:\"Roboto Condensed\";color:#fff;width:120px;text-transform:capitalize;font-size:48px;font-Weight:700;line-height:62px}[dir=ltr] .title-deco h3[data-v-74865dc0]{padding-left:20px}[dir=rtl] .title-deco h3[data-v-74865dc0]{padding-right:20px}@media(min-width:1280px){.title-deco h3[data-v-74865dc0]{height:160px}[dir=ltr] .title-deco h3[data-v-74865dc0]{margin-left:24px}[dir=rtl] .title-deco h3[data-v-74865dc0]{margin-right:24px}}@media(min-width:960px){.title-deco h3[data-v-74865dc0]{padding-top:40px;margin-top:80px}}@media(min-width:960px)and (max-width:1279px){[dir=ltr] .title-deco h3[data-v-74865dc0]{margin-left:56px}[dir=rtl] .title-deco h3[data-v-74865dc0]{margin-right:56px}}@media(max-width:1279px){.title-deco h3[data-v-74865dc0]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-deco h3[data-v-74865dc0]{width:auto;text-align:center}[dir=ltr] .title-deco h3[data-v-74865dc0]{padding-left:0}[dir=rtl] .title-deco h3[data-v-74865dc0]{padding-right:0}.theme--dark .title-deco h3[data-v-74865dc0]{color:var(--v-primarylight-base)}.theme--light .title-deco h3[data-v-74865dc0]{color:var(--v-primarydark-base)}}@media(max-width:599px){.title-deco h3[data-v-74865dc0]{font-size:32px;line-height:42px}}.title-deco[data-v-74865dc0]:before{content:\"\";width:210px;height:210px;background:var(--v-primary-base);border-radius:24px;position:absolute;top:0}[dir=ltr] .title-deco[data-v-74865dc0]:before{left:0}[dir=rtl] .title-deco[data-v-74865dc0]:before{right:0}.v-application--is-rtl .title-deco[data-v-74865dc0]:before{transform:rotate(-45deg)}.v-application--is-ltr .title-deco[data-v-74865dc0]:before{transform:rotate(45deg)}@media(max-width:1279px){[dir=ltr] .title-deco[data-v-74865dc0]:before{left:24px}[dir=rtl] .title-deco[data-v-74865dc0]:before{right:24px}}@media(max-width:959px){.title-deco[data-v-74865dc0]:before{display:none}}@media(min-width:1280px){.title-icon-deco[data-v-74865dc0]{width:350px}}.title-icon-deco[data-v-74865dc0]:before{content:\"\";width:480px;height:480px;border-radius:24px;position:absolute;top:120px}.theme--dark .title-icon-deco[data-v-74865dc0]:before{background:#303030}.theme--light .title-icon-deco[data-v-74865dc0]:before{background:#fff}.v-application--is-rtl .title-icon-deco[data-v-74865dc0]:before{transform:rotate(-45deg)}.v-application--is-ltr .title-icon-deco[data-v-74865dc0]:before{transform:rotate(45deg)}[dir=ltr] .title-icon-deco[data-v-74865dc0]:before{right:80px}[dir=rtl] .title-icon-deco[data-v-74865dc0]:before{left:80px}@media(max-width:959px){.title-icon-deco[data-v-74865dc0]:before{display:none}}.theme--dark .title-icon-deco.extend[data-v-74865dc0]:before{box-shadow:-30px 20px 0 0 var(--v-secondarydark-base)}.theme--light .title-icon-deco.extend[data-v-74865dc0]:before{box-shadow:-30px 20px 0 0 var(--v-secondarylight-base)}.title-icon-deco h3[data-v-74865dc0]{font-weight:700;text-transform:capitalize;width:200px;min-height:120px;font-family:\"Roboto Condensed\";font-size:48px;line-height:62px;position:relative}.theme--dark .title-icon-deco h3[data-v-74865dc0]{color:var(--v-primarylight-base)}.theme--light .title-icon-deco h3[data-v-74865dc0]{color:var(--v-primarydark-base)}@media(max-width:1279px){.title-icon-deco h3[data-v-74865dc0]{font-size:38px;line-height:50px;width:100%;text-align:center}}@media(max-width:599px){.title-icon-deco h3[data-v-74865dc0]{font-size:32px;line-height:42px}}.title-icon-deco .icon[data-v-74865dc0]{position:relative;font-size:100px!important;color:var(--v-secondarylight-base);display:block;margin:16px 0 24px}[dir=ltr] .title-icon-deco .icon[data-v-74865dc0]{text-align:left}[dir=rtl] .title-icon-deco .icon[data-v-74865dc0]{text-align:right}@media(max-width:1279px){.title-icon-deco .icon[data-v-74865dc0]{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_53359d92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_53359d92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_53359d92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_53359d92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_53359d92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_53359d92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-53359d92]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-53359d92]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-53359d92]{font-size:28px;line-height:44px}}.use-text-title2[data-v-53359d92]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-53359d92]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-53359d92]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-53359d92]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-53359d92]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-53359d92]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-53359d92]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-53359d92]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-53359d92]{font-size:16px;line-height:24px}}.use-text-caption[data-v-53359d92],.use-text-paragraph[data-v-53359d92]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-53359d92]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-53359d92]{display:none!important}}@media(max-width:1279px){.use-hidden-md-down[data-v-53359d92]{display:none!important}}@media(max-width:959px){.use-hidden-sm-down[data-v-53359d92]{display:none!important}}@media(max-width:599px){.use-hidden-xs-down[data-v-53359d92]{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up[data-v-53359d92]{display:none!important}}@media(min-width:960px){.use-hidden-md-up[data-v-53359d92]{display:none!important}}@media(min-width:600px){.use-hidden-sm-up[data-v-53359d92]{display:none!important}}.fab.v-btn[data-v-53359d92]{transform:scale(.5);transition:all .5s ease;opacity:0;background:var(--v-primarylight-base)!important;position:absolute;bottom:0;right:0;font-weight:var(--font-bold)}.fab.v-btn .icon[data-v-53359d92]{color:var(--v-primarydark-base);font-size:40px}.page-nav[data-v-53359d92]{z-index:200;position:fixed;bottom:40px;right:40px;width:56px}.page-nav nav[data-v-53359d92]{height:0;overflow:hidden;transition:height .5s ease;transition-delay:.5s}.page-nav.show .fab[data-v-53359d92]{opacity:1;transform:scale(1)}.page-nav .section-nav section[data-v-53359d92]{margin:0 0 76px 22px;padding:0;position:relative}.page-nav .section-nav a[data-v-53359d92]{margin-bottom:24px;opacity:0;position:relative;width:12px;height:12px;border-radius:3px;transform:rotate(45deg);background:hsla(0,0%,100%,.3);border:1px solid var(--v-primarydark-base);display:block;transition:all .4s ease;color:transparent}.theme--dark .page-nav .section-nav a[data-v-53359d92]{box-shadow:0 1px 3px 0 rgba(50,50,50,.2),0 1px 1px 0 rgba(50,50,50,.14),0 2px 1px -1px rgba(50,50,50,.12)}.theme--light .page-nav .section-nav a[data-v-53359d92]{box-shadow:0 1px 3px 0 hsla(0,0%,50.2%,.2),0 1px 1px 0 hsla(0,0%,50.2%,.14),0 2px 1px -1px hsla(0,0%,50.2%,.12);border-color:rgba(0,0,0,.38)}.theme--dark .page-nav .section-nav a[data-v-53359d92]{border-color:hsla(0,0%,100%,.5)}.page-nav .section-nav a.active[data-v-53359d92]{background:var(--v-primarydark-base);border:1px solid var(--v-primarylight-base)}.page-nav:hover nav[data-v-53359d92]{transition-delay:0s;height:100%}.page-nav:hover .section-nav a[data-v-53359d92]{opacity:1;top:0!important}.tooltip[data-v-53359d92]{text-transform:capitalize;font-size:14px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(261);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("dc0628f2", content, true)

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none!important}}@media(max-width:1279px){.use-hidden-md-down{display:none!important}}@media(max-width:959px){.use-hidden-sm-down{display:none!important}}@media(max-width:599px){.use-hidden-xs-down{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up{display:none!important}}@media(min-width:960px){.use-hidden-md-up{display:none!important}}@media(min-width:600px){.use-hidden-sm-up{display:none!important}}.v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ About; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/About/About.vue?vue&type=template&id=74865dc0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-container',{staticClass:"fixed-width"},[_c('v-row',[_c('v-col',{staticClass:"pa-6",attrs:{"cols":"12","md":"5"}},[_c('div',[_c('title-deco',{attrs:{"text":_vm.$t('agencyLanding.about_title')}}),_vm._v(" "),(_vm.isDesktop)?_c('div',{staticClass:"puzzle"},[_c('div',{staticClass:"piece-big"},[_c('span')]),_vm._v(" "),_c('div',{staticClass:"piece-small-top"},[_c('span')]),_vm._v(" "),_c('div',{staticClass:"piece-small-bottom"},[_c('span')])]):_vm._e()],1)]),_vm._v(" "),_c('v-col',{staticClass:"pa-6",attrs:{"cols":"12","md":"7"}},[_c('h4',{staticClass:"title-default use-text-subtitle"},[_vm._v("\n          "+_vm._s(_vm.$t('agencyLanding.about_subtitle'))+"\n        ")]),_vm._v(" "),_c('counter'),_vm._v(" "),_c('blockquote',[_vm._v("\n          "+_vm._s(_vm.$t('agencyLanding.about_quote'))+"\n        ")])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/About/About.vue?vue&type=template&id=74865dc0&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Counter/Counter.vue?vue&type=template&id=33775d89&scoped=true&
var Countervue_type_template_id_33775d89_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"counter-wrap"},[_c('v-container',{staticClass:"fixed-width"},[_c('v-row',{attrs:{"justify":"center","align":"center"}},[_c('v-col',{attrs:{"md":"4"}},[_c('div',{staticClass:"counter-item"},[_c('div',{staticClass:"text"},[_c('h3',{staticClass:"use-text-title"},[_vm._v("\n              +200\n            ")]),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle"},[_vm._v("\n              "+_vm._s(_vm.$t('agencyLanding.about_employee'))+"\n            ")])])])]),_vm._v(" "),_c('v-col',{attrs:{"md":"4"}},[_c('div',{staticClass:"counter-item"},[_c('div',{staticClass:"text"},[_c('h3',{staticClass:"use-text-title"},[_vm._v("\n              +500\n            ")]),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle"},[_vm._v("\n              "+_vm._s(_vm.$t('agencyLanding.about_projects'))+"\n            ")])])])]),_vm._v(" "),_c('v-col',{attrs:{"md":"4"}},[_c('div',{staticClass:"counter-item"},[_c('div',{staticClass:"text"},[_c('h3',{staticClass:"use-text-title"},[_vm._v("\n              +300\n            ")]),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle"},[_vm._v("\n              "+_vm._s(_vm.$t('agencyLanding.about_client'))+"\n            ")])])])])],1)],1)],1)}
var Countervue_type_template_id_33775d89_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Counter/Counter.vue?vue&type=template&id=33775d89&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(218);

// CONCATENATED MODULE: ./components/Counter/Counter.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(252)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  Countervue_type_template_id_33775d89_scoped_true_render,
  Countervue_type_template_id_33775d89_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "33775d89",
  "b8b8d2a2"
  
)

/* harmony default export */ var Counter = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Counter/index.js

// EXTERNAL MODULE: ./components/Title/WithDecoration.vue + 4 modules
var WithDecoration = __webpack_require__(238);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About/About.vue?vue&type=script&lang=js&
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


/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  components: {
    Counter: Counter,
    TitleDeco: WithDecoration["a" /* default */]
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/About/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var About_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/About/About.vue



function About_injectStyles (context) {
  
  var style0 = __webpack_require__(256)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var About_component = Object(componentNormalizer["a" /* default */])(
  About_Aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  About_injectStyles,
  "74865dc0",
  "64e4c591"
  
)

/* harmony default export */ var About = (About_component.exports);

/* vuetify-loader */




installComponents_default()(About_component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/About/index.js


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ PageNav; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/PageNav/PageNav.vue?vue&type=template&id=53359d92&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.handleScroll),expression:"handleScroll"}],staticClass:"page-nav",class:{ show: _vm.show }},[_vm._ssrNode("<nav class=\"section-nav\" data-v-53359d92>","</nav>",[_c('scrollactive',{attrs:{"offset":_vm.navOffset,"active-class":"active","tag":"section"}},_vm._l((_vm.menuList),function(item,index){return _c('a',{key:index,staticClass:"anchor-link scrollactive-item",style:({ top: 50 * (_vm.menu.length - item.id) + 'px' }),attrs:{"href":item.url},on:{"click":function($event){return _vm.setOffset(item.offset)}}},[_c('v-tooltip',{attrs:{"nudge-top":23,"left":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('span',_vm._g({},on),[_vm._v(_vm._s(_vm.$t('agencyLanding.header_'+item.name)))])]}}],null,true)},[_vm._v(" "),_c('span',{staticClass:"tooltip"},[_vm._v(_vm._s(_vm.$t('agencyLanding.header_'+item.name)))])])],1)}),0)],1),_vm._ssrNode(" "),_c('v-tooltip',{attrs:{"nudge-top":25,"left":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('scrollactive',{attrs:{"tag":"div"}},[_c('v-btn',_vm._g({staticClass:"fab anchor-link scrollactive-item",attrs:{"fab":"","href":"#home"}},on),[_c('v-icon',{staticClass:"icon",attrs:{"dark":""}},[_vm._v("mdi-arrow-up")])],1)],1)]}}])},[_vm._v(" "),_c('span',{staticClass:"tooltip"},[_vm._v("To Top")])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PageNav/PageNav.vue?vue&type=template&id=53359d92&scoped=true&

// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageNav/PageNav.vue?vue&type=script&lang=js&
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
//
//
//

let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

/* harmony default export */ var PageNavvue_type_script_lang_js_ = ({
  data: () => ({
    menu: menu["a" /* default */],
    navOffset: 20,
    show: false,
    menuList: [createData(menu["a" /* default */][0], '#' + menu["a" /* default */][0]), createData(menu["a" /* default */][1], '#' + menu["a" /* default */][1]), createData(menu["a" /* default */][2], '#' + menu["a" /* default */][2]), createData(menu["a" /* default */][3], '#' + menu["a" /* default */][3], -40)]
  }),
  methods: {
    handleScroll: function () {
      if (window.scrollY > 500) {
        return this.show = true;
      }

      return this.show = false;
    },
    setOffset: function (offset) {
      this.navOffset = offset;
    }
  }
});
// CONCATENATED MODULE: ./components/PageNav/PageNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var PageNav_PageNavvue_type_script_lang_js_ = (PageNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(220);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTooltip/VTooltip.sass
var VTooltip = __webpack_require__(260);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/activatable/index.js
var activatable = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/delayable/index.js
var delayable = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/dependent/index.js
var dependent = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/detachable/index.js
var detachable = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/menuable/index.js
var menuable = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
 // Mixins







 // Helpers




/* @vue/component */

/* harmony default export */ var VTooltip_VTooltip = (Object(mixins["a" /* default */])(colorable["a" /* default */], delayable["a" /* default */], dependent["a" /* default */], detachable["a" /* default */], menuable["a" /* default */], toggleable["a" /* default */]).extend({
  name: 'v-tooltip',
  props: {
    closeDelay: {
      type: [Number, String],
      default: 0
    },
    disabled: Boolean,
    fixed: {
      type: Boolean,
      default: true
    },
    openDelay: {
      type: [Number, String],
      default: 0
    },
    openOnHover: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    transition: String
  },
  data: () => ({
    calculatedMinWidth: 0,
    closeDependents: false
  }),
  computed: {
    calculatedLeft() {
      const {
        activator,
        content
      } = this.dimensions;
      const unknown = !this.bottom && !this.left && !this.top && !this.right;
      const activatorLeft = this.attach !== false ? activator.offsetLeft : activator.left;
      let left = 0;

      if (this.top || this.bottom || unknown) {
        left = activatorLeft + activator.width / 2 - content.width / 2;
      } else if (this.left || this.right) {
        left = activatorLeft + (this.right ? activator.width : -content.width) + (this.right ? 10 : -10);
      }

      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return `${this.calcXOverflow(left, this.dimensions.content.width)}px`;
    },

    calculatedTop() {
      const {
        activator,
        content
      } = this.dimensions;
      const activatorTop = this.attach !== false ? activator.offsetTop : activator.top;
      let top = 0;

      if (this.top || this.bottom) {
        top = activatorTop + (this.bottom ? activator.height : -content.height) + (this.bottom ? 10 : -10);
      } else if (this.left || this.right) {
        top = activatorTop + activator.height / 2 - content.height / 2;
      }

      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      return `${this.calcYOverflow(top + this.pageYOffset)}px`;
    },

    classes() {
      return {
        'v-tooltip--top': this.top,
        'v-tooltip--right': this.right,
        'v-tooltip--bottom': this.bottom,
        'v-tooltip--left': this.left,
        'v-tooltip--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      };
    },

    computedTransition() {
      if (this.transition) return this.transition;
      return this.isActive ? 'scale-transition' : 'fade-transition';
    },

    offsetY() {
      return this.top || this.bottom;
    },

    offsetX() {
      return this.left || this.right;
    },

    styles() {
      return {
        left: this.calculatedLeft,
        maxWidth: Object(helpers["f" /* convertToUnit */])(this.maxWidth),
        minWidth: Object(helpers["f" /* convertToUnit */])(this.minWidth),
        opacity: this.isActive ? 0.9 : 0,
        top: this.calculatedTop,
        zIndex: this.zIndex || this.activeZIndex
      };
    }

  },

  beforeMount() {
    this.$nextTick(() => {
      this.value && this.callActivate();
    });
  },

  mounted() {
    if (Object(helpers["m" /* getSlotType */])(this, 'activator', true) === 'v-slot') {
      Object(console["b" /* consoleError */])(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`, this);
    }
  },

  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(this.startTransition);
    },

    deactivate() {
      this.runDelay('close');
    },

    genActivatorListeners() {
      const listeners = activatable["a" /* default */].options.methods.genActivatorListeners.call(this);

      listeners.focus = e => {
        this.getActivator(e);
        this.runDelay('open');
      };

      listeners.blur = e => {
        this.getActivator(e);
        this.runDelay('close');
      };

      listeners.keydown = e => {
        if (e.keyCode === helpers["p" /* keyCodes */].esc) {
          this.getActivator(e);
          this.runDelay('close');
        }
      };

      return listeners;
    },

    genTransition() {
      const content = this.genContent();
      if (!this.computedTransition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [content]);
    },

    genContent() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-tooltip__content',
        class: {
          [this.contentClass]: true,
          menuable__content__active: this.isActive,
          'v-tooltip__content--fixed': this.activatorFixed
        },
        style: this.styles,
        attrs: this.getScopeIdAttrs(),
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        ref: 'content'
      }), this.getContentSlot());
    }

  },

  render(h) {
    return h(this.tag, {
      staticClass: 'v-tooltip',
      class: this.classes
    }, [this.showLazyContent(() => [this.genTransition()]), this.genActivator()]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(75);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/scroll/index.js
var directives_scroll = __webpack_require__(42);

// CONCATENATED MODULE: ./components/PageNav/PageNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(258)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PageNav_PageNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "53359d92",
  "6a10dadf"
  
)

/* harmony default export */ var PageNav = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VTooltip: VTooltip_VTooltip})


/* vuetify-loader */


installDirectives_default()(component, {Scroll: directives_scroll["b" /* default */]})

// CONCATENATED MODULE: ./components/PageNav/index.js


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ VideoBanner; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/VideoBanner/VideoBanner.vue?vue&type=template&id=66290338&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero-content"},[_c('hidden',{attrs:{"point":"smUp"}}),_vm._ssrNode(" "),_c('v-container',{class:{ 'fixed-width': _vm.mdUp }},[_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"6"}},[_c('div',{staticClass:"banner-text"},[_c('div',{staticClass:"title"},[_c('div',{staticClass:"logo"},[_c('img',{attrs:{"src":_vm.img,"alt":"logo"}})])]),_vm._v(" "),_c('v-btn',{staticClass:"button",attrs:{"outlined":"","large":"","color":"secondary"}},[_vm._v("\n           Mensaje\n            "),_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-send")])],1)],1)]),_vm._v(" "),(_vm.isTablet)?_c('v-col',{staticClass:"pa-6",attrs:{"md":"6","cols":"12"}},[_c('div',{staticClass:"video-wrap"},[_c('div',{staticClass:"video-figure"},[_c('div',{staticClass:"inner-figure"},[_c('hidden',{attrs:{"point":"mdDown"}},[(_vm.play)?_c('v-btn',{staticClass:"btn-play",attrs:{"fab":"","text":""},on:{"click":function($event){return _vm.togglePause()}}},[(_vm.playCtrl)?_c('v-icon',[_vm._v("mdi-pause")]):_c('v-icon',[_vm._v("mdi-play")])],1):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"overlay"}),_vm._v(" "),(_vm.yt.use)?_c('div',{staticClass:"video"},[(_vm.isDesktop)?_c('youtube',{ref:"youtube",attrs:{"video-id":_vm.modeliPordata.id_video,"player-vars":_vm.playerVars,"width":1080,"height":720},on:{"playing":_vm.playing,"ended":_vm.ended}}):_vm._e()],1):_vm._e()],1)])])]):_vm._e()],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/VideoBanner/VideoBanner.vue?vue&type=template&id=66290338&scoped=true&

// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(229);

// EXTERNAL MODULE: ./static/images/imgAPI.js
var imgAPI = __webpack_require__(230);

// EXTERNAL MODULE: ./youtube.js
var youtube = __webpack_require__(235);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(23);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VideoBanner/VideoBanner.vue?vue&type=script&lang=js&
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





/* harmony default export */ var VideoBannervue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */]
  },
  props: {
    TituloPagina: {
      type: String,
      default: 'NinashunKu'
    },
    UrlVideo: {
      type: String,
      default: 'YlUKcNNmywk'
    },
    img: {
      type: String,
      default: './images/logonia.png'
    }
  },

  data() {
    return {
      videoId: 'WRCB2QSrQQU',
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        origin: 'http://localhost:8001'
      },
      modeliPordata: {
        id_portada: 0,
        id_espacio: '',
        nombre_espacio: '',
        id_eventoespacio: '',
        nombre_evento: '',
        id_videoventoespacio: '',
        nombre_video: '',
        id_video: '',
        $tarea: '',
        fecha: ''
      },
      yt: youtube["a" /* default */],
      play: false,
      playCtrl: true,
      cover: imgAPI["a" /* default */].agency[0]
    };
  },

  mounted() {
    this.FirtVideoPortada();
  },

  methods: {
    playing() {
      this.play = true;
      this.playCtrl = true;
    },

    ended() {
      this.player.playVideo();
    },

    togglePause() {
      this.playCtrl = !this.playCtrl;

      if (this.playCtrl) {
        this.player.playVideo();
      } else {
        this.player.pauseVideo();
      }
    },

    FirtVideoPortada() {
      let me = this;
      let url = me.url_base + "Control/VideoPortada.php";
      external_axios_default()({
        method: "GET",
        url: url
      }).then(function (response) {
        me.modeliPordata = response.data.result; //    console.log(response);
      }).catch(error => {
        console.log(error);
      });
    }

  },
  computed: { ...Object(external_vuex_["mapState"])(["url_base"]),

    player() {
      return this.$refs.youtube.player;
    },

    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl';
    },

    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    },

    isTablet() {
      const smUp = this.$store.state.breakpoints.smUp;
      return smUp.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown;
      return mdDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/VideoBanner/VideoBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var VideoBanner_VideoBannervue_type_script_lang_js_ = (VideoBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(220);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(218);

// CONCATENATED MODULE: ./components/VideoBanner/VideoBanner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(250)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  VideoBanner_VideoBannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "66290338",
  "be154976"
  
)

/* harmony default export */ var VideoBanner = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/VideoBanner/index.js


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Square.vue?vue&type=template&id=aff0c828&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"parallax-wrap"},[(_vm.loaded)?_vm._ssrNode("<div data-v-aff0c828>","</div>",[_vm._ssrNode("<div class=\"banner inner-parallax\" data-v-aff0c828>","</div>",[_vm._ssrNode("<div class=\"figure\" data-v-aff0c828>","</div>",[_vm._ssrNode("<div data-v-aff0c828>","</div>",[_c('parallax',{attrs:{"speed-factor":0,"direction":"down"}},[_c('div',{staticClass:"parallax-square parallax-primary"})])],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"about inner-parallax\" data-v-aff0c828>","</div>",[_vm._ssrNode("<div class=\"figure\" data-v-aff0c828>","</div>",[_vm._ssrNode("<div data-v-aff0c828>","</div>",[_c('parallax',{attrs:{"speed-factor":0.25,"direction":"down"}},[_c('div',{staticClass:"parallax-square parallax-secondary"})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"figure\" data-v-aff0c828>","</div>",[_vm._ssrNode("<div data-v-aff0c828>","</div>",[_c('parallax',{attrs:{"speed-factor":0.2,"direction":"down"}},[_c('div',{staticClass:"parallax-square parallax-primary"})])],1)])],2)],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Parallax/Square.vue?vue&type=template&id=aff0c828&scoped=true&

// EXTERNAL MODULE: external "vue-parallaxy"
var external_vue_parallaxy_ = __webpack_require__(203);
var external_vue_parallaxy_default = /*#__PURE__*/__webpack_require__.n(external_vue_parallaxy_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Square.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Squarevue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Parallax/Square.vue?vue&type=script&lang=js&
 /* harmony default export */ var Parallax_Squarevue_type_script_lang_js_ = (Squarevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Parallax/Square.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(248)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Parallax_Squarevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "aff0c828",
  "62c1b256"
  
)

/* harmony default export */ var Square = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/CardGaleria.vue?vue&type=template&id=a33ae71c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-wrap",on:{"click":_vm.showImg}},[_vm._ssrNode("<span class=\"fold\" data-v-a33ae71c></span> "),_c('v-btn',{staticClass:"category-card"},[_c('span',{staticClass:"figure"},[_c('img',{attrs:{"src":_vm.bg,"alt":"img"}})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/CardGaleria.vue?vue&type=template&id=a33ae71c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/CardGaleria.vue?vue&type=script&lang=js&
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
/* harmony default export */ var CardGaleriavue_type_script_lang_js_ = ({
  props: {
    bg: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium'
    },
    showImg: {
      type: Function,
      default: function () {
        return false;
      }
    }
  },
  computed: {
    setSize: function () {
      switch (this.size) {
        case 'small':
          return 'small';

        case 'big':
          return 'big';

        default:
          return 'medium';
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/CardGaleria.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_CardGaleriavue_type_script_lang_js_ = (CardGaleriavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(220);

// CONCATENATED MODULE: ./components/Cards/CardGaleria.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(270)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Cards_CardGaleriavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a33ae71c",
  "40aa7f01"
  
)

/* harmony default export */ var CardGaleria = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VBtn: VBtn["a" /* default */]})


/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallAction_vue_vue_type_style_index_0_id_0cddef58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(232);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallAction_vue_vue_type_style_index_0_id_0cddef58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallAction_vue_vue_type_style_index_0_id_0cddef58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallAction_vue_vue_type_style_index_0_id_0cddef58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallAction_vue_vue_type_style_index_0_id_0cddef58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallAction_vue_vue_type_style_index_0_id_0cddef58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-0cddef58]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-0cddef58]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-0cddef58]{font-size:28px;line-height:44px}}.use-text-title2[data-v-0cddef58]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-0cddef58]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-0cddef58]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-0cddef58]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-0cddef58]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-0cddef58]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-0cddef58]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-0cddef58]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-0cddef58]{font-size:16px;line-height:24px}}.use-text-caption[data-v-0cddef58],.use-text-paragraph[data-v-0cddef58]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-0cddef58]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-0cddef58]{display:none!important}}@media(max-width:1279px){.use-hidden-md-down[data-v-0cddef58]{display:none!important}}@media(max-width:959px){.use-hidden-sm-down[data-v-0cddef58]{display:none!important}}@media(max-width:599px){.use-hidden-xs-down[data-v-0cddef58]{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up[data-v-0cddef58]{display:none!important}}@media(min-width:960px){.use-hidden-md-up[data-v-0cddef58]{display:none!important}}@media(min-width:600px){.use-hidden-sm-up[data-v-0cddef58]{display:none!important}}.root[data-v-0cddef58]{position:relative}.root p[data-v-0cddef58]{margin:0}.background[data-v-0cddef58]{width:560px;height:560px;top:-400px;position:absolute;transform:scale(3)}[dir=ltr] .background[data-v-0cddef58]{left:20%}[dir=rtl] .background[data-v-0cddef58]{right:20%}.background.front[data-v-0cddef58]{opacity:.2}.theme--dark .background.front[data-v-0cddef58],.theme--light .background.front[data-v-0cddef58]{fill:var(--v-primarylight-base)}.theme--dark .background.base[data-v-0cddef58]{fill:#000}.theme--light .background.base[data-v-0cddef58]{fill:#fff}@media(min-width:960px){.button.v-btn[data-v-0cddef58]{width:240px;height:64px;font-size:18px}}@media(max-width:959px){.button.v-btn[data-v-0cddef58]{margin:0 auto}}.paper[data-v-0cddef58]{padding:32px;border:2px solid var(--v-secondary-base)}@media(max-width:959px){.paper[data-v-0cddef58]{text-align:center}}@media(min-width:1280px){.paper[data-v-0cddef58]{padding:32px 80px;margin:0 32px}}@media(max-width:959px){.paper[data-v-0cddef58]{margin-bottom:40px}}@media(max-width:599px){.paper[data-v-0cddef58]{padding:32px 8px;text-align:center}}.paper h4[data-v-0cddef58]{font-weight:700;font-family:\"Roboto Condensed\"}.theme--dark .paper h4[data-v-0cddef58]{color:var(--v-secondarylight-base)}.theme--light .paper h4[data-v-0cddef58]{color:var(--v-secondarydark-base)}@media(max-width:599px){.paper h4[data-v-0cddef58]{font-size:28px!important;margin-bottom:16px}}.paper p[data-v-0cddef58]{font-size:24px}@media(max-width:959px){.paper p[data-v-0cddef58]{margin-bottom:40px}}@media(max-width:599px){.paper p[data-v-0cddef58]{font-size:18px;margin-bottom:24px}}[dir=ltr] .right-icon[data-v-0cddef58]{margin-left:8px}[dir=rtl] .right-icon[data-v-0cddef58]{margin-right:8px}.v-application--is-rtl .right-icon[data-v-0cddef58]{transform:rotate(180deg)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ CallAction; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/CallAction/CallAction.vue?vue&type=template&id=0cddef58&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fragment',[_c('svg',{staticClass:"background base",attrs:{"fill":"cccccc","width":"845px","height":"1099px"}},[_c('use',{attrs:{"xlink:href":"/images/decoration/square-deco-primary.svg#square"}})]),_vm._v(" "),_c('svg',{staticClass:"background front",attrs:{"fill":"cccccc","width":"845px","height":"1099px"}},[_c('use',{attrs:{"xlink:href":"/images/decoration/square-deco-primary.svg#square"}})]),_vm._v(" "),_c('v-container',{class:{ 'fixed-width': _vm.mdUp }},[_c('div',{staticClass:"root"},[_c('v-card',{staticClass:"paper"},[_c('v-row',{attrs:{"align":"center","no-gutters":""}},[_c('v-col',{attrs:{"cols":"12","md":"9"}},[_c('h4',{staticClass:"display-1 pb-2"},[_vm._v("\n                "+_vm._s(_vm.$t('agencyLanding.cta_title'))+"\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                "+_vm._s(_vm.$t('agencyLanding.cta_subtitle'))+"\n              ")])]),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-row',{attrs:{"align":"center"}},[_c('v-btn',{staticClass:"button",attrs:{"large":"","outlined":"","color":"secondary","href":"/contact"}},[_vm._v("\n                  "+_vm._s(_vm.$t('agencyLanding.cta_btn'))+"\n                  "),_c('v-icon',{staticClass:"right-icon"},[_vm._v("mdi-send")])],1)],1)],1)],1)],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CallAction/CallAction.vue?vue&type=template&id=0cddef58&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallAction/CallAction.vue?vue&type=script&lang=js&
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
/* harmony default export */ var CallActionvue_type_script_lang_js_ = ({
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl';
    }

  }
});
// CONCATENATED MODULE: ./components/CallAction/CallAction.vue?vue&type=script&lang=js&
 /* harmony default export */ var CallAction_CallActionvue_type_script_lang_js_ = (CallActionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(220);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(218);

// CONCATENATED MODULE: ./components/CallAction/CallAction.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(267)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CallAction_CallActionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0cddef58",
  "ca07c122"
  
)

/* harmony default export */ var CallAction = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/CallAction/index.js


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGaleria_vue_vue_type_style_index_0_id_a33ae71c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(233);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGaleria_vue_vue_type_style_index_0_id_a33ae71c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGaleria_vue_vue_type_style_index_0_id_a33ae71c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGaleria_vue_vue_type_style_index_0_id_a33ae71c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGaleria_vue_vue_type_style_index_0_id_a33ae71c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGaleria_vue_vue_type_style_index_0_id_a33ae71c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-a33ae71c]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-a33ae71c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-a33ae71c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-a33ae71c]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-a33ae71c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-a33ae71c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-a33ae71c]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-a33ae71c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-a33ae71c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-a33ae71c]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-a33ae71c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-a33ae71c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-a33ae71c],.use-text-paragraph[data-v-a33ae71c]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-a33ae71c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-a33ae71c]{display:none!important}}@media(max-width:1279px){.use-hidden-md-down[data-v-a33ae71c]{display:none!important}}@media(max-width:959px){.use-hidden-sm-down[data-v-a33ae71c]{display:none!important}}@media(max-width:599px){.use-hidden-xs-down[data-v-a33ae71c]{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up[data-v-a33ae71c]{display:none!important}}@media(min-width:960px){.use-hidden-md-up[data-v-a33ae71c]{display:none!important}}@media(min-width:600px){.use-hidden-sm-up[data-v-a33ae71c]{display:none!important}}.desc[data-v-a33ae71c]{padding:16px}.desc p[data-v-a33ae71c]{overflow:hidden;height:50px}.desc h6[data-v-a33ae71c]{font-family:\"Lato\",sans-serif!important;font-weight:var(--font-bold)}.desc .button[data-v-a33ae71c]{width:100%;border-width:2px}.rating i[data-v-a33ae71c]{color:#ffc107}.category-card[data-v-a33ae71c]{border-radius:16px;margin-bottom:8px;overflow:hidden;position:relative;text-transform:none!important;padding:0!important;background:var(--v-secondarylight-base);text-align:center;display:flex}.theme--light .category-card[data-v-a33ae71c]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .category-card[data-v-a33ae71c]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.category-card.v-btn--contained:not(.v-btn--round).v-size--default[data-v-a33ae71c]{height:190px}@media(max-width:599px){.category-card.v-btn--contained:not(.v-btn--round).v-size--default[data-v-a33ae71c]{height:120px}}.category-card[data-v-a33ae71c]  .v-btn__content{width:100%;height:100%;display:block}.category-card .figure[data-v-a33ae71c]{margin:0;display:block}[dir=ltr] .category-card .figure[data-v-a33ae71c]{margin-left:-2px}[dir=rtl] .category-card .figure[data-v-a33ae71c]{margin-right:-2px}.category-card .figure img[data-v-a33ae71c]{width:100%;position:relative}.card-wrap[data-v-a33ae71c],.testimonial[data-v-a33ae71c]{position:relative}.testimonial[data-v-a33ae71c]{height:260px;overflow:visible;border-radius:8px;border:3px solid;padding:32px 16px}.theme--light .testimonial[data-v-a33ae71c]{background-color:#fff}.theme--dark .testimonial[data-v-a33ae71c]{background-color:#424242}.theme--light .testimonial[data-v-a33ae71c]{border-color:rgba(0,0,0,.12)}.theme--dark .testimonial[data-v-a33ae71c]{border-color:hsla(0,0%,100%,.12)}@media(min-width:600px){.testimonial[data-v-a33ae71c]{padding:64px}}.testimonial .icon[data-v-a33ae71c]{border-Radius:20px;transform:rotate(45deg);background:var(--v-primary-base);width:70px;height:70px;top:-30px;position:absolute;text-align:center;line-height:100px}[dir=ltr] .testimonial .icon[data-v-a33ae71c]{left:32px}[dir=rtl] .testimonial .icon[data-v-a33ae71c]{right:32px}@media(max-width:599px){.testimonial .icon[data-v-a33ae71c]{display:none}}.testimonial .icon i[data-v-a33ae71c]{transform:rotate(-45deg);font-size:70px;vertical-align:top;color:#fff}.testimonial h6[data-v-a33ae71c]{font-weight:var(--font-bold)}.testimonial .text[data-v-a33ae71c]{margin-bottom:32px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;height:72px}.theme--light .caption-title[data-v-a33ae71c]{color:rgba(0,0,0,.54)}.theme--dark .caption-title[data-v-a33ae71c]{color:hsla(0,0%,100%,.7)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_13849be6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(234);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_13849be6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_13849be6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_13849be6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_13849be6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_13849be6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-13849be6]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-13849be6]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-13849be6]{font-size:28px;line-height:44px}}.use-text-title2[data-v-13849be6]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-13849be6]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-13849be6]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-13849be6]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-13849be6]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-13849be6]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-13849be6]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-13849be6]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-13849be6]{font-size:16px;line-height:24px}}.use-text-caption[data-v-13849be6],.use-text-paragraph[data-v-13849be6]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-13849be6]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-13849be6]{display:none!important}}@media(max-width:1279px){.use-hidden-md-down[data-v-13849be6]{display:none!important}}@media(max-width:959px){.use-hidden-sm-down[data-v-13849be6]{display:none!important}}@media(max-width:599px){.use-hidden-xs-down[data-v-13849be6]{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up[data-v-13849be6]{display:none!important}}@media(min-width:960px){.use-hidden-md-up[data-v-13849be6]{display:none!important}}@media(min-width:600px){.use-hidden-sm-up[data-v-13849be6]{display:none!important}}.title-main[data-v-13849be6]{margin-bottom:24px}[dir=ltr] .title-main.align-left[data-v-13849be6]{text-align:left}[dir=rtl] .title-main.align-left[data-v-13849be6]{text-align:right}[dir=ltr] .title-main.align-left h4[data-v-13849be6]:before{left:-4px}[dir=rtl] .title-main.align-left h4[data-v-13849be6]:before{right:-4px}[dir=ltr] .title-main.align-right[data-v-13849be6]{text-align:right}[dir=rtl] .title-main.align-right[data-v-13849be6]{text-align:left}[dir=ltr] .title-main.align-right h4[data-v-13849be6]:before{right:-4px}[dir=rtl] .title-main.align-right h4[data-v-13849be6]:before{left:-4px}.title-main.align-center[data-v-13849be6]{text-align:center}.title-main.align-center h4[data-v-13849be6]:before{width:80%}[dir=ltr] .title-main.align-center h4[data-v-13849be6]:before{left:10%}[dir=rtl] .title-main.align-center h4[data-v-13849be6]:before{right:10%}.title-main h4[data-v-13849be6]{text-transform:capitalize;margin-bottom:8px;position:relative;display:inline-block}.theme--light .title-main h4[data-v-13849be6]{color:rgba(0,0,0,.87)}.theme--dark .title-main h4[data-v-13849be6]{color:#fff}.title-main h4 span[data-v-13849be6]{position:relative}.theme--light .title-main h4.primary-color[data-v-13849be6]:before{background-color:var(--v-primarylight-base)}.theme--dark .title-main h4.primary-color[data-v-13849be6]:before{background-color:var(--v-primarydark-base)}.theme--light .title-main h4.secondary-color[data-v-13849be6]:before{background-color:var(--v-secondarylight-base)}.theme--dark .title-main h4.secondary-color[data-v-13849be6]:before{background-color:var(--v-secondarydark-base)}.title-main h4[data-v-13849be6]:before{content:\"\";height:15px;width:90%;position:absolute;bottom:10px;z-index:0}[dir=ltr] .title-main h4[data-v-13849be6]:before{left:0}[dir=rtl] .title-main h4[data-v-13849be6]:before{right:0}@media(max-width:599px){.title-main h4[data-v-13849be6]:before{height:8px}}.title-main.dark h4[data-v-13849be6]{color:#fff}.title-main.dark h4[data-v-13849be6]:before{background-color:hsla(0,0%,100%,.5)!important}.title-main.dark .desc[data-v-13849be6]{position:relative;color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/Title.vue?vue&type=template&id=13849be6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title-main",class:['align-' + _vm.align, { dark: _vm.dark }]},[_vm._ssrNode("<h4"+(_vm._ssrClass("use-text-title",_vm.color+'-color'))+" data-v-13849be6><span data-v-13849be6>"+_vm._ssrEscape("\n      "+_vm._s(_vm.head)+"\n    ")+"</span></h4> <p class=\"desc use-text-subtitle2\" data-v-13849be6>"+_vm._ssrEscape("\n    "+_vm._s(_vm.desc)+"\n  ")+"</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Title/Title.vue?vue&type=template&id=13849be6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/Title.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Titlevue_type_script_lang_js_ = ({
  props: {
    align: {
      type: String,
      default: 'left'
    },
    head: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/Title/Title.vue?vue&type=script&lang=js&
 /* harmony default export */ var Title_Titlevue_type_script_lang_js_ = (Titlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Title/Title.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(272)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Title_Titlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13849be6",
  "9096b832"
  
)

/* harmony default export */ var Title = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(292);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2065bca8", content, true)

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none!important}}@media(max-width:1279px){.use-hidden-md-down{display:none!important}}@media(max-width:959px){.use-hidden-sm-down{display:none!important}}@media(max-width:599px){.use-hidden-xs-down{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up{display:none!important}}@media(min-width:960px){.use-hidden-md-up{display:none!important}}@media(min-width:600px){.use-hidden-sm-up{display:none!important}}.v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(384);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4bf81c3f", content, true, context)
};

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VDialog_VDialog_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var _src_components_VDialog_VDialog_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VDialog_VDialog_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(216);
/* harmony import */ var _mixins_activatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _mixins_dependent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var _mixins_detachable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70);
/* harmony import */ var _mixins_overlayable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78);
/* harmony import */ var _mixins_returnable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77);
/* harmony import */ var _mixins_stackable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(0);
// Styles
 // Components

 // Mixins







 // Directives

 // Helpers




const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_mixins_activatable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_dependent__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_detachable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_overlayable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _mixins_returnable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], _mixins_stackable__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-dialog',
  directives: {
    ClickOutside: _directives_click_outside__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]
  },
  props: {
    dark: Boolean,
    disabled: Boolean,
    fullscreen: Boolean,
    light: Boolean,
    maxWidth: {
      type: [String, Number],
      default: 'none'
    },
    noClickAnimation: Boolean,
    origin: {
      type: String,
      default: 'center center'
    },
    persistent: Boolean,
    retainFocus: {
      type: Boolean,
      default: true
    },
    scrollable: Boolean,
    transition: {
      type: [String, Boolean],
      default: 'dialog-transition'
    },
    width: {
      type: [String, Number],
      default: 'auto'
    }
  },

  data() {
    return {
      activatedBy: null,
      animate: false,
      animateTimeout: -1,
      isActive: !!this.value,
      stackMinZIndex: 200
    };
  },

  computed: {
    classes() {
      return {
        [`v-dialog ${this.contentClass}`.trim()]: true,
        'v-dialog--active': this.isActive,
        'v-dialog--persistent': this.persistent,
        'v-dialog--fullscreen': this.fullscreen,
        'v-dialog--scrollable': this.scrollable,
        'v-dialog--animated': this.animate
      };
    },

    contentClasses() {
      return {
        'v-dialog__content': true,
        'v-dialog__content--active': this.isActive
      };
    },

    hasActivator() {
      return Boolean(!!this.$slots.activator || !!this.$scopedSlots.activator);
    }

  },
  watch: {
    isActive(val) {
      if (val) {
        this.show();
        this.hideScroll();
      } else {
        this.removeOverlay();
        this.unbind();
      }
    },

    fullscreen(val) {
      if (!this.isActive) return;

      if (val) {
        this.hideScroll();
        this.removeOverlay(false);
      } else {
        this.showScroll();
        this.genOverlay();
      }
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('full-width')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_11__[/* removed */ "e"])('full-width', this);
    }
  },

  beforeMount() {
    this.$nextTick(() => {
      this.isBooted = this.isActive;
      this.isActive && this.show();
    });
  },

  beforeDestroy() {
    if (typeof window !== 'undefined') this.unbind();
  },

  methods: {
    animateClick() {
      this.animate = false; // Needed for when clicking very fast
      // outside of the dialog

      this.$nextTick(() => {
        this.animate = true;
        window.clearTimeout(this.animateTimeout);
        this.animateTimeout = window.setTimeout(() => this.animate = false, 150);
      });
    },

    closeConditional(e) {
      const target = e.target; // Ignore the click if the dialog is closed or destroyed,
      // if it was on an element inside the content,
      // if it was dragged onto the overlay (#6969),
      // or if this isn't the topmost dialog (#9907)

      return !(this._isDestroyed || !this.isActive || this.$refs.content.contains(target) || this.overlay && target && !this.overlay.$el.contains(target)) && this.activeZIndex >= this.getMaxZIndex();
    },

    hideScroll() {
      if (this.fullscreen) {
        document.documentElement.classList.add('overflow-y-hidden');
      } else {
        _mixins_overlayable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].options.methods.hideScroll.call(this);
      }
    },

    show() {
      !this.fullscreen && !this.hideOverlay && this.genOverlay();
      this.$nextTick(() => {
        this.$refs.content.focus();
        this.bind();
      });
    },

    bind() {
      window.addEventListener('focusin', this.onFocusin);
    },

    unbind() {
      window.removeEventListener('focusin', this.onFocusin);
    },

    onClickOutside(e) {
      this.$emit('click:outside', e);

      if (this.persistent) {
        this.noClickAnimation || this.animateClick();
      } else {
        this.isActive = false;
      }
    },

    onKeydown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_12__[/* keyCodes */ "p"].esc && !this.getOpenDependents().length) {
        if (!this.persistent) {
          this.isActive = false;
          const activator = this.getActivator();
          this.$nextTick(() => activator && activator.focus());
        } else if (!this.noClickAnimation) {
          this.animateClick();
        }
      }

      this.$emit('keydown', e);
    },

    // On focus change, wrap focus to stay inside the dialog
    // https://github.com/vuetifyjs/vuetify/issues/6892
    onFocusin(e) {
      if (!e || !this.retainFocus) return;
      const target = e.target;

      if (!!target && // It isn't the document or the dialog body
      ![document, this.$refs.content].includes(target) && // It isn't inside the dialog body
      !this.$refs.content.contains(target) && // We're the topmost dialog
      this.activeZIndex >= this.getMaxZIndex() && // It isn't inside a dependent element (like a menu)
      !this.getOpenDependentElements().some(el => el.contains(target)) // So we must have focused something outside the dialog and its children
      ) {
          // Find and focus the first available element inside the dialog
          const focusable = this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          const el = [...focusable].find(el => !el.hasAttribute('disabled'));
          el && el.focus();
        }
    },

    genContent() {
      return this.showLazyContent(() => [this.$createElement(_VThemeProvider__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        props: {
          root: true,
          light: this.light,
          dark: this.dark
        }
      }, [this.$createElement('div', {
        class: this.contentClasses,
        attrs: {
          role: 'document',
          tabindex: this.isActive ? 0 : undefined,
          ...this.getScopeIdAttrs()
        },
        on: {
          keydown: this.onKeydown
        },
        style: {
          zIndex: this.activeZIndex
        },
        ref: 'content'
      }, [this.genTransition()])])]);
    },

    genTransition() {
      const content = this.genInnerContent();
      if (!this.transition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.transition,
          origin: this.origin,
          appear: true
        }
      }, [content]);
    },

    genInnerContent() {
      const data = {
        class: this.classes,
        ref: 'dialog',
        directives: [{
          name: 'click-outside',
          value: {
            handler: this.onClickOutside,
            closeConditional: this.closeConditional,
            include: this.getOpenDependentElements
          }
        }, {
          name: 'show',
          value: this.isActive
        }],
        style: {
          transformOrigin: this.origin
        }
      };

      if (!this.fullscreen) {
        data.style = { ...data.style,
          maxWidth: this.maxWidth === 'none' ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_12__[/* convertToUnit */ "f"])(this.maxWidth),
          width: this.width === 'auto' ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_12__[/* convertToUnit */ "f"])(this.width)
        };
      }

      return this.$createElement('div', data, this.getContentSlot());
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-dialog__container',
      class: {
        'v-dialog__container--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      },
      attrs: {
        role: 'dialog'
      }
    }, [this.genActivator(), this.genContent()]);
  }

}));

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EspacioVideos_vue_vue_type_style_index_0_id_b340ce4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(323);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EspacioVideos_vue_vue_type_style_index_0_id_b340ce4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EspacioVideos_vue_vue_type_style_index_0_id_b340ce4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EspacioVideos_vue_vue_type_style_index_0_id_b340ce4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EspacioVideos_vue_vue_type_style_index_0_id_b340ce4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EspacioVideos_vue_vue_type_style_index_0_id_b340ce4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-b340ce4c]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-b340ce4c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-b340ce4c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-b340ce4c]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-b340ce4c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-b340ce4c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-b340ce4c]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-b340ce4c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-b340ce4c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-b340ce4c]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-b340ce4c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-b340ce4c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-b340ce4c],.use-text-paragraph[data-v-b340ce4c]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-b340ce4c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-b340ce4c]{display:none!important}}@media(max-width:1279px){.use-hidden-md-down[data-v-b340ce4c]{display:none!important}}@media(max-width:959px){.use-hidden-sm-down[data-v-b340ce4c]{display:none!important}}@media(max-width:599px){.use-hidden-xs-down[data-v-b340ce4c]{display:none!important}}@media(min-width:1280px){.use-hidden-lg-up[data-v-b340ce4c]{display:none!important}}@media(min-width:960px){.use-hidden-md-up[data-v-b340ce4c]{display:none!important}}@media(min-width:600px){.use-hidden-sm-up[data-v-b340ce4c]{display:none!important}}.root1[data-v-b340ce4c]{background:url(/images/agency/bg-pattern.png) repeat var(--v-primarydark-base);background-size:10%;position:relative;color:#fff;padding:80px 0}@media(max-width:599px){.root1[data-v-b340ce4c]{text-align:center;padding:24px 0}}.root1 p[data-v-b340ce4c]{margin-bottom:40px}.root1 .v-btn.white[data-v-b340ce4c]{min-width:180px;font-size:18px;color:var(--v-primarydark-base)!important}.root[data-v-b340ce4c]{background:url(/images/agency/bg-pattern.png) repeat var(--v-primarydark-base);background-size:10%;position:relative;color:#fff;padding:80px 0}@media(max-width:599px){.root[data-v-b340ce4c]{text-align:center;padding:24px 0}}.root p[data-v-b340ce4c]{margin-bottom:40px}.root .v-btn.white[data-v-b340ce4c]{min-width:180px;font-size:18px;color:var(--v-primarydark-base)!important}.illu-wrap[data-v-b340ce4c]{position:static}@media(max-width:959px){.illu-wrap[data-v-b340ce4c]{display:none}}.illustration[data-v-b340ce4c]{margin-top:20px;box-shadow:0 0 18px 0 rgba(0,0,0,.17);position:absolute;border:15px solid var(--v-primary-base);background:var(--v-primary-base);border-radius:25px;transform:rotate(45deg);overflow:hidden}.illustration img[data-v-b340ce4c]{height:105%}.v-application--is-ltr .illustration img[data-v-b340ce4c]{transform:translateX(-20%) rotate(-45deg) scale(1.3)}.v-application--is-rtl .illustration img[data-v-b340ce4c]{transform:translateX(20%) rotate(-45deg) scale(1.3)}.illustration.one[data-v-b340ce4c]{border-radius:15px;width:60px;height:60px;top:-10px}[dir=ltr] .illustration.one[data-v-b340ce4c]{left:100px}[dir=rtl] .illustration.one[data-v-b340ce4c]{right:100px}.illustration.two[data-v-b340ce4c]{width:180px;height:180px;top:-10px}[dir=ltr] .illustration.two[data-v-b340ce4c]{left:300px}[dir=rtl] .illustration.two[data-v-b340ce4c]{right:300px}.illustration.three[data-v-b340ce4c]{width:160px;height:160px;top:130px;left:50px}[dir=ltr] .illustration.three[data-v-b340ce4c]{left:50px}[dir=rtl] .illustration.three[data-v-b340ce4c]{right:50px}.illustration.four[data-v-b340ce4c]{width:210px;height:210px;bottom:-40px;left:250px}[dir=ltr] .illustration.four[data-v-b340ce4c]{left:250px}[dir=rtl] .illustration.four[data-v-b340ce4c]{right:250px}.illustration.five[data-v-b340ce4c]{border-radius:15px;width:60px;height:60px;bottom:-30px}[dir=ltr] .illustration.five[data-v-b340ce4c]{right:10px}[dir=rtl] .illustration.five[data-v-b340ce4c]{left:10px}.title-primary[data-v-b340ce4c]{font-size:48px;line-height:62px;font-family:\"Roboto Condensed\";text-transform:capitalize;font-weight:700;margin-bottom:64px;position:relative}.theme--dark .title-primary[data-v-b340ce4c]{color:var(--v-primarylight-base)}.theme--light .title-primary[data-v-b340ce4c]{color:var(--v-primarydark-base)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/EspacioVideos.vue?vue&type=template&id=b340ce4c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"main-wrap\" data-v-b340ce4c>","</div>",[_c('main-header'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-wrap\" data-v-b340ce4c>","</div>",[_c('square-parallax'),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"home\" data-v-b340ce4c>","</section>",[_c('video-banner',{attrs:{"img":_vm.url_base+ _vm.imgFotoEspacio}})],1),_vm._ssrNode(" "),_vm._ssrNode("<section data-v-b340ce4c>","</section>",[_c('v-container',[_c('div',{},[_c('h4',{staticClass:"title-primary"},[_vm._v("\n                Videos\n                ")])])]),_vm._ssrNode(" "),_c('v-container',{class:{ 'fixed-width': _vm.mdUp }},[_c('div',{staticClass:"massonry"},[_c('v-row',_vm._l((_vm.itemvideos),function(item){return _c('v-col',{key:item.id_videoventoespacio,staticClass:"pa-sm-6 pa-2",attrs:{"cols":"6","lg":"4","sm":"6"}},[_c('div',[_c('card-galeria',{attrs:{"bg":"/images/youtubeone.png","title":item.nombre_video,"size":"mediun","show-img":function () { return _vm.handleVideoOpen(item.idvideo); }}})],1)])}),1)],1)])],2),_vm._ssrNode(" <br data-v-b340ce4c><br data-v-b340ce4c><br data-v-b340ce4c> <br data-v-b340ce4c><br data-v-b340ce4c><br data-v-b340ce4c> <br data-v-b340ce4c><br data-v-b340ce4c>")],2),_vm._ssrNode(" "),_c('hidden',{attrs:{"point":"mdDown"}},[_c('page-nav')],1),_vm._ssrNode(" "),_c('main-footer')],2),_vm._ssrNode(" "),_c('v-dialog',{attrs:{"max-width":"690"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',{staticClass:"video-popup"},[_c('v-card-title',{staticClass:"headline"},[_c('h2',{staticClass:"title-main"},[_vm._v("\n           video\n          "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){return _vm.handleVideoClose()}}},[_c('v-icon',[_vm._v("mdi-close")])],1)],1)]),_vm._v(" "),(_vm.yt)?_c('div',{staticClass:"text-center"},[_c('youtube',{ref:"youtube",attrs:{"video-id":_vm.videoId,"player-vars":_vm.playerVars,"width":640,"height":360}})],1):_vm._e()],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/EspacioVideos.vue?vue&type=template&id=b340ce4c&scoped=true&

// EXTERNAL MODULE: ./components/Header/index.js + 26 modules
var Header = __webpack_require__(73);

// EXTERNAL MODULE: ./components/Parallax/Square.vue + 4 modules
var Square = __webpack_require__(265);

// EXTERNAL MODULE: ./components/VideoBanner/index.js + 5 modules
var VideoBanner = __webpack_require__(264);

// EXTERNAL MODULE: ./components/About/index.js + 9 modules
var About = __webpack_require__(262);

// EXTERNAL MODULE: ./components/CallAction/index.js + 5 modules
var CallAction = __webpack_require__(269);

// EXTERNAL MODULE: ./components/Footer/index.js + 5 modules
var Footer = __webpack_require__(74);

// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(229);

// EXTERNAL MODULE: ./components/PageNav/index.js + 6 modules
var PageNav = __webpack_require__(263);

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(30);

// EXTERNAL MODULE: ./static/images/imgAPI.js
var imgAPI = __webpack_require__(230);

// EXTERNAL MODULE: ./components/Title/Title.vue + 4 modules
var Title = __webpack_require__(274);

// EXTERNAL MODULE: ./components/Cards/CardGaleria.vue + 4 modules
var CardGaleria = __webpack_require__(266);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(23);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./youtube.js
var youtube = __webpack_require__(235);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/EspacioVideos.vue?vue&type=script&lang=js&
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







 //import Notification from '~/components/Notification'
//import DotsParallax from '~/components/Parallax/Dots'








/* harmony default export */ var EspacioVideosvue_type_script_lang_js_ = ({
  components: {
    'main-header': Header["a" /* default */],
    SquareParallax: Square["a" /* default */],
    VideoBanner: VideoBanner["a" /* default */],
    About: About["a" /* default */],
    'title-main': Title["a" /* default */],
    CallAction: CallAction["a" /* default */],
    PageNav: PageNav["a" /* default */],
    Hidden: Hidden["a" /* default */],
    CardGaleria: CardGaleria["a" /* default */],
    'main-footer': Footer["a" /* default */]
  },
  computed: { ...Object(external_vuex_["mapState"])(["url_base"]),

    isTablet() {
      return this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown'; // eslint-disable-line
    },

    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown';
    },

    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl';
    },

    isDesktop() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl';
    },

    imgs() {
      const arr = [];
      this.itemFotosEspacios.map(item => {
        arr.push(this.url_base + item.photo);
      });
      return arr;
    }

  },

  data() {
    return {
      dialog: false,
      yt: youtube["a" /* default */],
      loaded: false,
      videoId: '6p0VM-yUpGk',
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'http://localhost:8001'
      },
      imgFotoEspacio: '',
      NombreEspacio: '',
      idespacio: 0,
      itemvideos: [],
      imgAPI: imgAPI["a" /* default */],
      imagnes_uno: '/images/DSC00695.JPG',
      imagnes_dos: '/images/isc lima - Isaac Peñaherrera.jpg',
      objetivo: 'Replantear los principios de las identidades juveniles hacia la toma de decisiones con respecto a la situación que atraviesa sus barrios, mediante  las prácticas y saberes de las culturas urbanas y ancestrales.'
    };
  },

  mounted() {
    this.loaded = true; //  this.ListEspacios();

    this.idespacio = this.$route.params.id;

    if (this.idespacio) {
      this.ListVideo(this.idespacio);
      localStorage.setItem("idespacio", this.idespacio); // this.SentVisitante(this.idespacio)

      this.InfoEspacio(this.idespacio);
      this.SentVisitante(this.idespacio);
    } else if (this.idespacio == undefined) {
      this.idespacio = localStorage.getItem('idespacio');
      this.ListVideo(this.idespacio); //  this.SentVisitante(this.idespacio)

      this.InfoEspacio(this.idespacio);
      this.SentVisitante(this.idespacio);
    }
  },

  methods: {
    SentVisitante(idpescio) {
      let me = this;
      let model = {
        id_espacio: idpescio
      };
      const data = model;
      let url = me.url_base + "Control/Visitante.php";
      external_axios_default()({
        method: "POST",
        url: url,
        data: data
      }).then(function (response) {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    },

    InfoEspacio(id_espacio) {
      let me = this;
      let url = me.url_base + "Control/espacioList.php?id_espacio=" + id_espacio;
      external_axios_default()({
        method: 'GET',
        url: url
      }).then(function (response) {
        me.imgFotoEspacio = response.data.result.photo;
        me.NombreEspacio = response.data.result.nombre_espacio; //   me.VisionEspacio = response.data.result.vision
        //   me.MisonEspacio = response.data.result.mision
        //me.ojetivo = response.data.result.objetivo
        // me.historia = response.data.result.historia
      }).catch(error => {
        console.log(error);
      });
    },

    handleVideoOpen(id) {
      this.videoId = id;
      this.dialog = true;

      if (this.yt.use) {
        setTimeout(() => {
          this.player = this.$refs.youtube.player;
          this.player.playVideo();
        }, 100);
      }
    },

    handleVideoClose() {
      this.dialog = false;
      this.player.pauseVideo();
    },

    ListVideo(id) {
      let me = this;
      var tipo = "videos";
      let url = this.url_base + "Control/PeticionesPagina.php?idespacio=" + id + "&tipodatos=" + tipo;
      external_axios_default()({
        method: "GET",
        url: url
      }).then(function (response) {
        //  console.log(response)
        me.itemvideos = response.data.result;
      }).catch(erro => {
        console.log(error);
      });
    }

  },

  head() {
    return {
      title: 'NinashunKu' + this.NombreEspacio + ' - Videos'
    };
  }

});
// CONCATENATED MODULE: ./pages/EspacioVideos.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_EspacioVideosvue_type_script_lang_js_ = (EspacioVideosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(220);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(328);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(218);

// CONCATENATED MODULE: ./pages/EspacioVideos.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(383)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_EspacioVideosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b340ce4c",
  "396987c1"
  
)

/* harmony default export */ var EspacioVideos = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardTitle: components_VCard["c" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDialog: VDialog["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=EspacioVideos.js.map