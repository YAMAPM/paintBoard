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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.window2Canvas = function (can, x, y) {
	var box = can.getBoundingClientRect();
	return {
		x: (x - box.left) * (can.width / box.width),
		y: (y - box.top) * (can.height / box.height)
	};
};
exports.bindEvent = function (el, fn, data) {
	return function (e) {
		fn.apply(el, [e, data]);
	};
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _board = __webpack_require__(7);

var _board2 = _interopRequireDefault(_board);

var _pen = __webpack_require__(8);

var _pen2 = _interopRequireDefault(_pen);

var _tools = __webpack_require__(9);

var _tools2 = _interopRequireDefault(_tools);

var _tab = __webpack_require__(10);

var _tab2 = _interopRequireDefault(_tab);

var _config = __webpack_require__(11);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = _config2.default.color;
ctx.lineWdith = _config2.default.weight;
var pen = new _pen2.default(ctx);
var board = new _board2.default(pen, canvas, ctx);
var tools = new _tools2.default(document.querySelector('#tools'), board, canvas, ctx);
var tab = new _tab2.default(document.querySelector('#tab'), board, ctx);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "* {\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-family: Arial, \"\\5FAE\\8F6F\\96C5\\9ED1\";\r\n\tfont-size: 16px;\r\n}\r\n#canvas {\r\n\tbackground: rgba(0, 0, 0, 0.18);\r\n\tposition: absolute;\r\n\tmargin-top: 5px;\r\n\tclear: both;\r\n}\r\n#tab {\r\n\tbackground: rgba(0, 0, 0, 0.18);\r\n\tcolor: black;\r\n\tfont-weight: bold;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\tpadding: 0 10px;\r\n\twidth: 801px;\r\n}\r\n#tab span{\r\n\tpadding: 2px;\r\n\t\r\n}\r\n#tools {\r\n\twidth: 801px;\r\n\tmargin-top: 2px;\r\n}\r\n#tools #clearFloat{\r\n\tclear: both;\r\n}\r\n#tools div {\r\n\twidth: 157px;\r\n\theight: 100px;\r\n\tborder: 1px solid black;\r\n\tmargin: 0 2px;\r\n\tfloat: left;\r\n}\r\n#tools #copy {\r\n\tmargin-left: 0px;\r\n}\r\n#tools #stroke {\r\n\tmargin-right: 0px;\r\n}\r\n#tools #choose .choice {\r\n    width: 30%;\r\n    height: 100%;\r\n}\r\n#tools #copy .choice {\r\n    width: 30%;\r\n    height: 100%;\r\n}\r\n#tools  .choice .selected {\r\n    height: 50px;\r\n    padding: 5px 0;\r\n    margin: 5px 0;\r\n}\r\n#tools .choice .opt{\r\n    border: 2px solid #fff;\r\n    background: #6e649a;\r\n    color: #fff;\r\n    font-weight: bold;\r\n}\r\n#tools .slice {\r\n    width: 63%;\r\n    height: 50px;\r\n}\r\n#tools .rotate {\r\n    width: 63%;\r\n    height: 50px;\r\n}\r\n\r\n#statusBar {\r\n    position: absolute;\r\n    bottom: 0px;\r\n}\r\n#statusBar #point {\r\n    float: right;\r\n    font-weight: bold;\r\n    height:30px;\r\n    width: 801px;\r\n}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Board(pen, can, ctx) {
    this.init(pen, can, ctx);
    var mousedownHandler = this.mousedownHandler = function (e) {
        var mousemoveHandler = function mousemoveHandler(e) {
            var x1 = e.offsetX;
            var y1 = e.offsetY;
            ctx.lineTo(x1, y1);
            ctx.stroke();
        };
        var mouseupHandler = function mouseupHandler(e) {
            canvas.removeEventListener('mousemove', mousemoveHandler);
            // canvas.removeEventListener('mousedown',mousedownHandler);
        };
        canvas.addEventListener('mousemove', mousemoveHandler);
        canvas.addEventListener('mouseup', mouseupHandler);
        var d = window.devicePixelRatio;
        var x = e.offsetX;
        var y = e.offsetY;
        ctx.moveTo(x, y);
    };
    this.initEvent(ctx, can, true, mousedownHandler);
}
Board.prototype = {
    init: function init(pen, can, ctx) {
        this.pen = pen;
        this.can = can;
        this.ctx = ctx || this.can.getContext('2d');
    },
    initEvent: function initEvent(ctx, canvas, first, mousedownHandler) {
        var self = this;
        if (first) {
            canvas.addEventListener('mousedown', mousedownHandler);
            return;
        } else {
            canvas.removeEventListener('mousedown', self.mousedownHandler);
        }
    },
    draw: function draw(type) {
        /*let close = {};
        let self = this;
        let surfaceImgData = null;
        let startHandler = function(e) {
            let x1 = e.offsetX;
            let y1 = e.offsetY;
            surfaceImgData = self.ctx.getImageData(0, 0, self.can.width, self.can.height);
            self.ctx.beginPath();
            self.ctx.moveTo(x1, y1);
            close.x1 = x1;
            close.y1 = y1;
            self.can.addEventListener('mousemove', moveHandler)
        };
        let moveHandler = function(e) {
            let x2 = e.offsetX;
            let y2 = e.offsetY;
            close.x2 = x2;
            close.y2 = y2;
            // self.ctx.clearRect(0, 0, self.can.width, self.can.height);
            self.ctx.putImageData(surfaceImgData, 0, 0);
            self.ctx.beginPath();
            self.ctx.moveTo(close.x1, close.y1);
            self.ctx.lineTo(x2, y2);
            self.ctx.stroke();
            console.log(x2, y2);
        };
        let finishHandler = function(e) {
            let x3 = e.offsetX;
            let y3 = e.offsetY;
            close.x3 = x3;
            close.y3 = y3;
            self.can.removeEventListener('mousemove', moveHandler);
        };*/
        var self = this;
        switch (type) {
            case 'line':
                this.initEvent(this.ctx, this.can, false);
                this.can.addEventListener('mousedown', _util2.default.bindEvent(self.pen, self.pen.drawStart, type));
                this.can.addEventListener('mouseup', _util2.default.bindEvent(self.pen, self.pen.drawEnd, type));
                break;
            case 'rect':
                this.initEvent(this.ctx, this.can, false);
                this.can.addEventListener('mousedown', _util2.default.bindEvent(self.pen, self.pen.drawStart, type));
                this.can.addEventListener('mouseup', _util2.default.bindEvent(self.pen, self.pen.drawEnd, type));
                break;
            case 'circle':
                this.can.addEventListener('mousedown', self.pen.drawStart);
                this.can.addEventListener('mouseup', self.pen.drawEnd);
                break;
            default:
                this.initEvent();
        }
    },
    openPic: function openPic(data) {
        var self = this;
        var img = new Image();
        img.src = data;
        img.style.display = 'none';
        document.body.appendChild(img);
        img.onload = function () {
            self.ctx.drawImage(img, 0, 0, self.can.width, self.can.height);
            document.body.removeChild(document.querySelector('img'));
        };
    }
};
module.exports = Board;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Pen(ctx) {
    this.ctx = ctx;
    this.can = this.ctx.canvas;
    this.color = ctx.strokeStyle;
    this.weight = ctx.lineWidth;
}
Pen.prototype = {
    drawStart: function drawStart(e, type, points) {
        this.drawing = true;
        var self = this;
        // self.ctx = self.getContext('2d');
        var close = {};
        var x1 = e.offsetX;
        var y1 = e.offsetY;
        self.ctx.beginPath();
        self.ctx.moveTo(x1, y1);
        close.x1 = x1;
        close.y1 = y1;
        var surfaceImgData = self.ctx.getImageData(0, 0, self.can.width, self.can.height);
        switch (type) {
            case 'line':
                var moveHandler = function moveHandler(e) {
                    if (self.drawing) {
                        var x2 = e.offsetX;
                        var y2 = e.offsetY;
                        close.x2 = x2;
                        close.y2 = y2;
                        self.ctx.putImageData(surfaceImgData, 0, 0);
                        self.ctx.beginPath();
                        self.ctx.moveTo(close.x1, close.y1);
                        self.ctx.lineTo(x2, y2);
                        self.ctx.stroke();
                    }
                };
                if (self.drawing) {
                    self.can.addEventListener('mousemove', moveHandler);
                }
                break;
            case 'rect':
                var rectmoveHandler = function rectmoveHandler(e) {
                    if (self.drawing) {
                        var x2 = e.offsetX;
                        var y2 = e.offsetY;
                        close.x2 = x2;
                        close.y2 = y2;
                        self.ctx.putImageData(surfaceImgData, 0, 0);
                        self.ctx.strokeRect(close.x1, close.y1, Math.abs(close.x1 - close.x2), Math.abs(close.y1 - close.y2));
                    }
                };
                if (self.drawing) {
                    self.can.addEventListener('mousemove', rectmoveHandler);
                }
                break;

        }
    },
    drawEnd: function drawEnd(e, type, points) {
        switch (type) {
            case 'line':
                var x3 = e.offsetX;
                var y3 = e.offsetY;
                // self.can.removeEventListener('mousemove', moveHandler);
                this.drawing = false;
                break;
            case 'rect':
                this.drawing = false;
                break;
        }
    }
};
module.exports = Pen;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Tools(dom, board, can, ctx) {
    this.init(dom, can, ctx);
    this.initEvent(board);
};

Tools.prototype = {
    init: function init(dom, can, ctx) {
        this.toolsDom = dom;
        this.can = can;
        this.ctx = ctx;
    },
    initEvent: function initEvent(board) {
        var clickHandler = function clickHandler(e) {
            var dom = e.target;
            console.log(dom);
            // let startX = e.offsetX;
            // let startY = e.offsetY;
            switch (e.target.tagName) {
                case 'line':
                    board.draw('line');
                    break;
                case 'circle':
                    board.draw('circle');
                    break;
                case 'rect':
                    board.draw('rect');
                    break;
            }
        };
        this.toolsDom.addEventListener('click', clickHandler);
    }
};
module.exports = Tools;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Tab(dom, board, ctx) {
    this.dom = dom;
    this.ctx - ctx;
    this.file = dom.querySelector('#file');
    this.seen = dom.querySelector('#seen');
    this.board = board;
    this.initEvent();
}
Tab.prototype = {
    initEvent: function initEvent() {
        var self = this;
        self.dom.querySelector('#open').addEventListener('change', function (e) {
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                self.seen.data = e.target.result;
                self.board.openPic(e.target.result);
            };
        });
        this.seen.addEventListener('click', function (e) {
            var ev = document.createEvent('MouseEvents');
            ev.initEvent('click', true, true);
            self.dom.querySelector('#open').dispatchEvent(ev);
        });
    }
};
module.exports = Tab;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	weight: 2,
	color: 'red'
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWIzNzIxNDVhZmYzZjBmMTEzNTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3M/OWUzNCIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9wZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwid2luZG93MkNhbnZhcyIsImNhbiIsIngiLCJ5IiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsIndpZHRoIiwidG9wIiwiaGVpZ2h0IiwiYmluZEV2ZW50IiwiZWwiLCJmbiIsImRhdGEiLCJlIiwiYXBwbHkiLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3Ryb2tlU3R5bGUiLCJjb2xvciIsImxpbmVXZGl0aCIsIndlaWdodCIsInBlbiIsImJvYXJkIiwidG9vbHMiLCJ0YWIiLCJCb2FyZCIsImluaXQiLCJtb3VzZWRvd25IYW5kbGVyIiwibW91c2Vtb3ZlSGFuZGxlciIsIngxIiwib2Zmc2V0WCIsInkxIiwib2Zmc2V0WSIsImxpbmVUbyIsInN0cm9rZSIsIm1vdXNldXBIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm1vdmVUbyIsImluaXRFdmVudCIsInByb3RvdHlwZSIsImZpcnN0Iiwic2VsZiIsImRyYXciLCJ0eXBlIiwiZHJhd1N0YXJ0IiwiZHJhd0VuZCIsIm9wZW5QaWMiLCJpbWciLCJJbWFnZSIsInNyYyIsInN0eWxlIiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm9ubG9hZCIsImRyYXdJbWFnZSIsInJlbW92ZUNoaWxkIiwibW9kdWxlIiwiUGVuIiwibGluZVdpZHRoIiwicG9pbnRzIiwiZHJhd2luZyIsImNsb3NlIiwiYmVnaW5QYXRoIiwic3VyZmFjZUltZ0RhdGEiLCJnZXRJbWFnZURhdGEiLCJtb3ZlSGFuZGxlciIsIngyIiwieTIiLCJwdXRJbWFnZURhdGEiLCJyZWN0bW92ZUhhbmRsZXIiLCJzdHJva2VSZWN0IiwiTWF0aCIsImFicyIsIngzIiwieTMiLCJUb29scyIsImRvbSIsInRvb2xzRG9tIiwiY2xpY2tIYW5kbGVyIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInRhZ05hbWUiLCJUYWIiLCJmaWxlIiwic2VlbiIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJyZXN1bHQiLCJldiIsImNyZWF0ZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVB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RTBFLE1BQUYsQ0FBU1csTUFBMUI7QUFDQWxELHFCQUFLdkIsS0FBTCxDQUFXNEIsT0FBWCxDQUFtQnhDLEVBQUUwRSxNQUFGLENBQVNXLE1BQTVCO0FBQ0gsYUFIRDtBQUlILFNBUkQ7QUFTQSxhQUFLTCxJQUFMLENBQVVyRCxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFTM0IsQ0FBVCxFQUFZO0FBQzVDLGdCQUFJc0YsS0FBS25GLFNBQVNvRixXQUFULENBQXFCLGFBQXJCLENBQVQ7QUFDQUQsZUFBR3RELFNBQUgsQ0FBYSxPQUFiLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCO0FBQ0FHLGlCQUFLb0MsR0FBTCxDQUFTbkUsYUFBVCxDQUF1QixPQUF2QixFQUFnQ29GLGFBQWhDLENBQThDRixFQUE5QztBQUNILFNBSkQ7QUFLSDtBQWpCVyxDQUFoQjtBQW1CQW5DLE9BQU9sRSxPQUFQLEdBQWlCNkYsR0FBakIsQzs7Ozs7Ozs7Ozs7O2tCQzNCZTtBQUNkcEUsU0FBUSxDQURNO0FBRWRGLFFBQU87QUFGTyxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGViMzcyMTQ1YWZmM2YwZjExMzU3IiwiZXhwb3J0cy53aW5kb3cyQ2FudmFzID0gZnVuY3Rpb24gKGNhbiwgeCwgeSkge1xyXG5cdGxldCBib3ggPSBjYW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHg6ICh4IC0gYm94LmxlZnQpICogKGNhbi53aWR0aCAvIGJveC53aWR0aCksXHJcblx0XHR5OiAoeSAtIGJveC50b3ApICogKGNhbi5oZWlnaHQgLyBib3guaGVpZ2h0KSxcclxuXHR9XHJcbn07XHJcbmV4cG9ydHMuYmluZEV2ZW50ID0gZnVuY3Rpb24gKGVsLCBmbiwgZGF0YSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBmbi5hcHBseShlbCwgW2UsIGRhdGFdKTtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC91dGlsLmpzIiwiaW1wb3J0IGNzcyBmcm9tICcuLi9zcmMvY3NzL2luZGV4LmNzcyc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL3NyYy91dGlsL3V0aWwnO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vc3JjL2JvYXJkJ1xyXG5pbXBvcnQgUGVuIGZyb20gJy4uL3NyYy9wZW4nXHJcbmltcG9ydCBUb29scyBmcm9tICcuLi9zcmMvdG9vbHMnO1xyXG5pbXBvcnQgVGFiIGZyb20gJy4uL3NyYy90YWInO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL3NyYy9jb25maWcnXHJcblxyXG5sZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpO1xyXG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbmN0eC5zdHJva2VTdHlsZSA9IGNvbmZpZy5jb2xvcjtcclxuY3R4LmxpbmVXZGl0aCA9IGNvbmZpZy53ZWlnaHQ7XHJcbmxldCBwZW4gPSBuZXcgUGVuKGN0eCk7XHJcbmxldCBib2FyZCA9IG5ldyBCb2FyZChwZW4sIGNhbnZhcywgY3R4KTtcclxubGV0IHRvb2xzID0gbmV3IFRvb2xzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b29scycpLCBib2FyZCwgY2FudmFzLCBjdHgpO1xyXG5sZXQgdGFiID0gbmV3IFRhYihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFiJyksIGJvYXJkLCBjdHgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OiBBcmlhbCwgXFxcIlxcXFw1RkFFXFxcXDhGNkZcXFxcOTZDNVxcXFw5RUQxXFxcIjtcXHJcXG5cXHRmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcbiNjYW52YXMge1xcclxcblxcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdG1hcmdpbi10b3A6IDVweDtcXHJcXG5cXHRjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuI3RhYiB7XFxyXFxuXFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KTtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcblxcdHBhZGRpbmc6IDAgMTBweDtcXHJcXG5cXHR3aWR0aDogODAxcHg7XFxyXFxufVxcclxcbiN0YWIgc3BhbntcXHJcXG5cXHRwYWRkaW5nOiAycHg7XFxyXFxuXFx0XFxyXFxufVxcclxcbiN0b29scyB7XFxyXFxuXFx0d2lkdGg6IDgwMXB4O1xcclxcblxcdG1hcmdpbi10b3A6IDJweDtcXHJcXG59XFxyXFxuI3Rvb2xzICNjbGVhckZsb2F0e1xcclxcblxcdGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG4jdG9vbHMgZGl2IHtcXHJcXG5cXHR3aWR0aDogMTU3cHg7XFxyXFxuXFx0aGVpZ2h0OiAxMDBweDtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRtYXJnaW46IDAgMnB4O1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG4jdG9vbHMgI2NvcHkge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxufVxcclxcbiN0b29scyAjc3Ryb2tlIHtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDBweDtcXHJcXG59XFxyXFxuI3Rvb2xzICNjaG9vc2UgLmNob2ljZSB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuI3Rvb2xzICNjb3B5IC5jaG9pY2Uge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbiN0b29scyAgLmNob2ljZSAuc2VsZWN0ZWQge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgICBtYXJnaW46IDVweCAwO1xcclxcbn1cXHJcXG4jdG9vbHMgLmNob2ljZSAub3B0e1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNmU2NDlhO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbiN0b29scyAuc2xpY2Uge1xcclxcbiAgICB3aWR0aDogNjMlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcbiN0b29scyAucm90YXRlIHtcXHJcXG4gICAgd2lkdGg6IDYzJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHVzQmFyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG59XFxyXFxuI3N0YXR1c0JhciAjcG9pbnQge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBoZWlnaHQ6MzBweDtcXHJcXG4gICAgd2lkdGg6IDgwMXB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL2Nzcy9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXyBmcm9tICcuL3V0aWwvdXRpbCc7XHJcbmZ1bmN0aW9uIEJvYXJkKHBlbiwgY2FuLCBjdHgpIHtcclxuXHR0aGlzLmluaXQocGVuLCBjYW4sY3R4KTtcclxuICAgIGxldCBtb3VzZWRvd25IYW5kbGVyID0gdGhpcy5tb3VzZWRvd25IYW5kbGVyID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBtb3VzZW1vdmVIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgeDEgPSBlLm9mZnNldFg7XHJcbiAgICAgICAgICAgIHZhciB5MSA9IGUub2Zmc2V0WTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh4MSx5MSk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBtb3VzZXVwSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsbW91c2Vtb3ZlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIC8vIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLG1vdXNlZG93bkhhbmRsZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsbW91c2Vtb3ZlSGFuZGxlcik7XHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLG1vdXNldXBIYW5kbGVyKTtcclxuICAgICAgICB2YXIgZCA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgICAgIHZhciB4ID0gZS5vZmZzZXRYO1xyXG4gICAgICAgIHZhciB5ID0gZS5vZmZzZXRZO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oeCx5KTtcclxuICAgIH07XHJcblx0dGhpcy5pbml0RXZlbnQoY3R4LCBjYW4sIHRydWUsIG1vdXNlZG93bkhhbmRsZXIpO1xyXG59XHJcbkJvYXJkLnByb3RvdHlwZSA9IHtcclxuICAgIGluaXQ6ZnVuY3Rpb24ocGVuLGNhbixjdHgpIHtcclxuICAgICAgICB0aGlzLnBlbiA9IHBlbjtcclxuICAgICAgICB0aGlzLmNhbiA9IGNhbjtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eCB8fCB0aGlzLmNhbi5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfSxcclxuICAgIGluaXRFdmVudDpmdW5jdGlvbihjdHgsY2FudmFzLCBmaXJzdCwgbW91c2Vkb3duSGFuZGxlcikge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAoZmlyc3QpIHtcclxuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsbW91c2Vkb3duSGFuZGxlcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2VsZi5tb3VzZWRvd25IYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhdzpmdW5jdGlvbih0eXBlKSB7XHJcbiAgICAgICAgLypsZXQgY2xvc2UgPSB7fTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHN1cmZhY2VJbWdEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgc3RhcnRIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBsZXQgeDEgPSBlLm9mZnNldFg7XHJcbiAgICAgICAgICAgIGxldCB5MSA9IGUub2Zmc2V0WTtcclxuICAgICAgICAgICAgc3VyZmFjZUltZ0RhdGEgPSBzZWxmLmN0eC5nZXRJbWFnZURhdGEoMCwgMCwgc2VsZi5jYW4ud2lkdGgsIHNlbGYuY2FuLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHNlbGYuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBzZWxmLmN0eC5tb3ZlVG8oeDEsIHkxKTtcclxuICAgICAgICAgICAgY2xvc2UueDEgPSB4MTtcclxuICAgICAgICAgICAgY2xvc2UueTEgPSB5MTtcclxuICAgICAgICAgICAgc2VsZi5jYW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUhhbmRsZXIpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgbW92ZUhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGxldCB4MiA9IGUub2Zmc2V0WDtcclxuICAgICAgICAgICAgbGV0IHkyID0gZS5vZmZzZXRZO1xyXG4gICAgICAgICAgICBjbG9zZS54MiA9IHgyO1xyXG4gICAgICAgICAgICBjbG9zZS55MiA9IHkyO1xyXG4gICAgICAgICAgICAvLyBzZWxmLmN0eC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW4ud2lkdGgsIHNlbGYuY2FuLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHNlbGYuY3R4LnB1dEltYWdlRGF0YShzdXJmYWNlSW1nRGF0YSwgMCwgMCk7XHJcbiAgICAgICAgICAgIHNlbGYuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBzZWxmLmN0eC5tb3ZlVG8oY2xvc2UueDEsIGNsb3NlLnkxKTtcclxuICAgICAgICAgICAgc2VsZi5jdHgubGluZVRvKHgyLCB5Mik7XHJcbiAgICAgICAgICAgIHNlbGYuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4MiwgeTIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGZpbmlzaEhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGxldCB4MyA9IGUub2Zmc2V0WDtcclxuICAgICAgICAgICAgbGV0IHkzID0gZS5vZmZzZXRZO1xyXG4gICAgICAgICAgICBjbG9zZS54MyA9IHgzO1xyXG4gICAgICAgICAgICBjbG9zZS55MyA9IHkzO1xyXG4gICAgICAgICAgICBzZWxmLmNhbi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlSGFuZGxlcik7XHJcbiAgICAgICAgfTsqL1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGluZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRFdmVudCh0aGlzLmN0eCwgdGhpcy5jYW4sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIF8uYmluZEV2ZW50KHNlbGYucGVuLCBzZWxmLnBlbi5kcmF3U3RhcnQsIHR5cGUpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfLmJpbmRFdmVudChzZWxmLnBlbiwgc2VsZi5wZW4uZHJhd0VuZCwgdHlwZSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlY3QnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RXZlbnQodGhpcy5jdHgsIHRoaXMuY2FuLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBfLmJpbmRFdmVudChzZWxmLnBlbiwgc2VsZi5wZW4uZHJhd1N0YXJ0LCB0eXBlKSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF8uYmluZEV2ZW50KHNlbGYucGVuLCBzZWxmLnBlbi5kcmF3RW5kLCB0eXBlKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY2lyY2xlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNlbGYucGVuLmRyYXdTdGFydCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc2VsZi5wZW4uZHJhd0VuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG5cdH0sXHJcbiAgICBvcGVuUGljOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWcuc3JjID0gZGF0YTtcclxuICAgICAgICBpbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5jdHguZHJhd0ltYWdlKGltZywgMCwgMCwgc2VsZi5jYW4ud2lkdGgsIHNlbGYuY2FuLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9hcmQuanMiLCJmdW5jdGlvbiBQZW4oY3R4KSB7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuY2FuID0gdGhpcy5jdHguY2FudmFzO1xyXG5cdHRoaXMuY29sb3IgPSBjdHguc3Ryb2tlU3R5bGU7XHJcblx0dGhpcy53ZWlnaHQgPSBjdHgubGluZVdpZHRoO1xyXG59XHJcblBlbi5wcm90b3R5cGUgPSB7XHJcbiAgICBkcmF3U3RhcnQ6IGZ1bmN0aW9uKGUsIHR5cGUsIHBvaW50cykge1xyXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8vIHNlbGYuY3R4ID0gc2VsZi5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGxldCBjbG9zZSA9IHt9O1xyXG4gICAgICAgIGxldCB4MSA9IGUub2Zmc2V0WDtcclxuICAgICAgICBsZXQgeTEgPSBlLm9mZnNldFk7XHJcbiAgICAgICAgc2VsZi5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgc2VsZi5jdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgY2xvc2UueDEgPSB4MTtcclxuICAgICAgICBjbG9zZS55MSA9IHkxO1xyXG4gICAgICAgIGxldCBzdXJmYWNlSW1nRGF0YSA9IHNlbGYuY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzZWxmLmNhbi53aWR0aCwgc2VsZi5jYW4uaGVpZ2h0KTtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGluZSc6XHJcbiAgICAgICAgICAgICAgICBsZXQgbW92ZUhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZHJhd2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeDIgPSBlLm9mZnNldFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5MiA9IGUub2Zmc2V0WTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UueDIgPSB4MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UueTIgPSB5MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jdHgucHV0SW1hZ2VEYXRhKHN1cmZhY2VJbWdEYXRhLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY3R4Lm1vdmVUbyhjbG9zZS54MSwgY2xvc2UueTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmN0eC5saW5lVG8oeDIsIHkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmRyYXdpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlSGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmVjdCc6XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVjdG1vdmVIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRyYXdpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHgyID0gZS5vZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeTIgPSBlLm9mZnNldFk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlLngyID0geDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlLnkyID0geTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY3R4LnB1dEltYWdlRGF0YShzdXJmYWNlSW1nRGF0YSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY3R4LnN0cm9rZVJlY3QoY2xvc2UueDEsIGNsb3NlLnkxLCBNYXRoLmFicyhjbG9zZS54MSAtIGNsb3NlLngyKSwgTWF0aC5hYnMoY2xvc2UueTEgLSBjbG9zZS55MikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5kcmF3aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcmVjdG1vdmVIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd0VuZDogZnVuY3Rpb24oZSwgdHlwZSwgcG9pbnRzKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xpbmUnOlxyXG4gICAgICAgICAgICAgICAgbGV0IHgzID0gZS5vZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgbGV0IHkzID0gZS5vZmZzZXRZO1xyXG4gICAgICAgICAgICAgICAgLy8gc2VsZi5jYW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmVjdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBQZW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Blbi5qcyIsImZ1bmN0aW9uIFRvb2xzKGRvbSwgYm9hcmQsIGNhbiwgY3R4KSB7ICBcclxuICAgIHRoaXMuaW5pdChkb20sIGNhbiwgY3R4KTtcclxuICAgIHRoaXMuaW5pdEV2ZW50KGJvYXJkKTtcclxufTtcclxuXHJcblRvb2xzLnByb3RvdHlwZSA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uIChkb20sIGNhbiwgY3R4KSB7XHJcbiAgICAgICAgdGhpcy50b29sc0RvbSA9IGRvbTtcclxuICAgICAgICB0aGlzLmNhbiA9IGNhbjtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIH0sXHJcbiAgICBpbml0RXZlbnQ6IGZ1bmN0aW9uIChib2FyZCkge1xyXG4gICAgICAgIGxldCBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBsZXQgZG9tID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvbSk7XHJcbiAgICAgICAgICAgIC8vIGxldCBzdGFydFggPSBlLm9mZnNldFg7XHJcbiAgICAgICAgICAgIC8vIGxldCBzdGFydFkgPSBlLm9mZnNldFk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS50YXJnZXQudGFnTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbGluZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQuZHJhdygnbGluZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY2lyY2xlJzpcclxuICAgICAgICAgICAgICAgICAgICBib2FyZC5kcmF3KCdjaXJjbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3JlY3QnOlxyXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkLmRyYXcoJ3JlY3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50b29sc0RvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgICB9XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gVG9vbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rvb2xzLmpzIiwiZnVuY3Rpb24gVGFiKGRvbSwgYm9hcmQsIGN0eCkge1xyXG4gICAgdGhpcy5kb20gPSBkb207XHJcbiAgICB0aGlzLmN0eCAtIGN0eDtcclxuICAgIHRoaXMuZmlsZSA9IGRvbS5xdWVyeVNlbGVjdG9yKCcjZmlsZScpO1xyXG4gICAgdGhpcy5zZWVuID0gZG9tLnF1ZXJ5U2VsZWN0b3IoJyNzZWVuJyk7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmluaXRFdmVudCgpO1xyXG59XHJcblRhYi5wcm90b3R5cGUgPSB7XHJcbiAgICBpbml0RXZlbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5kb20ucXVlcnlTZWxlY3RvcignI29wZW4nKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZWVuLmRhdGEgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmJvYXJkLm9wZW5QaWMoZS50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2Vlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgbGV0IGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XHJcbiAgICAgICAgICAgIGV2LmluaXRFdmVudCgnY2xpY2snLHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICBzZWxmLmRvbS5xdWVyeVNlbGVjdG9yKCcjb3BlbicpLmRpc3BhdGNoRXZlbnQoZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IFRhYjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFiLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cdHdlaWdodDogMixcclxuXHRjb2xvcjogJ3JlZCdcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==