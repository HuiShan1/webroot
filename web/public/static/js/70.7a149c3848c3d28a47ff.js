webpackJsonp([70],{aVyK:function(t,a){},xLY9:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("C331"),o={props:{data:{default:null}},data:function(){return{jobData:{}}},methods:{_back:function(){this.$emit("removeBread",this.data)},_apply:function(){var t=this;this.jobData.hasOnTheJob||this.jobData.canApply&&(this.jobData.hasApplied&&this.jobData.instanceId?this.$vux.confirm.show({title:"确定取消申请吗？",onConfirm:function(){Object(i.c)({url:"/api/pwps/workflow/runtime/applications/"+t.jobData.instanceId+"/canceled",type:"put",success:function(a){a.state?(t.data.lastPage.pageIndex=0,t.data.lastPage.positionListData=[],t.data.lastPage._initPositionList({page:t.data.lastPage.pageIndex,size:t.data.lastPage.pageSize}),t.jobData.hasApplied=!1,t.$emit("removeBread",t.data)):t._toast(a.message)}})}}):(this.$emit("addBread",{route:"/partTime/positionApply",title:"",data:this.jobData}),this._back()))},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})}},created:function(){this.data.isMyApply?this.jobData=this.data.data.applicationFormVO:this.jobData=this.data.data,this.jobData.position||(this._toast("岗位信息为空"),this.jobData.position={})}},e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"position-detial",attrs:{id:"positionDetail"}},[s("view-box",[s("x-header",{staticClass:"position-detial-header",attrs:{title:"岗位详情","left-options":{showBack:!1}}},[s("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")])]),t._v(" "),s("div",{staticClass:"position-content"},[s("div",{staticClass:"job-item"},[s("label",{staticClass:"job-name"},[t._v(t._s(t.jobData.position&&t.jobData.position.positionName))]),t._v(" "),s("p",[s("span",{staticClass:"job-unit"},[t._v(t._s(t.jobData.position.unit&&t.jobData.position.unit.name))]),t._v(" "),s("span",{staticClass:"job-type"},[t._v(t._s(t.jobData.position.positionType))])]),t._v(" "),s("div",{staticClass:"job-info"},[s("span",{staticClass:"job-salary"},[t._v(t._s(t.jobData.position.rewardStandard)+"元/小时")])])]),t._v(" "),s("div",{staticClass:"job-item"},[s("label",{staticClass:"job-label"},[t._v("职位详情")]),t._v(" "),s("div",{staticClass:"job-content"},[s("label",{staticClass:"job-detail"},[t._v("岗位职责:")]),t._v(" "),s("pre",{staticClass:"job-detail"},[t._v(t._s(t.jobData.position.description)+"ad发撒旦法阿斯蒂芬阿斯蒂芬阿斯蒂芬阿萨德发送到发撒旦法阿斯蒂芬阿斯蒂芬阿斯蒂芬撒旦法")]),t._v(" "),s("label",{staticClass:"job-detail"},[t._v("岗位要求:")]),t._v(" "),s("pre",{staticClass:"job-detail"},[t._v(t._s(t.jobData.position.positionRequire))])])]),t._v(" "),this.data.isMyApply?s("div",{staticClass:"job-item"},[s("label",{staticClass:"job-label"},[t._v("申请详情")]),t._v(" "),s("div",{staticClass:"job-content"},[s("p",{staticClass:"job-detail"},[t._v(t._s(t.jobData.name))]),t._v(" "),s("label",{staticClass:"job-detail"},[t._v("申请日期:")]),t._v(" "),s("p",{staticClass:"job-detail"},[t._v(t._s(t.data.data.createTime))]),t._v(" "),s("label",{staticClass:"job-detail"},[t._v("工作开始时间:")]),t._v(" "),s("p",{staticClass:"job-detail"},[t._v(t._s(t.jobData.workStartTime))]),t._v(" "),s("label",{staticClass:"job-detail"},[t._v("工作结束时间:")]),t._v(" "),s("p",{staticClass:"job-detail"},[t._v(t._s(t.jobData.workEndTime))]),t._v(" "),s("label",{staticClass:"job-detail"},[t._v("可工作时间:")]),t._v(" "),s("p",{staticClass:"job-detail"},[t._v(t._s(t.jobData.validWorkTime))]),t._v(" "),s("label",{staticClass:"job-detail"},[t._v("是否困难生:")]),t._v(" "),s("p",{staticClass:"job-detail"},[t._v(t._s(!0===t.jobData.isDifficultyStudent?"是":!1===t.jobData.isDifficultyStudent?"否":""))]),t._v(" "),s("label",{staticClass:"job-detail"},[t._v("计算机技能:")]),t._v(" "),s("p",{staticClass:"job-detail"},[t._v(t._s(t.jobData.computerSkill.join(",")))]),t._v(" "),s("label",{staticClass:"job-detail"},[t._v("写作技能:")]),t._v(" "),s("p",{staticClass:"job-detail"},[t._v(t._s(t.jobData.writeSkill.join(",")))]),t._v(" "),s("label",{staticClass:"job-detail"},[t._v("附件:")]),t._v(" "),t._l(t.jobData.attachment,function(a,i){return s("p",{key:i},[t._v(t._s(a.originalName))])})],2)]):t._e()]),t._v(" "),this.data.isMyApply?s("div",{staticClass:"position-footer"},[s("button",{staticClass:"position-btn"},[t._v(t._s(t.data.data.statusLabel))])]):s("div",{staticClass:"position-footer"},[s("button",{staticClass:"position-btn",class:{disabled:t.jobData.hasOnTheJob||t.jobData.hasApplied||!t.jobData.canApply},on:{click:t._apply}},[t._v(t._s(t.jobData.hasOnTheJob?"您已在职":t.jobData.canApply?t.jobData.hasApplied?"取消申请":"申请":"该岗位已过期，不可申请"))])])],1)],1)},staticRenderFns:[]};var l=s("C7Lr")(o,e,!1,function(t){s("aVyK")},null,null);a.default=l.exports}});