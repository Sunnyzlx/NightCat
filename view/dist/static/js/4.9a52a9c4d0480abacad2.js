webpackJsonp([4],{160:function(n,t,e){e(191);var o=e(4)(e(170),e(196),null,null);n.exports=o.exports},170:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"admin-home",data:function(){return{list:[]}},methods:{logout:function(){this.$http.post("/signout").then(function(n){console.log(n)})}},mounted:function(){var n=this;this.$graphql.query("users","\n      name,\n      account,\n      email,\n      avatar\n    ").then(function(t){n.list=t}).catch(function(t){return n.$toast(t.message,"error")})}}},186:function(n,t,e){t=n.exports=e(158)(!0),t.push([n.i,".admin-home{padding:20px}ul img{width:80px}","",{version:3,sources:["/Users/mac/Desktop/mine/NightCat/view/src/admin/home.vue"],names:[],mappings:"AAKA,YACE,YAAc,CACf,AACD,OACE,UAAY,CACb",file:"home.vue",sourcesContent:['\n@charset "UTF-8";\n/*\n * 基础色\n */\n.admin-home {\n  padding: 20px;\n}\nul img {\n  width: 80px;\n}\n'],sourceRoot:""}])},191:function(n,t,e){var o=e(186);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(159)("43df9ec7",o,!0)},196:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"admin-home"},[e("ul",n._l(n.list,function(t){return e("li",[e("img",{attrs:{src:t.avatar,alt:"avatar"}}),n._v("\n      "+n._s(t.name)+"\n      "+n._s(t.account)+"\n      "+n._s(t.email)+"\n    ")])})),n._v(" "),e("Btn",{on:{click:n.logout}},[n._v("Logout")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.9a52a9c4d0480abacad2.js.map