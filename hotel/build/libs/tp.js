/**
 * ctrip - ctrip hotel
 * @version v0.0.1
 * @link http://www.dcloud.io
 * @author MUI Team
 * @license MIT
 */
!function(e){"use strict";function n(e){return e?(e=e.replace(new RegExp("\\{1}","gim"),"\\\\"),e=e.replace(new RegExp("\r{1}","gim"),""),e=e.replace(new RegExp("\n{1}","gim"),"\\n"),e=e.replace(new RegExp("\r{1}","gim"),"\\r"),e=e.replace(new RegExp('"{1}',"gim"),'\\"')):""}function r(e){return e?e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"):""}function t(e,n){for(var r in e)if(e[r]===n)return!0;return!1}function u(e,n){try{return e()}catch(r){throw r.message=r.message||"",r.message=n+" : "+r.message,r}}function i(e,n){if(e){n=n||c;for(var r in e){if(t(["func","push","model","buffer"],r))throw'Can not expand "'+r+' function"';n[r]=e[r]}}}function o(e,n,r){var t=function(e){t.push(e)};t.push=function(e){t.buffer.push(e)};for(var u in r)r[u]&&i(r[u],t);return t.func=e,t.model=null!==n&&void 0!=n?n:"",t.buffer=[],t}function p(r,t){r=r||"",t=t||{};for(var i=t.codeBegin||e.codeBegin,p=t.codeEnd||e.codeEnd,l=new RegExp(i,"gim"),f=new RegExp(p,"gim"),a=new RegExp("("+i+"(.|\\\n|\\\r)*?"+p+")","gim"),d=new RegExp(i+"\\s*=","gim"),s=[],g=r.match(a)||[],m=r.replace(a,"▎").split("▎")||[],v=0;v<m.length;v++){var x=n(m[v]),h=g[v];s.push('$.push("'+x+'")'),null!==h&&"undefined"!=typeof h&&(d.lastIndex=0,h=d.test(h)?"$.push("+h.replace(d,"").replace(f,"")+")":h.replace(l,"").replace(f,""),s.push(h))}s.push('return $.buffer.join("");');var w=function(e,n){return w.exec(e,n)};return u(function(){w.src=new Function("$","$$",s.join(";"))},"Template compile error"),w.exec=function(e,n){n=n||{};var r=o(w,e,[c,t.extend,n.extend]);return u(function(){return r.result=r.func.src.call(r.model,r,r.model)||"",n.returnHandler?r:r.result},"Template execute error")},w}e.version="3.7.1";var c={};e.codeBegin="<%",e.codeEnd="%>",e.extend=i,e.compile=function(e,n){return p(e,n)},e.parse=function(e,n,r,t){var u=p(e,r);return u(n,t)},e._createHandler=o,e._controlledExecute=u,e._inArray=t,"undefined"!=typeof window&&window.document&&(e.query=function(e){return window.document.getElementById(e)},e.bind=function(n){n=n||{};var t=n.query||e.query;if(n.el=n.el||n.element,n.el="string"==typeof n.el?t(n.el):n.el,n.tp=n.tp||n.template||n.el,n.tp="string"==typeof n.tp?t(n.tp)||n.tp:n.tp,n.tp&&n.el){var u=p(r(n.tp.innerHTML||n.tp),n);n.append?n.el.innerHTML+=u(n.model):n.el.innerHTML=u(n.model)}})}(function(){var e={};return"undefined"!=typeof exports&&(e=exports,e.env=e.env||[],e.env.push("commaonjs")),"function"==typeof define&&define.amd&&(e.env=e.env||[],e.env.push("amd"),define("tp",[],function(){return e})),(null==e.env||e.env.length<1)&&(e.env=e.env||[],e.env.push("general"),this.tp=e),e}());