webpackJsonp([64],{"4X5N":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});a("6UpY");var n=a("Gtmx"),o={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"organizationManage"}},[a("view-box",[a("x-header",{staticClass:"organizationManage-header",style:{"box-shadow":t.isShowBoxShadow?"0 0 4px 0 rgba(0,0,0,0.12), 0 4px 4px 0 rgba(0,0,0,0.12)":"none"}},[a("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),a("i",{staticClass:"maticon right-icon",attrs:{slot:"right"},domProps:{innerHTML:t._s(t.icons("search"))},on:{click:t._searchOrganization},slot:"right"},[t._v("search")])]),t._v(" "),a("div",{staticClass:"organizationManage-content"},[a("div",{staticClass:"organizationList-container"},t._l(t.organizationListData,function(i,n){return a("div",{key:n,staticClass:"organizationList-cell",class:n===t.organizationListData.length-1?"":"setBorder"},[a("i",{staticClass:"maticon people-icon",domProps:{innerHTML:t._s(t.icons("people"))}},[t._v("people")]),t._v(" "),a("div",{staticClass:"org-name"},[t._v(t._s(i.organization.name))]),t._v(" "),i.peopleToAudit.length>0?a("div",{staticClass:"apply-join-btn",on:{click:function(a){return t._checkPeople(i.peopleToAudit)}}},[t._v(t._s(i.peopleToAudit.length)+"人申请加入")]):t._e()])}),0),t._v(" "),a("div",{staticClass:"organizationManage-tips"},[t._v("\n        前往PC端i校园学工平台使用更多组织管理功能\n      ")])])],1)],1)},staticRenderFns:[]};var e=function(t){a("F1A0")},s=a("VU/8")(n.a,o,!1,e,null,null);i.default=s.exports},"6UpY":function(t,i,a){"use strict";(function(t){a("C331")}).call(i,a("7t+N"))},F1A0:function(t,i){},Gtmx:function(t,i,a){"use strict";(function(t){var n=a("C331");i.a={props:{data:{default:""}},data:function(){return{organizationListData:[],isShowBoxShadow:!1}},watch:{update:function(t){t&&this._initOrganizationList()}},created:function(){this._initOrganizationList()},methods:{_back:function(){this.$emit("removeBread",this.data)},_initOrganizationList:function(){var t=this;Object(n.e)({url:"/api/sc/organizations/list/join-audit",type:"get",success:function(i){i.state?t.organizationListData=i.data:t.$vux.toast.show({text:i.message,position:"bottom",type:"text"})}})},_searchOrganization:function(){this.$emit("addBread",{route:"/organization/MOrganizationSearch",title:""})},_checkPeople:function(t){this.$emit("addBread",{route:"/organization/MorganizationPersonnelCheck",title:"",data:t})}},mounted:function(){var i=this;t(".organizationManage-content").on("scroll",function(){var a=t(this).scrollTop();i.isShowBoxShadow=a>=50})}}}).call(i,a("7t+N"))}});