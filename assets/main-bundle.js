/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_sass/main.scss":
/*!*************************!*\
  !*** ./_sass/main.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./_sass/main.scss?");

/***/ }),

/***/ "./_sass/tailwind.scss":
/*!*****************************!*\
  !*** ./_sass/tailwind.scss ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./_sass/tailwind.scss?");

/***/ }),

/***/ "./node_modules/anchor-js/anchor.js":
/*!******************************************!*\
  !*** ./node_modules/anchor-js/anchor.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-env amd */\n/* globals module:false */\n\n// https://github.com/umdjs/umd/blob/master/templates/returnExports.js\n(function (root, factory) {\n  'use strict';\n\n  if (true) {\n    // AMD. Register as an anonymous module.\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n}(this, function () {\n  'use strict';\n\n  function AnchorJS(options) {\n    this.options = options || {};\n    this.elements = [];\n\n    /**\n     * Assigns options to the internal options object, and provides defaults.\n     * @param {Object} opts - Options object\n     */\n    function _applyRemainingDefaultOptions(opts) {\n      opts.icon = Object.prototype.hasOwnProperty.call(opts, 'icon') ? opts.icon : '\\uE9CB'; // Accepts characters (and also URLs?), like  '#', '¶', '❡', or '§'.\n      opts.visible = Object.prototype.hasOwnProperty.call(opts, 'visible') ? opts.visible : 'hover'; // Also accepts 'always' & 'touch'\n      opts.placement = Object.prototype.hasOwnProperty.call(opts, 'placement') ? opts.placement : 'right'; // Also accepts 'left'\n      opts.ariaLabel = Object.prototype.hasOwnProperty.call(opts, 'ariaLabel') ? opts.ariaLabel : 'Anchor'; // Accepts any text.\n      opts.class = Object.prototype.hasOwnProperty.call(opts, 'class') ? opts.class : ''; // Accepts any class name.\n      opts.base = Object.prototype.hasOwnProperty.call(opts, 'base') ? opts.base : ''; // Accepts any base URI.\n      // Using Math.floor here will ensure the value is Number-cast and an integer.\n      opts.truncate = Object.prototype.hasOwnProperty.call(opts, 'truncate') ? Math.floor(opts.truncate) : 64; // Accepts any value that can be typecast to a number.\n      opts.titleText = Object.prototype.hasOwnProperty.call(opts, 'titleText') ? opts.titleText : ''; // Accepts any text.\n    }\n\n    _applyRemainingDefaultOptions(this.options);\n\n    /**\n     * Checks to see if this device supports touch. Uses criteria pulled from Modernizr:\n     * https://github.com/Modernizr/Modernizr/blob/da22eb27631fc4957f67607fe6042e85c0a84656/feature-detects/touchevents.js#L40\n     * @return {Boolean} - true if the current device supports touch.\n     */\n    this.isTouchDevice = function() {\n      return Boolean('ontouchstart' in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch);\n    };\n\n    /**\n     * Add anchor links to page elements.\n     * @param  {String|Array|Nodelist} selector - A CSS selector for targeting the elements you wish to add anchor links\n     *                                            to. Also accepts an array or nodeList containing the relavant elements.\n     * @return {this}                           - The AnchorJS object\n     */\n    this.add = function(selector) {\n      var elements,\n          elsWithIds,\n          idList,\n          elementID,\n          i,\n          index,\n          count,\n          tidyText,\n          newTidyText,\n          anchor,\n          visibleOptionToUse,\n          hrefBase,\n          indexesToDrop = [];\n\n      // We reapply options here because somebody may have overwritten the default options object when setting options.\n      // For example, this overwrites all options but visible:\n      //\n      // anchors.options = { visible: 'always'; }\n      _applyRemainingDefaultOptions(this.options);\n\n      visibleOptionToUse = this.options.visible;\n      if (visibleOptionToUse === 'touch') {\n        visibleOptionToUse = this.isTouchDevice() ? 'always' : 'hover';\n      }\n\n      // Provide a sensible default selector, if none is given.\n      if (!selector) {\n        selector = 'h2, h3, h4, h5, h6';\n      }\n\n      elements = _getElements(selector);\n\n      if (elements.length === 0) {\n        return this;\n      }\n\n      _addBaselineStyles();\n\n      // We produce a list of existing IDs so we don't generate a duplicate.\n      elsWithIds = document.querySelectorAll('[id]');\n      idList = [].map.call(elsWithIds, function(el) {\n        return el.id;\n      });\n\n      for (i = 0; i < elements.length; i++) {\n        if (this.hasAnchorJSLink(elements[i])) {\n          indexesToDrop.push(i);\n          continue;\n        }\n\n        if (elements[i].hasAttribute('id')) {\n          elementID = elements[i].getAttribute('id');\n        } else if (elements[i].hasAttribute('data-anchor-id')) {\n          elementID = elements[i].getAttribute('data-anchor-id');\n        } else {\n          tidyText = this.urlify(elements[i].textContent);\n\n          // Compare our generated ID to existing IDs (and increment it if needed)\n          // before we add it to the page.\n          newTidyText = tidyText;\n          count = 0;\n          do {\n            if (index !== undefined) {\n              newTidyText = tidyText + '-' + count;\n            }\n\n            index = idList.indexOf(newTidyText);\n            count += 1;\n          } while (index !== -1);\n\n          index = undefined;\n          idList.push(newTidyText);\n\n          elements[i].setAttribute('id', newTidyText);\n          elementID = newTidyText;\n        }\n\n        // The following code efficiently builds this DOM structure:\n        // `<a class=\"anchorjs-link ${this.options.class}\"\n        //     aria-label=\"${this.options.ariaLabel}\"\n        //     data-anchorjs-icon=\"${this.options.icon}\"\n        //     title=\"${this.options.titleText}\"\n        //     href=\"this.options.base#${elementID}\">\n        // </a>;`\n        anchor = document.createElement('a');\n        anchor.className = 'anchorjs-link ' + this.options.class;\n        anchor.setAttribute('aria-label', this.options.ariaLabel);\n        anchor.setAttribute('data-anchorjs-icon', this.options.icon);\n        if (this.options.titleText) {\n          anchor.title = this.options.titleText;\n        }\n\n        // Adjust the href if there's a <base> tag. See https://github.com/bryanbraun/anchorjs/issues/98\n        hrefBase = document.querySelector('base') ? window.location.pathname + window.location.search : '';\n        hrefBase = this.options.base || hrefBase;\n        anchor.href = hrefBase + '#' + elementID;\n\n        if (visibleOptionToUse === 'always') {\n          anchor.style.opacity = '1';\n        }\n\n        if (this.options.icon === '\\uE9CB') {\n          anchor.style.font = '1em/1 anchorjs-icons';\n\n          // We set lineHeight = 1 here because the `anchorjs-icons` font family could otherwise affect the\n          // height of the heading. This isn't the case for icons with `placement: left`, so we restore\n          // line-height: inherit in that case, ensuring they remain positioned correctly. For more info,\n          // see https://github.com/bryanbraun/anchorjs/issues/39.\n          if (this.options.placement === 'left') {\n            anchor.style.lineHeight = 'inherit';\n          }\n        }\n\n        if (this.options.placement === 'left') {\n          anchor.style.position = 'absolute';\n          anchor.style.marginLeft = '-1em';\n          anchor.style.paddingRight = '.5em';\n          elements[i].insertBefore(anchor, elements[i].firstChild);\n        } else { // if the option provided is `right` (or anything else).\n          anchor.style.paddingLeft = '.375em';\n          elements[i].appendChild(anchor);\n        }\n      }\n\n      for (i = 0; i < indexesToDrop.length; i++) {\n        elements.splice(indexesToDrop[i] - i, 1);\n      }\n\n      this.elements = this.elements.concat(elements);\n\n      return this;\n    };\n\n    /**\n     * Removes all anchorjs-links from elements targeted by the selector.\n     * @param  {String|Array|Nodelist} selector - A CSS selector string targeting elements with anchor links,\n     *                                            OR a nodeList / array containing the DOM elements.\n     * @return {this}                           - The AnchorJS object\n     */\n    this.remove = function(selector) {\n      var index,\n          domAnchor,\n          elements = _getElements(selector);\n\n      for (var i = 0; i < elements.length; i++) {\n        domAnchor = elements[i].querySelector('.anchorjs-link');\n        if (domAnchor) {\n          // Drop the element from our main list, if it's in there.\n          index = this.elements.indexOf(elements[i]);\n          if (index !== -1) {\n            this.elements.splice(index, 1);\n          }\n\n          // Remove the anchor from the DOM.\n          elements[i].removeChild(domAnchor);\n        }\n      }\n\n      return this;\n    };\n\n    /**\n     * Removes all anchorjs links. Mostly used for tests.\n     */\n    this.removeAll = function() {\n      this.remove(this.elements);\n    };\n\n    /**\n     * Urlify - Refine text so it makes a good ID.\n     *\n     * To do this, we remove apostrophes, replace non-safe characters with hyphens,\n     * remove extra hyphens, truncate, trim hyphens, and make lowercase.\n     *\n     * @param  {String} text - Any text. Usually pulled from the webpage element we are linking to.\n     * @return {String}      - hyphen-delimited text for use in IDs and URLs.\n     */\n    this.urlify = function(text) {\n      // Decode HTML characters such as '&nbsp;' first.\n      var textareaElement = document.createElement('textarea');\n      textareaElement.innerHTML = text;\n      text = textareaElement.value;\n\n      // Regex for finding the non-safe URL characters (many need escaping):\n      //   & +$,:;=?@\"#{}|^~[`%!'<>]./()*\\ (newlines, tabs, backspace, vertical tabs, and non-breaking space)\n      var nonsafeChars = /[& +$,:;=?@\"#{}|^~[`%!'<>\\]./()*\\\\\\n\\t\\b\\v\\u00A0]/g;\n\n      // The reason we include this _applyRemainingDefaultOptions is so urlify can be called independently,\n      // even after setting options. This can be useful for tests or other applications.\n      if (!this.options.truncate) {\n        _applyRemainingDefaultOptions(this.options);\n      }\n\n      // Note: we trim hyphens after truncating because truncating can cause dangling hyphens.\n      // Example string:                      // \" ⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean.\"\n      return text.trim()                      // \"⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean.\"\n        .replace(/'/gi, '')                   // \"⚡⚡ Dont forget: URL fragments should be i18n-friendly, hyphenated, short, and clean.\"\n        .replace(nonsafeChars, '-')           // \"⚡⚡-Dont-forget--URL-fragments-should-be-i18n-friendly--hyphenated--short--and-clean-\"\n        .replace(/-{2,}/g, '-')               // \"⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-short-and-clean-\"\n        .substring(0, this.options.truncate)  // \"⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-\"\n        .replace(/^-+|-+$/gm, '')             // \"⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated\"\n        .toLowerCase();                       // \"⚡⚡-dont-forget-url-fragments-should-be-i18n-friendly-hyphenated\"\n    };\n\n    /**\n     * Determines if this element already has an AnchorJS link on it.\n     * Uses this technique: https://stackoverflow.com/a/5898748/1154642\n     * @param    {HTMLElement}  el - a DOM node\n     * @return   {Boolean}     true/false\n     */\n    this.hasAnchorJSLink = function(el) {\n      var hasLeftAnchor = el.firstChild && (' ' + el.firstChild.className + ' ').indexOf(' anchorjs-link ') > -1,\n          hasRightAnchor = el.lastChild && (' ' + el.lastChild.className + ' ').indexOf(' anchorjs-link ') > -1;\n\n      return hasLeftAnchor || hasRightAnchor || false;\n    };\n\n    /**\n     * Turns a selector, nodeList, or array of elements into an array of elements (so we can use array methods).\n     * It also throws errors on any other inputs. Used to handle inputs to .add and .remove.\n     * @param  {String|Array|Nodelist} input - A CSS selector string targeting elements with anchor links,\n     *                                         OR a nodeList / array containing the DOM elements.\n     * @return {Array} - An array containing the elements we want.\n     */\n    function _getElements(input) {\n      var elements;\n      if (typeof input === 'string' || input instanceof String) {\n        // See https://davidwalsh.name/nodelist-array for the technique transforming nodeList -> Array.\n        elements = [].slice.call(document.querySelectorAll(input));\n      // I checked the 'input instanceof NodeList' test in IE9 and modern browsers and it worked for me.\n      } else if (Array.isArray(input) || input instanceof NodeList) {\n        elements = [].slice.call(input);\n      } else {\n        throw new TypeError('The selector provided to AnchorJS was invalid.');\n      }\n\n      return elements;\n    }\n\n    /**\n     * _addBaselineStyles\n     * Adds baseline styles to the page, used by all AnchorJS links irregardless of configuration.\n     */\n    function _addBaselineStyles() {\n      // We don't want to add global baseline styles if they've been added before.\n      if (document.head.querySelector('style.anchorjs') !== null) {\n        return;\n      }\n\n      var style = document.createElement('style'),\n          linkRule =\n          '.anchorjs-link{'                        +\n            'opacity:0;'                           +\n            'text-decoration:none;'                +\n            '-webkit-font-smoothing:antialiased;'  +\n            '-moz-osx-font-smoothing:grayscale'    +\n          '}',\n          hoverRule =\n          ':hover>.anchorjs-link,'                 +\n          '.anchorjs-link:focus{'                  +\n            'opacity:1'                            +\n          '}',\n          anchorjsLinkFontFace =\n          '@font-face{'                            +\n            'font-family:anchorjs-icons;'          + // Icon from icomoon; 10px wide & 10px tall; 2 empty below & 4 above\n            'src:url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format(\"truetype\")' +\n          '}',\n          pseudoElContent =\n          '[data-anchorjs-icon]::after{'           +\n            'content:attr(data-anchorjs-icon)'     +\n          '}',\n          firstStyleEl;\n\n      style.className = 'anchorjs';\n      style.appendChild(document.createTextNode('')); // Necessary for Webkit.\n\n      // We place it in the head with the other style tags, if possible, so as to\n      // not look out of place. We insert before the others so these styles can be\n      // overridden if necessary.\n      firstStyleEl = document.head.querySelector('[rel=\"stylesheet\"],style');\n      if (firstStyleEl === undefined) {\n        document.head.appendChild(style);\n      } else {\n        document.head.insertBefore(style, firstStyleEl);\n      }\n\n      style.sheet.insertRule(linkRule, style.sheet.cssRules.length);\n      style.sheet.insertRule(hoverRule, style.sheet.cssRules.length);\n      style.sheet.insertRule(pseudoElContent, style.sheet.cssRules.length);\n      style.sheet.insertRule(anchorjsLinkFontFace, style.sheet.cssRules.length);\n    }\n  }\n\n  return AnchorJS;\n}));\n\n\n//# sourceURL=webpack:///./node_modules/anchor-js/anchor.js?");

/***/ }),

/***/ "./node_modules/simple-jekyll-search/dest/simple-jekyll-search.js":
/*!************************************************************************!*\
  !*** ./node_modules/simple-jekyll-search/dest/simple-jekyll-search.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n  * Simple-Jekyll-Search\n  * Copyright 2015-2020, Christian Fei\n  * Licensed under the MIT License.\n  */\n\n(function(){\n'use strict'\n\nvar _$Templater_7 = {\n  compile: compile,\n  setOptions: setOptions\n}\n\nconst options = {}\noptions.pattern = /\\{(.*?)\\}/g\noptions.template = ''\noptions.middleware = function () {}\n\nfunction setOptions (_options) {\n  options.pattern = _options.pattern || options.pattern\n  options.template = _options.template || options.template\n  if (typeof _options.middleware === 'function') {\n    options.middleware = _options.middleware\n  }\n}\n\nfunction compile (data) {\n  return options.template.replace(options.pattern, function (match, prop) {\n    const value = options.middleware(prop, data[prop], options.template)\n    if (typeof value !== 'undefined') {\n      return value\n    }\n    return data[prop] || match\n  })\n}\n\n'use strict';\n\nfunction fuzzysearch (needle, haystack) {\n  var tlen = haystack.length;\n  var qlen = needle.length;\n  if (qlen > tlen) {\n    return false;\n  }\n  if (qlen === tlen) {\n    return needle === haystack;\n  }\n  outer: for (var i = 0, j = 0; i < qlen; i++) {\n    var nch = needle.charCodeAt(i);\n    while (j < tlen) {\n      if (haystack.charCodeAt(j++) === nch) {\n        continue outer;\n      }\n    }\n    return false;\n  }\n  return true;\n}\n\nvar _$fuzzysearch_1 = fuzzysearch;\n\n'use strict'\n\n/* removed: const _$fuzzysearch_1 = require('fuzzysearch') */;\n\nvar _$FuzzySearchStrategy_5 = new FuzzySearchStrategy()\n\nfunction FuzzySearchStrategy () {\n  this.matches = function (string, crit) {\n    return _$fuzzysearch_1(crit.toLowerCase(), string.toLowerCase())\n  }\n}\n\n'use strict'\n\nvar _$LiteralSearchStrategy_6 = new LiteralSearchStrategy()\n\nfunction LiteralSearchStrategy () {\n  this.matches = function (str, crit) {\n    if (!str) return false\n\n    str = str.trim().toLowerCase()\n    crit = crit.trim().toLowerCase()\n\n    return crit.split(' ').filter(function (word) {\n      return str.indexOf(word) >= 0\n    }).length === crit.split(' ').length\n  }\n}\n\n'use strict'\n\nvar _$Repository_4 = {\n  put: put,\n  clear: clear,\n  search: search,\n  setOptions: __setOptions_4\n}\n\n/* removed: const _$FuzzySearchStrategy_5 = require('./SearchStrategies/FuzzySearchStrategy') */;\n/* removed: const _$LiteralSearchStrategy_6 = require('./SearchStrategies/LiteralSearchStrategy') */;\n\nfunction NoSort () {\n  return 0\n}\n\nconst data = []\nlet opt = {}\n\nopt.fuzzy = false\nopt.limit = 10\nopt.searchStrategy = opt.fuzzy ? _$FuzzySearchStrategy_5 : _$LiteralSearchStrategy_6\nopt.sort = NoSort\nopt.exclude = []\n\nfunction put (data) {\n  if (isObject(data)) {\n    return addObject(data)\n  }\n  if (isArray(data)) {\n    return addArray(data)\n  }\n  return undefined\n}\nfunction clear () {\n  data.length = 0\n  return data\n}\n\nfunction isObject (obj) {\n  return Boolean(obj) && Object.prototype.toString.call(obj) === '[object Object]'\n}\n\nfunction isArray (obj) {\n  return Boolean(obj) && Object.prototype.toString.call(obj) === '[object Array]'\n}\n\nfunction addObject (_data) {\n  data.push(_data)\n  return data\n}\n\nfunction addArray (_data) {\n  const added = []\n  clear()\n  for (let i = 0, len = _data.length; i < len; i++) {\n    if (isObject(_data[i])) {\n      added.push(addObject(_data[i]))\n    }\n  }\n  return added\n}\n\nfunction search (crit) {\n  if (!crit) {\n    return []\n  }\n  return findMatches(data, crit, opt.searchStrategy, opt).sort(opt.sort)\n}\n\nfunction __setOptions_4 (_opt) {\n  opt = _opt || {}\n\n  opt.fuzzy = _opt.fuzzy || false\n  opt.limit = _opt.limit || 10\n  opt.searchStrategy = _opt.fuzzy ? _$FuzzySearchStrategy_5 : _$LiteralSearchStrategy_6\n  opt.sort = _opt.sort || NoSort\n  opt.exclude = _opt.exclude || []\n}\n\nfunction findMatches (data, crit, strategy, opt) {\n  const matches = []\n  for (let i = 0; i < data.length && matches.length < opt.limit; i++) {\n    const match = findMatchesInObject(data[i], crit, strategy, opt)\n    if (match) {\n      matches.push(match)\n    }\n  }\n  return matches\n}\n\nfunction findMatchesInObject (obj, crit, strategy, opt) {\n  for (const key in obj) {\n    if (!isExcluded(obj[key], opt.exclude) && strategy.matches(obj[key], crit)) {\n      return obj\n    }\n  }\n}\n\nfunction isExcluded (term, excludedTerms) {\n  for (let i = 0, len = excludedTerms.length; i < len; i++) {\n    const excludedTerm = excludedTerms[i]\n    if (new RegExp(excludedTerm).test(term)) {\n      return true\n    }\n  }\n  return false\n}\n\n/* globals ActiveXObject:false */\n\n'use strict'\n\nvar _$JSONLoader_2 = {\n  load: load\n}\n\nfunction load (location, callback) {\n  const xhr = getXHR()\n  xhr.open('GET', location, true)\n  xhr.onreadystatechange = createStateChangeListener(xhr, callback)\n  xhr.send()\n}\n\nfunction createStateChangeListener (xhr, callback) {\n  return function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      try {\n        callback(null, JSON.parse(xhr.responseText))\n      } catch (err) {\n        callback(err, null)\n      }\n    }\n  }\n}\n\nfunction getXHR () {\n  return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')\n}\n\n'use strict'\n\nvar _$OptionsValidator_3 = function OptionsValidator (params) {\n  if (!validateParams(params)) {\n    throw new Error('-- OptionsValidator: required options missing')\n  }\n\n  if (!(this instanceof OptionsValidator)) {\n    return new OptionsValidator(params)\n  }\n\n  const requiredOptions = params.required\n\n  this.getRequiredOptions = function () {\n    return requiredOptions\n  }\n\n  this.validate = function (parameters) {\n    const errors = []\n    requiredOptions.forEach(function (requiredOptionName) {\n      if (typeof parameters[requiredOptionName] === 'undefined') {\n        errors.push(requiredOptionName)\n      }\n    })\n    return errors\n  }\n\n  function validateParams (params) {\n    if (!params) {\n      return false\n    }\n    return typeof params.required !== 'undefined' && params.required instanceof Array\n  }\n}\n\n'use strict'\n\nvar _$utils_9 = {\n  merge: merge,\n  isJSON: isJSON\n}\n\nfunction merge (defaultParams, mergeParams) {\n  const mergedOptions = {}\n  for (const option in defaultParams) {\n    mergedOptions[option] = defaultParams[option]\n    if (typeof mergeParams[option] !== 'undefined') {\n      mergedOptions[option] = mergeParams[option]\n    }\n  }\n  return mergedOptions\n}\n\nfunction isJSON (json) {\n  try {\n    if (json instanceof Object && JSON.parse(JSON.stringify(json))) {\n      return true\n    }\n    return false\n  } catch (err) {\n    return false\n  }\n}\n\nvar _$src_8 = {};\n(function (window) {\n  'use strict'\n\n  let options = {\n    searchInput: null,\n    resultsContainer: null,\n    json: [],\n    success: Function.prototype,\n    searchResultTemplate: '<li><a href=\"{url}\" title=\"{desc}\">{title}</a></li>',\n    templateMiddleware: Function.prototype,\n    sortMiddleware: function () {\n      return 0\n    },\n    noResultsText: 'No results found',\n    limit: 10,\n    fuzzy: false,\n    debounceTime: null,\n    exclude: []\n  }\n\n  let debounceTimerHandle\n  const debounce = function (func, delayMillis) {\n    if (delayMillis) {\n      clearTimeout(debounceTimerHandle)\n      debounceTimerHandle = setTimeout(func, delayMillis)\n    } else {\n      func.call()\n    }\n  }\n\n  const requiredOptions = ['searchInput', 'resultsContainer', 'json']\n\n  /* removed: const _$Templater_7 = require('./Templater') */;\n  /* removed: const _$Repository_4 = require('./Repository') */;\n  /* removed: const _$JSONLoader_2 = require('./JSONLoader') */;\n  const optionsValidator = _$OptionsValidator_3({\n    required: requiredOptions\n  })\n  /* removed: const _$utils_9 = require('./utils') */;\n\n  window.SimpleJekyllSearch = function (_options) {\n    const errors = optionsValidator.validate(_options)\n    if (errors.length > 0) {\n      throwError('You must specify the following required options: ' + requiredOptions)\n    }\n\n    options = _$utils_9.merge(options, _options)\n\n    _$Templater_7.setOptions({\n      template: options.searchResultTemplate,\n      middleware: options.templateMiddleware\n    })\n\n    _$Repository_4.setOptions({\n      fuzzy: options.fuzzy,\n      limit: options.limit,\n      sort: options.sortMiddleware,\n      exclude: options.exclude\n    })\n\n    if (_$utils_9.isJSON(options.json)) {\n      initWithJSON(options.json)\n    } else {\n      initWithURL(options.json)\n    }\n\n    const rv = {\n      search: search\n    }\n\n    typeof options.success === 'function' && options.success.call(rv)\n    return rv\n  }\n\n  function initWithJSON (json) {\n    _$Repository_4.put(json)\n    registerInput()\n  }\n\n  function initWithURL (url) {\n    _$JSONLoader_2.load(url, function (err, json) {\n      if (err) {\n        throwError('failed to get JSON (' + url + ')')\n      }\n      initWithJSON(json)\n    })\n  }\n\n  function emptyResultsContainer () {\n    options.resultsContainer.innerHTML = ''\n  }\n\n  function appendToResultsContainer (text) {\n    options.resultsContainer.innerHTML += text\n  }\n\n  function registerInput () {\n    options.searchInput.addEventListener('input', function (e) {\n      if (isWhitelistedKey(e.which)) {\n        emptyResultsContainer()\n        debounce(function () { search(e.target.value) }, options.debounceTime)\n      }\n    })\n  }\n\n  function search (query) {\n    if (isValidQuery(query)) {\n      emptyResultsContainer()\n      render(_$Repository_4.search(query), query)\n    }\n  }\n\n  function render (results, query) {\n    const len = results.length\n    if (len === 0) {\n      return appendToResultsContainer(options.noResultsText)\n    }\n    for (let i = 0; i < len; i++) {\n      results[i].query = query\n      appendToResultsContainer(_$Templater_7.compile(results[i]))\n    }\n  }\n\n  function isValidQuery (query) {\n    return query && query.length > 0\n  }\n\n  function isWhitelistedKey (key) {\n    return [13, 16, 20, 37, 38, 39, 40, 91].indexOf(key) === -1\n  }\n\n  function throwError (message) {\n    throw new Error('SimpleJekyllSearch --- ' + message)\n  }\n})(window)\n\n}());\n\n\n//# sourceURL=webpack:///./node_modules/simple-jekyll-search/dest/simple-jekyll-search.js?");

/***/ }),

/***/ "./src/disqus.js":
/*!***********************!*\
  !*** ./src/disqus.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (document.getElementById('disqus_thread')) {\n  var d = document,\n      s = d.createElement('script');\n  s.src = '//marabesi.disqus.com/embed.js';\n  s.setAttribute('data-timestamp', +new Date());\n  (d.head || d.body).appendChild(s);\n}\n\n//# sourceURL=webpack:///./src/disqus.js?");

/***/ }),

/***/ "./src/lazyLoadImg.js":
/*!****************************!*\
  !*** ./src/lazyLoadImg.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (window.IntersectionObserver) {\n  var config = {\n    rootMargin: '0px 0px 50px 0px',\n    threshold: 0\n  };\n\n  var preloadImage = function preloadImage(img) {\n    var dataSrc = img.getAttribute('data-src');\n    img.setAttribute('src', dataSrc);\n  };\n\n  var observer = new IntersectionObserver(function (entries, self) {\n    entries.forEach(function (entry) {\n      if (entry.isIntersecting) {\n        preloadImage(entry.target);\n        self.unobserve(entry.target);\n      }\n    });\n  }, config);\n  var imgs = document.querySelectorAll('[data-src]');\n  imgs.forEach(function (img) {\n    observer.observe(img);\n  });\n}\n\n;\n\n//# sourceURL=webpack:///./src/lazyLoadImg.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_tailwind_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_sass/tailwind.scss */ \"./_sass/tailwind.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_sass/main.scss */ \"./_sass/main.scss\");\n__webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n__webpack_require__(/*! ./lazyLoadImg */ \"./src/lazyLoadImg.js\");\n\n__webpack_require__(/*! ./serviceWorkerHandler */ \"./src/serviceWorkerHandler.js\");\n\n__webpack_require__(/*! simple-jekyll-search/dest/simple-jekyll-search */ \"./node_modules/simple-jekyll-search/dest/simple-jekyll-search.js\");\n\n__webpack_require__(/*! ./disqus */ \"./src/disqus.js\");\n\nvar AnchorJS = __webpack_require__(/*! anchor-js */ \"./node_modules/anchor-js/anchor.js\");\n\nvar anchors = new AnchorJS();\n\n\nSimpleJekyllSearch({\n  searchInput: document.getElementById('search-input'),\n  resultsContainer: document.getElementById('results-container'),\n  searchResultTemplate: '<li class=\"list-reset p-2\"><a href=\"{url}\">{title}</a></li>',\n  json: '/search.json',\n  fuzzy: false,\n  noResultsText: 'No results found 😞',\n  success: function success() {}\n});\nanchors.add();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var topMenu = document.querySelector('.top-menu');\nvar menuList = document.querySelector('#menu-list');\ndocument.querySelector('#menu').addEventListener('click', function () {\n  if (menuList.classList.contains('flex')) {\n    menuList.classList.remove('flex');\n    menuList.classList.add('hidden');\n    topMenu.classList.remove('flex');\n    topMenu.classList.add('hidden');\n    menuList.classList.remove('open');\n  } else {\n    menuList.classList.remove('hidden');\n    menuList.classList.add('flex');\n    topMenu.classList.remove('hidden');\n    topMenu.classList.add('flex');\n    menuList.classList.add('open');\n  }\n});\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/serviceWorkerHandler.js":
/*!*************************************!*\
  !*** ./src/serviceWorkerHandler.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if ('serviceWorker' in navigator) {\n  var updateButton = document.querySelector('.update-button');\n  var menuWrapper = document.querySelector('.menu-wrapper');\n  var worker;\n  updateButton.addEventListener('click', function () {\n    worker.postMessage({\n      action: 'skip'\n    });\n  });\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('/service-worker.js').then(function (registration) {\n      registration.addEventListener('updatefound', function () {\n        worker = registration.installing;\n        worker.addEventListener('statechange', function () {\n          if (worker.state === 'installed') {\n            updateButton.classList.remove('hidden');\n          }\n        });\n      });\n    });\n    navigator.serviceWorker.addEventListener('controllerchange', function () {\n      window.location.reload();\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/serviceWorkerHandler.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./src/main ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/runner/work/marabesi.com/marabesi.com/src/main */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main?");

/***/ })

/******/ });