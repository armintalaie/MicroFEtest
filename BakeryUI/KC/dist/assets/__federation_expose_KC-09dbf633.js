import {importShared} from './__federation_fn_import.js';
import { _ as __vitePreload } from './preload-helper-8dea4d1a.js';
const {default:React,r:react,c:commonjsGlobal,g:getDefaultExportFromCjs} = await importShared('react');


var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$1=react.exports,k$2=Symbol.for("react.element"),l$1=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n$1=f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$1={key:!0,ref:!0,__self:!0,__source:!0};
function q$1(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$1.call(a,b)&&!p$1.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k$2,type:c,key:e,ref:h,props:d,_owner:n$1.current}}reactJsxRuntime_production_min.Fragment=l$1;reactJsxRuntime_production_min.jsx=q$1;reactJsxRuntime_production_min.jsxs=q$1;

(function (module) {

	{
	  module.exports = reactJsxRuntime_production_min;
	}
} (jsxRuntime));

const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;

const remotesMap = {
'shared':{url:'http://localhost:5001/assets/sharedm.js',format:'esm',from:'vite'}
};
const loadJS = async (url, fn) => {
  const resolvedUrl = typeof url === 'function' ? await url() : url;
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = fn;
  script.src = resolvedUrl;
  document.getElementsByTagName('head')[0].appendChild(script);
};
const scriptTypes = ['var'];
const importTypes = ['esm', 'systemjs'];
function get$2(name, remoteFrom){
  return __federation_import(name).then(module => ()=> {
    if (remoteFrom === 'webpack') {
      return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module
    }
    return module
  })
}
const wrapShareModule = remoteFrom => {
  return {
    'react':{'18.2.0':{get:()=>get$2('./__federation_shared_react.js', remoteFrom), loaded:1}}
  }
};
async function __federation_import(name){
  return __vitePreload(() => import(name),true?[]:void 0);
}
async function __federation_method_ensure(remoteId) {
  const remote = remotesMap[remoteId];
  if (!remote.inited) {
    if (scriptTypes.includes(remote.format)) {
      // loading js with script tag
      return new Promise(resolve => {
        const callback = () => {
          if (!remote.inited) {
            remote.lib = window[remoteId];
            remote.lib.init(wrapShareModule(remote.from));
            remote.inited = true;
          }
          resolve(remote.lib);
        };
        return loadJS(remote.url, callback);
      });
    } else if (importTypes.includes(remote.format)) {
      // loading js with import(...)
      return new Promise(resolve => {
        const getUrl = typeof remote.url === 'function' ? remote.url : () => Promise.resolve(remote.url);
        getUrl().then(url => {
          __vitePreload(() => import(/* @vite-ignore */ url),true?[]:void 0).then(lib => {
            if (!remote.inited) {
              const shareScope = wrapShareModule(remote.from);
              lib.init(shareScope);
              remote.lib = lib;
              remote.lib.init(shareScope);
              remote.inited = true;
            }
            resolve(remote.lib);
          });
        });
      })
    }
  } else {
    return remote.lib;
  }
}

function __federation_method_unwrapDefault(module) {
  return (module?.__esModule || module?.[Symbol.toStringTag] === 'Module')?module.default:module
}

function __federation_method_getRemote(remoteName,  componentName){
  return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

const classNames = classnames.exports;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$7(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$7;

function _typeof$h(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$h = function _typeof(obj) { return typeof obj; }; } else { _typeof$h = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$h(obj); }
var SVGContainerPropKeys = ['viewBox', 'children'];
var SVGElementPropKeys = ['aria-activedescendant', 'aria-atomic', 'aria-autocomplete', 'aria-busy', 'aria-checked', 'aria-colcount', 'aria-colindex', 'aria-colspan', 'aria-controls', 'aria-current', 'aria-describedby', 'aria-details', 'aria-disabled', 'aria-errormessage', 'aria-expanded', 'aria-flowto', 'aria-haspopup', 'aria-hidden', 'aria-invalid', 'aria-keyshortcuts', 'aria-label', 'aria-labelledby', 'aria-level', 'aria-live', 'aria-modal', 'aria-multiline', 'aria-multiselectable', 'aria-orientation', 'aria-owns', 'aria-placeholder', 'aria-posinset', 'aria-pressed', 'aria-readonly', 'aria-relevant', 'aria-required', 'aria-roledescription', 'aria-rowcount', 'aria-rowindex', 'aria-rowspan', 'aria-selected', 'aria-setsize', 'aria-sort', 'aria-valuemax', 'aria-valuemin', 'aria-valuenow', 'aria-valuetext', 'className', 'color', 'height', 'id', 'lang', 'max', 'media', 'method', 'min', 'name', 'style', 'target', 'type', 'width', 'role', 'tabIndex', 'accentHeight', 'accumulate', 'additive', 'alignmentBaseline', 'allowReorder', 'alphabetic', 'amplitude', 'arabicForm', 'ascent', 'attributeName', 'attributeType', 'autoReverse', 'azimuth', 'baseFrequency', 'baselineShift', 'baseProfile', 'bbox', 'begin', 'bias', 'by', 'calcMode', 'capHeight', 'clip', 'clipPath', 'clipPathUnits', 'clipRule', 'colorInterpolation', 'colorInterpolationFilters', 'colorProfile', 'colorRendering', 'contentScriptType', 'contentStyleType', 'cursor', 'cx', 'cy', 'd', 'decelerate', 'descent', 'diffuseConstant', 'direction', 'display', 'divisor', 'dominantBaseline', 'dur', 'dx', 'dy', 'edgeMode', 'elevation', 'enableBackground', 'end', 'exponent', 'externalResourcesRequired', 'fill', 'fillOpacity', 'fillRule', 'filter', 'filterRes', 'filterUnits', 'floodColor', 'floodOpacity', 'focusable', 'fontFamily', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle', 'fontVariant', 'fontWeight', 'format', 'from', 'fx', 'fy', 'g1', 'g2', 'glyphName', 'glyphOrientationHorizontal', 'glyphOrientationVertical', 'glyphRef', 'gradientTransform', 'gradientUnits', 'hanging', 'horizAdvX', 'horizOriginX', 'href', 'ideographic', 'imageRendering', 'in2', 'in', 'intercept', 'k1', 'k2', 'k3', 'k4', 'k', 'kernelMatrix', 'kernelUnitLength', 'kerning', 'keyPoints', 'keySplines', 'keyTimes', 'lengthAdjust', 'letterSpacing', 'lightingColor', 'limitingConeAngle', 'local', 'markerEnd', 'markerHeight', 'markerMid', 'markerStart', 'markerUnits', 'markerWidth', 'mask', 'maskContentUnits', 'maskUnits', 'mathematical', 'mode', 'numOctaves', 'offset', 'opacity', 'operator', 'order', 'orient', 'orientation', 'origin', 'overflow', 'overlinePosition', 'overlineThickness', 'paintOrder', 'panose1', 'pathLength', 'patternContentUnits', 'patternTransform', 'patternUnits', 'pointerEvents', 'points', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'preserveAlpha', 'preserveAspectRatio', 'primitiveUnits', 'r', 'radius', 'refX', 'refY', 'renderingIntent', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'result', 'rotate', 'rx', 'ry', 'seed', 'shapeRendering', 'slope', 'spacing', 'specularConstant', 'specularExponent', 'speed', 'spreadMethod', 'startOffset', 'stdDeviation', 'stemh', 'stemv', 'stitchTiles', 'stopColor', 'stopOpacity', 'strikethroughPosition', 'strikethroughThickness', 'string', 'stroke', 'strokeDasharray', 'strokeDashoffset', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth', 'surfaceScale', 'systemLanguage', 'tableValues', 'targetX', 'targetY', 'textAnchor', 'textDecoration', 'textLength', 'textRendering', 'to', 'transform', 'u1', 'u2', 'underlinePosition', 'underlineThickness', 'unicode', 'unicodeBidi', 'unicodeRange', 'unitsPerEm', 'vAlphabetic', 'values', 'vectorEffect', 'version', 'vertAdvY', 'vertOriginX', 'vertOriginY', 'vHanging', 'vIdeographic', 'viewTarget', 'visibility', 'vMathematical', 'widths', 'wordSpacing', 'writingMode', 'x1', 'x2', 'x', 'xChannelSelector', 'xHeight', 'xlinkActuate', 'xlinkArcrole', 'xlinkHref', 'xlinkRole', 'xlinkShow', 'xlinkTitle', 'xlinkType', 'xmlBase', 'xmlLang', 'xmlns', 'xmlnsXlink', 'xmlSpace', 'y1', 'y2', 'y', 'yChannelSelector', 'z', 'zoomAndPan', 'ref', 'key', 'angle'];
var EventKeys = ['dangerouslySetInnerHTML', 'onCopy', 'onCopyCapture', 'onCut', 'onCutCapture', 'onPaste', 'onPasteCapture', 'onCompositionEnd', 'onCompositionEndCapture', 'onCompositionStart', 'onCompositionStartCapture', 'onCompositionUpdate', 'onCompositionUpdateCapture', 'onFocus', 'onFocusCapture', 'onBlur', 'onBlurCapture', 'onChange', 'onChangeCapture', 'onBeforeInput', 'onBeforeInputCapture', 'onInput', 'onInputCapture', 'onReset', 'onResetCapture', 'onSubmit', 'onSubmitCapture', 'onInvalid', 'onInvalidCapture', 'onLoad', 'onLoadCapture', 'onError', 'onErrorCapture', 'onKeyDown', 'onKeyDownCapture', 'onKeyPress', 'onKeyPressCapture', 'onKeyUp', 'onKeyUpCapture', 'onAbort', 'onAbortCapture', 'onCanPlay', 'onCanPlayCapture', 'onCanPlayThrough', 'onCanPlayThroughCapture', 'onDurationChange', 'onDurationChangeCapture', 'onEmptied', 'onEmptiedCapture', 'onEncrypted', 'onEncryptedCapture', 'onEnded', 'onEndedCapture', 'onLoadedData', 'onLoadedDataCapture', 'onLoadedMetadata', 'onLoadedMetadataCapture', 'onLoadStart', 'onLoadStartCapture', 'onPause', 'onPauseCapture', 'onPlay', 'onPlayCapture', 'onPlaying', 'onPlayingCapture', 'onProgress', 'onProgressCapture', 'onRateChange', 'onRateChangeCapture', 'onSeeked', 'onSeekedCapture', 'onSeeking', 'onSeekingCapture', 'onStalled', 'onStalledCapture', 'onSuspend', 'onSuspendCapture', 'onTimeUpdate', 'onTimeUpdateCapture', 'onVolumeChange', 'onVolumeChangeCapture', 'onWaiting', 'onWaitingCapture', 'onAuxClick', 'onAuxClickCapture', 'onClick', 'onClickCapture', 'onContextMenu', 'onContextMenuCapture', 'onDoubleClick', 'onDoubleClickCapture', 'onDrag', 'onDragCapture', 'onDragEnd', 'onDragEndCapture', 'onDragEnter', 'onDragEnterCapture', 'onDragExit', 'onDragExitCapture', 'onDragLeave', 'onDragLeaveCapture', 'onDragOver', 'onDragOverCapture', 'onDragStart', 'onDragStartCapture', 'onDrop', 'onDropCapture', 'onMouseDown', 'onMouseDownCapture', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseMoveCapture', 'onMouseOut', 'onMouseOutCapture', 'onMouseOver', 'onMouseOverCapture', 'onMouseUp', 'onMouseUpCapture', 'onSelect', 'onSelectCapture', 'onTouchCancel', 'onTouchCancelCapture', 'onTouchEnd', 'onTouchEndCapture', 'onTouchMove', 'onTouchMoveCapture', 'onTouchStart', 'onTouchStartCapture', 'onPointerDown', 'onPointerDownCapture', 'onPointerMove', 'onPointerMoveCapture', 'onPointerUp', 'onPointerUpCapture', 'onPointerCancel', 'onPointerCancelCapture', 'onPointerEnter', 'onPointerEnterCapture', 'onPointerLeave', 'onPointerLeaveCapture', 'onPointerOver', 'onPointerOverCapture', 'onPointerOut', 'onPointerOutCapture', 'onGotPointerCapture', 'onGotPointerCaptureCapture', 'onLostPointerCapture', 'onLostPointerCaptureCapture', 'onScroll', 'onScrollCapture', 'onWheel', 'onWheelCapture', 'onAnimationStart', 'onAnimationStartCapture', 'onAnimationEnd', 'onAnimationEndCapture', 'onAnimationIteration', 'onAnimationIterationCapture', 'onTransitionEnd', 'onTransitionEndCapture']; // Animation Types => TODO: Should be moved when react-smooth is typescriptified.

var filterProps = function filterProps(props, includeEvents, isSvg) {
  if (!props || typeof props === 'function' || typeof props === 'boolean') {
    return null;
  }

  var inputProps = props;

  if ( /*#__PURE__*/react.exports.isValidElement(props)) {
    inputProps = props.props;
  }

  if (!isObject_1(inputProps)) {
    return null;
  }

  var out = {};
  Object.keys(inputProps).forEach(function (key) {
    // viewBox only exist in <svg />
    if (SVGElementPropKeys.includes(key) || isSvg && SVGContainerPropKeys.includes(key) || includeEvents && EventKeys.includes(key)) {
      out[key] = inputProps[key];
    }
  });
  return out;
};
var adaptEventHandlers = function adaptEventHandlers(props, newHandler) {
  if (!props || typeof props === 'function' || typeof props === 'boolean') {
    return null;
  }

  var inputProps = props;

  if ( /*#__PURE__*/react.exports.isValidElement(props)) {
    inputProps = props.props;
  }

  if (!isObject_1(inputProps)) {
    return null;
  }

  var out = {};
  Object.keys(inputProps).forEach(function (key) {
    if (EventKeys.includes(key)) {
      out[key] = newHandler || function (e) {
        return inputProps[key](inputProps, e);
      };
    }
  });
  return out;
};

var getEventHandlerOfChild = function getEventHandlerOfChild(originalHandler, data, index) {
  return function (e) {
    originalHandler(data, index, e);
    return null;
  };
};

var adaptEventsOfChild = function adaptEventsOfChild(props, data, index) {
  if (!isObject_1(props) || _typeof$h(props) !== 'object') {
    return null;
  }

  var out = null;
  Object.keys(props).forEach(function (key) {
    var item = props[key];

    if (EventKeys.includes(key) && typeof item === 'function') {
      if (!out) out = {};
      out[key] = getEventHandlerOfChild(item, data, index);
    }
  });
  return out;
};

function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

function _objectWithoutProperties$a(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$a(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Surface(props) {
  var children = props.children,
      width = props.width,
      height = props.height,
      viewBox = props.viewBox,
      className = props.className,
      style = props.style,
      others = _objectWithoutProperties$a(props, ["children", "width", "height", "viewBox", "className", "style"]);

  var svgView = viewBox || {
    width: width,
    height: height,
    x: 0,
    y: 0
  };
  var layerClass = classNames('recharts-surface', className);
  return /*#__PURE__*/React.createElement("svg", _extends$j({}, filterProps(others, true, true), {
    className: layerClass,
    width: width,
    height: height,
    style: style,
    viewBox: "".concat(svgView.x, " ").concat(svgView.y, " ").concat(svgView.width, " ").concat(svgView.height),
    version: "1.1"
  }), /*#__PURE__*/React.createElement("title", null, props.title), /*#__PURE__*/React.createElement("desc", null, props.desc), children);
}

function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

function _objectWithoutProperties$9(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$9(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$9(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Layer = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      others = _objectWithoutProperties$9(props, ["children", "className"]);

  var layerClass = classNames('recharts-layer', className);
  return /*#__PURE__*/React.createElement("g", _extends$i({
    className: layerClass
  }, filterProps(others, true), {
    ref: ref
  }), children);
});

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$9 = freeGlobal || freeSelf || Function('return this')();

var _root = root$9;

var root$8 = _root;

/** Built-in value references. */
var Symbol$6 = root$8.Symbol;

var _Symbol = Symbol$6;

var Symbol$5 = _Symbol;

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$b.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$a = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$a.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$4 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$8(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$8;

var baseGetTag$7 = _baseGetTag,
    isObject$6 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$2(value) {
  if (!isObject$6(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$7(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$2;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq$3(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$3;

var eq$2 = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$2(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$4;

var assocIndexOf$3 = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$3(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$1 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$4(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype['delete'] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;

var _ListCache = ListCache$4;

var ListCache$3 = _ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$3;
  this.size = 0;
}

var _stackClear = stackClear$1;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete$1;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet$1;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas$1;

var root$7 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$7['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$2;

var isFunction$1 = isFunction_1,
    isMasked = _isMasked,
    isObject$5 = isObject_1,
    toSource$1 = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$9 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$8).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject$5(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$7;

var getNative$6 = _getNative,
    root$6 = _root;

/* Built-in method references that are verified to be native. */
var Map$4 = getNative$6(root$6, 'Map');

var _Map = Map$4;

var getNative$5 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$4 = getNative$5(Object, 'create');

var _nativeCreate = nativeCreate$4;

var nativeCreate$3 = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$1 = _nativeCreate;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$6.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

var Hash = _Hash,
    ListCache$2 = _ListCache,
    Map$3 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$3 || ListCache$2),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$4;

var getMapData$3 = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$1 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$3(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype['delete'] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;

var _MapCache = MapCache$3;

var ListCache$1 = _ListCache,
    Map$2 = _Map,
    MapCache$2 = _MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || (pairs.length < LARGE_ARRAY_SIZE$1 - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$2(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet$1;

var ListCache = _ListCache,
    stackClear = _stackClear,
    stackDelete = _stackDelete,
    stackGet = _stackGet,
    stackHas = _stackHas,
    stackSet = _stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$2.prototype.clear = stackClear;
Stack$2.prototype['delete'] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;

var _Stack = Stack$2;

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

var _setCacheAdd = setCacheAdd$1;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */

function setCacheHas$1(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas$1;

var MapCache$1 = _MapCache,
    setCacheAdd = _setCacheAdd,
    setCacheHas = _setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$2(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache$1;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$2.prototype.add = SetCache$2.prototype.push = setCacheAdd;
SetCache$2.prototype.has = setCacheHas;

var _SetCache = SetCache$2;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */

function arraySome$2(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome$2;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function cacheHas$2(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas$2;

var SetCache$1 = _SetCache,
    arraySome$1 = _arraySome,
    cacheHas$1 = _cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new SetCache$1 : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome$1(other, function(othValue, othIndex) {
            if (!cacheHas$1(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays$2;

var root$5 = _root;

/** Built-in value references. */
var Uint8Array$1 = root$5.Uint8Array;

var _Uint8Array = Uint8Array$1;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */

function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray$1;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */

function setToArray$3(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray$3;

var Symbol$3 = _Symbol,
    Uint8Array = _Uint8Array,
    eq$1 = eq_1,
    equalArrays$1 = _equalArrays,
    mapToArray = _mapToArray,
    setToArray$2 = _setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/** `Object#toString` result references. */
var boolTag$2 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$2 = '[object Map]',
    numberTag$2 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$1 = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : undefined,
    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$2:
    case dateTag$1:
    case numberTag$2:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq$1(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$2:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$2:
      var convert = mapToArray;

    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray$2);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag$1;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

function arrayPush$2(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush$2;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$e = Array.isArray;

var isArray_1 = isArray$e;

var arrayPush$1 = _arrayPush,
    isArray$d = isArray_1;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$d(object) ? result : arrayPush$1(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys$1;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter$1;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */

function stubArray$1() {
  return [];
}

var stubArray_1 = stubArray$1;

var arrayFilter = _arrayFilter,
    stubArray = stubArray_1;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols$1;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */

function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$8(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$8;

var baseGetTag$6 = _baseGetTag,
    isObjectLike$7 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$7(value) && baseGetTag$6(value) == argsTag$2;
}

var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments,
    isObjectLike$6 = isObjectLike_1;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$3 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike$6(value) && hasOwnProperty$5.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments$3;

var isBuffer$2 = {exports: {}};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

(function (module, exports) {
	var root = _root,
	    stubFalse = stubFalse_1;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;
} (isBuffer$2, isBuffer$2.exports));

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$2 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$3(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$2 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$3;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$3(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength$3;

var baseGetTag$5 = _baseGetTag,
    isLength$2 = isLength_1,
    isObjectLike$5 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] =
typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$5(value) &&
    isLength$2(value.length) && !!typedArrayTags[baseGetTag$5(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary$2(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$2;

var _nodeUtil = {exports: {}};

(function (module, exports) {
	var freeGlobal = _freeGlobal;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
} (_nodeUtil, _nodeUtil.exports));

var baseIsTypedArray = _baseIsTypedArray,
    baseUnary$1 = _baseUnary,
    nodeUtil = _nodeUtil.exports;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$2 = nodeIsTypedArray ? baseUnary$1(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$2;

var baseTimes = _baseTimes,
    isArguments$2 = isArguments_1,
    isArray$c = isArray_1,
    isBuffer$1 = isBuffer$2.exports,
    isIndex$2 = _isIndex,
    isTypedArray$1 = isTypedArray_1;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$c(value),
      isArg = !isArr && isArguments$2(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex$2(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$1;

/** Used for built-in method references. */

var objectProto$3 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$3;

  return value === proto;
}

var _isPrototype = isPrototype$1;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$1;

var overArg = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg(Object.keys, Object);

var _nativeKeys = nativeKeys$1;

var isPrototype = _isPrototype,
    nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$2.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;

var isFunction = isFunction_1,
    isLength$1 = isLength_1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$5(value) {
  return value != null && isLength$1(value.length) && !isFunction(value);
}

var isArrayLike_1 = isArrayLike$5;

var arrayLikeKeys = _arrayLikeKeys,
    baseKeys = _baseKeys,
    isArrayLike$4 = isArrayLike_1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$5(object) {
  return isArrayLike$4(object) ? arrayLikeKeys(object) : baseKeys(object);
}

var keys_1 = keys$5;

var baseGetAllKeys = _baseGetAllKeys,
    getSymbols = _getSymbols,
    keys$4 = keys_1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$4, getSymbols);
}

var _getAllKeys = getAllKeys$1;

var getAllKeys = _getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects$1;

var getNative$4 = _getNative,
    root$4 = _root;

/* Built-in method references that are verified to be native. */
var DataView$2 = getNative$4(root$4, 'DataView');

var _DataView = DataView$2;

var getNative$3 = _getNative,
    root$3 = _root;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$3(root$3, 'Promise');

var _Promise = Promise$2;

var getNative$2 = _getNative,
    root$2 = _root;

/* Built-in method references that are verified to be native. */
var Set$3 = getNative$2(root$2, 'Set');

var _Set = Set$3;

var getNative$1 = _getNative,
    root$1 = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative$1(root$1, 'WeakMap');

var _WeakMap = WeakMap$1;

var DataView$1 = _DataView,
    Map$1 = _Map,
    Promise$1 = _Promise,
    Set$2 = _Set,
    WeakMap = _WeakMap,
    baseGetTag$4 = _baseGetTag,
    toSource = _toSource;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView$1),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set$2),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag$4;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView$1 && getTag$1(new DataView$1(new ArrayBuffer(1))) != dataViewTag) ||
    (Map$1 && getTag$1(new Map$1) != mapTag) ||
    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
    (Set$2 && getTag$1(new Set$2) != setTag) ||
    (WeakMap && getTag$1(new WeakMap) != weakMapTag)) {
  getTag$1 = function(value) {
    var result = baseGetTag$4(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var _getTag = getTag$1;

var Stack$1 = _Stack,
    equalArrays = _equalArrays,
    equalByTag = _equalByTag,
    equalObjects = _equalObjects,
    getTag = _getTag,
    isArray$b = isArray_1,
    isBuffer = isBuffer$2.exports,
    isTypedArray = isTypedArray_1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$b(object),
      othIsArr = isArray$b(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$1.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack$1);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep$1;

var baseIsEqualDeep = _baseIsEqualDeep,
    isObjectLike$4 = isObjectLike_1;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$3(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike$4(value) && !isObjectLike$4(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$3, stack);
}

var _baseIsEqual = baseIsEqual$3;

var Stack = _Stack,
    baseIsEqual$2 = _baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual$2(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch$1;

var isObject$4 = isObject_1;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable$2(value) {
  return value === value && !isObject$4(value);
}

var _isStrictComparable = isStrictComparable$2;

var isStrictComparable$1 = _isStrictComparable,
    keys$3 = keys_1;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData$1(object) {
  var result = keys$3(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}

var _getMatchData = getMatchData$1;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */

function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable$2;

var baseIsMatch = _baseIsMatch,
    getMatchData = _getMatchData,
    matchesStrictComparable$1 = _matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches$1;

var baseGetTag$3 = _baseGetTag,
    isObjectLike$3 = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$6(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$3(value) && baseGetTag$3(value) == symbolTag);
}

var isSymbol_1 = isSymbol$6;

var isArray$a = isArray_1,
    isSymbol$5 = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$3(value, object) {
  if (isArray$a(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol$5(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$3;

var MapCache = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$2(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$2.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize$2.Cache = MapCache;

var memoize_1 = memoize$2;

var memoize$1 = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize$1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;

var memoizeCapped = _memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap$3(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$3;

var Symbol$2 = _Symbol,
    arrayMap$2 = _arrayMap,
    isArray$9 = isArray_1,
    isSymbol$4 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$3 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$2 ? Symbol$2.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$9(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap$2(value, baseToString$1) + '';
  }
  if (isSymbol$4(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$3) ? '-0' : result;
}

var _baseToString = baseToString$1;

var baseToString = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$3(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$3;

var isArray$8 = isArray_1,
    isKey$2 = _isKey,
    stringToPath = _stringToPath,
    toString$2 = toString_1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$2(value, object) {
  if (isArray$8(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString$2(value));
}

var _castPath = castPath$2;

var isSymbol$3 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$4(value) {
  if (typeof value == 'string' || isSymbol$3(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
}

var _toKey = toKey$4;

var castPath$1 = _castPath,
    toKey$3 = _toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$3(object, path) {
  path = castPath$1(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey$3(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet$3;

var baseGet$2 = _baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$1(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet$2(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get$1;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */

function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn$1;

var castPath = _castPath,
    isArguments$1 = isArguments_1,
    isArray$7 = isArray_1,
    isIndex$1 = _isIndex,
    isLength = isLength_1,
    toKey$2 = _toKey;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath$1(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey$2(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex$1(key, length) &&
    (isArray$7(object) || isArguments$1(object));
}

var _hasPath = hasPath$1;

var baseHasIn = _baseHasIn,
    hasPath = _hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

var hasIn_1 = hasIn$1;

var baseIsEqual$1 = _baseIsEqual,
    get = get_1,
    hasIn = hasIn_1,
    isKey$1 = _isKey,
    isStrictComparable = _isStrictComparable,
    matchesStrictComparable = _matchesStrictComparable,
    toKey$1 = _toKey;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

var _baseMatchesProperty = baseMatchesProperty$1;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */

function identity$b(value) {
  return value;
}

var identity_1 = identity$b;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */

function baseProperty$1(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty$1;

var baseGet$1 = _baseGet;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet$1(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep$1;

var baseProperty = _baseProperty,
    basePropertyDeep = _basePropertyDeep,
    isKey = _isKey,
    toKey = _toKey;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

var property_1 = property$1;

var baseMatches = _baseMatches,
    baseMatchesProperty = _baseMatchesProperty,
    identity$a = identity_1,
    isArray$6 = isArray_1,
    property = property_1;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee$8(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity$a;
  }
  if (typeof value == 'object') {
    return isArray$6(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

var _baseIteratee = baseIteratee$8;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function baseFindIndex$2(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex$2;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */

function baseIsNaN$1(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN$1;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function strictIndexOf$1(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf$1;

var baseFindIndex$1 = _baseFindIndex,
    baseIsNaN = _baseIsNaN,
    strictIndexOf = _strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf$1(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex$1(array, baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf$1;

var baseIndexOf = _baseIndexOf;

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes$1(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes$1;

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */

function arrayIncludesWith$1(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

var _arrayIncludesWith = arrayIncludesWith$1;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */

function noop$2() {
  // No operation performed.
}

var noop_1 = noop$2;

var Set$1 = _Set,
    noop$1 = noop_1,
    setToArray$1 = _setToArray;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet$1 = !(Set$1 && (1 / setToArray$1(new Set$1([,-0]))[1]) == INFINITY$1) ? noop$1 : function(values) {
  return new Set$1(values);
};

var _createSet = createSet$1;

var SetCache = _SetCache,
    arrayIncludes = _arrayIncludes,
    arrayIncludesWith = _arrayIncludesWith,
    cacheHas = _cacheHas,
    createSet = _createSet,
    setToArray = _setToArray;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq$1(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

var _baseUniq = baseUniq$1;

var baseIteratee$7 = _baseIteratee,
    baseUniq = _baseUniq;

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee$7(iteratee)) : [];
}

var uniqBy_1 = uniqBy;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */

function baseSlice$1(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice$1;

var baseSlice = _baseSlice;

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice$1(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

var _castSlice = castSlice$1;

/** Used to compose unicode character classes. */

var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ$1 = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$1 + rsVarRange$1 + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode$2(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode$2;

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */

function asciiToArray$1(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray$1;

/** Used to compose unicode character classes. */

var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray$1(string) {
  return string.match(reUnicode) || [];
}

var _unicodeToArray = unicodeToArray$1;

var asciiToArray = _asciiToArray,
    hasUnicode$1 = _hasUnicode,
    unicodeToArray = _unicodeToArray;

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray$1(string) {
  return hasUnicode$1(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

var _stringToArray = stringToArray$1;

var castSlice = _castSlice,
    hasUnicode = _hasUnicode,
    stringToArray = _stringToArray,
    toString$1 = toString_1;

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst$1(methodName) {
  return function(string) {
    string = toString$1(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

var _createCaseFirst = createCaseFirst$1;

var createCaseFirst = _createCaseFirst;

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

var upperFirst_1 = upperFirst;

const pi$1 = Math.PI,
    tau$1 = 2 * pi$1,
    epsilon = 1e-6,
    tauEpsilon = tau$1 - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau$1 + tau$1;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi$1)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

function constant$3(x) {
  return function constant() {
    return x;
  };
}

var pi = Math.PI;
var tau = 2 * pi;

function array(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
}

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

function curveLinear(context) {
  return new Linear(context);
}

function x$1(p) {
  return p[0];
}

function y$1(p) {
  return p[1];
}

function shapeLine(x, y) {
  var defined = constant$3(true),
      context = null,
      curve = curveLinear,
      output = null;

  x = typeof x === "function" ? x : (x === undefined) ? x$1 : constant$3(x);
  y = typeof y === "function" ? y : (y === undefined) ? y$1 : constant$3(y);

  function line(data) {
    var i,
        n = (data = array(data)).length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : constant$3(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : constant$3(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$3(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

function shapeArea(x0, y0, y1) {
  var x1 = null,
      defined = constant$3(true),
      context = null,
      curve = curveLinear,
      output = null;

  x0 = typeof x0 === "function" ? x0 : (x0 === undefined) ? x$1 : constant$3(+x0);
  y0 = typeof y0 === "function" ? y0 : (y0 === undefined) ? constant$3(0) : constant$3(+y0);
  y1 = typeof y1 === "function" ? y1 : (y1 === undefined) ? y$1 : constant$3(+y1);

  function area(data) {
    var i,
        j,
        k,
        n = (data = array(data)).length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return shapeLine().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$3(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$3(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$3(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$3(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$3(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$3(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$3(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
}

const symbolCircle = {
  draw: function(context, size) {
    var r = Math.sqrt(size / pi);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau);
  }
};

const symbolCross = {
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

const symbolDiamond = {
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
};

var ka = 0.89081309152928522810,
    kr = Math.sin(pi / 10) / Math.sin(7 * pi / 10),
    kx = Math.sin(tau / 10) * kr,
    ky = -Math.cos(tau / 10) * kr;

const symbolStar = {
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = tau * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
};

const symbolSquare = {
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
};

var sqrt3 = Math.sqrt(3);

const symbolTriangle = {
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
};

var c$1 = -0.5,
    s = Math.sqrt(3) / 2,
    k$1 = 1 / Math.sqrt(12),
    a = (k$1 / 2 + 1) * 3;

const symbolWye = {
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k$1,
        x1 = x0,
        y1 = r * k$1 + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c$1 * x0 - s * y0, s * x0 + c$1 * y0);
    context.lineTo(c$1 * x1 - s * y1, s * x1 + c$1 * y1);
    context.lineTo(c$1 * x2 - s * y2, s * x2 + c$1 * y2);
    context.lineTo(c$1 * x0 + s * y0, c$1 * y0 - s * x0);
    context.lineTo(c$1 * x1 + s * y1, c$1 * y1 - s * x1);
    context.lineTo(c$1 * x2 + s * y2, c$1 * y2 - s * x2);
    context.closePath();
  }
};

function shapeSymbol(type, size) {
  var context = null;
  type = typeof type === "function" ? type : constant$3(type || symbolCircle);
  size = typeof size === "function" ? size : constant$3(size === undefined ? 64 : +size);

  function symbol() {
    var buffer;
    if (!context) context = buffer = path();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant$3(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant$3(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
}

function noop() {}

function point$2(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point$2(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function curveBasis(context) {
  return new Basis(context);
}

function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function curveBasisClosed(context) {
  return new BasisClosed(context);
}

function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function curveBasisOpen(context) {
  return new BasisOpen(context);
}

function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

function curveLinearClosed(context) {
  return new LinearClosed(context);
}

function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point$1(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point$1(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point$1(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point$1(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}

function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

function curveNatural(context) {
  return new Natural(context);
}

function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

function curveStep(context) {
  return new Step(context, 0.5);
}

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}

function stackOffsetNone(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}

function stackOrderNone(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}

function stackValue(d, key) {
  return d[key];
}

function stackSeries(key) {
  const series = [];
  series.key = key;
  return series;
}

function shapeStack() {
  var keys = constant$3([]),
      order = stackOrderNone,
      offset = stackOffsetNone,
      value = stackValue;

  function stack(data) {
    var sz = Array.from(keys.apply(this, arguments), stackSeries),
        i, n = sz.length, j = -1,
        oz;

    for (const d of data) {
      for (i = 0, ++j; i < n; ++i) {
        (sz[i][j] = [0, +value(d, sz[i].key, j, data)]).data = d;
      }
    }

    for (i = 0, oz = array(order(sz)); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant$3(Array.from(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant$3(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? stackOrderNone : typeof _ === "function" ? _ : constant$3(Array.from(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? stackOffsetNone : _, stack) : offset;
  };

  return stack;
}

function stackOffsetExpand(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  stackOffsetNone(series, order);
}

function stackOffsetSilhouette(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  stackOffsetNone(series, order);
}

function stackOffsetWiggle(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  stackOffsetNone(series, order);
}

function _typeof$g(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$g = function _typeof(obj) { return typeof obj; }; } else { _typeof$g = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$g(obj); }

function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

function _classCallCheck$g(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$g(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$g(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$g(Constructor.prototype, protoProps); if (staticProps) _defineProperties$g(Constructor, staticProps); return Constructor; }

function _inherits$f(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$f(subClass, superClass); }

function _setPrototypeOf$f(o, p) { _setPrototypeOf$f = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$f(o, p); }

function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = _getPrototypeOf$f(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$f(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$f(this, result); }; }

function _possibleConstructorReturn$f(self, call) { if (call && (_typeof$g(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$f(self); }

function _assertThisInitialized$f(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$f(o) { _getPrototypeOf$f = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$f(o); }
var symbolFactories = {
  symbolCircle: symbolCircle,
  symbolCross: symbolCross,
  symbolDiamond: symbolDiamond,
  symbolSquare: symbolSquare,
  symbolStar: symbolStar,
  symbolTriangle: symbolTriangle,
  symbolWye: symbolWye
};
var RADIAN$1 = Math.PI / 180;

var getSymbolFactory = function getSymbolFactory(type) {
  var name = "symbol".concat(upperFirst_1(type));
  return symbolFactories[name] || symbolCircle;
};

var calculateAreaSize = function calculateAreaSize(size, sizeType, type) {
  if (sizeType === 'area') {
    return size;
  }

  switch (type) {
    case 'cross':
      return 5 * size * size / 9;

    case 'diamond':
      return 0.5 * size * size / Math.sqrt(3);

    case 'square':
      return size * size;

    case 'star':
      {
        var angle = 18 * RADIAN$1;
        return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.pow(Math.tan(angle), 2));
      }

    case 'triangle':
      return Math.sqrt(3) * size * size / 4;

    case 'wye':
      return (21 - 10 * Math.sqrt(3)) * size * size / 8;

    default:
      return Math.PI * size * size / 4;
  }
};

var Symbols = /*#__PURE__*/function (_PureComponent) {
  _inherits$f(Symbols, _PureComponent);

  var _super = _createSuper$f(Symbols);

  function Symbols() {
    _classCallCheck$g(this, Symbols);

    return _super.apply(this, arguments);
  }

  _createClass$g(Symbols, [{
    key: "getPath",
    value:
    /**
     * Calculate the path of curve
     * @return {String} path
     */
    function getPath() {
      var _this$props = this.props,
          size = _this$props.size,
          sizeType = _this$props.sizeType,
          type = _this$props.type;
      var symbolFactory = getSymbolFactory(type);
      var symbol = shapeSymbol().type(symbolFactory).size(calculateAreaSize(size, sizeType, type));
      return symbol();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          cx = _this$props2.cx,
          cy = _this$props2.cy,
          size = _this$props2.size;

      if (cx === +cx && cy === +cy && size === +size) {
        return /*#__PURE__*/React.createElement("path", _extends$h({}, filterProps(this.props, true), {
          className: classNames('recharts-symbols', className),
          transform: "translate(".concat(cx, ", ").concat(cy, ")"),
          d: this.getPath()
        }));
      }

      return null;
    }
  }]);

  return Symbols;
}(react.exports.PureComponent);
Symbols.defaultProps = {
  type: 'circle',
  size: 64,
  sizeType: 'area'
};

Symbols.registerSymbol = function (key, factory) {
  symbolFactories["symbol".concat(upperFirst_1(key))] = factory;
};

function _typeof$f(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$f = function _typeof(obj) { return typeof obj; }; } else { _typeof$f = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$f(obj); }

function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

function ownKeys$m(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$m(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$m(Object(source), true).forEach(function (key) { _defineProperty$n(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$m(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$n(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$f(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$f(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$f(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$f(Constructor.prototype, protoProps); if (staticProps) _defineProperties$f(Constructor, staticProps); return Constructor; }

function _inherits$e(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$e(subClass, superClass); }

function _setPrototypeOf$e(o, p) { _setPrototypeOf$e = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$e(o, p); }

function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = _getPrototypeOf$e(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$e(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$e(this, result); }; }

function _possibleConstructorReturn$e(self, call) { if (call && (_typeof$f(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$e(self); }

function _assertThisInitialized$e(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$e(o) { _getPrototypeOf$e = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$e(o); }
var SIZE = 32;
var DefaultLegendContent = /*#__PURE__*/function (_PureComponent) {
  _inherits$e(DefaultLegendContent, _PureComponent);

  var _super = _createSuper$e(DefaultLegendContent);

  function DefaultLegendContent() {
    _classCallCheck$f(this, DefaultLegendContent);

    return _super.apply(this, arguments);
  }

  _createClass$f(DefaultLegendContent, [{
    key: "renderIcon",
    value:
    /**
     * Render the path of icon
     * @param {Object} data Data of each legend item
     * @return {String} Path element
     */
    function renderIcon(data) {
      var inactiveColor = this.props.inactiveColor;
      var halfSize = SIZE / 2;
      var sixthSize = SIZE / 6;
      var thirdSize = SIZE / 3;
      var color = data.inactive ? inactiveColor : data.color;

      if (data.type === 'plainline') {
        return /*#__PURE__*/React.createElement("line", {
          strokeWidth: 4,
          fill: "none",
          stroke: color,
          strokeDasharray: data.payload.strokeDasharray,
          x1: 0,
          y1: halfSize,
          x2: SIZE,
          y2: halfSize,
          className: "recharts-legend-icon"
        });
      }

      if (data.type === 'line') {
        return /*#__PURE__*/React.createElement("path", {
          strokeWidth: 4,
          fill: "none",
          stroke: color,
          d: "M0,".concat(halfSize, "h").concat(thirdSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(2 * thirdSize, ",").concat(halfSize, "\n            H").concat(SIZE, "M").concat(2 * thirdSize, ",").concat(halfSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(thirdSize, ",").concat(halfSize),
          className: "recharts-legend-icon"
        });
      }

      if (data.type === 'rect') {
        return /*#__PURE__*/React.createElement("path", {
          stroke: "none",
          fill: color,
          d: "M0,".concat(SIZE / 8, "h").concat(SIZE, "v").concat(SIZE * 3 / 4, "h").concat(-SIZE, "z"),
          className: "recharts-legend-icon"
        });
      }

      if ( /*#__PURE__*/React.isValidElement(data.legendIcon)) {
        var iconProps = _objectSpread$m({}, data);

        delete iconProps.legendIcon;
        return /*#__PURE__*/React.cloneElement(data.legendIcon, iconProps);
      }

      return /*#__PURE__*/React.createElement(Symbols, {
        fill: color,
        cx: halfSize,
        cy: halfSize,
        size: SIZE,
        sizeType: "diameter",
        type: data.type
      });
    }
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */

  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      var _this$props = this.props,
          payload = _this$props.payload,
          iconSize = _this$props.iconSize,
          layout = _this$props.layout,
          formatter = _this$props.formatter,
          inactiveColor = _this$props.inactiveColor;
      var viewBox = {
        x: 0,
        y: 0,
        width: SIZE,
        height: SIZE
      };
      var itemStyle = {
        display: layout === 'horizontal' ? 'inline-block' : 'block',
        marginRight: 10
      };
      var svgStyle = {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: 4
      };
      return payload.map(function (entry, i) {
        var _classNames;

        var finalFormatter = entry.formatter || formatter;
        var className = classNames((_classNames = {
          'recharts-legend-item': true
        }, _defineProperty$n(_classNames, "legend-item-".concat(i), true), _defineProperty$n(_classNames, "inactive", entry.inactive), _classNames));

        if (entry.type === 'none') {
          return null;
        }

        var color = entry.inactive ? inactiveColor : entry.color;
        return /*#__PURE__*/React.createElement("li", _extends$g({
          className: className,
          style: itemStyle,
          key: "legend-item-".concat(i) // eslint-disable-line react/no-array-index-key

        }, adaptEventsOfChild(_this.props, entry, i)), /*#__PURE__*/React.createElement(Surface, {
          width: iconSize,
          height: iconSize,
          viewBox: viewBox,
          style: svgStyle
        }, _this.renderIcon(entry)), /*#__PURE__*/React.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: color
          }
        }, finalFormatter ? finalFormatter(entry.value, entry, i) : entry.value));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          payload = _this$props2.payload,
          layout = _this$props2.layout,
          align = _this$props2.align;

      if (!payload || !payload.length) {
        return null;
      }

      var finalStyle = {
        padding: 0,
        margin: 0,
        textAlign: layout === 'horizontal' ? align : 'left'
      };
      return /*#__PURE__*/React.createElement("ul", {
        className: "recharts-default-legend",
        style: finalStyle
      }, this.renderItems());
    }
  }]);

  return DefaultLegendContent;
}(react.exports.PureComponent);
DefaultLegendContent.displayName = 'Legend';
DefaultLegendContent.defaultProps = {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'middle',
  inactiveColor: '#ccc'
};

var baseGetTag$2 = _baseGetTag,
    isObjectLike$2 = isObjectLike_1;

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber$2(value) {
  return typeof value == 'number' ||
    (isObjectLike$2(value) && baseGetTag$2(value) == numberTag);
}

var isNumber_1 = isNumber$2;

var isNumber$1 = isNumber_1;

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN$1(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber$1(value) && value != +value;
}

var _isNaN = isNaN$1;

var baseGetTag$1 = _baseGetTag,
    isArray$5 = isArray_1,
    isObjectLike$1 = isObjectLike_1;

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray$5(value) && isObjectLike$1(value) && baseGetTag$1(value) == stringTag);
}

var isString_1 = isString;

var mathSign = function mathSign(value) {
  if (value === 0) {
    return 0;
  }

  if (value > 0) {
    return 1;
  }

  return -1;
};
var isPercent = function isPercent(value) {
  return isString_1(value) && value.indexOf('%') === value.length - 1;
};
var isNumber = function isNumber(value) {
  return isNumber_1(value) && !_isNaN(value);
};
var isNumOrStr = function isNumOrStr(value) {
  return isNumber(value) || isString_1(value);
};
var idCounter = 0;
var uniqueId = function uniqueId(prefix) {
  var id = ++idCounter;
  return "".concat(prefix || '').concat(id);
};
/**
 * Get percent value of a total value
 * @param {Number|String} percent A percent
 * @param {Number} totalValue     Total value
 * @param {NUmber} defaultValue   The value returned when percent is undefined or invalid
 * @param {Boolean} validate      If set to be true, the result will be validated
 * @return {Number} value
 */

var getPercentValue = function getPercentValue(percent, totalValue) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var validate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!isNumber(percent) && !isString_1(percent)) {
    return defaultValue;
  }

  var value;

  if (isPercent(percent)) {
    var index = percent.indexOf('%');
    value = totalValue * parseFloat(percent.slice(0, index)) / 100;
  } else {
    value = +percent;
  }

  if (_isNaN(value)) {
    value = defaultValue;
  }

  if (validate && value > totalValue) {
    value = totalValue;
  }

  return value;
};
var getAnyElementOfObject = function getAnyElementOfObject(obj) {
  if (!obj) {
    return null;
  }

  var keys = Object.keys(obj);

  if (keys && keys.length) {
    return obj[keys[0]];
  }

  return null;
};
var hasDuplicate = function hasDuplicate(ary) {
  if (!isArray_1(ary)) {
    return false;
  }

  var len = ary.length;
  var cache = {};

  for (var i = 0; i < len; i++) {
    if (!cache[ary[i]]) {
      cache[ary[i]] = true;
    } else {
      return true;
    }
  }

  return false;
};
var interpolateNumber$2 = function interpolateNumber(numberA, numberB) {
  if (isNumber(numberA) && isNumber(numberB)) {
    return function (t) {
      return numberA + t * (numberB - numberA);
    };
  }

  return function () {
    return numberB;
  };
};
function findEntryInArray(ary, specifiedKey, specifiedValue) {
  if (!ary || !ary.length) {
    return null;
  }

  return ary.find(function (entry) {
    return entry && (typeof specifiedKey === 'function' ? specifiedKey(entry) : get_1(entry, specifiedKey)) === specifiedValue;
  });
}

function _typeof$e(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$e = function _typeof(obj) { return typeof obj; }; } else { _typeof$e = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$e(obj); }

function ownKeys$l(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$l(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$l(Object(source), true).forEach(function (key) { _defineProperty$m(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$l(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$m(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$e(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$e(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$e(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$e(Constructor.prototype, protoProps); if (staticProps) _defineProperties$e(Constructor, staticProps); return Constructor; }

function _inherits$d(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$d(subClass, superClass); }

function _setPrototypeOf$d(o, p) { _setPrototypeOf$d = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$d(o, p); }

function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf$d(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$d(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$d(this, result); }; }

function _possibleConstructorReturn$d(self, call) { if (call && (_typeof$e(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$d(self); }

function _assertThisInitialized$d(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$d(o) { _getPrototypeOf$d = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$d(o); }

function _objectWithoutProperties$8(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$8(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function defaultUniqBy$1(entry) {
  return entry.value;
}

function getUniqPayload$1(option, payload) {
  if (option === true) {
    return uniqBy_1(payload, defaultUniqBy$1);
  }

  if (isFunction_1(option)) {
    return uniqBy_1(payload, option);
  }

  return payload;
}

function renderContent$1(content, props) {
  if ( /*#__PURE__*/React.isValidElement(content)) {
    return /*#__PURE__*/React.cloneElement(content, props);
  }

  if (isFunction_1(content)) {
    return /*#__PURE__*/React.createElement(content, props);
  }

  props.ref;
      var otherProps = _objectWithoutProperties$8(props, ["ref"]);

  return /*#__PURE__*/React.createElement(DefaultLegendContent, otherProps);
}

var EPS$2 = 1;
var Legend = /*#__PURE__*/function (_PureComponent) {
  _inherits$d(Legend, _PureComponent);

  var _super = _createSuper$d(Legend);

  function Legend() {
    var _this;

    _classCallCheck$e(this, Legend);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.wrapperNode = void 0;
    _this.state = {
      boxWidth: -1,
      boxHeight: -1
    };
    return _this;
  }

  _createClass$e(Legend, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function getBBox() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        return this.wrapperNode.getBoundingClientRect();
      }

      return null;
    }
  }, {
    key: "getBBoxSnapshot",
    value: function getBBoxSnapshot() {
      var _this$state = this.state,
          boxWidth = _this$state.boxWidth,
          boxHeight = _this$state.boxHeight;

      if (boxWidth >= 0 && boxHeight >= 0) {
        return {
          width: boxWidth,
          height: boxHeight
        };
      }

      return null;
    }
  }, {
    key: "getDefaultPosition",
    value: function getDefaultPosition(style) {
      var _this$props = this.props,
          layout = _this$props.layout,
          align = _this$props.align,
          verticalAlign = _this$props.verticalAlign,
          margin = _this$props.margin,
          chartWidth = _this$props.chartWidth,
          chartHeight = _this$props.chartHeight;
      var hPos, vPos;

      if (!style || (style.left === undefined || style.left === null) && (style.right === undefined || style.right === null)) {
        if (align === 'center' && layout === 'vertical') {
          var _box = this.getBBoxSnapshot() || {
            width: 0
          };

          hPos = {
            left: ((chartWidth || 0) - _box.width) / 2
          };
        } else {
          hPos = align === 'right' ? {
            right: margin && margin.right || 0
          } : {
            left: margin && margin.left || 0
          };
        }
      }

      if (!style || (style.top === undefined || style.top === null) && (style.bottom === undefined || style.bottom === null)) {
        if (verticalAlign === 'middle') {
          var _box2 = this.getBBoxSnapshot() || {
            height: 0
          };

          vPos = {
            top: ((chartHeight || 0) - _box2.height) / 2
          };
        } else {
          vPos = verticalAlign === 'bottom' ? {
            bottom: margin && margin.bottom || 0
          } : {
            top: margin && margin.top || 0
          };
        }
      }

      return _objectSpread$l(_objectSpread$l({}, hPos), vPos);
    }
  }, {
    key: "updateBBox",
    value: function updateBBox() {
      var _this$state2 = this.state,
          boxWidth = _this$state2.boxWidth,
          boxHeight = _this$state2.boxHeight;
      var onBBoxUpdate = this.props.onBBoxUpdate;

      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var _box3 = this.wrapperNode.getBoundingClientRect();

        if (Math.abs(_box3.width - boxWidth) > EPS$2 || Math.abs(_box3.height - boxHeight) > EPS$2) {
          this.setState({
            boxWidth: _box3.width,
            boxHeight: _box3.height
          }, function () {
            if (onBBoxUpdate) {
              onBBoxUpdate(_box3);
            }
          });
        }
      } else if (boxWidth !== -1 || boxHeight !== -1) {
        this.setState({
          boxWidth: -1,
          boxHeight: -1
        }, function () {
          if (onBBoxUpdate) {
            onBBoxUpdate(null);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          content = _this$props2.content,
          width = _this$props2.width,
          height = _this$props2.height,
          wrapperStyle = _this$props2.wrapperStyle,
          payloadUniqBy = _this$props2.payloadUniqBy,
          payload = _this$props2.payload;

      var outerStyle = _objectSpread$l(_objectSpread$l({
        position: 'absolute',
        width: width || 'auto',
        height: height || 'auto'
      }, this.getDefaultPosition(wrapperStyle)), wrapperStyle);

      return /*#__PURE__*/React.createElement("div", {
        className: "recharts-legend-wrapper",
        style: outerStyle,
        ref: function ref(node) {
          _this2.wrapperNode = node;
        }
      }, renderContent$1(content, _objectSpread$l(_objectSpread$l({}, this.props), {}, {
        payload: getUniqPayload$1(payloadUniqBy, payload)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function getWithHeight(item, chartWidth) {
      var layout = item.props.layout;

      if (layout === 'vertical' && isNumber(item.props.height)) {
        return {
          height: item.props.height
        };
      }

      if (layout === 'horizontal') {
        return {
          width: item.props.width || chartWidth
        };
      }

      return null;
    }
  }]);

  return Legend;
}(react.exports.PureComponent);
Legend.displayName = 'Legend';
Legend.defaultProps = {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'bottom'
};

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */

function isNil(value) {
  return value == null;
}

var isNil_1 = isNil;

var propTypes = {exports: {}};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var HAS_WEAKSET_SUPPORT = typeof WeakSet === 'function';
var keys$2 = Object.keys;
/**
 * are the values passed strictly equal or both NaN
 *
 * @param a the value to compare against
 * @param b the value to test
 * @returns are the values equal by the SameValueZero principle
 */
function sameValueZeroEqual(a, b) {
    return a === b || (a !== a && b !== b);
}
/**
 * is the value a plain object
 *
 * @param value the value to test
 * @returns is the value a plain object
 */
function isPlainObject(value) {
    return value.constructor === Object || value.constructor == null;
}
/**
 * is the value promise-like (meaning it is thenable)
 *
 * @param value the value to test
 * @returns is the value promise-like
 */
function isPromiseLike(value) {
    return !!value && typeof value.then === 'function';
}
/**
 * is the value passed a react element
 *
 * @param value the value to test
 * @returns is the value a react element
 */
function isReactElement(value) {
    return !!(value && value.$$typeof);
}
/**
 * in cases where WeakSet is not supported, creates a new custom
 * object that mimics the necessary API aspects for cache purposes
 *
 * @returns the new cache object
 */
function getNewCacheFallback() {
    var values = [];
    return {
        add: function (value) {
            values.push(value);
        },
        has: function (value) {
            return values.indexOf(value) !== -1;
        },
    };
}
/**
 * get a new cache object to prevent circular references
 *
 * @returns the new cache object
 */
var getNewCache = (function (canUseWeakMap) {
    if (canUseWeakMap) {
        return function _getNewCache() {
            return new WeakSet();
        };
    }
    return getNewCacheFallback;
})(HAS_WEAKSET_SUPPORT);
/**
 * create a custom isEqual handler specific to circular objects
 *
 * @param [isEqual] the isEqual comparator to use instead of isDeepEqual
 * @returns the method to create the `isEqual` function
 */
function createCircularEqualCreator(isEqual) {
    return function createCircularEqual(comparator) {
        var _comparator = isEqual || comparator;
        return function circularEqual(a, b, cache) {
            if (cache === void 0) { cache = getNewCache(); }
            var isCacheableA = !!a && typeof a === 'object';
            var isCacheableB = !!b && typeof b === 'object';
            if (isCacheableA || isCacheableB) {
                var hasA = isCacheableA && cache.has(a);
                var hasB = isCacheableB && cache.has(b);
                if (hasA || hasB) {
                    return hasA && hasB;
                }
                if (isCacheableA) {
                    cache.add(a);
                }
                if (isCacheableB) {
                    cache.add(b);
                }
            }
            return _comparator(a, b, cache);
        };
    };
}
/**
 * are the arrays equal in value
 *
 * @param a the array to test
 * @param b the array to test against
 * @param isEqual the comparator to determine equality
 * @param meta the meta object to pass through
 * @returns are the arrays equal
 */
function areArraysEqual(a, b, isEqual, meta) {
    var index = a.length;
    if (b.length !== index) {
        return false;
    }
    while (index-- > 0) {
        if (!isEqual(a[index], b[index], meta)) {
            return false;
        }
    }
    return true;
}
/**
 * are the maps equal in value
 *
 * @param a the map to test
 * @param b the map to test against
 * @param isEqual the comparator to determine equality
 * @param meta the meta map to pass through
 * @returns are the maps equal
 */
function areMapsEqual(a, b, isEqual, meta) {
    var isValueEqual = a.size === b.size;
    if (isValueEqual && a.size) {
        var matchedIndices_1 = {};
        a.forEach(function (aValue, aKey) {
            if (isValueEqual) {
                var hasMatch_1 = false;
                var matchIndex_1 = 0;
                b.forEach(function (bValue, bKey) {
                    if (!hasMatch_1 && !matchedIndices_1[matchIndex_1]) {
                        hasMatch_1 =
                            isEqual(aKey, bKey, meta) && isEqual(aValue, bValue, meta);
                        if (hasMatch_1) {
                            matchedIndices_1[matchIndex_1] = true;
                        }
                    }
                    matchIndex_1++;
                });
                isValueEqual = hasMatch_1;
            }
        });
    }
    return isValueEqual;
}
var OWNER = '_owner';
var hasOwnProperty = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);
/**
 * are the objects equal in value
 *
 * @param a the object to test
 * @param b the object to test against
 * @param isEqual the comparator to determine equality
 * @param meta the meta object to pass through
 * @returns are the objects equal
 */
function areObjectsEqual(a, b, isEqual, meta) {
    var keysA = keys$2(a);
    var index = keysA.length;
    if (keys$2(b).length !== index) {
        return false;
    }
    if (index) {
        var key = void 0;
        while (index-- > 0) {
            key = keysA[index];
            if (key === OWNER) {
                var reactElementA = isReactElement(a);
                var reactElementB = isReactElement(b);
                if ((reactElementA || reactElementB) &&
                    reactElementA !== reactElementB) {
                    return false;
                }
            }
            if (!hasOwnProperty(b, key) || !isEqual(a[key], b[key], meta)) {
                return false;
            }
        }
    }
    return true;
}
/**
 * are the regExps equal in value
 *
 * @param a the regExp to test
 * @param b the regExp to test agains
 * @returns are the regExps equal
 */
function areRegExpsEqual(a, b) {
    return (a.source === b.source &&
        a.global === b.global &&
        a.ignoreCase === b.ignoreCase &&
        a.multiline === b.multiline &&
        a.unicode === b.unicode &&
        a.sticky === b.sticky &&
        a.lastIndex === b.lastIndex);
}
/**
 * are the sets equal in value
 *
 * @param a the set to test
 * @param b the set to test against
 * @param isEqual the comparator to determine equality
 * @param meta the meta set to pass through
 * @returns are the sets equal
 */
function areSetsEqual(a, b, isEqual, meta) {
    var isValueEqual = a.size === b.size;
    if (isValueEqual && a.size) {
        var matchedIndices_2 = {};
        a.forEach(function (aValue) {
            if (isValueEqual) {
                var hasMatch_2 = false;
                var matchIndex_2 = 0;
                b.forEach(function (bValue) {
                    if (!hasMatch_2 && !matchedIndices_2[matchIndex_2]) {
                        hasMatch_2 = isEqual(aValue, bValue, meta);
                        if (hasMatch_2) {
                            matchedIndices_2[matchIndex_2] = true;
                        }
                    }
                    matchIndex_2++;
                });
                isValueEqual = hasMatch_2;
            }
        });
    }
    return isValueEqual;
}

var HAS_MAP_SUPPORT = typeof Map === 'function';
var HAS_SET_SUPPORT = typeof Set === 'function';
function createComparator(createIsEqual) {
    var isEqual = 
    /* eslint-disable no-use-before-define */
    typeof createIsEqual === 'function'
        ? createIsEqual(comparator)
        : comparator;
    /* eslint-enable */
    /**
     * compare the value of the two objects and return true if they are equivalent in values
     *
     * @param a the value to test against
     * @param b the value to test
     * @param [meta] an optional meta object that is passed through to all equality test calls
     * @returns are a and b equivalent in value
     */
    function comparator(a, b, meta) {
        if (a === b) {
            return true;
        }
        if (a && b && typeof a === 'object' && typeof b === 'object') {
            if (isPlainObject(a) && isPlainObject(b)) {
                return areObjectsEqual(a, b, isEqual, meta);
            }
            var aShape = Array.isArray(a);
            var bShape = Array.isArray(b);
            if (aShape || bShape) {
                return aShape === bShape && areArraysEqual(a, b, isEqual, meta);
            }
            aShape = a instanceof Date;
            bShape = b instanceof Date;
            if (aShape || bShape) {
                return (aShape === bShape && sameValueZeroEqual(a.getTime(), b.getTime()));
            }
            aShape = a instanceof RegExp;
            bShape = b instanceof RegExp;
            if (aShape || bShape) {
                return aShape === bShape && areRegExpsEqual(a, b);
            }
            if (isPromiseLike(a) || isPromiseLike(b)) {
                return a === b;
            }
            if (HAS_MAP_SUPPORT) {
                aShape = a instanceof Map;
                bShape = b instanceof Map;
                if (aShape || bShape) {
                    return aShape === bShape && areMapsEqual(a, b, isEqual, meta);
                }
            }
            if (HAS_SET_SUPPORT) {
                aShape = a instanceof Set;
                bShape = b instanceof Set;
                if (aShape || bShape) {
                    return aShape === bShape && areSetsEqual(a, b, isEqual, meta);
                }
            }
            return areObjectsEqual(a, b, isEqual, meta);
        }
        return a !== a && b !== b;
    }
    return comparator;
}

var deepEqual = createComparator();
createComparator(function () { return sameValueZeroEqual; });
createComparator(createCircularEqualCreator());
createComparator(createCircularEqualCreator(sameValueZeroEqual));

function setRafTimeout(callback) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var currTime = -1;

  var shouldUpdate = function shouldUpdate(now) {
    if (currTime < 0) {
      currTime = now;
    }

    if (now - currTime > timeout) {
      callback(now);
      currTime = -1;
    } else {
      requestAnimationFrame(shouldUpdate);
    }
  };

  requestAnimationFrame(shouldUpdate);
}

function _typeof$d(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$d = function _typeof(obj) { return typeof obj; }; } else { _typeof$d = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$d(obj); }

function _toArray(arr) { return _arrayWithHoles$8(arr) || _iterableToArray$b(arr) || _unsupportedIterableToArray$f(arr) || _nonIterableRest$8(); }

function _nonIterableRest$8() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$f(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$f(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$f(o, minLen); }

function _arrayLikeToArray$f(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray$b(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles$8(arr) { if (Array.isArray(arr)) return arr; }
function createAnimateManager() {
  var currStyle = {};

  var handleChange = function handleChange() {
    return null;
  };

  var shouldStop = false;

  var setStyle = function setStyle(_style) {
    if (shouldStop) {
      return;
    }

    if (Array.isArray(_style)) {
      if (!_style.length) {
        return;
      }

      var styles = _style;

      var _styles = _toArray(styles),
          curr = _styles[0],
          restStyles = _styles.slice(1);

      if (typeof curr === 'number') {
        setRafTimeout(setStyle.bind(null, restStyles), curr);
        return;
      }

      setStyle(curr);
      setRafTimeout(setStyle.bind(null, restStyles));
      return;
    }

    if (_typeof$d(_style) === 'object') {
      currStyle = _style;
      handleChange(currStyle);
    }

    if (typeof _style === 'function') {
      _style();
    }
  };

  return {
    stop: function stop() {
      shouldStop = true;
    },
    start: function start(style) {
      shouldStop = false;
      setStyle(style);
    },
    subscribe: function subscribe(_handleChange) {
      handleChange = _handleChange;
      return function () {
        handleChange = function handleChange() {
          return null;
        };
      };
    }
  };
}

function ownKeys$k(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$k(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$k(Object(source), true).forEach(function (key) { _defineProperty$l(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$k(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$l(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint no-console: 0 */
var PREFIX_LIST$1 = ['Webkit', 'Moz', 'O', 'ms'];
var IN_LINE_PREFIX_LIST = ['-webkit-', '-moz-', '-o-', '-ms-'];
var IN_COMPATIBLE_PROPERTY = ['transform', 'transformOrigin', 'transition'];
var getIntersectionKeys = function getIntersectionKeys(preObj, nextObj) {
  return [Object.keys(preObj), Object.keys(nextObj)].reduce(function (a, b) {
    return a.filter(function (c) {
      return b.includes(c);
    });
  });
};
var identity$9 = function identity(param) {
  return param;
};
/*
 * @description: convert camel case to dash case
 * string => string
 */

var getDashCase = function getDashCase(name) {
  return name.replace(/([A-Z])/g, function (v) {
    return "-".concat(v.toLowerCase());
  });
};
/*
 * @description: add compatible style prefix
 * (string, string) => object
 */

var generatePrefixStyle$1 = function generatePrefixStyle(name, value) {
  if (IN_COMPATIBLE_PROPERTY.indexOf(name) === -1) {
    return _defineProperty$l({}, name, value);
  }

  var isTransition = name === 'transition';
  var camelName = name.replace(/(\w)/, function (v) {
    return v.toUpperCase();
  });
  var styleVal = value;
  return PREFIX_LIST$1.reduce(function (result, property, i) {
    if (isTransition) {
      styleVal = value.replace(/(transform|transform-origin)/gim, "".concat(IN_LINE_PREFIX_LIST[i], "$1"));
    }

    return _objectSpread$k(_objectSpread$k({}, result), {}, _defineProperty$l({}, property + camelName, styleVal));
  }, {});
};
/*
 * @description: map object on every element in this object.
 * (function, object) => object
 */

var mapObject = function mapObject(fn, obj) {
  return Object.keys(obj).reduce(function (res, key) {
    return _objectSpread$k(_objectSpread$k({}, res), {}, _defineProperty$l({}, key, fn(key, obj[key])));
  }, {});
};
/*
 * @description: add compatible prefix to style
 * object => object
 */

var translateStyle = function translateStyle(style) {
  return Object.keys(style).reduce(function (res, key) {
    return _objectSpread$k(_objectSpread$k({}, res), generatePrefixStyle$1(key, res[key]));
  }, style);
};
var getTransitionVal = function getTransitionVal(props, duration, easing) {
  return props.map(function (prop) {
    return "".concat(getDashCase(prop), " ").concat(duration, "ms ").concat(easing);
  }).join(',');
};

function _slicedToArray$7(arr, i) { return _arrayWithHoles$7(arr) || _iterableToArrayLimit$7(arr, i) || _unsupportedIterableToArray$e(arr, i) || _nonIterableRest$7(); }

function _nonIterableRest$7() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit$7(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$7(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray$a(arr) { return _arrayWithoutHoles$a(arr) || _iterableToArray$a(arr) || _unsupportedIterableToArray$e(arr) || _nonIterableSpread$a(); }

function _nonIterableSpread$a() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$e(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$e(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$e(o, minLen); }

function _iterableToArray$a(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$a(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$e(arr); }

function _arrayLikeToArray$e(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var ACCURACY = 1e-4;

var cubicBezierFactor = function cubicBezierFactor(c1, c2) {
  return [0, 3 * c1, 3 * c2 - 6 * c1, 3 * c1 - 3 * c2 + 1];
};

var multyTime = function multyTime(params, t) {
  return params.map(function (param, i) {
    return param * Math.pow(t, i);
  }).reduce(function (pre, curr) {
    return pre + curr;
  });
};

var cubicBezier = function cubicBezier(c1, c2) {
  return function (t) {
    var params = cubicBezierFactor(c1, c2);
    return multyTime(params, t);
  };
};

var derivativeCubicBezier = function derivativeCubicBezier(c1, c2) {
  return function (t) {
    var params = cubicBezierFactor(c1, c2);
    var newParams = [].concat(_toConsumableArray$a(params.map(function (param, i) {
      return param * i;
    }).slice(1)), [0]);
    return multyTime(newParams, t);
  };
}; // calculate cubic-bezier using Newton's method


var configBezier = function configBezier() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var x1 = args[0],
      y1 = args[1],
      x2 = args[2],
      y2 = args[3];

  if (args.length === 1) {
    switch (args[0]) {
      case 'linear':
        x1 = 0.0;
        y1 = 0.0;
        x2 = 1.0;
        y2 = 1.0;
        break;

      case 'ease':
        x1 = 0.25;
        y1 = 0.1;
        x2 = 0.25;
        y2 = 1.0;
        break;

      case 'ease-in':
        x1 = 0.42;
        y1 = 0.0;
        x2 = 1.0;
        y2 = 1.0;
        break;

      case 'ease-out':
        x1 = 0.42;
        y1 = 0.0;
        x2 = 0.58;
        y2 = 1.0;
        break;

      case 'ease-in-out':
        x1 = 0.0;
        y1 = 0.0;
        x2 = 0.58;
        y2 = 1.0;
        break;

      default:
        {
          var easing = args[0].split('(');

          if (easing[0] === 'cubic-bezier' && easing[1].split(')')[0].split(',').length === 4) {
            var _easing$1$split$0$spl = easing[1].split(')')[0].split(',').map(function (x) {
              return parseFloat(x);
            });

            var _easing$1$split$0$spl2 = _slicedToArray$7(_easing$1$split$0$spl, 4);

            x1 = _easing$1$split$0$spl2[0];
            y1 = _easing$1$split$0$spl2[1];
            x2 = _easing$1$split$0$spl2[2];
            y2 = _easing$1$split$0$spl2[3];
          }
        }
    }
  }
  var curveX = cubicBezier(x1, x2);
  var curveY = cubicBezier(y1, y2);
  var derCurveX = derivativeCubicBezier(x1, x2);

  var rangeValue = function rangeValue(value) {
    if (value > 1) {
      return 1;
    } else if (value < 0) {
      return 0;
    }

    return value;
  };

  var bezier = function bezier(_t) {
    var t = _t > 1 ? 1 : _t;
    var x = t;

    for (var i = 0; i < 8; ++i) {
      var evalT = curveX(x) - t;
      var derVal = derCurveX(x);

      if (Math.abs(evalT - t) < ACCURACY || derVal < ACCURACY) {
        return curveY(x);
      }

      x = rangeValue(x - evalT / derVal);
    }

    return curveY(x);
  };

  bezier.isStepper = false;
  return bezier;
};
var configSpring = function configSpring() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$stiff = config.stiff,
      stiff = _config$stiff === void 0 ? 100 : _config$stiff,
      _config$damping = config.damping,
      damping = _config$damping === void 0 ? 8 : _config$damping,
      _config$dt = config.dt,
      dt = _config$dt === void 0 ? 17 : _config$dt;

  var stepper = function stepper(currX, destX, currV) {
    var FSpring = -(currX - destX) * stiff;
    var FDamping = currV * damping;
    var newV = currV + (FSpring - FDamping) * dt / 1000;
    var newX = currV * dt / 1000 + currX;

    if (Math.abs(newX - destX) < ACCURACY && Math.abs(newV) < ACCURACY) {
      return [destX, 0];
    }

    return [newX, newV];
  };

  stepper.isStepper = true;
  stepper.dt = dt;
  return stepper;
};
var configEasing = function configEasing() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var easing = args[0];

  if (typeof easing === 'string') {
    switch (easing) {
      case 'ease':
      case 'ease-in-out':
      case 'ease-out':
      case 'ease-in':
      case 'linear':
        return configBezier(easing);

      case 'spring':
        return configSpring();

      default:
        if (easing.split('(')[0] === 'cubic-bezier') {
          return configBezier(easing);
        }
    }
  }

  if (typeof easing === 'function') {
    return easing;
  }
  return null;
};

function _toConsumableArray$9(arr) { return _arrayWithoutHoles$9(arr) || _iterableToArray$9(arr) || _unsupportedIterableToArray$d(arr) || _nonIterableSpread$9(); }

function _nonIterableSpread$9() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray$9(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$9(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$d(arr); }

function ownKeys$j(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$j(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$j(Object(source), true).forEach(function (key) { _defineProperty$k(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$j(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$k(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray$6(arr, i) { return _arrayWithHoles$6(arr) || _iterableToArrayLimit$6(arr, i) || _unsupportedIterableToArray$d(arr, i) || _nonIterableRest$6(); }

function _nonIterableRest$6() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$d(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$d(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$d(o, minLen); }

function _arrayLikeToArray$d(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$6(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$6(arr) { if (Array.isArray(arr)) return arr; }

var alpha = function alpha(begin, end, k) {
  return begin + (end - begin) * k;
};

var needContinue = function needContinue(_ref) {
  var from = _ref.from,
      to = _ref.to;
  return from !== to;
};
/*
 * @description: cal new from value and velocity in each stepper
 * @return: { [styleProperty]: { from, to, velocity } }
 */


var calStepperVals = function calStepperVals(easing, preVals, steps) {
  var nextStepVals = mapObject(function (key, val) {
    if (needContinue(val)) {
      var _easing = easing(val.from, val.to, val.velocity),
          _easing2 = _slicedToArray$6(_easing, 2),
          newX = _easing2[0],
          newV = _easing2[1];

      return _objectSpread$j(_objectSpread$j({}, val), {}, {
        from: newX,
        velocity: newV
      });
    }

    return val;
  }, preVals);

  if (steps < 1) {
    return mapObject(function (key, val) {
      if (needContinue(val)) {
        return _objectSpread$j(_objectSpread$j({}, val), {}, {
          velocity: alpha(val.velocity, nextStepVals[key].velocity, steps),
          from: alpha(val.from, nextStepVals[key].from, steps)
        });
      }

      return val;
    }, preVals);
  }

  return calStepperVals(easing, nextStepVals, steps - 1);
}; // configure update function


const configUpdate = (function (from, to, easing, duration, render) {
  var interKeys = getIntersectionKeys(from, to);
  var timingStyle = interKeys.reduce(function (res, key) {
    return _objectSpread$j(_objectSpread$j({}, res), {}, _defineProperty$k({}, key, [from[key], to[key]]));
  }, {});
  var stepperStyle = interKeys.reduce(function (res, key) {
    return _objectSpread$j(_objectSpread$j({}, res), {}, _defineProperty$k({}, key, {
      from: from[key],
      velocity: 0,
      to: to[key]
    }));
  }, {});
  var cafId = -1;
  var preTime;
  var beginTime;

  var update = function update() {
    return null;
  };

  var getCurrStyle = function getCurrStyle() {
    return mapObject(function (key, val) {
      return val.from;
    }, stepperStyle);
  };

  var shouldStopAnimation = function shouldStopAnimation() {
    return !Object.values(stepperStyle).filter(needContinue).length;
  }; // stepper timing function like spring


  var stepperUpdate = function stepperUpdate(now) {
    if (!preTime) {
      preTime = now;
    }

    var deltaTime = now - preTime;
    var steps = deltaTime / easing.dt;
    stepperStyle = calStepperVals(easing, stepperStyle, steps); // get union set and add compatible prefix

    render(_objectSpread$j(_objectSpread$j(_objectSpread$j({}, from), to), getCurrStyle()));
    preTime = now;

    if (!shouldStopAnimation()) {
      cafId = requestAnimationFrame(update);
    }
  }; // t => val timing function like cubic-bezier


  var timingUpdate = function timingUpdate(now) {
    if (!beginTime) {
      beginTime = now;
    }

    var t = (now - beginTime) / duration;
    var currStyle = mapObject(function (key, val) {
      return alpha.apply(void 0, _toConsumableArray$9(val).concat([easing(t)]));
    }, timingStyle); // get union set and add compatible prefix

    render(_objectSpread$j(_objectSpread$j(_objectSpread$j({}, from), to), currStyle));

    if (t < 1) {
      cafId = requestAnimationFrame(update);
    } else {
      var finalStyle = mapObject(function (key, val) {
        return alpha.apply(void 0, _toConsumableArray$9(val).concat([easing(1)]));
      }, timingStyle);
      render(_objectSpread$j(_objectSpread$j(_objectSpread$j({}, from), to), finalStyle));
    }
  };

  update = easing.isStepper ? stepperUpdate : timingUpdate; // return start animation method

  return function () {
    requestAnimationFrame(update); // return stop animation method

    return function () {
      cancelAnimationFrame(cafId);
    };
  };
});

function _typeof$c(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$c = function _typeof(obj) { return typeof obj; }; } else { _typeof$c = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$c(obj); }

function _objectWithoutProperties$7(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$7(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray$8(arr) { return _arrayWithoutHoles$8(arr) || _iterableToArray$8(arr) || _unsupportedIterableToArray$c(arr) || _nonIterableSpread$8(); }

function _nonIterableSpread$8() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$c(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$c(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$c(o, minLen); }

function _iterableToArray$8(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$8(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$c(arr); }

function _arrayLikeToArray$c(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys$i(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$i(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$i(Object(source), true).forEach(function (key) { _defineProperty$j(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$i(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$j(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$d(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$d(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$d(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$d(Constructor.prototype, protoProps); if (staticProps) _defineProperties$d(Constructor, staticProps); return Constructor; }

function _inherits$c(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$c(subClass, superClass); }

function _setPrototypeOf$c(o, p) { _setPrototypeOf$c = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$c(o, p); }

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf$c(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$c(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$c(this, result); }; }

function _possibleConstructorReturn$c(self, call) { if (call && (_typeof$c(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$c(self); }

function _assertThisInitialized$c(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$c(o) { _getPrototypeOf$c = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$c(o); }

var Animate = /*#__PURE__*/function (_PureComponent) {
  _inherits$c(Animate, _PureComponent);

  var _super = _createSuper$c(Animate);

  function Animate(props, context) {
    var _this;

    _classCallCheck$d(this, Animate);

    _this = _super.call(this, props, context);
    var _this$props = _this.props,
        isActive = _this$props.isActive,
        attributeName = _this$props.attributeName,
        from = _this$props.from,
        to = _this$props.to,
        steps = _this$props.steps,
        children = _this$props.children;
    _this.handleStyleChange = _this.handleStyleChange.bind(_assertThisInitialized$c(_this));
    _this.changeStyle = _this.changeStyle.bind(_assertThisInitialized$c(_this));

    if (!isActive) {
      _this.state = {
        style: {}
      }; // if children is a function and animation is not active, set style to 'to'

      if (typeof children === 'function') {
        _this.state = {
          style: to
        };
      }

      return _possibleConstructorReturn$c(_this);
    }

    if (steps && steps.length) {
      _this.state = {
        style: steps[0].style
      };
    } else if (from) {
      if (typeof children === 'function') {
        _this.state = {
          style: from
        };
        return _possibleConstructorReturn$c(_this);
      }

      _this.state = {
        style: attributeName ? _defineProperty$j({}, attributeName, from) : from
      };
    } else {
      _this.state = {
        style: {}
      };
    }

    return _this;
  }

  _createClass$d(Animate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          isActive = _this$props2.isActive,
          canBegin = _this$props2.canBegin;
      this.mounted = true;

      if (!isActive || !canBegin) {
        return;
      }

      this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          isActive = _this$props3.isActive,
          canBegin = _this$props3.canBegin,
          attributeName = _this$props3.attributeName,
          shouldReAnimate = _this$props3.shouldReAnimate;

      if (!canBegin) {
        return;
      }

      if (!isActive) {
        var newState = {
          style: attributeName ? _defineProperty$j({}, attributeName, this.props.to) : this.props.to
        };

        if (this.state && this.state.style) {
          if (attributeName && this.state.style[attributeName] !== this.props.to || !attributeName && this.state.style !== this.props.to) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState(newState);
          }
        }

        return;
      }

      if (deepEqual(prevProps.to, this.props.to) && prevProps.canBegin && prevProps.isActive) {
        return;
      }

      var isTriggered = !prevProps.canBegin || !prevProps.isActive;

      if (this.manager) {
        this.manager.stop();
      }

      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }

      var from = isTriggered || shouldReAnimate ? this.props.from : prevProps.to;

      if (this.state && this.state.style) {
        var _newState = {
          style: attributeName ? _defineProperty$j({}, attributeName, from) : from
        };

        if (attributeName && this.state.style[attributeName] !== from || !attributeName && this.state.style !== from) {
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState(_newState);
        }
      }

      this.runAnimation(_objectSpread$i(_objectSpread$i({}, this.props), {}, {
        from: from,
        begin: 0
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;

      if (this.unSubscribe) {
        this.unSubscribe();
      }

      if (this.manager) {
        this.manager.stop();
        this.manager = null;
      }

      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }
    }
  }, {
    key: "runJSAnimation",
    value: function runJSAnimation(props) {
      var _this2 = this;

      var from = props.from,
          to = props.to,
          duration = props.duration,
          easing = props.easing,
          begin = props.begin,
          onAnimationEnd = props.onAnimationEnd,
          onAnimationStart = props.onAnimationStart;
      var startAnimation = configUpdate(from, to, configEasing(easing), duration, this.changeStyle);

      var finalStartAnimation = function finalStartAnimation() {
        _this2.stopJSAnimation = startAnimation();
      };

      this.manager.start([onAnimationStart, begin, finalStartAnimation, duration, onAnimationEnd]);
    }
  }, {
    key: "runStepAnimation",
    value: function runStepAnimation(props) {
      var _this3 = this;

      var steps = props.steps,
          begin = props.begin,
          onAnimationStart = props.onAnimationStart;
      var _steps$ = steps[0],
          initialStyle = _steps$.style,
          _steps$$duration = _steps$.duration,
          initialTime = _steps$$duration === void 0 ? 0 : _steps$$duration;

      var addStyle = function addStyle(sequence, nextItem, index) {
        if (index === 0) {
          return sequence;
        }

        var duration = nextItem.duration,
            _nextItem$easing = nextItem.easing,
            easing = _nextItem$easing === void 0 ? 'ease' : _nextItem$easing,
            style = nextItem.style,
            nextProperties = nextItem.properties,
            onAnimationEnd = nextItem.onAnimationEnd;
        var preItem = index > 0 ? steps[index - 1] : nextItem;
        var properties = nextProperties || Object.keys(style);

        if (typeof easing === 'function' || easing === 'spring') {
          return [].concat(_toConsumableArray$8(sequence), [_this3.runJSAnimation.bind(_this3, {
            from: preItem.style,
            to: style,
            duration: duration,
            easing: easing
          }), duration]);
        }

        var transition = getTransitionVal(properties, duration, easing);

        var newStyle = _objectSpread$i(_objectSpread$i(_objectSpread$i({}, preItem.style), style), {}, {
          transition: transition
        });

        return [].concat(_toConsumableArray$8(sequence), [newStyle, duration, onAnimationEnd]).filter(identity$9);
      };

      return this.manager.start([onAnimationStart].concat(_toConsumableArray$8(steps.reduce(addStyle, [initialStyle, Math.max(initialTime, begin)])), [props.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function runAnimation(props) {
      if (!this.manager) {
        this.manager = createAnimateManager();
      }

      var begin = props.begin,
          duration = props.duration,
          attributeName = props.attributeName,
          propsTo = props.to,
          easing = props.easing,
          onAnimationStart = props.onAnimationStart,
          onAnimationEnd = props.onAnimationEnd,
          steps = props.steps,
          children = props.children;
      var manager = this.manager;
      this.unSubscribe = manager.subscribe(this.handleStyleChange);

      if (typeof easing === 'function' || typeof children === 'function' || easing === 'spring') {
        this.runJSAnimation(props);
        return;
      }

      if (steps.length > 1) {
        this.runStepAnimation(props);
        return;
      }

      var to = attributeName ? _defineProperty$j({}, attributeName, propsTo) : propsTo;
      var transition = getTransitionVal(Object.keys(to), duration, easing);
      manager.start([onAnimationStart, begin, _objectSpread$i(_objectSpread$i({}, to), {}, {
        transition: transition
      }), duration, onAnimationEnd]);
    }
  }, {
    key: "handleStyleChange",
    value: function handleStyleChange(style) {
      this.changeStyle(style);
    }
  }, {
    key: "changeStyle",
    value: function changeStyle(style) {
      if (this.mounted) {
        this.setState({
          style: style
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children;
          _this$props4.begin;
          _this$props4.duration;
          _this$props4.attributeName;
          _this$props4.easing;
          var isActive = _this$props4.isActive;
          _this$props4.steps;
          _this$props4.from;
          _this$props4.to;
          _this$props4.canBegin;
          _this$props4.onAnimationEnd;
          _this$props4.shouldReAnimate;
          _this$props4.onAnimationReStart;
          var others = _objectWithoutProperties$7(_this$props4, ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"]);

      var count = react.exports.Children.count(children);
      var stateStyle = translateStyle(this.state.style);

      if (typeof children === 'function') {
        return children(stateStyle);
      }

      if (!isActive || count === 0) {
        return children;
      }

      var cloneContainer = function cloneContainer(container) {
        var _container$props = container.props,
            _container$props$styl = _container$props.style,
            style = _container$props$styl === void 0 ? {} : _container$props$styl,
            className = _container$props.className;
        var res = /*#__PURE__*/react.exports.cloneElement(container, _objectSpread$i(_objectSpread$i({}, others), {}, {
          style: _objectSpread$i(_objectSpread$i({}, style), stateStyle),
          className: className
        }));
        return res;
      };

      if (count === 1) {
        return cloneContainer(react.exports.Children.only(children));
      }

      return /*#__PURE__*/React.createElement("div", null, react.exports.Children.map(children, function (child) {
        return cloneContainer(child);
      }));
    }
  }]);

  return Animate;
}(react.exports.PureComponent);

Animate.displayName = 'Animate';
Animate.propTypes = {
  from: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string]),
  to: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string]),
  attributeName: propTypes.exports.string,
  // animation duration
  duration: propTypes.exports.number,
  begin: propTypes.exports.number,
  easing: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
  steps: propTypes.exports.arrayOf(propTypes.exports.shape({
    duration: propTypes.exports.number.isRequired,
    style: propTypes.exports.object.isRequired,
    easing: propTypes.exports.oneOfType([propTypes.exports.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']), propTypes.exports.func]),
    // transition css properties(dash case), optional
    properties: propTypes.exports.arrayOf('string'),
    onAnimationEnd: propTypes.exports.func
  })),
  children: propTypes.exports.oneOfType([propTypes.exports.node, propTypes.exports.func]),
  isActive: propTypes.exports.bool,
  canBegin: propTypes.exports.bool,
  onAnimationEnd: propTypes.exports.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: propTypes.exports.bool,
  onAnimationStart: propTypes.exports.func,
  onAnimationReStart: propTypes.exports.func
};
Animate.defaultProps = {
  begin: 0,
  duration: 1000,
  from: '',
  to: '',
  attributeName: '',
  easing: 'ease',
  isActive: true,
  canBegin: true,
  steps: [],
  onAnimationEnd: function onAnimationEnd() {},
  onAnimationStart: function onAnimationStart() {}
};

if (Number.isFinite === undefined) {
  Number.isFinite = function (value) {
    return typeof value === 'number' && isFinite(value);
  };
}

({
  appearOptions: propTypes.exports.object,
  enterOptions: propTypes.exports.object,
  leaveOptions: propTypes.exports.object,
  children: propTypes.exports.element
});

({
  appear: propTypes.exports.object,
  enter: propTypes.exports.object,
  leave: propTypes.exports.object,
  children: propTypes.exports.oneOfType([propTypes.exports.array, propTypes.exports.element]),
  component: propTypes.exports.any
});

var Symbol$1 = _Symbol,
    isArguments = isArguments_1,
    isArray$4 = isArray_1;

/** Built-in value references. */
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable$1(value) {
  return isArray$4(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable$1;

var arrayPush = _arrayPush,
    isFlattenable = _isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten$2(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten$2(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten$2;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */

function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor$1;

var createBaseFor = _createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor$1 = createBaseFor();

var _baseFor = baseFor$1;

var baseFor = _baseFor,
    keys$1 = keys_1;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn$2(object, iteratee) {
  return object && baseFor(object, iteratee, keys$1);
}

var _baseForOwn = baseForOwn$2;

var isArrayLike$3 = isArrayLike_1;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$3(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach$1;

var baseForOwn$1 = _baseForOwn,
    createBaseEach = _createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach$3 = createBaseEach(baseForOwn$1);

var _baseEach = baseEach$3;

var baseEach$2 = _baseEach,
    isArrayLike$2 = isArrayLike_1;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap$2(collection, iteratee) {
  var index = -1,
      result = isArrayLike$2(collection) ? Array(collection.length) : [];

  baseEach$2(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap$2;

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */

function baseSortBy$1(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

var _baseSortBy = baseSortBy$1;

var isSymbol$2 = isSymbol_1;

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending$1(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol$2(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol$2(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

var _compareAscending = compareAscending$1;

var compareAscending = _compareAscending;

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple$1(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

var _compareMultiple = compareMultiple$1;

var arrayMap$1 = _arrayMap,
    baseGet = _baseGet,
    baseIteratee$6 = _baseIteratee,
    baseMap$1 = _baseMap,
    baseSortBy = _baseSortBy,
    baseUnary = _baseUnary,
    compareMultiple = _compareMultiple,
    identity$8 = identity_1,
    isArray$3 = isArray_1;

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy$1(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap$1(iteratees, function(iteratee) {
      if (isArray$3(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity$8];
  }

  var index = -1;
  iteratees = arrayMap$1(iteratees, baseUnary(baseIteratee$6));

  var result = baseMap$1(collection, function(value, key, collection) {
    var criteria = arrayMap$1(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

var _baseOrderBy = baseOrderBy$1;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */

function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply$1;

var apply = _apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$3 = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest$1(func, start, transform) {
  start = nativeMax$3(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$3(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

var _overRest = overRest$1;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */

function constant$2(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant$2;

var getNative = _getNative;

var defineProperty$2 = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty$i = defineProperty$2;

var constant$1 = constant_1,
    defineProperty$1 = _defineProperty$i,
    identity$7 = identity_1;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString$1 = !defineProperty$1 ? identity$7 : function(func, string) {
  return defineProperty$1(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant$1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString$1;

/** Used to detect hot functions by number of calls within a span of milliseconds. */

var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut$1(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut$1;

var baseSetToString = _baseSetToString,
    shortOut = _shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString$1 = shortOut(baseSetToString);

var _setToString = setToString$1;

var identity$6 = identity_1,
    overRest = _overRest,
    setToString = _setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity$6), func + '');
}

var _baseRest = baseRest$1;

var eq = eq_1,
    isArrayLike$1 = isArrayLike_1,
    isIndex = _isIndex,
    isObject$3 = isObject_1;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall$4(value, index, object) {
  if (!isObject$3(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike$1(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall$4;

var baseFlatten$1 = _baseFlatten,
    baseOrderBy = _baseOrderBy,
    baseRest = _baseRest,
    isIterateeCall$3 = _isIterateeCall;

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall$3(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall$3(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten$1(iteratees, 1), []);
});

var sortBy_1 = sortBy;

function _typeof$b(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$b = function _typeof(obj) { return typeof obj; }; } else { _typeof$b = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$b(obj); }

function _slicedToArray$5(arr, i) { return _arrayWithHoles$5(arr) || _iterableToArrayLimit$5(arr, i) || _unsupportedIterableToArray$b(arr, i) || _nonIterableRest$5(); }

function _nonIterableRest$5() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$b(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$b(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$b(o, minLen); }

function _arrayLikeToArray$b(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$5(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$5(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys$h(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$h(Object(source), true).forEach(function (key) { _defineProperty$h(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$h(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$h(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$c(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$c(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$c(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$c(Constructor.prototype, protoProps); if (staticProps) _defineProperties$c(Constructor, staticProps); return Constructor; }

function _inherits$b(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$b(subClass, superClass); }

function _setPrototypeOf$b(o, p) { _setPrototypeOf$b = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$b(o, p); }

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf$b(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$b(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$b(this, result); }; }

function _possibleConstructorReturn$b(self, call) { if (call && (_typeof$b(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$b(self); }

function _assertThisInitialized$b(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$b(o) { _getPrototypeOf$b = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$b(o); }

function defaultFormatter(value) {
  return isArray_1(value) && isNumOrStr(value[0]) && isNumOrStr(value[1]) ? value.join(' ~ ') : value;
}

var DefaultTooltipContent = /*#__PURE__*/function (_PureComponent) {
  _inherits$b(DefaultTooltipContent, _PureComponent);

  var _super = _createSuper$b(DefaultTooltipContent);

  function DefaultTooltipContent() {
    _classCallCheck$c(this, DefaultTooltipContent);

    return _super.apply(this, arguments);
  }

  _createClass$c(DefaultTooltipContent, [{
    key: "renderContent",
    value: function renderContent() {
      var _this$props = this.props,
          payload = _this$props.payload,
          separator = _this$props.separator,
          formatter = _this$props.formatter,
          itemStyle = _this$props.itemStyle,
          itemSorter = _this$props.itemSorter;

      if (payload && payload.length) {
        var listStyle = {
          padding: 0,
          margin: 0
        };
        var items = (itemSorter ? sortBy_1(payload, itemSorter) : payload).map(function (entry, i) {
          if (entry.type === 'none') {
            return null;
          }

          var finalItemStyle = _objectSpread$h({
            display: 'block',
            paddingTop: 4,
            paddingBottom: 4,
            color: entry.color || '#000'
          }, itemStyle);

          var finalFormatter = entry.formatter || formatter || defaultFormatter;
          var value = entry.value,
              name = entry.name;

          if (finalFormatter && value != null && name != null) {
            var formatted = finalFormatter(value, name, entry, i, payload);

            if (Array.isArray(formatted)) {
              var _ref = formatted;

              var _ref2 = _slicedToArray$5(_ref, 2);

              value = _ref2[0];
              name = _ref2[1];
            } else {
              value = formatted;
            }
          }

          return (
            /*#__PURE__*/
            // eslint-disable-next-line react/no-array-index-key
            React.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(i),
              style: finalItemStyle
            }, isNumOrStr(name) ? /*#__PURE__*/React.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, name) : null, isNumOrStr(name) ? /*#__PURE__*/React.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, separator) : null, /*#__PURE__*/React.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, value), /*#__PURE__*/React.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, entry.unit || ''))
          );
        });
        return /*#__PURE__*/React.createElement("ul", {
          className: "recharts-tooltip-item-list",
          style: listStyle
        }, items);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          wrapperClassName = _this$props2.wrapperClassName,
          contentStyle = _this$props2.contentStyle,
          labelClassName = _this$props2.labelClassName,
          labelStyle = _this$props2.labelStyle,
          label = _this$props2.label,
          labelFormatter = _this$props2.labelFormatter,
          payload = _this$props2.payload;

      var finalStyle = _objectSpread$h({
        margin: 0,
        padding: 10,
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        whiteSpace: 'nowrap'
      }, contentStyle);

      var finalLabelStyle = _objectSpread$h({
        margin: 0
      }, labelStyle);

      var hasLabel = !isNil_1(label);
      var finalLabel = hasLabel ? label : '';
      var wrapperCN = classNames('recharts-default-tooltip', wrapperClassName);
      var labelCN = classNames('recharts-tooltip-label', labelClassName);

      if (hasLabel && labelFormatter && payload !== undefined && payload !== null) {
        finalLabel = labelFormatter(label, payload);
      }

      return /*#__PURE__*/React.createElement("div", {
        className: wrapperCN,
        style: finalStyle
      }, /*#__PURE__*/React.createElement("p", {
        className: labelCN,
        style: finalLabelStyle
      }, /*#__PURE__*/React.isValidElement(finalLabel) ? finalLabel : "".concat(finalLabel)), this.renderContent());
    }
  }]);

  return DefaultTooltipContent;
}(react.exports.PureComponent);
DefaultTooltipContent.displayName = 'DefaultTooltipContent';
DefaultTooltipContent.defaultProps = {
  separator: ' : ',
  contentStyle: {},
  itemStyle: {},
  labelStyle: {}
};

var parseIsSsrByDefault = function parseIsSsrByDefault() {
  return !(typeof window !== 'undefined' && window.document && window.document.createElement && window.setTimeout);
};

var Global = {
  isSsr: parseIsSsrByDefault(),
  get: function get(key) {
    return Global[key];
  },
  set: function set(key, value) {
    if (typeof key === 'string') {
      Global[key] = value;
    } else {
      var keys = Object.keys(key);

      if (keys && keys.length) {
        keys.forEach(function (k) {
          Global[k] = key[k];
        });
      }
    }
  }
};

function _typeof$a(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$a = function _typeof(obj) { return typeof obj; }; } else { _typeof$a = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$a(obj); }

function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$g(Object(source), true).forEach(function (key) { _defineProperty$g(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$g(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$g(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$b(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$b(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$b(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$b(Constructor.prototype, protoProps); if (staticProps) _defineProperties$b(Constructor, staticProps); return Constructor; }

function _inherits$a(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$a(subClass, superClass); }

function _setPrototypeOf$a(o, p) { _setPrototypeOf$a = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$a(o, p); }

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf$a(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$a(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$a(this, result); }; }

function _possibleConstructorReturn$a(self, call) { if (call && (_typeof$a(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$a(self); }

function _assertThisInitialized$a(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$a(o) { _getPrototypeOf$a = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$a(o); }
var CLS_PREFIX = 'recharts-tooltip-wrapper';
var EPS$1 = 1;

function defaultUniqBy(entry) {
  return entry.dataKey;
}

function getUniqPayload(option, payload) {
  if (option === true) {
    return uniqBy_1(payload, defaultUniqBy);
  }

  if (isFunction_1(option)) {
    return uniqBy_1(payload, option);
  }

  return payload;
}

function renderContent(content, props) {
  if ( /*#__PURE__*/React.isValidElement(content)) {
    return /*#__PURE__*/React.cloneElement(content, props);
  }

  if (isFunction_1(content)) {
    return /*#__PURE__*/React.createElement(content, props);
  }

  return /*#__PURE__*/React.createElement(DefaultTooltipContent, props);
}

var Tooltip = /*#__PURE__*/function (_PureComponent) {
  _inherits$a(Tooltip, _PureComponent);

  var _super = _createSuper$a(Tooltip);

  function Tooltip() {
    var _this;

    _classCallCheck$b(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      boxWidth: -1,
      boxHeight: -1,
      dismissed: false,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    };
    _this.wrapperNode = void 0;

    _this.getTranslate = function (_ref) {
      var key = _ref.key,
          tooltipDimension = _ref.tooltipDimension,
          viewBoxDimension = _ref.viewBoxDimension;
      var _this$props = _this.props,
          allowEscapeViewBox = _this$props.allowEscapeViewBox,
          reverseDirection = _this$props.reverseDirection,
          coordinate = _this$props.coordinate,
          offset = _this$props.offset,
          position = _this$props.position,
          viewBox = _this$props.viewBox;

      if (position && isNumber(position[key])) {
        return position[key];
      }

      var negative = coordinate[key] - tooltipDimension - offset;
      var positive = coordinate[key] + offset;

      if (allowEscapeViewBox[key]) {
        return reverseDirection[key] ? negative : positive;
      }

      if (reverseDirection[key]) {
        var tooltipBoundary = negative;
        var viewBoxBoundary = viewBox[key];

        if (tooltipBoundary < viewBoxBoundary) {
          return Math.max(positive, viewBox[key]);
        }

        return Math.max(negative, viewBox[key]);
      } else {
        var _tooltipBoundary = positive + tooltipDimension;

        var _viewBoxBoundary = viewBox[key] + viewBoxDimension;

        if (_tooltipBoundary > _viewBoxBoundary) {
          return Math.max(negative, viewBox[key]);
        }

        return Math.max(positive, viewBox[key]);
      }
    };

    return _this;
  }

  _createClass$b(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateBBox();
    }
  }, {
    key: "updateBBox",
    value: function updateBBox() {
      var _this$state = this.state,
          boxWidth = _this$state.boxWidth,
          boxHeight = _this$state.boxHeight,
          dismissed = _this$state.dismissed;

      if (dismissed) {
        this.wrapperNode.blur();

        if (this.props.coordinate.x !== this.state.dismissedAtCoordinate.x || this.props.coordinate.y !== this.state.dismissedAtCoordinate.y) {
          this.setState({
            dismissed: false
          });
        }
      } else {
        this.wrapperNode.focus({
          preventScroll: true
        });
      }

      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var box = this.wrapperNode.getBoundingClientRect();

        if (Math.abs(box.width - boxWidth) > EPS$1 || Math.abs(box.height - boxHeight) > EPS$1) {
          this.setState({
            boxWidth: box.width,
            boxHeight: box.height
          });
        }
      } else if (boxWidth !== -1 || boxHeight !== -1) {
        this.setState({
          boxWidth: -1,
          boxHeight: -1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props2 = this.props,
          payload = _this$props2.payload,
          isAnimationActive = _this$props2.isAnimationActive,
          animationDuration = _this$props2.animationDuration,
          animationEasing = _this$props2.animationEasing,
          filterNull = _this$props2.filterNull,
          payloadUniqBy = _this$props2.payloadUniqBy;
      var finalPayload = getUniqPayload(payloadUniqBy, filterNull && payload && payload.length ? payload.filter(function (entry) {
        return !isNil_1(entry.value);
      }) : payload);
      var hasPayload = finalPayload && finalPayload.length;
      var _this$props3 = this.props,
          content = _this$props3.content,
          viewBox = _this$props3.viewBox,
          coordinate = _this$props3.coordinate,
          position = _this$props3.position,
          active = _this$props3.active,
          wrapperStyle = _this$props3.wrapperStyle;

      var outerStyle = _objectSpread$g({
        pointerEvents: 'none',
        visibility: !this.state.dismissed && active && hasPayload ? 'visible' : 'hidden',
        position: 'absolute',
        top: 0,
        left: 0
      }, wrapperStyle);

      var translateX, translateY;

      if (position && isNumber(position.x) && isNumber(position.y)) {
        translateX = position.x;
        translateY = position.y;
      } else {
        var _this$state2 = this.state,
            boxWidth = _this$state2.boxWidth,
            boxHeight = _this$state2.boxHeight;

        if (boxWidth > 0 && boxHeight > 0 && coordinate) {
          translateX = this.getTranslate({
            key: 'x',
            tooltipDimension: boxWidth,
            viewBoxDimension: viewBox.width
          });
          translateY = this.getTranslate({
            key: 'y',
            tooltipDimension: boxHeight,
            viewBoxDimension: viewBox.height
          });
        } else {
          outerStyle.visibility = 'hidden';
        }
      }

      outerStyle = _objectSpread$g(_objectSpread$g({}, translateStyle({
        transform: this.props.useTranslate3d ? "translate3d(".concat(translateX, "px, ").concat(translateY, "px, 0)") : "translate(".concat(translateX, "px, ").concat(translateY, "px)")
      })), outerStyle);

      if (isAnimationActive && active) {
        outerStyle = _objectSpread$g(_objectSpread$g({}, translateStyle({
          transition: "transform ".concat(animationDuration, "ms ").concat(animationEasing)
        })), outerStyle);
      }

      var cls = classNames(CLS_PREFIX, (_classNames = {}, _defineProperty$g(_classNames, "".concat(CLS_PREFIX, "-right"), isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX >= coordinate.x), _defineProperty$g(_classNames, "".concat(CLS_PREFIX, "-left"), isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX < coordinate.x), _defineProperty$g(_classNames, "".concat(CLS_PREFIX, "-bottom"), isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY >= coordinate.y), _defineProperty$g(_classNames, "".concat(CLS_PREFIX, "-top"), isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY < coordinate.y), _classNames));
      return (
        /*#__PURE__*/
        // ESLint is disabled to allow listening to the `Escape` key. Refer to
        // https://github.com/recharts/recharts/pull/2925
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        React.createElement("div", {
          tabIndex: -1,
          role: "dialog",
          onKeyDown: function onKeyDown(event) {
            if (event.key === 'Escape') {
              _this2.setState({
                dismissed: true,
                dismissedAtCoordinate: _objectSpread$g(_objectSpread$g({}, _this2.state.dismissedAtCoordinate), {}, {
                  x: _this2.props.coordinate.x,
                  y: _this2.props.coordinate.y
                })
              });
            }
          },
          className: cls,
          style: outerStyle,
          ref: function ref(node) {
            _this2.wrapperNode = node;
          }
        }, renderContent(content, _objectSpread$g(_objectSpread$g({}, this.props), {}, {
          payload: finalPayload
        })))
      );
    }
  }]);

  return Tooltip;
}(react.exports.PureComponent);
Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
  active: false,
  allowEscapeViewBox: {
    x: false,
    y: false
  },
  reverseDirection: {
    x: false,
    y: false
  },
  offset: 10,
  viewBox: {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  },
  coordinate: {
    x: 0,
    y: 0
  },
  cursorStyle: {},
  separator: ' : ',
  wrapperStyle: {},
  contentStyle: {},
  itemStyle: {},
  labelStyle: {},
  cursor: true,
  trigger: 'hover',
  isAnimationActive: !Global.isSsr,
  animationEasing: 'ease',
  animationDuration: 400,
  filterNull: true,
  useTranslate3d: false
};

var root = _root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now$1 = function() {
  return root.Date.now();
};

var now_1 = now$1;

/** Used to match a single whitespace character. */

var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex$1(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex$1;

var trimmedEndIndex = _trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim$1(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim$1;

var baseTrim = _baseTrim,
    isObject$2 = isObject_1,
    isSymbol$1 = isSymbol_1;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$2(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$2(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber$2;

var isObject$1 = isObject_1,
    now = now_1,
    toNumber$1 = toNumber_1;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$2 = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce$1(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber$1(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$2(toNumber$1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce$1;

/* eslint no-console: 0 */
var warn = function warn(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
};

var dist = {exports: {}};

var openParentheses = "(".charCodeAt(0);
var closeParentheses = ")".charCodeAt(0);
var singleQuote = "'".charCodeAt(0);
var doubleQuote = '"'.charCodeAt(0);
var backslash = "\\".charCodeAt(0);
var slash = "/".charCodeAt(0);
var comma = ",".charCodeAt(0);
var colon = ":".charCodeAt(0);
var star = "*".charCodeAt(0);

var parse$1 = function(input) {
  var tokens = [];
  var value = input;

  var next, quote, prev, token, escape, escapePos, whitespacePos;
  var pos = 0;
  var code = value.charCodeAt(pos);
  var max = value.length;
  var stack = [{ nodes: tokens }];
  var balanced = 0;
  var parent;

  var name = "";
  var before = "";
  var after = "";

  while (pos < max) {
    // Whitespaces
    if (code <= 32) {
      next = pos;
      do {
        next += 1;
        code = value.charCodeAt(next);
      } while (code <= 32);
      token = value.slice(pos, next);

      prev = tokens[tokens.length - 1];
      if (code === closeParentheses && balanced) {
        after = token;
      } else if (prev && prev.type === "div") {
        prev.after = token;
      } else if (
        code === comma ||
        code === colon ||
        (code === slash && value.charCodeAt(next + 1) !== star)
      ) {
        before = token;
      } else {
        tokens.push({
          type: "space",
          sourceIndex: pos,
          value: token
        });
      }

      pos = next;

      // Quotes
    } else if (code === singleQuote || code === doubleQuote) {
      next = pos;
      quote = code === singleQuote ? "'" : '"';
      token = {
        type: "string",
        sourceIndex: pos,
        quote: quote
      };
      do {
        escape = false;
        next = value.indexOf(quote, next + 1);
        if (~next) {
          escapePos = next;
          while (value.charCodeAt(escapePos - 1) === backslash) {
            escapePos -= 1;
            escape = !escape;
          }
        } else {
          value += quote;
          next = value.length - 1;
          token.unclosed = true;
        }
      } while (escape);
      token.value = value.slice(pos + 1, next);

      tokens.push(token);
      pos = next + 1;
      code = value.charCodeAt(pos);

      // Comments
    } else if (code === slash && value.charCodeAt(pos + 1) === star) {
      token = {
        type: "comment",
        sourceIndex: pos
      };

      next = value.indexOf("*/", pos);
      if (next === -1) {
        token.unclosed = true;
        next = value.length;
      }

      token.value = value.slice(pos + 2, next);
      tokens.push(token);

      pos = next + 2;
      code = value.charCodeAt(pos);

      // Dividers
    } else if (code === slash || code === comma || code === colon) {
      token = value[pos];

      tokens.push({
        type: "div",
        sourceIndex: pos - before.length,
        value: token,
        before: before,
        after: ""
      });
      before = "";

      pos += 1;
      code = value.charCodeAt(pos);

      // Open parentheses
    } else if (openParentheses === code) {
      // Whitespaces after open parentheses
      next = pos;
      do {
        next += 1;
        code = value.charCodeAt(next);
      } while (code <= 32);
      token = {
        type: "function",
        sourceIndex: pos - name.length,
        value: name,
        before: value.slice(pos + 1, next)
      };
      pos = next;

      if (name === "url" && code !== singleQuote && code !== doubleQuote) {
        next -= 1;
        do {
          escape = false;
          next = value.indexOf(")", next + 1);
          if (~next) {
            escapePos = next;
            while (value.charCodeAt(escapePos - 1) === backslash) {
              escapePos -= 1;
              escape = !escape;
            }
          } else {
            value += ")";
            next = value.length - 1;
            token.unclosed = true;
          }
        } while (escape);
        // Whitespaces before closed
        whitespacePos = next;
        do {
          whitespacePos -= 1;
          code = value.charCodeAt(whitespacePos);
        } while (code <= 32);
        if (pos !== whitespacePos + 1) {
          token.nodes = [
            {
              type: "word",
              sourceIndex: pos,
              value: value.slice(pos, whitespacePos + 1)
            }
          ];
        } else {
          token.nodes = [];
        }
        if (token.unclosed && whitespacePos + 1 !== next) {
          token.after = "";
          token.nodes.push({
            type: "space",
            sourceIndex: whitespacePos + 1,
            value: value.slice(whitespacePos + 1, next)
          });
        } else {
          token.after = value.slice(whitespacePos + 1, next);
        }
        pos = next + 1;
        code = value.charCodeAt(pos);
        tokens.push(token);
      } else {
        balanced += 1;
        token.after = "";
        tokens.push(token);
        stack.push(token);
        tokens = token.nodes = [];
        parent = token;
      }
      name = "";

      // Close parentheses
    } else if (closeParentheses === code && balanced) {
      pos += 1;
      code = value.charCodeAt(pos);

      parent.after = after;
      after = "";
      balanced -= 1;
      stack.pop();
      parent = stack[balanced];
      tokens = parent.nodes;

      // Words
    } else {
      next = pos;
      do {
        if (code === backslash) {
          next += 1;
        }
        next += 1;
        code = value.charCodeAt(next);
      } while (
        next < max &&
        !(
          code <= 32 ||
          code === singleQuote ||
          code === doubleQuote ||
          code === comma ||
          code === colon ||
          code === slash ||
          code === openParentheses ||
          (code === closeParentheses && balanced)
        )
      );
      token = value.slice(pos, next);

      if (openParentheses === code) {
        name = token;
      } else {
        tokens.push({
          type: "word",
          sourceIndex: pos,
          value: token
        });
      }

      pos = next;
    }
  }

  for (pos = stack.length - 1; pos; pos -= 1) {
    stack[pos].unclosed = true;
  }

  return stack[0].nodes;
};

var walk$1 = function walk(nodes, cb, bubble) {
  var i, max, node, result;

  for (i = 0, max = nodes.length; i < max; i += 1) {
    node = nodes[i];
    if (!bubble) {
      result = cb(node, i, nodes);
    }

    if (
      result !== false &&
      node.type === "function" &&
      Array.isArray(node.nodes)
    ) {
      walk(node.nodes, cb, bubble);
    }

    if (bubble) {
      cb(node, i, nodes);
    }
  }
};

function stringifyNode(node, custom) {
  var type = node.type;
  var value = node.value;
  var buf;
  var customResult;

  if (custom && (customResult = custom(node)) !== undefined) {
    return customResult;
  } else if (type === "word" || type === "space") {
    return value;
  } else if (type === "string") {
    buf = node.quote || "";
    return buf + value + (node.unclosed ? "" : buf);
  } else if (type === "comment") {
    return "/*" + value + (node.unclosed ? "" : "*/");
  } else if (type === "div") {
    return (node.before || "") + value + (node.after || "");
  } else if (Array.isArray(node.nodes)) {
    buf = stringify$1(node.nodes);
    if (type !== "function") {
      return buf;
    }
    return (
      value +
      "(" +
      (node.before || "") +
      buf +
      (node.after || "") +
      (node.unclosed ? "" : ")")
    );
  }
  return value;
}

function stringify$1(nodes, custom) {
  var result, i;

  if (Array.isArray(nodes)) {
    result = "";
    for (i = nodes.length - 1; ~i; i -= 1) {
      result = stringifyNode(nodes[i], custom) + result;
    }
    return result;
  }
  return stringifyNode(nodes, custom);
}

var stringify_1 = stringify$1;

var unit$1;
var hasRequiredUnit;

function requireUnit () {
	if (hasRequiredUnit) return unit$1;
	hasRequiredUnit = 1;
	var minus = "-".charCodeAt(0);
	var plus = "+".charCodeAt(0);
	var dot = ".".charCodeAt(0);
	var exp = "e".charCodeAt(0);
	var EXP = "E".charCodeAt(0);

	unit$1 = function(value) {
	  var pos = 0;
	  var length = value.length;
	  var dotted = false;
	  var sciPos = -1;
	  var containsNumber = false;
	  var code;

	  while (pos < length) {
	    code = value.charCodeAt(pos);

	    if (code >= 48 && code <= 57) {
	      containsNumber = true;
	    } else if (code === exp || code === EXP) {
	      if (sciPos > -1) {
	        break;
	      }
	      sciPos = pos;
	    } else if (code === dot) {
	      if (dotted) {
	        break;
	      }
	      dotted = true;
	    } else if (code === plus || code === minus) {
	      if (pos !== 0) {
	        break;
	      }
	    } else {
	      break;
	    }

	    pos += 1;
	  }

	  if (sciPos + 1 === pos) pos--;

	  return containsNumber
	    ? {
	        number: value.slice(0, pos),
	        unit: value.slice(pos)
	      }
	    : false;
	};
	return unit$1;
}

var parse = parse$1;
var walk = walk$1;
var stringify = stringify_1;

function ValueParser(value) {
  if (this instanceof ValueParser) {
    this.nodes = parse(value);
    return this;
  }
  return new ValueParser(value);
}

ValueParser.prototype.toString = function() {
  return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
};

ValueParser.prototype.walk = function(cb, bubble) {
  walk(this.nodes, cb, bubble);
  return this;
};

ValueParser.unit = requireUnit();

ValueParser.walk = walk;

ValueParser.stringify = stringify;

var lib = ValueParser;

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var parser = {};

(function (exports) {
	/* parser generated by jison 0.6.1-215 */

	/*
	 * Returns a Parser object of the following structure:
	 *
	 *  Parser: {
	 *    yy: {}     The so-called "shared state" or rather the *source* of it;
	 *               the real "shared state" `yy` passed around to
	 *               the rule actions, etc. is a derivative/copy of this one,
	 *               not a direct reference!
	 *  }
	 *
	 *  Parser.prototype: {
	 *    yy: {},
	 *    EOF: 1,
	 *    TERROR: 2,
	 *
	 *    trace: function(errorMessage, ...),
	 *
	 *    JisonParserError: function(msg, hash),
	 *
	 *    quoteName: function(name),
	 *               Helper function which can be overridden by user code later on: put suitable
	 *               quotes around literal IDs in a description string.
	 *
	 *    originalQuoteName: function(name),
	 *               The basic quoteName handler provided by JISON.
	 *               `cleanupAfterParse()` will clean up and reset `quoteName()` to reference this function
	 *               at the end of the `parse()`.
	 *
	 *    describeSymbol: function(symbol),
	 *               Return a more-or-less human-readable description of the given symbol, when
	 *               available, or the symbol itself, serving as its own 'description' for lack
	 *               of something better to serve up.
	 *
	 *               Return NULL when the symbol is unknown to the parser.
	 *
	 *    symbols_: {associative list: name ==> number},
	 *    terminals_: {associative list: number ==> name},
	 *    nonterminals: {associative list: rule-name ==> {associative list: number ==> rule-alt}},
	 *    terminal_descriptions_: (if there are any) {associative list: number ==> description},
	 *    productions_: [...],
	 *
	 *    performAction: function parser__performAction(yytext, yyleng, yylineno, yyloc, yystate, yysp, yyvstack, yylstack, yystack, yysstack),
	 *
	 *               The function parameters and `this` have the following value/meaning:
	 *               - `this`    : reference to the `yyval` internal object, which has members (`$` and `_$`)
	 *                             to store/reference the rule value `$$` and location info `@$`.
	 *
	 *                 One important thing to note about `this` a.k.a. `yyval`: every *reduce* action gets
	 *                 to see the same object via the `this` reference, i.e. if you wish to carry custom
	 *                 data from one reduce action through to the next within a single parse run, then you
	 *                 may get nasty and use `yyval` a.k.a. `this` for storing you own semi-permanent data.
	 *
	 *                 `this.yy` is a direct reference to the `yy` shared state object.
	 *
	 *                 `%parse-param`-specified additional `parse()` arguments have been added to this `yy`
	 *                 object at `parse()` start and are therefore available to the action code via the
	 *                 same named `yy.xxxx` attributes (where `xxxx` represents a identifier name from
	 *                 the %parse-param` list.
	 *
	 *               - `yytext`  : reference to the lexer value which belongs to the last lexer token used
	 *                             to match this rule. This is *not* the look-ahead token, but the last token
	 *                             that's actually part of this rule.
	 *
	 *                 Formulated another way, `yytext` is the value of the token immediately preceeding
	 *                 the current look-ahead token.
	 *                 Caveats apply for rules which don't require look-ahead, such as epsilon rules.
	 *
	 *               - `yyleng`  : ditto as `yytext`, only now for the lexer.yyleng value.
	 *
	 *               - `yylineno`: ditto as `yytext`, only now for the lexer.yylineno value.
	 *
	 *               - `yyloc`   : ditto as `yytext`, only now for the lexer.yylloc lexer token location info.
	 *
	 *                               WARNING: since jison 0.4.18-186 this entry may be NULL/UNDEFINED instead
	 *                               of an empty object when no suitable location info can be provided.
	 *
	 *               - `yystate` : the current parser state number, used internally for dispatching and
	 *                               executing the action code chunk matching the rule currently being reduced.
	 *
	 *               - `yysp`    : the current state stack position (a.k.a. 'stack pointer')
	 *
	 *                 This one comes in handy when you are going to do advanced things to the parser
	 *                 stacks, all of which are accessible from your action code (see the next entries below).
	 *
	 *                 Also note that you can access this and other stack index values using the new double-hash
	 *                 syntax, i.e. `##$ === ##0 === yysp`, while `##1` is the stack index for all things
	 *                 related to the first rule term, just like you have `$1`, `@1` and `#1`.
	 *                 This is made available to write very advanced grammar action rules, e.g. when you want
	 *                 to investigate the parse state stack in your action code, which would, for example,
	 *                 be relevant when you wish to implement error diagnostics and reporting schemes similar
	 *                 to the work described here:
	 *
	 *                 + Pottier, F., 2016. Reachability and error diagnosis in LR(1) automata.
	 *                   In Journées Francophones des Languages Applicatifs.
	 *
	 *                 + Jeffery, C.L., 2003. Generating LR syntax error messages from examples.
	 *                   ACM Transactions on Programming Languages and Systems (TOPLAS), 25(5), pp.631–640.
	 *
	 *               - `yyrulelength`: the current rule's term count, i.e. the number of entries occupied on the stack.
	 *
	 *                 This one comes in handy when you are going to do advanced things to the parser
	 *                 stacks, all of which are accessible from your action code (see the next entries below).
	 *
	 *               - `yyvstack`: reference to the parser value stack. Also accessed via the `$1` etc.
	 *                             constructs.
	 *
	 *               - `yylstack`: reference to the parser token location stack. Also accessed via
	 *                             the `@1` etc. constructs.
	 *
	 *                             WARNING: since jison 0.4.18-186 this array MAY contain slots which are
	 *                             UNDEFINED rather than an empty (location) object, when the lexer/parser
	 *                             action code did not provide a suitable location info object when such a
	 *                             slot was filled!
	 *
	 *               - `yystack` : reference to the parser token id stack. Also accessed via the
	 *                             `#1` etc. constructs.
	 *
	 *                 Note: this is a bit of a **white lie** as we can statically decode any `#n` reference to
	 *                 its numeric token id value, hence that code wouldn't need the `yystack` but *you* might
	 *                 want access this array for your own purposes, such as error analysis as mentioned above!
	 *
	 *                 Note that this stack stores the current stack of *tokens*, that is the sequence of
	 *                 already parsed=reduced *nonterminals* (tokens representing rules) and *terminals*
	 *                 (lexer tokens *shifted* onto the stack until the rule they belong to is found and
	 *                 *reduced*.
	 *
	 *               - `yysstack`: reference to the parser state stack. This one carries the internal parser
	 *                             *states* such as the one in `yystate`, which are used to represent
	 *                             the parser state machine in the *parse table*. *Very* *internal* stuff,
	 *                             what can I say? If you access this one, you're clearly doing wicked things
	 *
	 *               - `...`     : the extra arguments you specified in the `%parse-param` statement in your
	 *                             grammar definition file.
	 *
	 *    table: [...],
	 *               State transition table
	 *               ----------------------
	 *
	 *               index levels are:
	 *               - `state`  --> hash table
	 *               - `symbol` --> action (number or array)
	 *
	 *                 If the `action` is an array, these are the elements' meaning:
	 *                 - index [0]: 1 = shift, 2 = reduce, 3 = accept
	 *                 - index [1]: GOTO `state`
	 *
	 *                 If the `action` is a number, it is the GOTO `state`
	 *
	 *    defaultActions: {...},
	 *
	 *    parseError: function(str, hash, ExceptionClass),
	 *    yyError: function(str, ...),
	 *    yyRecovering: function(),
	 *    yyErrOk: function(),
	 *    yyClearIn: function(),
	 *
	 *    constructParseErrorInfo: function(error_message, exception_object, expected_token_set, is_recoverable),
	 *               Helper function **which will be set up during the first invocation of the `parse()` method**.
	 *               Produces a new errorInfo 'hash object' which can be passed into `parseError()`.
	 *               See it's use in this parser kernel in many places; example usage:
	 *
	 *                   var infoObj = parser.constructParseErrorInfo('fail!', null,
	 *                                     parser.collect_expected_token_set(state), true);
	 *                   var retVal = parser.parseError(infoObj.errStr, infoObj, parser.JisonParserError);
	 *
	 *    originalParseError: function(str, hash, ExceptionClass),
	 *               The basic `parseError` handler provided by JISON.
	 *               `cleanupAfterParse()` will clean up and reset `parseError()` to reference this function
	 *               at the end of the `parse()`.
	 *
	 *    options: { ... parser %options ... },
	 *
	 *    parse: function(input[, args...]),
	 *               Parse the given `input` and return the parsed value (or `true` when none was provided by
	 *               the root action, in which case the parser is acting as a *matcher*).
	 *               You MAY use the additional `args...` parameters as per `%parse-param` spec of this grammar:
	 *               these extra `args...` are added verbatim to the `yy` object reference as member variables.
	 *
	 *               WARNING:
	 *               Parser's additional `args...` parameters (via `%parse-param`) MAY conflict with
	 *               any attributes already added to `yy` by the jison run-time;
	 *               when such a collision is detected an exception is thrown to prevent the generated run-time
	 *               from silently accepting this confusing and potentially hazardous situation!
	 *
	 *               The lexer MAY add its own set of additional parameters (via the `%parse-param` line in
	 *               the lexer section of the grammar spec): these will be inserted in the `yy` shared state
	 *               object and any collision with those will be reported by the lexer via a thrown exception.
	 *
	 *    cleanupAfterParse: function(resultValue, invoke_post_methods, do_not_nuke_errorinfos),
	 *               Helper function **which will be set up during the first invocation of the `parse()` method**.
	 *               This helper API is invoked at the end of the `parse()` call, unless an exception was thrown
	 *               and `%options no-try-catch` has been defined for this grammar: in that case this helper MAY
	 *               be invoked by calling user code to ensure the `post_parse` callbacks are invoked and
	 *               the internal parser gets properly garbage collected under these particular circumstances.
	 *
	 *    yyMergeLocationInfo: function(first_index, last_index, first_yylloc, last_yylloc, dont_look_back),
	 *               Helper function **which will be set up during the first invocation of the `parse()` method**.
	 *               This helper API can be invoked to calculate a spanning `yylloc` location info object.
	 *
	 *               Note: %epsilon rules MAY specify no `first_index` and `first_yylloc`, in which case
	 *               this function will attempt to obtain a suitable location marker by inspecting the location stack
	 *               backwards.
	 *
	 *               For more info see the documentation comment further below, immediately above this function's
	 *               implementation.
	 *
	 *    lexer: {
	 *        yy: {...},           A reference to the so-called "shared state" `yy` once
	 *                             received via a call to the `.setInput(input, yy)` lexer API.
	 *        EOF: 1,
	 *        ERROR: 2,
	 *        JisonLexerError: function(msg, hash),
	 *        parseError: function(str, hash, ExceptionClass),
	 *        setInput: function(input, [yy]),
	 *        input: function(),
	 *        unput: function(str),
	 *        more: function(),
	 *        reject: function(),
	 *        less: function(n),
	 *        pastInput: function(n),
	 *        upcomingInput: function(n),
	 *        showPosition: function(),
	 *        test_match: function(regex_match_array, rule_index, ...),
	 *        next: function(...),
	 *        lex: function(...),
	 *        begin: function(condition),
	 *        pushState: function(condition),
	 *        popState: function(),
	 *        topState: function(),
	 *        _currentRules: function(),
	 *        stateStackSize: function(),
	 *        cleanupAfterLex: function()
	 *
	 *        options: { ... lexer %options ... },
	 *
	 *        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START, ...),
	 *        rules: [...],
	 *        conditions: {associative list: name ==> set},
	 *    }
	 *  }
	 *
	 *
	 *  token location info (@$, _$, etc.): {
	 *    first_line: n,
	 *    last_line: n,
	 *    first_column: n,
	 *    last_column: n,
	 *    range: [start_number, end_number]
	 *               (where the numbers are indexes into the input string, zero-based)
	 *  }
	 *
	 * ---
	 *
	 * The `parseError` function receives a 'hash' object with these members for lexer and
	 * parser errors:
	 *
	 *  {
	 *    text:        (matched text)
	 *    token:       (the produced terminal token, if any)
	 *    token_id:    (the produced terminal token numeric ID, if any)
	 *    line:        (yylineno)
	 *    loc:         (yylloc)
	 *  }
	 *
	 * parser (grammar) errors will also provide these additional members:
	 *
	 *  {
	 *    expected:    (array describing the set of expected tokens;
	 *                  may be UNDEFINED when we cannot easily produce such a set)
	 *    state:       (integer (or array when the table includes grammar collisions);
	 *                  represents the current internal state of the parser kernel.
	 *                  can, for example, be used to pass to the `collect_expected_token_set()`
	 *                  API to obtain the expected token set)
	 *    action:      (integer; represents the current internal action which will be executed)
	 *    new_state:   (integer; represents the next/planned internal state, once the current
	 *                  action has executed)
	 *    recoverable: (boolean: TRUE when the parser MAY have an error recovery rule
	 *                  available for this particular error)
	 *    state_stack: (array: the current parser LALR/LR internal state stack; this can be used,
	 *                  for instance, for advanced error analysis and reporting)
	 *    value_stack: (array: the current parser LALR/LR internal `$$` value stack; this can be used,
	 *                  for instance, for advanced error analysis and reporting)
	 *    location_stack: (array: the current parser LALR/LR internal location stack; this can be used,
	 *                  for instance, for advanced error analysis and reporting)
	 *    yy:          (object: the current parser internal "shared state" `yy`
	 *                  as is also available in the rule actions; this can be used,
	 *                  for instance, for advanced error analysis and reporting)
	 *    lexer:       (reference to the current lexer instance used by the parser)
	 *    parser:      (reference to the current parser instance)
	 *  }
	 *
	 * while `this` will reference the current parser instance.
	 *
	 * When `parseError` is invoked by the lexer, `this` will still reference the related *parser*
	 * instance, while these additional `hash` fields will also be provided:
	 *
	 *  {
	 *    lexer:       (reference to the current lexer instance which reported the error)
	 *  }
	 *
	 * When `parseError` is invoked by the parser due to a **JavaScript exception** being fired
	 * from either the parser or lexer, `this` will still reference the related *parser*
	 * instance, while these additional `hash` fields will also be provided:
	 *
	 *  {
	 *    exception:   (reference to the exception thrown)
	 *  }
	 *
	 * Please do note that in the latter situation, the `expected` field will be omitted as
	 * this type of failure is assumed not to be due to *parse errors* but rather due to user
	 * action code in either parser or lexer failing unexpectedly.
	 *
	 * ---
	 *
	 * You can specify parser options by setting / modifying the `.yy` object of your Parser instance.
	 * These options are available:
	 *
	 * ### options which are global for all parser instances
	 *
	 *  Parser.pre_parse: function(yy)
	 *                 optional: you can specify a pre_parse() function in the chunk following
	 *                 the grammar, i.e. after the last `%%`.
	 *  Parser.post_parse: function(yy, retval, parseInfo) { return retval; }
	 *                 optional: you can specify a post_parse() function in the chunk following
	 *                 the grammar, i.e. after the last `%%`. When it does not return any value,
	 *                 the parser will return the original `retval`.
	 *
	 * ### options which can be set up per parser instance
	 *
	 *  yy: {
	 *      pre_parse:  function(yy)
	 *                 optional: is invoked before the parse cycle starts (and before the first
	 *                 invocation of `lex()`) but immediately after the invocation of
	 *                 `parser.pre_parse()`).
	 *      post_parse: function(yy, retval, parseInfo) { return retval; }
	 *                 optional: is invoked when the parse terminates due to success ('accept')
	 *                 or failure (even when exceptions are thrown).
	 *                 `retval` contains the return value to be produced by `Parser.parse()`;
	 *                 this function can override the return value by returning another.
	 *                 When it does not return any value, the parser will return the original
	 *                 `retval`.
	 *                 This function is invoked immediately before `parser.post_parse()`.
	 *
	 *      parseError: function(str, hash, ExceptionClass)
	 *                 optional: overrides the default `parseError` function.
	 *      quoteName: function(name),
	 *                 optional: overrides the default `quoteName` function.
	 *  }
	 *
	 *  parser.lexer.options: {
	 *      pre_lex:  function()
	 *                 optional: is invoked before the lexer is invoked to produce another token.
	 *                 `this` refers to the Lexer object.
	 *      post_lex: function(token) { return token; }
	 *                 optional: is invoked when the lexer has produced a token `token`;
	 *                 this function can override the returned token value by returning another.
	 *                 When it does not return any (truthy) value, the lexer will return
	 *                 the original `token`.
	 *                 `this` refers to the Lexer object.
	 *
	 *      ranges: boolean
	 *                 optional: `true` ==> token location info will include a .range[] member.
	 *      flex: boolean
	 *                 optional: `true` ==> flex-like lexing behaviour where the rules are tested
	 *                 exhaustively to find the longest match.
	 *      backtrack_lexer: boolean
	 *                 optional: `true` ==> lexer regexes are tested in order and for invoked;
	 *                 the lexer terminates the scan when a token is returned by the action code.
	 *      xregexp: boolean
	 *                 optional: `true` ==> lexer rule regexes are "extended regex format" requiring the
	 *                 `XRegExp` library. When this `%option` has not been specified at compile time, all lexer
	 *                 rule regexes have been written as standard JavaScript RegExp expressions.
	 *  }
	 */

	        
	    
	            var parser = (function () {


	// See also:
	// http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript/#35881508
	// but we keep the prototype.constructor and prototype.name assignment lines too for compatibility
	// with userland code which might access the derived class in a 'classic' way.
	function JisonParserError(msg, hash) {
	    Object.defineProperty(this, 'name', {
	        enumerable: false,
	        writable: false,
	        value: 'JisonParserError'
	    });

	    if (msg == null) msg = '???';

	    Object.defineProperty(this, 'message', {
	        enumerable: false,
	        writable: true,
	        value: msg
	    });

	    this.hash = hash;

	    var stacktrace;
	    if (hash && hash.exception instanceof Error) {
	        var ex2 = hash.exception;
	        this.message = ex2.message || msg;
	        stacktrace = ex2.stack;
	    }
	    if (!stacktrace) {
	        if (Error.hasOwnProperty('captureStackTrace')) {        // V8/Chrome engine
	            Error.captureStackTrace(this, this.constructor);
	        } else {
	            stacktrace = (new Error(msg)).stack;
	        }
	    }
	    if (stacktrace) {
	        Object.defineProperty(this, 'stack', {
	            enumerable: false,
	            writable: false,
	            value: stacktrace
	        });
	    }
	}

	if (typeof Object.setPrototypeOf === 'function') {
	    Object.setPrototypeOf(JisonParserError.prototype, Error.prototype);
	} else {
	    JisonParserError.prototype = Object.create(Error.prototype);
	}
	JisonParserError.prototype.constructor = JisonParserError;
	JisonParserError.prototype.name = 'JisonParserError';




	        // helper: reconstruct the productions[] table
	        function bp(s) {
	            var rv = [];
	            var p = s.pop;
	            var r = s.rule;
	            for (var i = 0, l = p.length; i < l; i++) {
	                rv.push([
	                    p[i],
	                    r[i]
	                ]);
	            }
	            return rv;
	        }
	    


	        // helper: reconstruct the defaultActions[] table
	        function bda(s) {
	            var rv = {};
	            var d = s.idx;
	            var g = s.goto;
	            for (var i = 0, l = d.length; i < l; i++) {
	                var j = d[i];
	                rv[j] = g[i];
	            }
	            return rv;
	        }
	    


	        // helper: reconstruct the 'goto' table
	        function bt(s) {
	            var rv = [];
	            var d = s.len;
	            var y = s.symbol;
	            var t = s.type;
	            var a = s.state;
	            var m = s.mode;
	            var g = s.goto;
	            for (var i = 0, l = d.length; i < l; i++) {
	                var n = d[i];
	                var q = {};
	                for (var j = 0; j < n; j++) {
	                    var z = y.shift();
	                    switch (t.shift()) {
	                    case 2:
	                        q[z] = [
	                            m.shift(),
	                            g.shift()
	                        ];
	                        break;

	                    case 0:
	                        q[z] = a.shift();
	                        break;

	                    default:
	                        // type === 1: accept
	                        q[z] = [
	                            3
	                        ];
	                    }
	                }
	                rv.push(q);
	            }
	            return rv;
	        }
	    


	        // helper: runlength encoding with increment step: code, length: step (default step = 0)
	        // `this` references an array
	        function s(c, l, a) {
	            a = a || 0;
	            for (var i = 0; i < l; i++) {
	                this.push(c);
	                c += a;
	            }
	        }

	        // helper: duplicate sequence from *relative* offset and length.
	        // `this` references an array
	        function c(i, l) {
	            i = this.length - i;
	            for (l += i; i < l; i++) {
	                this.push(this[i]);
	            }
	        }

	        // helper: unpack an array using helpers and data, all passed in an array argument 'a'.
	        function u(a) {
	            var rv = [];
	            for (var i = 0, l = a.length; i < l; i++) {
	                var e = a[i];
	                // Is this entry a helper function?
	                if (typeof e === 'function') {
	                    i++;
	                    e.apply(rv, a[i]);
	                } else {
	                    rv.push(e);
	                }
	            }
	            return rv;
	        }
	    

	var parser = {
	    // Code Generator Information Report
	    // ---------------------------------
	    //
	    // Options:
	    //
	    //   default action mode: ............. ["classic","merge"]
	    //   test-compile action mode: ........ "parser:*,lexer:*"
	    //   try..catch: ...................... true
	    //   default resolve on conflict: ..... true
	    //   on-demand look-ahead: ............ false
	    //   error recovery token skip maximum: 3
	    //   yyerror in parse actions is: ..... NOT recoverable,
	    //   yyerror in lexer actions and other non-fatal lexer are:
	    //   .................................. NOT recoverable,
	    //   debug grammar/output: ............ false
	    //   has partial LR conflict upgrade:   true
	    //   rudimentary token-stack support:   false
	    //   parser table compression mode: ... 2
	    //   export debug tables: ............. false
	    //   export *all* tables: ............. false
	    //   module type: ..................... commonjs
	    //   parser engine type: .............. lalr
	    //   output main() in the module: ..... true
	    //   has user-specified main(): ....... false
	    //   has user-specified require()/import modules for main():
	    //   .................................. false
	    //   number of expected conflicts: .... 0
	    //
	    //
	    // Parser Analysis flags:
	    //
	    //   no significant actions (parser is a language matcher only):
	    //   .................................. false
	    //   uses yyleng: ..................... false
	    //   uses yylineno: ................... false
	    //   uses yytext: ..................... false
	    //   uses yylloc: ..................... false
	    //   uses ParseError API: ............. false
	    //   uses YYERROR: .................... false
	    //   uses YYRECOVERING: ............... false
	    //   uses YYERROK: .................... false
	    //   uses YYCLEARIN: .................. false
	    //   tracks rule values: .............. true
	    //   assigns rule values: ............. true
	    //   uses location tracking: .......... false
	    //   assigns location: ................ false
	    //   uses yystack: .................... false
	    //   uses yysstack: ................... false
	    //   uses yysp: ....................... true
	    //   uses yyrulelength: ............... false
	    //   uses yyMergeLocationInfo API: .... false
	    //   has error recovery: .............. false
	    //   has error reporting: ............. false
	    //
	    // --------- END OF REPORT -----------

	trace: function no_op_trace() { },
	JisonParserError: JisonParserError,
	yy: {},
	options: {
	  type: "lalr",
	  hasPartialLrUpgradeOnConflict: true,
	  errorRecoveryTokenDiscardCount: 3
	},
	symbols_: {
	  "$accept": 0,
	  "$end": 1,
	  "ADD": 3,
	  "ANGLE": 16,
	  "CHS": 22,
	  "COMMA": 14,
	  "CSS_CPROP": 13,
	  "CSS_VAR": 12,
	  "DIV": 6,
	  "EMS": 20,
	  "EOF": 1,
	  "EXS": 21,
	  "FREQ": 18,
	  "LENGTH": 15,
	  "LPAREN": 7,
	  "MUL": 5,
	  "NESTED_CALC": 9,
	  "NUMBER": 11,
	  "PERCENTAGE": 28,
	  "PREFIX": 10,
	  "REMS": 23,
	  "RES": 19,
	  "RPAREN": 8,
	  "SUB": 4,
	  "TIME": 17,
	  "VHS": 24,
	  "VMAXS": 27,
	  "VMINS": 26,
	  "VWS": 25,
	  "css_value": 33,
	  "css_variable": 32,
	  "error": 2,
	  "expression": 29,
	  "math_expression": 30,
	  "value": 31
	},
	terminals_: {
	  1: "EOF",
	  2: "error",
	  3: "ADD",
	  4: "SUB",
	  5: "MUL",
	  6: "DIV",
	  7: "LPAREN",
	  8: "RPAREN",
	  9: "NESTED_CALC",
	  10: "PREFIX",
	  11: "NUMBER",
	  12: "CSS_VAR",
	  13: "CSS_CPROP",
	  14: "COMMA",
	  15: "LENGTH",
	  16: "ANGLE",
	  17: "TIME",
	  18: "FREQ",
	  19: "RES",
	  20: "EMS",
	  21: "EXS",
	  22: "CHS",
	  23: "REMS",
	  24: "VHS",
	  25: "VWS",
	  26: "VMINS",
	  27: "VMAXS",
	  28: "PERCENTAGE"
	},
	TERROR: 2,
	    EOF: 1,

	    // internals: defined here so the object *structure* doesn't get modified by parse() et al,
	    // thus helping JIT compilers like Chrome V8.
	    originalQuoteName: null,
	    originalParseError: null,
	    cleanupAfterParse: null,
	    constructParseErrorInfo: null,
	    yyMergeLocationInfo: null,

	    __reentrant_call_depth: 0,      // INTERNAL USE ONLY
	    __error_infos: [],              // INTERNAL USE ONLY: the set of parseErrorInfo objects created since the last cleanup
	    __error_recovery_infos: [],     // INTERNAL USE ONLY: the set of parseErrorInfo objects created since the last cleanup

	    // APIs which will be set up depending on user action code analysis:
	    //yyRecovering: 0,
	    //yyErrOk: 0,
	    //yyClearIn: 0,

	    // Helper APIs
	    // -----------

	    // Helper function which can be overridden by user code later on: put suitable quotes around
	    // literal IDs in a description string.
	    quoteName: function parser_quoteName(id_str) {
	        return '"' + id_str + '"';
	    },

	    // Return the name of the given symbol (terminal or non-terminal) as a string, when available.
	    //
	    // Return NULL when the symbol is unknown to the parser.
	    getSymbolName: function parser_getSymbolName(symbol) {
	        if (this.terminals_[symbol]) {
	            return this.terminals_[symbol];
	        }

	        // Otherwise... this might refer to a RULE token i.e. a non-terminal: see if we can dig that one up.
	        //
	        // An example of this may be where a rule's action code contains a call like this:
	        //
	        //      parser.getSymbolName(#$)
	        //
	        // to obtain a human-readable name of the current grammar rule.
	        var s = this.symbols_;
	        for (var key in s) {
	            if (s[key] === symbol) {
	                return key;
	            }
	        }
	        return null;
	    },

	    // Return a more-or-less human-readable description of the given symbol, when available,
	    // or the symbol itself, serving as its own 'description' for lack of something better to serve up.
	    //
	    // Return NULL when the symbol is unknown to the parser.
	    describeSymbol: function parser_describeSymbol(symbol) {
	        if (symbol !== this.EOF && this.terminal_descriptions_ && this.terminal_descriptions_[symbol]) {
	            return this.terminal_descriptions_[symbol];
	        }
	        else if (symbol === this.EOF) {
	            return 'end of input';
	        }
	        var id = this.getSymbolName(symbol);
	        if (id) {
	            return this.quoteName(id);
	        }
	        return null;
	    },

	    // Produce a (more or less) human-readable list of expected tokens at the point of failure.
	    //
	    // The produced list may contain token or token set descriptions instead of the tokens
	    // themselves to help turning this output into something that easier to read by humans
	    // unless `do_not_describe` parameter is set, in which case a list of the raw, *numeric*,
	    // expected terminals and nonterminals is produced.
	    //
	    // The returned list (array) will not contain any duplicate entries.
	    collect_expected_token_set: function parser_collect_expected_token_set(state, do_not_describe) {
	        var TERROR = this.TERROR;
	        var tokenset = [];
	        var check = {};
	        // Has this (error?) state been outfitted with a custom expectations description text for human consumption?
	        // If so, use that one instead of the less palatable token set.
	        if (!do_not_describe && this.state_descriptions_ && this.state_descriptions_[state]) {
	            return [
	                this.state_descriptions_[state]
	            ];
	        }
	        for (var p in this.table[state]) {
	            p = +p;
	            if (p !== TERROR) {
	                var d = do_not_describe ? p : this.describeSymbol(p);
	                if (d && !check[d]) {
	                    tokenset.push(d);
	                    check[d] = true;        // Mark this token description as already mentioned to prevent outputting duplicate entries.
	                }
	            }
	        }
	        return tokenset;
	    },
	productions_: bp({
	  pop: u([
	  29,
	  s,
	  [30, 10],
	  31,
	  31,
	  32,
	  32,
	  s,
	  [33, 15]
	]),
	  rule: u([
	  2,
	  s,
	  [3, 5],
	  4,
	  7,
	  s,
	  [1, 4],
	  2,
	  4,
	  6,
	  s,
	  [1, 14],
	  2
	])
	}),
	performAction: function parser__PerformAction(yystate /* action[1] */, yysp, yyvstack) {

	          /* this == yyval */

	          // the JS engine itself can go and remove these statements when `yy` turns out to be unused in any action code!
	          var yy = this.yy;
	          yy.parser;
	          yy.lexer;

	          

	          switch (yystate) {
	case 0:
	    /*! Production::    $accept : expression $end */

	    // default action (generated by JISON mode classic/merge :: 1,VT,VA,-,-,-,-,-,-):
	    this.$ = yyvstack[yysp - 1];
	    // END of default action (generated by JISON mode classic/merge :: 1,VT,VA,-,-,-,-,-,-)
	    break;

	case 1:
	    /*! Production::    expression : math_expression EOF */

	    // default action (generated by JISON mode classic/merge :: 2,VT,VA,-,-,-,-,-,-):
	    this.$ = yyvstack[yysp - 1];
	    // END of default action (generated by JISON mode classic/merge :: 2,VT,VA,-,-,-,-,-,-)
	    
	    
	    return yyvstack[yysp - 1];

	case 2:
	    /*! Production::    math_expression : math_expression ADD math_expression */
	case 3:
	    /*! Production::    math_expression : math_expression SUB math_expression */
	case 4:
	    /*! Production::    math_expression : math_expression MUL math_expression */
	case 5:
	    /*! Production::    math_expression : math_expression DIV math_expression */

	    this.$ = { type: 'MathExpression', operator: yyvstack[yysp - 1], left: yyvstack[yysp - 2], right: yyvstack[yysp] };
	    break;

	case 6:
	    /*! Production::    math_expression : LPAREN math_expression RPAREN */

	    this.$ = yyvstack[yysp - 1];
	    break;

	case 7:
	    /*! Production::    math_expression : NESTED_CALC LPAREN math_expression RPAREN */

	    this.$ = { type: 'Calc', value: yyvstack[yysp - 1] };
	    break;

	case 8:
	    /*! Production::    math_expression : SUB PREFIX SUB NESTED_CALC LPAREN math_expression RPAREN */

	    this.$ = { type: 'Calc', value: yyvstack[yysp - 1], prefix: yyvstack[yysp - 5] };
	    break;

	case 9:
	    /*! Production::    math_expression : css_variable */
	case 10:
	    /*! Production::    math_expression : css_value */
	case 11:
	    /*! Production::    math_expression : value */

	    this.$ = yyvstack[yysp];
	    break;

	case 12:
	    /*! Production::    value : NUMBER */

	    this.$ = { type: 'Value', value: parseFloat(yyvstack[yysp]) };
	    break;

	case 13:
	    /*! Production::    value : SUB NUMBER */

	    this.$ = { type: 'Value', value: parseFloat(yyvstack[yysp]) * -1 };
	    break;

	case 14:
	    /*! Production::    css_variable : CSS_VAR LPAREN CSS_CPROP RPAREN */

	    this.$ = { type: 'CssVariable', value: yyvstack[yysp - 1] };
	    break;

	case 15:
	    /*! Production::    css_variable : CSS_VAR LPAREN CSS_CPROP COMMA math_expression RPAREN */

	    this.$ = { type: 'CssVariable', value: yyvstack[yysp - 3], fallback: yyvstack[yysp - 1] };
	    break;

	case 16:
	    /*! Production::    css_value : LENGTH */

	    this.$ = { type: 'LengthValue', value: parseFloat(yyvstack[yysp]), unit: /[a-z]+/.exec(yyvstack[yysp])[0] };
	    break;

	case 17:
	    /*! Production::    css_value : ANGLE */

	    this.$ = { type: 'AngleValue', value: parseFloat(yyvstack[yysp]), unit: /[a-z]+/.exec(yyvstack[yysp])[0] };
	    break;

	case 18:
	    /*! Production::    css_value : TIME */

	    this.$ = { type: 'TimeValue', value: parseFloat(yyvstack[yysp]), unit: /[a-z]+/.exec(yyvstack[yysp])[0] };
	    break;

	case 19:
	    /*! Production::    css_value : FREQ */

	    this.$ = { type: 'FrequencyValue', value: parseFloat(yyvstack[yysp]), unit: /[a-z]+/.exec(yyvstack[yysp])[0] };
	    break;

	case 20:
	    /*! Production::    css_value : RES */

	    this.$ = { type: 'ResolutionValue', value: parseFloat(yyvstack[yysp]), unit: /[a-z]+/.exec(yyvstack[yysp])[0] };
	    break;

	case 21:
	    /*! Production::    css_value : EMS */

	    this.$ = { type: 'EmValue', value: parseFloat(yyvstack[yysp]), unit: 'em' };
	    break;

	case 22:
	    /*! Production::    css_value : EXS */

	    this.$ = { type: 'ExValue', value: parseFloat(yyvstack[yysp]), unit: 'ex' };
	    break;

	case 23:
	    /*! Production::    css_value : CHS */

	    this.$ = { type: 'ChValue', value: parseFloat(yyvstack[yysp]), unit: 'ch' };
	    break;

	case 24:
	    /*! Production::    css_value : REMS */

	    this.$ = { type: 'RemValue', value: parseFloat(yyvstack[yysp]), unit: 'rem' };
	    break;

	case 25:
	    /*! Production::    css_value : VHS */

	    this.$ = { type: 'VhValue', value: parseFloat(yyvstack[yysp]), unit: 'vh' };
	    break;

	case 26:
	    /*! Production::    css_value : VWS */

	    this.$ = { type: 'VwValue', value: parseFloat(yyvstack[yysp]), unit: 'vw' };
	    break;

	case 27:
	    /*! Production::    css_value : VMINS */

	    this.$ = { type: 'VminValue', value: parseFloat(yyvstack[yysp]), unit: 'vmin' };
	    break;

	case 28:
	    /*! Production::    css_value : VMAXS */

	    this.$ = { type: 'VmaxValue', value: parseFloat(yyvstack[yysp]), unit: 'vmax' };
	    break;

	case 29:
	    /*! Production::    css_value : PERCENTAGE */

	    this.$ = { type: 'PercentageValue', value: parseFloat(yyvstack[yysp]), unit: '%' };
	    break;

	case 30:
	    /*! Production::    css_value : SUB css_value */

	    var prev = yyvstack[yysp]; prev.value *= -1; this.$ = prev;
	    break;

	}
	},
	table: bt({
	  len: u([
	  24,
	  1,
	  5,
	  23,
	  1,
	  18,
	  s,
	  [0, 3],
	  1,
	  s,
	  [0, 16],
	  s,
	  [23, 4],
	  c,
	  [28, 3],
	  0,
	  0,
	  16,
	  1,
	  6,
	  6,
	  s,
	  [0, 3],
	  5,
	  1,
	  2,
	  c,
	  [37, 3],
	  c,
	  [20, 3],
	  5,
	  0,
	  0
	]),
	  symbol: u([
	  4,
	  7,
	  9,
	  11,
	  12,
	  s,
	  [15, 19, 1],
	  1,
	  1,
	  s,
	  [3, 4, 1],
	  c,
	  [30, 19],
	  c,
	  [29, 4],
	  7,
	  4,
	  10,
	  11,
	  c,
	  [22, 14],
	  c,
	  [19, 3],
	  c,
	  [43, 22],
	  c,
	  [23, 69],
	  c,
	  [139, 4],
	  8,
	  c,
	  [51, 24],
	  4,
	  c,
	  [138, 15],
	  13,
	  c,
	  [186, 5],
	  8,
	  c,
	  [6, 6],
	  c,
	  [5, 5],
	  9,
	  8,
	  14,
	  c,
	  [159, 47],
	  c,
	  [60, 10]
	]),
	  type: u([
	  s,
	  [2, 19],
	  s,
	  [0, 5],
	  1,
	  s,
	  [2, 24],
	  s,
	  [0, 4],
	  c,
	  [22, 19],
	  c,
	  [43, 42],
	  c,
	  [23, 70],
	  c,
	  [28, 25],
	  c,
	  [45, 25],
	  c,
	  [113, 54]
	]),
	  state: u([
	  1,
	  2,
	  8,
	  6,
	  7,
	  30,
	  c,
	  [4, 3],
	  33,
	  37,
	  c,
	  [5, 3],
	  38,
	  c,
	  [4, 3],
	  39,
	  c,
	  [4, 3],
	  40,
	  c,
	  [4, 3],
	  42,
	  c,
	  [21, 4],
	  50,
	  c,
	  [5, 3],
	  51,
	  c,
	  [4, 3]
	]),
	  mode: u([
	  s,
	  [1, 179],
	  s,
	  [2, 3],
	  c,
	  [5, 5],
	  c,
	  [6, 4],
	  s,
	  [1, 57]
	]),
	  goto: u([
	  5,
	  3,
	  4,
	  24,
	  s,
	  [9, 15, 1],
	  s,
	  [25, 5, 1],
	  c,
	  [24, 19],
	  31,
	  35,
	  32,
	  34,
	  c,
	  [18, 14],
	  36,
	  c,
	  [38, 19],
	  c,
	  [19, 57],
	  c,
	  [118, 4],
	  41,
	  c,
	  [24, 19],
	  43,
	  35,
	  c,
	  [16, 14],
	  44,
	  s,
	  [2, 3],
	  28,
	  29,
	  2,
	  s,
	  [3, 3],
	  28,
	  29,
	  3,
	  c,
	  [53, 4],
	  s,
	  [45, 5, 1],
	  c,
	  [100, 42],
	  52,
	  c,
	  [5, 4],
	  53
	])
	}),
	defaultActions: bda({
	  idx: u([
	  6,
	  7,
	  8,
	  s,
	  [10, 16, 1],
	  33,
	  34,
	  39,
	  40,
	  41,
	  45,
	  47,
	  52,
	  53
	]),
	  goto: u([
	  9,
	  10,
	  11,
	  s,
	  [16, 14, 1],
	  12,
	  1,
	  30,
	  13,
	  s,
	  [4, 4, 1],
	  14,
	  15,
	  8
	])
	}),
	parseError: function parseError(str, hash, ExceptionClass) {
	    if (hash.recoverable) {
	        if (typeof this.trace === 'function') {
	            this.trace(str);
	        }
	        hash.destroy();             // destroy... well, *almost*!
	    } else {
	        if (typeof this.trace === 'function') {
	            this.trace(str);
	        }
	        if (!ExceptionClass) {
	            ExceptionClass = this.JisonParserError;
	        }
	        throw new ExceptionClass(str, hash);
	    }
	},
	parse: function parse(input) {
	    var self = this;
	    var stack = new Array(128);         // token stack: stores token which leads to state at the same index (column storage)
	    var sstack = new Array(128);        // state stack: stores states (column storage)

	    var vstack = new Array(128);        // semantic value stack

	    var table = this.table;
	    var sp = 0;                         // 'stack pointer': index into the stacks


	    


	    var symbol = 0;



	    this.TERROR;
	    var EOF = this.EOF;
	    (this.options.errorRecoveryTokenDiscardCount | 0) || 3;
	    var NO_ACTION = [0, 54 /* === table.length :: ensures that anyone using this new state will fail dramatically! */];

	    var lexer;
	    if (this.__lexer__) {
	        lexer = this.__lexer__;
	    } else {
	        lexer = this.__lexer__ = Object.create(this.lexer);
	    }

	    var sharedState_yy = {
	        parseError: undefined,
	        quoteName: undefined,
	        lexer: undefined,
	        parser: undefined,
	        pre_parse: undefined,
	        post_parse: undefined,
	        pre_lex: undefined,
	        post_lex: undefined      // WARNING: must be written this way for the code expanders to work correctly in both ES5 and ES6 modes!
	    };
	    if (typeof assert !== 'function') ; else {
	        assert;
	    }

	    this.yyGetSharedState = function yyGetSharedState() {
	        return sharedState_yy;
	    };








	    function shallow_copy_noclobber(dst, src) {
	        for (var k in src) {
	            if (typeof dst[k] === 'undefined' && Object.prototype.hasOwnProperty.call(src, k)) {
	                dst[k] = src[k];
	            }
	        }
	    }

	    // copy state
	    shallow_copy_noclobber(sharedState_yy, this.yy);

	    sharedState_yy.lexer = lexer;
	    sharedState_yy.parser = this;






	    // Does the shared state override the default `parseError` that already comes with this instance?
	    if (typeof sharedState_yy.parseError === 'function') {
	        this.parseError = function parseErrorAlt(str, hash, ExceptionClass) {
	            if (!ExceptionClass) {
	                ExceptionClass = this.JisonParserError;
	            }
	            return sharedState_yy.parseError.call(this, str, hash, ExceptionClass);
	        };
	    } else {
	        this.parseError = this.originalParseError;
	    }

	    // Does the shared state override the default `quoteName` that already comes with this instance?
	    if (typeof sharedState_yy.quoteName === 'function') {
	        this.quoteName = function quoteNameAlt(id_str) {
	            return sharedState_yy.quoteName.call(this, id_str);
	        };
	    } else {
	        this.quoteName = this.originalQuoteName;
	    }

	    // set up the cleanup function; make it an API so that external code can re-use this one in case of
	    // calamities or when the `%options no-try-catch` option has been specified for the grammar, in which
	    // case this parse() API method doesn't come with a `finally { ... }` block any more!
	    //
	    // NOTE: as this API uses parse() as a closure, it MUST be set again on every parse() invocation,
	    //       or else your `sharedState`, etc. references will be *wrong*!
	    this.cleanupAfterParse = function parser_cleanupAfterParse(resultValue, invoke_post_methods, do_not_nuke_errorinfos) {
	        var rv;

	        if (invoke_post_methods) {
	            var hash;

	            if (sharedState_yy.post_parse || this.post_parse) {
	                // create an error hash info instance: we re-use this API in a **non-error situation**
	                // as this one delivers all parser internals ready for access by userland code.
	                hash = this.constructParseErrorInfo(null /* no error! */, null /* no exception! */, null, false);
	            }

	            if (sharedState_yy.post_parse) {
	                rv = sharedState_yy.post_parse.call(this, sharedState_yy, resultValue, hash);
	                if (typeof rv !== 'undefined') resultValue = rv;
	            }
	            if (this.post_parse) {
	                rv = this.post_parse.call(this, sharedState_yy, resultValue, hash);
	                if (typeof rv !== 'undefined') resultValue = rv;
	            }

	            // cleanup:
	            if (hash && hash.destroy) {
	                hash.destroy();
	            }
	        }

	        if (this.__reentrant_call_depth > 1) return resultValue;        // do not (yet) kill the sharedState when this is a reentrant run.

	        // clean up the lingering lexer structures as well:
	        if (lexer.cleanupAfterLex) {
	            lexer.cleanupAfterLex(do_not_nuke_errorinfos);
	        }

	        // prevent lingering circular references from causing memory leaks:
	        if (sharedState_yy) {
	            sharedState_yy.lexer = undefined;
	            sharedState_yy.parser = undefined;
	            if (lexer.yy === sharedState_yy) {
	                lexer.yy = undefined;
	            }
	        }
	        sharedState_yy = undefined;
	        this.parseError = this.originalParseError;
	        this.quoteName = this.originalQuoteName;

	        // nuke the vstack[] array at least as that one will still reference obsoleted user values.
	        // To be safe, we nuke the other internal stack columns as well...
	        stack.length = 0;               // fastest way to nuke an array without overly bothering the GC
	        sstack.length = 0;

	        vstack.length = 0;
	        sp = 0;

	        // nuke the error hash info instances created during this run.
	        // Userland code must COPY any data/references
	        // in the error hash instance(s) it is more permanently interested in.
	        if (!do_not_nuke_errorinfos) {
	            for (var i = this.__error_infos.length - 1; i >= 0; i--) {
	                var el = this.__error_infos[i];
	                if (el && typeof el.destroy === 'function') {
	                    el.destroy();
	                }
	            }
	            this.__error_infos.length = 0;


	        }

	        return resultValue;
	    };






































































































































	    // NOTE: as this API uses parse() as a closure, it MUST be set again on every parse() invocation,
	    //       or else your `lexer`, `sharedState`, etc. references will be *wrong*!
	    this.constructParseErrorInfo = function parser_constructParseErrorInfo(msg, ex, expected, recoverable) {
	        var pei = {
	            errStr: msg,
	            exception: ex,
	            text: lexer.match,
	            value: lexer.yytext,
	            token: this.describeSymbol(symbol) || symbol,
	            token_id: symbol,
	            line: lexer.yylineno,

	            expected: expected,
	            recoverable: recoverable,
	            state: state,
	            action: action,
	            new_state: newState,
	            symbol_stack: stack,
	            state_stack: sstack,
	            value_stack: vstack,

	            stack_pointer: sp,
	            yy: sharedState_yy,
	            lexer: lexer,
	            parser: this,

	            // and make sure the error info doesn't stay due to potential
	            // ref cycle via userland code manipulations.
	            // These would otherwise all be memory leak opportunities!
	            //
	            // Note that only array and object references are nuked as those
	            // constitute the set of elements which can produce a cyclic ref.
	            // The rest of the members is kept intact as they are harmless.
	            destroy: function destructParseErrorInfo() {
	                // remove cyclic references added to error info:
	                // info.yy = null;
	                // info.lexer = null;
	                // info.value = null;
	                // info.value_stack = null;
	                // ...
	                var rec = !!this.recoverable;
	                for (var key in this) {
	                    if (this.hasOwnProperty(key) && typeof key === 'object') {
	                        this[key] = undefined;
	                    }
	                }
	                this.recoverable = rec;
	            }
	        };
	        // track this instance so we can `destroy()` it once we deem it superfluous and ready for garbage collection!
	        this.__error_infos.push(pei);
	        return pei;
	    };


	    function stdLex() {
	        var token = lexer.lex();
	        // if token isn't its numeric value, convert
	        if (typeof token !== 'number') {
	            token = self.symbols_[token] || token;
	        }

	        return token || EOF;
	    }

	    function fastLex() {
	        var token = lexer.fastLex();
	        // if token isn't its numeric value, convert
	        if (typeof token !== 'number') {
	            token = self.symbols_[token] || token;
	        }

	        return token || EOF;
	    }

	    var lex = stdLex;


	    var state, action, r, t;
	    var yyval = {
	        $: true,
	        _$: undefined,
	        yy: sharedState_yy
	    };
	    var p;
	    var yyrulelen;
	    var this_production;
	    var newState;
	    var retval = false;


	    try {
	        this.__reentrant_call_depth++;

	        lexer.setInput(input, sharedState_yy);

	        // NOTE: we *assume* no lexer pre/post handlers are set up *after* 
	        // this initial `setInput()` call: hence we can now check and decide
	        // whether we'll go with the standard, slower, lex() API or the
	        // `fast_lex()` one:
	        if (typeof lexer.canIUse === 'function') {
	            var lexerInfo = lexer.canIUse();
	            if (lexerInfo.fastLex && typeof fastLex === 'function') {
	                lex = fastLex;
	            }
	        } 



	        vstack[sp] = null;
	        sstack[sp] = 0;
	        stack[sp] = 0;
	        ++sp;





	        if (this.pre_parse) {
	            this.pre_parse.call(this, sharedState_yy);
	        }
	        if (sharedState_yy.pre_parse) {
	            sharedState_yy.pre_parse.call(this, sharedState_yy);
	        }

	        newState = sstack[sp - 1];
	        for (;;) {
	            // retrieve state number from top of stack
	            state = newState;               // sstack[sp - 1];

	            // use default actions if available
	            if (this.defaultActions[state]) {
	                action = 2;
	                newState = this.defaultActions[state];
	            } else {
	                // The single `==` condition below covers both these `===` comparisons in a single
	                // operation:
	                //
	                //     if (symbol === null || typeof symbol === 'undefined') ...
	                if (!symbol) {
	                    symbol = lex();
	                }
	                // read action for current state and first input
	                t = (table[state] && table[state][symbol]) || NO_ACTION;
	                newState = t[1];
	                action = t[0];











	                // handle parse error
	                if (!action) {
	                    var errStr;
	                    var errSymbolDescr = (this.describeSymbol(symbol) || symbol);
	                    var expected = this.collect_expected_token_set(state);

	                    // Report error
	                    if (typeof lexer.yylineno === 'number') {
	                        errStr = 'Parse error on line ' + (lexer.yylineno + 1) + ': ';
	                    } else {
	                        errStr = 'Parse error: ';
	                    }
	                    if (typeof lexer.showPosition === 'function') {
	                        errStr += '\n' + lexer.showPosition(79 - 10, 10) + '\n';
	                    }
	                    if (expected.length) {
	                        errStr += 'Expecting ' + expected.join(', ') + ', got unexpected ' + errSymbolDescr;
	                    } else {
	                        errStr += 'Unexpected ' + errSymbolDescr;
	                    }
	                    // we cannot recover from the error!
	                    p = this.constructParseErrorInfo(errStr, null, expected, false);
	                    r = this.parseError(p.errStr, p, this.JisonParserError);
	                    if (typeof r !== 'undefined') {
	                        retval = r;
	                    }
	                    break;
	                }


	            }










	            switch (action) {
	            // catch misc. parse failures:
	            default:
	                // this shouldn't happen, unless resolve defaults are off
	                if (action instanceof Array) {
	                    p = this.constructParseErrorInfo('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol, null, null, false);
	                    r = this.parseError(p.errStr, p, this.JisonParserError);
	                    if (typeof r !== 'undefined') {
	                        retval = r;
	                    }
	                    break;
	                }
	                // Another case of better safe than sorry: in case state transitions come out of another error recovery process
	                // or a buggy LUT (LookUp Table):
	                p = this.constructParseErrorInfo('Parsing halted. No viable error recovery approach available due to internal system failure.', null, null, false);
	                r = this.parseError(p.errStr, p, this.JisonParserError);
	                if (typeof r !== 'undefined') {
	                    retval = r;
	                }
	                break;

	            // shift:
	            case 1:
	                stack[sp] = symbol;
	                vstack[sp] = lexer.yytext;

	                sstack[sp] = newState; // push state

	                ++sp;
	                symbol = 0;




	                // Pick up the lexer details for the current symbol as that one is not 'look-ahead' any more:




	                continue;

	            // reduce:
	            case 2:



	                this_production = this.productions_[newState - 1];  // `this.productions_[]` is zero-based indexed while states start from 1 upwards...
	                yyrulelen = this_production[1];










	                r = this.performAction.call(yyval, newState, sp - 1, vstack);

	                if (typeof r !== 'undefined') {
	                    retval = r;
	                    break;
	                }

	                // pop off stack
	                sp -= yyrulelen;

	                // don't overwrite the `symbol` variable: use a local var to speed things up:
	                var ntsymbol = this_production[0];    // push nonterminal (reduce)
	                stack[sp] = ntsymbol;
	                vstack[sp] = yyval.$;

	                // goto new state = table[STATE][NONTERMINAL]
	                newState = table[sstack[sp - 1]][ntsymbol];
	                sstack[sp] = newState;
	                ++sp;









	                continue;

	            // accept:
	            case 3:
	                if (sp !== -2) {
	                    retval = true;
	                    // Return the `$accept` rule's `$$` result, if available.
	                    //
	                    // Also note that JISON always adds this top-most `$accept` rule (with implicit,
	                    // default, action):
	                    //
	                    //     $accept: <startSymbol> $end
	                    //                  %{ $$ = $1; @$ = @1; %}
	                    //
	                    // which, combined with the parse kernel's `$accept` state behaviour coded below,
	                    // will produce the `$$` value output of the <startSymbol> rule as the parse result,
	                    // IFF that result is *not* `undefined`. (See also the parser kernel code.)
	                    //
	                    // In code:
	                    //
	                    //                  %{
	                    //                      @$ = @1;            // if location tracking support is included
	                    //                      if (typeof $1 !== 'undefined')
	                    //                          return $1;
	                    //                      else
	                    //                          return true;           // the default parse result if the rule actions don't produce anything
	                    //                  %}
	                    sp--;
	                    if (typeof vstack[sp] !== 'undefined') {
	                        retval = vstack[sp];
	                    }
	                }
	                break;
	            }

	            // break out of loop: we accept or fail with error
	            break;
	        }
	    } catch (ex) {
	        // report exceptions through the parseError callback too, but keep the exception intact
	        // if it is a known parser or lexer error which has been thrown by parseError() already:
	        if (ex instanceof this.JisonParserError) {
	            throw ex;
	        }
	        else if (lexer && typeof lexer.JisonLexerError === 'function' && ex instanceof lexer.JisonLexerError) {
	            throw ex;
	        }

	        p = this.constructParseErrorInfo('Parsing aborted due to exception.', ex, null, false);
	        retval = false;
	        r = this.parseError(p.errStr, p, this.JisonParserError);
	        if (typeof r !== 'undefined') {
	            retval = r;
	        }
	    } finally {
	        retval = this.cleanupAfterParse(retval, true, true);
	        this.__reentrant_call_depth--;
	    }   // /finally

	    return retval;
	}
	};
	parser.originalParseError = parser.parseError;
	parser.originalQuoteName = parser.quoteName;
	/* lexer generated by jison-lex 0.6.1-215 */

	/*
	 * Returns a Lexer object of the following structure:
	 *
	 *  Lexer: {
	 *    yy: {}     The so-called "shared state" or rather the *source* of it;
	 *               the real "shared state" `yy` passed around to
	 *               the rule actions, etc. is a direct reference!
	 *
	 *               This "shared context" object was passed to the lexer by way of 
	 *               the `lexer.setInput(str, yy)` API before you may use it.
	 *
	 *               This "shared context" object is passed to the lexer action code in `performAction()`
	 *               so userland code in the lexer actions may communicate with the outside world 
	 *               and/or other lexer rules' actions in more or less complex ways.
	 *
	 *  }
	 *
	 *  Lexer.prototype: {
	 *    EOF: 1,
	 *    ERROR: 2,
	 *
	 *    yy:        The overall "shared context" object reference.
	 *
	 *    JisonLexerError: function(msg, hash),
	 *
	 *    performAction: function lexer__performAction(yy, yyrulenumber, YY_START),
	 *
	 *               The function parameters and `this` have the following value/meaning:
	 *               - `this`    : reference to the `lexer` instance. 
	 *                               `yy_` is an alias for `this` lexer instance reference used internally.
	 *
	 *               - `yy`      : a reference to the `yy` "shared state" object which was passed to the lexer
	 *                             by way of the `lexer.setInput(str, yy)` API before.
	 *
	 *                             Note:
	 *                             The extra arguments you specified in the `%parse-param` statement in your
	 *                             **parser** grammar definition file are passed to the lexer via this object
	 *                             reference as member variables.
	 *
	 *               - `yyrulenumber`   : index of the matched lexer rule (regex), used internally.
	 *
	 *               - `YY_START`: the current lexer "start condition" state.
	 *
	 *    parseError: function(str, hash, ExceptionClass),
	 *
	 *    constructLexErrorInfo: function(error_message, is_recoverable),
	 *               Helper function.
	 *               Produces a new errorInfo 'hash object' which can be passed into `parseError()`.
	 *               See it's use in this lexer kernel in many places; example usage:
	 *
	 *                   var infoObj = lexer.constructParseErrorInfo('fail!', true);
	 *                   var retVal = lexer.parseError(infoObj.errStr, infoObj, lexer.JisonLexerError);
	 *
	 *    options: { ... lexer %options ... },
	 *
	 *    lex: function(),
	 *               Produce one token of lexed input, which was passed in earlier via the `lexer.setInput()` API.
	 *               You MAY use the additional `args...` parameters as per `%parse-param` spec of the **lexer** grammar:
	 *               these extra `args...` are added verbatim to the `yy` object reference as member variables.
	 *
	 *               WARNING:
	 *               Lexer's additional `args...` parameters (via lexer's `%parse-param`) MAY conflict with
	 *               any attributes already added to `yy` by the **parser** or the jison run-time; 
	 *               when such a collision is detected an exception is thrown to prevent the generated run-time 
	 *               from silently accepting this confusing and potentially hazardous situation! 
	 *
	 *    cleanupAfterLex: function(do_not_nuke_errorinfos),
	 *               Helper function.
	 *
	 *               This helper API is invoked when the **parse process** has completed: it is the responsibility
	 *               of the **parser** (or the calling userland code) to invoke this method once cleanup is desired. 
	 *
	 *               This helper may be invoked by user code to ensure the internal lexer gets properly garbage collected.
	 *
	 *    setInput: function(input, [yy]),
	 *
	 *
	 *    input: function(),
	 *
	 *
	 *    unput: function(str),
	 *
	 *
	 *    more: function(),
	 *
	 *
	 *    reject: function(),
	 *
	 *
	 *    less: function(n),
	 *
	 *
	 *    pastInput: function(n),
	 *
	 *
	 *    upcomingInput: function(n),
	 *
	 *
	 *    showPosition: function(),
	 *
	 *
	 *    test_match: function(regex_match_array, rule_index),
	 *
	 *
	 *    next: function(),
	 *
	 *
	 *    begin: function(condition),
	 *
	 *
	 *    pushState: function(condition),
	 *
	 *
	 *    popState: function(),
	 *
	 *
	 *    topState: function(),
	 *
	 *
	 *    _currentRules: function(),
	 *
	 *
	 *    stateStackSize: function(),
	 *
	 *
	 *    performAction: function(yy, yy_, yyrulenumber, YY_START),
	 *
	 *
	 *    rules: [...],
	 *
	 *
	 *    conditions: {associative list: name ==> set},
	 *  }
	 *
	 *
	 *  token location info (`yylloc`): {
	 *    first_line: n,
	 *    last_line: n,
	 *    first_column: n,
	 *    last_column: n,
	 *    range: [start_number, end_number]
	 *               (where the numbers are indexes into the input string, zero-based)
	 *  }
	 *
	 * ---
	 *
	 * The `parseError` function receives a 'hash' object with these members for lexer errors:
	 *
	 *  {
	 *    text:        (matched text)
	 *    token:       (the produced terminal token, if any)
	 *    token_id:    (the produced terminal token numeric ID, if any)
	 *    line:        (yylineno)
	 *    loc:         (yylloc)
	 *    recoverable: (boolean: TRUE when the parser MAY have an error recovery rule
	 *                  available for this particular error)
	 *    yy:          (object: the current parser internal "shared state" `yy`
	 *                  as is also available in the rule actions; this can be used,
	 *                  for instance, for advanced error analysis and reporting)
	 *    lexer:       (reference to the current lexer instance used by the parser)
	 *  }
	 *
	 * while `this` will reference the current lexer instance.
	 *
	 * When `parseError` is invoked by the lexer, the default implementation will
	 * attempt to invoke `yy.parser.parseError()`; when this callback is not provided
	 * it will try to invoke `yy.parseError()` instead. When that callback is also not
	 * provided, a `JisonLexerError` exception will be thrown containing the error
	 * message and `hash`, as constructed by the `constructLexErrorInfo()` API.
	 *
	 * Note that the lexer's `JisonLexerError` error class is passed via the
	 * `ExceptionClass` argument, which is invoked to construct the exception
	 * instance to be thrown, so technically `parseError` will throw the object
	 * produced by the `new ExceptionClass(str, hash)` JavaScript expression.
	 *
	 * ---
	 *
	 * You can specify lexer options by setting / modifying the `.options` object of your Lexer instance.
	 * These options are available:
	 *
	 * (Options are permanent.)
	 *  
	 *  yy: {
	 *      parseError: function(str, hash, ExceptionClass)
	 *                 optional: overrides the default `parseError` function.
	 *  }
	 *
	 *  lexer.options: {
	 *      pre_lex:  function()
	 *                 optional: is invoked before the lexer is invoked to produce another token.
	 *                 `this` refers to the Lexer object.
	 *      post_lex: function(token) { return token; }
	 *                 optional: is invoked when the lexer has produced a token `token`;
	 *                 this function can override the returned token value by returning another.
	 *                 When it does not return any (truthy) value, the lexer will return
	 *                 the original `token`.
	 *                 `this` refers to the Lexer object.
	 *
	 * WARNING: the next set of options are not meant to be changed. They echo the abilities of
	 * the lexer as per when it was compiled!
	 *
	 *      ranges: boolean
	 *                 optional: `true` ==> token location info will include a .range[] member.
	 *      flex: boolean
	 *                 optional: `true` ==> flex-like lexing behaviour where the rules are tested
	 *                 exhaustively to find the longest match.
	 *      backtrack_lexer: boolean
	 *                 optional: `true` ==> lexer regexes are tested in order and for invoked;
	 *                 the lexer terminates the scan when a token is returned by the action code.
	 *      xregexp: boolean
	 *                 optional: `true` ==> lexer rule regexes are "extended regex format" requiring the
	 *                 `XRegExp` library. When this %option has not been specified at compile time, all lexer
	 *                 rule regexes have been written as standard JavaScript RegExp expressions.
	 *  }
	 */


	var lexer = function() {
	  /**
	   * See also:
	   * http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript/#35881508
	   * but we keep the prototype.constructor and prototype.name assignment lines too for compatibility
	   * with userland code which might access the derived class in a 'classic' way.
	   *
	   * @public
	   * @constructor
	   * @nocollapse
	   */
	  function JisonLexerError(msg, hash) {
	    Object.defineProperty(this, 'name', {
	      enumerable: false,
	      writable: false,
	      value: 'JisonLexerError'
	    });

	    if (msg == null)
	      msg = '???';

	    Object.defineProperty(this, 'message', {
	      enumerable: false,
	      writable: true,
	      value: msg
	    });

	    this.hash = hash;
	    var stacktrace;

	    if (hash && hash.exception instanceof Error) {
	      var ex2 = hash.exception;
	      this.message = ex2.message || msg;
	      stacktrace = ex2.stack;
	    }

	    if (!stacktrace) {
	      if (Error.hasOwnProperty('captureStackTrace')) {
	        // V8
	        Error.captureStackTrace(this, this.constructor);
	      } else {
	        stacktrace = new Error(msg).stack;
	      }
	    }

	    if (stacktrace) {
	      Object.defineProperty(this, 'stack', {
	        enumerable: false,
	        writable: false,
	        value: stacktrace
	      });
	    }
	  }

	  if (typeof Object.setPrototypeOf === 'function') {
	    Object.setPrototypeOf(JisonLexerError.prototype, Error.prototype);
	  } else {
	    JisonLexerError.prototype = Object.create(Error.prototype);
	  }

	  JisonLexerError.prototype.constructor = JisonLexerError;
	  JisonLexerError.prototype.name = 'JisonLexerError';

	  var lexer = {
	    
	// Code Generator Information Report
	// ---------------------------------
	//
	// Options:
	//
	//   backtracking: .................... false
	//   location.ranges: ................. false
	//   location line+column tracking: ... true
	//
	//
	// Forwarded Parser Analysis flags:
	//
	//   uses yyleng: ..................... false
	//   uses yylineno: ................... false
	//   uses yytext: ..................... false
	//   uses yylloc: ..................... false
	//   uses lexer values: ............... true / true
	//   location tracking: ............... false
	//   location assignment: ............. false
	//
	//
	// Lexer Analysis flags:
	//
	//   uses yyleng: ..................... ???
	//   uses yylineno: ................... ???
	//   uses yytext: ..................... ???
	//   uses yylloc: ..................... ???
	//   uses ParseError API: ............. ???
	//   uses yyerror: .................... ???
	//   uses location tracking & editing:  ???
	//   uses more() API: ................. ???
	//   uses unput() API: ................ ???
	//   uses reject() API: ............... ???
	//   uses less() API: ................. ???
	//   uses display APIs pastInput(), upcomingInput(), showPosition():
	//        ............................. ???
	//   uses describeYYLLOC() API: ....... ???
	//
	// --------- END OF REPORT -----------

	EOF: 1,
	    ERROR: 2,

	    // JisonLexerError: JisonLexerError,        /// <-- injected by the code generator

	    // options: {},                             /// <-- injected by the code generator

	    // yy: ...,                                 /// <-- injected by setInput()

	    __currentRuleSet__: null,                   /// INTERNAL USE ONLY: internal rule set cache for the current lexer state  

	    __error_infos: [],                          /// INTERNAL USE ONLY: the set of lexErrorInfo objects created since the last cleanup  
	    __decompressed: false,                      /// INTERNAL USE ONLY: mark whether the lexer instance has been 'unfolded' completely and is now ready for use  
	    done: false,                                /// INTERNAL USE ONLY  
	    _backtrack: false,                          /// INTERNAL USE ONLY  
	    _input: '',                                 /// INTERNAL USE ONLY  
	    _more: false,                               /// INTERNAL USE ONLY  
	    _signaled_error_token: false,               /// INTERNAL USE ONLY  
	    conditionStack: [],                         /// INTERNAL USE ONLY; managed via `pushState()`, `popState()`, `topState()` and `stateStackSize()`  
	    match: '',                                  /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: tracks input which has been matched so far for the lexer token under construction. `match` is identical to `yytext` except that this one still contains the matched input string after `lexer.performAction()` has been invoked, where userland code MAY have changed/replaced the `yytext` value entirely!  
	    matched: '',                                /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: tracks entire input which has been matched so far  
	    matches: false,                             /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: tracks RE match result for last (successful) match attempt  
	    yytext: '',                                 /// ADVANCED USE ONLY: tracks input which has been matched so far for the lexer token under construction; this value is transferred to the parser as the 'token value' when the parser consumes the lexer token produced through a call to the `lex()` API.  
	    offset: 0,                                  /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: tracks the 'cursor position' in the input string, i.e. the number of characters matched so far  
	    yyleng: 0,                                  /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: length of matched input for the token under construction (`yytext`)  
	    yylineno: 0,                                /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: 'line number' at which the token under construction is located  
	    yylloc: null,                               /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: tracks location info (lines + columns) for the token under construction  

	    /**
	     * INTERNAL USE: construct a suitable error info hash object instance for `parseError`.
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    constructLexErrorInfo: function lexer_constructLexErrorInfo(msg, recoverable, show_input_position) {
	      msg = '' + msg;

	      // heuristic to determine if the error message already contains a (partial) source code dump
	      // as produced by either `showPosition()` or `prettyPrintRange()`:
	      if (show_input_position == undefined) {
	        show_input_position = !(msg.indexOf('\n') > 0 && msg.indexOf('^') > 0);
	      }

	      if (this.yylloc && show_input_position) {
	        if (typeof this.prettyPrintRange === 'function') {
	          this.prettyPrintRange(this.yylloc);

	          if (!/\n\s*$/.test(msg)) {
	            msg += '\n';
	          }

	          msg += '\n  Erroneous area:\n' + this.prettyPrintRange(this.yylloc);
	        } else if (typeof this.showPosition === 'function') {
	          var pos_str = this.showPosition();

	          if (pos_str) {
	            if (msg.length && msg[msg.length - 1] !== '\n' && pos_str[0] !== '\n') {
	              msg += '\n' + pos_str;
	            } else {
	              msg += pos_str;
	            }
	          }
	        }
	      }

	      /** @constructor */
	      var pei = {
	        errStr: msg,
	        recoverable: !!recoverable,
	        text: this.match,           // This one MAY be empty; userland code should use the `upcomingInput` API to obtain more text which follows the 'lexer cursor position'...  
	        token: null,
	        line: this.yylineno,
	        loc: this.yylloc,
	        yy: this.yy,
	        lexer: this,

	        /**
	         * and make sure the error info doesn't stay due to potential
	         * ref cycle via userland code manipulations.
	         * These would otherwise all be memory leak opportunities!
	         * 
	         * Note that only array and object references are nuked as those
	         * constitute the set of elements which can produce a cyclic ref.
	         * The rest of the members is kept intact as they are harmless.
	         * 
	         * @public
	         * @this {LexErrorInfo}
	         */
	        destroy: function destructLexErrorInfo() {
	          // remove cyclic references added to error info:
	          // info.yy = null;
	          // info.lexer = null;
	          // ...
	          var rec = !!this.recoverable;

	          for (var key in this) {
	            if (this.hasOwnProperty(key) && typeof key === 'object') {
	              this[key] = undefined;
	            }
	          }

	          this.recoverable = rec;
	        }
	      };

	      // track this instance so we can `destroy()` it once we deem it superfluous and ready for garbage collection!
	      this.__error_infos.push(pei);

	      return pei;
	    },

	    /**
	     * handler which is invoked when a lexer error occurs.
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    parseError: function lexer_parseError(str, hash, ExceptionClass) {
	      if (!ExceptionClass) {
	        ExceptionClass = this.JisonLexerError;
	      }

	      if (this.yy) {
	        if (this.yy.parser && typeof this.yy.parser.parseError === 'function') {
	          return this.yy.parser.parseError.call(this, str, hash, ExceptionClass) || this.ERROR;
	        } else if (typeof this.yy.parseError === 'function') {
	          return this.yy.parseError.call(this, str, hash, ExceptionClass) || this.ERROR;
	        }
	      }

	      throw new ExceptionClass(str, hash);
	    },

	    /**
	     * method which implements `yyerror(str, ...args)` functionality for use inside lexer actions.
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    yyerror: function yyError(str /*, ...args */) {
	      var lineno_msg = '';

	      if (this.yylloc) {
	        lineno_msg = ' on line ' + (this.yylineno + 1);
	      }

	      var p = this.constructLexErrorInfo(
	        'Lexical error' + lineno_msg + ': ' + str,
	        this.options.lexerErrorsAreRecoverable
	      );

	      // Add any extra args to the hash under the name `extra_error_attributes`:
	      var args = Array.prototype.slice.call(arguments, 1);

	      if (args.length) {
	        p.extra_error_attributes = args;
	      }

	      return this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR;
	    },

	    /**
	     * final cleanup function for when we have completed lexing the input;
	     * make it an API so that external code can use this one once userland
	     * code has decided it's time to destroy any lingering lexer error
	     * hash object instances and the like: this function helps to clean
	     * up these constructs, which *may* carry cyclic references which would
	     * otherwise prevent the instances from being properly and timely
	     * garbage-collected, i.e. this function helps prevent memory leaks!
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    cleanupAfterLex: function lexer_cleanupAfterLex(do_not_nuke_errorinfos) {
	      // prevent lingering circular references from causing memory leaks:
	      this.setInput('', {});

	      // nuke the error hash info instances created during this run.
	      // Userland code must COPY any data/references
	      // in the error hash instance(s) it is more permanently interested in.
	      if (!do_not_nuke_errorinfos) {
	        for (var i = this.__error_infos.length - 1; i >= 0; i--) {
	          var el = this.__error_infos[i];

	          if (el && typeof el.destroy === 'function') {
	            el.destroy();
	          }
	        }

	        this.__error_infos.length = 0;
	      }

	      return this;
	    },

	    /**
	     * clear the lexer token context; intended for internal use only
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    clear: function lexer_clear() {
	      this.yytext = '';
	      this.yyleng = 0;
	      this.match = '';

	      // - DO NOT reset `this.matched`
	      this.matches = false;

	      this._more = false;
	      this._backtrack = false;
	      var col = (this.yylloc ? this.yylloc.last_column : 0);

	      this.yylloc = {
	        first_line: this.yylineno + 1,
	        first_column: col,
	        last_line: this.yylineno + 1,
	        last_column: col,
	        range: [this.offset, this.offset]
	      };
	    },

	    /**
	     * resets the lexer, sets new input
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    setInput: function lexer_setInput(input, yy) {
	      this.yy = yy || this.yy || {};

	      // also check if we've fully initialized the lexer instance,
	      // including expansion work to be done to go from a loaded
	      // lexer to a usable lexer:
	      if (!this.__decompressed) {
	        // step 1: decompress the regex list:
	        var rules = this.rules;

	        for (var i = 0, len = rules.length; i < len; i++) {
	          var rule_re = rules[i];

	          // compression: is the RE an xref to another RE slot in the rules[] table?
	          if (typeof rule_re === 'number') {
	            rules[i] = rules[rule_re];
	          }
	        }

	        // step 2: unfold the conditions[] set to make these ready for use:
	        var conditions = this.conditions;

	        for (var k in conditions) {
	          var spec = conditions[k];
	          var rule_ids = spec.rules;
	          var len = rule_ids.length;
	          var rule_regexes = new Array(len + 1);             // slot 0 is unused; we use a 1-based index approach here to keep the hottest code in `lexer_next()` fast and simple! 
	          var rule_new_ids = new Array(len + 1);

	          for (var i = 0; i < len; i++) {
	            var idx = rule_ids[i];
	            var rule_re = rules[idx];
	            rule_regexes[i + 1] = rule_re;
	            rule_new_ids[i + 1] = idx;
	          }

	          spec.rules = rule_new_ids;
	          spec.__rule_regexes = rule_regexes;
	          spec.__rule_count = len;
	        }

	        this.__decompressed = true;
	      }

	      this._input = input || '';
	      this.clear();
	      this._signaled_error_token = false;
	      this.done = false;
	      this.yylineno = 0;
	      this.matched = '';
	      this.conditionStack = ['INITIAL'];
	      this.__currentRuleSet__ = null;

	      this.yylloc = {
	        first_line: 1,
	        first_column: 0,
	        last_line: 1,
	        last_column: 0,
	        range: [0, 0]
	      };

	      this.offset = 0;
	      return this;
	    },

	    /**
	     * edit the remaining input via user-specified callback.
	     * This can be used to forward-adjust the input-to-parse, 
	     * e.g. inserting macro expansions and alike in the
	     * input which has yet to be lexed.
	     * The behaviour of this API contrasts the `unput()` et al
	     * APIs as those act on the *consumed* input, while this
	     * one allows one to manipulate the future, without impacting
	     * the current `yyloc` cursor location or any history. 
	     * 
	     * Use this API to help implement C-preprocessor-like
	     * `#include` statements, etc.
	     * 
	     * The provided callback must be synchronous and is
	     * expected to return the edited input (string).
	     *
	     * The `cpsArg` argument value is passed to the callback
	     * as-is.
	     *
	     * `callback` interface: 
	     * `function callback(input, cpsArg)`
	     * 
	     * - `input` will carry the remaining-input-to-lex string
	     *   from the lexer.
	     * - `cpsArg` is `cpsArg` passed into this API.
	     * 
	     * The `this` reference for the callback will be set to
	     * reference this lexer instance so that userland code
	     * in the callback can easily and quickly access any lexer
	     * API. 
	     *
	     * When the callback returns a non-string-type falsey value,
	     * we assume the callback did not edit the input and we
	     * will using the input as-is.
	     *
	     * When the callback returns a non-string-type value, it
	     * is converted to a string for lexing via the `"" + retval`
	     * operation. (See also why: http://2ality.com/2012/03/converting-to-string.html 
	     * -- that way any returned object's `toValue()` and `toString()`
	     * methods will be invoked in a proper/desirable order.)
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    editRemainingInput: function lexer_editRemainingInput(callback, cpsArg) {
	      var rv = callback.call(this, this._input, cpsArg);

	      if (typeof rv !== 'string') {
	        if (rv) {
	          this._input = '' + rv;
	        } 
	        // else: keep `this._input` as is.  
	      } else {
	        this._input = rv;
	      }

	      return this;
	    },

	    /**
	     * consumes and returns one char from the input
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    input: function lexer_input() {
	      if (!this._input) {
	        //this.done = true;    -- don't set `done` as we want the lex()/next() API to be able to produce one custom EOF token match after this anyhow. (lexer can match special <<EOF>> tokens and perform user action code for a <<EOF>> match, but only does so *once*)
	        return null;
	      }

	      var ch = this._input[0];
	      this.yytext += ch;
	      this.yyleng++;
	      this.offset++;
	      this.match += ch;
	      this.matched += ch;

	      // Count the linenumber up when we hit the LF (or a stand-alone CR).
	      // On CRLF, the linenumber is incremented when you fetch the CR or the CRLF combo
	      // and we advance immediately past the LF as well, returning both together as if
	      // it was all a single 'character' only.
	      var slice_len = 1;

	      var lines = false;

	      if (ch === '\n') {
	        lines = true;
	      } else if (ch === '\r') {
	        lines = true;
	        var ch2 = this._input[1];

	        if (ch2 === '\n') {
	          slice_len++;
	          ch += ch2;
	          this.yytext += ch2;
	          this.yyleng++;
	          this.offset++;
	          this.match += ch2;
	          this.matched += ch2;
	          this.yylloc.range[1]++;
	        }
	      }

	      if (lines) {
	        this.yylineno++;
	        this.yylloc.last_line++;
	        this.yylloc.last_column = 0;
	      } else {
	        this.yylloc.last_column++;
	      }

	      this.yylloc.range[1]++;
	      this._input = this._input.slice(slice_len);
	      return ch;
	    },

	    /**
	     * unshifts one char (or an entire string) into the input
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    unput: function lexer_unput(ch) {
	      var len = ch.length;
	      var lines = ch.split(/(?:\r\n?|\n)/g);
	      this._input = ch + this._input;
	      this.yytext = this.yytext.substr(0, this.yytext.length - len);
	      this.yyleng = this.yytext.length;
	      this.offset -= len;
	      this.match = this.match.substr(0, this.match.length - len);
	      this.matched = this.matched.substr(0, this.matched.length - len);

	      if (lines.length > 1) {
	        this.yylineno -= lines.length - 1;
	        this.yylloc.last_line = this.yylineno + 1;

	        // Get last entirely matched line into the `pre_lines[]` array's
	        // last index slot; we don't mind when other previously 
	        // matched lines end up in the array too. 
	        var pre = this.match;

	        var pre_lines = pre.split(/(?:\r\n?|\n)/g);

	        if (pre_lines.length === 1) {
	          pre = this.matched;
	          pre_lines = pre.split(/(?:\r\n?|\n)/g);
	        }

	        this.yylloc.last_column = pre_lines[pre_lines.length - 1].length;
	      } else {
	        this.yylloc.last_column -= len;
	      }

	      this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng;
	      this.done = false;
	      return this;
	    },

	    /**
	     * cache matched text and append it on next action
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    more: function lexer_more() {
	      this._more = true;
	      return this;
	    },

	    /**
	     * signal the lexer that this rule fails to match the input, so the
	     * next matching rule (regex) should be tested instead.
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    reject: function lexer_reject() {
	      if (this.options.backtrack_lexer) {
	        this._backtrack = true;
	      } else {
	        // when the `parseError()` call returns, we MUST ensure that the error is registered.
	        // We accomplish this by signaling an 'error' token to be produced for the current
	        // `.lex()` run.
	        var lineno_msg = '';

	        if (this.yylloc) {
	          lineno_msg = ' on line ' + (this.yylineno + 1);
	        }

	        var p = this.constructLexErrorInfo(
	          'Lexical error' + lineno_msg + ': You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).',
	          false
	        );

	        this._signaled_error_token = this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR;
	      }

	      return this;
	    },

	    /**
	     * retain first n characters of the match
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    less: function lexer_less(n) {
	      return this.unput(this.match.slice(n));
	    },

	    /**
	     * return (part of the) already matched input, i.e. for error
	     * messages.
	     * 
	     * Limit the returned string length to `maxSize` (default: 20).
	     * 
	     * Limit the returned string to the `maxLines` number of lines of
	     * input (default: 1).
	     * 
	     * Negative limit values equal *unlimited*.
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    pastInput: function lexer_pastInput(maxSize, maxLines) {
	      var past = this.matched.substring(0, this.matched.length - this.match.length);

	      if (maxSize < 0)
	        maxSize = past.length;
	      else if (!maxSize)
	        maxSize = 20;

	      if (maxLines < 0)
	        maxLines = past.length;          // can't ever have more input lines than this! 
	      else if (!maxLines)
	        maxLines = 1;

	      // `substr` anticipation: treat \r\n as a single character and take a little
	      // more than necessary so that we can still properly check against maxSize
	      // after we've transformed and limited the newLines in here:
	      past = past.substr(-maxSize * 2 - 2);

	      // now that we have a significantly reduced string to process, transform the newlines
	      // and chop them, then limit them:
	      var a = past.replace(/\r\n|\r/g, '\n').split('\n');

	      a = a.slice(-maxLines);
	      past = a.join('\n');

	      // When, after limiting to maxLines, we still have too much to return,
	      // do add an ellipsis prefix...
	      if (past.length > maxSize) {
	        past = '...' + past.substr(-maxSize);
	      }

	      return past;
	    },

	    /**
	     * return (part of the) upcoming input, i.e. for error messages.
	     * 
	     * Limit the returned string length to `maxSize` (default: 20).
	     * 
	     * Limit the returned string to the `maxLines` number of lines of input (default: 1).
	     * 
	     * Negative limit values equal *unlimited*.
	     *
	     * > ### NOTE ###
	     * >
	     * > *"upcoming input"* is defined as the whole of the both
	     * > the *currently lexed* input, together with any remaining input
	     * > following that. *"currently lexed"* input is the input 
	     * > already recognized by the lexer but not yet returned with
	     * > the lexer token. This happens when you are invoking this API
	     * > from inside any lexer rule action code block. 
	     * >
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    upcomingInput: function lexer_upcomingInput(maxSize, maxLines) {
	      var next = this.match;

	      if (maxSize < 0)
	        maxSize = next.length + this._input.length;
	      else if (!maxSize)
	        maxSize = 20;

	      if (maxLines < 0)
	        maxLines = maxSize;          // can't ever have more input lines than this! 
	      else if (!maxLines)
	        maxLines = 1;

	      // `substring` anticipation: treat \r\n as a single character and take a little
	      // more than necessary so that we can still properly check against maxSize
	      // after we've transformed and limited the newLines in here:
	      if (next.length < maxSize * 2 + 2) {
	        next += this._input.substring(0, maxSize * 2 + 2);   // substring is faster on Chrome/V8 
	      }

	      // now that we have a significantly reduced string to process, transform the newlines
	      // and chop them, then limit them:
	      var a = next.replace(/\r\n|\r/g, '\n').split('\n');

	      a = a.slice(0, maxLines);
	      next = a.join('\n');

	      // When, after limiting to maxLines, we still have too much to return,
	      // do add an ellipsis postfix...
	      if (next.length > maxSize) {
	        next = next.substring(0, maxSize) + '...';
	      }

	      return next;
	    },

	    /**
	     * return a string which displays the character position where the
	     * lexing error occurred, i.e. for error messages
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    showPosition: function lexer_showPosition(maxPrefix, maxPostfix) {
	      var pre = this.pastInput(maxPrefix).replace(/\s/g, ' ');
	      var c = new Array(pre.length + 1).join('-');
	      return pre + this.upcomingInput(maxPostfix).replace(/\s/g, ' ') + '\n' + c + '^';
	    },

	    /**
	     * return an YYLLOC info object derived off the given context (actual, preceding, following, current).
	     * Use this method when the given `actual` location is not guaranteed to exist (i.e. when
	     * it MAY be NULL) and you MUST have a valid location info object anyway:
	     * then we take the given context of the `preceding` and `following` locations, IFF those are available,
	     * and reconstruct the `actual` location info from those.
	     * If this fails, the heuristic is to take the `current` location, IFF available.
	     * If this fails as well, we assume the sought location is at/around the current lexer position
	     * and then produce that one as a response. DO NOTE that these heuristic/derived location info
	     * values MAY be inaccurate!
	     *
	     * NOTE: `deriveLocationInfo()` ALWAYS produces a location info object *copy* of `actual`, not just
	     * a *reference* hence all input location objects can be assumed to be 'constant' (function has no side-effects).
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    deriveLocationInfo: function lexer_deriveYYLLOC(actual, preceding, following, current) {
	      var loc = {
	        first_line: 1,
	        first_column: 0,
	        last_line: 1,
	        last_column: 0,
	        range: [0, 0]
	      };

	      if (actual) {
	        loc.first_line = actual.first_line | 0;
	        loc.last_line = actual.last_line | 0;
	        loc.first_column = actual.first_column | 0;
	        loc.last_column = actual.last_column | 0;

	        if (actual.range) {
	          loc.range[0] = actual.range[0] | 0;
	          loc.range[1] = actual.range[1] | 0;
	        }
	      }

	      if (loc.first_line <= 0 || loc.last_line < loc.first_line) {
	        // plan B: heuristic using preceding and following:
	        if (loc.first_line <= 0 && preceding) {
	          loc.first_line = preceding.last_line | 0;
	          loc.first_column = preceding.last_column | 0;

	          if (preceding.range) {
	            loc.range[0] = actual.range[1] | 0;
	          }
	        }

	        if ((loc.last_line <= 0 || loc.last_line < loc.first_line) && following) {
	          loc.last_line = following.first_line | 0;
	          loc.last_column = following.first_column | 0;

	          if (following.range) {
	            loc.range[1] = actual.range[0] | 0;
	          }
	        }

	        // plan C?: see if the 'current' location is useful/sane too:
	        if (loc.first_line <= 0 && current && (loc.last_line <= 0 || current.last_line <= loc.last_line)) {
	          loc.first_line = current.first_line | 0;
	          loc.first_column = current.first_column | 0;

	          if (current.range) {
	            loc.range[0] = current.range[0] | 0;
	          }
	        }

	        if (loc.last_line <= 0 && current && (loc.first_line <= 0 || current.first_line >= loc.first_line)) {
	          loc.last_line = current.last_line | 0;
	          loc.last_column = current.last_column | 0;

	          if (current.range) {
	            loc.range[1] = current.range[1] | 0;
	          }
	        }
	      }

	      // sanitize: fix last_line BEFORE we fix first_line as we use the 'raw' value of the latter
	      // or plan D heuristics to produce a 'sensible' last_line value:
	      if (loc.last_line <= 0) {
	        if (loc.first_line <= 0) {
	          loc.first_line = this.yylloc.first_line;
	          loc.last_line = this.yylloc.last_line;
	          loc.first_column = this.yylloc.first_column;
	          loc.last_column = this.yylloc.last_column;
	          loc.range[0] = this.yylloc.range[0];
	          loc.range[1] = this.yylloc.range[1];
	        } else {
	          loc.last_line = this.yylloc.last_line;
	          loc.last_column = this.yylloc.last_column;
	          loc.range[1] = this.yylloc.range[1];
	        }
	      }

	      if (loc.first_line <= 0) {
	        loc.first_line = loc.last_line;
	        loc.first_column = 0;  // loc.last_column; 
	        loc.range[1] = loc.range[0];
	      }

	      if (loc.first_column < 0) {
	        loc.first_column = 0;
	      }

	      if (loc.last_column < 0) {
	        loc.last_column = (loc.first_column > 0 ? loc.first_column : 80);
	      }

	      return loc;
	    },

	    /**
	     * return a string which displays the lines & columns of input which are referenced 
	     * by the given location info range, plus a few lines of context.
	     * 
	     * This function pretty-prints the indicated section of the input, with line numbers 
	     * and everything!
	     * 
	     * This function is very useful to provide highly readable error reports, while
	     * the location range may be specified in various flexible ways:
	     * 
	     * - `loc` is the location info object which references the area which should be
	     *   displayed and 'marked up': these lines & columns of text are marked up by `^`
	     *   characters below each character in the entire input range.
	     * 
	     * - `context_loc` is the *optional* location info object which instructs this
	     *   pretty-printer how much *leading* context should be displayed alongside
	     *   the area referenced by `loc`. This can help provide context for the displayed
	     *   error, etc.
	     * 
	     *   When this location info is not provided, a default context of 3 lines is
	     *   used.
	     * 
	     * - `context_loc2` is another *optional* location info object, which serves
	     *   a similar purpose to `context_loc`: it specifies the amount of *trailing*
	     *   context lines to display in the pretty-print output.
	     * 
	     *   When this location info is not provided, a default context of 1 line only is
	     *   used.
	     * 
	     * Special Notes:
	     * 
	     * - when the `loc`-indicated range is very large (about 5 lines or more), then
	     *   only the first and last few lines of this block are printed while a
	     *   `...continued...` message will be printed between them.
	     * 
	     *   This serves the purpose of not printing a huge amount of text when the `loc`
	     *   range happens to be huge: this way a manageable & readable output results
	     *   for arbitrary large ranges.
	     * 
	     * - this function can display lines of input which whave not yet been lexed.
	     *   `prettyPrintRange()` can access the entire input!
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    prettyPrintRange: function lexer_prettyPrintRange(loc, context_loc, context_loc2) {
	      loc = this.deriveLocationInfo(loc, context_loc, context_loc2);
	      const CONTEXT = 3;
	      const CONTEXT_TAIL = 1;
	      const MINIMUM_VISIBLE_NONEMPTY_LINE_COUNT = 2;
	      var input = this.matched + this._input;
	      var lines = input.split('\n');
	      var l0 = Math.max(1, (context_loc ? context_loc.first_line : loc.first_line - CONTEXT));
	      var l1 = Math.max(1, (context_loc2 ? context_loc2.last_line : loc.last_line + CONTEXT_TAIL));
	      var lineno_display_width = 1 + Math.log10(l1 | 1) | 0;
	      var ws_prefix = new Array(lineno_display_width).join(' ');
	      var nonempty_line_indexes = [];

	      var rv = lines.slice(l0 - 1, l1 + 1).map(function injectLineNumber(line, index) {
	        var lno = index + l0;
	        var lno_pfx = (ws_prefix + lno).substr(-lineno_display_width);
	        var rv = lno_pfx + ': ' + line;
	        var errpfx = new Array(lineno_display_width + 1).join('^');
	        var offset = 2 + 1;
	        var len = 0;

	        if (lno === loc.first_line) {
	          offset += loc.first_column;

	          len = Math.max(
	            2,
	            ((lno === loc.last_line ? loc.last_column : line.length)) - loc.first_column + 1
	          );
	        } else if (lno === loc.last_line) {
	          len = Math.max(2, loc.last_column + 1);
	        } else if (lno > loc.first_line && lno < loc.last_line) {
	          len = Math.max(2, line.length + 1);
	        }

	        if (len) {
	          var lead = new Array(offset).join('.');
	          var mark = new Array(len).join('^');
	          rv += '\n' + errpfx + lead + mark;

	          if (line.trim().length > 0) {
	            nonempty_line_indexes.push(index);
	          }
	        }

	        rv = rv.replace(/\t/g, ' ');
	        return rv;
	      });

	      // now make sure we don't print an overly large amount of error area: limit it 
	      // to the top and bottom line count:
	      if (nonempty_line_indexes.length > 2 * MINIMUM_VISIBLE_NONEMPTY_LINE_COUNT) {
	        var clip_start = nonempty_line_indexes[MINIMUM_VISIBLE_NONEMPTY_LINE_COUNT - 1] + 1;
	        var clip_end = nonempty_line_indexes[nonempty_line_indexes.length - MINIMUM_VISIBLE_NONEMPTY_LINE_COUNT] - 1;
	        var intermediate_line = new Array(lineno_display_width + 1).join(' ') + '  (...continued...)';
	        intermediate_line += '\n' + new Array(lineno_display_width + 1).join('-') + '  (---------------)';
	        rv.splice(clip_start, clip_end - clip_start + 1, intermediate_line);
	      }

	      return rv.join('\n');
	    },

	    /**
	     * helper function, used to produce a human readable description as a string, given
	     * the input `yylloc` location object.
	     * 
	     * Set `display_range_too` to TRUE to include the string character index position(s)
	     * in the description if the `yylloc.range` is available.
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    describeYYLLOC: function lexer_describe_yylloc(yylloc, display_range_too) {
	      var l1 = yylloc.first_line;
	      var l2 = yylloc.last_line;
	      var c1 = yylloc.first_column;
	      var c2 = yylloc.last_column;
	      var dl = l2 - l1;
	      var dc = c2 - c1;
	      var rv;

	      if (dl === 0) {
	        rv = 'line ' + l1 + ', ';

	        if (dc <= 1) {
	          rv += 'column ' + c1;
	        } else {
	          rv += 'columns ' + c1 + ' .. ' + c2;
	        }
	      } else {
	        rv = 'lines ' + l1 + '(column ' + c1 + ') .. ' + l2 + '(column ' + c2 + ')';
	      }

	      if (yylloc.range && display_range_too) {
	        var r1 = yylloc.range[0];
	        var r2 = yylloc.range[1] - 1;

	        if (r2 <= r1) {
	          rv += ' {String Offset: ' + r1 + '}';
	        } else {
	          rv += ' {String Offset range: ' + r1 + ' .. ' + r2 + '}';
	        }
	      }

	      return rv;
	    },

	    /**
	     * test the lexed token: return FALSE when not a match, otherwise return token.
	     * 
	     * `match` is supposed to be an array coming out of a regex match, i.e. `match[0]`
	     * contains the actually matched text string.
	     * 
	     * Also move the input cursor forward and update the match collectors:
	     * 
	     * - `yytext`
	     * - `yyleng`
	     * - `match`
	     * - `matches`
	     * - `yylloc`
	     * - `offset`
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    test_match: function lexer_test_match(match, indexed_rule) {
	      var token, lines, backup, match_str, match_str_len;

	      if (this.options.backtrack_lexer) {
	        // save context
	        backup = {
	          yylineno: this.yylineno,

	          yylloc: {
	            first_line: this.yylloc.first_line,
	            last_line: this.yylloc.last_line,
	            first_column: this.yylloc.first_column,
	            last_column: this.yylloc.last_column,
	            range: this.yylloc.range.slice(0)
	          },

	          yytext: this.yytext,
	          match: this.match,
	          matches: this.matches,
	          matched: this.matched,
	          yyleng: this.yyleng,
	          offset: this.offset,
	          _more: this._more,
	          _input: this._input,

	          //_signaled_error_token: this._signaled_error_token,
	          yy: this.yy,

	          conditionStack: this.conditionStack.slice(0),
	          done: this.done
	        };
	      }

	      match_str = match[0];
	      match_str_len = match_str.length;

	      // if (match_str.indexOf('\n') !== -1 || match_str.indexOf('\r') !== -1) {
	      lines = match_str.split(/(?:\r\n?|\n)/g);

	      if (lines.length > 1) {
	        this.yylineno += lines.length - 1;
	        this.yylloc.last_line = this.yylineno + 1;
	        this.yylloc.last_column = lines[lines.length - 1].length;
	      } else {
	        this.yylloc.last_column += match_str_len;
	      }

	      // }
	      this.yytext += match_str;

	      this.match += match_str;
	      this.matched += match_str;
	      this.matches = match;
	      this.yyleng = this.yytext.length;
	      this.yylloc.range[1] += match_str_len;

	      // previous lex rules MAY have invoked the `more()` API rather than producing a token:
	      // those rules will already have moved this `offset` forward matching their match lengths,
	      // hence we must only add our own match length now:
	      this.offset += match_str_len;

	      this._more = false;
	      this._backtrack = false;
	      this._input = this._input.slice(match_str_len);

	      // calling this method:
	      //
	      //   function lexer__performAction(yy, yyrulenumber, YY_START) {...}
	      token = this.performAction.call(
	        this,
	        this.yy,
	        indexed_rule,
	        this.conditionStack[this.conditionStack.length - 1] /* = YY_START */
	      );

	      // otherwise, when the action codes are all simple return token statements:
	      //token = this.simpleCaseActionClusters[indexed_rule];

	      if (this.done && this._input) {
	        this.done = false;
	      }

	      if (token) {
	        return token;
	      } else if (this._backtrack) {
	        // recover context
	        for (var k in backup) {
	          this[k] = backup[k];
	        }

	        this.__currentRuleSet__ = null;
	        return false;  // rule action called reject() implying the next rule should be tested instead. 
	      } else if (this._signaled_error_token) {
	        // produce one 'error' token as `.parseError()` in `reject()`
	        // did not guarantee a failure signal by throwing an exception!
	        token = this._signaled_error_token;

	        this._signaled_error_token = false;
	        return token;
	      }

	      return false;
	    },

	    /**
	     * return next match in input
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    next: function lexer_next() {
	      if (this.done) {
	        this.clear();
	        return this.EOF;
	      }

	      if (!this._input) {
	        this.done = true;
	      }

	      var token, match, tempMatch, index;

	      if (!this._more) {
	        this.clear();
	      }

	      var spec = this.__currentRuleSet__;

	      if (!spec) {
	        // Update the ruleset cache as we apparently encountered a state change or just started lexing.
	        // The cache is set up for fast lookup -- we assume a lexer will switch states much less often than it will
	        // invoke the `lex()` token-producing API and related APIs, hence caching the set for direct access helps
	        // speed up those activities a tiny bit.
	        spec = this.__currentRuleSet__ = this._currentRules();

	        // Check whether a *sane* condition has been pushed before: this makes the lexer robust against
	        // user-programmer bugs such as https://github.com/zaach/jison-lex/issues/19
	        if (!spec || !spec.rules) {
	          var lineno_msg = '';

	          if (this.options.trackPosition) {
	            lineno_msg = ' on line ' + (this.yylineno + 1);
	          }

	          var p = this.constructLexErrorInfo(
	            'Internal lexer engine error' + lineno_msg + ': The lex grammar programmer pushed a non-existing condition name "' + this.topState() + '"; this is a fatal error and should be reported to the application programmer team!',
	            false
	          );

	          // produce one 'error' token until this situation has been resolved, most probably by parse termination!
	          return this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR;
	        }
	      }

	      var rule_ids = spec.rules;
	      var regexes = spec.__rule_regexes;
	      var len = spec.__rule_count;

	      // Note: the arrays are 1-based, while `len` itself is a valid index,
	      // hence the non-standard less-or-equal check in the next loop condition!
	      for (var i = 1; i <= len; i++) {
	        tempMatch = this._input.match(regexes[i]);

	        if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	          match = tempMatch;
	          index = i;

	          if (this.options.backtrack_lexer) {
	            token = this.test_match(tempMatch, rule_ids[i]);

	            if (token !== false) {
	              return token;
	            } else if (this._backtrack) {
	              match = undefined;
	              continue;  // rule action called reject() implying a rule MISmatch. 
	            } else {
	              // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
	              return false;
	            }
	          } else if (!this.options.flex) {
	            break;
	          }
	        }
	      }

	      if (match) {
	        token = this.test_match(match, rule_ids[index]);

	        if (token !== false) {
	          return token;
	        }

	        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
	        return false;
	      }

	      if (!this._input) {
	        this.done = true;
	        this.clear();
	        return this.EOF;
	      } else {
	        var lineno_msg = '';

	        if (this.options.trackPosition) {
	          lineno_msg = ' on line ' + (this.yylineno + 1);
	        }

	        var p = this.constructLexErrorInfo(
	          'Lexical error' + lineno_msg + ': Unrecognized text.',
	          this.options.lexerErrorsAreRecoverable
	        );

	        var pendingInput = this._input;
	        var activeCondition = this.topState();
	        var conditionStackDepth = this.conditionStack.length;
	        token = this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR;

	        if (token === this.ERROR) {
	          // we can try to recover from a lexer error that `parseError()` did not 'recover' for us
	          // by moving forward at least one character at a time IFF the (user-specified?) `parseError()`
	          // has not consumed/modified any pending input or changed state in the error handler:
	          if (!this.matches && // and make sure the input has been modified/consumed ...
	          pendingInput === this._input && // ...or the lexer state has been modified significantly enough
	          // to merit a non-consuming error handling action right now.
	          activeCondition === this.topState() && conditionStackDepth === this.conditionStack.length) {
	            this.input();
	          }
	        }

	        return token;
	      }
	    },

	    /**
	     * return next match that has a token
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    lex: function lexer_lex() {
	      var r;

	      // allow the PRE/POST handlers set/modify the return token for maximum flexibility of the generated lexer:
	      if (typeof this.pre_lex === 'function') {
	        r = this.pre_lex.call(this, 0);
	      }

	      if (typeof this.options.pre_lex === 'function') {
	        // (also account for a userdef function which does not return any value: keep the token as is)
	        r = this.options.pre_lex.call(this, r) || r;
	      }

	      if (this.yy && typeof this.yy.pre_lex === 'function') {
	        // (also account for a userdef function which does not return any value: keep the token as is)
	        r = this.yy.pre_lex.call(this, r) || r;
	      }

	      while (!r) {
	        r = this.next();
	      }

	      if (this.yy && typeof this.yy.post_lex === 'function') {
	        // (also account for a userdef function which does not return any value: keep the token as is)
	        r = this.yy.post_lex.call(this, r) || r;
	      }

	      if (typeof this.options.post_lex === 'function') {
	        // (also account for a userdef function which does not return any value: keep the token as is)
	        r = this.options.post_lex.call(this, r) || r;
	      }

	      if (typeof this.post_lex === 'function') {
	        // (also account for a userdef function which does not return any value: keep the token as is)
	        r = this.post_lex.call(this, r) || r;
	      }

	      return r;
	    },

	    /**
	     * return next match that has a token. Identical to the `lex()` API but does not invoke any of the 
	     * `pre_lex()` nor any of the `post_lex()` callbacks.
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    fastLex: function lexer_fastLex() {
	      var r;

	      while (!r) {
	        r = this.next();
	      }

	      return r;
	    },

	    /**
	     * return info about the lexer state that can help a parser or other lexer API user to use the
	     * most efficient means available. This API is provided to aid run-time performance for larger
	     * systems which employ this lexer.
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    canIUse: function lexer_canIUse() {
	      var rv = {
	        fastLex: !(typeof this.pre_lex === 'function' || typeof this.options.pre_lex === 'function' || this.yy && typeof this.yy.pre_lex === 'function' || this.yy && typeof this.yy.post_lex === 'function' || typeof this.options.post_lex === 'function' || typeof this.post_lex === 'function') && typeof this.fastLex === 'function'
	      };

	      return rv;
	    },

	    /**
	     * backwards compatible alias for `pushState()`;
	     * the latter is symmetrical with `popState()` and we advise to use
	     * those APIs in any modern lexer code, rather than `begin()`.
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    begin: function lexer_begin(condition) {
	      return this.pushState(condition);
	    },

	    /**
	     * activates a new lexer condition state (pushes the new lexer
	     * condition state onto the condition stack)
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    pushState: function lexer_pushState(condition) {
	      this.conditionStack.push(condition);
	      this.__currentRuleSet__ = null;
	      return this;
	    },

	    /**
	     * pop the previously active lexer condition state off the condition
	     * stack
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    popState: function lexer_popState() {
	      var n = this.conditionStack.length - 1;

	      if (n > 0) {
	        this.__currentRuleSet__ = null;
	        return this.conditionStack.pop();
	      } else {
	        return this.conditionStack[0];
	      }
	    },

	    /**
	     * return the currently active lexer condition state; when an index
	     * argument is provided it produces the N-th previous condition state,
	     * if available
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    topState: function lexer_topState(n) {
	      n = this.conditionStack.length - 1 - Math.abs(n || 0);

	      if (n >= 0) {
	        return this.conditionStack[n];
	      } else {
	        return 'INITIAL';
	      }
	    },

	    /**
	     * (internal) determine the lexer rule set which is active for the
	     * currently active lexer condition state
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    _currentRules: function lexer__currentRules() {
	      if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
	        return this.conditions[this.conditionStack[this.conditionStack.length - 1]];
	      } else {
	        return this.conditions['INITIAL'];
	      }
	    },

	    /**
	     * return the number of states currently on the stack
	     * 
	     * @public
	     * @this {RegExpLexer}
	     */
	    stateStackSize: function lexer_stateStackSize() {
	      return this.conditionStack.length;
	    },

	    options: {
	      trackPosition: true
	    },

	    JisonLexerError: JisonLexerError,

	    performAction: function lexer__performAction(yy, yyrulenumber, YY_START) {

	      switch (yyrulenumber) {
	      case 1:
	        /*! Conditions:: INITIAL */
	        /*! Rule::       \s+ */
	        /* skip whitespace */
	        break;

	      default:
	        return this.simpleCaseActionClusters[yyrulenumber];
	      }
	    },

	    simpleCaseActionClusters: {
	      /*! Conditions:: INITIAL */
	      /*! Rule::       (--[0-9a-z-A-Z-]*) */
	      0: 13,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       \* */
	      2: 5,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       \/ */
	      3: 6,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       \+ */
	      4: 3,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       - */
	      5: 4,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)px\b */
	      6: 15,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)cm\b */
	      7: 15,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)mm\b */
	      8: 15,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)in\b */
	      9: 15,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)pt\b */
	      10: 15,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)pc\b */
	      11: 15,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)deg\b */
	      12: 16,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)grad\b */
	      13: 16,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)rad\b */
	      14: 16,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)turn\b */
	      15: 16,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)s\b */
	      16: 17,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)ms\b */
	      17: 17,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)Hz\b */
	      18: 18,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)kHz\b */
	      19: 18,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)dpi\b */
	      20: 19,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)dpcm\b */
	      21: 19,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)dppx\b */
	      22: 19,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)em\b */
	      23: 20,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)ex\b */
	      24: 21,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)ch\b */
	      25: 22,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)rem\b */
	      26: 23,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vw\b */
	      27: 25,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vh\b */
	      28: 24,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vmin\b */
	      29: 26,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vmax\b */
	      30: 27,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)% */
	      31: 28,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)\b */
	      32: 11,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       (calc) */
	      33: 9,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       (var) */
	      34: 12,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       ([a-z]+) */
	      35: 10,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       \( */
	      36: 7,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       \) */
	      37: 8,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       , */
	      38: 14,

	      /*! Conditions:: INITIAL */
	      /*! Rule::       $ */
	      39: 1
	    },

	    rules: [
	      /*  0: */  /^(?:(--[\d\-A-Za-z]*))/,
	      /*  1: */  /^(?:\s+)/,
	      /*  2: */  /^(?:\*)/,
	      /*  3: */  /^(?:\/)/,
	      /*  4: */  /^(?:\+)/,
	      /*  5: */  /^(?:-)/,
	      /*  6: */  /^(?:(\d+(\.\d*)?|\.\d+)px\b)/,
	      /*  7: */  /^(?:(\d+(\.\d*)?|\.\d+)cm\b)/,
	      /*  8: */  /^(?:(\d+(\.\d*)?|\.\d+)mm\b)/,
	      /*  9: */  /^(?:(\d+(\.\d*)?|\.\d+)in\b)/,
	      /* 10: */  /^(?:(\d+(\.\d*)?|\.\d+)pt\b)/,
	      /* 11: */  /^(?:(\d+(\.\d*)?|\.\d+)pc\b)/,
	      /* 12: */  /^(?:(\d+(\.\d*)?|\.\d+)deg\b)/,
	      /* 13: */  /^(?:(\d+(\.\d*)?|\.\d+)grad\b)/,
	      /* 14: */  /^(?:(\d+(\.\d*)?|\.\d+)rad\b)/,
	      /* 15: */  /^(?:(\d+(\.\d*)?|\.\d+)turn\b)/,
	      /* 16: */  /^(?:(\d+(\.\d*)?|\.\d+)s\b)/,
	      /* 17: */  /^(?:(\d+(\.\d*)?|\.\d+)ms\b)/,
	      /* 18: */  /^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/,
	      /* 19: */  /^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/,
	      /* 20: */  /^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/,
	      /* 21: */  /^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/,
	      /* 22: */  /^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/,
	      /* 23: */  /^(?:(\d+(\.\d*)?|\.\d+)em\b)/,
	      /* 24: */  /^(?:(\d+(\.\d*)?|\.\d+)ex\b)/,
	      /* 25: */  /^(?:(\d+(\.\d*)?|\.\d+)ch\b)/,
	      /* 26: */  /^(?:(\d+(\.\d*)?|\.\d+)rem\b)/,
	      /* 27: */  /^(?:(\d+(\.\d*)?|\.\d+)vw\b)/,
	      /* 28: */  /^(?:(\d+(\.\d*)?|\.\d+)vh\b)/,
	      /* 29: */  /^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/,
	      /* 30: */  /^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/,
	      /* 31: */  /^(?:(\d+(\.\d*)?|\.\d+)%)/,
	      /* 32: */  /^(?:(\d+(\.\d*)?|\.\d+)\b)/,
	      /* 33: */  /^(?:(calc))/,
	      /* 34: */  /^(?:(var))/,
	      /* 35: */  /^(?:([a-z]+))/,
	      /* 36: */  /^(?:\()/,
	      /* 37: */  /^(?:\))/,
	      /* 38: */  /^(?:,)/,
	      /* 39: */  /^(?:$)/
	    ],

	    conditions: {
	      'INITIAL': {
	        rules: [
	          0,
	          1,
	          2,
	          3,
	          4,
	          5,
	          6,
	          7,
	          8,
	          9,
	          10,
	          11,
	          12,
	          13,
	          14,
	          15,
	          16,
	          17,
	          18,
	          19,
	          20,
	          21,
	          22,
	          23,
	          24,
	          25,
	          26,
	          27,
	          28,
	          29,
	          30,
	          31,
	          32,
	          33,
	          34,
	          35,
	          36,
	          37,
	          38,
	          39
	        ],

	        inclusive: true
	      }
	    }
	  };

	  return lexer;
	}();
	parser.lexer = lexer;



	function Parser() {
	  this.yy = {};
	}
	Parser.prototype = parser;
	parser.Parser = Parser;

	return new Parser();
	})();

	        


	if (typeof commonjsRequire !== 'undefined' && 'object' !== 'undefined') {
	  exports.parser = parser;
	  exports.Parser = parser.Parser;
	  exports.parse = function () {
	    return parser.parse.apply(parser, arguments);
	  };
	  
	}
} (parser));

var reducer = {};

var convert = {exports: {}};

var conversions = {
    // length
    'px': {
        'px': 1,
        'cm': 96.0/2.54,
        'mm': 96.0/25.4,
        'in': 96,
        'pt': 96.0/72.0,
        'pc': 16
    },
    'cm': {
        'px': 2.54/96.0,
        'cm': 1,
        'mm': 0.1,
        'in': 2.54,
        'pt': 2.54/72.0,
        'pc': 2.54/6.0
    },
    'mm': {
        'px': 25.4/96.0,
        'cm': 10,
        'mm': 1,
        'in': 25.4,
        'pt': 25.4/72.0,
        'pc': 25.4/6.0
    },
    'in': {
        'px': 1.0/96.0,
        'cm': 1.0/2.54,
        'mm': 1.0/25.4,
        'in': 1,
        'pt': 1.0/72.0,
        'pc': 1.0/6.0
    },
    'pt': {
        'px': 0.75,
        'cm': 72.0/2.54,
        'mm': 72.0/25.4,
        'in': 72,
        'pt': 1,
        'pc': 12
    },
    'pc': {
        'px': 6.0/96.0,
        'cm': 6.0/2.54,
        'mm': 6.0/25.4,
        'in': 6,
        'pt': 6.0/72.0,
        'pc': 1
    },
    // angle
    'deg': {
        'deg': 1,
        'grad': 0.9,
        'rad': 180/Math.PI,
        'turn': 360
    },
    'grad': {
        'deg': 400/360,
        'grad': 1,
        'rad': 200/Math.PI,
        'turn': 400
    },
    'rad': {
        'deg': Math.PI/180,
        'grad': Math.PI/200,
        'rad': 1,
        'turn': Math.PI*2
    },
    'turn': {
        'deg': 1/360,
        'grad': 1/400,
        'rad': 0.5/Math.PI,
        'turn': 1
    },
    // time
    's': {
        's': 1,
        'ms': 1/1000
    },
    'ms': {
        's': 1000,
        'ms': 1
    },
    // frequency
    'Hz': {
        'Hz': 1,
        'kHz': 1000
    },
    'kHz': {
        'Hz': 1/1000,
        'kHz': 1
    },
    // resolution
    'dpi': {
        'dpi': 1,
        'dpcm': 1.0/2.54,
        'dppx': 1/96
    },
    'dpcm': {
        'dpi': 2.54,
        'dpcm': 1,
        'dppx': 2.54/96.0
    },
    'dppx': {
        'dpi': 96,
        'dpcm': 96.0/2.54,
        'dppx': 1
    }
};

var cssUnitConverter = function (value, sourceUnit, targetUnit, precision) {
    if (!conversions.hasOwnProperty(targetUnit))
        throw new Error("Cannot convert to " + targetUnit);

    if (!conversions[targetUnit].hasOwnProperty(sourceUnit))
        throw new Error("Cannot convert from " + sourceUnit + " to " + targetUnit);
    
    var converted = conversions[targetUnit][sourceUnit] * value;
    
    if (precision !== false) {
        precision = Math.pow(10, parseInt(precision) || 5);
        return Math.round(converted * precision) / precision;
    }
    
    return converted;
};

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cssUnitConverter = cssUnitConverter;

	var _cssUnitConverter2 = _interopRequireDefault(_cssUnitConverter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function convertNodes(left, right, precision) {
	  switch (left.type) {
	    case 'LengthValue':
	    case 'AngleValue':
	    case 'TimeValue':
	    case 'FrequencyValue':
	    case 'ResolutionValue':
	      return convertAbsoluteLength(left, right, precision);
	    default:
	      return { left: left, right: right };
	  }
	}

	function convertAbsoluteLength(left, right, precision) {
	  if (right.type === left.type) {
	    right = {
	      type: left.type,
	      value: (0, _cssUnitConverter2.default)(right.value, right.unit, left.unit, precision),
	      unit: left.unit
	    };
	  }
	  return { left: left, right: right };
	}

	exports.default = convertNodes;
	module.exports = exports['default'];
} (convert, convert.exports));

Object.defineProperty(reducer, "__esModule", {
  value: true
});
reducer.flip = flip;

var _convert = convert.exports;

var _convert2 = _interopRequireDefault(_convert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reduce(node, precision) {
  if (node.type === "MathExpression") return reduceMathExpression(node, precision);
  if (node.type === "Calc") return reduce(node.value, precision);

  return node;
}

function isEqual$1(left, right) {
  return left.type === right.type && left.value === right.value;
}

function isValueType(type) {
  switch (type) {
    case 'LengthValue':
    case 'AngleValue':
    case 'TimeValue':
    case 'FrequencyValue':
    case 'ResolutionValue':
    case 'EmValue':
    case 'ExValue':
    case 'ChValue':
    case 'RemValue':
    case 'VhValue':
    case 'VwValue':
    case 'VminValue':
    case 'VmaxValue':
    case 'PercentageValue':
    case 'Value':
      return true;
  }
  return false;
}

function convertMathExpression(node, precision) {
  var nodes = (0, _convert2.default)(node.left, node.right, precision);
  var left = reduce(nodes.left, precision);
  var right = reduce(nodes.right, precision);

  if (left.type === "MathExpression" && right.type === "MathExpression") {

    if (left.operator === '/' && right.operator === '*' || left.operator === '-' && right.operator === '+' || left.operator === '*' && right.operator === '/' || left.operator === '+' && right.operator === '-') {

      if (isEqual$1(left.right, right.right)) nodes = (0, _convert2.default)(left.left, right.left, precision);else if (isEqual$1(left.right, right.left)) nodes = (0, _convert2.default)(left.left, right.right, precision);

      left = reduce(nodes.left, precision);
      right = reduce(nodes.right, precision);
    }
  }

  node.left = left;
  node.right = right;
  return node;
}

function flip(operator) {
  return operator === '+' ? '-' : '+';
}

function flipValue(node) {
  if (isValueType(node.type)) node.value = -node.value;else if (node.type == 'MathExpression') {
    node.left = flipValue(node.left);
    node.right = flipValue(node.right);
  }
  return node;
}

function reduceAddSubExpression(node, precision) {
  var _node = node,
      left = _node.left,
      right = _node.right,
      op = _node.operator;


  if (left.type === 'CssVariable' || right.type === 'CssVariable') return node;

  // something + 0 => something
  // something - 0 => something
  if (right.value === 0) return left;

  // 0 + something => something
  if (left.value === 0 && op === "+") return right;

  // 0 - something => -something
  if (left.value === 0 && op === "-") return flipValue(right);

  // value + value
  // value - value
  if (left.type === right.type && isValueType(left.type)) {
    node = Object.assign({}, left);
    if (op === "+") node.value = left.value + right.value;else node.value = left.value - right.value;
  }

  // value <op> (expr)
  if (isValueType(left.type) && (right.operator === '+' || right.operator === '-') && right.type === 'MathExpression') {
    // value + (value + something) => (value + value) + something
    // value + (value - something) => (value + value) - something
    // value - (value + something) => (value - value) - something
    // value - (value - something) => (value - value) + something
    if (left.type === right.left.type) {
      node = Object.assign({}, node);
      node.left = reduce({
        type: 'MathExpression',
        operator: op,
        left: left,
        right: right.left
      }, precision);
      node.right = right.right;
      node.operator = op === '-' ? flip(right.operator) : right.operator;
      return reduce(node, precision);
    }
    // value + (something + value) => (value + value) + something
    // value + (something - value) => (value - value) + something
    // value - (something + value) => (value - value) - something
    // value - (something - value) => (value + value) - something
    else if (left.type === right.right.type) {
        node = Object.assign({}, node);
        node.left = reduce({
          type: 'MathExpression',
          operator: op === '-' ? flip(right.operator) : right.operator,
          left: left,
          right: right.right
        }, precision);
        node.right = right.left;
        return reduce(node, precision);
      }
  }

  // (expr) <op> value
  if (left.type === 'MathExpression' && (left.operator === '+' || left.operator === '-') && isValueType(right.type)) {
    // (value + something) + value => (value + value) + something
    // (value - something) + value => (value + value) - something
    // (value + something) - value => (value - value) + something
    // (value - something) - value => (value - value) - something
    if (right.type === left.left.type) {
      node = Object.assign({}, left);
      node.left = reduce({
        type: 'MathExpression',
        operator: op,
        left: left.left,
        right: right
      }, precision);
      return reduce(node, precision);
    }
    // (something + value) + value => something + (value + value)
    // (something - value1) + value2 => something - (value2 - value1)
    // (something + value) - value => something + (value - value)
    // (something - value) - value => something - (value + value)
    else if (right.type === left.right.type) {
        node = Object.assign({}, left);
        if (left.operator === '-') {
          node.right = reduce({
            type: 'MathExpression',
            operator: op === '-' ? '+' : '-',
            left: right,
            right: left.right
          }, precision);
          node.operator = op === '-' ? '-' : '+';
        } else {
          node.right = reduce({
            type: 'MathExpression',
            operator: op,
            left: left.right,
            right: right
          }, precision);
        }
        if (node.right.value < 0) {
          node.right.value *= -1;
          node.operator = node.operator === '-' ? '+' : '-';
        }
        return reduce(node, precision);
      }
  }
  return node;
}

function reduceDivisionExpression(node, precision) {
  if (!isValueType(node.right.type)) return node;

  if (node.right.type !== 'Value') throw new Error("Cannot divide by \"" + node.right.unit + "\", number expected");

  if (node.right.value === 0) throw new Error('Cannot divide by zero');

  // (expr) / value
  if (node.left.type === 'MathExpression') {
    if (isValueType(node.left.left.type) && isValueType(node.left.right.type)) {
      node.left.left.value /= node.right.value;
      node.left.right.value /= node.right.value;
      return reduce(node.left, precision);
    }
    return node;
  }
  // something / value
  else if (isValueType(node.left.type)) {
      node.left.value /= node.right.value;
      return node.left;
    }
  return node;
}

function reduceMultiplicationExpression(node) {
  // (expr) * value
  if (node.left.type === 'MathExpression' && node.right.type === 'Value') {
    if (isValueType(node.left.left.type) && isValueType(node.left.right.type)) {
      node.left.left.value *= node.right.value;
      node.left.right.value *= node.right.value;
      return node.left;
    }
  }
  // something * value
  else if (isValueType(node.left.type) && node.right.type === 'Value') {
      node.left.value *= node.right.value;
      return node.left;
    }
    // value * (expr)
    else if (node.left.type === 'Value' && node.right.type === 'MathExpression') {
        if (isValueType(node.right.left.type) && isValueType(node.right.right.type)) {
          node.right.left.value *= node.left.value;
          node.right.right.value *= node.left.value;
          return node.right;
        }
      }
      // value * something
      else if (node.left.type === 'Value' && isValueType(node.right.type)) {
          node.right.value *= node.left.value;
          return node.right;
        }
  return node;
}

function reduceMathExpression(node, precision) {
  node = convertMathExpression(node, precision);

  switch (node.operator) {
    case "+":
    case "-":
      return reduceAddSubExpression(node, precision);
    case "/":
      return reduceDivisionExpression(node, precision);
    case "*":
      return reduceMultiplicationExpression(node);
  }
  return node;
}

reducer.default = reduce;

var stringifier = {exports: {}};

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (calc, node, precision) {
	  var str = stringify(node, precision);

	  if (node.type === "MathExpression") {
	    // if calc expression couldn't be resolved to a single value, re-wrap it as
	    // a calc()
	    str = calc + "(" + str + ")";
	  }
	  return str;
	};

	var _reducer = reducer;

	var order = {
	  "*": 0,
	  "/": 0,
	  "+": 1,
	  "-": 1
	};

	function round(value, prec) {
	  if (prec !== false) {
	    var precision = Math.pow(10, prec);
	    return Math.round(value * precision) / precision;
	  }
	  return value;
	}

	function stringify(node, prec) {
	  switch (node.type) {
	    case "MathExpression":
	      {
	        var left = node.left,
	            right = node.right,
	            op = node.operator;

	        var str = "";

	        if (left.type === 'MathExpression' && order[op] < order[left.operator]) str += "(" + stringify(left, prec) + ")";else str += stringify(left, prec);

	        str += " " + node.operator + " ";

	        if (right.type === 'MathExpression' && order[op] < order[right.operator]) {
	          str += "(" + stringify(right, prec) + ")";
	        } else if (right.type === 'MathExpression' && op === "-" && ["+", "-"].includes(right.operator)) {
	          // fix #52 : a-(b+c) = a-b-c
	          right.operator = (0, _reducer.flip)(right.operator);
	          str += stringify(right, prec);
	        } else {
	          str += stringify(right, prec);
	        }

	        return str;
	      }
	    case "Value":
	      return round(node.value, prec);
	    case 'CssVariable':
	      if (node.fallback) {
	        return "var(" + node.value + ", " + stringify(node.fallback, prec) + ")";
	      }
	      return "var(" + node.value + ")";
	    case 'Calc':
	      if (node.prefix) {
	        return "-" + node.prefix + "-calc(" + stringify(node.value, prec) + ")";
	      }
	      return "calc(" + stringify(node.value, prec) + ")";
	    default:
	      return round(node.value, prec) + node.unit;
	  }
	}

	module.exports = exports["default"];
} (stringifier, stringifier.exports));

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _postcssValueParser = lib;

	var _postcssValueParser2 = _interopRequireDefault(_postcssValueParser);

	var _parser = parser;

	var _reducer = reducer;

	var _reducer2 = _interopRequireDefault(_reducer);

	var _stringifier = stringifier.exports;

	var _stringifier2 = _interopRequireDefault(_stringifier);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// eslint-disable-line
	var MATCH_CALC = /((?:\-[a-z]+\-)?calc)/;

	exports.default = function (value) {
	  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

	  return (0, _postcssValueParser2.default)(value).walk(function (node) {
	    // skip anything which isn't a calc() function
	    if (node.type !== 'function' || !MATCH_CALC.test(node.value)) return;

	    // stringify calc expression and produce an AST
	    var contents = _postcssValueParser2.default.stringify(node.nodes);

	    // skip constant() and env()
	    if (contents.indexOf('constant') >= 0 || contents.indexOf('env') >= 0) return;

	    var ast = _parser.parser.parse(contents);

	    // reduce AST to its simplest form, that is, either to a single value
	    // or a simplified calc expression
	    var reducedAst = (0, _reducer2.default)(ast, precision);

	    // stringify AST and write it back
	    node.type = 'word';
	    node.value = (0, _stringifier2.default)(node.value, reducedAst, precision);
	  }, true).toString();
	};

	module.exports = exports['default'];
} (dist, dist.exports));

const reduceCSSCalc = /*@__PURE__*/getDefaultExportFromCjs(dist.exports);

function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$f(Object(source), true).forEach(function (key) { _defineProperty$f(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$f(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$f(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray$7(arr) { return _arrayWithoutHoles$7(arr) || _iterableToArray$7(arr) || _unsupportedIterableToArray$a(arr) || _nonIterableSpread$7(); }

function _nonIterableSpread$7() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$a(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$a(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$a(o, minLen); }

function _iterableToArray$7(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$7(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$a(arr); }

function _arrayLikeToArray$a(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var stringCache = {
  widthCache: {},
  cacheCount: 0
};
var MAX_CACHE_NUM = 2000;
var SPAN_STYLE = {
  position: 'absolute',
  top: '-20000px',
  left: 0,
  padding: 0,
  margin: 0,
  border: 'none',
  whiteSpace: 'pre'
};
var STYLE_LIST = ['minWidth', 'maxWidth', 'width', 'minHeight', 'maxHeight', 'height', 'top', 'left', 'fontSize', 'lineHeight', 'padding', 'margin', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom'];
var MEASUREMENT_SPAN_ID = 'recharts_measurement_span';

function autoCompleteStyle(name, value) {
  if (STYLE_LIST.indexOf(name) >= 0 && value === +value) {
    return "".concat(value, "px");
  }

  return value;
}

function camelToMiddleLine(text) {
  var strs = text.split('');
  var formatStrs = strs.reduce(function (result, entry) {
    if (entry === entry.toUpperCase()) {
      return [].concat(_toConsumableArray$7(result), ['-', entry.toLowerCase()]);
    }

    return [].concat(_toConsumableArray$7(result), [entry]);
  }, []);
  return formatStrs.join('');
}

var getStyleString = function getStyleString(style) {
  return Object.keys(style).reduce(function (result, s) {
    return "".concat(result).concat(camelToMiddleLine(s), ":").concat(autoCompleteStyle(s, style[s]), ";");
  }, '');
};
var getStringSize = function getStringSize(text) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (text === undefined || text === null || Global.isSsr) {
    return {
      width: 0,
      height: 0
    };
  }

  var str = "".concat(text);
  var styleString = getStyleString(style);
  var cacheKey = "".concat(str, "-").concat(styleString);

  if (stringCache.widthCache[cacheKey]) {
    return stringCache.widthCache[cacheKey];
  }

  try {
    var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);

    if (!measurementSpan) {
      measurementSpan = document.createElement('span');
      measurementSpan.setAttribute('id', MEASUREMENT_SPAN_ID);
      measurementSpan.setAttribute('aria-hidden', 'true');
      document.body.appendChild(measurementSpan);
    } // Need to use CSS Object Model (CSSOM) to be able to comply with Content Security Policy (CSP)
    // https://en.wikipedia.org/wiki/Content_Security_Policy


    var measurementSpanStyle = _objectSpread$f(_objectSpread$f({}, SPAN_STYLE), style);

    Object.keys(measurementSpanStyle).map(function (styleKey) {
      measurementSpan.style[styleKey] = measurementSpanStyle[styleKey];
      return styleKey;
    });
    measurementSpan.textContent = str;
    var rect = measurementSpan.getBoundingClientRect();
    var result = {
      width: rect.width,
      height: rect.height
    };
    stringCache.widthCache[cacheKey] = result;

    if (++stringCache.cacheCount > MAX_CACHE_NUM) {
      stringCache.cacheCount = 0;
      stringCache.widthCache = {};
    }

    return result;
  } catch (e) {
    return {
      width: 0,
      height: 0
    };
  }
};
var getOffset = function getOffset(el) {
  var html = el.ownerDocument.documentElement;
  var box = {
    top: 0,
    left: 0
  }; // If we don't have gBCR, just use 0,0 rather than error
  // BlackBerry 5, iOS 3 (original iPhone)

  if (typeof el.getBoundingClientRect !== 'undefined') {
    box = el.getBoundingClientRect();
  }

  return {
    top: box.top + window.pageYOffset - html.clientTop,
    left: box.left + window.pageXOffset - html.clientLeft
  };
};
/**
 * Calculate coordinate of cursor in chart
 * @param  {Object} event  Event object
 * @param  {Object} offset The offset of main part in the svg element
 * @return {Object}        {chartX, chartY}
 */

var calculateChartCoordinate = function calculateChartCoordinate(event, offset) {
  return {
    chartX: Math.round(event.pageX - offset.left),
    chartY: Math.round(event.pageY - offset.top)
  };
};

function _typeof$9(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$9 = function _typeof(obj) { return typeof obj; }; } else { _typeof$9 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$9(obj); }

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$a(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$a(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$a(Constructor.prototype, protoProps); if (staticProps) _defineProperties$a(Constructor, staticProps); return Constructor; }

function _inherits$9(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$9(subClass, superClass); }

function _setPrototypeOf$9(o, p) { _setPrototypeOf$9 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$9(o, p); }

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf$9(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$9(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$9(this, result); }; }

function _possibleConstructorReturn$9(self, call) { if (call && (_typeof$9(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$9(self); }

function _assertThisInitialized$9(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$9(o) { _getPrototypeOf$9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$9(o); }

function _slicedToArray$4(arr, i) { return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _unsupportedIterableToArray$9(arr, i) || _nonIterableRest$4(); }

function _nonIterableRest$4() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$9(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$9(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$9(o, minLen); }

function _arrayLikeToArray$9(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$4(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$4(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$e(Object(source), true).forEach(function (key) { _defineProperty$e(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$e(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$e(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;

var calculateWordWidths = function calculateWordWidths(props) {
  try {
    var words = [];

    if (!isNil_1(props.children)) {
      if (props.breakAll) {
        words = props.children.toString().split('');
      } else {
        words = props.children.toString().split(BREAKING_SPACES);
      }
    }

    var wordsWithComputedWidth = words.map(function (word) {
      return {
        word: word,
        width: getStringSize(word, props.style).width
      };
    });
    var spaceWidth = props.breakAll ? 0 : getStringSize("\xA0", props.style).width;
    return {
      wordsWithComputedWidth: wordsWithComputedWidth,
      spaceWidth: spaceWidth
    };
  } catch (e) {
    return null;
  }
};

var calculateWordsByLines = function calculateWordsByLines(props, initialWordsWithComputedWith, spaceWidth, lineWidth, scaleToFit) {
  var shouldLimitLines = isNumber(props.maxLines);
  var text = props.children;

  var calculate = function calculate() {
    var words = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return words.reduce(function (result, _ref) {
      var word = _ref.word,
          width = _ref.width;
      var currentLine = result[result.length - 1];

      if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < lineWidth)) {
        // Word can be added to an existing line
        currentLine.words.push(word);
        currentLine.width += width + spaceWidth;
      } else {
        // Add first word to line or word is too long to scaleToFit on existing line
        var newLine = {
          words: [word],
          width: width
        };
        result.push(newLine);
      }

      return result;
    }, []);
  };

  var originalResult = calculate(initialWordsWithComputedWith);

  var findLongestLine = function findLongestLine(words) {
    return words.reduce(function (a, b) {
      return a.width > b.width ? a : b;
    });
  };

  if (!shouldLimitLines) {
    return originalResult;
  }

  var suffix = '…';

  var checkOverflow = function checkOverflow(index) {
    var tempText = text.slice(0, index);
    var words = calculateWordWidths(_objectSpread$e(_objectSpread$e({}, props), {}, {
      children: tempText + suffix
    })).wordsWithComputedWidth;
    var result = calculate(words);
    var doesOverflow = result.length > props.maxLines || findLongestLine(result).width > lineWidth;
    return [doesOverflow, result];
  };

  var start = 0;
  var end = text.length - 1;
  var iterations = 0;
  var trimmedResult;

  while (start <= end && iterations <= text.length - 1) {
    var middle = Math.floor((start + end) / 2);
    var prev = middle - 1;

    var _checkOverflow = checkOverflow(prev),
        _checkOverflow2 = _slicedToArray$4(_checkOverflow, 2),
        doesPrevOverflow = _checkOverflow2[0],
        result = _checkOverflow2[1];

    var _checkOverflow3 = checkOverflow(middle),
        _checkOverflow4 = _slicedToArray$4(_checkOverflow3, 1),
        doesMiddleOverflow = _checkOverflow4[0];

    if (!doesPrevOverflow && !doesMiddleOverflow) {
      start = middle + 1;
    }

    if (doesPrevOverflow && doesMiddleOverflow) {
      end = middle - 1;
    }

    if (!doesPrevOverflow && doesMiddleOverflow) {
      trimmedResult = result;
      break;
    }

    iterations++;
  } // Fallback to originalResult (result without trimming) if we cannot find the
  // where to trim.  This should not happen :tm:


  return trimmedResult || originalResult;
};

var getWordsWithoutCalculate = function getWordsWithoutCalculate(children) {
  var words = !isNil_1(children) ? children.toString().split(BREAKING_SPACES) : [];
  return [{
    words: words
  }];
};

var getWordsByLines = function getWordsByLines(props, needCalculate) {
  // Only perform calculations if using features that require them (multiline, scaleToFit)
  if ((props.width || props.scaleToFit) && !Global.isSsr) {
    var wordsWithComputedWidth, spaceWidth;

    if (needCalculate) {
      var wordWidths = calculateWordWidths(props);

      if (wordWidths) {
        var wcw = wordWidths.wordsWithComputedWidth,
            sw = wordWidths.spaceWidth;
        wordsWithComputedWidth = wcw;
        spaceWidth = sw;
      } else {
        return getWordsWithoutCalculate(props.children);
      }

      return calculateWordsByLines(props, wordsWithComputedWidth, spaceWidth, props.width, props.scaleToFit);
    }
  }

  return getWordsWithoutCalculate(props.children);
};

var Text = /*#__PURE__*/function (_Component) {
  _inherits$9(Text, _Component);

  var _super = _createSuper$9(Text);

  function Text() {
    var _this;

    _classCallCheck$a(this, Text);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {};
    return _this;
  }

  _createClass$a(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dx = _this$props.dx,
          dy = _this$props.dy,
          textAnchor = _this$props.textAnchor,
          verticalAnchor = _this$props.verticalAnchor,
          scaleToFit = _this$props.scaleToFit,
          angle = _this$props.angle,
          lineHeight = _this$props.lineHeight,
          capHeight = _this$props.capHeight,
          className = _this$props.className,
          breakAll = _this$props.breakAll,
          textProps = _objectWithoutProperties$6(_this$props, ["dx", "dy", "textAnchor", "verticalAnchor", "scaleToFit", "angle", "lineHeight", "capHeight", "className", "breakAll"]);

      var wordsByLines = this.state.wordsByLines;

      if (!isNumOrStr(textProps.x) || !isNumOrStr(textProps.y)) {
        return null;
      }

      var x = textProps.x + (isNumber(dx) ? dx : 0);
      var y = textProps.y + (isNumber(dy) ? dy : 0);
      var startDy;

      switch (verticalAnchor) {
        case 'start':
          startDy = reduceCSSCalc("calc(".concat(capHeight, ")"));
          break;

        case 'middle':
          startDy = reduceCSSCalc("calc(".concat((wordsByLines.length - 1) / 2, " * -").concat(lineHeight, " + (").concat(capHeight, " / 2))"));
          break;

        default:
          startDy = reduceCSSCalc("calc(".concat(wordsByLines.length - 1, " * -").concat(lineHeight, ")"));
          break;
      }

      var transforms = [];

      if (scaleToFit) {
        var lineWidth = wordsByLines[0].width;
        var width = this.props.width;
        transforms.push("scale(".concat((isNumber(width) ? width / lineWidth : 1) / lineWidth, ")"));
      }

      if (angle) {
        transforms.push("rotate(".concat(angle, ", ").concat(x, ", ").concat(y, ")"));
      }

      if (transforms.length) {
        textProps.transform = transforms.join(' ');
      }

      return /*#__PURE__*/React.createElement("text", _extends$f({}, filterProps(textProps, true), {
        x: x,
        y: y,
        className: classNames('recharts-text', className),
        textAnchor: textAnchor,
        fill: textProps.fill.includes('url') ? Text.defaultProps.fill : textProps.fill
      }), wordsByLines.map(function (line, index) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          React.createElement("tspan", {
            x: x,
            dy: index === 0 ? startDy : lineHeight,
            key: index
          }, line.words.join(breakAll ? '' : ' '))
        );
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.width !== prevState.prevWidth || nextProps.scaleToFit !== prevState.prevScaleToFit || nextProps.children !== prevState.prevChildren || nextProps.style !== prevState.prevStyle || nextProps.breakAll !== prevState.prevBreakAll) {
        var needCalculate = nextProps.children !== prevState.prevChildren || nextProps.style !== prevState.prevStyle || nextProps.breakAll !== prevState.prevBreakAll;
        return {
          prevWidth: nextProps.width,
          prevScaleToFit: nextProps.scaleToFit,
          prevChildren: nextProps.children,
          prevStyle: nextProps.style,
          wordsByLines: getWordsByLines(nextProps, needCalculate)
        };
      }

      return null;
    }
  }]);

  return Text;
}(react.exports.Component);
Text.defaultProps = {
  x: 0,
  y: 0,
  lineHeight: '1em',
  capHeight: '0.71em',
  // Magic number from d3
  scaleToFit: false,
  textAnchor: 'start',
  verticalAnchor: 'end',
  // Maintain compat with existing charts / default SVG behavior
  fill: '#808080'
};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

(function (module) {

	{
	  module.exports = reactIs_production_min;
	}
} (reactIs));

function shallowEqual(a, b) {
  /* eslint-disable no-restricted-syntax */
  for (var key in a) {
    if ({}.hasOwnProperty.call(a, key) && (!{}.hasOwnProperty.call(b, key) || a[key] !== b[key])) {
      return false;
    }
  }

  for (var _key in b) {
    if ({}.hasOwnProperty.call(b, _key) && !{}.hasOwnProperty.call(a, _key)) {
      return false;
    }
  }

  return true;
}

function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var REACT_BROWSER_EVENT_MAP = {
  click: 'onClick',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp',
  mouseover: 'onMouseOver',
  mousemove: 'onMouseMove',
  mouseout: 'onMouseOut',
  mouseenter: 'onMouseEnter',
  mouseleave: 'onMouseLeave',
  touchcancel: 'onTouchCancel',
  touchend: 'onTouchEnd',
  touchmove: 'onTouchMove',
  touchstart: 'onTouchStart'
};
/**
 * Get the display name of a component
 * @param  {Object} Comp Specified Component
 * @return {String}      Display name of Component
 */

var getDisplayName = function getDisplayName(Comp) {
  if (typeof Comp === 'string') {
    return Comp;
  }

  if (!Comp) {
    return '';
  }

  return Comp.displayName || Comp.name || 'Component';
}; // `toArray` gets called multiple times during the render
// so we can memoize last invocation (since reference to `children` is the same)

var lastChildren = null;
var lastResult = null;
var toArray = function toArray(children) {
  if (children === lastChildren && isArray_1(lastResult)) {
    return lastResult;
  }

  var result = [];
  react.exports.Children.forEach(children, function (child) {
    if (isNil_1(child)) return;

    if (reactIs.exports.isFragment(child)) {
      result = result.concat(toArray(child.props.children));
    } else {
      result.push(child);
    }
  });
  lastResult = result;
  lastChildren = children;
  return result;
};
/*
 * Find and return all matched children by type. `type` can be a React element class or
 * string
 */

var findAllByType = function findAllByType(children, type) {
  var result = [];
  var types = [];

  if (isArray_1(type)) {
    types = type.map(function (t) {
      return getDisplayName(t);
    });
  } else {
    types = [getDisplayName(type)];
  }

  toArray(children).forEach(function (child) {
    var childType = get_1(child, 'type.displayName') || get_1(child, 'type.name');

    if (types.indexOf(childType) !== -1) {
      result.push(child);
    }
  });
  return result;
};
/*
 * Return the first matched child by type, return null otherwise.
 * `type` can be a React element class or string.
 */

var findChildByType = function findChildByType(children, type) {
  var result = findAllByType(children, type);
  return result && result[0];
};
/**
 * validate the width and height props of a chart element
 * @param  {Object} el A chart element
 * @return {Boolean}   true If the props width and height are number, and greater than 0
 */

var validateWidthHeight = function validateWidthHeight(el) {
  if (!el || !el.props) {
    return false;
  }

  var _el$props = el.props,
      width = _el$props.width,
      height = _el$props.height;

  if (!isNumber(width) || width <= 0 || !isNumber(height) || height <= 0) {
    return false;
  }

  return true;
};
var SVG_TAGS = ['a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColormatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-url', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'lineGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script', 'set', 'stop', 'style', 'svg', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref', 'tspan', 'use', 'view', 'vkern'];

var isSvgElement = function isSvgElement(child) {
  return child && child.type && isString_1(child.type) && SVG_TAGS.indexOf(child.type) >= 0;
};
/**
 * Wether props of children changed
 * @param  {Object} nextChildren The latest children
 * @param  {Object} prevChildren The prev children
 * @return {Boolean}             equal or not
 */

var isChildrenEqual = function isChildrenEqual(nextChildren, prevChildren) {
  if (nextChildren === prevChildren) {
    return true;
  }

  var count = react.exports.Children.count(nextChildren);

  if (count !== react.exports.Children.count(prevChildren)) {
    return false;
  }

  if (count === 0) {
    return true;
  }

  if (count === 1) {
    // eslint-disable-next-line no-use-before-define,@typescript-eslint/no-use-before-define
    return isSingleChildEqual(isArray_1(nextChildren) ? nextChildren[0] : nextChildren, isArray_1(prevChildren) ? prevChildren[0] : prevChildren);
  }

  for (var i = 0; i < count; i++) {
    var nextChild = nextChildren[i];
    var prevChild = prevChildren[i];

    if (isArray_1(nextChild) || isArray_1(prevChild)) {
      if (!isChildrenEqual(nextChild, prevChild)) {
        return false;
      } // eslint-disable-next-line no-use-before-define,@typescript-eslint/no-use-before-define

    } else if (!isSingleChildEqual(nextChild, prevChild)) {
      return false;
    }
  }

  return true;
};
var isSingleChildEqual = function isSingleChildEqual(nextChild, prevChild) {
  if (isNil_1(nextChild) && isNil_1(prevChild)) {
    return true;
  }

  if (!isNil_1(nextChild) && !isNil_1(prevChild)) {
    var _ref = nextChild.props || {},
        nextChildren = _ref.children,
        nextProps = _objectWithoutProperties$5(_ref, ["children"]);

    var _ref2 = prevChild.props || {},
        prevChildren = _ref2.children,
        prevProps = _objectWithoutProperties$5(_ref2, ["children"]);

    if (nextChildren && prevChildren) {
      // eslint-disable-next-line no-use-before-define
      return shallowEqual(nextProps, prevProps) && isChildrenEqual(nextChildren, prevChildren);
    }

    if (!nextChildren && !prevChildren) {
      return shallowEqual(nextProps, prevProps);
    }

    return false;
  }

  return false;
};
var renderByOrder = function renderByOrder(children, renderMap) {
  var elements = [];
  var record = {};
  toArray(children).forEach(function (child, index) {
    if (isSvgElement(child)) {
      elements.push(child);
    } else if (child) {
      var displayName = getDisplayName(child.type);

      var _ref3 = renderMap[displayName] || {},
          handler = _ref3.handler,
          once = _ref3.once;

      if (handler && (!once || !record[displayName])) {
        var results = handler(child, displayName, index);
        elements.push(results);
        record[displayName] = true;
      }
    }
  });
  return elements;
};
var getReactEventByType = function getReactEventByType(e) {
  var type = e && e.type;

  if (type && REACT_BROWSER_EVENT_MAP[type]) {
    return REACT_BROWSER_EVENT_MAP[type];
  }

  return null;
};
var parseChildIndex = function parseChildIndex(child, children) {
  return toArray(children).indexOf(child);
};

var baseIsEqual = _baseIsEqual;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

var isEqual_1 = isEqual;

var isSymbol = isSymbol_1;

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum$2(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

var _baseExtremum = baseExtremum$2;

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */

function baseGt$1(value, other) {
  return value > other;
}

var _baseGt = baseGt$1;

var baseExtremum$1 = _baseExtremum,
    baseGt = _baseGt,
    identity$5 = identity_1;

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max$1(array) {
  return (array && array.length)
    ? baseExtremum$1(array, identity$5, baseGt)
    : undefined;
}

var max_1 = max$1;

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */

function baseLt$1(value, other) {
  return value < other;
}

var _baseLt = baseLt$1;

var baseExtremum = _baseExtremum,
    baseLt = _baseLt,
    identity$4 = identity_1;

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min$1(array) {
  return (array && array.length)
    ? baseExtremum(array, identity$4, baseLt)
    : undefined;
}

var min_1 = min$1;

var arrayMap = _arrayMap,
    baseIteratee$5 = _baseIteratee,
    baseMap = _baseMap,
    isArray$2 = isArray_1;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map$3(collection, iteratee) {
  var func = isArray$2(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee$5(iteratee));
}

var map_1 = map$3;

var baseFlatten = _baseFlatten,
    map$2 = map_1;

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map$2(collection, iteratee), 1);
}

var flatMap_1 = flatMap;

/*
 *  decimal.js-light v2.5.1
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js-light
 *  Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Expat Licence
 */


// ------------------------------------  EDITABLE DEFAULTS  ------------------------------------- //


// The limit on the value of `precision`, and on the value of the first argument to
// `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
var MAX_DIGITS = 1e9,                        // 0 to 1e9


  // The initial configuration properties of the Decimal constructor.
  defaults = {

    // These values must be integers within the stated ranges (inclusive).
    // Most of these values can be changed during run-time using `Decimal.config`.

    // The maximum number of significant digits of the result of a calculation or base conversion.
    // E.g. `Decimal.config({ precision: 20 });`
    precision: 20,                         // 1 to MAX_DIGITS

    // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
    // `toFixed`, `toPrecision` and `toSignificantDigits`.
    //
    // ROUND_UP         0 Away from zero.
    // ROUND_DOWN       1 Towards zero.
    // ROUND_CEIL       2 Towards +Infinity.
    // ROUND_FLOOR      3 Towards -Infinity.
    // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    //
    // E.g.
    // `Decimal.rounding = 4;`
    // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
    rounding: 4,                           // 0 to 8

    // The exponent value at and beneath which `toString` returns exponential notation.
    // JavaScript numbers: -7
    toExpNeg: -7,                          // 0 to -MAX_E

    // The exponent value at and above which `toString` returns exponential notation.
    // JavaScript numbers: 21
    toExpPos:  21,                         // 0 to MAX_E

    // The natural logarithm of 10.
    // 115 digits
    LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
  },


// ------------------------------------ END OF EDITABLE DEFAULTS -------------------------------- //


  Decimal,
  external = true,

  decimalError = '[DecimalError] ',
  invalidArgument = decimalError + 'Invalid argument: ',
  exponentOutOfRange = decimalError + 'Exponent out of range: ',

  mathfloor = Math.floor,
  mathpow = Math.pow,

  isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,

  ONE,
  BASE = 1e7,
  LOG_BASE = 7,
  MAX_SAFE_INTEGER = 9007199254740991,
  MAX_E = mathfloor(MAX_SAFE_INTEGER / LOG_BASE),    // 1286742750677284

  // Decimal.prototype object
  P = {};


// Decimal prototype methods


/*
 *  absoluteValue                       abs
 *  comparedTo                          cmp
 *  decimalPlaces                       dp
 *  dividedBy                           div
 *  dividedToIntegerBy                  idiv
 *  equals                              eq
 *  exponent
 *  greaterThan                         gt
 *  greaterThanOrEqualTo                gte
 *  isInteger                           isint
 *  isNegative                          isneg
 *  isPositive                          ispos
 *  isZero
 *  lessThan                            lt
 *  lessThanOrEqualTo                   lte
 *  logarithm                           log
 *  minus                               sub
 *  modulo                              mod
 *  naturalExponential                  exp
 *  naturalLogarithm                    ln
 *  negated                             neg
 *  plus                                add
 *  precision                           sd
 *  squareRoot                          sqrt
 *  times                               mul
 *  toDecimalPlaces                     todp
 *  toExponential
 *  toFixed
 *  toInteger                           toint
 *  toNumber
 *  toPower                             pow
 *  toPrecision
 *  toSignificantDigits                 tosd
 *  toString
 *  valueOf                             val
 */


/*
 * Return a new Decimal whose value is the absolute value of this Decimal.
 *
 */
P.absoluteValue = P.abs = function () {
  var x = new this.constructor(this);
  if (x.s) x.s = 1;
  return x;
};


/*
 * Return
 *   1    if the value of this Decimal is greater than the value of `y`,
 *  -1    if the value of this Decimal is less than the value of `y`,
 *   0    if they have the same value
 *
 */
P.comparedTo = P.cmp = function (y) {
  var i, j, xdL, ydL,
    x = this;

  y = new x.constructor(y);

  // Signs differ?
  if (x.s !== y.s) return x.s || -y.s;

  // Compare exponents.
  if (x.e !== y.e) return x.e > y.e ^ x.s < 0 ? 1 : -1;

  xdL = x.d.length;
  ydL = y.d.length;

  // Compare digit by digit.
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (x.d[i] !== y.d[i]) return x.d[i] > y.d[i] ^ x.s < 0 ? 1 : -1;
  }

  // Compare lengths.
  return xdL === ydL ? 0 : xdL > ydL ^ x.s < 0 ? 1 : -1;
};


/*
 * Return the number of decimal places of the value of this Decimal.
 *
 */
P.decimalPlaces = P.dp = function () {
  var x = this,
    w = x.d.length - 1,
    dp = (w - x.e) * LOG_BASE;

  // Subtract the number of trailing zeros of the last word.
  w = x.d[w];
  if (w) for (; w % 10 == 0; w /= 10) dp--;

  return dp < 0 ? 0 : dp;
};


/*
 * Return a new Decimal whose value is the value of this Decimal divided by `y`, truncated to
 * `precision` significant digits.
 *
 */
P.dividedBy = P.div = function (y) {
  return divide(this, new this.constructor(y));
};


/*
 * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
 * by the value of `y`, truncated to `precision` significant digits.
 *
 */
P.dividedToIntegerBy = P.idiv = function (y) {
  var x = this,
    Ctor = x.constructor;
  return round(divide(x, new Ctor(y), 0, 1), Ctor.precision);
};


/*
 * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
 *
 */
P.equals = P.eq = function (y) {
  return !this.cmp(y);
};


/*
 * Return the (base 10) exponent value of this Decimal (this.e is the base 10000000 exponent).
 *
 */
P.exponent = function () {
  return getBase10Exponent(this);
};


/*
 * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
 * false.
 *
 */
P.greaterThan = P.gt = function (y) {
  return this.cmp(y) > 0;
};


/*
 * Return true if the value of this Decimal is greater than or equal to the value of `y`,
 * otherwise return false.
 *
 */
P.greaterThanOrEqualTo = P.gte = function (y) {
  return this.cmp(y) >= 0;
};


/*
 * Return true if the value of this Decimal is an integer, otherwise return false.
 *
 */
P.isInteger = P.isint = function () {
  return this.e > this.d.length - 2;
};


/*
 * Return true if the value of this Decimal is negative, otherwise return false.
 *
 */
P.isNegative = P.isneg = function () {
  return this.s < 0;
};


/*
 * Return true if the value of this Decimal is positive, otherwise return false.
 *
 */
P.isPositive = P.ispos = function () {
  return this.s > 0;
};


/*
 * Return true if the value of this Decimal is 0, otherwise return false.
 *
 */
P.isZero = function () {
  return this.s === 0;
};


/*
 * Return true if the value of this Decimal is less than `y`, otherwise return false.
 *
 */
P.lessThan = P.lt = function (y) {
  return this.cmp(y) < 0;
};


/*
 * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
 *
 */
P.lessThanOrEqualTo = P.lte = function (y) {
  return this.cmp(y) < 1;
};


/*
 * Return the logarithm of the value of this Decimal to the specified base, truncated to
 * `precision` significant digits.
 *
 * If no base is specified, return log[10](x).
 *
 * log[base](x) = ln(x) / ln(base)
 *
 * The maximum error of the result is 1 ulp (unit in the last place).
 *
 * [base] {number|string|Decimal} The base of the logarithm.
 *
 */
P.logarithm = P.log = function (base) {
  var r,
    x = this,
    Ctor = x.constructor,
    pr = Ctor.precision,
    wpr = pr + 5;

  // Default base is 10.
  if (base === void 0) {
    base = new Ctor(10);
  } else {
    base = new Ctor(base);

    // log[-b](x) = NaN
    // log[0](x)  = NaN
    // log[1](x)  = NaN
    if (base.s < 1 || base.eq(ONE)) throw Error(decimalError + 'NaN');
  }

  // log[b](-x) = NaN
  // log[b](0) = -Infinity
  if (x.s < 1) throw Error(decimalError + (x.s ? 'NaN' : '-Infinity'));

  // log[b](1) = 0
  if (x.eq(ONE)) return new Ctor(0);

  external = false;
  r = divide(ln(x, wpr), ln(base, wpr), wpr);
  external = true;

  return round(r, pr);
};


/*
 * Return a new Decimal whose value is the value of this Decimal minus `y`, truncated to
 * `precision` significant digits.
 *
 */
P.minus = P.sub = function (y) {
  var x = this;
  y = new x.constructor(y);
  return x.s == y.s ? subtract(x, y) : add(x, (y.s = -y.s, y));
};


/*
 * Return a new Decimal whose value is the value of this Decimal modulo `y`, truncated to
 * `precision` significant digits.
 *
 */
P.modulo = P.mod = function (y) {
  var q,
    x = this,
    Ctor = x.constructor,
    pr = Ctor.precision;

  y = new Ctor(y);

  // x % 0 = NaN
  if (!y.s) throw Error(decimalError + 'NaN');

  // Return x if x is 0.
  if (!x.s) return round(new Ctor(x), pr);

  // Prevent rounding of intermediate calculations.
  external = false;
  q = divide(x, y, 0, 1).times(y);
  external = true;

  return x.minus(q);
};


/*
 * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
 * i.e. the base e raised to the power the value of this Decimal, truncated to `precision`
 * significant digits.
 *
 */
P.naturalExponential = P.exp = function () {
  return exp(this);
};


/*
 * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
 * truncated to `precision` significant digits.
 *
 */
P.naturalLogarithm = P.ln = function () {
  return ln(this);
};


/*
 * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
 * -1.
 *
 */
P.negated = P.neg = function () {
  var x = new this.constructor(this);
  x.s = -x.s || 0;
  return x;
};


/*
 * Return a new Decimal whose value is the value of this Decimal plus `y`, truncated to
 * `precision` significant digits.
 *
 */
P.plus = P.add = function (y) {
  var x = this;
  y = new x.constructor(y);
  return x.s == y.s ? add(x, y) : subtract(x, (y.s = -y.s, y));
};


/*
 * Return the number of significant digits of the value of this Decimal.
 *
 * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
 *
 */
P.precision = P.sd = function (z) {
  var e, sd, w,
    x = this;

  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);

  e = getBase10Exponent(x) + 1;
  w = x.d.length - 1;
  sd = w * LOG_BASE + 1;
  w = x.d[w];

  // If non-zero...
  if (w) {

    // Subtract the number of trailing zeros of the last word.
    for (; w % 10 == 0; w /= 10) sd--;

    // Add the number of digits of the first word.
    for (w = x.d[0]; w >= 10; w /= 10) sd++;
  }

  return z && e > sd ? e : sd;
};


/*
 * Return a new Decimal whose value is the square root of this Decimal, truncated to `precision`
 * significant digits.
 *
 */
P.squareRoot = P.sqrt = function () {
  var e, n, pr, r, s, t, wpr,
    x = this,
    Ctor = x.constructor;

  // Negative or zero?
  if (x.s < 1) {
    if (!x.s) return new Ctor(0);

    // sqrt(-x) = NaN
    throw Error(decimalError + 'NaN');
  }

  e = getBase10Exponent(x);
  external = false;

  // Initial estimate.
  s = Math.sqrt(+x);

  // Math.sqrt underflow/overflow?
  // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(x.d);
    if ((n.length + e) % 2 == 0) n += '0';
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);

    if (s == 1 / 0) {
      n = '5e' + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf('e') + 1) + e;
    }

    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }

  pr = Ctor.precision;
  s = wpr = pr + 3;

  // Newton-Raphson iteration.
  for (;;) {
    t = r;
    r = t.plus(divide(x, t, wpr + 2)).times(0.5);

    if (digitsToString(t.d).slice(0, wpr) === (n = digitsToString(r.d)).slice(0, wpr)) {
      n = n.slice(wpr - 3, wpr + 1);

      // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
      // 4999, i.e. approaching a rounding boundary, continue the iteration.
      if (s == wpr && n == '4999') {

        // On the first iteration only, check to see if rounding up gives the exact result as the
        // nines may infinitely repeat.
        round(t, pr + 1, 0);

        if (t.times(t).eq(x)) {
          r = t;
          break;
        }
      } else if (n != '9999') {
        break;
      }

      wpr += 4;
    }
  }

  external = true;

  return round(r, pr);
};


/*
 * Return a new Decimal whose value is the value of this Decimal times `y`, truncated to
 * `precision` significant digits.
 *
 */
P.times = P.mul = function (y) {
  var carry, e, i, k, r, rL, t, xdL, ydL,
    x = this,
    Ctor = x.constructor,
    xd = x.d,
    yd = (y = new Ctor(y)).d;

  // Return 0 if either is 0.
  if (!x.s || !y.s) return new Ctor(0);

  y.s *= x.s;
  e = x.e + y.e;
  xdL = xd.length;
  ydL = yd.length;

  // Ensure xd points to the longer array.
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }

  // Initialise the result array with zeros.
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--;) r.push(0);

  // Multiply!
  for (i = ydL; --i >= 0;) {
    carry = 0;
    for (k = xdL + i; k > i;) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }

    r[k] = (r[k] + carry) % BASE | 0;
  }

  // Remove trailing zeros.
  for (; !r[--rL];) r.pop();

  if (carry) ++e;
  else r.shift();

  y.d = r;
  y.e = e;

  return external ? round(y, Ctor.precision) : y;
};


/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
 * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
 *
 * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
 *
 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toDecimalPlaces = P.todp = function (dp, rm) {
  var x = this,
    Ctor = x.constructor;

  x = new Ctor(x);
  if (dp === void 0) return x;

  checkInt32(dp, 0, MAX_DIGITS);

  if (rm === void 0) rm = Ctor.rounding;
  else checkInt32(rm, 0, 8);

  return round(x, dp + getBase10Exponent(x) + 1, rm);
};


/*
 * Return a string representing the value of this Decimal in exponential notation rounded to
 * `dp` fixed decimal places using rounding mode `rounding`.
 *
 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toExponential = function (dp, rm) {
  var str,
    x = this,
    Ctor = x.constructor;

  if (dp === void 0) {
    str = toString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    x = round(new Ctor(x), dp + 1, rm);
    str = toString(x, true, dp + 1);
  }

  return str;
};


/*
 * Return a string representing the value of this Decimal in normal (fixed-point) notation to
 * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
 * omitted.
 *
 * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
 *
 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 * (-0).toFixed(3) is '0.000'.
 * (-0.5).toFixed(0) is '-0'.
 *
 */
P.toFixed = function (dp, rm) {
  var str, y,
    x = this,
    Ctor = x.constructor;

  if (dp === void 0) return toString(x);

  checkInt32(dp, 0, MAX_DIGITS);

  if (rm === void 0) rm = Ctor.rounding;
  else checkInt32(rm, 0, 8);

  y = round(new Ctor(x), dp + getBase10Exponent(x) + 1, rm);
  str = toString(y.abs(), false, dp + getBase10Exponent(y) + 1);

  // To determine whether to add the minus sign look at the value before it was rounded,
  // i.e. look at `x` rather than `y`.
  return x.isneg() && !x.isZero() ? '-' + str : str;
};


/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
 * rounding mode `rounding`.
 *
 */
P.toInteger = P.toint = function () {
  var x = this,
    Ctor = x.constructor;
  return round(new Ctor(x), getBase10Exponent(x) + 1, Ctor.rounding);
};


/*
 * Return the value of this Decimal converted to a number primitive.
 *
 */
P.toNumber = function () {
  return +this;
};


/*
 * Return a new Decimal whose value is the value of this Decimal raised to the power `y`,
 * truncated to `precision` significant digits.
 *
 * For non-integer or very large exponents pow(x, y) is calculated using
 *
 *   x^y = exp(y*ln(x))
 *
 * The maximum error is 1 ulp (unit in last place).
 *
 * y {number|string|Decimal} The power to which to raise this Decimal.
 *
 */
P.toPower = P.pow = function (y) {
  var e, k, pr, r, sign, yIsInt,
    x = this,
    Ctor = x.constructor,
    guard = 12,
    yn = +(y = new Ctor(y));

  // pow(x, 0) = 1
  if (!y.s) return new Ctor(ONE);

  x = new Ctor(x);

  // pow(0, y > 0) = 0
  // pow(0, y < 0) = Infinity
  if (!x.s) {
    if (y.s < 1) throw Error(decimalError + 'Infinity');
    return x;
  }

  // pow(1, y) = 1
  if (x.eq(ONE)) return x;

  pr = Ctor.precision;

  // pow(x, 1) = x
  if (y.eq(ONE)) return round(x, pr);

  e = y.e;
  k = y.d.length - 1;
  yIsInt = e >= k;
  sign = x.s;

  if (!yIsInt) {

    // pow(x < 0, y non-integer) = NaN
    if (sign < 0) throw Error(decimalError + 'NaN');

  // If y is a small integer use the 'exponentiation by squaring' algorithm.
  } else if ((k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = new Ctor(ONE);

    // Max k of 9007199254740991 takes 53 loop iterations.
    // Maximum digits array length; leaves [28, 34] guard digits.
    e = Math.ceil(pr / LOG_BASE + 4);

    external = false;

    for (;;) {
      if (k % 2) {
        r = r.times(x);
        truncate(r.d, e);
      }

      k = mathfloor(k / 2);
      if (k === 0) break;

      x = x.times(x);
      truncate(x.d, e);
    }

    external = true;

    return y.s < 0 ? new Ctor(ONE).div(r) : round(r, pr);
  }

  // Result is negative if x is negative and the last digit of integer y is odd.
  sign = sign < 0 && y.d[Math.max(e, k)] & 1 ? -1 : 1;

  x.s = 1;
  external = false;
  r = y.times(ln(x, pr + guard));
  external = true;
  r = exp(r);
  r.s = sign;

  return r;
};


/*
 * Return a string representing the value of this Decimal rounded to `sd` significant digits
 * using rounding mode `rounding`.
 *
 * Return exponential notation if `sd` is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toPrecision = function (sd, rm) {
  var e, str,
    x = this,
    Ctor = x.constructor;

  if (sd === void 0) {
    e = getBase10Exponent(x);
    str = toString(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    x = round(new Ctor(x), sd, rm);
    e = getBase10Exponent(x);
    str = toString(x, sd <= e || e <= Ctor.toExpNeg, sd);
  }

  return str;
};


/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
 * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
 * omitted.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toSignificantDigits = P.tosd = function (sd, rm) {
  var x = this,
    Ctor = x.constructor;

  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
  }

  return round(new Ctor(x), sd, rm);
};


/*
 * Return a string representing the value of this Decimal.
 *
 * Return exponential notation if this Decimal has a positive exponent equal to or greater than
 * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
 *
 */
P.toString = P.valueOf = P.val = P.toJSON = P[Symbol.for('nodejs.util.inspect.custom')] = function () {
  var x = this,
    e = getBase10Exponent(x),
    Ctor = x.constructor;

  return toString(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
};


// Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.


/*
 *  add                 P.minus, P.plus
 *  checkInt32          P.todp, P.toExponential, P.toFixed, P.toPrecision, P.tosd
 *  digitsToString      P.log, P.sqrt, P.pow, toString, exp, ln
 *  divide              P.div, P.idiv, P.log, P.mod, P.sqrt, exp, ln
 *  exp                 P.exp, P.pow
 *  getBase10Exponent   P.exponent, P.sd, P.toint, P.sqrt, P.todp, P.toFixed, P.toPrecision,
 *                      P.toString, divide, round, toString, exp, ln
 *  getLn10             P.log, ln
 *  getZeroString       digitsToString, toString
 *  ln                  P.log, P.ln, P.pow, exp
 *  parseDecimal        Decimal
 *  round               P.abs, P.idiv, P.log, P.minus, P.mod, P.neg, P.plus, P.toint, P.sqrt,
 *                      P.times, P.todp, P.toExponential, P.toFixed, P.pow, P.toPrecision, P.tosd,
 *                      divide, getLn10, exp, ln
 *  subtract            P.minus, P.plus
 *  toString            P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf
 *  truncate            P.pow
 *
 *  Throws:             P.log, P.mod, P.sd, P.sqrt, P.pow,  checkInt32, divide, round,
 *                      getLn10, exp, ln, parseDecimal, Decimal, config
 */


function add(x, y) {
  var carry, d, e, i, k, len, xd, yd,
    Ctor = x.constructor,
    pr = Ctor.precision;

  // If either is zero...
  if (!x.s || !y.s) {

    // Return x if y is zero.
    // Return y if y is non-zero.
    if (!y.s) y = new Ctor(x);
    return external ? round(y, pr) : y;
  }

  xd = x.d;
  yd = y.d;

  // x and y are finite, non-zero numbers with the same sign.

  k = x.e;
  e = y.e;
  xd = xd.slice();
  i = k - e;

  // If base 1e7 exponents differ...
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }

    // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;

    if (i > len) {
      i = len;
      d.length = 1;
    }

    // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
    d.reverse();
    for (; i--;) d.push(0);
    d.reverse();
  }

  len = xd.length;
  i = yd.length;

  // If yd is longer than xd, swap xd and yd so xd points to the longer array.
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }

  // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
  for (carry = 0; i;) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }

  if (carry) {
    xd.unshift(carry);
    ++e;
  }

  // Remove trailing zeros.
  // No need to check for zero, as +x + +y != 0 && -x + -y != 0
  for (len = xd.length; xd[--len] == 0;) xd.pop();

  y.d = xd;
  y.e = e;

  return external ? round(y, pr) : y;
}


function checkInt32(i, min, max) {
  if (i !== ~~i || i < min || i > max) {
    throw Error(invalidArgument + i);
  }
}


function digitsToString(d) {
  var i, k, ws,
    indexOfLastWord = d.length - 1,
    str = '',
    w = d[0];

  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + '';
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
      str += ws;
    }

    w = d[i];
    ws = w + '';
    k = LOG_BASE - ws.length;
    if (k) str += getZeroString(k);
  } else if (w === 0) {
    return '0';
  }

  // Remove trailing zeros of last w.
  for (; w % 10 === 0;) w /= 10;

  return str + w;
}


var divide = (function () {

  // Assumes non-zero x and k, and hence non-zero result.
  function multiplyInteger(x, k) {
    var temp,
      carry = 0,
      i = x.length;

    for (x = x.slice(); i--;) {
      temp = x[i] * k + carry;
      x[i] = temp % BASE | 0;
      carry = temp / BASE | 0;
    }

    if (carry) x.unshift(carry);

    return x;
  }

  function compare(a, b, aL, bL) {
    var i, r;

    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }

    return r;
  }

  function subtract(a, b, aL) {
    var i = 0;

    // Subtract b from a.
    for (; aL--;) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * BASE + a[aL] - b[aL];
    }

    // Remove leading zeros.
    for (; !a[0] && a.length > 1;) a.shift();
  }

  return function (x, y, pr, dp) {
    var cmp, e, i, k, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz,
      Ctor = x.constructor,
      sign = x.s == y.s ? 1 : -1,
      xd = x.d,
      yd = y.d;

    // Either 0?
    if (!x.s) return new Ctor(x);
    if (!y.s) throw Error(decimalError + 'Division by zero');

    e = x.e - y.e;
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign);
    qd = q.d = [];

    // Result exponent may be one less than e.
    for (i = 0; yd[i] == (xd[i] || 0); ) ++i;
    if (yd[i] > (xd[i] || 0)) --e;

    if (pr == null) {
      sd = pr = Ctor.precision;
    } else if (dp) {
      sd = pr + (getBase10Exponent(x) - getBase10Exponent(y)) + 1;
    } else {
      sd = pr;
    }

    if (sd < 0) return new Ctor(0);

    // Convert precision in number of base 10 digits to base 1e7 digits.
    sd = sd / LOG_BASE + 2 | 0;
    i = 0;

    // divisor < 1e7
    if (yL == 1) {
      k = 0;
      yd = yd[0];
      sd++;

      // k is the carry.
      for (; (i < xL || k) && sd--; i++) {
        t = k * BASE + (xd[i] || 0);
        qd[i] = t / yd | 0;
        k = t % yd | 0;
      }

    // divisor >= 1e7
    } else {

      // Normalise xd and yd so highest order digit of yd is >= BASE/2
      k = BASE / (yd[0] + 1) | 0;

      if (k > 1) {
        yd = multiplyInteger(yd, k);
        xd = multiplyInteger(xd, k);
        yL = yd.length;
        xL = xd.length;
      }

      xi = yL;
      rem = xd.slice(0, yL);
      remL = rem.length;

      // Add zeros to make remainder as long as divisor.
      for (; remL < yL;) rem[remL++] = 0;

      yz = yd.slice();
      yz.unshift(0);
      yd0 = yd[0];

      if (yd[1] >= BASE / 2) ++yd0;

      do {
        k = 0;

        // Compare divisor and remainder.
        cmp = compare(yd, rem, yL, remL);

        // If divisor < remainder.
        if (cmp < 0) {

          // Calculate trial digit, k.
          rem0 = rem[0];
          if (yL != remL) rem0 = rem0 * BASE + (rem[1] || 0);

          // k will be how many times the divisor goes into the current remainder.
          k = rem0 / yd0 | 0;

          //  Algorithm:
          //  1. product = divisor * trial digit (k)
          //  2. if product > remainder: product -= divisor, k--
          //  3. remainder -= product
          //  4. if product was < remainder at 2:
          //    5. compare new remainder and divisor
          //    6. If remainder > divisor: remainder -= divisor, k++

          if (k > 1) {
            if (k >= BASE) k = BASE - 1;

            // product = divisor * trial digit.
            prod = multiplyInteger(yd, k);
            prodL = prod.length;
            remL = rem.length;

            // Compare product and remainder.
            cmp = compare(prod, rem, prodL, remL);

            // product > remainder.
            if (cmp == 1) {
              k--;

              // Subtract divisor from product.
              subtract(prod, yL < prodL ? yz : yd, prodL);
            }
          } else {

            // cmp is -1.
            // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
            // to avoid it. If k is 1 there is a need to compare yd and rem again below.
            if (k == 0) cmp = k = 1;
            prod = yd.slice();
          }

          prodL = prod.length;
          if (prodL < remL) prod.unshift(0);

          // Subtract product from remainder.
          subtract(rem, prod, remL);

          // If product was < previous remainder.
          if (cmp == -1) {
            remL = rem.length;

            // Compare divisor and new remainder.
            cmp = compare(yd, rem, yL, remL);

            // If divisor < new remainder, subtract divisor from remainder.
            if (cmp < 1) {
              k++;

              // Subtract divisor from remainder.
              subtract(rem, yL < remL ? yz : yd, remL);
            }
          }

          remL = rem.length;
        } else if (cmp === 0) {
          k++;
          rem = [0];
        }    // if cmp === 1, k will be 0

        // Add the next digit, k, to the result array.
        qd[i++] = k;

        // Update the remainder.
        if (cmp && rem[0]) {
          rem[remL++] = xd[xi] || 0;
        } else {
          rem = [xd[xi]];
          remL = 1;
        }

      } while ((xi++ < xL || rem[0] !== void 0) && sd--);
    }

    // Leading zero?
    if (!qd[0]) qd.shift();

    q.e = e;

    return round(q, dp ? pr + getBase10Exponent(q) + 1 : pr);
  };
})();


/*
 * Return a new Decimal whose value is the natural exponential of `x` truncated to `sd`
 * significant digits.
 *
 * Taylor/Maclaurin series.
 *
 * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
 *
 * Argument reduction:
 *   Repeat x = x / 32, k += 5, until |x| < 0.1
 *   exp(x) = exp(x / 2^k)^(2^k)
 *
 * Previously, the argument was initially reduced by
 * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
 * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
 * found to be slower than just dividing repeatedly by 32 as above.
 *
 * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
 *
 *  exp(x) is non-terminating for any finite, non-zero x.
 *
 */
function exp(x, sd) {
  var denominator, guard, pow, sum, t, wpr,
    i = 0,
    k = 0,
    Ctor = x.constructor,
    pr = Ctor.precision;

  if (getBase10Exponent(x) > 16) throw Error(exponentOutOfRange + getBase10Exponent(x));

  // exp(0) = 1
  if (!x.s) return new Ctor(ONE);

  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }

  t = new Ctor(0.03125);

  while (x.abs().gte(0.1)) {
    x = x.times(t);    // x = x / 2^5
    k += 5;
  }

  // Estimate the precision increase necessary to ensure the first 4 rounding digits are correct.
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow = sum = new Ctor(ONE);
  Ctor.precision = wpr;

  for (;;) {
    pow = round(pow.times(x), wpr);
    denominator = denominator.times(++i);
    t = sum.plus(divide(pow, denominator, wpr));

    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      while (k--) sum = round(sum.times(sum), wpr);
      Ctor.precision = pr;
      return sd == null ? (external = true, round(sum, pr)) : sum;
    }

    sum = t;
  }
}


// Calculate the base 10 exponent from the base 1e7 exponent.
function getBase10Exponent(x) {
  var e = x.e * LOG_BASE,
    w = x.d[0];

  // Add the number of digits of the first word of the digits array.
  for (; w >= 10; w /= 10) e++;
  return e;
}


function getLn10(Ctor, sd, pr) {

  if (sd > Ctor.LN10.sd()) {


    // Reset global state in case the exception is caught.
    external = true;
    if (pr) Ctor.precision = pr;
    throw Error(decimalError + 'LN10 precision limit exceeded');
  }

  return round(new Ctor(Ctor.LN10), sd);
}


function getZeroString(k) {
  var zs = '';
  for (; k--;) zs += '0';
  return zs;
}


/*
 * Return a new Decimal whose value is the natural logarithm of `x` truncated to `sd` significant
 * digits.
 *
 *  ln(n) is non-terminating (n != 1)
 *
 */
function ln(y, sd) {
  var c, c0, denominator, e, numerator, sum, t, wpr, x2,
    n = 1,
    guard = 10,
    x = y,
    xd = x.d,
    Ctor = x.constructor,
    pr = Ctor.precision;

  // ln(-x) = NaN
  // ln(0) = -Infinity
  if (x.s < 1) throw Error(decimalError + (x.s ? 'NaN' : '-Infinity'));

  // ln(1) = 0
  if (x.eq(ONE)) return new Ctor(0);

  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }

  if (x.eq(10)) {
    if (sd == null) external = true;
    return getLn10(Ctor, wpr);
  }

  wpr += guard;
  Ctor.precision = wpr;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  e = getBase10Exponent(x);

  if (Math.abs(e) < 1.5e15) {

    // Argument reduction.
    // The series converges faster the closer the argument is to 1, so using
    // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
    // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
    // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
    // later be divided by this number, then separate out the power of 10 using
    // ln(a*10^b) = ln(a) + b*ln(10).

    // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
    //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
    // max n is 6 (gives 0.7 - 1.3)
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }

    e = getBase10Exponent(x);

    if (c0 > 1) {
      x = new Ctor('0.' + c);
      e++;
    } else {
      x = new Ctor(c0 + '.' + c.slice(1));
    }
  } else {

    // The argument reduction method above may result in overflow if the argument y is a massive
    // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
    // function using ln(x*10^e) = ln(x) + e*ln(10).
    t = getLn10(Ctor, wpr + 2, pr).times(e + '');
    x = ln(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);

    Ctor.precision = pr;
    return sd == null ? (external = true, round(x, pr)) : x;
  }

  // x is reduced to a value near 1.

  // Taylor series.
  // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
  // where x = (y - 1)/(y + 1)    (|x| < 1)
  sum = numerator = x = divide(x.minus(ONE), x.plus(ONE), wpr);
  x2 = round(x.times(x), wpr);
  denominator = 3;

  for (;;) {
    numerator = round(numerator.times(x2), wpr);
    t = sum.plus(divide(numerator, new Ctor(denominator), wpr));

    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      sum = sum.times(2);

      // Reverse the argument reduction.
      if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
      sum = divide(sum, new Ctor(n), wpr);

      Ctor.precision = pr;
      return sd == null ? (external = true, round(sum, pr)) : sum;
    }

    sum = t;
    denominator += 2;
  }
}


/*
 * Parse the value of a new Decimal `x` from string `str`.
 */
function parseDecimal(x, str) {
  var e, i, len;

  // Decimal point?
  if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

  // Exponential form?
  if ((i = str.search(/e/i)) > 0) {

    // Determine exponent.
    if (e < 0) e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {

    // Integer.
    e = str.length;
  }

  // Determine leading zeros.
  for (i = 0; str.charCodeAt(i) === 48;) ++i;

  // Determine trailing zeros.
  for (len = str.length; str.charCodeAt(len - 1) === 48;) --len;
  str = str.slice(i, len);

  if (str) {
    len -= i;
    e = e - i - 1;
    x.e = mathfloor(e / LOG_BASE);
    x.d = [];

    // Transform base

    // e is the base 10 exponent.
    // i is where to slice str to get the first word of the digits array.
    i = (e + 1) % LOG_BASE;
    if (e < 0) i += LOG_BASE;

    if (i < len) {
      if (i) x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }

    for (; i--;) str += '0';
    x.d.push(+str);

    if (external && (x.e > MAX_E || x.e < -MAX_E)) throw Error(exponentOutOfRange + e);
  } else {

    // Zero.
    x.s = 0;
    x.e = 0;
    x.d = [0];
  }

  return x;
}


/*
 * Round `x` to `sd` significant digits, using rounding mode `rm` if present (truncate otherwise).
 */
 function round(x, sd, rm) {
  var i, j, k, n, rd, doRound, w, xdi,
    xd = x.d;

  // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
  // w: the word of xd which contains the rounding digit, a base 1e7 number.
  // xdi: the index of w within xd.
  // n: the number of digits of w.
  // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
  // they had leading zeros)
  // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).

  // Get the length of the first word of the digits array xd.
  for (n = 1, k = xd[0]; k >= 10; k /= 10) n++;
  i = sd - n;

  // Is the rounding digit in the first word of xd?
  if (i < 0) {
    i += LOG_BASE;
    j = sd;
    w = xd[xdi = 0];
  } else {
    xdi = Math.ceil((i + 1) / LOG_BASE);
    k = xd.length;
    if (xdi >= k) return x;
    w = k = xd[xdi];

    // Get the number of digits of w.
    for (n = 1; k >= 10; k /= 10) n++;

    // Get the index of rd within w.
    i %= LOG_BASE;

    // Get the index of rd within w, adjusted for leading zeros.
    // The number of leading zeros of w is given by LOG_BASE - n.
    j = i - LOG_BASE + n;
  }

  if (rm !== void 0) {
    k = mathpow(10, n - j - 1);

    // Get the rounding digit at index j of w.
    rd = w / k % 10 | 0;

    // Are there any non-zero digits after the rounding digit?
    doRound = sd < 0 || xd[xdi + 1] !== void 0 || w % k;

    // The expression `w % mathpow(10, n - j - 1)` returns all the digits of w to the right of the
    // digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression will give
    // 714.

    doRound = rm < 4
      ? (rd || doRound) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
      : rd > 5 || rd == 5 && (rm == 4 || doRound || rm == 6 &&

        // Check whether the digit to the left of the rounding digit is odd.
        ((i > 0 ? j > 0 ? w / mathpow(10, n - j) : 0 : xd[xdi - 1]) % 10) & 1 ||
          rm == (x.s < 0 ? 8 : 7));
  }

  if (sd < 1 || !xd[0]) {
    if (doRound) {
      k = getBase10Exponent(x);
      xd.length = 1;

      // Convert sd to decimal places.
      sd = sd - k - 1;

      // 1, 0.1, 0.01, 0.001, 0.0001 etc.
      xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
      x.e = mathfloor(-sd / LOG_BASE) || 0;
    } else {
      xd.length = 1;

      // Zero.
      xd[0] = x.e = x.s = 0;
    }

    return x;
  }

  // Remove excess digits.
  if (i == 0) {
    xd.length = xdi;
    k = 1;
    xdi--;
  } else {
    xd.length = xdi + 1;
    k = mathpow(10, LOG_BASE - i);

    // E.g. 56700 becomes 56000 if 7 is the rounding digit.
    // j > 0 means i > number of leading zeros of w.
    xd[xdi] = j > 0 ? (w / mathpow(10, n - j) % mathpow(10, j) | 0) * k : 0;
  }

  if (doRound) {
    for (;;) {

      // Is the digit to be rounded up in the first word of xd?
      if (xdi == 0) {
        if ((xd[0] += k) == BASE) {
          xd[0] = 1;
          ++x.e;
        }

        break;
      } else {
        xd[xdi] += k;
        if (xd[xdi] != BASE) break;
        xd[xdi--] = 0;
        k = 1;
      }
    }
  }

  // Remove trailing zeros.
  for (i = xd.length; xd[--i] === 0;) xd.pop();

  if (external && (x.e > MAX_E || x.e < -MAX_E)) {
    throw Error(exponentOutOfRange + getBase10Exponent(x));
  }

  return x;
}


function subtract(x, y) {
  var d, e, i, j, k, len, xd, xe, xLTy, yd,
    Ctor = x.constructor,
    pr = Ctor.precision;

  // Return y negated if x is zero.
  // Return x if y is zero and x is non-zero.
  if (!x.s || !y.s) {
    if (y.s) y.s = -y.s;
    else y = new Ctor(x);
    return external ? round(y, pr) : y;
  }

  xd = x.d;
  yd = y.d;

  // x and y are non-zero numbers with the same sign.

  e = y.e;
  xe = x.e;
  xd = xd.slice();
  k = xe - e;

  // If exponents differ...
  if (k) {
    xLTy = k < 0;

    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }

    // Numbers with massively different exponents would result in a very high number of zeros
    // needing to be prepended, but this can be avoided while still ensuring correct rounding by
    // limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;

    if (k > i) {
      k = i;
      d.length = 1;
    }

    // Prepend zeros to equalise exponents.
    d.reverse();
    for (i = k; i--;) d.push(0);
    d.reverse();

  // Base 1e7 exponents equal.
  } else {

    // Check digits to determine which is the bigger number.

    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy) len = i;

    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }

    k = 0;
  }

  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }

  len = xd.length;

  // Append zeros to xd if shorter.
  // Don't add zeros to yd if shorter as subtraction only needs to start at yd length.
  for (i = yd.length - len; i > 0; --i) xd[len++] = 0;

  // Subtract yd from xd.
  for (i = yd.length; i > k;) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }

    xd[i] -= yd[i];
  }

  // Remove trailing zeros.
  for (; xd[--len] === 0;) xd.pop();

  // Remove leading zeros and adjust exponent accordingly.
  for (; xd[0] === 0; xd.shift()) --e;

  // Zero?
  if (!xd[0]) return new Ctor(0);

  y.d = xd;
  y.e = e;

  //return external && xd.length >= pr / LOG_BASE ? round(y, pr) : y;
  return external ? round(y, pr) : y;
}


function toString(x, isExp, sd) {
  var k,
    e = getBase10Exponent(x),
    str = digitsToString(x.d),
    len = str.length;

  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + '.' + str.slice(1);
    }

    str = str + (e < 0 ? 'e' : 'e+') + e;
  } else if (e < 0) {
    str = '0.' + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0) str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
  } else {
    if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len) str += '.';
      str += getZeroString(k);
    }
  }

  return x.s < 0 ? '-' + str : str;
}


// Does not strip trailing zeros.
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}


// Decimal methods


/*
 *  clone
 *  config/set
 */


/*
 * Create and return a Decimal constructor with the same configuration properties as this Decimal
 * constructor.
 *
 */
function clone(obj) {
  var i, p, ps;

  /*
   * The Decimal constructor and exported function.
   * Return a new Decimal instance.
   *
   * value {number|string|Decimal} A numeric value.
   *
   */
  function Decimal(value) {
    var x = this;

    // Decimal called without new.
    if (!(x instanceof Decimal)) return new Decimal(value);

    // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
    // which points to Object.
    x.constructor = Decimal;

    // Duplicate.
    if (value instanceof Decimal) {
      x.s = value.s;
      x.e = value.e;
      x.d = (value = value.d) ? value.slice() : value;
      return;
    }

    if (typeof value === 'number') {

      // Reject Infinity/NaN.
      if (value * 0 !== 0) {
        throw Error(invalidArgument + value);
      }

      if (value > 0) {
        x.s = 1;
      } else if (value < 0) {
        value = -value;
        x.s = -1;
      } else {
        x.s = 0;
        x.e = 0;
        x.d = [0];
        return;
      }

      // Fast path for small integers.
      if (value === ~~value && value < 1e7) {
        x.e = 0;
        x.d = [value];
        return;
      }

      return parseDecimal(x, value.toString());
    } else if (typeof value !== 'string') {
      throw Error(invalidArgument + value);
    }

    // Minus sign?
    if (value.charCodeAt(0) === 45) {
      value = value.slice(1);
      x.s = -1;
    } else {
      x.s = 1;
    }

    if (isDecimal.test(value)) parseDecimal(x, value);
    else throw Error(invalidArgument + value);
  }

  Decimal.prototype = P;

  Decimal.ROUND_UP = 0;
  Decimal.ROUND_DOWN = 1;
  Decimal.ROUND_CEIL = 2;
  Decimal.ROUND_FLOOR = 3;
  Decimal.ROUND_HALF_UP = 4;
  Decimal.ROUND_HALF_DOWN = 5;
  Decimal.ROUND_HALF_EVEN = 6;
  Decimal.ROUND_HALF_CEIL = 7;
  Decimal.ROUND_HALF_FLOOR = 8;

  Decimal.clone = clone;
  Decimal.config = Decimal.set = config;

  if (obj === void 0) obj = {};
  if (obj) {
    ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'];
    for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
  }

  Decimal.config(obj);

  return Decimal;
}


/*
 * Configure global settings for a Decimal constructor.
 *
 * `obj` is an object with one or more of the following properties,
 *
 *   precision  {number}
 *   rounding   {number}
 *   toExpNeg   {number}
 *   toExpPos   {number}
 *
 * E.g. Decimal.config({ precision: 20, rounding: 4 })
 *
 */
function config(obj) {
  if (!obj || typeof obj !== 'object') {
    throw Error(decimalError + 'Object expected');
  }
  var i, p, v,
    ps = [
      'precision', 1, MAX_DIGITS,
      'rounding', 0, 8,
      'toExpNeg', -1 / 0, 0,
      'toExpPos', 0, 1 / 0
    ];

  for (i = 0; i < ps.length; i += 3) {
    if ((v = obj[p = ps[i]]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
      else throw Error(invalidArgument + p + ': ' + v);
    }
  }

  if ((v = obj[p = 'LN10']) !== void 0) {
      if (v == Math.LN10) this[p] = new this(v);
      else throw Error(invalidArgument + p + ': ' + v);
  }

  return this;
}


// Create and configure initial Decimal constructor.
var Decimal = clone(defaults);

// Internal constant.
ONE = new Decimal(1);

const Decimal$1 = Decimal;

function _toConsumableArray$6(arr) { return _arrayWithoutHoles$6(arr) || _iterableToArray$6(arr) || _unsupportedIterableToArray$8(arr) || _nonIterableSpread$6(); }

function _nonIterableSpread$6() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$8(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$8(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$8(o, minLen); }

function _iterableToArray$6(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$6(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$8(arr); }

function _arrayLikeToArray$8(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var identity$3 = function identity(i) {
  return i;
};

var PLACE_HOLDER = {
  '@@functional/placeholder': true
};

var isPlaceHolder = function isPlaceHolder(val) {
  return val === PLACE_HOLDER;
};

var curry0 = function curry0(fn) {
  return function _curried() {
    if (arguments.length === 0 || arguments.length === 1 && isPlaceHolder(arguments.length <= 0 ? undefined : arguments[0])) {
      return _curried;
    }

    return fn.apply(void 0, arguments);
  };
};

var curryN = function curryN(n, fn) {
  if (n === 1) {
    return fn;
  }

  return curry0(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsLength = args.filter(function (arg) {
      return arg !== PLACE_HOLDER;
    }).length;

    if (argsLength >= n) {
      return fn.apply(void 0, args);
    }

    return curryN(n - argsLength, curry0(function () {
      for (var _len2 = arguments.length, restArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        restArgs[_key2] = arguments[_key2];
      }

      var newArgs = args.map(function (arg) {
        return isPlaceHolder(arg) ? restArgs.shift() : arg;
      });
      return fn.apply(void 0, _toConsumableArray$6(newArgs).concat(restArgs));
    }));
  });
};

var curry = function curry(fn) {
  return curryN(fn.length, fn);
};
var range$1 = function range(begin, end) {
  var arr = [];

  for (var i = begin; i < end; ++i) {
    arr[i - begin] = i;
  }

  return arr;
};
var map$1 = curry(function (fn, arr) {
  if (Array.isArray(arr)) {
    return arr.map(fn);
  }

  return Object.keys(arr).map(function (key) {
    return arr[key];
  }).map(fn);
});
var compose = function compose() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (!args.length) {
    return identity$3;
  }

  var fns = args.reverse(); // first function can receive multiply arguments

  var firstFn = fns[0];
  var tailsFn = fns.slice(1);
  return function () {
    return tailsFn.reduce(function (res, fn) {
      return fn(res);
    }, firstFn.apply(void 0, arguments));
  };
};
var reverse = function reverse(arr) {
  if (Array.isArray(arr)) {
    return arr.reverse();
  } // can be string


  return arr.split('').reverse.join('');
};
var memoize = function memoize(fn) {
  var lastArgs = null;
  var lastResult = null;
  return function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    if (lastArgs && args.every(function (val, i) {
      return val === lastArgs[i];
    })) {
      return lastResult;
    }

    lastArgs = args;
    lastResult = fn.apply(void 0, args);
    return lastResult;
  };
};

/**
 * @fileOverview 一些公用的运算方法
 * @author xile611
 * @date 2015-09-17
 */
/**
 * 获取数值的位数
 * 其中绝对值属于区间[0.1, 1)， 得到的值为0
 * 绝对值属于区间[0.01, 0.1)，得到的位数为 -1
 * 绝对值属于区间[0.001, 0.01)，得到的位数为 -2
 *
 * @param  {Number} value 数值
 * @return {Integer} 位数
 */

function getDigitCount(value) {
  var result;

  if (value === 0) {
    result = 1;
  } else {
    result = Math.floor(new Decimal$1(value).abs().log(10).toNumber()) + 1;
  }

  return result;
}
/**
 * 按照固定的步长获取[start, end)这个区间的数据
 * 并且需要处理js计算精度的问题
 *
 * @param  {Decimal} start 起点
 * @param  {Decimal} end   终点，不包含该值
 * @param  {Decimal} step  步长
 * @return {Array}         若干数值
 */


function rangeStep(start, end, step) {
  var num = new Decimal$1(start);
  var i = 0;
  var result = []; // magic number to prevent infinite loop

  while (num.lt(end) && i < 100000) {
    result.push(num.toNumber());
    num = num.add(step);
    i++;
  }

  return result;
}
/**
 * 对数值进行线性插值
 *
 * @param  {Number} a  定义域的极点
 * @param  {Number} b  定义域的极点
 * @param  {Number} t  [0, 1]内的某个值
 * @return {Number}    定义域内的某个值
 */


var interpolateNumber$1 = curry(function (a, b, t) {
  var newA = +a;
  var newB = +b;
  return newA + t * (newB - newA);
});
/**
 * 线性插值的逆运算
 *
 * @param  {Number} a 定义域的极点
 * @param  {Number} b 定义域的极点
 * @param  {Number} x 可以认为是插值后的一个输出值
 * @return {Number}   当x在 a ~ b这个范围内时，返回值属于[0, 1]
 */

var uninterpolateNumber = curry(function (a, b, x) {
  var diff = b - +a;
  diff = diff || Infinity;
  return (x - a) / diff;
});
/**
 * 线性插值的逆运算，并且有截断的操作
 *
 * @param  {Number} a 定义域的极点
 * @param  {Number} b 定义域的极点
 * @param  {Number} x 可以认为是插值后的一个输出值
 * @return {Number}   当x在 a ~ b这个区间内时，返回值属于[0, 1]，
 * 当x不在 a ~ b这个区间时，会截断到 a ~ b 这个区间
 */

var uninterpolateTruncation = curry(function (a, b, x) {
  var diff = b - +a;
  diff = diff || Infinity;
  return Math.max(0, Math.min(1, (x - a) / diff));
});
const Arithmetic = {
  rangeStep: rangeStep,
  getDigitCount: getDigitCount,
  interpolateNumber: interpolateNumber$1,
  uninterpolateNumber: uninterpolateNumber,
  uninterpolateTruncation: uninterpolateTruncation
};

function _toConsumableArray$5(arr) { return _arrayWithoutHoles$5(arr) || _iterableToArray$5(arr) || _unsupportedIterableToArray$7(arr) || _nonIterableSpread$5(); }

function _nonIterableSpread$5() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray$5(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$5(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$7(arr); }

function _slicedToArray$3(arr, i) { return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$7(arr, i) || _nonIterableRest$3(); }

function _nonIterableRest$3() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$7(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$7(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$7(o, minLen); }

function _arrayLikeToArray$7(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$3(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$3(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Calculate a interval of a minimum value and a maximum value
 *
 * @param  {Number} min       The minimum value
 * @param  {Number} max       The maximum value
 * @return {Array} An interval
 */

function getValidInterval(_ref) {
  var _ref2 = _slicedToArray$3(_ref, 2),
      min = _ref2[0],
      max = _ref2[1];

  var validMin = min,
      validMax = max; // exchange

  if (min > max) {
    validMin = max;
    validMax = min;
  }

  return [validMin, validMax];
}
/**
 * Calculate the step which is easy to understand between ticks, like 10, 20, 25
 *
 * @param  {Decimal} roughStep        The rough step calculated by deviding the
 * difference by the tickCount
 * @param  {Boolean} allowDecimals    Allow the ticks to be decimals or not
 * @param  {Integer} correctionFactor A correction factor
 * @return {Decimal} The step which is easy to understand between two ticks
 */


function getFormatStep(roughStep, allowDecimals, correctionFactor) {
  if (roughStep.lte(0)) {
    return new Decimal$1(0);
  }

  var digitCount = Arithmetic.getDigitCount(roughStep.toNumber()); // The ratio between the rough step and the smallest number which has a bigger
  // order of magnitudes than the rough step

  var digitCountValue = new Decimal$1(10).pow(digitCount);
  var stepRatio = roughStep.div(digitCountValue); // When an integer and a float multiplied, the accuracy of result may be wrong

  var stepRatioScale = digitCount !== 1 ? 0.05 : 0.1;
  var amendStepRatio = new Decimal$1(Math.ceil(stepRatio.div(stepRatioScale).toNumber())).add(correctionFactor).mul(stepRatioScale);
  var formatStep = amendStepRatio.mul(digitCountValue);
  return allowDecimals ? formatStep : new Decimal$1(Math.ceil(formatStep));
}
/**
 * calculate the ticks when the minimum value equals to the maximum value
 *
 * @param  {Number}  value         The minimum valuue which is also the maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}                 ticks
 */


function getTickOfSingleValue(value, tickCount, allowDecimals) {
  var step = 1; // calculate the middle value of ticks

  var middle = new Decimal$1(value);

  if (!middle.isint() && allowDecimals) {
    var absVal = Math.abs(value);

    if (absVal < 1) {
      // The step should be a float number when the difference is smaller than 1
      step = new Decimal$1(10).pow(Arithmetic.getDigitCount(value) - 1);
      middle = new Decimal$1(Math.floor(middle.div(step).toNumber())).mul(step);
    } else if (absVal > 1) {
      // Return the maximum integer which is smaller than 'value' when 'value' is greater than 1
      middle = new Decimal$1(Math.floor(value));
    }
  } else if (value === 0) {
    middle = new Decimal$1(Math.floor((tickCount - 1) / 2));
  } else if (!allowDecimals) {
    middle = new Decimal$1(Math.floor(value));
  }

  var middleIndex = Math.floor((tickCount - 1) / 2);
  var fn = compose(map$1(function (n) {
    return middle.add(new Decimal$1(n - middleIndex).mul(step)).toNumber();
  }), range$1);
  return fn(0, tickCount);
}
/**
 * Calculate the step
 *
 * @param  {Number}  min              The minimum value of an interval
 * @param  {Number}  max              The maximum value of an interval
 * @param  {Integer} tickCount        The count of ticks
 * @param  {Boolean} allowDecimals    Allow the ticks to be decimals or not
 * @param  {Number}  correctionFactor A correction factor
 * @return {Object}  The step, minimum value of ticks, maximum value of ticks
 */


function calculateStep(min, max, tickCount, allowDecimals) {
  var correctionFactor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  // dirty hack (for recharts' test)
  if (!Number.isFinite((max - min) / (tickCount - 1))) {
    return {
      step: new Decimal$1(0),
      tickMin: new Decimal$1(0),
      tickMax: new Decimal$1(0)
    };
  } // The step which is easy to understand between two ticks


  var step = getFormatStep(new Decimal$1(max).sub(min).div(tickCount - 1), allowDecimals, correctionFactor); // A medial value of ticks

  var middle; // When 0 is inside the interval, 0 should be a tick

  if (min <= 0 && max >= 0) {
    middle = new Decimal$1(0);
  } else {
    // calculate the middle value
    middle = new Decimal$1(min).add(max).div(2); // minus modulo value

    middle = middle.sub(new Decimal$1(middle).mod(step));
  }

  var belowCount = Math.ceil(middle.sub(min).div(step).toNumber());
  var upCount = Math.ceil(new Decimal$1(max).sub(middle).div(step).toNumber());
  var scaleCount = belowCount + upCount + 1;

  if (scaleCount > tickCount) {
    // When more ticks need to cover the interval, step should be bigger.
    return calculateStep(min, max, tickCount, allowDecimals, correctionFactor + 1);
  }

  if (scaleCount < tickCount) {
    // When less ticks can cover the interval, we should add some additional ticks
    upCount = max > 0 ? upCount + (tickCount - scaleCount) : upCount;
    belowCount = max > 0 ? belowCount : belowCount + (tickCount - scaleCount);
  }

  return {
    step: step,
    tickMin: middle.sub(new Decimal$1(belowCount).mul(step)),
    tickMax: middle.add(new Decimal$1(upCount).mul(step))
  };
}
/**
 * Calculate the ticks of an interval, the count of ticks will be guraranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */


function getNiceTickValuesFn(_ref3) {
  var _ref4 = _slicedToArray$3(_ref3, 2),
      min = _ref4[0],
      max = _ref4[1];

  var tickCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  var allowDecimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  // More than two ticks should be return
  var count = Math.max(tickCount, 2);

  var _getValidInterval = getValidInterval([min, max]),
      _getValidInterval2 = _slicedToArray$3(_getValidInterval, 2),
      cormin = _getValidInterval2[0],
      cormax = _getValidInterval2[1];

  if (cormin === -Infinity || cormax === Infinity) {
    var _values = cormax === Infinity ? [cormin].concat(_toConsumableArray$5(range$1(0, tickCount - 1).map(function () {
      return Infinity;
    }))) : [].concat(_toConsumableArray$5(range$1(0, tickCount - 1).map(function () {
      return -Infinity;
    })), [cormax]);

    return min > max ? reverse(_values) : _values;
  }

  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  } // Get the step between two ticks


  var _calculateStep = calculateStep(cormin, cormax, count, allowDecimals),
      step = _calculateStep.step,
      tickMin = _calculateStep.tickMin,
      tickMax = _calculateStep.tickMax;

  var values = Arithmetic.rangeStep(tickMin, tickMax.add(new Decimal$1(0.1).mul(step)), step);
  return min > max ? reverse(values) : values;
}
/**
 * Calculate the ticks of an interval, the count of ticks won't be guraranteed,
 * but the domain will be guaranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */


function getTickValuesFixedDomainFn(_ref7, tickCount) {
  var _ref8 = _slicedToArray$3(_ref7, 2),
      min = _ref8[0],
      max = _ref8[1];

  var allowDecimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // More than two ticks should be return
  var _getValidInterval5 = getValidInterval([min, max]),
      _getValidInterval6 = _slicedToArray$3(_getValidInterval5, 2),
      cormin = _getValidInterval6[0],
      cormax = _getValidInterval6[1];

  if (cormin === -Infinity || cormax === Infinity) {
    return [min, max];
  }

  if (cormin === cormax) {
    return [cormin];
  }

  var count = Math.max(tickCount, 2);
  var step = getFormatStep(new Decimal$1(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
  var values = [].concat(_toConsumableArray$5(Arithmetic.rangeStep(new Decimal$1(cormin), new Decimal$1(cormax).sub(new Decimal$1(0.99).mul(step)), step)), [cormax]);
  return min > max ? reverse(values) : values;
}

var getNiceTickValues = memoize(getNiceTickValuesFn);
var getTickValuesFixedDomain = memoize(getTickValuesFixedDomainFn);

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(f) {
  let delta = f;
  let compare = f;

  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare = ascendingComparator(f);
  }

  function left(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function right(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }

  function center(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
}

function ascendingComparator(f) {
  return (d, x) => ascending(f(d), x);
}

function number$2(x) {
  return x === null ? NaN : +x;
}

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
bisector(number$2).center;
const bisect = bisectRight;

var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    let r0 = Math.round(start / step), r1 = Math.round(stop / step);
    if (r0 * step < start) ++r0;
    if (r1 * step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) * step;
  } else {
    step = -step;
    let r0 = Math.round(start * step), r1 = Math.round(stop * step);
    if (r0 / step < start) ++r0;
    if (r1 / step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}

function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}

// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect(array, k, left = 0, right = array.length - 1, compare = ascending) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }

    const t = array[k];
    let i = left;
    let j = right;

    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }

    if (compare(array[left], t) === 0) swap(array, left, j);
    else ++j, swap(array, j, right);

    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array;
}

function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}

function quantile$1(values, p, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return min(values);
  if (p >= 1) return max(values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = max(quickselect(values, i0).subarray(0, i0 + 1)),
      value1 = min(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}

function quantileSorted(values, p, valueof = number$2) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}

function sequence(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}

const implicit = Symbol("implicit");

function ordinal() {
  var index = new Map(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new Map();
    for (const value of _) {
      const key = value + "";
      if (index.has(key)) continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  initRange.apply(scale, arguments);

  return scale;
}

function band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = sequence(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return initRange.apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb$1(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb$1, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

const constant = x => () => x;

function linear$1(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear$1(a, d) : constant(isNaN(a) ? b : a);
}

const rgb = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb(start, end) {
    var r = color((start = rgb$1(start)).r, (end = rgb$1(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1);

function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date$1(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolate(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: interpolateNumber(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

function interpolate(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b)
      : (t === "number" ? interpolateNumber
      : t === "string" ? ((c = color(b)) ? (b = c, rgb) : string)
      : b instanceof color ? rgb
      : b instanceof Date ? date$1
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : interpolateNumber)(a, b);
}

function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

function piecewise(interpolate$1, values) {
  if (values === undefined) values = interpolate$1, interpolate$1 = interpolate;
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate$1(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}

function constants(x) {
  return function() {
    return x;
  };
}

function number$1(x) {
  return +x;
}

var unit = [0, 1];

function identity$2(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constants(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisect(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy$1(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer$2() {
  var domain = unit,
      range = unit,
      interpolate$1 = interpolate,
      transform,
      untransform,
      unknown,
      clamp = identity$2,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity$2) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number$1), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity$2, rescale()) : clamp !== identity$2;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer$2()(identity$2, identity$2);
}

function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}

function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent;

function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

const formatTypes = {
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
};

function identity$1(x) {
  return x;
}

var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

function formatLocale$1(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity$1 : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? identity$1 : formatNumerals(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

var locale$1;
var format;
var formatPrefix;

defaultLocale$1({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale$1(definition) {
  locale$1 = formatLocale$1(definition);
  format = locale$1.format;
  formatPrefix = locale$1.formatPrefix;
  return locale$1;
}

function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = continuous();

  scale.copy = function() {
    return copy$1(scale, linear());
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}

function identity(domain) {
  var unknown;

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = Array.from(_, number$1), scale) : domain.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return identity(domain).unknown(unknown);
  };

  domain = arguments.length ? Array.from(domain, number$1) : [0, 1];

  return linearish(scale);
}

function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i <= j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = ticks(u, v, n);
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = format(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(nice(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  return scale;
}

function log() {
  var scale = loggish(transformer$2()).domain([1, 10]);

  scale.copy = function() {
    return copy$1(scale, log()).base(scale.base());
  };

  initRange.apply(scale, arguments);

  return scale;
}

function transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return linearish(scale);
}

function symlog() {
  var scale = symlogish(transformer$2());

  scale.copy = function() {
    return copy$1(scale, symlog()).constant(scale.constant());
  };

  return initRange.apply(scale, arguments);
}

function transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(identity$2, identity$2),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(identity$2, identity$2)
        : exponent === 0.5 ? transform(transformSqrt, transformSquare)
        : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return linearish(scale);
}

function pow() {
  var scale = powish(transformer$2());

  scale.copy = function() {
    return copy$1(scale, pow()).exponent(scale.exponent());
  };

  initRange.apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}

function square(x) {
  return Math.sign(x) * x * x;
}

function unsquare(x) {
  return Math.sign(x) * Math.sqrt(Math.abs(x));
}

function radial() {
  var squared = continuous(),
      range = [0, 1],
      round = false,
      unknown;

  function scale(x) {
    var y = unsquare(squared(x));
    return isNaN(y) ? unknown : round ? Math.round(y) : y;
  }

  scale.invert = function(y) {
    return squared.invert(square(y));
  };

  scale.domain = function(_) {
    return arguments.length ? (squared.domain(_), scale) : squared.domain();
  };

  scale.range = function(_) {
    return arguments.length ? (squared.range((range = Array.from(_, number$1)).map(square)), scale) : range.slice();
  };

  scale.rangeRound = function(_) {
    return scale.range(_).round(true);
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, scale) : round;
  };

  scale.clamp = function(_) {
    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return radial(squared.domain(), range)
        .round(round)
        .clamp(squared.clamp())
        .unknown(unknown);
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}

function quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = quantileSorted(domain, i / n);
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : range[bisect(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(scale, arguments);
}

function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x != null && x <= x ? range[bisect(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(linearish(scale), arguments);
}

function threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x != null && x <= x ? range[bisect(domain, x, 0, n)] : unknown;
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(scale, arguments);
}

var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = function(date) {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}

var millisecond = newInterval(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return newInterval(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

const millisecond$1 = millisecond;
millisecond.range;

const durationSecond = 1000;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;

var second = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * durationSecond);
}, function(start, end) {
  return (end - start) / durationSecond;
}, function(date) {
  return date.getUTCSeconds();
});

const utcSecond = second;
second.range;

var minute = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getMinutes();
});

const timeMinute = minute;
minute.range;

var hour = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getHours();
});

const timeHour = hour;
hour.range;

var day = newInterval(
  date => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  date => date.getDate() - 1
);

const timeDay = day;
day.range;

function weekday(i) {
  return newInterval(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

sunday.range;
monday.range;
tuesday.range;
wednesday.range;
thursday.range;
friday.range;
saturday.range;

var month = newInterval(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

const timeMonth = month;
month.range;

var year = newInterval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

const timeYear = year;
year.range;

var utcMinute = newInterval(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getUTCMinutes();
});

const utcMinute$1 = utcMinute;
utcMinute.range;

var utcHour = newInterval(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getUTCHours();
});

const utcHour$1 = utcHour;
utcHour.range;

var utcDay = newInterval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay;
}, function(date) {
  return date.getUTCDate() - 1;
});

const utcDay$1 = utcDay;
utcDay.range;

function utcWeekday(i) {
  return newInterval(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / durationWeek;
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

utcSunday.range;
utcMonday.range;
utcTuesday.range;
utcWednesday.range;
utcThursday.range;
utcFriday.range;
utcSaturday.range;

var utcMonth = newInterval(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

const utcMonth$1 = utcMonth;
utcMonth.range;

var utcYear = newInterval(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

const utcYear$1 = utcYear;
utcYear.range;

function ticker(year, month, week, day, hour, minute) {

  const tickIntervals = [
    [utcSecond,  1,      durationSecond],
    [utcSecond,  5,  5 * durationSecond],
    [utcSecond, 15, 15 * durationSecond],
    [utcSecond, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function ticks(start, stop, count) {
    const reverse = stop < start;
    if (reverse) [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
    return reverse ? ticks.reverse() : ticks;
  }

  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = bisector(([,, step]) => step).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count));
    if (i === 0) return millisecond$1.every(Math.max(tickStep(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }

  return [ticks, tickInterval];
}

const [utcTicks, utcTickInterval] = ticker(utcYear$1, utcMonth$1, utcSunday, utcDay$1, utcHour$1, utcMinute$1);
const [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, sunday, timeDay, timeHour, timeMinute);

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay$1.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? monday.ceil(week) : monday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(sunday.count(timeYear(d) - 1, d), p, 2);
}

function dISO(d) {
  var day = d.getDay();
  return (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
}

function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(thursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(monday.count(timeYear(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay$1.count(utcYear$1(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear$1(d) - 1, d), p, 2);
}

function UTCdISO(d) {
  var day = d.getUTCDay();
  return (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
}

function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear$1(d), d) + (utcYear$1(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear$1(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

var locale;
var timeFormat;
var utcFormat;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  timeFormat = locale.format;
  locale.parse;
  utcFormat = locale.utcFormat;
  locale.utcParse;
  return locale;
}

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
  var scale = continuous(),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };

  scale.copy = function() {
    return copy$1(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
  };

  return scale;
}

function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, sunday, timeDay, timeHour, timeMinute, utcSecond, timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}

function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear$1, utcMonth$1, utcSunday, utcDay$1, utcHour$1, utcMinute$1, utcSecond, utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
}

function transformer$1() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = identity$2,
      clamp = false,
      unknown;

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function(_) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }

  scale.range = range(interpolate);

  scale.rangeRound = range(interpolateRound);

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .interpolator(source.interpolator())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function sequential() {
  var scale = linearish(transformer$1()(identity$2));

  scale.copy = function() {
    return copy(scale, sequential());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequentialLog() {
  var scale = loggish(transformer$1()).domain([1, 10]);

  scale.copy = function() {
    return copy(scale, sequentialLog()).base(scale.base());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequentialSymlog() {
  var scale = symlogish(transformer$1());

  scale.copy = function() {
    return copy(scale, sequentialSymlog()).constant(scale.constant());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequentialPow() {
  var scale = powish(transformer$1());

  scale.copy = function() {
    return copy(scale, sequentialPow()).exponent(scale.exponent());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}

function sequentialQuantile() {
  var domain = [],
      interpolator = identity$2;

  function scale(x) {
    if (x != null && !isNaN(x = +x)) return interpolator((bisect(domain, x, 1) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.range = function() {
    return domain.map((d, i) => interpolator(i / (domain.length - 1)));
  };

  scale.quantiles = function(n) {
    return Array.from({length: n + 1}, (_, i) => quantile$1(domain, i / n));
  };

  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return initInterpolator.apply(scale, arguments);
}

function transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      s = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = identity$2,
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function(_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = piecewise(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }

  scale.range = range(interpolate);

  scale.rangeRound = range(interpolateRound);

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
    return scale;
  };
}

function diverging() {
  var scale = linearish(transformer()(identity$2));

  scale.copy = function() {
    return copy(scale, diverging());
  };

  return initInterpolator.apply(scale, arguments);
}

function divergingLog() {
  var scale = loggish(transformer()).domain([0.1, 1, 10]);

  scale.copy = function() {
    return copy(scale, divergingLog()).base(scale.base());
  };

  return initInterpolator.apply(scale, arguments);
}

function divergingSymlog() {
  var scale = symlogish(transformer());

  scale.copy = function() {
    return copy(scale, divergingSymlog()).constant(scale.constant());
  };

  return initInterpolator.apply(scale, arguments);
}

function divergingPow() {
  var scale = powish(transformer());

  scale.copy = function() {
    return copy(scale, divergingPow()).exponent(scale.exponent());
  };

  return initInterpolator.apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}

const d3Scales = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  scaleBand: band,
  scalePoint: point,
  scaleIdentity: identity,
  scaleLinear: linear,
  scaleLog: log,
  scaleSymlog: symlog,
  scaleOrdinal: ordinal,
  scaleImplicit: implicit,
  scalePow: pow,
  scaleSqrt: sqrt,
  scaleRadial: radial,
  scaleQuantile: quantile,
  scaleQuantize: quantize,
  scaleThreshold: threshold,
  scaleTime: time,
  scaleUtc: utcTime,
  scaleSequential: sequential,
  scaleSequentialLog: sequentialLog,
  scaleSequentialPow: sequentialPow,
  scaleSequentialSqrt: sequentialSqrt,
  scaleSequentialSymlog: sequentialSymlog,
  scaleSequentialQuantile: sequentialQuantile,
  scaleDiverging: diverging,
  scaleDivergingLog: divergingLog,
  scaleDivergingPow: divergingPow,
  scaleDivergingSqrt: divergingSqrt,
  scaleDivergingSymlog: divergingSymlog,
  tickFormat
}, Symbol.toStringTag, { value: 'Module' }));

function _toConsumableArray$4(arr) { return _arrayWithoutHoles$4(arr) || _iterableToArray$4(arr) || _unsupportedIterableToArray$6(arr) || _nonIterableSpread$4(); }

function _nonIterableSpread$4() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$6(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$6(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen); }

function _iterableToArray$4(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$4(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$6(arr); }

function _arrayLikeToArray$6(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(Object(source), true).forEach(function (key) { _defineProperty$d(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$d(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function getValueByDataKey(obj, dataKey, defaultValue) {
  if (isNil_1(obj) || isNil_1(dataKey)) {
    return defaultValue;
  }

  if (isNumOrStr(dataKey)) {
    return get_1(obj, dataKey, defaultValue);
  }

  if (isFunction_1(dataKey)) {
    return dataKey(obj);
  }

  return defaultValue;
}
/**
 * Get domain of data by key
 * @param  {Array}   data      The data displayed in the chart
 * @param  {String}  key       The unique key of a group of data
 * @param  {String}  type      The type of axis
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array} Domain of data
 */

function getDomainOfDataByKey(data, key, type, filterNil) {
  var flattenData = flatMap_1(data, function (entry) {
    return getValueByDataKey(entry, key);
  });

  if (type === 'number') {
    var domain = flattenData.filter(function (entry) {
      return isNumber(entry) || parseFloat(entry);
    });
    return domain.length ? [min_1(domain), max_1(domain)] : [Infinity, -Infinity];
  }

  var validateData = filterNil ? flattenData.filter(function (entry) {
    return !isNil_1(entry);
  }) : flattenData; // 支持Date类型的x轴

  return validateData.map(function (entry) {
    return isNumOrStr(entry) || entry instanceof Date ? entry : '';
  });
}
var calculateActiveTickIndex = function calculateActiveTickIndex(coordinate) {
  var _ticks$length;

  var ticks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var unsortedTicks = arguments.length > 2 ? arguments[2] : undefined;
  var axis = arguments.length > 3 ? arguments[3] : undefined;
  var index = -1;
  var len = (_ticks$length = ticks === null || ticks === void 0 ? void 0 : ticks.length) !== null && _ticks$length !== void 0 ? _ticks$length : 0;

  if (len > 1) {
    if (axis && axis.axisType === 'angleAxis' && Math.abs(Math.abs(axis.range[1] - axis.range[0]) - 360) <= 1e-6) {
      var range = axis.range; // ticks are distributed in a circle

      for (var i = 0; i < len; i++) {
        var before = i > 0 ? unsortedTicks[i - 1].coordinate : unsortedTicks[len - 1].coordinate;
        var cur = unsortedTicks[i].coordinate;
        var after = i >= len - 1 ? unsortedTicks[0].coordinate : unsortedTicks[i + 1].coordinate;
        var sameDirectionCoord = void 0;

        if (mathSign(cur - before) !== mathSign(after - cur)) {
          var diffInterval = [];

          if (mathSign(after - cur) === mathSign(range[1] - range[0])) {
            sameDirectionCoord = after;
            var curInRange = cur + range[1] - range[0];
            diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
            diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
          } else {
            sameDirectionCoord = before;
            var afterInRange = after + range[1] - range[0];
            diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
            diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
          }

          var sameInterval = [Math.min(cur, (sameDirectionCoord + cur) / 2), Math.max(cur, (sameDirectionCoord + cur) / 2)];

          if (coordinate > sameInterval[0] && coordinate <= sameInterval[1] || coordinate >= diffInterval[0] && coordinate <= diffInterval[1]) {
            index = unsortedTicks[i].index;
            break;
          }
        } else {
          var min = Math.min(before, after);
          var max = Math.max(before, after);

          if (coordinate > (min + cur) / 2 && coordinate <= (max + cur) / 2) {
            index = unsortedTicks[i].index;
            break;
          }
        }
      }
    } else {
      // ticks are distributed in a single direction
      for (var _i = 0; _i < len; _i++) {
        if (_i === 0 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i > 0 && _i < len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i === len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2) {
          index = ticks[_i].index;
          break;
        }
      }
    }
  } else {
    index = 0;
  }

  return index;
};
/**
 * Get the main color of each graphic item
 * @param  {ReactElement} item A graphic item
 * @return {String}            Color
 */

var getMainColorOfGraphicItem = function getMainColorOfGraphicItem(item) {
  var _ref = item,
      displayName = _ref.type.displayName; // TODO: check if displayName is valid.

  var _item$props = item.props,
      stroke = _item$props.stroke,
      fill = _item$props.fill;
  var result;

  switch (displayName) {
    case 'Line':
      result = stroke;
      break;

    case 'Area':
    case 'Radar':
      result = stroke && stroke !== 'none' ? stroke : fill;
      break;

    default:
      result = fill;
      break;
  }

  return result;
};
var getLegendProps = function getLegendProps(_ref2) {
  var children = _ref2.children,
      formattedGraphicalItems = _ref2.formattedGraphicalItems,
      legendWidth = _ref2.legendWidth,
      legendContent = _ref2.legendContent;
  var legendItem = findChildByType(children, Legend.displayName);

  if (!legendItem) {
    return null;
  }

  var legendData;

  if (legendItem.props && legendItem.props.payload) {
    legendData = legendItem.props && legendItem.props.payload;
  } else if (legendContent === 'children') {
    legendData = (formattedGraphicalItems || []).reduce(function (result, _ref3) {
      var item = _ref3.item,
          props = _ref3.props;
      var data = props.sectors || props.data || [];
      return result.concat(data.map(function (entry) {
        return {
          type: legendItem.props.iconType || item.props.legendType,
          value: entry.name,
          color: entry.fill,
          payload: entry
        };
      }));
    }, []);
  } else {
    legendData = (formattedGraphicalItems || []).map(function (_ref4) {
      var item = _ref4.item;
      var _item$props2 = item.props,
          dataKey = _item$props2.dataKey,
          name = _item$props2.name,
          legendType = _item$props2.legendType,
          hide = _item$props2.hide;
      return {
        inactive: hide,
        dataKey: dataKey,
        type: legendItem.props.iconType || legendType || 'square',
        color: getMainColorOfGraphicItem(item),
        value: name || dataKey,
        payload: item.props
      };
    });
  }

  return _objectSpread$d(_objectSpread$d(_objectSpread$d({}, legendItem.props), Legend.getWithHeight(legendItem, legendWidth)), {}, {
    payload: legendData,
    item: legendItem
  });
};
/**
 * Calculate the size of all groups for stacked bar graph
 * @param  {Object} stackGroups The items grouped by axisId and stackId
 * @return {Object} The size of all groups
 */

var getBarSizeList = function getBarSizeList(_ref5) {
  var globalSize = _ref5.barSize,
      _ref5$stackGroups = _ref5.stackGroups,
      stackGroups = _ref5$stackGroups === void 0 ? {} : _ref5$stackGroups;

  if (!stackGroups) {
    return {};
  }

  var result = {};
  var numericAxisIds = Object.keys(stackGroups);

  for (var i = 0, len = numericAxisIds.length; i < len; i++) {
    var sgs = stackGroups[numericAxisIds[i]].stackGroups;
    var stackIds = Object.keys(sgs);

    for (var j = 0, sLen = stackIds.length; j < sLen; j++) {
      var _sgs$stackIds$j = sgs[stackIds[j]],
          items = _sgs$stackIds$j.items,
          cateAxisId = _sgs$stackIds$j.cateAxisId;
      var barItems = items.filter(function (item) {
        return getDisplayName(item.type).indexOf('Bar') >= 0;
      });

      if (barItems && barItems.length) {
        var selfSize = barItems[0].props.barSize;
        var cateId = barItems[0].props[cateAxisId];

        if (!result[cateId]) {
          result[cateId] = [];
        }

        result[cateId].push({
          item: barItems[0],
          stackList: barItems.slice(1),
          barSize: isNil_1(selfSize) ? globalSize : selfSize
        });
      }
    }
  }

  return result;
};
/**
 * Calculate the size of each bar and the gap between two bars
 * @param  {Number} bandSize  The size of each category
 * @param  {sizeList} sizeList  The size of all groups
 * @param  {maxBarSize} maxBarSize The maximum size of bar
 * @return {Number} The size of each bar and the gap between two bars
 */

var getBarPosition = function getBarPosition(_ref6) {
  var barGap = _ref6.barGap,
      barCategoryGap = _ref6.barCategoryGap,
      bandSize = _ref6.bandSize,
      _ref6$sizeList = _ref6.sizeList,
      sizeList = _ref6$sizeList === void 0 ? [] : _ref6$sizeList,
      maxBarSize = _ref6.maxBarSize;
  var len = sizeList.length;
  if (len < 1) return null;
  var realBarGap = getPercentValue(barGap, bandSize, 0, true);
  var result; // whether or not is barSize setted by user

  if (sizeList[0].barSize === +sizeList[0].barSize) {
    var useFull = false;
    var fullBarSize = bandSize / len;
    var sum = sizeList.reduce(function (res, entry) {
      return res + entry.barSize || 0;
    }, 0);
    sum += (len - 1) * realBarGap;

    if (sum >= bandSize) {
      sum -= (len - 1) * realBarGap;
      realBarGap = 0;
    }

    if (sum >= bandSize && fullBarSize > 0) {
      useFull = true;
      fullBarSize *= 0.9;
      sum = len * fullBarSize;
    }

    var offset = (bandSize - sum) / 2 >> 0;
    var prev = {
      offset: offset - realBarGap,
      size: 0
    };
    result = sizeList.reduce(function (res, entry) {
      var newRes = [].concat(_toConsumableArray$4(res), [{
        item: entry.item,
        position: {
          offset: prev.offset + prev.size + realBarGap,
          size: useFull ? fullBarSize : entry.barSize
        }
      }]);
      prev = newRes[newRes.length - 1].position;

      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(function (item) {
          newRes.push({
            item: item,
            position: prev
          });
        });
      }

      return newRes;
    }, []);
  } else {
    var _offset = getPercentValue(barCategoryGap, bandSize, 0, true);

    if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) {
      realBarGap = 0;
    }

    var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;

    if (originalSize > 1) {
      originalSize >>= 0;
    }

    var size = maxBarSize === +maxBarSize ? Math.min(originalSize, maxBarSize) : originalSize;
    result = sizeList.reduce(function (res, entry, i) {
      var newRes = [].concat(_toConsumableArray$4(res), [{
        item: entry.item,
        position: {
          offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
          size: size
        }
      }]);

      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(function (item) {
          newRes.push({
            item: item,
            position: newRes[newRes.length - 1].position
          });
        });
      }

      return newRes;
    }, []);
  }

  return result;
};
var appendOffsetOfLegend = function appendOffsetOfLegend(offset, items, props, legendBox) {
  var children = props.children,
      width = props.width,
      margin = props.margin;
  var legendWidth = width - (margin.left || 0) - (margin.right || 0); // const legendHeight = height - (margin.top || 0) - (margin.bottom || 0);

  var legendProps = getLegendProps({
    children: children,
    legendWidth: legendWidth
  });
  var newOffset = offset;

  if (legendProps) {
    var box = legendBox || {};
    var align = legendProps.align,
        verticalAlign = legendProps.verticalAlign,
        layout = legendProps.layout;

    if ((layout === 'vertical' || layout === 'horizontal' && verticalAlign === 'center') && isNumber(offset[align])) {
      newOffset = _objectSpread$d(_objectSpread$d({}, offset), {}, _defineProperty$d({}, align, newOffset[align] + (box.width || 0)));
    }

    if ((layout === 'horizontal' || layout === 'vertical' && align === 'center') && isNumber(offset[verticalAlign])) {
      newOffset = _objectSpread$d(_objectSpread$d({}, offset), {}, _defineProperty$d({}, verticalAlign, newOffset[verticalAlign] + (box.height || 0)));
    }
  }

  return newOffset;
};

var isErrorBarRelevantForAxis = function isErrorBarRelevantForAxis(layout, axisType, direction) {
  if (isNil_1(axisType)) {
    return true;
  }

  if (layout === 'horizontal') {
    return axisType === 'yAxis';
  }

  if (layout === 'vertical') {
    return axisType === 'xAxis';
  }

  if (direction === 'x') {
    return axisType === 'xAxis';
  }

  if (direction === 'y') {
    return axisType === 'yAxis';
  }

  return true;
};

var getDomainOfErrorBars = function getDomainOfErrorBars(data, item, dataKey, layout, axisType) {
  var children = item.props.children;
  var errorBars = findAllByType(children, 'ErrorBar').filter(function (errorBarChild) {
    return isErrorBarRelevantForAxis(layout, axisType, errorBarChild.props.direction);
  });

  if (errorBars && errorBars.length) {
    var keys = errorBars.map(function (errorBarChild) {
      return errorBarChild.props.dataKey;
    });
    return data.reduce(function (result, entry) {
      var entryValue = getValueByDataKey(entry, dataKey, 0);
      var mainValue = isArray_1(entryValue) ? [min_1(entryValue), max_1(entryValue)] : [entryValue, entryValue];
      var errorDomain = keys.reduce(function (prevErrorArr, k) {
        var errorValue = getValueByDataKey(entry, k, 0);
        var lowerValue = mainValue[0] - Math.abs(isArray_1(errorValue) ? errorValue[0] : errorValue);
        var upperValue = mainValue[1] + Math.abs(isArray_1(errorValue) ? errorValue[1] : errorValue);
        return [Math.min(lowerValue, prevErrorArr[0]), Math.max(upperValue, prevErrorArr[1])];
      }, [Infinity, -Infinity]);
      return [Math.min(errorDomain[0], result[0]), Math.max(errorDomain[1], result[1])];
    }, [Infinity, -Infinity]);
  }

  return null;
};
var parseErrorBarsOfAxis = function parseErrorBarsOfAxis(data, items, dataKey, axisType, layout) {
  var domains = items.map(function (item) {
    return getDomainOfErrorBars(data, item, dataKey, layout, axisType);
  }).filter(function (entry) {
    return !isNil_1(entry);
  });

  if (domains && domains.length) {
    return domains.reduce(function (result, entry) {
      return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
    }, [Infinity, -Infinity]);
  }

  return null;
};
/**
 * Get domain of data by the configuration of item element
 * @param  {Array}   data      The data displayed in the chart
 * @param  {Array}   items     The instances of item
 * @param  {String}  type      The type of axis, number - Number Axis, category - Category Axis
 * @param  {LayoutType} layout The type of layout
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array}        Domain
 */

var getDomainOfItemsWithSameAxis = function getDomainOfItemsWithSameAxis(data, items, type, layout, filterNil) {
  var domains = items.map(function (item) {
    var dataKey = item.props.dataKey;

    if (type === 'number' && dataKey) {
      return getDomainOfErrorBars(data, item, dataKey, layout) || getDomainOfDataByKey(data, dataKey, type, filterNil);
    }

    return getDomainOfDataByKey(data, dataKey, type, filterNil);
  });

  if (type === 'number') {
    // Calculate the domain of number axis
    return domains.reduce(function (result, entry) {
      return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
    }, [Infinity, -Infinity]);
  }

  var tag = {}; // Get the union set of category axis

  return domains.reduce(function (result, entry) {
    for (var i = 0, len = entry.length; i < len; i++) {
      if (!tag[entry[i]]) {
        tag[entry[i]] = true;
        result.push(entry[i]);
      }
    }

    return result;
  }, []);
};
var isCategoricalAxis = function isCategoricalAxis(layout, axisType) {
  return layout === 'horizontal' && axisType === 'xAxis' || layout === 'vertical' && axisType === 'yAxis' || layout === 'centric' && axisType === 'angleAxis' || layout === 'radial' && axisType === 'radiusAxis';
};
/**
 * Calculate the Coordinates of grid
 * @param  {Array} ticks The ticks in axis
 * @param {Number} min   The minimun value of axis
 * @param {Number} max   The maximun value of axis
 * @return {Array}       Coordinates
 */

var getCoordinatesOfGrid = function getCoordinatesOfGrid(ticks, min, max) {
  var hasMin, hasMax;
  var values = ticks.map(function (entry) {
    if (entry.coordinate === min) {
      hasMin = true;
    }

    if (entry.coordinate === max) {
      hasMax = true;
    }

    return entry.coordinate;
  });

  if (!hasMin) {
    values.push(min);
  }

  if (!hasMax) {
    values.push(max);
  }

  return values;
};
/**
 * Get the ticks of an axis
 * @param  {Object}  axis The configuration of an axis
 * @param {Boolean} isGrid Whether or not are the ticks in grid
 * @param {Boolean} isAll Return the ticks of all the points or not
 * @return {Array}  Ticks
 */

var getTicksOfAxis = function getTicksOfAxis(axis, isGrid, isAll) {
  if (!axis) return null;
  var scale = axis.scale;
  var duplicateDomain = axis.duplicateDomain,
      type = axis.type,
      range = axis.range;
  var offsetForBand = axis.realScaleType === 'scaleBand' ? scale.bandwidth() / 2 : 2;
  var offset = (isGrid || isAll) && type === 'category' && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
  offset = axis.axisType === 'angleAxis' ? mathSign(range[0] - range[1]) * 2 * offset : offset; // The ticks setted by user should only affect the ticks adjacent to axis line

  if (isGrid && (axis.ticks || axis.niceTicks)) {
    return (axis.ticks || axis.niceTicks).map(function (entry) {
      var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;
      return {
        coordinate: scale(scaleContent) + offset,
        value: entry,
        offset: offset
      };
    });
  } // When axis is a categorial axis, but the type of axis is number or the scale of axis is not "auto"


  if (axis.isCategorical && axis.categoricalDomain) {
    return axis.categoricalDomain.map(function (entry, index) {
      return {
        coordinate: scale(entry) + offset,
        value: entry,
        index: index,
        offset: offset
      };
    });
  }

  if (scale.ticks && !isAll) {
    return scale.ticks(axis.tickCount).map(function (entry) {
      return {
        coordinate: scale(entry) + offset,
        value: entry,
        offset: offset
      };
    });
  } // When axis has duplicated text, serial numbers are used to generate scale


  return scale.domain().map(function (entry, index) {
    return {
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index: index,
      offset: offset
    };
  });
};
/**
 * combine the handlers
 * @param  {Function} defaultHandler Internal private handler
 * @param  {Function} parentHandler  Handler function specified in parent component
 * @param  {Function} childHandler   Handler function specified in child component
 * @return {Function}                The combined handler
 */

var combineEventHandlers = function combineEventHandlers(defaultHandler, parentHandler, childHandler) {
  var customizedHandler;

  if (isFunction_1(childHandler)) {
    customizedHandler = childHandler;
  } else if (isFunction_1(parentHandler)) {
    customizedHandler = parentHandler;
  }

  if (isFunction_1(defaultHandler) || customizedHandler) {
    return function (arg1, arg2, arg3, arg4) {
      if (isFunction_1(defaultHandler)) {
        defaultHandler(arg1, arg2, arg3, arg4);
      }

      if (isFunction_1(customizedHandler)) {
        customizedHandler(arg1, arg2, arg3, arg4);
      }
    };
  }

  return null;
};
/**
 * Parse the scale function of axis
 * @param  {Object}   axis          The option of axis
 * @param  {String}   chartType     The displayName of chart
 * @param  {Boolean}  hasBar        if it has a bar
 * @return {Function}               The scale function
 */

var parseScale = function parseScale(axis, chartType, hasBar) {
  var scale = axis.scale,
      type = axis.type,
      layout = axis.layout,
      axisType = axis.axisType;

  if (scale === 'auto') {
    if (layout === 'radial' && axisType === 'radiusAxis') {
      return {
        scale: band(),
        realScaleType: 'band'
      };
    }

    if (layout === 'radial' && axisType === 'angleAxis') {
      return {
        scale: linear(),
        realScaleType: 'linear'
      };
    }

    if (type === 'category' && chartType && (chartType.indexOf('LineChart') >= 0 || chartType.indexOf('AreaChart') >= 0 || chartType.indexOf('ComposedChart') >= 0 && !hasBar)) {
      return {
        scale: point(),
        realScaleType: 'point'
      };
    }

    if (type === 'category') {
      return {
        scale: band(),
        realScaleType: 'band'
      };
    }

    return {
      scale: linear(),
      realScaleType: 'linear'
    };
  }

  if (isString_1(scale)) {
    var name = "scale".concat(upperFirst_1(scale));
    return {
      scale: (d3Scales[name] || point)(),
      realScaleType: d3Scales[name] ? name : 'point'
    };
  }

  return isFunction_1(scale) ? {
    scale: scale
  } : {
    scale: point(),
    realScaleType: 'point'
  };
};
var EPS = 1e-4;
var checkDomainOfScale = function checkDomainOfScale(scale) {
  var domain = scale.domain();

  if (!domain || domain.length <= 2) {
    return;
  }

  var len = domain.length;
  var range = scale.range();
  var min = Math.min(range[0], range[1]) - EPS;
  var max = Math.max(range[0], range[1]) + EPS;
  var first = scale(domain[0]);
  var last = scale(domain[len - 1]);

  if (first < min || first > max || last < min || last > max) {
    scale.domain([domain[0], domain[len - 1]]);
  }
};
/* eslint no-param-reassign: 0 */

var offsetSign = function offsetSign(series) {
  var n = series.length;

  if (n <= 0) {
    return;
  }

  for (var j = 0, m = series[0].length; j < m; ++j) {
    var positive = 0;
    var negative = 0;

    for (var i = 0; i < n; ++i) {
      var value = _isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
      /* eslint-disable prefer-destructuring */

      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = negative;
        series[i][j][1] = negative + value;
        negative = series[i][j][1];
      }
      /* eslint-enable prefer-destructuring */

    }
  }
};
/* eslint no-param-reassign: 0 */

var offsetPositive = function offsetPositive(series) {
  var n = series.length;

  if (n <= 0) {
    return;
  }

  for (var j = 0, m = series[0].length; j < m; ++j) {
    var positive = 0;

    for (var i = 0; i < n; ++i) {
      var value = _isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
      /* eslint-disable prefer-destructuring */

      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = 0;
        series[i][j][1] = 0;
      }
      /* eslint-enable prefer-destructuring */

    }
  }
};
var STACK_OFFSET_MAP = {
  sign: offsetSign,
  expand: stackOffsetExpand,
  none: stackOffsetNone,
  silhouette: stackOffsetSilhouette,
  wiggle: stackOffsetWiggle,
  positive: offsetPositive
};
var getStackedData = function getStackedData(data, stackItems, offsetType) {
  var dataKeys = stackItems.map(function (item) {
    return item.props.dataKey;
  });
  var stack = shapeStack().keys(dataKeys).value(function (d, key) {
    return +getValueByDataKey(d, key, 0);
  }).order(stackOrderNone).offset(STACK_OFFSET_MAP[offsetType]);
  return stack(data);
};
var getStackGroupsByAxisId = function getStackGroupsByAxisId(data, _items, numericAxisId, cateAxisId, offsetType, reverseStackOrder) {
  if (!data) {
    return null;
  } // reversing items to affect render order (for layering)


  var items = reverseStackOrder ? _items.reverse() : _items;
  var stackGroups = items.reduce(function (result, item) {
    var _item$props3 = item.props,
        stackId = _item$props3.stackId,
        hide = _item$props3.hide;

    if (hide) {
      return result;
    }

    var axisId = item.props[numericAxisId];
    var parentGroup = result[axisId] || {
      hasStack: false,
      stackGroups: {}
    };

    if (isNumOrStr(stackId)) {
      var childGroup = parentGroup.stackGroups[stackId] || {
        numericAxisId: numericAxisId,
        cateAxisId: cateAxisId,
        items: []
      };
      childGroup.items.push(item);
      parentGroup.hasStack = true;
      parentGroup.stackGroups[stackId] = childGroup;
    } else {
      parentGroup.stackGroups[uniqueId('_stackId_')] = {
        numericAxisId: numericAxisId,
        cateAxisId: cateAxisId,
        items: [item]
      };
    }

    return _objectSpread$d(_objectSpread$d({}, result), {}, _defineProperty$d({}, axisId, parentGroup));
  }, {});
  return Object.keys(stackGroups).reduce(function (result, axisId) {
    var group = stackGroups[axisId];

    if (group.hasStack) {
      group.stackGroups = Object.keys(group.stackGroups).reduce(function (res, stackId) {
        var g = group.stackGroups[stackId];
        return _objectSpread$d(_objectSpread$d({}, res), {}, _defineProperty$d({}, stackId, {
          numericAxisId: numericAxisId,
          cateAxisId: cateAxisId,
          items: g.items,
          stackedData: getStackedData(data, g.items, offsetType)
        }));
      }, {});
    }

    return _objectSpread$d(_objectSpread$d({}, result), {}, _defineProperty$d({}, axisId, group));
  }, {});
};
/**
 * get domain of ticks
 * @param  {Array} ticks Ticks of axis
 * @param  {String} type  The type of axis
 * @return {Array} domain
 */

var calculateDomainOfTicks = function calculateDomainOfTicks(ticks, type) {
  if (type === 'number') {
    return [min_1(ticks), max_1(ticks)];
  }

  return ticks;
};
/**
 * Configure the scale function of axis
 * @param {Object} scale The scale function
 * @param {Object} opts  The configuration of axis
 * @return {Object}      null
 */

var getTicksOfScale = function getTicksOfScale(scale, opts) {
  var realScaleType = opts.realScaleType,
      type = opts.type,
      tickCount = opts.tickCount,
      originalDomain = opts.originalDomain,
      allowDecimals = opts.allowDecimals;
  var scaleType = realScaleType || opts.scale;

  if (scaleType !== 'auto' && scaleType !== 'linear') {
    return null;
  }

  if (tickCount && type === 'number' && originalDomain && (originalDomain[0] === 'auto' || originalDomain[1] === 'auto')) {
    // Calculate the ticks by the number of grid when the axis is a number axis
    var domain = scale.domain();

    if (!domain.length) {
      return null;
    }

    var tickValues = getNiceTickValues(domain, tickCount, allowDecimals);
    scale.domain(calculateDomainOfTicks(tickValues, type));
    return {
      niceTicks: tickValues
    };
  }

  if (tickCount && type === 'number') {
    var _domain = scale.domain();

    var _tickValues = getTickValuesFixedDomain(_domain, tickCount, allowDecimals);

    return {
      niceTicks: _tickValues
    };
  }

  return null;
};
var getCateCoordinateOfLine = function getCateCoordinateOfLine(_ref7) {
  var axis = _ref7.axis,
      ticks = _ref7.ticks,
      bandSize = _ref7.bandSize,
      entry = _ref7.entry,
      index = _ref7.index,
      dataKey = _ref7.dataKey;

  if (axis.type === 'category') {
    // find coordinate of category axis by the value of category
    if (!axis.allowDuplicatedCategory && axis.dataKey && !isNil_1(entry[axis.dataKey])) {
      var matchedTick = findEntryInArray(ticks, 'value', entry[axis.dataKey]);

      if (matchedTick) {
        return matchedTick.coordinate + bandSize / 2;
      }
    }

    return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }

  var value = getValueByDataKey(entry, !isNil_1(dataKey) ? dataKey : axis.dataKey);
  return !isNil_1(value) ? axis.scale(value) : null;
};
var getStackedDataOfItem = function getStackedDataOfItem(item, stackGroups) {
  var stackId = item.props.stackId;

  if (isNumOrStr(stackId)) {
    var group = stackGroups[stackId];

    if (group && group.items.length) {
      var itemIndex = -1;

      for (var i = 0, len = group.items.length; i < len; i++) {
        if (group.items[i] === item) {
          itemIndex = i;
          break;
        }
      }

      return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
    }
  }

  return null;
};

var getDomainOfSingle = function getDomainOfSingle(data) {
  return data.reduce(function (result, entry) {
    return [min_1(entry.concat([result[0]]).filter(isNumber)), max_1(entry.concat([result[1]]).filter(isNumber))];
  }, [Infinity, -Infinity]);
};

var getDomainOfStackGroups = function getDomainOfStackGroups(stackGroups, startIndex, endIndex) {
  return Object.keys(stackGroups).reduce(function (result, stackId) {
    var group = stackGroups[stackId];
    var stackedData = group.stackedData;
    var domain = stackedData.reduce(function (res, entry) {
      var s = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));
      return [Math.min(res[0], s[0]), Math.max(res[1], s[1])];
    }, [Infinity, -Infinity]);
    return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
  }, [Infinity, -Infinity]).map(function (result) {
    return result === Infinity || result === -Infinity ? 0 : result;
  });
};
var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var parseSpecifiedDomain = function parseSpecifiedDomain(specifiedDomain, dataDomain, allowDataOverflow) {
  if (isFunction_1(specifiedDomain)) {
    return specifiedDomain(dataDomain, allowDataOverflow);
  }

  if (!isArray_1(specifiedDomain)) {
    return dataDomain;
  }

  var domain = [];
  /* eslint-disable prefer-destructuring */

  if (isNumber(specifiedDomain[0])) {
    domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
  } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
    var value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];
    domain[0] = dataDomain[0] - value;
  } else if (isFunction_1(specifiedDomain[0])) {
    domain[0] = specifiedDomain[0](dataDomain[0]);
  } else {
    domain[0] = dataDomain[0];
  }

  if (isNumber(specifiedDomain[1])) {
    domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
  } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
    var _value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];

    domain[1] = dataDomain[1] + _value;
  } else if (isFunction_1(specifiedDomain[1])) {
    domain[1] = specifiedDomain[1](dataDomain[1]);
  } else {
    domain[1] = dataDomain[1];
  }
  /* eslint-enable prefer-destructuring */


  return domain;
};
/**
 * Calculate the size between two category
 * @param  {Object} axis  The options of axis
 * @param  {Array}  ticks The ticks of axis
 * @param  {Boolean} isBar if items in axis are bars
 * @return {Number} Size
 */

var getBandSizeOfAxis = function getBandSizeOfAxis(axis, ticks, isBar) {
  if (axis && axis.scale && axis.scale.bandwidth) {
    var bandWidth = axis.scale.bandwidth();

    if (!isBar || bandWidth > 0) {
      return bandWidth;
    }
  }

  if (axis && ticks && ticks.length >= 2) {
    var orderedTicks = sortBy_1(ticks, function (o) {
      return o.coordinate;
    });

    var bandSize = Infinity;

    for (var i = 1, len = orderedTicks.length; i < len; i++) {
      var cur = orderedTicks[i];
      var prev = orderedTicks[i - 1];
      bandSize = Math.min((cur.coordinate || 0) - (prev.coordinate || 0), bandSize);
    }

    return bandSize === Infinity ? 0 : bandSize;
  }

  return isBar ? undefined : 0;
};
/**
 * parse the domain of a category axis when a domain is specified
 * @param   {Array}        specifiedDomain  The domain specified by users
 * @param   {Array}        calculatedDomain The domain calculated by dateKey
 * @param   {ReactElement} axisChild        The axis element
 * @returns {Array}        domains
 */

var parseDomainOfCategoryAxis = function parseDomainOfCategoryAxis(specifiedDomain, calculatedDomain, axisChild) {
  if (!specifiedDomain || !specifiedDomain.length) {
    return calculatedDomain;
  }

  if (isEqual_1(specifiedDomain, get_1(axisChild, 'type.defaultProps.domain'))) {
    return calculatedDomain;
  }

  return specifiedDomain;
};
var getTooltipItem = function getTooltipItem(graphicalItem, payload) {
  var _graphicalItem$props = graphicalItem.props,
      dataKey = _graphicalItem$props.dataKey,
      name = _graphicalItem$props.name,
      unit = _graphicalItem$props.unit,
      formatter = _graphicalItem$props.formatter,
      tooltipType = _graphicalItem$props.tooltipType,
      chartType = _graphicalItem$props.chartType;
  return _objectSpread$d(_objectSpread$d({}, filterProps(graphicalItem)), {}, {
    dataKey: dataKey,
    unit: unit,
    formatter: formatter,
    name: name || dataKey,
    color: getMainColorOfGraphicItem(graphicalItem),
    value: getValueByDataKey(payload, dataKey),
    type: tooltipType,
    payload: payload,
    chartType: chartType
  });
};

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(Object(source), true).forEach(function (key) { _defineProperty$c(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var RADIAN = Math.PI / 180;
var radianToDegree = function radianToDegree(angleInRadian) {
  return angleInRadian * 180 / Math.PI;
};
var polarToCartesian = function polarToCartesian(cx, cy, radius, angle) {
  return {
    x: cx + Math.cos(-RADIAN * angle) * radius,
    y: cy + Math.sin(-RADIAN * angle) * radius
  };
};
var distanceBetweenPoints = function distanceBetweenPoints(point, anotherPoint) {
  var x1 = point.x,
      y1 = point.y;
  var x2 = anotherPoint.x,
      y2 = anotherPoint.y;
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
var getAngleOfPoint = function getAngleOfPoint(_ref, _ref2) {
  var x = _ref.x,
      y = _ref.y;
  var cx = _ref2.cx,
      cy = _ref2.cy;
  var radius = distanceBetweenPoints({
    x: x,
    y: y
  }, {
    x: cx,
    y: cy
  });

  if (radius <= 0) {
    return {
      radius: radius
    };
  }

  var cos = (x - cx) / radius;
  var angleInRadian = Math.acos(cos);

  if (y > cy) {
    angleInRadian = 2 * Math.PI - angleInRadian;
  }

  return {
    radius: radius,
    angle: radianToDegree(angleInRadian),
    angleInRadian: angleInRadian
  };
};
var formatAngleOfSector = function formatAngleOfSector(_ref3) {
  var startAngle = _ref3.startAngle,
      endAngle = _ref3.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min = Math.min(startCnt, endCnt);
  return {
    startAngle: startAngle - min * 360,
    endAngle: endAngle - min * 360
  };
};

var reverseFormatAngleOfSetor = function reverseFormatAngleOfSetor(angle, _ref4) {
  var startAngle = _ref4.startAngle,
      endAngle = _ref4.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min = Math.min(startCnt, endCnt);
  return angle + min * 360;
};

var inRangeOfSector = function inRangeOfSector(_ref5, sector) {
  var x = _ref5.x,
      y = _ref5.y;

  var _getAngleOfPoint = getAngleOfPoint({
    x: x,
    y: y
  }, sector),
      radius = _getAngleOfPoint.radius,
      angle = _getAngleOfPoint.angle;

  var innerRadius = sector.innerRadius,
      outerRadius = sector.outerRadius;

  if (radius < innerRadius || radius > outerRadius) {
    return false;
  }

  if (radius === 0) {
    return true;
  }

  var _formatAngleOfSector = formatAngleOfSector(sector),
      startAngle = _formatAngleOfSector.startAngle,
      endAngle = _formatAngleOfSector.endAngle;

  var formatAngle = angle;
  var inRange;

  if (startAngle <= endAngle) {
    while (formatAngle > endAngle) {
      formatAngle -= 360;
    }

    while (formatAngle < startAngle) {
      formatAngle += 360;
    }

    inRange = formatAngle >= startAngle && formatAngle <= endAngle;
  } else {
    while (formatAngle > startAngle) {
      formatAngle -= 360;
    }

    while (formatAngle < endAngle) {
      formatAngle += 360;
    }

    inRange = formatAngle >= endAngle && formatAngle <= startAngle;
  }

  if (inRange) {
    return _objectSpread$c(_objectSpread$c({}, sector), {}, {
      radius: radius,
      angle: reverseFormatAngleOfSetor(formatAngle, sector)
    });
  }

  return null;
};

function _toConsumableArray$3(arr) { return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _unsupportedIterableToArray$5(arr) || _nonIterableSpread$3(); }

function _nonIterableSpread$3() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }

function _iterableToArray$3(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$3(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$5(arr); }

function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(Object(source), true).forEach(function (key) { _defineProperty$b(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

var getLabel = function getLabel(props) {
  var value = props.value,
      formatter = props.formatter;
  var label = isNil_1(props.children) ? value : props.children;

  if (isFunction_1(formatter)) {
    return formatter(label);
  }

  return label;
};

var getDeltaAngle$1 = function getDeltaAngle(startAngle, endAngle) {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign * deltaAngle;
};

var renderRadialLabel = function renderRadialLabel(labelProps, label, attrs) {
  var position = labelProps.position,
      viewBox = labelProps.viewBox,
      offset = labelProps.offset,
      className = labelProps.className;
  var _ref = viewBox,
      cx = _ref.cx,
      cy = _ref.cy,
      innerRadius = _ref.innerRadius,
      outerRadius = _ref.outerRadius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      clockWise = _ref.clockWise;
  var radius = (innerRadius + outerRadius) / 2;
  var deltaAngle = getDeltaAngle$1(startAngle, endAngle);
  var sign = deltaAngle >= 0 ? 1 : -1;
  var labelAngle, direction;

  if (position === 'insideStart') {
    labelAngle = startAngle + sign * offset;
    direction = clockWise;
  } else if (position === 'insideEnd') {
    labelAngle = endAngle - sign * offset;
    direction = !clockWise;
  } else if (position === 'end') {
    labelAngle = endAngle + sign * offset;
    direction = clockWise;
  }

  direction = deltaAngle <= 0 ? direction : !direction;
  var startPoint = polarToCartesian(cx, cy, radius, labelAngle);
  var endPoint = polarToCartesian(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
  var path = "M".concat(startPoint.x, ",").concat(startPoint.y, "\n    A").concat(radius, ",").concat(radius, ",0,1,").concat(direction ? 0 : 1, ",\n    ").concat(endPoint.x, ",").concat(endPoint.y);
  var id = isNil_1(labelProps.id) ? uniqueId('recharts-radial-line-') : labelProps.id;
  return /*#__PURE__*/React.createElement("text", _extends$e({}, attrs, {
    dominantBaseline: "central",
    className: classNames('recharts-radial-bar-label', className)
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: id,
    d: path
  })), /*#__PURE__*/React.createElement("textPath", {
    xlinkHref: "#".concat(id)
  }, label));
};

var getAttrsOfPolarLabel = function getAttrsOfPolarLabel(props) {
  var viewBox = props.viewBox,
      offset = props.offset,
      position = props.position;
  var _ref2 = viewBox,
      cx = _ref2.cx,
      cy = _ref2.cy,
      innerRadius = _ref2.innerRadius,
      outerRadius = _ref2.outerRadius,
      startAngle = _ref2.startAngle,
      endAngle = _ref2.endAngle;
  var midAngle = (startAngle + endAngle) / 2;

  if (position === 'outside') {
    var _polarToCartesian = polarToCartesian(cx, cy, outerRadius + offset, midAngle),
        _x = _polarToCartesian.x,
        _y = _polarToCartesian.y;

    return {
      x: _x,
      y: _y,
      textAnchor: _x >= cx ? 'start' : 'end',
      verticalAnchor: 'middle'
    };
  }

  if (position === 'center') {
    return {
      x: cx,
      y: cy,
      textAnchor: 'middle',
      verticalAnchor: 'middle'
    };
  }

  if (position === 'centerTop') {
    return {
      x: cx,
      y: cy,
      textAnchor: 'middle',
      verticalAnchor: 'start'
    };
  }

  if (position === 'centerBottom') {
    return {
      x: cx,
      y: cy,
      textAnchor: 'middle',
      verticalAnchor: 'end'
    };
  }

  var r = (innerRadius + outerRadius) / 2;

  var _polarToCartesian2 = polarToCartesian(cx, cy, r, midAngle),
      x = _polarToCartesian2.x,
      y = _polarToCartesian2.y;

  return {
    x: x,
    y: y,
    textAnchor: 'middle',
    verticalAnchor: 'middle'
  };
};

var getAttrsOfCartesianLabel = function getAttrsOfCartesianLabel(props) {
  var viewBox = props.viewBox,
      parentViewBox = props.parentViewBox,
      offset = props.offset,
      position = props.position;
  var _ref3 = viewBox,
      x = _ref3.x,
      y = _ref3.y,
      width = _ref3.width,
      height = _ref3.height; // Define vertical offsets and position inverts based on the value being positive or negative

  var verticalSign = height >= 0 ? 1 : -1;
  var verticalOffset = verticalSign * offset;
  var verticalEnd = verticalSign > 0 ? 'end' : 'start';
  var verticalStart = verticalSign > 0 ? 'start' : 'end'; // Define horizontal offsets and position inverts based on the value being positive or negative

  var horizontalSign = width >= 0 ? 1 : -1;
  var horizontalOffset = horizontalSign * offset;
  var horizontalEnd = horizontalSign > 0 ? 'end' : 'start';
  var horizontalStart = horizontalSign > 0 ? 'start' : 'end';

  if (position === 'top') {
    var attrs = {
      x: x + width / 2,
      y: y - verticalSign * offset,
      textAnchor: 'middle',
      verticalAnchor: verticalEnd
    };
    return _objectSpread$b(_objectSpread$b({}, attrs), parentViewBox ? {
      height: Math.max(y - parentViewBox.y, 0),
      width: width
    } : {});
  }

  if (position === 'bottom') {
    var _attrs = {
      x: x + width / 2,
      y: y + height + verticalOffset,
      textAnchor: 'middle',
      verticalAnchor: verticalStart
    };
    return _objectSpread$b(_objectSpread$b({}, _attrs), parentViewBox ? {
      height: Math.max(parentViewBox.y + parentViewBox.height - (y + height), 0),
      width: width
    } : {});
  }

  if (position === 'left') {
    var _attrs2 = {
      x: x - horizontalOffset,
      y: y + height / 2,
      textAnchor: horizontalEnd,
      verticalAnchor: 'middle'
    };
    return _objectSpread$b(_objectSpread$b({}, _attrs2), parentViewBox ? {
      width: Math.max(_attrs2.x - parentViewBox.x, 0),
      height: height
    } : {});
  }

  if (position === 'right') {
    var _attrs3 = {
      x: x + width + horizontalOffset,
      y: y + height / 2,
      textAnchor: horizontalStart,
      verticalAnchor: 'middle'
    };
    return _objectSpread$b(_objectSpread$b({}, _attrs3), parentViewBox ? {
      width: Math.max(parentViewBox.x + parentViewBox.width - _attrs3.x, 0),
      height: height
    } : {});
  }

  var sizeAttrs = parentViewBox ? {
    width: width,
    height: height
  } : {};

  if (position === 'insideLeft') {
    return _objectSpread$b({
      x: x + horizontalOffset,
      y: y + height / 2,
      textAnchor: horizontalStart,
      verticalAnchor: 'middle'
    }, sizeAttrs);
  }

  if (position === 'insideRight') {
    return _objectSpread$b({
      x: x + width - horizontalOffset,
      y: y + height / 2,
      textAnchor: horizontalEnd,
      verticalAnchor: 'middle'
    }, sizeAttrs);
  }

  if (position === 'insideTop') {
    return _objectSpread$b({
      x: x + width / 2,
      y: y + verticalOffset,
      textAnchor: 'middle',
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }

  if (position === 'insideBottom') {
    return _objectSpread$b({
      x: x + width / 2,
      y: y + height - verticalOffset,
      textAnchor: 'middle',
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }

  if (position === 'insideTopLeft') {
    return _objectSpread$b({
      x: x + horizontalOffset,
      y: y + verticalOffset,
      textAnchor: horizontalStart,
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }

  if (position === 'insideTopRight') {
    return _objectSpread$b({
      x: x + width - horizontalOffset,
      y: y + verticalOffset,
      textAnchor: horizontalEnd,
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }

  if (position === 'insideBottomLeft') {
    return _objectSpread$b({
      x: x + horizontalOffset,
      y: y + height - verticalOffset,
      textAnchor: horizontalStart,
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }

  if (position === 'insideBottomRight') {
    return _objectSpread$b({
      x: x + width - horizontalOffset,
      y: y + height - verticalOffset,
      textAnchor: horizontalEnd,
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }

  if (isObject_1(position) && (isNumber(position.x) || isPercent(position.x)) && (isNumber(position.y) || isPercent(position.y))) {
    return _objectSpread$b({
      x: x + getPercentValue(position.x, width),
      y: y + getPercentValue(position.y, height),
      textAnchor: 'end',
      verticalAnchor: 'end'
    }, sizeAttrs);
  }

  return _objectSpread$b({
    x: x + width / 2,
    y: y + height / 2,
    textAnchor: 'middle',
    verticalAnchor: 'middle'
  }, sizeAttrs);
};

var isPolar = function isPolar(viewBox) {
  return isNumber(viewBox.cx);
};

function Label(props) {
  var viewBox = props.viewBox,
      position = props.position,
      value = props.value,
      children = props.children,
      content = props.content,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      textBreakAll = props.textBreakAll;

  if (!viewBox || isNil_1(value) && isNil_1(children) && ! /*#__PURE__*/react.exports.isValidElement(content) && !isFunction_1(content)) {
    return null;
  }

  if ( /*#__PURE__*/react.exports.isValidElement(content)) {
    return /*#__PURE__*/react.exports.cloneElement(content, props);
  }

  var label;

  if (isFunction_1(content)) {
    label = /*#__PURE__*/react.exports.createElement(content, props);

    if ( /*#__PURE__*/react.exports.isValidElement(label)) {
      return label;
    }
  } else {
    label = getLabel(props);
  }

  var isPolarLabel = isPolar(viewBox);
  var attrs = filterProps(props, true);

  if (isPolarLabel && (position === 'insideStart' || position === 'insideEnd' || position === 'end')) {
    return renderRadialLabel(props, label, attrs);
  }

  var positionAttrs = isPolarLabel ? getAttrsOfPolarLabel(props) : getAttrsOfCartesianLabel(props);
  return /*#__PURE__*/React.createElement(Text, _extends$e({
    className: classNames('recharts-label', className)
  }, attrs, positionAttrs, {
    breakAll: textBreakAll
  }), label);
}
Label.displayName = 'Label';
Label.defaultProps = {
  offset: 5
};

var parseViewBox = function parseViewBox(props) {
  var cx = props.cx,
      cy = props.cy,
      angle = props.angle,
      startAngle = props.startAngle,
      endAngle = props.endAngle,
      r = props.r,
      radius = props.radius,
      innerRadius = props.innerRadius,
      outerRadius = props.outerRadius,
      x = props.x,
      y = props.y,
      top = props.top,
      left = props.left,
      width = props.width,
      height = props.height,
      clockWise = props.clockWise,
      labelViewBox = props.labelViewBox;

  if (labelViewBox) {
    return labelViewBox;
  }

  if (isNumber(width) && isNumber(height)) {
    if (isNumber(x) && isNumber(y)) {
      return {
        x: x,
        y: y,
        width: width,
        height: height
      };
    }

    if (isNumber(top) && isNumber(left)) {
      return {
        x: top,
        y: left,
        width: width,
        height: height
      };
    }
  }

  if (isNumber(x) && isNumber(y)) {
    return {
      x: x,
      y: y,
      width: 0,
      height: 0
    };
  }

  if (isNumber(cx) && isNumber(cy)) {
    return {
      cx: cx,
      cy: cy,
      startAngle: startAngle || angle || 0,
      endAngle: endAngle || angle || 0,
      innerRadius: innerRadius || 0,
      outerRadius: outerRadius || radius || r || 0,
      clockWise: clockWise
    };
  }

  if (props.viewBox) {
    return props.viewBox;
  }

  return {};
};

var parseLabel = function parseLabel(label, viewBox) {
  if (!label) {
    return null;
  }

  if (label === true) {
    return /*#__PURE__*/React.createElement(Label, {
      key: "label-implicit",
      viewBox: viewBox
    });
  }

  if (isNumOrStr(label)) {
    return /*#__PURE__*/React.createElement(Label, {
      key: "label-implicit",
      viewBox: viewBox,
      value: label
    });
  }

  if ( /*#__PURE__*/react.exports.isValidElement(label)) {
    if (label.type === Label) {
      return /*#__PURE__*/react.exports.cloneElement(label, {
        key: 'label-implicit',
        viewBox: viewBox
      });
    }

    return /*#__PURE__*/React.createElement(Label, {
      key: "label-implicit",
      content: label,
      viewBox: viewBox
    });
  }

  if (isFunction_1(label)) {
    return /*#__PURE__*/React.createElement(Label, {
      key: "label-implicit",
      content: label,
      viewBox: viewBox
    });
  }

  if (isObject_1(label)) {
    return /*#__PURE__*/React.createElement(Label, _extends$e({
      viewBox: viewBox
    }, label, {
      key: "label-implicit"
    }));
  }

  return null;
};

var renderCallByParent$1 = function renderCallByParent(parentProps, viewBox) {
  var checkPropsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!parentProps || !parentProps.children && checkPropsLabel && !parentProps.label) {
    return null;
  }

  var children = parentProps.children;
  var parentViewBox = parseViewBox(parentProps);
  var explicitChildren = findAllByType(children, Label.displayName).map(function (child, index) {
    return /*#__PURE__*/react.exports.cloneElement(child, {
      viewBox: viewBox || parentViewBox,
      key: "label-".concat(index)
    });
  });

  if (!checkPropsLabel) {
    return explicitChildren;
  }

  var implicitLabel = parseLabel(parentProps.label, viewBox || parentViewBox);
  return [implicitLabel].concat(_toConsumableArray$3(explicitChildren));
};

Label.parseViewBox = parseViewBox;
Label.renderCallByParent = renderCallByParent$1;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */

function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

var last_1 = last;

function _toConsumableArray$2(arr) { return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread$2(); }

function _nonIterableSpread$2() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

function _iterableToArray$2(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$2(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$4(arr); }

function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { _defineProperty$a(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var defaultProps = {
  valueAccessor: function valueAccessor(entry) {
    return isArray_1(entry.value) ? last_1(entry.value) : entry.value;
  }
};
function LabelList(props) {
  var data = props.data,
      valueAccessor = props.valueAccessor,
      dataKey = props.dataKey,
      clockWise = props.clockWise,
      id = props.id,
      textBreakAll = props.textBreakAll,
      others = _objectWithoutProperties$4(props, ["data", "valueAccessor", "dataKey", "clockWise", "id", "textBreakAll"]);

  if (!data || !data.length) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Layer, {
    className: "recharts-label-list"
  }, data.map(function (entry, index) {
    var value = isNil_1(dataKey) ? valueAccessor(entry, index) : getValueByDataKey(entry && entry.payload, dataKey);
    var idProps = isNil_1(id) ? {} : {
      id: "".concat(id, "-").concat(index)
    };
    return /*#__PURE__*/React.createElement(Label, _extends$d({}, filterProps(entry, true), others, idProps, {
      parentViewBox: entry.parentViewBox,
      index: index,
      value: value,
      textBreakAll: textBreakAll,
      viewBox: Label.parseViewBox(isNil_1(clockWise) ? entry : _objectSpread$a(_objectSpread$a({}, entry), {}, {
        clockWise: clockWise
      })),
      key: "label-".concat(index) // eslint-disable-line react/no-array-index-key

    }));
  }));
}
LabelList.displayName = 'LabelList';

function parseLabelList(label, data) {
  if (!label) {
    return null;
  }

  if (label === true) {
    return /*#__PURE__*/React.createElement(LabelList, {
      key: "labelList-implicit",
      data: data
    });
  }

  if ( /*#__PURE__*/React.isValidElement(label) || isFunction_1(label)) {
    return /*#__PURE__*/React.createElement(LabelList, {
      key: "labelList-implicit",
      data: data,
      content: label
    });
  }

  if (isObject_1(label)) {
    return /*#__PURE__*/React.createElement(LabelList, _extends$d({
      data: data
    }, label, {
      key: "labelList-implicit"
    }));
  }

  return null;
}

function renderCallByParent(parentProps, data) {
  var ckeckPropsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!parentProps || !parentProps.children && ckeckPropsLabel && !parentProps.label) {
    return null;
  }

  var children = parentProps.children;
  var explicitChilren = findAllByType(children, LabelList.displayName).map(function (child, index) {
    return /*#__PURE__*/react.exports.cloneElement(child, {
      data: data,
      key: "labelList-".concat(index)
    });
  });

  if (!ckeckPropsLabel) {
    return explicitChilren;
  }

  var implicitLabelList = parseLabelList(parentProps.label, data);
  return [implicitLabelList].concat(_toConsumableArray$2(explicitChilren));
}

LabelList.renderCallByParent = renderCallByParent;
LabelList.defaultProps = defaultProps;

function _typeof$8(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$8 = function _typeof(obj) { return typeof obj; }; } else { _typeof$8 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$8(obj); }

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$9(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$9(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$9(Constructor.prototype, protoProps); if (staticProps) _defineProperties$9(Constructor, staticProps); return Constructor; }

function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$8(subClass, superClass); }

function _setPrototypeOf$8(o, p) { _setPrototypeOf$8 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$8(o, p); }

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf$8(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$8(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$8(this, result); }; }

function _possibleConstructorReturn$8(self, call) { if (call && (_typeof$8(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$8(self); }

function _assertThisInitialized$8(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$8(o) { _getPrototypeOf$8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$8(o); }

var getDeltaAngle = function getDeltaAngle(startAngle, endAngle) {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);
  return sign * deltaAngle;
};

var getTangentCircle = function getTangentCircle(_ref) {
  var cx = _ref.cx,
      cy = _ref.cy,
      radius = _ref.radius,
      angle = _ref.angle,
      sign = _ref.sign,
      isExternal = _ref.isExternal,
      cornerRadius = _ref.cornerRadius,
      cornerIsExternal = _ref.cornerIsExternal;
  var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
  var theta = Math.asin(cornerRadius / centerRadius) / RADIAN;
  var centerAngle = cornerIsExternal ? angle : angle + sign * theta;
  var center = polarToCartesian(cx, cy, centerRadius, centerAngle); // The coordinate of point which is tangent to the circle

  var circleTangency = polarToCartesian(cx, cy, radius, centerAngle); // The coordinate of point which is tangent to the radius line

  var lineTangencyAngle = cornerIsExternal ? angle - sign * theta : angle;
  var lineTangency = polarToCartesian(cx, cy, centerRadius * Math.cos(theta * RADIAN), lineTangencyAngle);
  return {
    center: center,
    circleTangency: circleTangency,
    lineTangency: lineTangency,
    theta: theta
  };
};

var getSectorPath = function getSectorPath(_ref2) {
  var cx = _ref2.cx,
      cy = _ref2.cy,
      innerRadius = _ref2.innerRadius,
      outerRadius = _ref2.outerRadius,
      startAngle = _ref2.startAngle,
      endAngle = _ref2.endAngle;
  var angle = getDeltaAngle(startAngle, endAngle); // When the angle of sector equals to 360, star point and end point coincide

  var tempEndAngle = startAngle + angle;
  var outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
  var outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);
  var path = "M ".concat(outerStartPoint.x, ",").concat(outerStartPoint.y, "\n    A ").concat(outerRadius, ",").concat(outerRadius, ",0,\n    ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle > tempEndAngle), ",\n    ").concat(outerEndPoint.x, ",").concat(outerEndPoint.y, "\n  ");

  if (innerRadius > 0) {
    var innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
    var innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
    path += "L ".concat(innerEndPoint.x, ",").concat(innerEndPoint.y, "\n            A ").concat(innerRadius, ",").concat(innerRadius, ",0,\n            ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle <= tempEndAngle), ",\n            ").concat(innerStartPoint.x, ",").concat(innerStartPoint.y, " Z");
  } else {
    path += "L ".concat(cx, ",").concat(cy, " Z");
  }

  return path;
};

var getSectorWithCorner = function getSectorWithCorner(_ref3) {
  var cx = _ref3.cx,
      cy = _ref3.cy,
      innerRadius = _ref3.innerRadius,
      outerRadius = _ref3.outerRadius,
      cornerRadius = _ref3.cornerRadius,
      forceCornerRadius = _ref3.forceCornerRadius,
      cornerIsExternal = _ref3.cornerIsExternal,
      startAngle = _ref3.startAngle,
      endAngle = _ref3.endAngle;
  var sign = mathSign(endAngle - startAngle);

  var _getTangentCircle = getTangentCircle({
    cx: cx,
    cy: cy,
    radius: outerRadius,
    angle: startAngle,
    sign: sign,
    cornerRadius: cornerRadius,
    cornerIsExternal: cornerIsExternal
  }),
      soct = _getTangentCircle.circleTangency,
      solt = _getTangentCircle.lineTangency,
      sot = _getTangentCircle.theta;

  var _getTangentCircle2 = getTangentCircle({
    cx: cx,
    cy: cy,
    radius: outerRadius,
    angle: endAngle,
    sign: -sign,
    cornerRadius: cornerRadius,
    cornerIsExternal: cornerIsExternal
  }),
      eoct = _getTangentCircle2.circleTangency,
      eolt = _getTangentCircle2.lineTangency,
      eot = _getTangentCircle2.theta;

  var outerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sot - eot;

  if (outerArcAngle < 0) {
    if (forceCornerRadius) {
      return "M ".concat(solt.x, ",").concat(solt.y, "\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(cornerRadius * 2, ",0\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(-cornerRadius * 2, ",0\n      ");
    }

    return getSectorPath({
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      startAngle: startAngle,
      endAngle: endAngle
    });
  }

  var path = "M ".concat(solt.x, ",").concat(solt.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(soct.x, ",").concat(soct.y, "\n    A").concat(outerRadius, ",").concat(outerRadius, ",0,").concat(+(outerArcAngle > 180), ",").concat(+(sign < 0), ",").concat(eoct.x, ",").concat(eoct.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eolt.x, ",").concat(eolt.y, "\n  ");

  if (innerRadius > 0) {
    var _getTangentCircle3 = getTangentCircle({
      cx: cx,
      cy: cy,
      radius: innerRadius,
      angle: startAngle,
      sign: sign,
      isExternal: true,
      cornerRadius: cornerRadius,
      cornerIsExternal: cornerIsExternal
    }),
        sict = _getTangentCircle3.circleTangency,
        silt = _getTangentCircle3.lineTangency,
        sit = _getTangentCircle3.theta;

    var _getTangentCircle4 = getTangentCircle({
      cx: cx,
      cy: cy,
      radius: innerRadius,
      angle: endAngle,
      sign: -sign,
      isExternal: true,
      cornerRadius: cornerRadius,
      cornerIsExternal: cornerIsExternal
    }),
        eict = _getTangentCircle4.circleTangency,
        eilt = _getTangentCircle4.lineTangency,
        eit = _getTangentCircle4.theta;

    var innerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sit - eit;

    if (innerArcAngle < 0 && cornerRadius === 0) {
      return "".concat(path, "L").concat(cx, ",").concat(cy, "Z");
    }

    path += "L".concat(eilt.x, ",").concat(eilt.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eict.x, ",").concat(eict.y, "\n      A").concat(innerRadius, ",").concat(innerRadius, ",0,").concat(+(innerArcAngle > 180), ",").concat(+(sign > 0), ",").concat(sict.x, ",").concat(sict.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(silt.x, ",").concat(silt.y, "Z");
  } else {
    path += "L".concat(cx, ",").concat(cy, "Z");
  }

  return path;
};

var Sector = /*#__PURE__*/function (_PureComponent) {
  _inherits$8(Sector, _PureComponent);

  var _super = _createSuper$8(Sector);

  function Sector() {
    _classCallCheck$9(this, Sector);

    return _super.apply(this, arguments);
  }

  _createClass$9(Sector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cx = _this$props.cx,
          cy = _this$props.cy,
          innerRadius = _this$props.innerRadius,
          outerRadius = _this$props.outerRadius,
          cornerRadius = _this$props.cornerRadius,
          forceCornerRadius = _this$props.forceCornerRadius,
          cornerIsExternal = _this$props.cornerIsExternal,
          startAngle = _this$props.startAngle,
          endAngle = _this$props.endAngle,
          className = _this$props.className;

      if (outerRadius < innerRadius || startAngle === endAngle) {
        return null;
      }

      var layerClass = classNames('recharts-sector', className);
      var deltaRadius = outerRadius - innerRadius;
      var cr = getPercentValue(cornerRadius, deltaRadius, 0, true);
      var path;

      if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
        path = getSectorWithCorner({
          cx: cx,
          cy: cy,
          innerRadius: innerRadius,
          outerRadius: outerRadius,
          cornerRadius: Math.min(cr, deltaRadius / 2),
          forceCornerRadius: forceCornerRadius,
          cornerIsExternal: cornerIsExternal,
          startAngle: startAngle,
          endAngle: endAngle
        });
      } else {
        path = getSectorPath({
          cx: cx,
          cy: cy,
          innerRadius: innerRadius,
          outerRadius: outerRadius,
          startAngle: startAngle,
          endAngle: endAngle
        });
      }

      return /*#__PURE__*/React.createElement("path", _extends$c({}, filterProps(this.props, true), {
        className: layerClass,
        d: path,
        role: "img"
      }));
    }
  }]);

  return Sector;
}(react.exports.PureComponent);
Sector.defaultProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: false,
  cornerIsExternal: false
};

function _typeof$7(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$7 = function _typeof(obj) { return typeof obj; }; } else { _typeof$7 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$7(obj); }

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty$9(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); if (staticProps) _defineProperties$8(Constructor, staticProps); return Constructor; }

function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$7(subClass, superClass); }

function _setPrototypeOf$7(o, p) { _setPrototypeOf$7 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$7(o, p); }

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf$7(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$7(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$7(this, result); }; }

function _possibleConstructorReturn$7(self, call) { if (call && (_typeof$7(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$7(self); }

function _assertThisInitialized$7(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$7(o) { _getPrototypeOf$7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$7(o); }
var CURVE_FACTORIES = {
  curveBasisClosed: curveBasisClosed,
  curveBasisOpen: curveBasisOpen,
  curveBasis: curveBasis,
  curveLinearClosed: curveLinearClosed,
  curveLinear: curveLinear,
  curveMonotoneX: monotoneX,
  curveMonotoneY: monotoneY,
  curveNatural: curveNatural,
  curveStep: curveStep,
  curveStepAfter: stepAfter,
  curveStepBefore: stepBefore
};

var defined = function defined(p) {
  return p.x === +p.x && p.y === +p.y;
};

var getX = function getX(p) {
  return p.x;
};

var getY = function getY(p) {
  return p.y;
};

var getCurveFactory = function getCurveFactory(type, layout) {
  if (isFunction_1(type)) {
    return type;
  }

  var name = "curve".concat(upperFirst_1(type));

  if (name === 'curveMonotone' && layout) {
    return CURVE_FACTORIES["".concat(name).concat(layout === 'vertical' ? 'Y' : 'X')];
  }

  return CURVE_FACTORIES[name] || curveLinear;
};

var Curve = /*#__PURE__*/function (_PureComponent) {
  _inherits$7(Curve, _PureComponent);

  var _super = _createSuper$7(Curve);

  function Curve() {
    _classCallCheck$8(this, Curve);

    return _super.apply(this, arguments);
  }

  _createClass$8(Curve, [{
    key: "getPath",
    value:
    /**
     * Calculate the path of curve
     * @return {String} path
     */
    function getPath() {
      var _this$props = this.props,
          type = _this$props.type,
          points = _this$props.points,
          baseLine = _this$props.baseLine,
          layout = _this$props.layout,
          connectNulls = _this$props.connectNulls;
      var curveFactory = getCurveFactory(type, layout);
      var formatPoints = connectNulls ? points.filter(function (entry) {
        return defined(entry);
      }) : points;
      var lineFunction;

      if (isArray_1(baseLine)) {
        var formatBaseLine = connectNulls ? baseLine.filter(function (base) {
          return defined(base);
        }) : baseLine;
        var areaPoints = formatPoints.map(function (entry, index) {
          return _objectSpread$9(_objectSpread$9({}, entry), {}, {
            base: formatBaseLine[index]
          });
        });

        if (layout === 'vertical') {
          lineFunction = shapeArea().y(getY).x1(getX).x0(function (d) {
            return d.base.x;
          });
        } else {
          lineFunction = shapeArea().x(getX).y1(getY).y0(function (d) {
            return d.base.y;
          });
        }

        lineFunction.defined(defined).curve(curveFactory);
        return lineFunction(areaPoints);
      }

      if (layout === 'vertical' && isNumber(baseLine)) {
        lineFunction = shapeArea().y(getY).x1(getX).x0(baseLine);
      } else if (isNumber(baseLine)) {
        lineFunction = shapeArea().x(getX).y1(getY).y0(baseLine);
      } else {
        lineFunction = shapeLine().x(getX).y(getY);
      }

      lineFunction.defined(defined).curve(curveFactory);
      return lineFunction(formatPoints);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          points = _this$props2.points,
          path = _this$props2.path,
          pathRef = _this$props2.pathRef;

      if ((!points || !points.length) && !path) {
        return null;
      }

      var realPath = points && points.length ? this.getPath() : path;
      return /*#__PURE__*/React.createElement("path", _extends$b({}, filterProps(this.props), adaptEventHandlers(this.props), {
        className: classNames('recharts-curve', className),
        d: realPath,
        ref: pathRef
      }));
    }
  }]);

  return Curve;
}(react.exports.PureComponent);
Curve.defaultProps = {
  type: 'linear',
  points: [],
  connectNulls: false
};

function _typeof$6(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); return Constructor; }

function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$6(subClass, superClass); }

function _setPrototypeOf$6(o, p) { _setPrototypeOf$6 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$6(o, p); }

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf$6(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$6(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$6(this, result); }; }

function _possibleConstructorReturn$6(self, call) { if (call && (_typeof$6(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$6(self); }

function _assertThisInitialized$6(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$6(o) { _getPrototypeOf$6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$6(o); }

var getRectanglePath = function getRectanglePath(x, y, width, height, radius) {
  var maxRadius = Math.min(Math.abs(width) / 2, Math.abs(height) / 2);
  var ySign = height >= 0 ? 1 : -1;
  var xSign = width >= 0 ? 1 : -1;
  var clockWise = height >= 0 && width >= 0 || height < 0 && width < 0 ? 1 : 0;
  var path;

  if (maxRadius > 0 && radius instanceof Array) {
    var newRadius = [0, 0, 0, 0];

    for (var i = 0, len = 4; i < len; i++) {
      newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
    }

    path = "M".concat(x, ",").concat(y + ySign * newRadius[0]);

    if (newRadius[0] > 0) {
      path += "A ".concat(newRadius[0], ",").concat(newRadius[0], ",0,0,").concat(clockWise, ",").concat(x + xSign * newRadius[0], ",").concat(y);
    }

    path += "L ".concat(x + width - xSign * newRadius[1], ",").concat(y);

    if (newRadius[1] > 0) {
      path += "A ".concat(newRadius[1], ",").concat(newRadius[1], ",0,0,").concat(clockWise, ",\n        ").concat(x + width, ",").concat(y + ySign * newRadius[1]);
    }

    path += "L ".concat(x + width, ",").concat(y + height - ySign * newRadius[2]);

    if (newRadius[2] > 0) {
      path += "A ".concat(newRadius[2], ",").concat(newRadius[2], ",0,0,").concat(clockWise, ",\n        ").concat(x + width - xSign * newRadius[2], ",").concat(y + height);
    }

    path += "L ".concat(x + xSign * newRadius[3], ",").concat(y + height);

    if (newRadius[3] > 0) {
      path += "A ".concat(newRadius[3], ",").concat(newRadius[3], ",0,0,").concat(clockWise, ",\n        ").concat(x, ",").concat(y + height - ySign * newRadius[3]);
    }

    path += 'Z';
  } else if (maxRadius > 0 && radius === +radius && radius > 0) {
    var _newRadius = Math.min(maxRadius, radius);

    path = "M ".concat(x, ",").concat(y + ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + xSign * _newRadius, ",").concat(y, "\n            L ").concat(x + width - xSign * _newRadius, ",").concat(y, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + width, ",").concat(y + ySign * _newRadius, "\n            L ").concat(x + width, ",").concat(y + height - ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + width - xSign * _newRadius, ",").concat(y + height, "\n            L ").concat(x + xSign * _newRadius, ",").concat(y + height, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x, ",").concat(y + height - ySign * _newRadius, " Z");
  } else {
    path = "M ".concat(x, ",").concat(y, " h ").concat(width, " v ").concat(height, " h ").concat(-width, " Z");
  }

  return path;
};

var isInRectangle = function isInRectangle(point, rect) {
  if (!point || !rect) {
    return false;
  }

  var px = point.x,
      py = point.y;
  var x = rect.x,
      y = rect.y,
      width = rect.width,
      height = rect.height;

  if (Math.abs(width) > 0 && Math.abs(height) > 0) {
    var minX = Math.min(x, x + width);
    var maxX = Math.max(x, x + width);
    var minY = Math.min(y, y + height);
    var maxY = Math.max(y, y + height);
    return px >= minX && px <= maxX && py >= minY && py <= maxY;
  }

  return false;
};
var Rectangle = /*#__PURE__*/function (_PureComponent) {
  _inherits$6(Rectangle, _PureComponent);

  var _super = _createSuper$6(Rectangle);

  function Rectangle() {
    var _this;

    _classCallCheck$7(this, Rectangle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      totalLength: -1
    };
    _this.node = void 0;
    return _this;
  }

  _createClass$7(Rectangle, [{
    key: "componentDidMount",
    value:
    /* eslint-disable  react/no-did-mount-set-state */
    function componentDidMount() {
      if (this.node && this.node.getTotalLength) {
        try {
          var totalLength = this.node.getTotalLength();

          if (totalLength) {
            this.setState({
              totalLength: totalLength
            });
          }
        } catch (err) {// calculate total length error
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          width = _this$props.width,
          height = _this$props.height,
          radius = _this$props.radius,
          className = _this$props.className;
      var totalLength = this.state.totalLength;
      var _this$props2 = this.props,
          animationEasing = _this$props2.animationEasing,
          animationDuration = _this$props2.animationDuration,
          animationBegin = _this$props2.animationBegin,
          isAnimationActive = _this$props2.isAnimationActive,
          isUpdateAnimationActive = _this$props2.isUpdateAnimationActive;

      if (x !== +x || y !== +y || width !== +width || height !== +height || width === 0 || height === 0) {
        return null;
      }

      var layerClass = classNames('recharts-rectangle', className);

      if (!isUpdateAnimationActive) {
        return /*#__PURE__*/React.createElement("path", _extends$a({}, filterProps(this.props, true), {
          className: layerClass,
          d: getRectanglePath(x, y, width, height, radius)
        }));
      }

      return /*#__PURE__*/React.createElement(Animate, {
        canBegin: totalLength > 0,
        from: {
          width: width,
          height: height,
          x: x,
          y: y
        },
        to: {
          width: width,
          height: height,
          x: x,
          y: y
        },
        duration: animationDuration,
        animationEasing: animationEasing,
        isActive: isUpdateAnimationActive
      }, function (_ref) {
        var currWidth = _ref.width,
            currHeight = _ref.height,
            currX = _ref.x,
            currY = _ref.y;
        return /*#__PURE__*/React.createElement(Animate, {
          canBegin: totalLength > 0,
          from: "0px ".concat(totalLength === -1 ? 1 : totalLength, "px"),
          to: "".concat(totalLength, "px 0px"),
          attributeName: "strokeDasharray",
          begin: animationBegin,
          duration: animationDuration,
          isActive: isAnimationActive,
          easing: animationEasing
        }, /*#__PURE__*/React.createElement("path", _extends$a({}, filterProps(_this2.props, true), {
          className: layerClass,
          d: getRectanglePath(currX, currY, currWidth, currHeight, radius),
          ref: function ref(node) {
            _this2.node = node;
          }
        })));
      });
    }
  }]);

  return Rectangle;
}(react.exports.PureComponent);
Rectangle.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: false,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
};

function _typeof$5(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); return Constructor; }

function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$5(subClass, superClass); }

function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf$5(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$5(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$5(this, result); }; }

function _possibleConstructorReturn$5(self, call) { if (call && (_typeof$5(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$5(self); }

function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$5(o) { _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$5(o); }
var Dot = /*#__PURE__*/function (_PureComponent) {
  _inherits$5(Dot, _PureComponent);

  var _super = _createSuper$5(Dot);

  function Dot() {
    _classCallCheck$6(this, Dot);

    return _super.apply(this, arguments);
  }

  _createClass$6(Dot, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cx = _this$props.cx,
          cy = _this$props.cy,
          r = _this$props.r,
          className = _this$props.className;
      var layerClass = classNames('recharts-dot', className);

      if (cx === +cx && cy === +cy && r === +r) {
        return /*#__PURE__*/React.createElement("circle", _extends$9({}, filterProps(this.props), adaptEventHandlers(this.props), {
          className: layerClass,
          cx: cx,
          cy: cy,
          r: r
        }));
      }

      return null;
    }
  }]);

  return Dot;
}(react.exports.PureComponent);

function _typeof$4(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf$4(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$4(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$4(this, result); }; }

function _possibleConstructorReturn$4(self, call) { if (call && (_typeof$4(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }
var Cross = /*#__PURE__*/function (_PureComponent) {
  _inherits$4(Cross, _PureComponent);

  var _super = _createSuper$4(Cross);

  function Cross() {
    _classCallCheck$5(this, Cross);

    return _super.apply(this, arguments);
  }

  _createClass$5(Cross, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          width = _this$props.width,
          height = _this$props.height,
          top = _this$props.top,
          left = _this$props.left,
          className = _this$props.className;

      if (!isNumber(x) || !isNumber(y) || !isNumber(width) || !isNumber(height) || !isNumber(top) || !isNumber(left)) {
        return null;
      }

      return /*#__PURE__*/React.createElement("path", _extends$8({}, filterProps(this.props, true), {
        className: classNames('recharts-cross', className),
        d: Cross.getPath(x, y, width, height, top, left)
      }));
    }
  }], [{
    key: "getPath",
    value: function getPath(x, y, width, height, top, left) {
      return "M".concat(x, ",").concat(top, "v").concat(height, "M").concat(left, ",").concat(y, "h").concat(width);
    }
  }]);

  return Cross;
}(react.exports.PureComponent);
Cross.defaultProps = {
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  width: 0,
  height: 0
};

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeCeil = Math.ceil,
    nativeMax$1 = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange$1(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax$1(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

var _baseRange = baseRange$1;

var toNumber = toNumber_1;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite$2(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite$2;

var baseRange = _baseRange,
    isIterateeCall$2 = _isIterateeCall,
    toFinite$1 = toFinite_1;

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange$1(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall$2(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite$1(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite$1(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite$1(step);
    return baseRange(start, end, step, fromRight);
  };
}

var _createRange = createRange$1;

var createRange = _createRange;

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

var range_1 = range;

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty$8(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PREFIX_LIST = ['Webkit', 'Moz', 'O', 'ms'];
var generatePrefixStyle = function generatePrefixStyle(name, value) {
  if (!name) {
    return null;
  }

  var camelName = name.replace(/(\w)/, function (v) {
    return v.toUpperCase();
  });
  var result = PREFIX_LIST.reduce(function (res, entry) {
    return _objectSpread$8(_objectSpread$8({}, res), {}, _defineProperty$8({}, entry + camelName, value));
  }, {});
  result[name] = value;
  return result;
};

function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty$7(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf$3(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$3(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$3(this, result); }; }

function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

var createScale = function createScale(_ref) {
  var data = _ref.data,
      startIndex = _ref.startIndex,
      endIndex = _ref.endIndex,
      x = _ref.x,
      width = _ref.width,
      travellerWidth = _ref.travellerWidth;

  if (!data || !data.length) {
    return {};
  }

  var len = data.length;
  var scale = point().domain(range_1(0, len)).range([x, x + width - travellerWidth]);
  var scaleValues = scale.domain().map(function (entry) {
    return scale(entry);
  });
  return {
    isTextActive: false,
    isSlideMoving: false,
    isTravellerMoving: false,
    startX: scale(startIndex),
    endX: scale(endIndex),
    scale: scale,
    scaleValues: scaleValues
  };
};

var isTouch = function isTouch(e) {
  return e.changedTouches && !!e.changedTouches.length;
};

var Brush = /*#__PURE__*/function (_PureComponent) {
  _inherits$3(Brush, _PureComponent);

  var _super = _createSuper$3(Brush);

  function Brush(props) {
    var _this;

    _classCallCheck$4(this, Brush);

    _this = _super.call(this, props);
    _this.leaveTimer = void 0;
    _this.travellerDragStartHandlers = void 0;

    _this.handleDrag = function (e) {
      if (_this.leaveTimer) {
        clearTimeout(_this.leaveTimer);
        _this.leaveTimer = null;
      }

      if (_this.state.isTravellerMoving) {
        _this.handleTravellerMove(e);
      } else if (_this.state.isSlideMoving) {
        _this.handleSlideDrag(e);
      }
    };

    _this.handleTouchMove = function (e) {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        _this.handleDrag(e.changedTouches[0]);
      }
    };

    _this.handleDragEnd = function () {
      _this.setState({
        isTravellerMoving: false,
        isSlideMoving: false
      });

      _this.detachDragEndListener();
    };

    _this.handleLeaveWrapper = function () {
      if (_this.state.isTravellerMoving || _this.state.isSlideMoving) {
        _this.leaveTimer = window.setTimeout(_this.handleDragEnd, _this.props.leaveTimeOut);
      }
    };

    _this.handleEnterSlideOrTraveller = function () {
      _this.setState({
        isTextActive: true
      });
    };

    _this.handleLeaveSlideOrTraveller = function () {
      _this.setState({
        isTextActive: false
      });
    };

    _this.handleSlideDragStart = function (e) {
      var event = isTouch(e) ? e.changedTouches[0] : e;

      _this.setState({
        isTravellerMoving: false,
        isSlideMoving: true,
        slideMoveStartX: event.pageX
      });

      _this.attachDragEndListener();
    };

    _this.travellerDragStartHandlers = {
      startX: _this.handleTravellerDragStart.bind(_assertThisInitialized$3(_this), 'startX'),
      endX: _this.handleTravellerDragStart.bind(_assertThisInitialized$3(_this), 'endX')
    };
    _this.state = {};
    return _this;
  }

  _createClass$4(Brush, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.leaveTimer) {
        clearTimeout(this.leaveTimer);
        this.leaveTimer = null;
      }

      this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function getIndex(_ref2) {
      var startX = _ref2.startX,
          endX = _ref2.endX;
      var scaleValues = this.state.scaleValues;
      var _this$props = this.props,
          gap = _this$props.gap,
          data = _this$props.data;
      var lastIndex = data.length - 1;
      var min = Math.min(startX, endX);
      var max = Math.max(startX, endX);
      var minIndex = Brush.getIndexInRange(scaleValues, min);
      var maxIndex = Brush.getIndexInRange(scaleValues, max);
      return {
        startIndex: minIndex - minIndex % gap,
        endIndex: maxIndex === lastIndex ? lastIndex : maxIndex - maxIndex % gap
      };
    }
  }, {
    key: "getTextOfTick",
    value: function getTextOfTick(index) {
      var _this$props2 = this.props,
          data = _this$props2.data,
          tickFormatter = _this$props2.tickFormatter,
          dataKey = _this$props2.dataKey;
      var text = getValueByDataKey(data[index], dataKey, index);
      return isFunction_1(tickFormatter) ? tickFormatter(text, index) : text;
    }
  }, {
    key: "attachDragEndListener",
    value: function attachDragEndListener() {
      window.addEventListener('mouseup', this.handleDragEnd, true);
      window.addEventListener('touchend', this.handleDragEnd, true);
      window.addEventListener('mousemove', this.handleDrag, true);
    }
  }, {
    key: "detachDragEndListener",
    value: function detachDragEndListener() {
      window.removeEventListener('mouseup', this.handleDragEnd, true);
      window.removeEventListener('touchend', this.handleDragEnd, true);
      window.removeEventListener('mousemove', this.handleDrag, true);
    }
  }, {
    key: "handleSlideDrag",
    value: function handleSlideDrag(e) {
      var _this$state = this.state,
          slideMoveStartX = _this$state.slideMoveStartX,
          startX = _this$state.startX,
          endX = _this$state.endX;
      var _this$props3 = this.props,
          x = _this$props3.x,
          width = _this$props3.width,
          travellerWidth = _this$props3.travellerWidth,
          startIndex = _this$props3.startIndex,
          endIndex = _this$props3.endIndex,
          onChange = _this$props3.onChange;
      var delta = e.pageX - slideMoveStartX;

      if (delta > 0) {
        delta = Math.min(delta, x + width - travellerWidth - endX, x + width - travellerWidth - startX);
      } else if (delta < 0) {
        delta = Math.max(delta, x - startX, x - endX);
      }

      var newIndex = this.getIndex({
        startX: startX + delta,
        endX: endX + delta
      });

      if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
        onChange(newIndex);
      }

      this.setState({
        startX: startX + delta,
        endX: endX + delta,
        slideMoveStartX: e.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function handleTravellerDragStart(id, e) {
      var event = isTouch(e) ? e.changedTouches[0] : e;
      this.setState({
        isSlideMoving: false,
        isTravellerMoving: true,
        movingTravellerId: id,
        brushMoveStartX: event.pageX
      });
      this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function handleTravellerMove(e) {
      var _this$setState;

      var _this$state2 = this.state,
          brushMoveStartX = _this$state2.brushMoveStartX,
          movingTravellerId = _this$state2.movingTravellerId,
          endX = _this$state2.endX,
          startX = _this$state2.startX;
      var prevValue = this.state[movingTravellerId];
      var _this$props4 = this.props,
          x = _this$props4.x,
          width = _this$props4.width,
          travellerWidth = _this$props4.travellerWidth,
          onChange = _this$props4.onChange,
          gap = _this$props4.gap,
          data = _this$props4.data;
      var params = {
        startX: this.state.startX,
        endX: this.state.endX
      };
      var delta = e.pageX - brushMoveStartX;

      if (delta > 0) {
        delta = Math.min(delta, x + width - travellerWidth - prevValue);
      } else if (delta < 0) {
        delta = Math.max(delta, x - prevValue);
      }

      params[movingTravellerId] = prevValue + delta;
      var newIndex = this.getIndex(params);
      var startIndex = newIndex.startIndex,
          endIndex = newIndex.endIndex;

      var isFullGap = function isFullGap() {
        var lastIndex = data.length - 1;

        if (movingTravellerId === 'startX' && (endX > startX ? startIndex % gap === 0 : endIndex % gap === 0) || endX < startX && endIndex === lastIndex || movingTravellerId === 'endX' && (endX > startX ? endIndex % gap === 0 : startIndex % gap === 0) || endX > startX && endIndex === lastIndex) {
          return true;
        }

        return false;
      };

      this.setState((_this$setState = {}, _defineProperty$7(_this$setState, movingTravellerId, prevValue + delta), _defineProperty$7(_this$setState, "brushMoveStartX", e.pageX), _this$setState), function () {
        if (onChange) {
          if (isFullGap()) {
            onChange(newIndex);
          }
        }
      });
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      var _this$props5 = this.props,
          x = _this$props5.x,
          y = _this$props5.y,
          width = _this$props5.width,
          height = _this$props5.height,
          fill = _this$props5.fill,
          stroke = _this$props5.stroke;
      return /*#__PURE__*/React.createElement("rect", {
        stroke: stroke,
        fill: fill,
        x: x,
        y: y,
        width: width,
        height: height
      });
    }
  }, {
    key: "renderPanorama",
    value: function renderPanorama() {
      var _this$props6 = this.props,
          x = _this$props6.x,
          y = _this$props6.y,
          width = _this$props6.width,
          height = _this$props6.height,
          data = _this$props6.data,
          children = _this$props6.children,
          padding = _this$props6.padding;
      var chartElement = react.exports.Children.only(children);

      if (!chartElement) {
        return null;
      }

      return /*#__PURE__*/React.cloneElement(chartElement, {
        x: x,
        y: y,
        width: width,
        height: height,
        margin: padding,
        compact: true,
        data: data
      });
    }
  }, {
    key: "renderTravellerLayer",
    value: function renderTravellerLayer(travellerX, id) {
      var _this$props7 = this.props,
          y = _this$props7.y,
          travellerWidth = _this$props7.travellerWidth,
          height = _this$props7.height,
          traveller = _this$props7.traveller;
      var x = Math.max(travellerX, this.props.x);

      var travellerProps = _objectSpread$7(_objectSpread$7({}, filterProps(this.props)), {}, {
        x: x,
        y: y,
        width: travellerWidth,
        height: height
      });

      return /*#__PURE__*/React.createElement(Layer, {
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[id],
        onTouchStart: this.travellerDragStartHandlers[id],
        style: {
          cursor: 'col-resize'
        }
      }, Brush.renderTraveller(traveller, travellerProps));
    }
  }, {
    key: "renderSlide",
    value: function renderSlide(startX, endX) {
      var _this$props8 = this.props,
          y = _this$props8.y,
          height = _this$props8.height,
          stroke = _this$props8.stroke,
          travellerWidth = _this$props8.travellerWidth;
      var x = Math.min(startX, endX) + travellerWidth;
      var width = Math.max(Math.abs(endX - startX) - travellerWidth, 0);
      return /*#__PURE__*/React.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: 'move'
        },
        stroke: "none",
        fill: stroke,
        fillOpacity: 0.2,
        x: x,
        y: y,
        width: width,
        height: height
      });
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var _this$props9 = this.props,
          startIndex = _this$props9.startIndex,
          endIndex = _this$props9.endIndex,
          y = _this$props9.y,
          height = _this$props9.height,
          travellerWidth = _this$props9.travellerWidth,
          stroke = _this$props9.stroke;
      var _this$state3 = this.state,
          startX = _this$state3.startX,
          endX = _this$state3.endX;
      var offset = 5;
      var attrs = {
        pointerEvents: 'none',
        fill: stroke
      };
      return /*#__PURE__*/React.createElement(Layer, {
        className: "recharts-brush-texts"
      }, /*#__PURE__*/React.createElement(Text, _extends$7({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(startX, endX) - offset,
        y: y + height / 2
      }, attrs), this.getTextOfTick(startIndex)), /*#__PURE__*/React.createElement(Text, _extends$7({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(startX, endX) + travellerWidth + offset,
        y: y + height / 2
      }, attrs), this.getTextOfTick(endIndex)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props10 = this.props,
          data = _this$props10.data,
          className = _this$props10.className,
          children = _this$props10.children,
          x = _this$props10.x,
          y = _this$props10.y,
          width = _this$props10.width,
          height = _this$props10.height,
          alwaysShowText = _this$props10.alwaysShowText;
      var _this$state4 = this.state,
          startX = _this$state4.startX,
          endX = _this$state4.endX,
          isTextActive = _this$state4.isTextActive,
          isSlideMoving = _this$state4.isSlideMoving,
          isTravellerMoving = _this$state4.isTravellerMoving;

      if (!data || !data.length || !isNumber(x) || !isNumber(y) || !isNumber(width) || !isNumber(height) || width <= 0 || height <= 0) {
        return null;
      }

      var layerClass = classNames('recharts-brush', className);
      var isPanoramic = React.Children.count(children) === 1;
      var style = generatePrefixStyle('userSelect', 'none');
      return /*#__PURE__*/React.createElement(Layer, {
        className: layerClass,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: style
      }, this.renderBackground(), isPanoramic && this.renderPanorama(), this.renderSlide(startX, endX), this.renderTravellerLayer(startX, 'startX'), this.renderTravellerLayer(endX, 'endX'), (isTextActive || isSlideMoving || isTravellerMoving || alwaysShowText) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function renderDefaultTraveller(props) {
      var x = props.x,
          y = props.y,
          width = props.width,
          height = props.height,
          stroke = props.stroke;
      var lineY = Math.floor(y + height / 2) - 1;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
        x: x,
        y: y,
        width: width,
        height: height,
        fill: stroke,
        stroke: "none"
      }), /*#__PURE__*/React.createElement("line", {
        x1: x + 1,
        y1: lineY,
        x2: x + width - 1,
        y2: lineY,
        fill: "none",
        stroke: "#fff"
      }), /*#__PURE__*/React.createElement("line", {
        x1: x + 1,
        y1: lineY + 2,
        x2: x + width - 1,
        y2: lineY + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function renderTraveller(option, props) {
      var rectangle;

      if ( /*#__PURE__*/React.isValidElement(option)) {
        rectangle = /*#__PURE__*/React.cloneElement(option, props);
      } else if (isFunction_1(option)) {
        rectangle = option(props);
      } else {
        rectangle = Brush.renderDefaultTraveller(props);
      }

      return rectangle;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var data = nextProps.data,
          width = nextProps.width,
          x = nextProps.x,
          travellerWidth = nextProps.travellerWidth,
          updateId = nextProps.updateId,
          startIndex = nextProps.startIndex,
          endIndex = nextProps.endIndex;

      if (data !== prevState.prevData || updateId !== prevState.prevUpdateId) {
        return _objectSpread$7({
          prevData: data,
          prevTravellerWidth: travellerWidth,
          prevUpdateId: updateId,
          prevX: x,
          prevWidth: width
        }, data && data.length ? createScale({
          data: data,
          width: width,
          x: x,
          travellerWidth: travellerWidth,
          startIndex: startIndex,
          endIndex: endIndex
        }) : {
          scale: null,
          scaleValues: null
        });
      }

      if (prevState.scale && (width !== prevState.prevWidth || x !== prevState.prevX || travellerWidth !== prevState.prevTravellerWidth)) {
        prevState.scale.range([x, x + width - travellerWidth]);
        var scaleValues = prevState.scale.domain().map(function (entry) {
          return prevState.scale(entry);
        });
        return {
          prevData: data,
          prevTravellerWidth: travellerWidth,
          prevUpdateId: updateId,
          prevX: x,
          prevWidth: width,
          startX: prevState.scale(nextProps.startIndex),
          endX: prevState.scale(nextProps.endIndex),
          scaleValues: scaleValues
        };
      }

      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function getIndexInRange(range, x) {
      var len = range.length;
      var start = 0;
      var end = len - 1;

      while (end - start > 1) {
        var middle = Math.floor((start + end) / 2);

        if (range[middle] > x) {
          end = middle;
        } else {
          start = middle;
        }
      }

      return x >= range[end] ? end : start;
    }
  }]);

  return Brush;
}(react.exports.PureComponent);
Brush.displayName = 'Brush';
Brush.defaultProps = {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: '#fff',
  stroke: '#666',
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1000,
  alwaysShowText: false
};

var baseEach$1 = _baseEach;

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome$1(collection, predicate) {
  var result;

  baseEach$1(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

var _baseSome = baseSome$1;

var arraySome = _arraySome,
    baseIteratee$4 = _baseIteratee,
    baseSome = _baseSome,
    isArray$1 = isArray_1,
    isIterateeCall$1 = _isIterateeCall;

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray$1(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall$1(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee$4(predicate));
}

var some_1 = some;

var ifOverflowMatches = function ifOverflowMatches(props, value) {
  var alwaysShow = props.alwaysShow;
  var ifOverflow = props.ifOverflow;

  if (alwaysShow) {
    ifOverflow = 'extendDomain';
  }

  return ifOverflow === value;
};

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */

function arrayEvery$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

var _arrayEvery = arrayEvery$1;

var baseEach = _baseEach;

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery$1(collection, predicate) {
  var result = true;
  baseEach(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

var _baseEvery = baseEvery$1;

var arrayEvery = _arrayEvery,
    baseEvery = _baseEvery,
    baseIteratee$3 = _baseIteratee,
    isArray = isArray_1,
    isIterateeCall = _isIterateeCall;

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = isArray(collection) ? arrayEvery : baseEvery;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee$3(predicate));
}

var every_1 = every;

var defineProperty = _defineProperty$i;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue$1(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue$1;

var baseAssignValue = _baseAssignValue,
    baseForOwn = _baseForOwn,
    baseIteratee$2 = _baseIteratee;

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee$2(iteratee);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

var mapValues_1 = mapValues;

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Calculate the scale function, position, width, height of axes
 * @param  {Object} props     Latest props
 * @param  {Object} axisMap   The configuration of axes
 * @param  {Object} offset    The offset of main part in the svg element
 * @param  {String} axisType  The type of axes, x-axis or y-axis
 * @param  {String} chartName The name of chart
 * @return {Object} Configuration
 */

var formatAxisMap = function formatAxisMap(props, axisMap, offset, axisType, chartName) {
  var width = props.width,
      height = props.height,
      layout = props.layout,
      children = props.children;
  var ids = Object.keys(axisMap);
  var steps = {
    left: offset.left,
    leftMirror: offset.left,
    right: width - offset.right,
    rightMirror: width - offset.right,
    top: offset.top,
    topMirror: offset.top,
    bottom: height - offset.bottom,
    bottomMirror: height - offset.bottom
  };
  var hasBar = !!findChildByType(children, 'Bar');
  return ids.reduce(function (result, id) {
    var axis = axisMap[id];
    var orientation = axis.orientation,
        domain = axis.domain,
        _axis$padding = axis.padding,
        padding = _axis$padding === void 0 ? {} : _axis$padding,
        mirror = axis.mirror,
        reversed = axis.reversed;
    var offsetKey = "".concat(orientation).concat(mirror ? 'Mirror' : '');
    var calculatedPadding, range, x, y, needSpace;

    if (axis.type === 'number' && (axis.padding === 'gap' || axis.padding === 'no-gap')) {
      var diff = domain[1] - domain[0];
      var smallestDistanceBetweenValues = Infinity;
      var sortedValues = axis.categoricalDomain.sort();
      sortedValues.forEach(function (value, index) {
        if (index > 0) {
          smallestDistanceBetweenValues = Math.min((value || 0) - (sortedValues[index - 1] || 0), smallestDistanceBetweenValues);
        }
      });
      var smallestDistanceInPercent = smallestDistanceBetweenValues / diff;
      var rangeWidth = axis.layout === 'vertical' ? offset.height : offset.width;

      if (axis.padding === 'gap') {
        calculatedPadding = smallestDistanceInPercent * rangeWidth / 2;
      }

      if (axis.padding === 'no-gap') {
        var gap = getPercentValue(props.barCategoryGap, smallestDistanceInPercent * rangeWidth);
        var halfBand = smallestDistanceInPercent * rangeWidth / 2;
        calculatedPadding = halfBand - gap - (halfBand - gap) / rangeWidth * gap;
      }
    }

    if (axisType === 'xAxis') {
      range = [offset.left + (padding.left || 0) + (calculatedPadding || 0), offset.left + offset.width - (padding.right || 0) - (calculatedPadding || 0)];
    } else if (axisType === 'yAxis') {
      range = layout === 'horizontal' ? [offset.top + offset.height - (padding.bottom || 0), offset.top + (padding.top || 0)] : [offset.top + (padding.top || 0) + (calculatedPadding || 0), offset.top + offset.height - (padding.bottom || 0) - (calculatedPadding || 0)];
    } else {
      range = axis.range;
    }

    if (reversed) {
      range = [range[1], range[0]];
    }

    var _parseScale = parseScale(axis, chartName, hasBar),
        scale = _parseScale.scale,
        realScaleType = _parseScale.realScaleType;

    scale.domain(domain).range(range);
    checkDomainOfScale(scale);
    var ticks = getTicksOfScale(scale, _objectSpread$6(_objectSpread$6({}, axis), {}, {
      realScaleType: realScaleType
    }));

    if (axisType === 'xAxis') {
      needSpace = orientation === 'top' && !mirror || orientation === 'bottom' && mirror;
      x = offset.left;
      y = steps[offsetKey] - needSpace * axis.height;
    } else if (axisType === 'yAxis') {
      needSpace = orientation === 'left' && !mirror || orientation === 'right' && mirror;
      x = steps[offsetKey] - needSpace * axis.width;
      y = offset.top;
    }

    var finalAxis = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, axis), ticks), {}, {
      realScaleType: realScaleType,
      x: x,
      y: y,
      scale: scale,
      width: axisType === 'xAxis' ? offset.width : axis.width,
      height: axisType === 'yAxis' ? offset.height : axis.height
    });

    finalAxis.bandSize = getBandSizeOfAxis(finalAxis, ticks);

    if (!axis.hide && axisType === 'xAxis') {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
    } else if (!axis.hide) {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
    }

    return _objectSpread$6(_objectSpread$6({}, result), {}, _defineProperty$6({}, id, finalAxis));
  }, {});
};
var rectWithPoints = function rectWithPoints(_ref, _ref2) {
  var x1 = _ref.x,
      y1 = _ref.y;
  var x2 = _ref2.x,
      y2 = _ref2.y;
  return {
    x: Math.min(x1, x2),
    y: Math.min(y1, y2),
    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1)
  };
};
/**
 * Compute the x, y, width, and height of a box from two reference points.
 * @param  {Object} coords     x1, x2, y1, and y2
 * @return {Object} object
 */

var rectWithCoords = function rectWithCoords(_ref3) {
  var x1 = _ref3.x1,
      y1 = _ref3.y1,
      x2 = _ref3.x2,
      y2 = _ref3.y2;
  return rectWithPoints({
    x: x1,
    y: y1
  }, {
    x: x2,
    y: y2
  });
};
var ScaleHelper = /*#__PURE__*/function () {
  function ScaleHelper(scale) {
    _classCallCheck$3(this, ScaleHelper);

    this.scale = void 0;
    this.scale = scale;
  }

  _createClass$3(ScaleHelper, [{
    key: "domain",
    get: function get() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function get() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function get() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function get() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function get() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function apply(value) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          bandAware = _ref4.bandAware,
          position = _ref4.position;

      if (value === undefined) {
        return undefined;
      }

      if (position) {
        switch (position) {
          case 'start':
            {
              return this.scale(value);
            }

          case 'middle':
            {
              var offset = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(value) + offset;
            }

          case 'end':
            {
              var _offset = this.bandwidth ? this.bandwidth() : 0;

              return this.scale(value) + _offset;
            }

          default:
            {
              return this.scale(value);
            }
        }
      }

      if (bandAware) {
        var _offset2 = this.bandwidth ? this.bandwidth() / 2 : 0;

        return this.scale(value) + _offset2;
      }

      return this.scale(value);
    }
  }, {
    key: "isInRange",
    value: function isInRange(value) {
      var range = this.range();
      var first = range[0];
      var last = range[range.length - 1];
      return first <= last ? value >= first && value <= last : value >= last && value <= first;
    }
  }], [{
    key: "create",
    value: function create(obj) {
      return new ScaleHelper(obj);
    }
  }]);

  return ScaleHelper;
}();
ScaleHelper.EPS = 1e-4;
var createLabeledScales = function createLabeledScales(options) {
  var scales = Object.keys(options).reduce(function (res, key) {
    return _objectSpread$6(_objectSpread$6({}, res), {}, _defineProperty$6({}, key, ScaleHelper.create(options[key])));
  }, {});
  return _objectSpread$6(_objectSpread$6({}, scales), {}, {
    apply: function apply(coord) {
      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          bandAware = _ref5.bandAware,
          position = _ref5.position;

      return mapValues_1(coord, function (value, label) {
        return scales[label].apply(value, {
          bandAware: bandAware,
          position: position
        });
      });
    },
    isInRange: function isInRange(coord) {
      return every_1(coord, function (value, label) {
        return scales[label].isInRange(value);
      });
    }
  });
};

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray$2(arr, i) { return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$2(); }

function _nonIterableRest$2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$2(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$2(arr) { if (Array.isArray(arr)) return arr; }

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var renderLine = function renderLine(option, props) {
  var line;

  if ( /*#__PURE__*/React.isValidElement(option)) {
    line = /*#__PURE__*/React.cloneElement(option, props);
  } else if (isFunction_1(option)) {
    line = option(props);
  } else {
    line = /*#__PURE__*/React.createElement("line", _extends$6({}, props, {
      className: "recharts-reference-line-line"
    }));
  }

  return line;
}; // TODO: ScaleHelper


var getEndPoints = function getEndPoints(scales, isFixedX, isFixedY, isSegment, props) {
  var _props$viewBox = props.viewBox,
      x = _props$viewBox.x,
      y = _props$viewBox.y,
      width = _props$viewBox.width,
      height = _props$viewBox.height,
      position = props.position;

  if (isFixedY) {
    var yCoord = props.y,
        orientation = props.yAxis.orientation;
    var coord = scales.y.apply(yCoord, {
      position: position
    });

    if (ifOverflowMatches(props, 'discard') && !scales.y.isInRange(coord)) {
      return null;
    }

    var points = [{
      x: x + width,
      y: coord
    }, {
      x: x,
      y: coord
    }];
    return orientation === 'left' ? points.reverse() : points;
  }

  if (isFixedX) {
    var xCoord = props.x,
        _orientation = props.xAxis.orientation;

    var _coord = scales.x.apply(xCoord, {
      position: position
    });

    if (ifOverflowMatches(props, 'discard') && !scales.x.isInRange(_coord)) {
      return null;
    }

    var _points = [{
      x: _coord,
      y: y + height
    }, {
      x: _coord,
      y: y
    }];
    return _orientation === 'top' ? _points.reverse() : _points;
  }

  if (isSegment) {
    var segment = props.segment;

    var _points2 = segment.map(function (p) {
      return scales.apply(p, {
        position: position
      });
    });

    if (ifOverflowMatches(props, 'discard') && some_1(_points2, function (p) {
      return !scales.isInRange(p);
    })) {
      return null;
    }

    return _points2;
  }

  return null;
};

function ReferenceLine(props) {
  var fixedX = props.x,
      fixedY = props.y,
      segment = props.segment,
      xAxis = props.xAxis,
      yAxis = props.yAxis,
      shape = props.shape,
      className = props.className,
      alwaysShow = props.alwaysShow,
      clipPathId = props.clipPathId;
  warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var isX = isNumOrStr(fixedX);
  var isY = isNumOrStr(fixedY);
  var isSegment = segment && segment.length === 2;
  var endPoints = getEndPoints(scales, isX, isY, isSegment, props);

  if (!endPoints) {
    return null;
  }

  var _endPoints = _slicedToArray$2(endPoints, 2),
      _endPoints$ = _endPoints[0],
      x1 = _endPoints$.x,
      y1 = _endPoints$.y,
      _endPoints$2 = _endPoints[1],
      x2 = _endPoints$2.x,
      y2 = _endPoints$2.y;

  var clipPath = ifOverflowMatches(props, 'hidden') ? "url(#".concat(clipPathId, ")") : undefined;

  var lineProps = _objectSpread$5(_objectSpread$5({
    clipPath: clipPath
  }, filterProps(props, true)), {}, {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  });

  return /*#__PURE__*/React.createElement(Layer, {
    className: classNames('recharts-reference-line', className)
  }, renderLine(shape, lineProps), Label.renderCallByParent(props, rectWithCoords({
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  })));
}
ReferenceLine.displayName = 'ReferenceLine';
ReferenceLine.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  fill: 'none',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
  position: 'middle'
};

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getCoordinate = function getCoordinate(props) {
  var x = props.x,
      y = props.y,
      xAxis = props.xAxis,
      yAxis = props.yAxis;
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var result = scales.apply({
    x: x,
    y: y
  }, {
    bandAware: true
  });

  if (ifOverflowMatches(props, 'discard') && !scales.isInRange(result)) {
    return null;
  }

  return result;
};

function ReferenceDot(props) {
  var x = props.x,
      y = props.y,
      r = props.r,
      alwaysShow = props.alwaysShow,
      clipPathId = props.clipPathId;
  var isX = isNumOrStr(x);
  var isY = isNumOrStr(y);
  warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');

  if (!isX || !isY) {
    return null;
  }

  var coordinate = getCoordinate(props);

  if (!coordinate) {
    return null;
  }

  var cx = coordinate.x,
      cy = coordinate.y;
  var shape = props.shape,
      className = props.className;
  var clipPath = ifOverflowMatches(props, 'hidden') ? "url(#".concat(clipPathId, ")") : undefined;

  var dotProps = _objectSpread$4(_objectSpread$4({
    clipPath: clipPath
  }, filterProps(props, true)), {}, {
    cx: cx,
    cy: cy
  });

  return /*#__PURE__*/React.createElement(Layer, {
    className: classNames('recharts-reference-dot', className)
  }, ReferenceDot.renderDot(shape, dotProps), Label.renderCallByParent(props, {
    x: cx - r,
    y: cy - r,
    width: 2 * r,
    height: 2 * r
  }));
}
ReferenceDot.displayName = 'ReferenceDot';
ReferenceDot.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#fff',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1
};

ReferenceDot.renderDot = function (option, props) {
  var dot;

  if ( /*#__PURE__*/React.isValidElement(option)) {
    dot = /*#__PURE__*/React.cloneElement(option, props);
  } else if (isFunction_1(option)) {
    dot = option(props);
  } else {
    dot = /*#__PURE__*/React.createElement(Dot, _extends$5({}, props, {
      cx: props.cx,
      cy: props.cy,
      className: "recharts-reference-dot-dot"
    }));
  }

  return dot;
};

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getRect = function getRect(hasX1, hasX2, hasY1, hasY2, props) {
  var xValue1 = props.x1,
      xValue2 = props.x2,
      yValue1 = props.y1,
      yValue2 = props.y2,
      xAxis = props.xAxis,
      yAxis = props.yAxis;
  if (!xAxis || !yAxis) return null;
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var p1 = {
    x: hasX1 ? scales.x.apply(xValue1, {
      position: 'start'
    }) : scales.x.rangeMin,
    y: hasY1 ? scales.y.apply(yValue1, {
      position: 'start'
    }) : scales.y.rangeMin
  };
  var p2 = {
    x: hasX2 ? scales.x.apply(xValue2, {
      position: 'end'
    }) : scales.x.rangeMax,
    y: hasY2 ? scales.y.apply(yValue2, {
      position: 'end'
    }) : scales.y.rangeMax
  };

  if (ifOverflowMatches(props, 'discard') && (!scales.isInRange(p1) || !scales.isInRange(p2))) {
    return null;
  }

  return rectWithPoints(p1, p2);
};

function ReferenceArea(props) {
  var x1 = props.x1,
      x2 = props.x2,
      y1 = props.y1,
      y2 = props.y2,
      className = props.className,
      alwaysShow = props.alwaysShow,
      clipPathId = props.clipPathId;
  warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var hasX1 = isNumOrStr(x1);
  var hasX2 = isNumOrStr(x2);
  var hasY1 = isNumOrStr(y1);
  var hasY2 = isNumOrStr(y2);
  var shape = props.shape;

  if (!hasX1 && !hasX2 && !hasY1 && !hasY2 && !shape) {
    return null;
  }

  var rect = getRect(hasX1, hasX2, hasY1, hasY2, props);

  if (!rect && !shape) {
    return null;
  }

  var clipPath = ifOverflowMatches(props, 'hidden') ? "url(#".concat(clipPathId, ")") : undefined;
  return /*#__PURE__*/React.createElement(Layer, {
    className: classNames('recharts-reference-area', className)
  }, ReferenceArea.renderRect(shape, _objectSpread$3(_objectSpread$3({
    clipPath: clipPath
  }, filterProps(props, true)), rect)), Label.renderCallByParent(props, rect));
}
ReferenceArea.displayName = 'ReferenceArea';
ReferenceArea.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#ccc',
  fillOpacity: 0.5,
  stroke: 'none',
  strokeWidth: 1
};

ReferenceArea.renderRect = function (option, props) {
  var rect;

  if ( /*#__PURE__*/React.isValidElement(option)) {
    rect = /*#__PURE__*/React.cloneElement(option, props);
  } else if (isFunction_1(option)) {
    rect = option(props);
  } else {
    rect = /*#__PURE__*/React.createElement(Rectangle, _extends$4({}, props, {
      className: "recharts-reference-area-rect"
    }));
  }

  return rect;
};

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$2(this, result); }; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }
var CartesianAxis = /*#__PURE__*/function (_Component) {
  _inherits$2(CartesianAxis, _Component);

  var _super = _createSuper$2(CartesianAxis);

  function CartesianAxis(props) {
    var _this;

    _classCallCheck$2(this, CartesianAxis);

    _this = _super.call(this, props);
    _this.layerReference = void 0;
    _this.state = {
      fontSize: '',
      letterSpacing: ''
    };
    return _this;
  } // todo Array<Tick>


  _createClass$2(CartesianAxis, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref, nextState) {
      var viewBox = _ref.viewBox,
          restProps = _objectWithoutProperties$3(_ref, ["viewBox"]);

      // props.viewBox is sometimes generated every time -
      // check that specially as object equality is likely to fail
      var _this$props = this.props,
          viewBoxOld = _this$props.viewBox,
          restPropsOld = _objectWithoutProperties$3(_this$props, ["viewBox"]);

      return !shallowEqual(viewBox, viewBoxOld) || !shallowEqual(restProps, restPropsOld) || !shallowEqual(nextState, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var htmlLayer = this.layerReference;
      if (!htmlLayer) return;
      var tick = htmlLayer.getElementsByClassName('recharts-cartesian-axis-tick-value')[0];

      if (tick) {
        this.setState({
          fontSize: window.getComputedStyle(tick).fontSize,
          letterSpacing: window.getComputedStyle(tick).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */

  }, {
    key: "getTickLineCoord",
    value: function getTickLineCoord(data) {
      var _this$props2 = this.props,
          x = _this$props2.x,
          y = _this$props2.y,
          width = _this$props2.width,
          height = _this$props2.height,
          orientation = _this$props2.orientation,
          tickSize = _this$props2.tickSize,
          mirror = _this$props2.mirror,
          tickMargin = _this$props2.tickMargin;
      var x1, x2, y1, y2, tx, ty;
      var sign = mirror ? -1 : 1;
      var finalTickSize = data.tickSize || tickSize;
      var tickCoord = isNumber(data.tickCoord) ? data.tickCoord : data.coordinate;

      switch (orientation) {
        case 'top':
          x1 = x2 = data.coordinate;
          y2 = y + +!mirror * height;
          y1 = y2 - sign * finalTickSize;
          ty = y1 - sign * tickMargin;
          tx = tickCoord;
          break;

        case 'left':
          y1 = y2 = data.coordinate;
          x2 = x + +!mirror * width;
          x1 = x2 - sign * finalTickSize;
          tx = x1 - sign * tickMargin;
          ty = tickCoord;
          break;

        case 'right':
          y1 = y2 = data.coordinate;
          x2 = x + +mirror * width;
          x1 = x2 + sign * finalTickSize;
          tx = x1 + sign * tickMargin;
          ty = tickCoord;
          break;

        default:
          x1 = x2 = data.coordinate;
          y2 = y + +mirror * height;
          y1 = y2 + sign * finalTickSize;
          ty = y1 + sign * tickMargin;
          tx = tickCoord;
          break;
      }

      return {
        line: {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2
        },
        tick: {
          x: tx,
          y: ty
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor() {
      var _this$props3 = this.props,
          orientation = _this$props3.orientation,
          mirror = _this$props3.mirror;
      var textAnchor;

      switch (orientation) {
        case 'left':
          textAnchor = mirror ? 'start' : 'end';
          break;

        case 'right':
          textAnchor = mirror ? 'end' : 'start';
          break;

        default:
          textAnchor = 'middle';
          break;
      }

      return textAnchor;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function getTickVerticalAnchor() {
      var _this$props4 = this.props,
          orientation = _this$props4.orientation,
          mirror = _this$props4.mirror;
      var verticalAnchor = 'end';

      switch (orientation) {
        case 'left':
        case 'right':
          verticalAnchor = 'middle';
          break;

        case 'top':
          verticalAnchor = mirror ? 'start' : 'end';
          break;

        default:
          verticalAnchor = mirror ? 'end' : 'start';
          break;
      }

      return verticalAnchor;
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props5 = this.props,
          x = _this$props5.x,
          y = _this$props5.y,
          width = _this$props5.width,
          height = _this$props5.height,
          orientation = _this$props5.orientation,
          mirror = _this$props5.mirror,
          axisLine = _this$props5.axisLine;

      var props = _objectSpread$2(_objectSpread$2(_objectSpread$2({}, filterProps(this.props)), filterProps(axisLine)), {}, {
        fill: 'none'
      });

      if (orientation === 'top' || orientation === 'bottom') {
        var needHeight = +(orientation === 'top' && !mirror || orientation === 'bottom' && mirror);
        props = _objectSpread$2(_objectSpread$2({}, props), {}, {
          x1: x,
          y1: y + needHeight * height,
          x2: x + width,
          y2: y + needHeight * height
        });
      } else {
        var needWidth = +(orientation === 'left' && !mirror || orientation === 'right' && mirror);
        props = _objectSpread$2(_objectSpread$2({}, props), {}, {
          x1: x + needWidth * width,
          y1: y,
          x2: x + needWidth * width,
          y2: y + height
        });
      }

      return /*#__PURE__*/React.createElement("line", _extends$3({}, props, {
        className: classNames('recharts-cartesian-axis-line', get_1(axisLine, 'className'))
      }));
    }
  }, {
    key: "renderTicks",
    value:
    /**
     * render the ticks
     * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
     * @param {string} fontSize Fontsize to consider for tick spacing
     * @param {string} letterSpacing Letterspacing to consider for tick spacing
     * @return {ReactComponent} renderedTicks
     */
    function renderTicks(ticks, fontSize, letterSpacing) {
      var _this2 = this;

      var _this$props6 = this.props,
          tickLine = _this$props6.tickLine,
          stroke = _this$props6.stroke,
          tick = _this$props6.tick,
          tickFormatter = _this$props6.tickFormatter,
          unit = _this$props6.unit;
      var finalTicks = CartesianAxis.getTicks(_objectSpread$2(_objectSpread$2({}, this.props), {}, {
        ticks: ticks
      }), fontSize, letterSpacing);
      var textAnchor = this.getTickTextAnchor();
      var verticalAnchor = this.getTickVerticalAnchor();
      var axisProps = filterProps(this.props);
      var customTickProps = filterProps(tick);

      var tickLineProps = _objectSpread$2(_objectSpread$2({}, axisProps), {}, {
        fill: 'none'
      }, filterProps(tickLine));

      var items = finalTicks.map(function (entry, i) {
        var _this2$getTickLineCoo = _this2.getTickLineCoord(entry),
            lineCoord = _this2$getTickLineCoo.line,
            tickCoord = _this2$getTickLineCoo.tick;

        var tickProps = _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({
          textAnchor: textAnchor,
          verticalAnchor: verticalAnchor
        }, axisProps), {}, {
          stroke: 'none',
          fill: stroke
        }, customTickProps), tickCoord), {}, {
          index: i,
          payload: entry,
          visibleTicksCount: finalTicks.length,
          tickFormatter: tickFormatter
        });

        return /*#__PURE__*/React.createElement(Layer, _extends$3({
          className: "recharts-cartesian-axis-tick",
          key: "tick-".concat(i) // eslint-disable-line react/no-array-index-key

        }, adaptEventsOfChild(_this2.props, entry, i)), tickLine && /*#__PURE__*/React.createElement("line", _extends$3({}, tickLineProps, lineCoord, {
          className: classNames('recharts-cartesian-axis-tick-line', get_1(tickLine, 'className'))
        })), tick && CartesianAxis.renderTickItem(tick, tickProps, "".concat(isFunction_1(tickFormatter) ? tickFormatter(entry.value, i) : entry.value).concat(unit || '')));
      });
      return /*#__PURE__*/React.createElement("g", {
        className: "recharts-cartesian-axis-ticks"
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props7 = this.props,
          axisLine = _this$props7.axisLine,
          width = _this$props7.width,
          height = _this$props7.height,
          ticksGenerator = _this$props7.ticksGenerator,
          className = _this$props7.className,
          hide = _this$props7.hide;

      if (hide) {
        return null;
      }

      var _this$props8 = this.props,
          ticks = _this$props8.ticks,
          noTicksProps = _objectWithoutProperties$3(_this$props8, ["ticks"]);

      var finalTicks = ticks;

      if (isFunction_1(ticksGenerator)) {
        finalTicks = ticks && ticks.length > 0 ? ticksGenerator(this.props) : ticksGenerator(noTicksProps);
      }

      if (width <= 0 || height <= 0 || !finalTicks || !finalTicks.length) {
        return null;
      }

      return /*#__PURE__*/React.createElement(Layer, {
        className: classNames('recharts-cartesian-axis', className),
        ref: function ref(_ref2) {
          _this3.layerReference = _ref2;
        }
      }, axisLine && this.renderAxisLine(), this.renderTicks(finalTicks, this.state.fontSize, this.state.letterSpacing), Label.renderCallByParent(this.props));
    }
  }], [{
    key: "getTicks",
    value: function getTicks(props, fontSize, letterSpacing) {
      var tick = props.tick,
          ticks = props.ticks,
          viewBox = props.viewBox,
          minTickGap = props.minTickGap,
          orientation = props.orientation,
          interval = props.interval,
          tickFormatter = props.tickFormatter,
          unit = props.unit;

      if (!ticks || !ticks.length || !tick) {
        return [];
      }

      if (isNumber(interval) || Global.isSsr) {
        return CartesianAxis.getNumberIntervalTicks(ticks, typeof interval === 'number' && isNumber(interval) ? interval : 0);
      }

      if (interval === 'preserveStartEnd') {
        return CartesianAxis.getTicksStart({
          ticks: ticks,
          tickFormatter: tickFormatter,
          viewBox: viewBox,
          orientation: orientation,
          minTickGap: minTickGap,
          unit: unit,
          fontSize: fontSize,
          letterSpacing: letterSpacing
        }, true);
      }

      if (interval === 'preserveStart') {
        return CartesianAxis.getTicksStart({
          ticks: ticks,
          tickFormatter: tickFormatter,
          viewBox: viewBox,
          orientation: orientation,
          minTickGap: minTickGap,
          unit: unit,
          fontSize: fontSize,
          letterSpacing: letterSpacing
        });
      }

      return CartesianAxis.getTicksEnd({
        ticks: ticks,
        tickFormatter: tickFormatter,
        viewBox: viewBox,
        orientation: orientation,
        minTickGap: minTickGap,
        unit: unit,
        fontSize: fontSize,
        letterSpacing: letterSpacing
      });
    }
  }, {
    key: "getNumberIntervalTicks",
    value: function getNumberIntervalTicks(ticks, interval) {
      return ticks.filter(function (entry, i) {
        return i % (interval + 1) === 0;
      });
    }
  }, {
    key: "getTicksStart",
    value: function getTicksStart(_ref3, preserveEnd) {
      var ticks = _ref3.ticks,
          tickFormatter = _ref3.tickFormatter,
          viewBox = _ref3.viewBox,
          orientation = _ref3.orientation,
          minTickGap = _ref3.minTickGap,
          unit = _ref3.unit,
          fontSize = _ref3.fontSize,
          letterSpacing = _ref3.letterSpacing;
      var x = viewBox.x,
          y = viewBox.y,
          width = viewBox.width,
          height = viewBox.height;
      var sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
      var result = (ticks || []).slice(); // we need add the width of 'unit' only when sizeKey === 'width'

      var unitSize = unit && sizeKey === 'width' ? getStringSize(unit, {
        fontSize: fontSize,
        letterSpacing: letterSpacing
      })[sizeKey] : 0;
      var len = result.length;
      var sign = len >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;
      var start, end;

      if (sign === 1) {
        start = sizeKey === 'width' ? x : y;
        end = sizeKey === 'width' ? x + width : y + height;
      } else {
        start = sizeKey === 'width' ? x + width : y + height;
        end = sizeKey === 'width' ? x : y;
      }

      if (preserveEnd) {
        // Try to guarantee the tail to be displayed
        var tail = ticks[len - 1];
        var tailContent = isFunction_1(tickFormatter) ? tickFormatter(tail.value, len - 1) : tail.value;
        var tailSize = getStringSize(tailContent, {
          fontSize: fontSize,
          letterSpacing: letterSpacing
        })[sizeKey] + unitSize;
        var tailGap = sign * (tail.coordinate + sign * tailSize / 2 - end);
        result[len - 1] = tail = _objectSpread$2(_objectSpread$2({}, tail), {}, {
          tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign : tail.coordinate
        });
        var isTailShow = sign * (tail.tickCoord - sign * tailSize / 2 - start) >= 0 && sign * (tail.tickCoord + sign * tailSize / 2 - end) <= 0;

        if (isTailShow) {
          end = tail.tickCoord - sign * (tailSize / 2 + minTickGap);
          result[len - 1] = _objectSpread$2(_objectSpread$2({}, tail), {}, {
            isShow: true
          });
        }
      }

      var count = preserveEnd ? len - 1 : len;

      for (var i = 0; i < count; i++) {
        var entry = result[i];
        var content = isFunction_1(tickFormatter) ? tickFormatter(entry.value, i) : entry.value;
        var size = getStringSize(content, {
          fontSize: fontSize,
          letterSpacing: letterSpacing
        })[sizeKey] + unitSize;

        if (i === 0) {
          var gap = sign * (entry.coordinate - sign * size / 2 - start);
          result[i] = entry = _objectSpread$2(_objectSpread$2({}, entry), {}, {
            tickCoord: gap < 0 ? entry.coordinate - gap * sign : entry.coordinate
          });
        } else {
          result[i] = entry = _objectSpread$2(_objectSpread$2({}, entry), {}, {
            tickCoord: entry.coordinate
          });
        }

        var isShow = sign * (entry.tickCoord - sign * size / 2 - start) >= 0 && sign * (entry.tickCoord + sign * size / 2 - end) <= 0;

        if (isShow) {
          start = entry.tickCoord + sign * (size / 2 + minTickGap);
          result[i] = _objectSpread$2(_objectSpread$2({}, entry), {}, {
            isShow: true
          });
        }
      }

      return result.filter(function (entry) {
        return entry.isShow;
      });
    }
  }, {
    key: "getTicksEnd",
    value: function getTicksEnd(_ref4) {
      var ticks = _ref4.ticks,
          tickFormatter = _ref4.tickFormatter,
          viewBox = _ref4.viewBox,
          orientation = _ref4.orientation,
          minTickGap = _ref4.minTickGap,
          unit = _ref4.unit,
          fontSize = _ref4.fontSize,
          letterSpacing = _ref4.letterSpacing;
      var x = viewBox.x,
          y = viewBox.y,
          width = viewBox.width,
          height = viewBox.height;
      var sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height'; // we need add the width of 'unit' only when sizeKey === 'width'

      var unitSize = unit && sizeKey === 'width' ? getStringSize(unit, {
        fontSize: fontSize,
        letterSpacing: letterSpacing
      })[sizeKey] : 0;
      var result = (ticks || []).slice();
      var len = result.length;
      var sign = len >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;
      var start, end;

      if (sign === 1) {
        start = sizeKey === 'width' ? x : y;
        end = sizeKey === 'width' ? x + width : y + height;
      } else {
        start = sizeKey === 'width' ? x + width : y + height;
        end = sizeKey === 'width' ? x : y;
      }

      for (var i = len - 1; i >= 0; i--) {
        var entry = result[i];
        var content = isFunction_1(tickFormatter) ? tickFormatter(entry.value, len - i - 1) : entry.value;
        var size = getStringSize(content, {
          fontSize: fontSize,
          letterSpacing: letterSpacing
        })[sizeKey] + unitSize;

        if (i === len - 1) {
          var gap = sign * (entry.coordinate + sign * size / 2 - end);
          result[i] = entry = _objectSpread$2(_objectSpread$2({}, entry), {}, {
            tickCoord: gap > 0 ? entry.coordinate - gap * sign : entry.coordinate
          });
        } else {
          result[i] = entry = _objectSpread$2(_objectSpread$2({}, entry), {}, {
            tickCoord: entry.coordinate
          });
        }

        var isShow = sign * (entry.tickCoord - sign * size / 2 - start) >= 0 && sign * (entry.tickCoord + sign * size / 2 - end) <= 0;

        if (isShow) {
          end = entry.tickCoord - sign * (size / 2 + minTickGap);
          result[i] = _objectSpread$2(_objectSpread$2({}, entry), {}, {
            isShow: true
          });
        }
      }

      return result.filter(function (entry) {
        return entry.isShow;
      });
    }
  }, {
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;

      if ( /*#__PURE__*/React.isValidElement(option)) {
        tickItem = /*#__PURE__*/React.cloneElement(option, props);
      } else if (isFunction_1(option)) {
        tickItem = option(props);
      } else {
        tickItem = /*#__PURE__*/React.createElement(Text, _extends$3({}, props, {
          className: "recharts-cartesian-axis-tick-value"
        }), value);
      }

      return tickItem;
    }
  }]);

  return CartesianAxis;
}(react.exports.Component);
CartesianAxis.displayName = 'CartesianAxis';
CartesianAxis.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: 'bottom',
  // The ticks
  ticks: [],
  stroke: '#666',
  tickLine: true,
  axisLine: true,
  tick: true,
  mirror: false,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: 'preserveEnd'
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ErrorBar(props) {
  var offset = props.offset,
      layout = props.layout,
      width = props.width,
      dataKey = props.dataKey,
      data = props.data,
      dataPointFormatter = props.dataPointFormatter,
      xAxis = props.xAxis,
      yAxis = props.yAxis,
      others = _objectWithoutProperties$2(props, ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"]);

  var svgProps = filterProps(others);
  var errorBars = data.map(function (entry, i) {
    var _dataPointFormatter = dataPointFormatter(entry, dataKey),
        x = _dataPointFormatter.x,
        y = _dataPointFormatter.y,
        value = _dataPointFormatter.value,
        errorVal = _dataPointFormatter.errorVal;

    if (!errorVal) {
      return null;
    }

    var lineCoordinates = [];
    var lowBound, highBound;

    if (Array.isArray(errorVal)) {
      var _errorVal = _slicedToArray$1(errorVal, 2);

      lowBound = _errorVal[0];
      highBound = _errorVal[1];
    } else {
      lowBound = highBound = errorVal;
    }

    if (layout === 'vertical') {
      // error bar for horizontal charts, the y is fixed, x is a range value
      var scale = xAxis.scale;
      var yMid = y + offset;
      var yMin = yMid + width;
      var yMax = yMid - width;
      var xMin = scale(value - lowBound);
      var xMax = scale(value + highBound); // the right line of |--|

      lineCoordinates.push({
        x1: xMax,
        y1: yMin,
        x2: xMax,
        y2: yMax
      }); // the middle line of |--|

      lineCoordinates.push({
        x1: xMin,
        y1: yMid,
        x2: xMax,
        y2: yMid
      }); // the left line of |--|

      lineCoordinates.push({
        x1: xMin,
        y1: yMin,
        x2: xMin,
        y2: yMax
      });
    } else if (layout === 'horizontal') {
      // error bar for horizontal charts, the x is fixed, y is a range value
      var _scale = yAxis.scale;
      var xMid = x + offset;

      var _xMin = xMid - width;

      var _xMax = xMid + width;

      var _yMin = _scale(value - lowBound);

      var _yMax = _scale(value + highBound); // the top line


      lineCoordinates.push({
        x1: _xMin,
        y1: _yMax,
        x2: _xMax,
        y2: _yMax
      }); // the middle line

      lineCoordinates.push({
        x1: xMid,
        y1: _yMin,
        x2: xMid,
        y2: _yMax
      }); // the bottom line

      lineCoordinates.push({
        x1: _xMin,
        y1: _yMin,
        x2: _xMax,
        y2: _yMin
      });
    }

    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement(Layer, _extends$2({
        className: "recharts-errorBar",
        key: "bar-".concat(i)
      }, svgProps), lineCoordinates.map(function (coordinates, index) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          React.createElement("line", _extends$2({}, coordinates, {
            key: "line-".concat(index)
          }))
        );
      }))
    );
  });
  return /*#__PURE__*/React.createElement(Layer, {
    className: "recharts-errorBars"
  }, errorBars);
}
ErrorBar.defaultProps = {
  stroke: 'black',
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: 'horizontal'
};
ErrorBar.displayName = 'ErrorBar';

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }

function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }
var Line = /*#__PURE__*/function (_PureComponent) {
  _inherits$1(Line, _PureComponent);

  var _super = _createSuper$1(Line);

  function Line() {
    var _this;

    _classCallCheck$1(this, Line);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.mainCurve = void 0;
    _this.state = {
      isAnimationFinished: true,
      totalLength: 0
    };

    _this.getStrokeDasharray = function (length, totalLength, lines) {
      var lineLength = lines.reduce(function (pre, next) {
        return pre + next;
      });
      var count = Math.floor(length / lineLength);
      var remainLength = length % lineLength;
      var restLength = totalLength - length;
      var remainLines = [];

      for (var i = 0, sum = 0;; sum += lines[i], ++i) {
        if (sum + lines[i] > remainLength) {
          remainLines = [].concat(_toConsumableArray$1(lines.slice(0, i)), [remainLength - sum]);
          break;
        }
      }

      var emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];
      return [].concat(_toConsumableArray$1(Line.repeat(lines, count)), _toConsumableArray$1(remainLines), emptyLines).map(function (line) {
        return "".concat(line, "px");
      }).join(', ');
    };

    _this.id = uniqueId('recharts-line-');

    _this.pathRef = function (node) {
      _this.mainCurve = node;
    };

    _this.handleAnimationEnd = function () {
      _this.setState({
        isAnimationFinished: true
      });

      if (_this.props.onAnimationEnd) {
        _this.props.onAnimationEnd();
      }
    };

    _this.handleAnimationStart = function () {
      _this.setState({
        isAnimationFinished: false
      });

      if (_this.props.onAnimationStart) {
        _this.props.onAnimationStart();
      }
    };

    return _this;
  }

  _createClass$1(Line, [{
    key: "componentDidMount",
    value:
    /* eslint-disable  react/no-did-mount-set-state */
    function componentDidMount() {
      if (!this.props.isAnimationActive) {
        return;
      }

      var totalLength = this.getTotalLength();
      this.setState({
        totalLength: totalLength
      });
    }
  }, {
    key: "getTotalLength",
    value: function getTotalLength() {
      var curveDom = this.mainCurve;

      try {
        return curveDom && curveDom.getTotalLength && curveDom.getTotalLength() || 0;
      } catch (err) {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function renderErrorBar() {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _this$props = this.props,
          points = _this$props.points,
          xAxis = _this$props.xAxis,
          yAxis = _this$props.yAxis,
          layout = _this$props.layout,
          children = _this$props.children;
      var errorBarItems = findAllByType(children, ErrorBar.displayName);

      if (!errorBarItems) {
        return null;
      }

      function dataPointFormatter(dataPoint, dataKey) {
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value: dataPoint.value,
          errorVal: getValueByDataKey(dataPoint.payload, dataKey)
        };
      }

      return errorBarItems.map(function (item, i) {
        return /*#__PURE__*/React.cloneElement(item, {
          // eslint-disable-next-line react/no-array-index-key
          key: "bar-".concat(i),
          data: points,
          xAxis: xAxis,
          yAxis: yAxis,
          layout: layout,
          dataPointFormatter: dataPointFormatter
        });
      });
    }
  }, {
    key: "renderDots",
    value: function renderDots(needClip, clipPathId) {
      var isAnimationActive = this.props.isAnimationActive;

      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _this$props2 = this.props,
          dot = _this$props2.dot,
          points = _this$props2.points,
          dataKey = _this$props2.dataKey;
      var lineProps = filterProps(this.props);
      var customDotProps = filterProps(dot, true);
      var dots = points.map(function (entry, i) {
        var dotProps = _objectSpread$1(_objectSpread$1(_objectSpread$1({
          key: "dot-".concat(i),
          r: 3
        }, lineProps), customDotProps), {}, {
          value: entry.value,
          dataKey: dataKey,
          cx: entry.x,
          cy: entry.y,
          index: i,
          payload: entry.payload
        });

        return Line.renderDotItem(dot, dotProps);
      });
      var dotsProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      };
      return /*#__PURE__*/React.createElement(Layer, _extends$1({
        className: "recharts-line-dots",
        key: "dots"
      }, dotsProps, {
        role: "img"
      }), dots);
    }
  }, {
    key: "renderCurveStatically",
    value: function renderCurveStatically(points, needClip, clipPathId, props) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      var _this$props3 = this.props,
          type = _this$props3.type,
          layout = _this$props3.layout,
          connectNulls = _this$props3.connectNulls;
          _this$props3.ref;
          var others = _objectWithoutProperties$1(_this$props3, ["type", "layout", "connectNulls", "ref"]);

      var curveProps = _objectSpread$1(_objectSpread$1(_objectSpread$1({}, filterProps(others, true)), {}, {
        fill: 'none',
        className: 'recharts-line-curve',
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null,
        points: points
      }, props), {}, {
        type: type,
        layout: layout,
        connectNulls: connectNulls
      });

      return /*#__PURE__*/React.createElement(Curve, _extends$1({}, curveProps, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function renderCurveWithAnimation(needClip, clipPathId) {
      var _this2 = this;

      var _this$props4 = this.props,
          points = _this$props4.points,
          strokeDasharray = _this$props4.strokeDasharray,
          isAnimationActive = _this$props4.isAnimationActive,
          animationBegin = _this$props4.animationBegin,
          animationDuration = _this$props4.animationDuration,
          animationEasing = _this$props4.animationEasing,
          animationId = _this$props4.animationId,
          animateNewValues = _this$props4.animateNewValues,
          width = _this$props4.width,
          height = _this$props4.height;
      var _this$state = this.state,
          prevPoints = _this$state.prevPoints,
          totalLength = _this$state.totalLength;
      return /*#__PURE__*/React.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function (_ref) {
        var t = _ref.t;

        if (prevPoints) {
          var prevPointsDiffFactor = prevPoints.length / points.length;
          var stepData = points.map(function (entry, index) {
            var prevPointIndex = Math.floor(index * prevPointsDiffFactor);

            if (prevPoints[prevPointIndex]) {
              var prev = prevPoints[prevPointIndex];
              var interpolatorX = interpolateNumber$2(prev.x, entry.x);
              var interpolatorY = interpolateNumber$2(prev.y, entry.y);
              return _objectSpread$1(_objectSpread$1({}, entry), {}, {
                x: interpolatorX(t),
                y: interpolatorY(t)
              });
            } // magic number of faking previous x and y location


            if (animateNewValues) {
              var _interpolatorX = interpolateNumber$2(width * 2, entry.x);

              var _interpolatorY = interpolateNumber$2(height / 2, entry.y);

              return _objectSpread$1(_objectSpread$1({}, entry), {}, {
                x: _interpolatorX(t),
                y: _interpolatorY(t)
              });
            }

            return _objectSpread$1(_objectSpread$1({}, entry), {}, {
              x: entry.x,
              y: entry.y
            });
          });
          return _this2.renderCurveStatically(stepData, needClip, clipPathId);
        }

        var interpolator = interpolateNumber$2(0, totalLength);
        var curLength = interpolator(t);
        var currentStrokeDasharray;

        if (strokeDasharray) {
          var lines = "".concat(strokeDasharray).split(/[,\s]+/gim).map(function (num) {
            return parseFloat(num);
          });
          currentStrokeDasharray = _this2.getStrokeDasharray(curLength, totalLength, lines);
        } else {
          currentStrokeDasharray = "".concat(curLength, "px ").concat(totalLength - curLength, "px");
        }

        return _this2.renderCurveStatically(points, needClip, clipPathId, {
          strokeDasharray: currentStrokeDasharray
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function renderCurve(needClip, clipPathId) {
      var _this$props5 = this.props,
          points = _this$props5.points,
          isAnimationActive = _this$props5.isAnimationActive;
      var _this$state2 = this.state,
          prevPoints = _this$state2.prevPoints,
          totalLength = _this$state2.totalLength;

      if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !isEqual_1(prevPoints, points))) {
        return this.renderCurveWithAnimation(needClip, clipPathId);
      }

      return this.renderCurveStatically(points, needClip, clipPathId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          hide = _this$props6.hide,
          dot = _this$props6.dot,
          points = _this$props6.points,
          className = _this$props6.className,
          xAxis = _this$props6.xAxis,
          yAxis = _this$props6.yAxis,
          top = _this$props6.top,
          left = _this$props6.left,
          width = _this$props6.width,
          height = _this$props6.height,
          isAnimationActive = _this$props6.isAnimationActive,
          id = _this$props6.id;

      if (hide || !points || !points.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;
      var hasSinglePoint = points.length === 1;
      var layerClass = classNames('recharts-line', className);
      var needClip = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;
      var clipPathId = isNil_1(id) ? this.id : id;
      return /*#__PURE__*/React.createElement(Layer, {
        className: layerClass
      }, needClip ? /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /*#__PURE__*/React.createElement("rect", {
        x: left,
        y: top,
        width: width,
        height: height
      }))) : null, !hasSinglePoint && this.renderCurve(needClip, clipPathId), this.renderErrorBar(), (hasSinglePoint || dot) && this.renderDots(needClip, clipPathId), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          prevPoints: prevState.curPoints
        };
      }

      if (nextProps.points !== prevState.curPoints) {
        return {
          curPoints: nextProps.points
        };
      }

      return null;
    }
  }, {
    key: "repeat",
    value: function repeat(lines, count) {
      var linesUnit = lines.length % 2 !== 0 ? [].concat(_toConsumableArray$1(lines), [0]) : lines;
      var result = [];

      for (var i = 0; i < count; ++i) {
        result = [].concat(_toConsumableArray$1(result), _toConsumableArray$1(linesUnit));
      }

      return result;
    }
  }, {
    key: "renderDotItem",
    value: function renderDotItem(option, props) {
      var dotItem;

      if ( /*#__PURE__*/React.isValidElement(option)) {
        dotItem = /*#__PURE__*/React.cloneElement(option, props);
      } else if (isFunction_1(option)) {
        dotItem = option(props);
      } else {
        var className = classNames('recharts-line-dot', option ? option.className : '');
        dotItem = /*#__PURE__*/React.createElement(Dot, _extends$1({}, props, {
          className: className
        }));
      }

      return dotItem;
    }
  }]);

  return Line;
}(react.exports.PureComponent);
Line.displayName = 'Line';
Line.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: false,
  activeDot: true,
  dot: true,
  legendType: 'line',
  stroke: '#3182bd',
  strokeWidth: 1,
  fill: '#fff',
  points: [],
  isAnimationActive: !Global.isSsr,
  animateNewValues: true,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
  hide: false,
  label: false
};

Line.getComposedData = function (_ref2) {
  var props = _ref2.props,
      xAxis = _ref2.xAxis,
      yAxis = _ref2.yAxis,
      xAxisTicks = _ref2.xAxisTicks,
      yAxisTicks = _ref2.yAxisTicks,
      dataKey = _ref2.dataKey,
      bandSize = _ref2.bandSize,
      displayedData = _ref2.displayedData,
      offset = _ref2.offset;
  var layout = props.layout;
  var points = displayedData.map(function (entry, index) {
    var value = getValueByDataKey(entry, dataKey);

    if (layout === 'horizontal') {
      return {
        x: getCateCoordinateOfLine({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize: bandSize,
          entry: entry,
          index: index
        }),
        y: isNil_1(value) ? null : yAxis.scale(value),
        value: value,
        payload: entry
      };
    }

    return {
      x: isNil_1(value) ? null : xAxis.scale(value),
      y: getCateCoordinateOfLine({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize: bandSize,
        entry: entry,
        index: index
      }),
      value: value,
      payload: entry
    };
  });
  return _objectSpread$1({
    points: points,
    layout: layout
  }, offset);
};

/**
 * @fileOverview X Axis
 */

/** Define of XAxis props */
var XAxis = function XAxis() {
  return null;
};
XAxis.displayName = 'XAxis';
XAxis.defaultProps = {
  allowDecimals: true,
  hide: false,
  orientation: 'bottom',
  width: 0,
  height: 30,
  mirror: false,
  xAxisId: 0,
  tickCount: 5,
  type: 'category',
  domain: [0, 'auto'],
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false,
  allowDuplicatedCategory: true
};

/**
 * @fileOverview Y Axis
 */
var YAxis = function YAxis() {
  return null;
};
YAxis.displayName = 'YAxis';
YAxis.defaultProps = {
  allowDuplicatedCategory: true,
  allowDecimals: true,
  hide: false,
  orientation: 'left',
  width: 60,
  height: 0,
  mirror: false,
  yAxisId: 0,
  tickCount: 5,
  type: 'number',
  domain: [0, 'auto'],
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false
};

var baseIteratee$1 = _baseIteratee,
    isArrayLike = isArrayLike_1,
    keys = keys_1;

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind$1(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee$1(predicate);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

var _createFind = createFind$1;

var toFinite = toFinite_1;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger$1(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger$1;

var baseFindIndex = _baseFindIndex,
    baseIteratee = _baseIteratee,
    toInteger = toInteger_1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex$1(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate), index);
}

var findIndex_1 = findIndex$1;

var createFind = _createFind,
    findIndex = findIndex_1;

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

var find_1 = find;

var debounce = debounce_1,
    isObject = isObject_1;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var throttle_1 = throttle;

var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

var isBoolean_1 = isBoolean;

var detectReferenceElementsDomain = function detectReferenceElementsDomain(children, domain, axisId, axisType, specifiedTicks) {
  var lines = findAllByType(children, ReferenceLine.displayName);
  var dots = findAllByType(children, ReferenceDot.displayName);
  var elements = lines.concat(dots);
  var areas = findAllByType(children, ReferenceArea.displayName);
  var idKey = "".concat(axisType, "Id");
  var valueKey = axisType[0];
  var finalDomain = domain;

  if (elements.length) {
    finalDomain = elements.reduce(function (result, el) {
      if (el.props[idKey] === axisId && ifOverflowMatches(el.props, 'extendDomain') && isNumber(el.props[valueKey])) {
        var value = el.props[valueKey];
        return [Math.min(result[0], value), Math.max(result[1], value)];
      }

      return result;
    }, finalDomain);
  }

  if (areas.length) {
    var key1 = "".concat(valueKey, "1");
    var key2 = "".concat(valueKey, "2");
    finalDomain = areas.reduce(function (result, el) {
      if (el.props[idKey] === axisId && ifOverflowMatches(el.props, 'extendDomain') && isNumber(el.props[key1]) && isNumber(el.props[key2])) {
        var value1 = el.props[key1];
        var value2 = el.props[key2];
        return [Math.min(result[0], value1, value2), Math.max(result[1], value1, value2)];
      }

      return result;
    }, finalDomain);
  }

  if (specifiedTicks && specifiedTicks.length) {
    finalDomain = specifiedTicks.reduce(function (result, tick) {
      if (isNumber(tick)) {
        return [Math.min(result[0], tick), Math.max(result[1], tick)];
      }

      return result;
    }, finalDomain);
  }

  return finalDomain;
};

var eventemitter3 = {exports: {}};

(function (module) {

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */
	function addListener(emitter, event, fn, context, once) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('The listener must be a function');
	  }

	  var listener = new EE(fn, context || emitter, once)
	    , evt = prefix ? prefix + event : event;

	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
	  else emitter._events[evt] = [emitter._events[evt], listener];

	  return emitter;
	}

	/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */
	function clearEvent(emitter, evt) {
	  if (--emitter._eventsCount === 0) emitter._events = new Events();
	  else delete emitter._events[evt];
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  var evt = prefix ? prefix + event : event
	    , handlers = this._events[evt];

	  if (!handlers) return [];
	  if (handlers.fn) return [handlers.fn];

	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	    ee[i] = handlers[i].fn;
	  }

	  return ee;
	};

	/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
	  var evt = prefix ? prefix + event : event
	    , listeners = this._events[evt];

	  if (!listeners) return 0;
	  if (listeners.fn) return 1;
	  return listeners.length;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  return addListener(this, event, fn, context, false);
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  return addListener(this, event, fn, context, true);
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    clearEvent(this, evt);
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	      listeners.fn === fn &&
	      (!once || listeners.once) &&
	      (!context || listeners.context === context)
	    ) {
	      clearEvent(this, evt);
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	        listeners[i].fn !== fn ||
	        (once && !listeners[i].once) ||
	        (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else clearEvent(this, evt);
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) clearEvent(this, evt);
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	{
	  module.exports = EventEmitter;
	}
} (eventemitter3));

const EventEmitter = eventemitter3.exports;

var eventCenter = new EventEmitter();

if (eventCenter.setMaxListeners) {
  eventCenter.setMaxListeners(10);
}
var SYNC_EVENT = 'recharts.syncMouseEvents'; // eslint-disable-next-line no-redeclare

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right']
};
var originCoordinate = {
  x: 0,
  y: 0
}; // use legacy isFinite only if there is a problem (aka IE)
// eslint-disable-next-line no-restricted-globals

var isFinit = Number.isFinite ? Number.isFinite : isFinite;
var defer = // eslint-disable-next-line no-nested-ternary
typeof requestAnimationFrame === 'function' ? requestAnimationFrame : typeof setImmediate === 'function' ? setImmediate : setTimeout;
var deferClear = // eslint-disable-next-line no-nested-ternary
typeof cancelAnimationFrame === 'function' ? cancelAnimationFrame : typeof clearImmediate === 'function' ? clearImmediate : clearTimeout;

var calculateTooltipPos = function calculateTooltipPos(rangeObj, layout) {
  if (layout === 'horizontal') {
    return rangeObj.x;
  }

  if (layout === 'vertical') {
    return rangeObj.y;
  }

  if (layout === 'centric') {
    return rangeObj.angle;
  }

  return rangeObj.radius;
};

var getActiveCoordinate = function getActiveCoordinate(layout, tooltipTicks, activeIndex, rangeObj) {
  var entry = tooltipTicks.find(function (tick) {
    return tick && tick.index === activeIndex;
  });

  if (entry) {
    if (layout === 'horizontal') {
      return {
        x: entry.coordinate,
        y: rangeObj.y
      };
    }

    if (layout === 'vertical') {
      return {
        x: rangeObj.x,
        y: entry.coordinate
      };
    }

    if (layout === 'centric') {
      var _angle = entry.coordinate;
      var _radius = rangeObj.radius;
      return _objectSpread(_objectSpread(_objectSpread({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, _radius, _angle)), {}, {
        angle: _angle,
        radius: _radius
      });
    }

    var radius = entry.coordinate;
    var angle = rangeObj.angle;
    return _objectSpread(_objectSpread(_objectSpread({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle)), {}, {
      angle: angle,
      radius: radius
    });
  }

  return originCoordinate;
};

var getDisplayedData = function getDisplayedData(data, _ref, item) {
  var graphicalItems = _ref.graphicalItems,
      dataStartIndex = _ref.dataStartIndex,
      dataEndIndex = _ref.dataEndIndex;
  var itemsData = (graphicalItems || []).reduce(function (result, child) {
    var itemData = child.props.data;

    if (itemData && itemData.length) {
      return [].concat(_toConsumableArray(result), _toConsumableArray(itemData));
    }

    return result;
  }, []);

  if (itemsData && itemsData.length > 0) {
    return itemsData;
  }

  if (item && item.props && item.props.data && item.props.data.length > 0) {
    return item.props.data;
  }

  if (data && data.length && isNumber(dataStartIndex) && isNumber(dataEndIndex)) {
    return data.slice(dataStartIndex, dataEndIndex + 1);
  }

  return [];
};
/**
 * Get the content to be displayed in the tooltip
 * @param  {Object} state          Current state
 * @param  {Array}  chartData      The data defined in chart
 * @param  {Number} activeIndex    Active index of data
 * @param  {String} activeLabel    Active label of data
 * @return {Array}                 The content of tooltip
 */


var getTooltipContent = function getTooltipContent(state, chartData, activeIndex, activeLabel) {
  var graphicalItems = state.graphicalItems,
      tooltipAxis = state.tooltipAxis;
  var displayedData = getDisplayedData(chartData, state);

  if (activeIndex < 0 || !graphicalItems || !graphicalItems.length || activeIndex >= displayedData.length) {
    return null;
  } // get data by activeIndex when the axis don't allow duplicated category


  return graphicalItems.reduce(function (result, child) {
    var hide = child.props.hide;

    if (hide) {
      return result;
    }

    var data = child.props.data;
    var payload;

    if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
      // graphic child has data props
      var entries = data === undefined ? displayedData : data;
      payload = findEntryInArray(entries, tooltipAxis.dataKey, activeLabel);
    } else {
      payload = data && data[activeIndex] || displayedData[activeIndex];
    }

    if (!payload) {
      return result;
    }

    return [].concat(_toConsumableArray(result), [getTooltipItem(child, payload)]);
  }, []);
};
/**
 * Returns tooltip data based on a mouse position (as a parameter or in state)
 * @param  {Object} state     current state
 * @param  {Array}  chartData the data defined in chart
 * @param  {String} layout     The layout type of chart
 * @param  {Object} rangeObj  { x, y } coordinates
 * @return {Object}           Tooltip data data
 */


var getTooltipData = function getTooltipData(state, chartData, layout, rangeObj) {
  var rangeData = rangeObj || {
    x: state.chartX,
    y: state.chartY
  };
  var pos = calculateTooltipPos(rangeData, layout);
  var ticks = state.orderedTooltipTicks,
      axis = state.tooltipAxis,
      tooltipTicks = state.tooltipTicks;
  var activeIndex = calculateActiveTickIndex(pos, ticks, tooltipTicks, axis);

  if (activeIndex >= 0 && tooltipTicks) {
    var activeLabel = tooltipTicks[activeIndex] && tooltipTicks[activeIndex].value;
    var activePayload = getTooltipContent(state, chartData, activeIndex, activeLabel);
    var activeCoordinate = getActiveCoordinate(layout, ticks, activeIndex, rangeData);
    return {
      activeTooltipIndex: activeIndex,
      activeLabel: activeLabel,
      activePayload: activePayload,
      activeCoordinate: activeCoordinate
    };
  }

  return null;
};
/**
 * Get the configuration of axis by the options of axis instance
 * @param  {Object} props         Latest props
 * @param {Array}  axes           The instance of axes
 * @param  {Array} graphicalItems The instances of item
 * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
 * @param  {String} axisIdKey     The unique id of an axis
 * @param  {Object} stackGroups   The items grouped by axisId and stackId
 * @param {Number} dataStartIndex The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
 * @return {Object}      Configuration
 */


var getAxisMapByAxes = function getAxisMapByAxes(props, _ref2) {
  var axes = _ref2.axes,
      graphicalItems = _ref2.graphicalItems,
      axisType = _ref2.axisType,
      axisIdKey = _ref2.axisIdKey,
      stackGroups = _ref2.stackGroups,
      dataStartIndex = _ref2.dataStartIndex,
      dataEndIndex = _ref2.dataEndIndex;
  var layout = props.layout,
      children = props.children,
      stackOffset = props.stackOffset;
  var isCategorical = isCategoricalAxis(layout, axisType); // Eliminate duplicated axes

  var axisMap = axes.reduce(function (result, child) {
    var _child$props = child.props,
        type = _child$props.type,
        dataKey = _child$props.dataKey,
        allowDataOverflow = _child$props.allowDataOverflow,
        allowDuplicatedCategory = _child$props.allowDuplicatedCategory,
        scale = _child$props.scale,
        ticks = _child$props.ticks;
    var axisId = child.props[axisIdKey];
    var displayedData = getDisplayedData(props.data, {
      graphicalItems: graphicalItems.filter(function (item) {
        return item.props[axisIdKey] === axisId;
      }),
      dataStartIndex: dataStartIndex,
      dataEndIndex: dataEndIndex
    });
    var len = displayedData.length;

    if (!result[axisId]) {
      var domain, duplicateDomain, categoricalDomain;

      if (dataKey) {
        // has dataKey in <Axis />
        domain = getDomainOfDataByKey(displayedData, dataKey, type);

        if (type === 'category' && isCategorical) {
          // the field type is category data and this axis is catrgorical axis
          var duplicate = hasDuplicate(domain);

          if (allowDuplicatedCategory && duplicate) {
            duplicateDomain = domain; // When category axis has duplicated text, serial numbers are used to generate scale

            domain = range_1(0, len);
          } else if (!allowDuplicatedCategory) {
            // remove duplicated category
            domain = parseDomainOfCategoryAxis(child.props.domain, domain, child).reduce(function (finalDomain, entry) {
              return finalDomain.indexOf(entry) >= 0 ? finalDomain : [].concat(_toConsumableArray(finalDomain), [entry]);
            }, []);
          }
        } else if (type === 'category') {
          // the field type is category data and this axis is numerical axis
          if (!allowDuplicatedCategory) {
            domain = parseDomainOfCategoryAxis(child.props.domain, domain, child).reduce(function (finalDomain, entry) {
              return finalDomain.indexOf(entry) >= 0 || entry === '' || isNil_1(entry) ? finalDomain : [].concat(_toConsumableArray(finalDomain), [entry]);
            }, []);
          } else {
            // eliminate undefined or null or empty string
            domain = domain.filter(function (entry) {
              return entry !== '' && !isNil_1(entry);
            });
          }
        } else if (type === 'number') {
          // the field type is numerical
          var errorBarsDomain = parseErrorBarsOfAxis(displayedData, graphicalItems.filter(function (item) {
            return item.props[axisIdKey] === axisId && !item.props.hide;
          }), dataKey, axisType, layout);

          if (errorBarsDomain) {
            domain = errorBarsDomain;
          }
        }

        if (isCategorical && (type === 'number' || scale !== 'auto')) {
          categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, 'category');
        }
      } else if (isCategorical) {
        // the axis is a categorical axis
        domain = range_1(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && type === 'number') {
        // when stackOffset is 'expand', the domain may be calculated as [0, 1.000000000002]
        domain = stackOffset === 'expand' ? [0, 1] : getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
      } else {
        domain = getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function (item) {
          return item.props[axisIdKey] === axisId && !item.props.hide;
        }), type, layout, true);
      }

      if (type === 'number') {
        // To detect wether there is any reference lines whose props alwaysShow is true
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType, ticks);

        if (child.props.domain) {
          domain = parseSpecifiedDomain(child.props.domain, domain, allowDataOverflow);
        }
      } else if (type === 'category' && child.props.domain) {
        var axisDomain = child.props.domain;
        var isDomainValidate = domain.every(function (entry) {
          return axisDomain.indexOf(entry) >= 0;
        });

        if (isDomainValidate) {
          domain = axisDomain;
        }
      }

      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, axisId, _objectSpread(_objectSpread({}, child.props), {}, {
        axisType: axisType,
        domain: domain,
        categoricalDomain: categoricalDomain,
        duplicateDomain: duplicateDomain,
        originalDomain: child.props.domain,
        isCategorical: isCategorical,
        layout: layout
      })));
    }

    return result;
  }, {});
  return axisMap;
};
/**
 * Get the configuration of axis by the options of item,
 * this kind of axis does not display in chart
 * @param  {Object} props         Latest props
 * @param  {Array} graphicalItems The instances of item
 * @param  {ReactElement} Axis    Axis Component
 * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
 * @param  {String} axisIdKey     The unique id of an axis
 * @param  {Object} stackGroups   The items grouped by axisId and stackId
 * @param {Number} dataStartIndex The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
 * @return {Object}               Configuration
 */


var getAxisMapByItems = function getAxisMapByItems(props, _ref3) {
  var graphicalItems = _ref3.graphicalItems,
      Axis = _ref3.Axis,
      axisType = _ref3.axisType,
      axisIdKey = _ref3.axisIdKey,
      stackGroups = _ref3.stackGroups,
      dataStartIndex = _ref3.dataStartIndex,
      dataEndIndex = _ref3.dataEndIndex;
  var layout = props.layout,
      children = props.children;
  var displayedData = getDisplayedData(props.data, {
    graphicalItems: graphicalItems,
    dataStartIndex: dataStartIndex,
    dataEndIndex: dataEndIndex
  });
  var len = displayedData.length;
  var isCategorical = isCategoricalAxis(layout, axisType);
  var index = -1; // The default type of x-axis is category axis,
  // The default contents of x-axis is the serial numbers of data
  // The default type of y-axis is number axis
  // The default contents of y-axis is the domain of data

  var axisMap = graphicalItems.reduce(function (result, child) {
    var axisId = child.props[axisIdKey];

    if (!result[axisId]) {
      index++;
      var domain;

      if (isCategorical) {
        domain = range_1(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
        domain = getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      } else {
        domain = parseSpecifiedDomain(Axis.defaultProps.domain, getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function (item) {
          return item.props[axisIdKey] === axisId && !item.props.hide;
        }), 'number', layout), Axis.defaultProps.allowDataOverflow);
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      }

      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, axisId, _objectSpread(_objectSpread({
        axisType: axisType
      }, Axis.defaultProps), {}, {
        hide: true,
        orientation: get_1(ORIENT_MAP, "".concat(axisType, ".").concat(index % 2), null),
        domain: domain,
        originalDomain: Axis.defaultProps.domain,
        isCategorical: isCategorical,
        layout: layout // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',

      })));
    }

    return result;
  }, {});
  return axisMap;
};
/**
 * Get the configuration of all x-axis or y-axis
 * @param  {Object} props          Latest props
 * @param  {String} axisType       The type of axis
 * @param  {Array}  graphicalItems The instances of item
 * @param  {Object} stackGroups    The items grouped by axisId and stackId
 * @param {Number} dataStartIndex  The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex    The end index of the data series when a brush is applied
 * @return {Object}          Configuration
 */


var getAxisMap = function getAxisMap(props, _ref4) {
  var _ref4$axisType = _ref4.axisType,
      axisType = _ref4$axisType === void 0 ? 'xAxis' : _ref4$axisType,
      AxisComp = _ref4.AxisComp,
      graphicalItems = _ref4.graphicalItems,
      stackGroups = _ref4.stackGroups,
      dataStartIndex = _ref4.dataStartIndex,
      dataEndIndex = _ref4.dataEndIndex;
  var children = props.children;
  var axisIdKey = "".concat(axisType, "Id"); // Get all the instance of Axis

  var axes = findAllByType(children, AxisComp);
  var axisMap = {};

  if (axes && axes.length) {
    axisMap = getAxisMapByAxes(props, {
      axes: axes,
      graphicalItems: graphicalItems,
      axisType: axisType,
      axisIdKey: axisIdKey,
      stackGroups: stackGroups,
      dataStartIndex: dataStartIndex,
      dataEndIndex: dataEndIndex
    });
  } else if (graphicalItems && graphicalItems.length) {
    axisMap = getAxisMapByItems(props, {
      Axis: AxisComp,
      graphicalItems: graphicalItems,
      axisType: axisType,
      axisIdKey: axisIdKey,
      stackGroups: stackGroups,
      dataStartIndex: dataStartIndex,
      dataEndIndex: dataEndIndex
    });
  }

  return axisMap;
};

var tooltipTicksGenerator = function tooltipTicksGenerator(axisMap) {
  var axis = getAnyElementOfObject(axisMap);
  var tooltipTicks = getTicksOfAxis(axis, false, true);
  return {
    tooltipTicks: tooltipTicks,
    orderedTooltipTicks: sortBy_1(tooltipTicks, function (o) {
      return o.coordinate;
    }),
    tooltipAxis: axis,
    tooltipAxisBandSize: getBandSizeOfAxis(axis, tooltipTicks)
  };
};
/**
 * Returns default, reset state for the categorical chart.
 * @param {Object} props Props object to use when creating the default state
 * @return {Object} Whole new state
 */


var createDefaultState = function createDefaultState(props) {
  var _brushItem$props, _brushItem$props2;

  var children = props.children,
      defaultShowTooltip = props.defaultShowTooltip;
  var brushItem = findChildByType(children, Brush.displayName);
  var startIndex = brushItem && brushItem.props && brushItem.props.startIndex || 0;
  var endIndex = (brushItem === null || brushItem === void 0 ? void 0 : (_brushItem$props = brushItem.props) === null || _brushItem$props === void 0 ? void 0 : _brushItem$props.endIndex) !== undefined ? brushItem === null || brushItem === void 0 ? void 0 : (_brushItem$props2 = brushItem.props) === null || _brushItem$props2 === void 0 ? void 0 : _brushItem$props2.endIndex : props.data && props.data.length - 1 || 0;
  return {
    chartX: 0,
    chartY: 0,
    dataStartIndex: startIndex,
    dataEndIndex: endIndex,
    activeTooltipIndex: -1,
    isTooltipActive: !isNil_1(defaultShowTooltip) ? defaultShowTooltip : false
  };
};

var hasGraphicalBarItem = function hasGraphicalBarItem(graphicalItems) {
  if (!graphicalItems || !graphicalItems.length) {
    return false;
  }

  return graphicalItems.some(function (item) {
    var name = getDisplayName(item && item.type);
    return name && name.indexOf('Bar') >= 0;
  });
};

var getAxisNameByLayout = function getAxisNameByLayout(layout) {
  if (layout === 'horizontal') {
    return {
      numericAxisName: 'yAxis',
      cateAxisName: 'xAxis'
    };
  }

  if (layout === 'vertical') {
    return {
      numericAxisName: 'xAxis',
      cateAxisName: 'yAxis'
    };
  }

  if (layout === 'centric') {
    return {
      numericAxisName: 'radiusAxis',
      cateAxisName: 'angleAxis'
    };
  }

  return {
    numericAxisName: 'angleAxis',
    cateAxisName: 'radiusAxis'
  };
};
/**
 * Calculate the offset of main part in the svg element
 * @param  {Object} props          Latest props
 * graphicalItems The instances of item
 * xAxisMap       The configuration of x-axis
 * yAxisMap       The configuration of y-axis
 * @param  {Object} prevLegendBBox          the boundary box of legend
 * @return {Object} The offset of main part in the svg element
 */


var calculateOffset = function calculateOffset(_ref5, prevLegendBBox) {
  var props = _ref5.props,
      graphicalItems = _ref5.graphicalItems,
      _ref5$xAxisMap = _ref5.xAxisMap,
      xAxisMap = _ref5$xAxisMap === void 0 ? {} : _ref5$xAxisMap,
      _ref5$yAxisMap = _ref5.yAxisMap,
      yAxisMap = _ref5$yAxisMap === void 0 ? {} : _ref5$yAxisMap;
  var width = props.width,
      height = props.height,
      children = props.children;
  var margin = props.margin || {};
  var brushItem = findChildByType(children, Brush.displayName);
  var legendItem = findChildByType(children, Legend.displayName);
  var offsetH = Object.keys(yAxisMap).reduce(function (result, id) {
    var entry = yAxisMap[id];
    var orientation = entry.orientation;

    if (!entry.mirror && !entry.hide) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, orientation, result[orientation] + entry.width));
    }

    return result;
  }, {
    left: margin.left || 0,
    right: margin.right || 0
  });
  var offsetV = Object.keys(xAxisMap).reduce(function (result, id) {
    var entry = xAxisMap[id];
    var orientation = entry.orientation;

    if (!entry.mirror && !entry.hide) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, orientation, get_1(result, "".concat(orientation)) + entry.height));
    }

    return result;
  }, {
    top: margin.top || 0,
    bottom: margin.bottom || 0
  });

  var offset = _objectSpread(_objectSpread({}, offsetV), offsetH);

  var brushBottom = offset.bottom;

  if (brushItem) {
    offset.bottom += brushItem.props.height || Brush.defaultProps.height;
  }

  if (legendItem && prevLegendBBox) {
    offset = appendOffsetOfLegend(offset, graphicalItems, props, prevLegendBBox);
  }

  return _objectSpread(_objectSpread({
    brushBottom: brushBottom
  }, offset), {}, {
    width: width - offset.left - offset.right,
    height: height - offset.top - offset.bottom
  });
};

var generateCategoricalChart = function generateCategoricalChart(_ref6) {
  var _class, _temp;

  var chartName = _ref6.chartName,
      GraphicalChild = _ref6.GraphicalChild,
      _ref6$defaultTooltipE = _ref6.defaultTooltipEventType,
      defaultTooltipEventType = _ref6$defaultTooltipE === void 0 ? 'axis' : _ref6$defaultTooltipE,
      _ref6$validateTooltip = _ref6.validateTooltipEventTypes,
      validateTooltipEventTypes = _ref6$validateTooltip === void 0 ? ['axis'] : _ref6$validateTooltip,
      axisComponents = _ref6.axisComponents,
      legendContent = _ref6.legendContent,
      formatAxisMap = _ref6.formatAxisMap,
      defaultProps = _ref6.defaultProps;

  var getFormatItems = function getFormatItems(props, currentState) {
    var graphicalItems = currentState.graphicalItems,
        stackGroups = currentState.stackGroups,
        offset = currentState.offset,
        updateId = currentState.updateId,
        dataStartIndex = currentState.dataStartIndex,
        dataEndIndex = currentState.dataEndIndex;
    var barSize = props.barSize,
        layout = props.layout,
        barGap = props.barGap,
        barCategoryGap = props.barCategoryGap,
        globalMaxBarSize = props.maxBarSize;

    var _getAxisNameByLayout = getAxisNameByLayout(layout),
        numericAxisName = _getAxisNameByLayout.numericAxisName,
        cateAxisName = _getAxisNameByLayout.cateAxisName;

    var hasBar = hasGraphicalBarItem(graphicalItems);
    var sizeList = hasBar && getBarSizeList({
      barSize: barSize,
      stackGroups: stackGroups
    });
    var formattedItems = [];
    graphicalItems.forEach(function (item, index) {
      var displayedData = getDisplayedData(props.data, {
        dataStartIndex: dataStartIndex,
        dataEndIndex: dataEndIndex
      }, item);
      var _item$props = item.props,
          dataKey = _item$props.dataKey,
          childMaxBarSize = _item$props.maxBarSize;
      var numericAxisId = item.props["".concat(numericAxisName, "Id")];
      var cateAxisId = item.props["".concat(cateAxisName, "Id")];
      var axisObj = axisComponents.reduce(function (result, entry) {
        var _objectSpread6;

        var axisMap = currentState["".concat(entry.axisType, "Map")];
        var id = item.props["".concat(entry.axisType, "Id")];
        var axis = axisMap && axisMap[id];
        return _objectSpread(_objectSpread({}, result), {}, (_objectSpread6 = {}, _defineProperty(_objectSpread6, entry.axisType, axis), _defineProperty(_objectSpread6, "".concat(entry.axisType, "Ticks"), getTicksOfAxis(axis)), _objectSpread6));
      }, {});
      var cateAxis = axisObj[cateAxisName];
      var cateTicks = axisObj["".concat(cateAxisName, "Ticks")];
      var stackedData = stackGroups && stackGroups[numericAxisId] && stackGroups[numericAxisId].hasStack && getStackedDataOfItem(item, stackGroups[numericAxisId].stackGroups);
      var itemIsBar = getDisplayName(item.type).indexOf('Bar') >= 0;
      var bandSize = getBandSizeOfAxis(cateAxis, cateTicks);
      var barPosition = [];

      if (itemIsBar) {
        var _ref7, _getBandSizeOfAxis;

        // 如果是bar，计算bar的位置
        var maxBarSize = isNil_1(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
        var barBandSize = (_ref7 = (_getBandSizeOfAxis = getBandSizeOfAxis(cateAxis, cateTicks, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref7 !== void 0 ? _ref7 : 0;
        barPosition = getBarPosition({
          barGap: barGap,
          barCategoryGap: barCategoryGap,
          bandSize: barBandSize !== bandSize ? barBandSize : bandSize,
          sizeList: sizeList[cateAxisId],
          maxBarSize: maxBarSize
        });

        if (barBandSize !== bandSize) {
          barPosition = barPosition.map(function (pos) {
            return _objectSpread(_objectSpread({}, pos), {}, {
              position: _objectSpread(_objectSpread({}, pos.position), {}, {
                offset: pos.position.offset - barBandSize / 2
              })
            });
          });
        }
      }

      var composedFn = item && item.type && item.type.getComposedData;

      if (composedFn) {
        var _objectSpread7;

        formattedItems.push({
          props: _objectSpread(_objectSpread({}, composedFn(_objectSpread(_objectSpread({}, axisObj), {}, {
            displayedData: displayedData,
            props: props,
            dataKey: dataKey,
            item: item,
            bandSize: bandSize,
            barPosition: barPosition,
            offset: offset,
            stackedData: stackedData,
            layout: layout,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
          }))), {}, (_objectSpread7 = {
            key: item.key || "item-".concat(index)
          }, _defineProperty(_objectSpread7, numericAxisName, axisObj[numericAxisName]), _defineProperty(_objectSpread7, cateAxisName, axisObj[cateAxisName]), _defineProperty(_objectSpread7, "animationId", updateId), _objectSpread7)),
          childIndex: parseChildIndex(item, props.children),
          item: item
        });
      }
    });
    return formattedItems;
  };
  /**
   * The AxisMaps are expensive to render on large data sets
   * so provide the ability to store them in state and only update them when necessary
   * they are dependent upon the start and end index of
   * the brush so it's important that this method is called _after_
   * the state is updated with any new start/end indices
   *
   * @param {Object} props          The props object to be used for updating the axismaps
   * dataStartIndex: The start index of the data series when a brush is applied
   * dataEndIndex: The end index of the data series when a brush is applied
   * updateId: The update id
   * @param {Object} prevState      Prev state
   * @return {Object} state New state to set
   */


  var updateStateOfAxisMapsOffsetAndStackGroups = function updateStateOfAxisMapsOffsetAndStackGroups(_ref8, prevState) {
    var props = _ref8.props,
        dataStartIndex = _ref8.dataStartIndex,
        dataEndIndex = _ref8.dataEndIndex,
        updateId = _ref8.updateId;

    if (!validateWidthHeight({
      props: props
    })) {
      return null;
    }

    var children = props.children,
        layout = props.layout,
        stackOffset = props.stackOffset,
        data = props.data,
        reverseStackOrder = props.reverseStackOrder;

    var _getAxisNameByLayout2 = getAxisNameByLayout(layout),
        numericAxisName = _getAxisNameByLayout2.numericAxisName,
        cateAxisName = _getAxisNameByLayout2.cateAxisName;

    var graphicalItems = findAllByType(children, GraphicalChild);
    var stackGroups = getStackGroupsByAxisId(data, graphicalItems, "".concat(numericAxisName, "Id"), "".concat(cateAxisName, "Id"), stackOffset, reverseStackOrder);
    var axisObj = axisComponents.reduce(function (result, entry) {
      var name = "".concat(entry.axisType, "Map");
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, name, getAxisMap(props, _objectSpread(_objectSpread({}, entry), {}, {
        graphicalItems: graphicalItems,
        stackGroups: entry.axisType === numericAxisName && stackGroups,
        dataStartIndex: dataStartIndex,
        dataEndIndex: dataEndIndex
      }))));
    }, {});
    var offset = calculateOffset(_objectSpread(_objectSpread({}, axisObj), {}, {
      props: props,
      graphicalItems: graphicalItems
    }), prevState === null || prevState === void 0 ? void 0 : prevState.legendBBox);
    Object.keys(axisObj).forEach(function (key) {
      axisObj[key] = formatAxisMap(props, axisObj[key], offset, key.replace('Map', ''), chartName);
    });
    var cateAxisMap = axisObj["".concat(cateAxisName, "Map")];
    var ticksObj = tooltipTicksGenerator(cateAxisMap);
    var formattedGraphicalItems = getFormatItems(props, _objectSpread(_objectSpread({}, axisObj), {}, {
      dataStartIndex: dataStartIndex,
      dataEndIndex: dataEndIndex,
      updateId: updateId,
      graphicalItems: graphicalItems,
      stackGroups: stackGroups,
      offset: offset
    }));
    return _objectSpread(_objectSpread({
      formattedGraphicalItems: formattedGraphicalItems,
      graphicalItems: graphicalItems,
      offset: offset,
      stackGroups: stackGroups
    }, ticksObj), axisObj);
  };

  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inherits(CategoricalChartWrapper, _Component);

    var _super = _createSuper(CategoricalChartWrapper);

    // todo join specific chart propTypes
    function CategoricalChartWrapper(_props) {
      var _this;

      _classCallCheck(this, CategoricalChartWrapper);

      _this = _super.call(this, _props);
      _this.uniqueChartId = void 0;
      _this.clipPathId = void 0;
      _this.legendInstance = void 0;
      _this.deferId = void 0;
      _this.container = void 0;

      _this.clearDeferId = function () {
        if (!isNil_1(_this.deferId) && deferClear) {
          deferClear(_this.deferId);
        }

        _this.deferId = null;
      };

      _this.handleLegendBBoxUpdate = function (box) {
        if (box) {
          var _this$state = _this.state,
              dataStartIndex = _this$state.dataStartIndex,
              dataEndIndex = _this$state.dataEndIndex,
              updateId = _this$state.updateId;

          _this.setState(_objectSpread({
            legendBBox: box
          }, updateStateOfAxisMapsOffsetAndStackGroups({
            props: _this.props,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex,
            updateId: updateId
          }, _objectSpread(_objectSpread({}, _this.state), {}, {
            legendBBox: box
          }))));
        }
      };

      _this.handleReceiveSyncEvent = function (cId, chartId, data) {
        var syncId = _this.props.syncId;

        if (syncId === cId && chartId !== _this.uniqueChartId) {
          _this.clearDeferId();

          _this.deferId = defer && defer(_this.applySyncEvent.bind(_assertThisInitialized(_this), data));
        }
      };

      _this.handleBrushChange = function (_ref9) {
        var startIndex = _ref9.startIndex,
            endIndex = _ref9.endIndex;

        // Only trigger changes if the extents of the brush have actually changed
        if (startIndex !== _this.state.dataStartIndex || endIndex !== _this.state.dataEndIndex) {
          var updateId = _this.state.updateId;

          _this.setState(function () {
            return _objectSpread({
              dataStartIndex: startIndex,
              dataEndIndex: endIndex
            }, updateStateOfAxisMapsOffsetAndStackGroups({
              props: _this.props,
              dataStartIndex: startIndex,
              dataEndIndex: endIndex,
              updateId: updateId
            }, _this.state));
          });

          _this.triggerSyncEvent({
            dataStartIndex: startIndex,
            dataEndIndex: endIndex
          });
        }
      };

      _this.handleMouseEnter = function (e) {
        var onMouseEnter = _this.props.onMouseEnter;

        var mouse = _this.getMouseInfo(e);

        if (mouse) {
          var _nextState = _objectSpread(_objectSpread({}, mouse), {}, {
            isTooltipActive: true
          });

          _this.setState(_nextState);

          _this.triggerSyncEvent(_nextState);

          if (isFunction_1(onMouseEnter)) {
            onMouseEnter(_nextState, e);
          }
        }
      };

      _this.triggeredAfterMouseMove = function (e) {
        var onMouseMove = _this.props.onMouseMove;

        var mouse = _this.getMouseInfo(e);

        var nextState = mouse ? _objectSpread(_objectSpread({}, mouse), {}, {
          isTooltipActive: true
        }) : {
          isTooltipActive: false
        };

        _this.setState(nextState);

        _this.triggerSyncEvent(nextState);

        if (isFunction_1(onMouseMove)) {
          onMouseMove(nextState, e);
        }
      };

      _this.handleItemMouseEnter = function (el) {
        _this.setState(function () {
          return {
            isTooltipActive: true,
            activeItem: el,
            activePayload: el.tooltipPayload,
            activeCoordinate: el.tooltipPosition || {
              x: el.cx,
              y: el.cy
            }
          };
        });
      };

      _this.handleItemMouseLeave = function () {
        _this.setState(function () {
          return {
            isTooltipActive: false
          };
        });
      };

      _this.handleMouseMove = function (e) {
        if (e && isFunction_1(e.persist)) {
          e.persist();
        }

        _this.triggeredAfterMouseMove(e);
      };

      _this.handleMouseLeave = function (e) {
        var onMouseLeave = _this.props.onMouseLeave;
        var nextState = {
          isTooltipActive: false
        };

        _this.setState(nextState);

        _this.triggerSyncEvent(nextState);

        if (isFunction_1(onMouseLeave)) {
          onMouseLeave(nextState, e);
        }

        _this.cancelThrottledTriggerAfterMouseMove();
      };

      _this.handleOuterEvent = function (e) {
        var eventName = getReactEventByType(e);

        var event = get_1(_this.props, "".concat(eventName));

        if (eventName && isFunction_1(event)) {
          var mouse;

          if (/.*touch.*/i.test(eventName)) {
            mouse = _this.getMouseInfo(e.changedTouches[0]);
          } else {
            mouse = _this.getMouseInfo(e);
          }

          var handler = event;
          handler(mouse, e);
        }
      };

      _this.handleClick = function (e) {
        var onClick = _this.props.onClick;

        var mouse = _this.getMouseInfo(e);

        if (mouse) {
          var _nextState2 = _objectSpread(_objectSpread({}, mouse), {}, {
            isTooltipActive: true
          });

          _this.setState(_nextState2);

          _this.triggerSyncEvent(_nextState2);

          if (isFunction_1(onClick)) {
            onClick(_nextState2, e);
          }
        }
      };

      _this.handleMouseDown = function (e) {
        var onMouseDown = _this.props.onMouseDown;

        if (isFunction_1(onMouseDown)) {
          var _nextState3 = _this.getMouseInfo(e);

          onMouseDown(_nextState3, e);
        }
      };

      _this.handleMouseUp = function (e) {
        var onMouseUp = _this.props.onMouseUp;

        if (isFunction_1(onMouseUp)) {
          var _nextState4 = _this.getMouseInfo(e);

          onMouseUp(_nextState4, e);
        }
      };

      _this.handleTouchMove = function (e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseMove(e.changedTouches[0]);
        }
      };

      _this.handleTouchStart = function (e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseDown(e.changedTouches[0]);
        }
      };

      _this.handleTouchEnd = function (e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseUp(e.changedTouches[0]);
        }
      };

      _this.verticalCoordinatesGenerator = function (_ref10) {
        var xAxis = _ref10.xAxis,
            width = _ref10.width,
            height = _ref10.height,
            offset = _ref10.offset;
        return getCoordinatesOfGrid(CartesianAxis.getTicks(_objectSpread(_objectSpread(_objectSpread({}, CartesianAxis.defaultProps), xAxis), {}, {
          ticks: getTicksOfAxis(xAxis, true),
          viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
          }
        })), offset.left, offset.left + offset.width);
      };

      _this.horizontalCoordinatesGenerator = function (_ref11) {
        var yAxis = _ref11.yAxis,
            width = _ref11.width,
            height = _ref11.height,
            offset = _ref11.offset;
        return getCoordinatesOfGrid(CartesianAxis.getTicks(_objectSpread(_objectSpread(_objectSpread({}, CartesianAxis.defaultProps), yAxis), {}, {
          ticks: getTicksOfAxis(yAxis, true),
          viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
          }
        })), offset.top, offset.top + offset.height);
      };

      _this.axesTicksGenerator = function (axis) {
        return getTicksOfAxis(axis, true);
      };

      _this.renderCursor = function (element) {
        var _this$state2 = _this.state,
            isTooltipActive = _this$state2.isTooltipActive,
            activeCoordinate = _this$state2.activeCoordinate,
            activePayload = _this$state2.activePayload,
            offset = _this$state2.offset,
            activeTooltipIndex = _this$state2.activeTooltipIndex;

        var tooltipEventType = _this.getTooltipEventType();

        if (!element || !element.props.cursor || !isTooltipActive || !activeCoordinate || chartName !== 'ScatterChart' && tooltipEventType !== 'axis') {
          return null;
        }

        var layout = _this.props.layout;
        var restProps;
        var cursorComp = Curve;

        if (chartName === 'ScatterChart') {
          restProps = activeCoordinate;
          cursorComp = Cross;
        } else if (chartName === 'BarChart') {
          restProps = _this.getCursorRectangle();
          cursorComp = Rectangle;
        } else if (layout === 'radial') {
          var _this$getCursorPoints = _this.getCursorPoints(),
              cx = _this$getCursorPoints.cx,
              cy = _this$getCursorPoints.cy,
              radius = _this$getCursorPoints.radius,
              startAngle = _this$getCursorPoints.startAngle,
              endAngle = _this$getCursorPoints.endAngle;

          restProps = {
            cx: cx,
            cy: cy,
            startAngle: startAngle,
            endAngle: endAngle,
            innerRadius: radius,
            outerRadius: radius
          };
          cursorComp = Sector;
        } else {
          restProps = {
            points: _this.getCursorPoints()
          };
          cursorComp = Curve;
        }

        var key = element.key || '_recharts-cursor';

        var cursorProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({
          stroke: '#ccc',
          pointerEvents: 'none'
        }, offset), restProps), filterProps(element.props.cursor)), {}, {
          payload: activePayload,
          payloadIndex: activeTooltipIndex,
          key: key,
          className: 'recharts-tooltip-cursor'
        });

        return /*#__PURE__*/react.exports.isValidElement(element.props.cursor) ? /*#__PURE__*/react.exports.cloneElement(element.props.cursor, cursorProps) : /*#__PURE__*/react.exports.createElement(cursorComp, cursorProps);
      };

      _this.renderPolarAxis = function (element, displayName, index) {
        var axisType = get_1(element, 'type.axisType');

        var axisMap = get_1(_this.state, "".concat(axisType, "Map"));

        var axisOption = axisMap[element.props["".concat(axisType, "Id")]];
        return /*#__PURE__*/react.exports.cloneElement(element, _objectSpread(_objectSpread({}, axisOption), {}, {
          className: axisType,
          key: element.key || "".concat(displayName, "-").concat(index),
          ticks: getTicksOfAxis(axisOption, true)
        }));
      };

      _this.renderXAxis = function (element, displayName, index) {
        var xAxisMap = _this.state.xAxisMap;
        var axisObj = xAxisMap[element.props.xAxisId];
        return _this.renderAxis(axisObj, element, displayName, index);
      };

      _this.renderYAxis = function (element, displayName, index) {
        var yAxisMap = _this.state.yAxisMap;
        var axisObj = yAxisMap[element.props.yAxisId];
        return _this.renderAxis(axisObj, element, displayName, index);
      };

      _this.renderGrid = function (element) {
        var _this$state3 = _this.state,
            xAxisMap = _this$state3.xAxisMap,
            yAxisMap = _this$state3.yAxisMap,
            offset = _this$state3.offset;
        var _this$props = _this.props,
            width = _this$props.width,
            height = _this$props.height;
        var xAxis = getAnyElementOfObject(xAxisMap);

        var yAxisWithFiniteDomain = find_1(yAxisMap, function (axis) {
          return every_1(axis.domain, isFinit);
        });

        var yAxis = yAxisWithFiniteDomain || getAnyElementOfObject(yAxisMap);
        var props = element.props || {};
        return /*#__PURE__*/react.exports.cloneElement(element, {
          key: element.key || 'grid',
          x: isNumber(props.x) ? props.x : offset.left,
          y: isNumber(props.y) ? props.y : offset.top,
          width: isNumber(props.width) ? props.width : offset.width,
          height: isNumber(props.height) ? props.height : offset.height,
          xAxis: xAxis,
          yAxis: yAxis,
          offset: offset,
          chartWidth: width,
          chartHeight: height,
          verticalCoordinatesGenerator: props.verticalCoordinatesGenerator || _this.verticalCoordinatesGenerator,
          horizontalCoordinatesGenerator: props.horizontalCoordinatesGenerator || _this.horizontalCoordinatesGenerator
        });
      };

      _this.renderPolarGrid = function (element) {
        var _element$props = element.props,
            radialLines = _element$props.radialLines,
            polarAngles = _element$props.polarAngles,
            polarRadius = _element$props.polarRadius;
        var _this$state4 = _this.state,
            radiusAxisMap = _this$state4.radiusAxisMap,
            angleAxisMap = _this$state4.angleAxisMap;
        var radiusAxis = getAnyElementOfObject(radiusAxisMap);
        var angleAxis = getAnyElementOfObject(angleAxisMap);
        var cx = angleAxis.cx,
            cy = angleAxis.cy,
            innerRadius = angleAxis.innerRadius,
            outerRadius = angleAxis.outerRadius;
        return /*#__PURE__*/react.exports.cloneElement(element, {
          polarAngles: isArray_1(polarAngles) ? polarAngles : getTicksOfAxis(angleAxis, true).map(function (entry) {
            return entry.coordinate;
          }),
          polarRadius: isArray_1(polarRadius) ? polarRadius : getTicksOfAxis(radiusAxis, true).map(function (entry) {
            return entry.coordinate;
          }),
          cx: cx,
          cy: cy,
          innerRadius: innerRadius,
          outerRadius: outerRadius,
          key: element.key || 'polar-grid',
          radialLines: radialLines
        });
      };

      _this.renderLegend = function () {
        var formattedGraphicalItems = _this.state.formattedGraphicalItems;
        var _this$props2 = _this.props,
            children = _this$props2.children,
            width = _this$props2.width,
            height = _this$props2.height;
        var margin = _this.props.margin || {};
        var legendWidth = width - (margin.left || 0) - (margin.right || 0);
        var props = getLegendProps({
          children: children,
          formattedGraphicalItems: formattedGraphicalItems,
          legendWidth: legendWidth,
          legendContent: legendContent
        });

        if (!props) {
          return null;
        }

        var item = props.item,
            otherProps = _objectWithoutProperties(props, ["item"]);

        return /*#__PURE__*/react.exports.cloneElement(item, _objectSpread(_objectSpread({}, otherProps), {}, {
          chartWidth: width,
          chartHeight: height,
          margin: margin,
          ref: function ref(legend) {
            _this.legendInstance = legend;
          },
          onBBoxUpdate: _this.handleLegendBBoxUpdate
        }));
      };

      _this.renderTooltip = function () {
        var children = _this.props.children;
        var tooltipItem = findChildByType(children, Tooltip.displayName);

        if (!tooltipItem) {
          return null;
        }

        var _this$state5 = _this.state,
            isTooltipActive = _this$state5.isTooltipActive,
            activeCoordinate = _this$state5.activeCoordinate,
            activePayload = _this$state5.activePayload,
            activeLabel = _this$state5.activeLabel,
            offset = _this$state5.offset;
        return /*#__PURE__*/react.exports.cloneElement(tooltipItem, {
          viewBox: _objectSpread(_objectSpread({}, offset), {}, {
            x: offset.left,
            y: offset.top
          }),
          active: isTooltipActive,
          label: activeLabel,
          payload: isTooltipActive ? activePayload : [],
          coordinate: activeCoordinate
        });
      };

      _this.renderBrush = function (element) {
        var _this$props3 = _this.props,
            margin = _this$props3.margin,
            data = _this$props3.data;
        var _this$state6 = _this.state,
            offset = _this$state6.offset,
            dataStartIndex = _this$state6.dataStartIndex,
            dataEndIndex = _this$state6.dataEndIndex,
            updateId = _this$state6.updateId; // TODO: update brush when children update

        return /*#__PURE__*/react.exports.cloneElement(element, {
          key: element.key || '_recharts-brush',
          onChange: combineEventHandlers(_this.handleBrushChange, null, element.props.onChange),
          data: data,
          x: isNumber(element.props.x) ? element.props.x : offset.left,
          y: isNumber(element.props.y) ? element.props.y : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
          width: isNumber(element.props.width) ? element.props.width : offset.width,
          startIndex: dataStartIndex,
          endIndex: dataEndIndex,
          updateId: "brush-".concat(updateId)
        });
      };

      _this.renderReferenceElement = function (element, displayName, index) {
        if (!element) {
          return null;
        }

        var _assertThisInitialize = _assertThisInitialized(_this),
            clipPathId = _assertThisInitialize.clipPathId;

        var _this$state7 = _this.state,
            xAxisMap = _this$state7.xAxisMap,
            yAxisMap = _this$state7.yAxisMap,
            offset = _this$state7.offset;
        var _element$props2 = element.props,
            xAxisId = _element$props2.xAxisId,
            yAxisId = _element$props2.yAxisId;
        return /*#__PURE__*/react.exports.cloneElement(element, {
          key: element.key || "".concat(displayName, "-").concat(index),
          xAxis: xAxisMap[xAxisId],
          yAxis: yAxisMap[yAxisId],
          viewBox: {
            x: offset.left,
            y: offset.top,
            width: offset.width,
            height: offset.height
          },
          clipPathId: clipPathId
        });
      };

      _this.renderActivePoints = function (_ref12) {
        var item = _ref12.item,
            activePoint = _ref12.activePoint,
            basePoint = _ref12.basePoint,
            childIndex = _ref12.childIndex,
            isRange = _ref12.isRange;
        var result = [];
        var key = item.props.key;
        var _item$item$props = item.item.props,
            activeDot = _item$item$props.activeDot,
            dataKey = _item$item$props.dataKey;

        var dotProps = _objectSpread(_objectSpread({
          index: childIndex,
          dataKey: dataKey,
          cx: activePoint.x,
          cy: activePoint.y,
          r: 4,
          fill: getMainColorOfGraphicItem(item.item),
          strokeWidth: 2,
          stroke: '#fff',
          payload: activePoint.payload,
          value: activePoint.value,
          key: "".concat(key, "-activePoint-").concat(childIndex)
        }, filterProps(activeDot)), adaptEventHandlers(activeDot));

        result.push(CategoricalChartWrapper.renderActiveDot(activeDot, dotProps));

        if (basePoint) {
          result.push(CategoricalChartWrapper.renderActiveDot(activeDot, _objectSpread(_objectSpread({}, dotProps), {}, {
            cx: basePoint.x,
            cy: basePoint.y,
            key: "".concat(key, "-basePoint-").concat(childIndex)
          })));
        } else if (isRange) {
          result.push(null);
        }

        return result;
      };

      _this.renderGraphicChild = function (element, displayName, index) {
        var item = _this.filterFormatItem(element, displayName, index);

        if (!item) {
          return null;
        }

        var tooltipEventType = _this.getTooltipEventType();

        var _this$state8 = _this.state,
            isTooltipActive = _this$state8.isTooltipActive,
            tooltipAxis = _this$state8.tooltipAxis,
            activeTooltipIndex = _this$state8.activeTooltipIndex,
            activeLabel = _this$state8.activeLabel;
        var children = _this.props.children;
        var tooltipItem = findChildByType(children, Tooltip.displayName);
        var _item$props2 = item.props,
            points = _item$props2.points,
            isRange = _item$props2.isRange,
            baseLine = _item$props2.baseLine;
        var _item$item$props2 = item.item.props,
            activeDot = _item$item$props2.activeDot,
            hide = _item$item$props2.hide;
        var hasActive = !hide && isTooltipActive && tooltipItem && activeDot && activeTooltipIndex >= 0;
        var itemEvents = {};

        if (tooltipEventType !== 'axis' && tooltipItem && tooltipItem.props.trigger === 'click') {
          itemEvents = {
            onClick: combineEventHandlers(_this.handleItemMouseEnter, null, element.props.onCLick)
          };
        } else if (tooltipEventType !== 'axis') {
          itemEvents = {
            onMouseLeave: combineEventHandlers(_this.handleItemMouseLeave, null, element.props.onMouseLeave),
            onMouseEnter: combineEventHandlers(_this.handleItemMouseEnter, null, element.props.onMouseEnter)
          };
        }

        var graphicalItem = /*#__PURE__*/react.exports.cloneElement(element, _objectSpread(_objectSpread({}, item.props), itemEvents));

        function findWithPayload(entry) {
          // TODO needs to verify dataKey is Function
          return typeof tooltipAxis.dataKey === 'function' ? tooltipAxis.dataKey(entry.payload) : null;
        }

        if (hasActive) {
          var activePoint, basePoint;

          if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
            // number transform to string
            var specifiedKey = typeof tooltipAxis.dataKey === 'function' ? findWithPayload : 'payload.'.concat(tooltipAxis.dataKey.toString());
            activePoint = findEntryInArray(points, specifiedKey, activeLabel);
            basePoint = isRange && baseLine && findEntryInArray(baseLine, specifiedKey, activeLabel);
          } else {
            activePoint = points[activeTooltipIndex];
            basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
          }

          if (!isNil_1(activePoint)) {
            return [graphicalItem].concat(_toConsumableArray(_this.renderActivePoints({
              item: item,
              activePoint: activePoint,
              basePoint: basePoint,
              childIndex: activeTooltipIndex,
              isRange: isRange
            })));
          }
        }

        if (isRange) {
          return [graphicalItem, null, null];
        }

        return [graphicalItem, null];
      };

      _this.renderCustomized = function (element, displayName, index) {
        return /*#__PURE__*/react.exports.cloneElement(element, _objectSpread(_objectSpread({
          key: "recharts-customized-".concat(index)
        }, _this.props), _this.state));
      };

      _this.uniqueChartId = isNil_1(_props.id) ? uniqueId('recharts') : _props.id;
      _this.clipPathId = "".concat(_this.uniqueChartId, "-clip");

      if (_props.throttleDelay) {
        _this.triggeredAfterMouseMove = throttle_1(_this.triggeredAfterMouseMove, _props.throttleDelay);
      }

      _this.state = {};
      return _this;
    }
    /* eslint-disable  react/no-did-mount-set-state */


    _createClass(CategoricalChartWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!isNil_1(this.props.syncId)) {
          this.addListener();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        // add syncId
        if (isNil_1(prevProps.syncId) && !isNil_1(this.props.syncId)) {
          this.addListener();
        } // remove syncId


        if (!isNil_1(prevProps.syncId) && isNil_1(this.props.syncId)) {
          this.removeListener();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDeferId();

        if (!isNil_1(this.props.syncId)) {
          this.removeListener();
        }

        this.cancelThrottledTriggerAfterMouseMove();
      }
    }, {
      key: "cancelThrottledTriggerAfterMouseMove",
      value: function cancelThrottledTriggerAfterMouseMove() {
        if (typeof this.triggeredAfterMouseMove.cancel === 'function') {
          this.triggeredAfterMouseMove.cancel();
        }
      }
    }, {
      key: "getTooltipEventType",
      value: function getTooltipEventType() {
        var tooltipItem = findChildByType(this.props.children, Tooltip.displayName);

        if (tooltipItem && isBoolean_1(tooltipItem.props.shared)) {
          var eventType = tooltipItem.props.shared ? 'axis' : 'item';
          return validateTooltipEventTypes.indexOf(eventType) >= 0 ? eventType : defaultTooltipEventType;
        }

        return defaultTooltipEventType;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {Object} event    The event object
       * @return {Object}          Mouse data
       */

    }, {
      key: "getMouseInfo",
      value: function getMouseInfo(event) {
        if (!this.container) {
          return null;
        }

        var containerOffset = getOffset(this.container);
        var e = calculateChartCoordinate(event, containerOffset);
        var rangeObj = this.inRange(e.chartX, e.chartY);

        if (!rangeObj) {
          return null;
        }

        var _this$state9 = this.state,
            xAxisMap = _this$state9.xAxisMap,
            yAxisMap = _this$state9.yAxisMap;
        var tooltipEventType = this.getTooltipEventType();

        if (tooltipEventType !== 'axis' && xAxisMap && yAxisMap) {
          var xScale = getAnyElementOfObject(xAxisMap).scale;
          var yScale = getAnyElementOfObject(yAxisMap).scale;
          var xValue = xScale && xScale.invert ? xScale.invert(e.chartX) : null;
          var yValue = yScale && yScale.invert ? yScale.invert(e.chartY) : null;
          return _objectSpread(_objectSpread({}, e), {}, {
            xValue: xValue,
            yValue: yValue
          });
        }

        var toolTipData = getTooltipData(this.state, this.props.data, this.props.layout, rangeObj);

        if (toolTipData) {
          return _objectSpread(_objectSpread({}, e), toolTipData);
        }

        return null;
      }
    }, {
      key: "getCursorRectangle",
      value: function getCursorRectangle() {
        var layout = this.props.layout;
        var _this$state10 = this.state,
            activeCoordinate = _this$state10.activeCoordinate,
            offset = _this$state10.offset,
            tooltipAxisBandSize = _this$state10.tooltipAxisBandSize;
        var halfSize = tooltipAxisBandSize / 2;
        return {
          stroke: 'none',
          fill: '#ccc',
          x: layout === 'horizontal' ? activeCoordinate.x - halfSize : offset.left + 0.5,
          y: layout === 'horizontal' ? offset.top + 0.5 : activeCoordinate.y - halfSize,
          width: layout === 'horizontal' ? tooltipAxisBandSize : offset.width - 1,
          height: layout === 'horizontal' ? offset.height - 1 : tooltipAxisBandSize
        };
      }
    }, {
      key: "getCursorPoints",
      value: function getCursorPoints() {
        var layout = this.props.layout;
        var _this$state11 = this.state,
            activeCoordinate = _this$state11.activeCoordinate,
            offset = _this$state11.offset;
        var x1, y1, x2, y2;

        if (layout === 'horizontal') {
          x1 = activeCoordinate.x;
          x2 = x1;
          y1 = offset.top;
          y2 = offset.top + offset.height;
        } else if (layout === 'vertical') {
          y1 = activeCoordinate.y;
          y2 = y1;
          x1 = offset.left;
          x2 = offset.left + offset.width;
        } else if (!isNil_1(activeCoordinate.cx) || !isNil_1(activeCoordinate.cy)) {
          if (layout === 'centric') {
            var cx = activeCoordinate.cx,
                cy = activeCoordinate.cy,
                innerRadius = activeCoordinate.innerRadius,
                outerRadius = activeCoordinate.outerRadius,
                angle = activeCoordinate.angle;
            var innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
            var outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
            x1 = innerPoint.x;
            y1 = innerPoint.y;
            x2 = outerPoint.x;
            y2 = outerPoint.y;
          } else {
            var _cx = activeCoordinate.cx,
                _cy = activeCoordinate.cy,
                radius = activeCoordinate.radius,
                startAngle = activeCoordinate.startAngle,
                endAngle = activeCoordinate.endAngle;
            var startPoint = polarToCartesian(_cx, _cy, radius, startAngle);
            var endPoint = polarToCartesian(_cx, _cy, radius, endAngle);
            return {
              points: [startPoint, endPoint],
              cx: _cx,
              cy: _cy,
              radius: radius,
              startAngle: startAngle,
              endAngle: endAngle
            };
          }
        }

        return [{
          x: x1,
          y: y1
        }, {
          x: x2,
          y: y2
        }];
      }
    }, {
      key: "inRange",
      value: function inRange(x, y) {
        var layout = this.props.layout;

        if (layout === 'horizontal' || layout === 'vertical') {
          var offset = this.state.offset;
          var isInRange = x >= offset.left && x <= offset.left + offset.width && y >= offset.top && y <= offset.top + offset.height;
          return isInRange ? {
            x: x,
            y: y
          } : null;
        }

        var _this$state12 = this.state,
            angleAxisMap = _this$state12.angleAxisMap,
            radiusAxisMap = _this$state12.radiusAxisMap;

        if (angleAxisMap && radiusAxisMap) {
          var angleAxis = getAnyElementOfObject(angleAxisMap);
          return inRangeOfSector({
            x: x,
            y: y
          }, angleAxis);
        }

        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function parseEventsOfWrapper() {
        var children = this.props.children;
        var tooltipEventType = this.getTooltipEventType();
        var tooltipItem = findChildByType(children, Tooltip.displayName);
        var tooltipEvents = {};

        if (tooltipItem && tooltipEventType === 'axis') {
          if (tooltipItem.props.trigger === 'click') {
            tooltipEvents = {
              onClick: this.handleClick
            };
          } else {
            tooltipEvents = {
              onMouseEnter: this.handleMouseEnter,
              onMouseMove: this.handleMouseMove,
              onMouseLeave: this.handleMouseLeave,
              onTouchMove: this.handleTouchMove,
              onTouchStart: this.handleTouchStart,
              onTouchEnd: this.handleTouchEnd
            };
          }
        }

        var outerEvents = adaptEventHandlers(this.props, this.handleOuterEvent);
        return _objectSpread(_objectSpread({}, outerEvents), tooltipEvents);
      }
      /* eslint-disable  no-underscore-dangle */

    }, {
      key: "addListener",
      value: function addListener() {
        eventCenter.on(SYNC_EVENT, this.handleReceiveSyncEvent);

        if (eventCenter.setMaxListeners && eventCenter._maxListeners) {
          eventCenter.setMaxListeners(eventCenter._maxListeners + 1);
        }
      }
    }, {
      key: "removeListener",
      value: function removeListener() {
        eventCenter.removeListener(SYNC_EVENT, this.handleReceiveSyncEvent);

        if (eventCenter.setMaxListeners && eventCenter._maxListeners) {
          eventCenter.setMaxListeners(eventCenter._maxListeners - 1);
        }
      }
    }, {
      key: "triggerSyncEvent",
      value: function triggerSyncEvent(data) {
        var syncId = this.props.syncId;

        if (!isNil_1(syncId)) {
          eventCenter.emit(SYNC_EVENT, syncId, this.uniqueChartId, data);
        }
      }
    }, {
      key: "applySyncEvent",
      value: function applySyncEvent(data) {
        var _this$props4 = this.props,
            layout = _this$props4.layout,
            syncMethod = _this$props4.syncMethod;
        var updateId = this.state.updateId;
        var dataStartIndex = data.dataStartIndex,
            dataEndIndex = data.dataEndIndex;

        if (!isNil_1(data.dataStartIndex) || !isNil_1(data.dataEndIndex)) {
          this.setState(_objectSpread({
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
          }, updateStateOfAxisMapsOffsetAndStackGroups({
            props: this.props,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex,
            updateId: updateId
          }, this.state)));
        } else if (!isNil_1(data.activeTooltipIndex)) {
          var chartX = data.chartX,
              chartY = data.chartY;
          var activeTooltipIndex = data.activeTooltipIndex;
          var _this$state13 = this.state,
              offset = _this$state13.offset,
              tooltipTicks = _this$state13.tooltipTicks;

          if (!offset) {
            return;
          }

          if (typeof syncMethod === 'function') {
            // Call a callback function. If there is an application specific algorithm
            activeTooltipIndex = syncMethod(tooltipTicks, data);
          } else if (syncMethod === 'value') {
            // Set activeTooltipIndex to the index with the same value as data.activeLabel
            // For loop instead of findIndex because the latter is very slow in some browsers
            activeTooltipIndex = -1; // in case we cannot find the element

            for (var i = 0; i < tooltipTicks.length; i++) {
              if (tooltipTicks[i].value === data.activeLabel) {
                activeTooltipIndex = i;
                break;
              }
            }
          }

          var viewBox = _objectSpread(_objectSpread({}, offset), {}, {
            x: offset.left,
            y: offset.top
          }); // When a categotical chart is combined with another chart, the value of chartX
          // and chartY may beyond the boundaries.


          var validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
          var validateChartY = Math.min(chartY, viewBox.y + viewBox.height);
          var activeLabel = tooltipTicks[activeTooltipIndex] && tooltipTicks[activeTooltipIndex].value;
          var activePayload = getTooltipContent(this.state, this.props.data, activeTooltipIndex);
          var activeCoordinate = tooltipTicks[activeTooltipIndex] ? {
            x: layout === 'horizontal' ? tooltipTicks[activeTooltipIndex].coordinate : validateChartX,
            y: layout === 'horizontal' ? validateChartY : tooltipTicks[activeTooltipIndex].coordinate
          } : originCoordinate;
          this.setState(_objectSpread(_objectSpread({}, data), {}, {
            activeLabel: activeLabel,
            activeCoordinate: activeCoordinate,
            activePayload: activePayload,
            activeTooltipIndex: activeTooltipIndex
          }));
        } else {
          this.setState(data);
        }
      }
    }, {
      key: "filterFormatItem",
      value: function filterFormatItem(item, displayName, childIndex) {
        var formattedGraphicalItems = this.state.formattedGraphicalItems;

        for (var i = 0, len = formattedGraphicalItems.length; i < len; i++) {
          var entry = formattedGraphicalItems[i];

          if (entry.item === item || entry.props.key === item.key || displayName === getDisplayName(entry.item.type) && childIndex === entry.childIndex) {
            return entry;
          }
        }

        return null;
      }
    }, {
      key: "renderAxis",
      value:
      /**
       * Draw axis
       * @param {Object} axisOptions The options of axis
       * @param {Object} element      The axis element
       * @param {String} displayName  The display name of axis
       * @param {Number} index        The index of element
       * @return {ReactElement}       The instance of x-axes
       */
      function renderAxis(axisOptions, element, displayName, index) {
        var _this$props5 = this.props,
            width = _this$props5.width,
            height = _this$props5.height;
        return /*#__PURE__*/React.createElement(CartesianAxis, _extends({}, axisOptions, {
          className: "recharts-".concat(axisOptions.axisType, " ").concat(axisOptions.axisType),
          key: element.key || "".concat(displayName, "-").concat(index),
          viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
          },
          ticksGenerator: this.axesTicksGenerator
        }));
      }
      /**
       * Draw grid
       * @param  {ReactElement} element the grid item
       * @return {ReactElement} The instance of grid
       */

    }, {
      key: "renderClipPath",
      value: function renderClipPath() {
        var clipPathId = this.clipPathId;
        var _this$state$offset = this.state.offset,
            left = _this$state$offset.left,
            top = _this$state$offset.top,
            height = _this$state$offset.height,
            width = _this$state$offset.width;
        return /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
          id: clipPathId
        }, /*#__PURE__*/React.createElement("rect", {
          x: left,
          y: top,
          height: height,
          width: width
        })));
      }
    }, {
      key: "getXScales",
      value: function getXScales() {
        var xAxisMap = this.state.xAxisMap;
        return xAxisMap ? Object.entries(xAxisMap).reduce(function (res, _ref13) {
          var _ref14 = _slicedToArray(_ref13, 2),
              axisId = _ref14[0],
              axisProps = _ref14[1];

          return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, axisId, axisProps.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function getYScales() {
        var yAxisMap = this.state.yAxisMap;
        return yAxisMap ? Object.entries(yAxisMap).reduce(function (res, _ref15) {
          var _ref16 = _slicedToArray(_ref15, 2),
              axisId = _ref16[0],
              axisProps = _ref16[1];

          return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, axisId, axisProps.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function getXScaleByAxisId(axisId) {
        var _this$state$xAxisMap, _this$state$xAxisMap$;

        return (_this$state$xAxisMap = this.state.xAxisMap) === null || _this$state$xAxisMap === void 0 ? void 0 : (_this$state$xAxisMap$ = _this$state$xAxisMap[axisId]) === null || _this$state$xAxisMap$ === void 0 ? void 0 : _this$state$xAxisMap$.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function getYScaleByAxisId(axisId) {
        var _this$state$yAxisMap, _this$state$yAxisMap$;

        return (_this$state$yAxisMap = this.state.yAxisMap) === null || _this$state$yAxisMap === void 0 ? void 0 : (_this$state$yAxisMap$ = _this$state$yAxisMap[axisId]) === null || _this$state$yAxisMap$ === void 0 ? void 0 : _this$state$yAxisMap$.scale;
      }
    }, {
      key: "getItemByXY",
      value: function getItemByXY(chartXY) {
        var formattedGraphicalItems = this.state.formattedGraphicalItems;

        if (formattedGraphicalItems && formattedGraphicalItems.length) {
          for (var i = 0, len = formattedGraphicalItems.length; i < len; i++) {
            var graphicalItem = formattedGraphicalItems[i];
            var props = graphicalItem.props,
                item = graphicalItem.item;
            var itemDisplayName = getDisplayName(item.type);

            if (itemDisplayName === 'Bar') {
              var activeBarItem = (props.data || []).find(function (entry) {
                return isInRectangle(chartXY, entry);
              });

              if (activeBarItem) {
                return {
                  graphicalItem: graphicalItem,
                  payload: activeBarItem
                };
              }
            } else if (itemDisplayName === 'RadialBar') {
              var _activeBarItem = (props.data || []).find(function (entry) {
                return inRangeOfSector(chartXY, entry);
              });

              if (_activeBarItem) {
                return {
                  graphicalItem: graphicalItem,
                  payload: _activeBarItem
                };
              }
            }
          }
        }

        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        if (!validateWidthHeight(this)) {
          return null;
        }

        var _this$props6 = this.props,
            children = _this$props6.children,
            className = _this$props6.className,
            width = _this$props6.width,
            height = _this$props6.height,
            style = _this$props6.style,
            compact = _this$props6.compact,
            title = _this$props6.title,
            desc = _this$props6.desc,
            others = _objectWithoutProperties(_this$props6, ["children", "className", "width", "height", "style", "compact", "title", "desc"]);

        var attrs = filterProps(others);
        var map = {
          CartesianGrid: {
            handler: this.renderGrid,
            once: true
          },
          ReferenceArea: {
            handler: this.renderReferenceElement
          },
          ReferenceLine: {
            handler: this.renderReferenceElement
          },
          ReferenceDot: {
            handler: this.renderReferenceElement
          },
          XAxis: {
            handler: this.renderXAxis
          },
          YAxis: {
            handler: this.renderYAxis
          },
          Brush: {
            handler: this.renderBrush,
            once: true
          },
          Bar: {
            handler: this.renderGraphicChild
          },
          Line: {
            handler: this.renderGraphicChild
          },
          Area: {
            handler: this.renderGraphicChild
          },
          Radar: {
            handler: this.renderGraphicChild
          },
          RadialBar: {
            handler: this.renderGraphicChild
          },
          Scatter: {
            handler: this.renderGraphicChild
          },
          Pie: {
            handler: this.renderGraphicChild
          },
          Funnel: {
            handler: this.renderGraphicChild
          },
          Tooltip: {
            handler: this.renderCursor,
            once: true
          },
          PolarGrid: {
            handler: this.renderPolarGrid,
            once: true
          },
          PolarAngleAxis: {
            handler: this.renderPolarAxis
          },
          PolarRadiusAxis: {
            handler: this.renderPolarAxis
          },
          Customized: {
            handler: this.renderCustomized
          }
        }; // The "compact" mode is mainly used as the panorama within Brush

        if (compact) {
          return /*#__PURE__*/React.createElement(Surface, _extends({}, attrs, {
            width: width,
            height: height,
            title: title,
            desc: desc
          }), this.renderClipPath(), renderByOrder(children, map));
        }

        var events = this.parseEventsOfWrapper();
        return /*#__PURE__*/React.createElement("div", _extends({
          className: classNames('recharts-wrapper', className),
          style: _objectSpread({
            position: 'relative',
            cursor: 'default',
            width: width,
            height: height
          }, style)
        }, events, {
          ref: function ref(node) {
            _this2.container = node;
          },
          role: "region"
        }), /*#__PURE__*/React.createElement(Surface, _extends({}, attrs, {
          width: width,
          height: height,
          title: title,
          desc: desc
        }), this.renderClipPath(), renderByOrder(children, map)), this.renderLegend(), this.renderTooltip());
      }
    }]);

    return CategoricalChartWrapper;
  }(react.exports.Component), _class.displayName = chartName, _class.defaultProps = _objectSpread({
    layout: 'horizontal',
    stackOffset: 'none',
    barCategoryGap: '10%',
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: false,
    syncMethod: 'index'
  }, defaultProps), _class.getDerivedStateFromProps = function (nextProps, prevState) {
    var data = nextProps.data,
        children = nextProps.children,
        width = nextProps.width,
        height = nextProps.height,
        layout = nextProps.layout,
        stackOffset = nextProps.stackOffset,
        margin = nextProps.margin;

    if (isNil_1(prevState.updateId)) {
      var defaultState = createDefaultState(nextProps);
      return _objectSpread(_objectSpread(_objectSpread({}, defaultState), {}, {
        updateId: 0
      }, updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread(_objectSpread({
        props: nextProps
      }, defaultState), {}, {
        updateId: 0
      }), prevState)), {}, {
        prevData: data,
        prevWidth: width,
        prevHeight: height,
        prevLayout: layout,
        prevStackOffset: stackOffset,
        prevMargin: margin,
        prevChildren: children
      });
    }

    if (data !== prevState.prevData || width !== prevState.prevWidth || height !== prevState.prevHeight || layout !== prevState.prevLayout || stackOffset !== prevState.prevStackOffset || !shallowEqual(margin, prevState.prevMargin)) {
      var _defaultState = createDefaultState(nextProps); // Fixes https://github.com/recharts/recharts/issues/2143


      var keepFromPrevState = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: prevState.chartX,
        chartY: prevState.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: prevState.isTooltipActive
      };

      var updatesToState = _objectSpread(_objectSpread({}, getTooltipData(prevState, data, layout)), {}, {
        updateId: prevState.updateId + 1
      });

      var newState = _objectSpread(_objectSpread(_objectSpread({}, _defaultState), keepFromPrevState), updatesToState);

      return _objectSpread(_objectSpread(_objectSpread({}, newState), updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread({
        props: nextProps
      }, newState), prevState)), {}, {
        prevData: data,
        prevWidth: width,
        prevHeight: height,
        prevLayout: layout,
        prevStackOffset: stackOffset,
        prevMargin: margin,
        prevChildren: children
      });
    }

    if (!isChildrenEqual(children, prevState.prevChildren)) {
      // update configuration in chilren
      var hasGlobalData = !isNil_1(data);
      var newUpdateId = hasGlobalData ? prevState.updateId : prevState.updateId + 1;
      return _objectSpread(_objectSpread({
        updateId: newUpdateId
      }, updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread(_objectSpread({
        props: nextProps
      }, prevState), {}, {
        updateId: newUpdateId
      }), prevState)), {}, {
        prevChildren: children
      });
    }

    return null;
  }, _class.renderActiveDot = function (option, props) {
    var dot;

    if ( /*#__PURE__*/react.exports.isValidElement(option)) {
      dot = /*#__PURE__*/react.exports.cloneElement(option, props);
    } else if (isFunction_1(option)) {
      dot = option(props);
    } else {
      dot = /*#__PURE__*/React.createElement(Dot, props);
    }

    return /*#__PURE__*/React.createElement(Layer, {
      className: "recharts-active-dot",
      key: props.key
    }, dot);
  }, _temp;
};

/**
 * @fileOverview Line Chart
 */
var LineChart = generateCategoricalChart({
  chartName: 'LineChart',
  GraphicalChild: Line,
  axisComponents: [{
    axisType: 'xAxis',
    AxisComp: XAxis
  }, {
    axisType: 'yAxis',
    AxisComp: YAxis
  }],
  formatAxisMap: formatAxisMap
});

const data = [
  { name: "Page A", pv: 2400, amt: 2400 },
  { name: "Page B", pv: 1398, amt: 2210 },
  { name: "Page C", pv: 9800, amt: 2290 },
  { name: "Page D", pv: 3908, amt: 2e3 },
  { name: "Page E", pv: 4800, amt: 2181 },
  { name: "Page F", pv: 3800, amt: 2500 },
  { name: "Page G", pv: 4300, amt: 2100 }
];
const AnalyticsPage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 p-0", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Analytics" }),
    /* @__PURE__ */ jsxs(LineChart, { width: 800, height: 400, data, children: [
      /* @__PURE__ */ jsx(XAxis, { dataKey: "name" }),
      /* @__PURE__ */ jsx(YAxis, {}),
      /* @__PURE__ */ jsx(Tooltip, {}),
      /* @__PURE__ */ jsx(Legend, {}),
      /* @__PURE__ */ jsx(Line, { type: "monotone", dataKey: "pv", stroke: "#8884d8" }),
      /* @__PURE__ */ jsx(Line, { type: "monotone", dataKey: "amt", stroke: "#82ca9d" })
    ] }),
    /* @__PURE__ */ jsxs("table", { className: "table-auto w-full mt-4", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-gray-200", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "px-4 py-2", children: "Page" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-2", children: "Pageviews" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-2", children: "Amount" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: data.map((datum) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: "px-4 py-2", children: datum.name }),
        /* @__PURE__ */ jsx("td", { className: "px-4 py-2", children: datum.pv }),
        /* @__PURE__ */ jsx("td", { className: "px-4 py-2", children: datum.amt })
      ] }, datum.name)) })
    ] })
  ] });
};

const __federation_var_sharedSearchBar = await __federation_method_getRemote("shared" , "./SearchBar");
 let SearchBar = __federation_method_unwrapDefault(__federation_var_sharedSearchBar); 
function KC() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { class: "container mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { class: "container mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold font-serif p-3", children: "Knox Configure" }),
      /* @__PURE__ */ jsx(SearchBar, {})
    ] }),
    /* @__PURE__ */ jsx("div", { class: "container gap-10 mb-10", children: /* @__PURE__ */ jsx("div", { class: "max-w-xlg rounded overflow-hidden shadow-lg", children: /* @__PURE__ */ jsxs("div", { class: "px-6 py-4 bg-indigo-100 ", children: [
      /* @__PURE__ */ jsx("div", { class: "font-bold text-xl mb-2", children: "The Coldest Sunset" }),
      /* @__PURE__ */ jsx("p", { class: "text-gray-700 text-base", children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." })
    ] }) }) }),
    /* @__PURE__ */ jsx(AnalyticsPage, {})
  ] }) });
}

export { KC as default, jsx as j };
