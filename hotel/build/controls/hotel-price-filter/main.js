/**
 * ctrip - ctrip hotel
 * @version v0.0.1
 * @link http://www.dcloud.io
 * @author MUI Team
 * @license MIT
 */
define(function(require,e,t){var a=e,c=require("../../common/page-helper");require("./style.css");var i=require("../../libs/jquery"),l=(require("../../libs/tp"),require("../../libs/ems-text!./ui.html")),n=i(l)[0];document.body.appendChild(n),n.addEventListener("touchmove",function(e){e.preventDefault()});var u=mui.createMask();u[0].addEventListener("tap",function(){a.hide()},!1),a.show=function(e){u.show(),a.callback=e,n.classList.add("active"),a.__back=mui.back,mui.back=function(){a.hide()}},a.hide=function(){n.classList.remove("active"),u.close(),a.callback=null,mui.back=a.__back},a.ok=function(){a.callback&&a.callback(a),a.hide()},a.priceRanges=[{text:"不限",value:"0"},{text:"￥150以下",value:"0-149"},{text:"￥150-￥300",value:"150-300"},{text:"￥301-￥450",value:"301-450"},{text:"￥451-￥600",value:"354-600"},{text:"￥601-￥1000",value:"601-1000"},{text:"￥1000以上",value:"1000-∞"}],a.priceRange=a.priceRanges[0],a.pickPriceRange=function(e){a.priceRange=a.priceRanges[e]},a.starTypes=[{text:"不限",value:"0"},{text:"快捷连锁",value:"1"},{text:"二星及以下/经济",value:"2"},{text:"三星/舒适",value:"3"},{text:"四星/高档",value:"4"},{text:"五星/豪华",value:"5"}],a.star=a.starTypes[0],a.pickStar=function(e){a.star=a.starTypes[e]},c.init({handler:a,holder:n,mvvm:!0})});