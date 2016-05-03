/**
 * ctrip - ctrip hotel
 * @version v0.0.1
 * @link http://www.dcloud.io
 * @author MUI Team
 * @license MIT
 */
define(function(require,e,t){var i=e,n=require("../../common/page-helper");require("./style.css");var o=require("../../libs/jquery"),s=(require("../../libs/tp"),require("../../libs/ems-text!./ui.html")),d=o(s)[0];document.body.appendChild(d),d.addEventListener("touchmove",function(e){e.preventDefault()}),d.addEventListener("tap",function(){i.hide()},!1),i.show=function(){d.classList.add("active")},i.hide=function(){d.classList.remove("active")},i.roomPrice=175,i.roomNum=2,n.init({handler:i,holder:d,mvvm:!0})});