/**
 * ctrip - ctrip hotel
 * @version v0.0.1
 * @link http://www.dcloud.io
 * @author MUI Team
 * @license MIT
 */
define(function(require,e,t){mui.init({statusBarBackground:"#099FDE"}),mui.plusReady(function(){plus.navigator.setStatusBarStyle("UIStatusBarStyleBlackOpaque")});var a=require("../libs/utils.js"),n=require("../common/page-helper"),i=require("../controls/hotel-price-filter/main"),r=e;r.dayNum=1,r.beginDate=a.formatDate(new Date,"yyyy-MM-dd");var u=function(){var e=new Date(r.beginDate);e.setDate(e.getDate()+r.dayNum),r.endDate=a.formatDate(e,"yyyy-MM-dd")};u(),r.changeDayNum=function(e){r.dayNum=parseInt(e.target.value),u()},r.pickeDate=function(e,t){var a=(new Date).getFullYear();r.dtPicker=r.dtPicker||new mui.DtPicker({type:"date",beginYear:a,endYear:a+1}),r.dtPicker.show(function(e){r.beginDate=e.value,u()})},r.priceRange=i.priceRange,r.star=i.star,r.computed={priceAndStar:function(){return 0==r.star.value&&0==r.priceRange.value?"价格/星级":r.priceRange.text+","+r.star.text}},r.setPriceFilter=function(){i.show(function(e){r.priceRange=e.priceRange,r.star=e.star})},n.init({handler:r,mvvm:!0}),mui.plusReady(function(){mui.oldBack=mui.back;var e=0;mui.back=function(){return e++,e>1?plus.runtime.quit():plus.nativeUI.toast("再按一次退出应用",{duration:"short"}),setTimeout(function(){e=0},1e3),!1},plus.navigator.closeSplashscreen()})});