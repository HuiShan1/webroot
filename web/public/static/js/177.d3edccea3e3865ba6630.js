webpackJsonp([177],{"0YwO":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("C331"),a={props:{data:{default:null}},data:function(){return{pageOptions:{colleges:[],grade:[],studentType:[]},columns:[]}},methods:{_getPageOptions:function(){var t=this;Object(i.e)({url:"/api/student/manage/getSelectOptions?",type:"get",data:{type:"school"},success:function(e){e.state?e.data&&(t.pageOptions=e.data,t._initColumns()):t.$toast(e.message)}})},_initColumns:function(){this.columns=[{id:"studentId",title:"学工号",width:120,hidden:!1,className:"text-left",search:{type:"input"}},{id:"name",title:"姓名",width:100,hidden:!1,className:"text-left",search:{type:"input"}},{id:"grade",title:"年级",width:100,hidden:!1,className:"text-left",search:{type:"select",data:{options:this.pageOptions.grade,optionsLabel:"text",optionsValue:"id"}}},{id:"college",title:"学院",width:150,hidden:!1,className:"text-left",search:{type:"select",data:{options:this.pageOptions.colleges,optionsLabel:"text",optionsValue:"id"}}},{id:"type",title:"学生类别",width:120,hidden:!1,className:"text-left",search:{type:"select",data:{options:this.pageOptions.studentType,optionsLabel:"text",optionsValue:"id"}},formatter:function(t,e){return t.studentType}},{id:"instructor",title:"辅导员",width:150,hidden:!1,hover:!1,className:"text-left",formatter:function(t,e){return t.instructor?'<span title="'+t.instructorNo+'">'+t.instructor+"</span>":""}},{id:"opt",title:"操作",width:60,hidden:!1,className:"text-left",options:[{tag:"a",text:"查看",callback:function(t,e){window.open("/sc/report?userId="+t.userId)}}]}]}},created:function(){this._getPageOptions()}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mark-list-page container-fluid"},[e("div",{staticClass:"row"},[e("v-table",{attrs:{title:"成绩单列表",url:"/table-data/student/manage/secondClass",columns:this.columns,pagesize:"10",idField:"id",order:!0,search:!0}})],1)])},staticRenderFns:[]};var o=s("C7Lr")(a,n,!1,function(t){s("v2iZ")},null,null);e.default=o.exports},v2iZ:function(t,e){}});