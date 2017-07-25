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

var _config = __webpack_require__(10);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = _config2.default.color;
ctx.lineWdith = _config2.default.weight;
var pen = new _pen2.default(ctx);
var board = new _board2.default(pen, canvas, ctx);
var tools = new _tools2.default(document.querySelector('#tools'), board, canvas, ctx);

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
exports.push([module.i, "* {\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-family: Arial, \"\\5FAE\\8F6F\\96C5\\9ED1\";\r\n\tfont-size: 16px;\r\n}\r\n#canvas {\r\n\tbackground: rgba(0, 0, 0, 0.18);\r\n\tposition: absolute;\r\n\tmargin-top: 5px;\r\n\tclear: both;\r\n}\r\n#tab {\r\n\tbackground: rgba(42, 42, 42, 0.52);\r\n\tcolor: white;\r\n\tfont-weight: bold;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\tpadding: 0 10px;\r\n\twidth: 801px;\r\n}\r\n#tab span{\r\n\tpadding: 2px;\r\n\t\r\n}\r\n#tools {\r\n\twidth: 801px;\r\n\tmargin-top: 2px;\r\n}\r\n#tools #clearFloat{\r\n\tclear: both;\r\n}\r\n#tools div {\r\n\twidth: 157px;\r\n\theight: 100px;\r\n\tborder: 1px solid black;\r\n\tmargin: 0 2px;\r\n\tfloat: left;\r\n}\r\n#tools #copy {\r\n\tmargin-left: 0px;\r\n}\r\n#tools #stroke {\r\n\tmargin-right: 0px;\r\n}\r\n#tools #choose #choice {\r\n    width: 30%;\r\n    height: 100%;\r\n}\r\n#tools #choose #choice #selected {\r\n    height: 50px;\r\n    padding: 5px 0;\r\n    margin: 5px 0;\r\n}\r\n#tools #choose #slice {\r\n    width: 63%;\r\n    height: 50px;\r\n}\r\n#tools #choose #rotate {\r\n    width: 63%;\r\n    height: 50px;\r\n}", ""]);

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


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	weight: 2,
	color: 'red'
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGQ1NTFmNzkxN2E5OTg3NzQxMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3M/OWUzNCIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9wZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIndpbmRvdzJDYW52YXMiLCJjYW4iLCJ4IiwieSIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJ3aWR0aCIsInRvcCIsImhlaWdodCIsImJpbmRFdmVudCIsImVsIiwiZm4iLCJkYXRhIiwiZSIsImFwcGx5IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0cm9rZVN0eWxlIiwiY29sb3IiLCJsaW5lV2RpdGgiLCJ3ZWlnaHQiLCJwZW4iLCJib2FyZCIsInRvb2xzIiwiQm9hcmQiLCJpbml0IiwibW91c2Vkb3duSGFuZGxlciIsIm1vdXNlbW92ZUhhbmRsZXIiLCJ4MSIsIm9mZnNldFgiLCJ5MSIsIm9mZnNldFkiLCJsaW5lVG8iLCJzdHJva2UiLCJtb3VzZXVwSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZCIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJtb3ZlVG8iLCJpbml0RXZlbnQiLCJwcm90b3R5cGUiLCJmaXJzdCIsInNlbGYiLCJkcmF3IiwidHlwZSIsImRyYXdTdGFydCIsImRyYXdFbmQiLCJtb2R1bGUiLCJQZW4iLCJsaW5lV2lkdGgiLCJwb2ludHMiLCJkcmF3aW5nIiwiY2xvc2UiLCJiZWdpblBhdGgiLCJzdXJmYWNlSW1nRGF0YSIsImdldEltYWdlRGF0YSIsIm1vdmVIYW5kbGVyIiwieDIiLCJ5MiIsInB1dEltYWdlRGF0YSIsInJlY3Rtb3ZlSGFuZGxlciIsInN0cm9rZVJlY3QiLCJNYXRoIiwiYWJzIiwieDMiLCJ5MyIsIlRvb2xzIiwiZG9tIiwidG9vbHNEb20iLCJjbGlja0hhbmRsZXIiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBQSxRQUFRQyxhQUFSLEdBQXdCLFVBQVVDLEdBQVYsRUFBZUMsQ0FBZixFQUFrQkMsQ0FBbEIsRUFBcUI7QUFDNUMsS0FBSUMsTUFBTUgsSUFBSUkscUJBQUosRUFBVjtBQUNBLFFBQU87QUFDTkgsS0FBRyxDQUFDQSxJQUFJRSxJQUFJRSxJQUFULEtBQWtCTCxJQUFJTSxLQUFKLEdBQVlILElB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O0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQy9WQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN4RkE7Ozs7OztBQUNBLFNBQVNTLEtBQVQsQ0FBZUgsR0FBZixFQUFvQnhCLEdBQXBCLEVBQXlCa0IsR0FBekIsRUFBOEI7QUFDN0IsU0FBS1UsSUFBTCxDQUFVSixHQUFWLEVBQWV4QixHQUFmLEVBQW1Ca0IsR0FBbkI7QUFDRyxRQUFJVyxtQkFBbUIsS0FBS0EsZ0JBQUwsR0FBd0IsVUFBU2hCLENBQVQsRUFBWTtBQUN2RCxZQUFJaUIsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBU2pCLENBQVQsRUFBWTtBQUMvQixnQkFBSWtCLEtBQUtsQixFQUFFbUIsT0FBWDtBQUNBLGdCQUFJQyxLQUFLcEIsRUFBRXFCLE9BQVg7QUFDQWhCLGdCQUFJaUIsTUFBSixDQUFXSixFQUFYLEVBQWNFLEVBQWQ7QUFDQWYsZ0JBQUlrQixNQUFKO0FBQ0gsU0FMRDtBQU1BLFlBQUlDLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBU3hCLENBQVQsRUFBWTtBQUM3QkUsbUJBQU91QixtQkFBUCxDQUEyQixXQUEzQixFQUF1Q1IsZ0JBQXZDO0FBQ0E7QUFDSCxTQUhEO0FBSUFmLGVBQU93QixnQkFBUCxDQUF3QixXQUF4QixFQUFvQ1QsZ0JBQXBDO0FBQ0FmLGVBQU93QixnQkFBUCxDQUF3QixTQUF4QixFQUFrQ0YsY0FBbEM7QUFDQSxZQUFJRyxJQUFJQyxPQUFPQyxnQkFBZjtBQUNBLFlBQUl6QyxJQUFJWSxFQUFFbUIsT0FBVjtBQUNBLFlBQUk5QixJQUFJVyxFQUFFcUIsT0FBVjtBQUNBaEIsWUFBSXlCLE1BQUosQ0FBVzFDLENBQVgsRUFBYUMsQ0FBYjtBQUNILEtBakJEO0FBa0JILFNBQUswQyxTQUFMLENBQWUxQixHQUFmLEVBQW9CbEIsR0FBcEIsRUFBeUIsSUFBekIsRUFBK0I2QixnQkFBL0I7QUFDQTtBQUNERixNQUFNa0IsU0FBTixHQUFrQjtBQUNkakIsVUFBSyxjQUFTSixHQUFULEVBQWF4QixHQUFiLEVBQWlCa0IsR0FBakIsRUFBc0I7QUFDdkIsYUFBS00sR0FBTCxHQUFXQSxHQUFYO0FBQ0EsYUFBS3hCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLGFBQUtrQixHQUFMLEdBQVdBLE9BQU8sS0FBS2xCLEdBQUwsQ0FBU21CLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBbEI7QUFDSCxLQUxhO0FBTWR5QixlQUFVLG1CQUFTMUIsR0FBVCxFQUFhSCxNQUFiLEVBQXFCK0IsS0FBckIsRUFBNEJqQixnQkFBNUIsRUFBOEM7QUFDcEQsWUFBSWtCLE9BQU8sSUFBWDtBQUNBLFlBQUlELEtBQUosRUFBVztBQUNQL0IsbUJBQU93QixnQkFBUCxDQUF3QixXQUF4QixFQUFvQ1YsZ0JBQXBDO0FBQ0E7QUFDSCxTQUhELE1BR087QUFDSGQsbUJBQU91QixtQkFBUCxDQUEyQixXQUEzQixFQUF3Q1MsS0FBS2xCLGdCQUE3QztBQUNIO0FBQ0osS0FkYTtBQWVkbUIsVUFBSyxjQUFTQyxJQUFULEVBQWU7QUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQSxZQUFJRixPQUFPLElBQVg7QUFDQSxnQkFBUUUsSUFBUjtBQUNJLGlCQUFLLE1BQUw7QUFDSSxxQkFBS0wsU0FBTCxDQUFlLEtBQUsxQixHQUFwQixFQUF5QixLQUFLbEIsR0FBOUIsRUFBbUMsS0FBbkM7QUFDQSxxQkFBS0EsR0FBTCxDQUFTdUMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsZUFBRTlCLFNBQUYsQ0FBWXNDLEtBQUt2QixHQUFqQixFQUFzQnVCLEtBQUt2QixHQUFMLENBQVMwQixTQUEvQixFQUEwQ0QsSUFBMUMsQ0FBdkM7QUFDQSxxQkFBS2pELEdBQUwsQ0FBU3VDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLGVBQUU5QixTQUFGLENBQVlzQyxLQUFLdkIsR0FBakIsRUFBc0J1QixLQUFLdkIsR0FBTCxDQUFTMkIsT0FBL0IsRUFBd0NGLElBQXhDLENBQXJDO0FBQ0E7QUFDSixpQkFBSyxNQUFMO0FBQ0kscUJBQUtMLFNBQUwsQ0FBZSxLQUFLMUIsR0FBcEIsRUFBeUIsS0FBS2xCLEdBQTlCLEVBQW1DLEtBQW5DO0FBQ0EscUJBQUtBLEdBQUwsQ0FBU3VDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLGVBQUU5QixTQUFGLENBQVlzQyxLQUFLdkIsR0FBakIsRUFBc0J1QixLQUFLdkIsR0FBTCxDQUFTMEIsU0FBL0IsRUFBMENELElBQTFDLENBQXZDO0FBQ0EscUJBQUtqRCxHQUFMLENBQVN1QyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxlQUFFOUIsU0FBRixDQUFZc0MsS0FBS3ZCLEdBQWpCLEVBQXNCdUIsS0FBS3ZCLEdBQUwsQ0FBUzJCLE9BQS9CLEVBQXdDRixJQUF4QyxDQUFyQztBQUNBO0FBQ0osaUJBQUssUUFBTDtBQUNJLHFCQUFLakQsR0FBTCxDQUFTdUMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNRLEtBQUt2QixHQUFMLENBQVMwQixTQUFoRDtBQUNBLHFCQUFLbEQsR0FBTCxDQUFTdUMsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNRLEtBQUt2QixHQUFMLENBQVMyQixPQUE5QztBQUNBO0FBQ0o7QUFDSSxxQkFBS1AsU0FBTDtBQWhCUjtBQWtCTjtBQXBFZ0IsQ0FBbEI7QUFzRUFRLE9BQU90RCxPQUFQLEdBQWlCNkIsS0FBakIsQzs7Ozs7Ozs7O0FDN0ZBLFNBQVMwQixHQUFULENBQWFuQyxHQUFiLEVBQWtCO0FBQ2QsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS2xCLEdBQUwsR0FBVyxLQUFLa0IsR0FBTCxDQUFTSCxNQUFwQjtBQUNILFNBQUtNLEtBQUwsR0FBYUgsSUFBSUUsV0FBakI7QUFDQSxTQUFLRyxNQUFMLEdBQWNMLElBQUlvQyxTQUFsQjtBQUNBO0FBQ0RELElBQUlSLFNBQUosR0FBZ0I7QUFDWkssZUFBVyxtQkFBU3JDLENBQVQsRUFBWW9DLElBQVosRUFBa0JNLE1BQWxCLEVBQTBCO0FBQ2pDLGFBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsWUFBSVQsT0FBTyxJQUFYO0FBQ0E7QUFDQSxZQUFJVSxRQUFRLEVBQVo7QUFDQSxZQUFJMUIsS0FBS2xCLEVBQUVtQixPQUFYO0FBQ0EsWUFBSUMsS0FBS3BCLEVBQUVxQixPQUFYO0FBQ0FhLGFBQUs3QixHQUFMLENBQVN3QyxTQUFUO0FBQ0FYLGFBQUs3QixHQUFMLENBQVN5QixNQUFULENBQWdCWixFQUFoQixFQUFvQkUsRUFBcEI7QUFDQXdCLGNBQU0xQixFQUFOLEdBQVdBLEVBQVg7QUFDQTBCLGNBQU14QixFQUFOLEdBQVdBLEVBQVg7QUFDQSxZQUFJMEIsaUJBQWlCWixLQUFLN0IsR0FBTCxDQUFTMEMsWUFBVCxDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QmIsS0FBSy9DLEdBQUwsQ0FBU00sS0FBckMsRUFBNEN5QyxLQUFLL0MsR0FBTCxDQUFTUSxNQUFyRCxDQUFyQjtBQUNBLGdCQUFReUMsSUFBUjtBQUNJLGlCQUFLLE1BQUw7QUFDSSxvQkFBSVksY0FBYyxTQUFkQSxXQUFjLENBQVNoRCxDQUFULEVBQVk7QUFDMUIsd0JBQUlrQyxLQUFLUyxPQUFULEVBQWtCO0FBQ2QsNEJBQUlNLEtBQUtqRCxFQUFFbUIsT0FBWDtBQUNBLDRCQUFJK0IsS0FBS2xELEVBQUVxQixPQUFYO0FBQ0F1Qiw4QkFBTUssRUFBTixHQUFXQSxFQUFYO0FBQ0FMLDhCQUFNTSxFQUFOLEdBQVdBLEVBQVg7QUFDQWhCLDZCQUFLN0IsR0FBTCxDQUFTOEMsWUFBVCxDQUFzQkwsY0FBdEIsRUFBc0MsQ0FBdEMsRUFBeUMsQ0FBekM7QUFDQVosNkJBQUs3QixHQUFMLENBQVN3QyxTQUFUO0FBQ0FYLDZCQUFLN0IsR0FBTCxDQUFTeUIsTUFBVCxDQUFnQmMsTUFBTTFCLEVBQXRCLEVBQTBCMEIsTUFBTXhCLEVBQWhDO0FBQ0FjLDZCQUFLN0IsR0FBTCxDQUFTaUIsTUFBVCxDQUFnQjJCLEVBQWhCLEVBQW9CQyxFQUFwQjtBQUNBaEIsNkJBQUs3QixHQUFMLENBQVNrQixNQUFUO0FBQ0g7QUFDSixpQkFaRDtBQWFBLG9CQUFJVyxLQUFLUyxPQUFULEVBQWtCO0FBQ2RULHlCQUFLL0MsR0FBTCxDQUFTdUMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNzQixXQUF2QztBQUNIO0FBQ0Q7QUFDSixpQkFBSyxNQUFMO0FBQ0ksb0JBQUlJLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBU3BELENBQVQsRUFBWTtBQUM5Qix3QkFBSWtDLEtBQUtTLE9BQVQsRUFBa0I7QUFDZCw0QkFBSU0sS0FBS2pELEVBQUVtQixPQUFYO0FBQ0EsNEJBQUkrQixLQUFLbEQsRUFBRXFCLE9BQVg7QUFDQXVCLDhCQUFNSyxFQUFOLEdBQVdBLEVBQVg7QUFDQUwsOEJBQU1NLEVBQU4sR0FBV0EsRUFBWDtBQUNBaEIsNkJBQUs3QixHQUFMLENBQVM4QyxZQUFULENBQXNCTCxjQUF0QixFQUFzQyxDQUF0QyxFQUF5QyxDQUF6QztBQUNBWiw2QkFBSzdCLEdBQUwsQ0FBU2dELFVBQVQsQ0FBb0JULE1BQU0xQixFQUExQixFQUE4QjBCLE1BQU14QixFQUFwQyxFQUF3Q2tDLEtBQUtDLEdBQUwsQ0FBU1gsTUFBTTFCLEVBQU4sR0FBVzBCLE1BQU1LLEVBQTFCLENBQXhDLEVBQXVFSyxLQUFLQyxHQUFMLENBQVNYLE1BQU14QixFQUFOLEdBQVd3QixNQUFNTSxFQUExQixDQUF2RTtBQUNIO0FBQ0osaUJBVEQ7QUFVQSxvQkFBSWhCLEtBQUtTLE9BQVQsRUFBa0I7QUFDZFQseUJBQUsvQyxHQUFMLENBQVN1QyxnQkFBVCxDQUEwQixXQUExQixFQUF1QzBCLGVBQXZDO0FBQ0g7QUFDRDs7QUFqQ1I7QUFvQ0gsS0FqRFc7QUFrRFpkLGFBQVMsaUJBQVN0QyxDQUFULEVBQVlvQyxJQUFaLEVBQWtCTSxNQUFsQixFQUEwQjtBQUMvQixnQkFBUU4sSUFBUjtBQUNJLGlCQUFLLE1BQUw7QUFDSSxvQkFBSW9CLEtBQUt4RCxFQUFFbUIsT0FBWDtBQUNBLG9CQUFJc0MsS0FBS3pELEVBQUVxQixPQUFYO0FBQ0E7QUFDQSxxQkFBS3NCLE9BQUwsR0FBZSxLQUFmO0FBQ0E7QUFDSixpQkFBSyxNQUFMO0FBQ0kscUJBQUtBLE9BQUwsR0FBZSxLQUFmO0FBQ0E7QUFUUjtBQVdIO0FBOURXLENBQWhCO0FBZ0VBSixPQUFPdEQsT0FBUCxHQUFpQnVELEdBQWpCLEM7Ozs7Ozs7OztBQ3RFQSxTQUFTa0IsS0FBVCxDQUFlQyxHQUFmLEVBQW9CL0MsS0FBcEIsRUFBMkJ6QixHQUEzQixFQUFnQ2tCLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQUtVLElBQUwsQ0FBVTRDLEdBQVYsRUFBZXhFLEdBQWYsRUFBb0JrQixHQUFwQjtBQUNBLFNBQUswQixTQUFMLENBQWVuQixLQUFmO0FBQ0g7O0FBRUQ4QyxNQUFNMUIsU0FBTixHQUFrQjtBQUNkakIsVUFBTSxjQUFVNEMsR0FBVixFQUFleEUsR0FBZixFQUFvQmtCLEdBQXBCLEVBQXlCO0FBQzNCLGFBQUt1RCxRQUFMLEdBQWdCRCxHQUFoQjtBQUNBLGFBQUt4RSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxhQUFLa0IsR0FBTCxHQUFXQSxHQUFYO0FBQ0gsS0FMYTtBQU1kMEIsZUFBVyxtQkFBVW5CLEtBQVYsRUFBaUI7QUFDeEIsWUFBSWlELGVBQWUsU0FBZkEsWUFBZSxDQUFVN0QsQ0FBVixFQUFhO0FBQzVCLGdCQUFJMkQsTUFBTTNELEVBQUU4RCxNQUFaO0FBQ0FDLG9CQUFRQyxHQUFSLENBQVlMLEdBQVo7QUFDQTtBQUNBO0FBQ0Esb0JBQVEzRCxFQUFFOEQsTUFBRixDQUFTRyxPQUFqQjtBQUNJLHFCQUFLLE1BQUw7QUFDSXJELDBCQUFNdUIsSUFBTixDQUFXLE1BQVg7QUFDQTtBQUNKLHFCQUFLLFFBQUw7QUFDSXZCLDBCQUFNdUIsSUFBTixDQUFXLFFBQVg7QUFDQTtBQUNKLHFCQUFLLE1BQUw7QUFDSXZCLDBCQUFNdUIsSUFBTixDQUFXLE1BQVg7QUFDQTtBQVRSO0FBV0gsU0FoQkQ7QUFpQkEsYUFBS3lCLFFBQUwsQ0FBY2xDLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDbUMsWUFBeEM7QUFDSDtBQXpCYSxDQUFsQjtBQTJCQXRCLE9BQU90RCxPQUFQLEdBQWlCeUUsS0FBakIsQzs7Ozs7Ozs7Ozs7O2tCQ2hDZTtBQUNkaEQsU0FBUSxDQURNO0FBRWRGLFFBQU87QUFGTyxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhkNTUxZjc5MTdhOTk4Nzc0MTJmIiwiZXhwb3J0cy53aW5kb3cyQ2FudmFzID0gZnVuY3Rpb24gKGNhbiwgeCwgeSkge1xyXG5cdGxldCBib3ggPSBjYW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHg6ICh4IC0gYm94LmxlZnQpICogKGNhbi53aWR0aCAvIGJveC53aWR0aCksXHJcblx0XHR5OiAoeSAtIGJveC50b3ApICogKGNhbi5oZWlnaHQgLyBib3guaGVpZ2h0KSxcclxuXHR9XHJcbn07XHJcbmV4cG9ydHMuYmluZEV2ZW50ID0gZnVuY3Rpb24gKGVsLCBmbiwgZGF0YSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBmbi5hcHBseShlbCwgW2UsIGRhdGFdKTtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC91dGlsLmpzIiwiaW1wb3J0IGNzcyBmcm9tICcuLi9zcmMvY3NzL2luZGV4LmNzcyc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL3NyYy91dGlsL3V0aWwnO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vc3JjL2JvYXJkJ1xyXG5pbXBvcnQgUGVuIGZyb20gJy4uL3NyYy9wZW4nXHJcbmltcG9ydCBUb29scyBmcm9tICcuLi9zcmMvdG9vbHMnO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL3NyYy9jb25maWcnXHJcbmxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzJyk7XHJcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuY3R4LnN0cm9rZVN0eWxlID0gY29uZmlnLmNvbG9yO1xyXG5jdHgubGluZVdkaXRoID0gY29uZmlnLndlaWdodDtcclxubGV0IHBlbiA9IG5ldyBQZW4oY3R4KTtcclxubGV0IGJvYXJkID0gbmV3IEJvYXJkKHBlbiwgY2FudmFzLCBjdHgpO1xyXG5sZXQgdG9vbHMgPSBuZXcgVG9vbHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rvb2xzJyksIGJvYXJkLCBjYW52YXMsIGN0eCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OiBBcmlhbCwgXFxcIlxcXFw1RkFFXFxcXDhGNkZcXFxcOTZDNVxcXFw5RUQxXFxcIjtcXHJcXG5cXHRmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcbiNjYW52YXMge1xcclxcblxcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdG1hcmdpbi10b3A6IDVweDtcXHJcXG5cXHRjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuI3RhYiB7XFxyXFxuXFx0YmFja2dyb3VuZDogcmdiYSg0MiwgNDIsIDQyLCAwLjUyKTtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcblxcdHBhZGRpbmc6IDAgMTBweDtcXHJcXG5cXHR3aWR0aDogODAxcHg7XFxyXFxufVxcclxcbiN0YWIgc3BhbntcXHJcXG5cXHRwYWRkaW5nOiAycHg7XFxyXFxuXFx0XFxyXFxufVxcclxcbiN0b29scyB7XFxyXFxuXFx0d2lkdGg6IDgwMXB4O1xcclxcblxcdG1hcmdpbi10b3A6IDJweDtcXHJcXG59XFxyXFxuI3Rvb2xzICNjbGVhckZsb2F0e1xcclxcblxcdGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG4jdG9vbHMgZGl2IHtcXHJcXG5cXHR3aWR0aDogMTU3cHg7XFxyXFxuXFx0aGVpZ2h0OiAxMDBweDtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRtYXJnaW46IDAgMnB4O1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG4jdG9vbHMgI2NvcHkge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxufVxcclxcbiN0b29scyAjc3Ryb2tlIHtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDBweDtcXHJcXG59XFxyXFxuI3Rvb2xzICNjaG9vc2UgI2Nob2ljZSB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuI3Rvb2xzICNjaG9vc2UgI2Nob2ljZSAjc2VsZWN0ZWQge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgICBtYXJnaW46IDVweCAwO1xcclxcbn1cXHJcXG4jdG9vbHMgI2Nob29zZSAjc2xpY2Uge1xcclxcbiAgICB3aWR0aDogNjMlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcbiN0b29scyAjY2hvb3NlICNyb3RhdGUge1xcclxcbiAgICB3aWR0aDogNjMlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvY3NzL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfIGZyb20gJy4vdXRpbC91dGlsJztcclxuZnVuY3Rpb24gQm9hcmQocGVuLCBjYW4sIGN0eCkge1xyXG5cdHRoaXMuaW5pdChwZW4sIGNhbixjdHgpO1xyXG4gICAgbGV0IG1vdXNlZG93bkhhbmRsZXIgPSB0aGlzLm1vdXNlZG93bkhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IG1vdXNlbW92ZUhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB4MSA9IGUub2Zmc2V0WDtcclxuICAgICAgICAgICAgdmFyIHkxID0gZS5vZmZzZXRZO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHgxLHkxKTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IG1vdXNldXBIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyxtb3VzZW1vdmVIYW5kbGVyKTtcclxuICAgICAgICAgICAgLy8gY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsbW91c2Vkb3duSGFuZGxlcik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyxtb3VzZW1vdmVIYW5kbGVyKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsbW91c2V1cEhhbmRsZXIpO1xyXG4gICAgICAgIHZhciBkID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbiAgICAgICAgdmFyIHggPSBlLm9mZnNldFg7XHJcbiAgICAgICAgdmFyIHkgPSBlLm9mZnNldFk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh4LHkpO1xyXG4gICAgfTtcclxuXHR0aGlzLmluaXRFdmVudChjdHgsIGNhbiwgdHJ1ZSwgbW91c2Vkb3duSGFuZGxlcik7XHJcbn1cclxuQm9hcmQucHJvdG90eXBlID0ge1xyXG4gICAgaW5pdDpmdW5jdGlvbihwZW4sY2FuLGN0eCkge1xyXG4gICAgICAgIHRoaXMucGVuID0gcGVuO1xyXG4gICAgICAgIHRoaXMuY2FuID0gY2FuO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4IHx8IHRoaXMuY2FuLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9LFxyXG4gICAgaW5pdEV2ZW50OmZ1bmN0aW9uKGN0eCxjYW52YXMsIGZpcnN0LCBtb3VzZWRvd25IYW5kbGVyKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmIChmaXJzdCkge1xyXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJyxtb3VzZWRvd25IYW5kbGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzZWxmLm1vdXNlZG93bkhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3OmZ1bmN0aW9uKHR5cGUpIHtcclxuICAgICAgICAvKmxldCBjbG9zZSA9IHt9O1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgc3VyZmFjZUltZ0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBzdGFydEhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGxldCB4MSA9IGUub2Zmc2V0WDtcclxuICAgICAgICAgICAgbGV0IHkxID0gZS5vZmZzZXRZO1xyXG4gICAgICAgICAgICBzdXJmYWNlSW1nRGF0YSA9IHNlbGYuY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzZWxmLmNhbi53aWR0aCwgc2VsZi5jYW4uaGVpZ2h0KTtcclxuICAgICAgICAgICAgc2VsZi5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHNlbGYuY3R4Lm1vdmVUbyh4MSwgeTEpO1xyXG4gICAgICAgICAgICBjbG9zZS54MSA9IHgxO1xyXG4gICAgICAgICAgICBjbG9zZS55MSA9IHkxO1xyXG4gICAgICAgICAgICBzZWxmLmNhbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlSGFuZGxlcilcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgbGV0IHgyID0gZS5vZmZzZXRYO1xyXG4gICAgICAgICAgICBsZXQgeTIgPSBlLm9mZnNldFk7XHJcbiAgICAgICAgICAgIGNsb3NlLngyID0geDI7XHJcbiAgICAgICAgICAgIGNsb3NlLnkyID0geTI7XHJcbiAgICAgICAgICAgIC8vIHNlbGYuY3R4LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbi53aWR0aCwgc2VsZi5jYW4uaGVpZ2h0KTtcclxuICAgICAgICAgICAgc2VsZi5jdHgucHV0SW1hZ2VEYXRhKHN1cmZhY2VJbWdEYXRhLCAwLCAwKTtcclxuICAgICAgICAgICAgc2VsZi5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHNlbGYuY3R4Lm1vdmVUbyhjbG9zZS54MSwgY2xvc2UueTEpO1xyXG4gICAgICAgICAgICBzZWxmLmN0eC5saW5lVG8oeDIsIHkyKTtcclxuICAgICAgICAgICAgc2VsZi5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHgyLCB5Mik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgZmluaXNoSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgbGV0IHgzID0gZS5vZmZzZXRYO1xyXG4gICAgICAgICAgICBsZXQgeTMgPSBlLm9mZnNldFk7XHJcbiAgICAgICAgICAgIGNsb3NlLngzID0geDM7XHJcbiAgICAgICAgICAgIGNsb3NlLnkzID0geTM7XHJcbiAgICAgICAgICAgIHNlbGYuY2FuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVIYW5kbGVyKTtcclxuICAgICAgICB9OyovXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdsaW5lJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEV2ZW50KHRoaXMuY3R4LCB0aGlzLmNhbiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgXy5iaW5kRXZlbnQoc2VsZi5wZW4sIHNlbGYucGVuLmRyYXdTdGFydCwgdHlwZSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF8uYmluZEV2ZW50KHNlbGYucGVuLCBzZWxmLnBlbi5kcmF3RW5kLCB0eXBlKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmVjdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRFdmVudCh0aGlzLmN0eCwgdGhpcy5jYW4sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIF8uYmluZEV2ZW50KHNlbGYucGVuLCBzZWxmLnBlbi5kcmF3U3RhcnQsIHR5cGUpICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgXy5iaW5kRXZlbnQoc2VsZi5wZW4sIHNlbGYucGVuLmRyYXdFbmQsIHR5cGUpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjaXJjbGUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2VsZi5wZW4uZHJhd1N0YXJ0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzZWxmLnBlbi5kcmF3RW5kKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RXZlbnQoKTtcclxuICAgICAgICB9XHJcblx0fVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2FyZC5qcyIsImZ1bmN0aW9uIFBlbihjdHgpIHtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5jYW4gPSB0aGlzLmN0eC5jYW52YXM7XHJcblx0dGhpcy5jb2xvciA9IGN0eC5zdHJva2VTdHlsZTtcclxuXHR0aGlzLndlaWdodCA9IGN0eC5saW5lV2lkdGg7XHJcbn1cclxuUGVuLnByb3RvdHlwZSA9IHtcclxuICAgIGRyYXdTdGFydDogZnVuY3Rpb24oZSwgdHlwZSwgcG9pbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy8gc2VsZi5jdHggPSBzZWxmLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgbGV0IGNsb3NlID0ge307XHJcbiAgICAgICAgbGV0IHgxID0gZS5vZmZzZXRYO1xyXG4gICAgICAgIGxldCB5MSA9IGUub2Zmc2V0WTtcclxuICAgICAgICBzZWxmLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBzZWxmLmN0eC5tb3ZlVG8oeDEsIHkxKTtcclxuICAgICAgICBjbG9zZS54MSA9IHgxO1xyXG4gICAgICAgIGNsb3NlLnkxID0geTE7XHJcbiAgICAgICAgbGV0IHN1cmZhY2VJbWdEYXRhID0gc2VsZi5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNlbGYuY2FuLndpZHRoLCBzZWxmLmNhbi5oZWlnaHQpO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdsaW5lJzpcclxuICAgICAgICAgICAgICAgIGxldCBtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kcmF3aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4MiA9IGUub2Zmc2V0WDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkyID0gZS5vZmZzZXRZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZS54MiA9IHgyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZS55MiA9IHkyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmN0eC5wdXRJbWFnZURhdGEoc3VyZmFjZUltZ0RhdGEsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jdHgubW92ZVRvKGNsb3NlLngxLCBjbG9zZS55MSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY3R4LmxpbmVUbyh4MiwgeTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuZHJhd2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZWN0JzpcclxuICAgICAgICAgICAgICAgIGxldCByZWN0bW92ZUhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZHJhd2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeDIgPSBlLm9mZnNldFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5MiA9IGUub2Zmc2V0WTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UueDIgPSB4MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UueTIgPSB5MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jdHgucHV0SW1hZ2VEYXRhKHN1cmZhY2VJbWdEYXRhLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jdHguc3Ryb2tlUmVjdChjbG9zZS54MSwgY2xvc2UueTEsIE1hdGguYWJzKGNsb3NlLngxIC0gY2xvc2UueDIpLCBNYXRoLmFicyhjbG9zZS55MSAtIGNsb3NlLnkyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmRyYXdpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCByZWN0bW92ZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3RW5kOiBmdW5jdGlvbihlLCB0eXBlLCBwb2ludHMpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGluZSc6XHJcbiAgICAgICAgICAgICAgICBsZXQgeDMgPSBlLm9mZnNldFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgeTMgPSBlLm9mZnNldFk7XHJcbiAgICAgICAgICAgICAgICAvLyBzZWxmLmNhbi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlSGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZWN0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IFBlbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGVuLmpzIiwiZnVuY3Rpb24gVG9vbHMoZG9tLCBib2FyZCwgY2FuLCBjdHgpIHsgIFxyXG4gICAgdGhpcy5pbml0KGRvbSwgY2FuLCBjdHgpO1xyXG4gICAgdGhpcy5pbml0RXZlbnQoYm9hcmQpO1xyXG59O1xyXG5cclxuVG9vbHMucHJvdG90eXBlID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKGRvbSwgY2FuLCBjdHgpIHtcclxuICAgICAgICB0aGlzLnRvb2xzRG9tID0gZG9tO1xyXG4gICAgICAgIHRoaXMuY2FuID0gY2FuO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgfSxcclxuICAgIGluaXRFdmVudDogZnVuY3Rpb24gKGJvYXJkKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGxldCBkb20gPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZG9tKTtcclxuICAgICAgICAgICAgLy8gbGV0IHN0YXJ0WCA9IGUub2Zmc2V0WDtcclxuICAgICAgICAgICAgLy8gbGV0IHN0YXJ0WSA9IGUub2Zmc2V0WTtcclxuICAgICAgICAgICAgc3dpdGNoIChlLnRhcmdldC50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsaW5lJzpcclxuICAgICAgICAgICAgICAgICAgICBib2FyZC5kcmF3KCdsaW5lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjaXJjbGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkLmRyYXcoJ2NpcmNsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVjdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQuZHJhdygncmVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRvb2xzRG9tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuICAgIH1cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBUb29scztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9vbHMuanMiLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0d2VpZ2h0OiAyLFxyXG5cdGNvbG9yOiAncmVkJ1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWcuanMiXSwic291cmNlUm9vdCI6IiJ9