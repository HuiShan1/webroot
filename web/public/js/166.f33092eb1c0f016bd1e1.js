webpackJsonp([166],{C2d8:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("C331"),e={props:{data:{default:""}},data:function(){return{showConfirm:!1,managerList:[],userId:null}},created:function(){this._initPage()},methods:{_back:function(){this.$emit("removeBread",this.data)},_initPage:function(){var t=this;Object(s.d)({url:"/api/sc/activities/"+this.data.data.id+"/applyAuditors",type:"get",success:function(a){a.state?t.managerList=a.data:t._toast(a.message)}})},_addManager:function(){this.showConfirm=!0},onConfirm:function(t){var a=this;Object(s.d)({url:"/api/users/"+t,dataType:"json",type:"get",success:function(t){t.state?(a.userId=t.data.userId,Object(s.d)({url:"/api/sc/activities/"+a.data.data.id+"/applyAuditors",dataType:"json",type:"post",data:{userId:a.userId},success:function(t){var i="";t.state?(i="操作成功",a._initPage()):i=t.message,a._toast(i)}})):a._toast(t.message)}})},_cancelApply:function(t){var a=this;Object(s.d)({url:"/api/sc/activities/"+this.data.data.id+"/applyAuditors/"+t.userId,type:"delete",success:function(t){var i="";t.state?(i="操作成功",a._initPage()):i=t.message,a._toast(i)}})},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})}}},n={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"authorizationManage"}},[i("view-box",[i("x-header",{staticClass:"authorizationManage-header"},[i("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")])]),t._v(" "),i("div",{staticClass:"authorizationManage-content"},[i("div",{staticClass:"description-container"},[i("i",{staticClass:"maticon description-icon",domProps:{innerHTML:t._s(t.icons("error_outline"))}},[t._v("error_outline")]),t._v(" "),i("div",{staticClass:"description-text"},[t._v("管理员将拥有审核报名人员，创建签到码等除了添加管理员之外所有管理活动的权限。")])]),t._v(" "),i("group",{staticClass:"info-group"},t._l(t.managerList,function(a,s){return i("x-input",{key:s,staticClass:"signIn-info-input",attrs:{title:a.name,readonly:""}},[i("x-button",{staticClass:"withdraw-btn",attrs:{slot:"right",mini:""},nativeOn:{click:function(i){return t._cancelApply(a)}},slot:"right"},[t._v("撤回")])],1)}),1)],1),t._v(" "),i("div",{staticClass:"authorizationManage-footer"},[0===t.managerList.length?i("div",{staticClass:"tips"},[t._v("当前没有管理员，请点击按钮邀请")]):t._e(),t._v(" "),i("i",{staticClass:"maticon add-icon",domProps:{innerHTML:t._s(t.icons("person_add"))},on:{click:t._addManager}},[t._v("person_add")])]),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{id:"activity-manager-transfer-dom"}},[i("confirm",{ref:"confirm",staticClass:"activity-manager-confirm",attrs:{"show-input":"",title:"邀请管理员"},on:{"on-cancel":t.onCancel,"on-confirm":t.onConfirm},model:{value:t.showConfirm,callback:function(a){t.showConfirm=a},expression:"showConfirm"}})],1)],1)],1)},staticRenderFns:[]};var o=i("Mz/3")(e,n,!1,function(t){i("duv5")},null,null);a.default=o.exports},duv5:function(t,a){}});