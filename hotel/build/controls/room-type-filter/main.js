/**
 * ctrip - ctrip hotel
 * @version v0.0.1
 * @link http://www.dcloud.io
 * @author MUI Team
 * @license MIT
 */
define(function(require,e,t){var a=e,o=require("../../common/page-helper");require("./style.css");var c=require("../../libs/jquery"),i=(require("../../libs/tp"),require("../../libs/ems-text!./ui.html")),l=c(i)[0];document.body.appendChild(l),l.addEventListener("touchmove",function(e){e.preventDefault()});var s=mui.createMask();s[0].addEventListener("tap",function(){a.hide()},!1),a.show=function(e){s.show(),a.callback=e,l.classList.add("active"),a.__back=mui.back,mui.back=function(){a.hide()}},a.hide=function(){l.classList.remove("active"),s.close(),mui.back=a.__back,a.callback=null},a.ok=function(){a.callback&&callback(a),a.hide()},a.roomTypes=[{text:"不限",value:"0"},{text:"大床",value:"1"},{text:"双床",value:"2"},{text:"单人床",value:"3"}],a.roomType=a.roomTypes[0],a.pickRoomType=function(e){a.roomType=a.roomTypes[e]},a.breakfasts=[{text:"不限",value:"0"},{text:"含早餐",value:"1"},{text:"单份早餐",value:"2"},{text:"双份早餐",value:"3"}],a.breakfast=a.breakfasts[0],a.pickBreakfast=function(e){a.breakfast=a.breakfasts[e]},a.others=[{text:"不限",value:"0"},{text:"立即确认",value:"1"},{text:"可加床",value:"2"}],a.other=a.others[0],a.pickOther=function(e){a.other=a.others[e]},o.init({handler:a,holder:l,mvvm:!0})});