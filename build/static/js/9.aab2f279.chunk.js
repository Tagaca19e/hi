/*! For license information please see 9.aab2f279.chunk.js.LICENSE.txt */
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{337:function(e,t,r){"use strict";r.r(t);var n=r(0),o=(r(1),r(68),r(69),r(50)),u=r.n(o);t.default=function(){return Object(n.jsxs)("div",{className:"max-w-md mb-auto space-y-5",children:[Object(n.jsx)("h1",{className:"text-5xl font-bold md:text-7xl",children:"Hello"}),Object(n.jsx)("h1",{className:"Im-Eidmone",children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)("span",{children:" I'm Eidmone"}),Object(n.jsx)(u.a.Backspace,{count:7,delay:2e3}),Object(n.jsx)("span",{children:" a student "}),Object(n.jsx)(u.a.Backspace,{count:9,delay:2e3}),Object(n.jsx)("span",{children:" Phrase "}),Object(n.jsx)("span",{children:" Phrase "})]})}),Object(n.jsx)("div",{className:"short-description",children:Object(n.jsxs)("p",{className:"tracking-wide leading-relaxed",children:["I have a passion for developing user-friendly, accessible and responsive websites. I never stop learning and for me, each new project is another adventure."," "]})})]})}},68:function(e,t,r){},69:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=2)}([function(e,t,r){"use strict";e.exports=r(3)},function(e,t,r){e.exports=r(5)()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0),u=s(o),i=s(r(1)),a=s(r(7));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={index:0,displayText:""},r.getRawText=r.getRawText.bind(r),r.type=r.type.bind(r),r.erase=r.erase.bind(r),r.startTyping=r.startTyping.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"componentDidMount",value:function(){this.startTyping()}},{key:"componentWillUnmount",value:function(){this._timeout&&clearTimeout(this._timeout)}},{key:"startTyping",value:function(){var e=this;this._timeout=setTimeout((function(){e.type()}),this.props.typingDelay)}},{key:"getRawText",value:function(){var e=this.props.text;return"string"==typeof e?[e]:[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e))}},{key:"type",value:function(){var e=this,t=this.state,r=t.index,n=t.displayText,o=this.getRawText()[r];o.length>n.length?(n=o.substr(0,n.length+1),this.setState({displayText:n},(function(){e._timeout=setTimeout((function(){e.type()}),e.props.speed)}))):this._timeout=setTimeout((function(){e.erase()}),this.props.eraseDelay)}},{key:"erase",value:function(){var e=this,t=this.state,r=t.index,n=t.displayText;0===n.length?(r=r+1===this.getRawText().length?0:r+1,this.setState({index:r},(function(){e.startTyping()}))):(n=n.substr(-n.length,n.length-1),this.setState({displayText:n},(function(){e._timeout=setTimeout((function(){e.erase()}),e.props.eraseSpeed)})))}},{key:"render",value:function(){var e=this.props,t=(e.speed,e.eraseSpeed,e.typingDelay,e.eraseDelay,e.staticText),r=(e.text,e.cursor),n=e.displayTextRenderer,o=e.cursorClassName,i=e.cursorRenderer,s=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["speed","eraseSpeed","typingDelay","eraseDelay","staticText","text","cursor","displayTextRenderer","cursorClassName","cursorRenderer"]),c=this.state,l=c.displayText,f=c.index;return u.default.createElement("span",s,t?u.default.createElement("span",null,t,"\xa0"):null,u.default.createElement("div",{style:{display:"inline-block"}},n?n(l,f):l),u.default.createElement(a.default,{cursor:r,cursorRenderer:i,className:o}))}}]),t}();t.default=c,c.defaultProps={speed:200,eraseSpeed:200,eraseDelay:5e3,typingDelay:2500},c.propTypes={speed:i.default.number.isRequired,eraseSpeed:i.default.number.isRequired,typingDelay:i.default.number.isRequired,eraseDelay:i.default.number.isRequired,staticText:i.default.string,text:i.default.oneOfType([i.default.arrayOf(i.default.string),i.default.string]).isRequired,cursor:i.default.string,cursorClassName:i.default.string,displayTextRenderer:i.default.func,cursorRenderer:i.default.func}},function(e,t,r){"use strict";var n=r(4),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function _(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function j(){}function O(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=_.prototype;var x=O.prototype=new j;x.constructor=O,n(x,_.prototype),x.isPureReactComponent=!0;var w={current:null},S=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,r){var n,o={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,n)&&!k.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:u,type:e,key:i,ref:a,props:o,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,E=[];function C(e,t,r,n){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function D(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var s=!1;if(null===t)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case u:case i:s=!0}}if(s)return n(o,t,""===r?"."+I(t,0):r),1;if(s=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var l=r+I(a=t[c],c);s+=e(a,l,n,o)}else if("function"==typeof(l=null===t||"object"!=typeof t?null:"function"==typeof(l=b&&t[b]||t["@@iterator"])?l:null))for(t=l.call(t),c=0;!(a=t.next()).done;)s+=e(a=a.value,l=r+I(a,c++),n,o);else if("object"===a)throw n=""+t,Error(m(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return s}(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function N(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function A(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(R,"$&/")+"/"),D(e,M,t=C(t,u,n,o)),$(t)}var q={current:null};function U(){var e=q.current;if(null===e)throw Error(m(321));return e}var L={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return A(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,N,t=C(null,null,t,r)),$(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(m(143));return e}},t.Component=_,t.Fragment=a,t.Profiler=c,t.PureComponent=O,t.StrictMode=s,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(m(267,e));var o=n({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)S.call(t,l)&&!k.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var f=0;f<l;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:u,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=T,t.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in r=Object(arguments[s]))o.call(r,c)&&(a[c]=r[c]);if(n){i=n(r);for(var l=0;l<i.length;l++)u.call(r,i[l])&&(a[i[l]]=r[i[l]])}}return a}},function(e,t,r){"use strict";var n=r(6);function o(){}e.exports=function(){function e(e,t,r,o,u,i){if(i!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=o,r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0),u=a(o),i=a(r(1));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={display:!0},r.animateCursor=r.animateCursor.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"componentDidMount",value:function(){this.animateCursor()}},{key:"componentWillUnmount",value:function(){this._interval&&clearInterval(this._interval)}},{key:"animateCursor",value:function(){var e=this;this._interval=setInterval((function(){e.setState({display:!e.state.display})}),500)}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.cursor,n=e.cursorRenderer,o=this.state.display,i=r||"|";return u.default.createElement("span",{className:t,style:c(o)},n?n(i):i)}}]),t}();t.default=s;var c=function(){return{display:"inline-block",MsTransition:"opacity 0.5s",WebkitTransition:"opacity 0.5s",MozTransition:"opacity 0.5s",transition:"opacity 0.5s",opacity:arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?0:1}};s.propTypes={cursor:i.default.string,className:i.default.string,cursorRenderer:i.default.func}}])}}]);
//# sourceMappingURL=9.aab2f279.chunk.js.map