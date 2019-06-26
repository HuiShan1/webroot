webpackJsonp([78],{tkGp:function(t,e){},ww2R:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("C331"),o={data:function(){var t=this;return{createShow:!1,batchYear:"",tableUrl:"/table-data/pwps/positions/page/schoolYears",yearOptions:[],timeStamp:0,columns:[{id:"name",title:"学年",className:"text-left",width:150,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!0}}},{id:"operatorName",title:"操作人",className:"text-left",width:100,hidden:!1,formatter:function(t){return'<span title="'+t.operator.userNo+'">'+t.operator.name+"</span>"}},{id:"publishTime",title:"发布时间",className:"text-center",width:150,hidden:!1},{id:"opt",title:"操作",className:"text-left",width:100,hidden:!1,formatter:function(e){var a=[];return"PUBLISH"!==e.schoolYearStatus&&a.push({tag:"a",text:"发布",className:"opt-btn",callback:function(e,a){t._release("publish",e),t._refreshTable()}}),a.push({tag:"a",text:"删除",className:"opt-btn",callback:function(e,a){t._remove(e,function(e){t.$toast("删除批次成功"),t._refreshTable()})}}),a}}]}},methods:{_refreshTable:function(){this.timeStamp=Object(s.a)()},_release:function(t,e){var a=this;this.batchYear||e?"save"===t?this._save(function(t){a.$toast("保存成功"),a.batchYear="",a.createShow=!1,a._refreshTable()}):"publish"===t&&(e?this._publish(e,function(t){a.$toast("发布成功"),a.createShow=!1,a._refreshTable()}):this._save(function(t){a._publish(t,function(t){a.$toast("发布成功"),a.createShow=!1,a._refreshTable()})})):this.$toast("学年不能为空")},_save:function(t){var e=this;Object(s.d)({url:"/api/pwps/positions/schoolYears",type:"post",data:{name:this.batchYear,schoolYearStatus:"SAVE"},success:function(a){a.state?t&&t(a.data):e.$toast(a.message)}})},_publish:function(t,e){var a=this;Object(s.d)({url:"/api/pwps/positions/schoolYears/publish/"+t.id,type:"put",success:function(t){t.state?e&&e(t.data):a.$toast(t.message)}})},_remove:function(t,e){var a=this;Object(s.d)({url:"/api/pwps/positions/schoolYears/"+t.id,type:"delete",success:function(t){t.state?e&&e(t.data):a.$toast(t.message)}})}},created:function(){var t=(new Date).getFullYear();this.yearOptions=[];for(var e=t-2;e<t+8;e++)this.yearOptions.push({id:e+"-"+(e+1)+"学年",name:e+"-"+(e+1)+"学年"})}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flow-batch-manage"},[a("div",{},[a("v-table",{attrs:{title:"批次管理",url:t.tableUrl+"?timeStamp="+t.timeStamp,pagesize:"10",idField:"id",columns:t.columns,multiple:!1,order:!0,search:!1}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("a",{staticClass:"btn clearBtnBorder ",on:{click:function(e){t.createShow=!0}}},[t._v("新增")])])])],1),t._v(" "),a("v-modal",{attrs:{show:t.createShow,width:"300"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n          新增批次\n      ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("v-select",{attrs:{required:!0,options:t.yearOptions,"options-value":"id","options-label":"name"},model:{value:t.batchYear,callback:function(e){t.batchYear=e},expression:"batchYear"}})],1),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("a",{staticClass:"btn orangered",attrs:{type:"button"},on:{click:function(e){t.createShow=!1}}},[t._v("取消")]),t._v(" "),a("a",{staticClass:"btn green",attrs:{type:"button"},on:{click:function(e){return t._release("publish")}}},[t._v("发布")]),t._v(" "),a("a",{staticClass:"btn blue",attrs:{type:"button"},on:{click:function(e){return t._release("save")}}},[t._v("保存")])])])],1)},staticRenderFns:[]};var r=a("Mz/3")(o,i,!1,function(t){a("tkGp")},null,null);e.default=r.exports}});