webpackJsonp([57],{Rl7m:function(t,e){},r47H:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("n+6Y"),s=a("C331"),i=a("/tWO");o.a.component("jobApplyForm",i.a);o.a.component("jobApplyForm",i.a);var n={created:function(){var t=this,e=localStorage.getItem("lang");Object(s.e)(e)&&(this.lang=e),this.isTodifficultStudentData=[{id:"true",text:"是"},{id:"false",text:"否"}],this.canApplyData=[{id:"true",text:"是"},{id:"false",text:"否"}],Object(s.c)({url:"/api/pwps/workflow/runtime/positions/out/nodes",dataType:"json",type:"get",success:function(e){e.state?e.data&&(e.data.forEach(function(e,a){"SCHOOL"===e.type?t.checkTabs.push({id:e.id,name:"全校退岗申请审核",type:e.type,allowBatchOperation:e.allowBatchOperation,allowReject:e.allowReject}):"COLLEGE"===e.type?t.checkTabs.push({id:e.id,name:"本院退岗申请审核",type:e.type,allowBatchOperation:e.allowBatchOperation,allowReject:e.allowReject}):t.checkTabs.push({id:e.id,name:"本单位退岗申请审核",type:e.type,allowBatchOperation:e.allowBatchOperation,allowReject:e.allowReject})}),t.checkTabId=t.checkTabs[0].id,t.checkType=t.checkTabs[0].type,t.allowBatchOperation=t.checkTabs[0].allowBatchOperation,t.allowReject=t.checkTabs[0].allowReject):t.toast(e.message)}}),Object(s.c)({url:"/api/pwps/workflow/runtime/applications/search/options",dataType:"json",type:"get",success:function(e){e.state?e.data&&(t.columns=[{id:"year",title:"学年",className:"text-left",hidden:!1,width:100,formatter:function(t){return t.outPositionForm.position.schoolYear.name},search:{type:"select",data:{url:"/api/pwps/positions/all/schoolYears",optionsLabel:"name",optionsValue:"id"}}},{id:"userName",title:"姓名",className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!0}},formatter:function(t){return t.outPositionForm.name}},{id:"userNo",title:"学号",className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!0}},formatter:function(t){return t.outPositionForm.userNo}},{id:"contact",title:"联系方式",className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!0}},formatter:function(t){return t.outPositionForm.contact}},{id:"collegeCode",title:"学院",className:"text-left",width:120,hidden:!1,search:{type:"select",data:{url:"/api/colleges",optionsLabel:"name",optionsValue:"code"}},formatter:function(t){return t.outPositionForm.collegeName}},{id:"positionName",title:"岗位名称",className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!0}},formatter:function(t){return t.outPositionForm.position.positionName}},{id:"auditStatus",title:"审核状态",className:"text-left",hidden:!1,width:100,formatter:function(t){return t.statusLabel},search:{type:"select",data:{options:e.data.auditStatus,optionsLabel:"text",optionsValue:"id"}}},{id:"grade",title:"年级",className:"text-left",hidden:!0,formatter:function(t){return t.outPositionForm.grade}},{id:"sex",title:"性别",className:"text-left",hidden:!0,formatter:function(t){return t.outPositionForm.sex}},{id:"educationLevel",title:"培养层次",className:"text-left",hidden:!0,formatter:function(t){return t.outPositionForm.educationLevel}},{id:"politicalStatus",title:"政治面貌",className:"text-left",hidden:!0,formatter:function(t){return t.outPositionForm.politicalStatus}},{id:"className",title:"班级",className:"text-left",hidden:!0,formatter:function(t){return t.outPositionForm.className}},{id:"isDifficultyStudent",title:"是否困难生",className:"text-left",hidden:!0,formatter:function(t){return t.outPositionForm.isDifficultyStudent?"是":"否"}},{id:"reason",title:"退岗理由",className:"text-left",hidden:!0,formatter:function(t){return t.outPositionForm.position.reason}},{id:"remark",title:"备注",className:"text-left",hidden:!0,formatter:function(t){return t.outPositionForm.position.remark}},{id:"opt",className:"text-center",title:"操作",width:"130px",hidden:!1,formatter:function(e){var a=[{tag:"a",text:"查看",className:"opt-btn",callback:function(e,a){t.curRouter="jobApplyForm",t.positionId=e.id,t.applicationFormDetail={createTime:e.createTime,form:e.outPositionForm,status:e.currentNodeStatus,formId:e.id,isShowLog:!0,opts:{canCancel:!1,canResubmit:!1,canRevoke:e.canRevoke}}}}];return"TODO"===e.currentNodeStatus&&(a.push({tag:"a",text:"通过",className:"opt-btn",callback:function(e,a){t.checkOpt("pass",[e.id])}}),a.push({tag:"a",text:"不通过",className:"opt-btn",callback:function(e,a){t.checkOpt("unpass",[e.id])}})),e.canRevoke&&a.push({tag:"a",text:"撤回",className:"opt-btn",callback:function(e,a){t.positionId=e.id,t._revoke()}}),a}}]):t.toast(e.message)}}),Object(s.c)({url:"/api/system/dicts",dataType:"json",type:"get",data:{dictType:"校区"},success:function(e){e.state?t.schoolData=e.data:t.toast(e.message)}}),Object(s.c)({url:"/api/system/dicts",dataType:"json",type:"get",data:{dictType:"岗位类型"},success:function(e){e.state?t.positionTypeData=e.data:t.toast(e.message)}})},data:function(){return{retiredCheckUrl:"/table-data/pwps/workflow/runtime/positions/out/instances",exportModalShow:!1,columns:[],manageTableUrl:"",exportFieldList:[],tableCheckedList:[],allowReject:"",allowBatchOperation:"",checkTabs:[],checkTabId:"",checkType:"",applicationFormDetail:{},curRouter:"studentJobApplyCheckList",timeStamp:"",positionId:"",showUnpassOpinionModal:!1,unpassIds:[],opinion:""}},computed:{translate:function(){return Object(s.e)(this.lang).schoolRoleManage},tableCheckedIds:function(){var t=[];return this.tableCheckedList.forEach(function(e){"TODO"===e.currentNodeStatus&&t.push(e.id)}),t}},methods:{_back:function(){this.curRouter="studentJobApplyCheckList"},_pass:function(){this.checkOpt("pass",[this.positionId])},_unpass:function(t){this.unpassIds=[],this.unpassIds.push(this.positionId),this.opinion=t.opinion,this.submitUnpassOpinion()},_revoke:function(){var t=this;window.confirm("确定撤回吗？")&&Object(s.c)({url:"/api/pwps/workflow/runtime/positions/out/instances/"+this.positionId+"/revoke",type:"put",success:function(e){e.state?(t.timeStamp=Object(s.a)(),t.curRouter="studentJobApplyCheckList",t.toast("撤回成功")):t.toast(e.message)}})},changeCheckTab:function(t){var e=this;this.checkTabId=t.value,this.checkTabs.forEach(function(t,a){t.id===e.checkTabId&&(e.allowBatchOperation=t.allowBatchOperation,e.allowReject=t.allowReject,e.checkType=t.type)})},_checkField:function(t){var e=this.exportFieldList.indexOf(t.id);e>=0?this.exportFieldList.splice(e,1):this.exportFieldList.push(t.id)},_tableChecked:function(t){this.tableCheckedList=t},checkOpt:function(t,e){var a=this;0!==e.length?"pass"===t?window.confirm("确定通过吗？")&&Object(s.c)({url:"/api/pwps/workflow/runtime/positions/out/instances/success",type:"post",data:{ids:e},success:function(t){t.state?(a.timeStamp=Object(s.a)(),a.toast("操作成功"),a.tableCheckedList=[],a.curRouter="studentJobApplyCheckList"):a.toast(t.message)}}):(this.showUnpassOpinionModal=!0,this.unpassIds=[],this.unpassIds=e,this.opinion=""):this.toast("当前没有可操作的数据")},submitUnpassOpinion:function(){var t=this;if(!this.opinion)return this.toast("请输入不通过的意见");Object(s.c)({url:"/api/pwps/workflow/runtime/positions/out/instances/failed",type:"post",data:{ids:this.unpassIds,opinion:this.opinion},success:function(e){e.state?(t.timeStamp=Object(s.a)(),t.showUnpassOpinionModal=!1,t.toast("操作成功"),t.tableCheckedList=[],t.curRouter="studentJobApplyCheckList"):t.toast(e.message)}})},_export:function(){var t=this,e=[];this.tableCheckedList.forEach(function(t,a){e.push(t.id)});var a=this.$refs.jobTable.tableSearchFields,o="";for(var i in a)a[i]?o+="&"+i+"="+a[i]:o+="&"+i+"=";this.$waiting.show(),Object(s.c)({url:"/api/pwps/workflow/runtime/positions/out/instances/export?nodeId="+this.checkTabId+"&nodeType="+this.checkType+"&ids="+e+o,type:"get",success:function(e){e.state?window.location.href="/downloads/pwps/workflow/runtime/download?key="+e.data:t.toast(e.message)}}).always(function(){t.$waiting.close()})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return"studentJobApplyCheckList"===t.curRouter?a("div",{staticClass:"job-retired-check"},[a("div",[a("v-table",{ref:"jobTable",attrs:{url:t.checkTabId?t.retiredCheckUrl+"?nodeId="+t.checkTabId+"&nodeType="+t.checkType+"&timeStamp="+t.timeStamp:"",columns:t.columns,pagesize:"10",idField:"id",multiple:!0,order:!0,search:!1,columnsControl:!0},on:{afterChecked:t._tableChecked}},[a("div",{attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("div",{staticClass:"btn-group pull-left"},[t.tableCheckedList.length>0?a("div",{staticClass:"batch-options"},[a("span",{staticClass:"pull-left"},[t._v("已选择"+t._s(t.tableCheckedList.length)+"项，其中可操作的有"+t._s(t.tableCheckedIds.length)+"项")]),t._v(" "),a("div",{staticClass:"pull-left"},[a("button",{staticClass:"btn blue clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.checkOpt("pass",t.tableCheckedIds)}}},[t._v("通过")]),t._v(" "),a("button",{staticClass:"btn blue clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.checkOpt("unpass",t.tableCheckedIds)}}},[t._v("不通过")])])]):a("v-select",{attrs:{value:t.checkTabId,options:t.checkTabs,optionsLabel:"name",optionsValue:"id"},on:{afterSelected:t.changeCheckTab}})],1),t._v(" "),a("div",{staticClass:"btn-group pull-right"},[a("button",{staticClass:"btn  add clearBtnBorder",attrs:{type:"button"},on:{click:t._export}},[t._v("导出")])])])])],1),t._v(" "),a("v-modal",{attrs:{show:t.exportModalShow}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n        导出字段配置\n      ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"field-list"},t._l(t.columns,function(e,o){return"opt"!==e.id?a("div",{key:o,staticClass:"field-item",class:{active:t.exportFieldList.indexOf(e.id)>=0},on:{click:function(a){t._checkField(e)}}},[a("i",{staticClass:"maticon pull-left",domProps:{innerHTML:t._s(t.icons(t.exportFieldList.indexOf(e.id)>=0?"check_box":"check_box_outline_blank"))}}),t._v(" "),a("span",[t._v(t._s(e.title))])]):t._e()}))]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){t.exportModalShow=!1}}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"button"}},[t._v("开始导出")])])]),t._v(" "),a("v-modal",{attrs:{show:t.showUnpassOpinionModal,width:"500"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n        确定不通过该申请吗？\n      ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.opinion,expression:"opinion"}],staticClass:"modal-textarea",attrs:{cols:"24",rows:"5",placeholder:"请输入不通过的意见",maxlength:"600"},domProps:{value:t.opinion},on:{input:function(e){e.target.composing||(t.opinion=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.showUnpassOpinionModal=!1}}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t.submitUnpassOpinion}},[t._v("确定")])])])],1):a("jobApplyForm",{attrs:{formType:"check",isApply:!1,formDetail:t.applicationFormDetail},on:{back:t._back,pass:t._pass,unpass:t._unpass,revoke:t._revoke}})},staticRenderFns:[]};var l=a("C7Lr")(n,c,!1,function(t){a("Rl7m")},null,null);e.default=l.exports}});