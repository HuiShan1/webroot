webpackJsonp([82],{"x/C1":function(n,e){},zr5z:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});t("IvJb");var a=t("C331"),c={props:{data:{default:null}},data:function(){return{curAnnounce:{title:"载入中...",createTime:"",browser:9999,content:"载入中..."}}},created:function(){var n=this;Object(a.c)({url:"/api/announcement/browser/"+this.data.data.id,type:"post",success:function(e){e.state?Object(a.c)({url:"/api/announcement/"+n.data.data.id,type:"get",success:function(e){e.state?n.curAnnounce=e.data:n.$toast(e.message)}}):n.$toast(e.message)}})}},s={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"announce-page"}},[t("div",{staticClass:"announce-header"},[t("h3",[n._v(n._s(n.curAnnounce.title))]),n._v(" "),t("p",[t("span",{staticClass:"announce-date"},[n._v(n._s(n.curAnnounce.createTime))])])]),n._v(" "),t("div",{staticClass:"announce-body",domProps:{innerHTML:n._s(n.curAnnounce.content)}})])},staticRenderFns:[]};var u=t("C7Lr")(c,s,!1,function(n){t("x/C1")},null,null);e.default=u.exports}});