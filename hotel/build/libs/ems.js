/**
 * ctrip - ctrip hotel
 * @version v0.0.1
 * @link http://www.dcloud.io
 * @author MUI Team
 * @license MIT
 */
!function(e){function n(e){return null===e||"undefined"==typeof e}function t(e){if(n(e))return!1;var t="[object Array]"===Object.prototype.toString.call(e),a=e instanceof Array,u=!o(e)&&r(e.length)&&i(e.splice),s=!o(e)&&r(e.length)&&e[0];return t||a||u||s}function r(e){return n(e)?!1:"number"==typeof e||e instanceof Number}function i(e){return!n(e)&&"function"==typeof e}function o(e){return!n(e)&&"string"==typeof e}function a(e,r){if(e&&r)if(t(e)){for(var i=e.length,o=0;i>o;o++)if(!n(e[o])){var a=r.call(e[o],o,e[o]);if(!n(a))return a}}else for(var u in e)if(!n(e[u])){var s=r.call(e[u],u,e[u]);if(!n(s))return s}}function u(e,t){return!n(e)&&!n(t)&&0===e.indexOf(t)}function s(e,t){return!n(e)&&!n(t)&&e.indexOf(t)>-1}function c(e,t,r){return n(e)?e:e.replace(new RegExp(t,"g"),r)}function l(e){return setTimeout(e,0)}function f(e){return n(e)?[]:("string"==typeof e&&(e=[e]),e)}function d(e){return e.replace(/(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g,"\n").replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g,"\n")}function p(e){e=e.replace(/\/\*[\w\W]*?\*\//gm,";").replace(/^\/\/.*/gi,";"),e=d(e);for(var n=[],t=/require\s*\(\s*[\"|\'](.+?)[\"|\']\s*\)\s*[;|,|\n|\}|\{|\[|\]|\.|\)|\(|\||\&|\+|\-|\*|\/|\<|\>|\=|\?|\:|\%|\$|\_|\!|\"|\'|\~|\^]/gm,r=null;r=t.exec(e);)r&&r[1]&&!s(r[1],'"')&&!s(r[1],"'")&&n.push(r[1]);return n}function v(e){var n=document.createElement("script");return n.src=e,n.async=!0,n.defer=!0,n.type="text/javascript",n}function h(e){var n=document.createElement("link");return n.href=e,n.type="text/css",n.rel="stylesheet",n}function m(){return document.getElementsByTagName("script")}function g(){var e=m();return a(e,function(){return this.getAttribute("data-main")})}function x(){var e=m();return a(e,function(){return"interactive"===this.readyState?this:void 0})}function y(e){Q||(Q=document.getElementsByTagName("head"),Q=Q&&Q[0]?Q[0]:document.body,Q=Q||Q.parent),Q.appendChild(e)}function b(e,n,t){e.addEventListener?e.addEventListener(n,t):e.attachEvent&&e.attachEvent("on"+n,t)}function q(e,n){if(e&&n){if("undefined"!=typeof HTMLLinkElement&&e instanceof HTMLLinkElement)return void l(function(){n.apply(e,[{}])});var t=e.attachEvent?"readystatechange":"load";b(e,t,function(){var t=e.readyState||"loaded";"loaded"!=t&&"interactive"!=t&&"complete"!=t||n.apply(e,arguments||[])})}}function k(e){return"require"==e||"exports"==e||"module"==e}function L(e){if(u(e,"http://")||u(e,"https://")||u(e,"file://"))return!0;var n=/^\S+?:\//gi,t=/^\S+?:\\/gi;return n.test(e)||t.test(e)}function D(e){return u(e,"/")||u(e,"\\")}function T(e,t){if(n(e)||n(t)||L(e)||D(e)||k(e))return e;e=c(e,"\\\\","/"),t=c(t,"\\\\","/"),t=t.split("?")[0].split("#")[0];var r=t.substring(0,t.lastIndexOf("/")),i=e.split("#")[0].split("/"),o=e.split("#")[1],u=r.length>0?r.split("/"):[];return a(i,function(e,n){".."==n?u.pop():"."==n||u.push(n)}),u.join("/")+(o?"#"+o:"")}function U(e,t,r){if(n(e)||n(t))return e;var i=e.split("!"),o=[];return a(i,function(e,n){var i=C(n);i=w(i),i=T(i,t),r||(i=E(i)),o.push(i)}),o.join("!")}function C(e){if(n(e)||k(e))return e;var t=_[e]||e;t=t.uri||t||e;var r=F[e];if(null!=r){var t=r.uri||t;G[t]=r}return t}function E(e){if(n(e)||k(e))return e;var t=e.substring(e.lastIndexOf("/")+1,e.length),r=n(t)||""===t;return r?e:(s(e,"?")||s(e,"#")||s(t,".")||(e+=W.extension),e)}function w(e){if(k(e))return e;var n=e.indexOf("/");0>n&&(n=e.length);var t=e.substr(0,n),r=e.substr(n+1,e.length);return a(z,function(n,i){t==i.name&&(t=i.location||t,r=r||i.main||"","/"==t[t.length-1]&&(t=t.substring(0,t.lastIndexOf("/"))),"/"==r[0]&&(r=r.substring(1,r.length)),e=t+"/"+r)}),e}function O(e,n){n=n||W.baseUri||location.href,e=f(e);var t=[];return a(e,function(e,r){var i=U(r,n);t.push(i)}),t}function j(e,n){return e.id=n.id||e.id,e.deps=n.deps||e.deps,e.factory=n.factory||e.factory||function(){},e.factoryDeps=n.factoryDeps||e.factoryDeps,e.executed=!1,n=null,e}function S(t,r){var o=J[t];n(o)||(j(o,r),o.saved=!0,o.execute=function(){if(!o.executed&&i(o.factory)){o.executed=!0;for(var n=o.depModules,t=[],r=0;r<n.length;r++){var a=n[r];"require"==a.id?t.push(o.require):"exports"==a.id?t.push(o.exports):"module"==a.id?t.push(o):(a.execute(),t.push(a.exports))}t.push(o.require),t.push(o.exports),t.push(o);var u=o.factory.apply(e,t);o.exports=u||o.exports}return o.exports},o.load(o.deps,function(){o.depModules=arguments||[],o.load(o.factoryDeps,function(){o.factoryDepModules=arguments||[],o.timer&&clearTimeout(o.timer),R.onLoad&&i(R.onLoad)&&R.onLoad(o),o.loaded=!0,a(o.loadCallbacks,function(e,n){i(n)&&n(o)}),o.loadCallbacks=null})}))}function M(r,a,u){if(n(r))throw"路径 '"+r+"' 存在错误.";J[r]=J[r]||new $(r);var c=J[r];return!n(c)&&c.loaded&&i(a)?void a(c):A(r,u)&&i(a)?void a(c):!n(c)&&t(c.loadCallbacks)?void c.loadCallbacks.push(a):(c.loadCallbacks=[],c.loadCallbacks.push(a),c.element=s(r,".css")?h(r):v(r),W.maxLoadTime>0&&(c.timer=setTimeout(function(){throw"加载 "+r+' 超时,可能原因: "1.无法处理的循环依赖; 2.资源不存在; 3.脚本错误; 4.其它未知错误;".'},W.maxLoadTime)),q(c.element,function(){if(!c.loaded&&!c.saved){var t=K.shift();if(n(t))if(n(G[r]))S(r,{});else{if(t=G[r],i(t.exports)||i(t.init)){var a=t.init||t.exports||t.factory;t.factory=a}else if(o(t.exports)){var u=t.exports;t.factory=function(){return e[u]}}t.id=r,S(r,t)}else S(r,t)}}),c.loading=!0,void y(c.element))}function N(e,t,r){if(n(e))throw"路径 '"+e+"' 存在错误.";if(s(e,"!")){var o=e.lastIndexOf("!"),a=e.substring(0,o),u=e.substring(o+1);if(""==a||""==u)throw"路径 '"+e+"' 存在错误.";var c=J[u];return!n(c)&&c.loaded?(i(t)&&t(c),c):N(a,function(e){if(n(e))throw"插件 '"+a+"' 存在错误.";i(e.execute)&&e.execute();var o=e.exports;if(n(o)||!i(o.load))throw"插件 '"+a+"' 存在错误.";var s=function(e){var n=J[u]={exports:e,executed:!0,loaded:!0,loading:!0,saved:!0};i(t)&&t(n)};s.fromText=s,s.error=s;var c=J[r]||e||R;o.load(u,c.require,s,R.config())})}return M(e,t,r)}function A(e,t){var r=!1;if(t=t||W.baseUri||location.href,(n(t)||n(e))&&(r=!1),e==t&&(r=!0),!r){var i=J[e];if(n(i))r=!1;else{if(!r&&i.deps&&i.deps.length>0){var o=O(i.deps,i.uri);a(o,function(e,n){return n==t||A(n,t)?void(r=!0):void 0})}if(!r&&i.factoryDeps&&i.factoryDeps.length>0){var u=O(i.factoryDeps,i.uri);a(u,function(e,n){return n==t||A(n,t)?void(r=!0):void 0})}}}if(W.disabledCircularDependency&&r)throw'已检测到"'+e+'"和"'+t+'"或其上层依赖存在循环依赖';return r}function I(e){var t=[];return a(e,function(e,r){n(r)?t.push(null):(i(r.execute)&&r.execute(),t.push(r.exports))}),t}function H(e){var n=[];return a(e,function(e,t){var r=t.split("!")[1]||t||"",i=J[r];n.push(i)}),n}function $(e){var t=this,r=t.uri=t.id=e||"/";t.resovleUri=function(e,n,t){return U(e,n||r,t)},t.load=function(n,t){return R.load(n,t,e)},t.unload=t.undef=function(n){return R.unload(n,e)},t.require=function(n,t){return R.require(n,t,e)},t.require.toUrl=t.require.resovleUri=function(e,n,r){return t.resovleUri(e,n,r)},t.require.defined=function(e){return J[e].loaded},t.require.specified=function(e){return J[e].loaded||!n(J[e].loadCallbacks)},t.require.module=t,t.exports={},t.factory=null,t.deps=null,t.factoryDeps=null,t.loading=!1,t.loaded=!1,t.executed=!1,t.saved=!1}function B(e,n,t){var r=null;return n&&t?r={id:e,deps:n,factory:t}:e&&n?r={deps:e,factory:n}:e&&t?r={id:e,deps:n,factory:t}:e&&(r={factory:e}),r}var R=e.ems=function(e,n,t){return R.require(e,n,t)};R.version="v1.3.3",R.author="Houfeng",R.tool={},R.tool.matchRequire=p;var Q=null,W=R.options={};W.extension=".js",W.maxLoadTime=1e4,W.disabledCircularDependency=!1,W.settings={};var _=R.alias=R.paths=W.alias=W.paths={},z=R.packages=W.packages={},F=R.shim=W.shim={},G={},J=R.modules={require:{id:"require",loading:!0,saved:!0,loaded:!0,executed:!0,exports:{}},exports:{id:"exports",loading:!0,saved:!0,loaded:!0,executed:!0,exports:{}},module:{id:"module",loading:!0,saved:!0,loaded:!0,executed:!0,exports:{}}};R.config=function(e){return null===e?W:(e=e||{},e.alias=e.alias||e.paths||{},a(e.alias,function(e,n){var t=n.name||e;_[t]=n}),e.shim=e.shim||{},a(e.shim,function(e,n){var t=n.name||e;F[t]=n}),e.packages=e.packages||[],a(e.packages,function(e,n){n.name||e;z[n.name]=n}),e.settings=e.settings||{},a(e.settings,function(e,n){n.name||e;W.settings[n.name]=n}),W.extension=W.extension||e.extension,W.baseUri=W.baseUri||e.baseUri||e.baseUrl,W.maxLoadTime=W.maxLoadTime||e.maxLoadTime,void(W.disabledCircularDependency=e.disabledCircularDependency))},R.load=function(n,t,r){var o=O(n,r),u=H(o),s=0;return o&&o.length>0?a(o,function(n,a){N(a,function(){s++,s<o.length||(u=H(o)||u,i(t)&&t.apply(e,u))},r)}):i(t)&&t.apply(e,u),u},R.unload=R.undef=function(e,n){var t=O(e,n);a(t,function(e,n){var t=J[n];t&&(t.element&&t.element.parentNode&&t.element.parentNode.removeChild(t.element),t.element=null,t=null,J[n]=null)})},R.require=function(n,t,r){var o=R.load(n,function(){var n=arguments,r=I(n);i(t)&&t.apply(e,r)},r),a=I(o);return a&&1==a.length?a[0]:a};var K=[];R.define=function(e,r,o){var a=B(e,r,o);if(!n(a)){if(!i(a.factory)){var u=a.factory;a.factory=function(){return u}}var s=a.factory.toString(),c=p(s);t(c)&&c.length>0&&(a.factoryDeps=c);var l=x();if(n(l))K.push(a);else{var f=l.getAttribute("src");S(f,a)}}},R.resovleUri=function(e,n,t){return U(e,n||W.baseUri||location.href,t)},R.require.toUrl=R.resovleUri,R.define.amd={},R.define.amd.jQuery=!0;var P=g();n(P)||""===P||R.require(P),e.define=R.define}(this);