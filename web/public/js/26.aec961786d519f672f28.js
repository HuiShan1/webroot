webpackJsonp([26],{"/gAo":function(t,e){},LzZJ:function(t,e,a){"use strict";var i=a("3SZ7"),o=a.n(i),s=a("C331"),n=a("y0ro"),r=(n.a,{mixins:[n.a],data:function(){return{memberUrl:"/table-data/sc/organizations/"+this.selectItem.organizationId+"/members",memberColumns:[],timestamp:"?timestamp=",memberUserNo:"",memberAddColumns:[],orgDepartmentList:[],memberAddList:[],positionList:[],orgDepartmentId:"",selectOrgDepartment:{},selectPosition:{},positionId:"",isEdit:!1,showAddMemberModal:!1,lang:"zh-cn",beginTime:"",checkRows:[],endTime:""}},props:{selectItem:{default:{}},orgM:{default:!1}},created:function(){var t=this,e=localStorage.getItem("lang"),a=this;this.getCollegeList(),this.memberAddColumns=[{id:"name",title:"职务+部门",className:"text-left",formatter:function(t){return t.selectOrgDepartment.text+t.selectPosition.text}},{id:"beginTime",title:"任职开始时间",className:"text-left"},{id:"endTime",title:"任职结束时间",className:"text-left"},{id:"opt",title:this.translate.opt,className:"text-center",width:"230px",hidden:!1,formatter:function(t){return[{tag:"a",text:"移除",className:"opt-btn",callback:function(t,e){a.memberAddList.splice(e,1)}}]}}],Object(s.f)(e)&&(this.lang=e),this.importParams={parentPageTitle:"",downloadTemplateUrl:"/sc/organizations/"+this.selectItem.organizationId+"/members/batch/import/template",downloadErrorTemplateUrl:"/sc/organizations/"+this.selectItem.organizationId+"/members/batch/import/error",checkTemplateUrl:"/sc/organizations/"+this.selectItem.organizationId+"/members/batch/import/check",templateName:"批量导入模板",importBtnType:[{url:"/sc/organizations/"+this.selectItem.organizationId+"/members/batch/import",method:"post",isShowBtn:!0,name:"增量导入",success:function(e){t.timestamp="?timestamp="+(new Date).getTime(),t.curRoute="allStaff"}}]}},methods:{afterChecked:function(t){this.checkRows=t},editMember:function(t){var e=this;console.log("record",t);var a="api/sc/organizations/"+t.organizationMemberId+"/update/information";Object(s.c)(a).then(function(a){a.state?(e.showAddMemberModal=!0,e.isEdit=!0,e.memberUserNo=t.userNo,e.organizationMemberId=t.organizationMemberId,e.orgDepartmentId="",e.positionId="",e.memberAddList=[],a.data.forEach(function(t){e.memberAddList.push({selectPosition:{text:t.titleName,id:t.titleId},selectOrgDepartment:e.getSelect(t.departmentId,"orgDepartmentList"),memberUserNo:e.memberUserNo,beginTime:t.fromDate,endTime:t.toDate})})):e.$toast(a.message)})},deleteMember:function(t){var e=this,a="api/sc/organizations/"+t.organizationId+"/members/"+t.userId;Object(s.c)(a,"","delete").then(function(t){t.state?e.timestamp="?timestamp="+(new Date).getTime():e.$toast(t.message)})},addMember:function(){this.memberUserNo?this.beginTime?this.endTime?this.beginTime>this.endTime?this.$toast("结束时间必须大于开始时间!"):(this.memberAddList.push({selectPosition:this.getSelect(this.positionId,"positionList"),selectOrgDepartment:this.getSelect(this.orgDepartmentId,"orgDepartmentList"),memberUserNo:this.memberUserNo,beginTime:this.beginTime,endTime:this.endTime}),console.log("memberAddList",JSON.parse(o()(this.memberAddList)))):this.$toast("请选择结束时间!"):this.$toast("请选择开始时间!"):this.$toast("请输入学号或者姓名!")},getSelect:function(t,e){for(var a in this[e])if(this[e][a].id==t)return this[e][a];return{text:"",id:""}},_changeDepartmentId:function(){this.getPositionList()},initTable:function(){var t=this;this.memberColumns=[{id:"name",title:this.translate.studentName,className:"text-left",hidden:!1,search:{type:"input",data:{placeholder:""}}},{id:"userNo",title:this.translate.userNo,className:"text-left",hidden:!1,search:{type:"input",data:{placeholder:""}}},{id:"collegeCode",title:this.translate.college,className:"text-left",hidden:!1,search:{type:"select",data:{optionsLabel:"name",optionsValue:"code",options:t.collegeList}},formatter:function(t){return t.collegeName}},{id:"departmentId",title:"部门",className:"text-left",hidden:!1,search:{type:"select",data:{optionsLabel:"text",optionsValue:"id",options:t.orgDepartmentList,change:function(e){t.getPositionList(e.value)}}},formatter:function(t){return t.departmentName}},{id:"titleId",title:"职务",className:"text-left",hidden:!1,search:{type:"select",data:{optionsLabel:"text",optionsValue:"id",options:t.positionList}},formatter:function(t){return t.titleName}},{id:"opt",title:this.translate.opt,className:"text-center",width:"230px",hidden:!1,formatter:function(e){if(t.selectItem.isInstructor)return[{tag:"a",text:t.translate.edit,className:"opt-btn",callback:function(e,a){t.editMember(e)}},{tag:"a",text:t.translate.delete,className:"opt-btn",callback:function(e,a){confirm(t.translate.memberRemoveConfirmTip)&&t.deleteMember(e)}}]}}]},getOrgDepartmentList:function(){var t=this,e="api/sc/orgDepartment/options/allOrgDepartment/"+this.selectItem.organizationId;Object(s.c)(e).then(function(e){e.state&&(t.orgDepartmentList=e.data,t.initTable())})},getPositionList:function(t){var e=this,a="";a=t?"api/sc/organizationTitle/selectOptions/"+this.selectItem.organizationId+"/"+t:"api/sc/organizationTitle/selectOptions/"+this.selectItem.organizationId+"/"+this.orgDepartmentId,Object(s.c)(a).then(function(a){a.state&&(e.positionList=a.data,t&&e.initTable())})},getCollegeList:function(){var t=this;Object(s.c)("/api/colleges").then(function(e){e.state&&(t.collegeList=e.data,t.getOrgDepartmentList())})},_backParentPage:function(){this.$parent.showMember=!1,this.$parent.pageSign="organizationList"},_checkMemberUserNo:function(){var t=this;if(this.isEdit){var e="/api/sc/organizations/"+this.organizationMemberId+"/update/members",a={};return a.organizationMemberUpdateVO=this.memberAddList.map(function(t){return{fromDate:t.beginTime,toDate:t.endTime,titleId:t.selectPosition.id?t.selectPosition.id:""}}),void Object(s.c)(e,a.organizationMemberUpdateVO,"put").then(function(e){e.state&&(t.$toast("编辑成功"),t.showAddMemberModal=!1,t.timestamp="?timestamp="+(new Date).getTime())})}if(!this.memberUserNo)return this.$toast(this.translate.userNoExistedTip),!1;var i="api/users/check/searchResults?keyword="+this.memberUserNo;Object(s.c)(i).then(function(e){if(e.state&&e.data.length){t.userId=e.data[0].userId;var a="/api/sc/organizations/"+t.selectItem.organizationId+"/members",i={userId:t.userId};i.organizationDuties=t.memberAddList.map(function(t){return{fromDate:t.beginTime,toDate:t.endTime,titleId:t.selectPosition.id?t.selectPosition.id:""}}),Object(s.c)(a,i).then(function(e){e.state?(t.$toast("新增成功"),t.showAddMemberModal=!1,t.timestamp="?timestamp="+(new Date).getTime()):t.$toast(e.message)})}else"50003"===e.code||"10001"===e.code||"50001"===e.code?t.$toast("学号不存在"):t.$toast(e.message)})},_showAddMemberModal:function(){this.showAddMemberModal=!0,this.isEdit=!1,this.memberAddList=[],this.memberUserNo=""},_batchDeletePosition:function(){var t=this;if(confirm("确认移除选中成员的职务?")){var e="?organizationMemberId=";console.log(this.checkRows);this.checkRows.map(function(a,i){return i==t.checkRows.length-1?e+=a.organizationMemberId:e+=a.organizationMemberId+",",a.organizationMemberId});var a="api/sc/organizations/"+this.selectItem.organizationId+"/members/duty"+e;Object(s.c)(a,"","delete").then(function(e){e.state?t.timestamp="?timestamp="+(new Date).getTime():t.$toast(e.message)})}},_batchDeleteMember:function(){var t=this;if(confirm("确认移除选中成员?")){var e="?userId=",a=(this.checkRows.map(function(a,i){return i==t.checkRows.length-1?e+=a.userId:e+=a.userId+",",a.userId}),"api/sc/organizations/"+this.selectItem.organizationId+"/members/all"+e);Object(s.c)(a,"","delete").then(function(e){e.state?t.timestamp="?timestamp="+(new Date).getTime():t.$toast(e.message)})}}},computed:{translate:function(){return Object(s.f)(this.lang).organizationManage}}}),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row member"},[a("div",{staticClass:"back-parent-page"},[a("button",{staticClass:"btn back-btn clearBtnBorder box_flex align_center",attrs:{type:"button"},on:{click:t._backParentPage}},[a("i",{staticClass:"maticon back-icon-btn",domProps:{innerHTML:t._s(t.icons("arrow_back"))}},[t._v("arrow_back")]),t._v(" "),a("span",{staticClass:"nav-title"},[t._v(t._s(t.selectItem.parentPageTitle))])])]),t._v(" "),a("v-table",{ref:"memberTable",attrs:{title:t.memberTitle,url:t.memberUrl+t.timestamp,pagesize:"10",idField:"id",columns:t.memberColumns,multiple:t.selectItem.isInstructor,order:!0,search:!1},on:{afterChecked:t.afterChecked}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[t.checkRows.length?a("button",{staticClass:"btn batch-add-btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:t._batchDeletePosition}},[t._v(t._s(t.translate.batch)+t._s(t.translate.delete)+"职务")]):t._e(),t._v(" "),t.checkRows.length?a("button",{staticClass:"btn batch-add-btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:t._batchDeleteMember}},[t._v(t._s(t.translate.batch)+t._s(t.translate.delete)+t._s(t.translate.member))]):t._e(),t._v(" "),t.selectItem.isInstructor||t.orgM?a("button",{staticClass:"btn batch-add-btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:t.quickAddRecord}},[t._v(t._s(t.translate.batch)+t._s(t.translate.add)+t._s(t.translate.member))]):t._e(),t._v(" "),t.selectItem.isInstructor||t.orgM?a("button",{staticClass:"btn add-organization btn-bgColor-style clearBtnBorder box_flex align_center",attrs:{type:"button"},on:{click:t._showAddMemberModal}},[a("i",{staticClass:"maticon pull-left",staticStyle:{"font-size":"20px"},domProps:{innerHTML:t._s(t.icons("add"))}},[t._v("add")]),t._v("\n        "+t._s(t.translate.add)+t._s(t.translate.member)+"\n      ")]):t._e()])]),t._v(" "),a("v-modal",{staticClass:"organization-modal",attrs:{show:t.showAddMemberModal,effect:"fade",width:"746"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[t.isEdit?t._e():a("h5",{staticClass:"modal-title"},[t._v(t._s(t.translate.add)+t._s(t.translate.member))]),t._v(" "),t.isEdit?a("h5",{staticClass:"modal-title"},[t._v(t._s(t.translate.edit)+t._s(t.translate.member))]):t._e()]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-wrap box_flex align_center"},[a("div",{staticClass:"form-group box_flex align_center"},[a("div",{staticClass:"label"},[t._v("成员:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.memberUserNo,expression:"memberUserNo"}],staticClass:"form-control search-input organization-input",attrs:{type:"text",disabled:t.isEdit,placeholder:"请输入学号或者姓名"},domProps:{value:t.memberUserNo},on:{input:function(e){e.target.composing||(t.memberUserNo=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group box_flex align_center"},[a("div",{staticClass:"label"},[t._v("组织部门:")]),t._v(" "),a("v-select",{attrs:{options:t.orgDepartmentList,"options-value":"id","options-label":"text","close-on-select":"",justify:""},on:{afterSelected:t._changeDepartmentId},model:{value:t.orgDepartmentId,callback:function(e){t.orgDepartmentId=e},expression:"orgDepartmentId"}})],1),t._v(" "),a("div",{staticClass:"form-group box_flex align_center"},[a("div",{staticClass:"label"},[t._v("部门职务:")]),t._v(" "),a("v-select",{attrs:{options:t.positionList,"options-value":"id","options-label":"text","close-on-select":"",justify:""},model:{value:t.positionId,callback:function(e){t.positionId=e},expression:"positionId"}})],1),t._v(" "),a("div",{staticClass:"form-group box_flex align_center"},[a("div",{staticClass:"label"},[t._v("任职开始时间:")]),t._v(" "),a("v-datepicker",{model:{value:t.beginTime,callback:function(e){t.beginTime=e},expression:"beginTime"}})],1),t._v(" "),a("div",{staticClass:"form-group box_flex align_center"},[a("div",{staticClass:"label"},[t._v("任职结束时间:")]),t._v(" "),a("v-datepicker",{model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}})],1),t._v(" "),a("div",{staticClass:"form-group box_flex align_center"},[a("button",{staticClass:"btn submit-btn",on:{click:t.addMember}},[t._v("新增")])])]),t._v(" "),a("v-table",{attrs:{rows:t.memberAddList,order:"true",columns:t.memberAddColumns}})],1),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.showAddMemberModal=!1}}},[t._v(t._s(t.translate.cancel))]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._checkMemberUserNo}},[t._v(t._s(t.translate.confirm))])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"importPage"===t.curRoute,expression:"curRoute === 'importPage'"}],staticClass:"importPageClass"},[a("v-import",t._b({on:{backParentPage:function(e){t.curRoute="allStaff"}}},"v-import",t.importParams,!1))],1)],1)},staticRenderFns:[]};var c=a("Mz/3")(r,l,!1,function(t){a("/gAo")},"data-v-2bce6248",null);e.a=c.exports},bIAg:function(t,e){},fBt1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("wHeh");var i=a("C331"),o=a("LzZJ"),s=a("u88R"),n=(o.a,s.a,{props:{data:{default:null}},created:function(){var t=this,e=localStorage.getItem("lang"),a=this;Object(i.f)(e)&&(this.lang=e),this.organizationType=this.data.data.id,"college"===this.organizationType?(this.listTitle="",this.importParams.parentPageTitle=this.translate.collegeTitle,this.newOrganizationType="COLLEGE",Object(i.d)({url:"/api/currentUser/role/manageColleges?roleId=22",dataType:"json",type:"get",success:function(e){e.state?e.data.length>0&&(t.collegeOptions=e.data,t.defaultCode=e.data[0].code,t.collegeName=e.data[0].name):t.$toast(e.message)}})):(this.listTitle="",this.importParams.parentPageTitle=this.translate.schoolTitle,this.newOrganizationType="SCHOOL"),this.listColumns=[{id:"name",title:this.translate.name,className:"text-left",hidden:!1,search:{type:"input",data:{placeholder:""}}},{id:"department",title:"所属部门",className:"text-left",hidden:!0,formatter:function(t){return t.department?t.department.name:""}},{id:"instructorName",title:this.translate.instructor,className:"text-left",hidden:!1},{id:"opt",title:this.translate.opt,className:"text-center",width:"230px",hidden:!1,formatter:function(t){return[{tag:"a",text:a.translate.organization+a.translate.member,className:"opt-btn",callback:function(t,e){a.pageSign="member",a.selectItem={organizationId:t.id,parentPageTitle:t.name}}},{tag:"a",text:"组织部门",className:"opt-btn",callback:function(t,e){a.$parent.addBread({title:"组织部门管理",data:{organizationId:t.id},reflash:!0,route:"/activityManage/orgDepartmentManage"})}},{tag:"a",text:a.translate.position,className:"opt-btn",callback:function(t,e){a.pageSign="position",a.selectItem={organizationId:t.id,parentPageTitle:t.name}}},{tag:"a",text:a.translate.edit,className:"opt-btn",callback:function(t,e){a.showAddOrganizationModal=!0,a.listModalType=a.translate.edit,a.organization={orgName:t.name,userNo:t.instructorNo,departmentId:t.department?t.department.id:""},a.organizationId=t.id}},{tag:"a",text:t.enable?a.translate.dsable:a.translate.enable,className:"opt-btn",callback:function(e,o){Object(i.d)({url:"/api/sc/organizations/"+e.id+"/availability",dataType:"json",type:"put",data:{enable:!t.enable},success:function(t){t.state?(a.$toast(a.translate.optTips),a.timestamp=(new Date).getTime()):a.$toast(t.message)}})}}]}}],"school"===this.organizationType&&(this.listColumns[1].hidden=!1),this.getDepartmentList()},data:function(){return{listColumns:[],selectItem:{},showMember:!1,departmentList:[],selectDepartment:"",positionBaseUrl:"",organizationType:"",newOrganizationType:"",listTitle:"",isImportPage:!1,collegeOptions:[],defaultCode:"",collegeName:"",timestamp:"",positionName:"",positionUserId:"",orgDepartmentId:"",orgDepartmentList:[],positionId:null,showAddOrganizationModal:!1,listModalType:"",organization:{orgName:"",userNo:"",departmentId:""},organizationId:null,memberUserNo:null,memberUserId:null,importBtnType:[],checkTemplateUrl:"",importParams:{parentPageTitle:"",downloadTemplateUrl:"",downloadErrorTemplateUrl:"",checkTemplateUrl:"",templateName:"",importBtnType:null},importDutyParams:{show:!1,parentPageTitle:"",downloadTemplateUrl:"",downloadErrorTemplateUrl:"",checkTemplateUrl:"",templateName:"",importBtnType:null},pageSign:"organizationList",parentPageTitle:"",lang:"zh-cn"}},components:{member:o.a,position:s.a},computed:{translate:function(){return Object(i.f)(this.lang).organizationManage},listUrl:function(){return"college"!==this.organizationType?"/table-data/sc/organizations?type="+this.newOrganizationType+"&timestamp="+this.timestamp:this.defaultCode?"/table-data/sc/organizations?type="+this.newOrganizationType+"&collegeCode="+this.defaultCode+"&timestamp="+this.timestamp:void 0}},methods:{getDepartmentList:function(){var t=this;Object(i.c)("/api/department/options/my").then(function(e){console.log("o",e),e.state&&(t.departmentList=e.data)})},_changeDepartment:function(t){console.log("obj",t)},_changeCollege:function(t){this.defaultCode=t.value,this.collegeName=t.target.selected},_export:function(){var t=this,e=this.$refs.organizationTable.tableSearchFields.name?this.$refs.organizationTable.tableSearchFields.name:"";Object(i.d)({url:"/api/sc/organizations/export/key?name="+e+"&type="+this.newOrganizationType+"&collegeCode="+this.defaultCode+"&departmentId="+this.selectDepartment,dataType:"json",type:"get",success:function(e){if(e.state){var a="";a="college"===t.organizationType?t.collegeName+"组织管理列表":"校级组织管理列表",window.location.href="/downloads/sc/organizations/export/excel?key="+e.data.key+"&fileName="+a}else t.$toast(e.message)}})},_batchAdd:function(){var t=this;this.importParams.downloadTemplateUrl="/sc/organizations/import/template/"+this.newOrganizationType,this.importParams.downloadErrorTemplateUrl="/sc/organizations/import/error",this.importParams.templateName="组织批量新增模板.xlsx",this.importParams.importBtnType=[{name:this.translate.incrementImport,url:"/sc/organizations/import",method:"PUT",isShowBtn:!0,success:function(e){e.state&&(t.timestamp=(new Date).getTime())}}],this.importParams.checkTemplateUrl="/sc/organizations/import/check?type="+this.newOrganizationType+"&collegeCode="+this.defaultCode,this.isImportPage=!0},_showAddOrganizationModal:function(){this.showAddOrganizationModal=!0,this.listModalType=this.translate.add,this.organization={orgName:"",userNo:""}},backToDutyList:function(){this.importDutyParams.show=!1,this.isImportPage=!1},backParentPage:function(){this.isImportPage=!1},_changeOrganization:function(){var t=this;return this.organization.orgName?this.organization.userNo?void Object(i.d)({url:"/api/users/"+this.organization.userNo,dataType:"json",type:"get",success:function(e){e.state?(t.positionUserId=e.data.userId,t.listModalType===t.translate.add?t._addOrganization():t.listModalType===t.translate.edit&&t._editOrganization()):"50003"===e.code||"10001"===e.code||"50001"===e.code?t.$toast("学工号不存在"):t.$toast(e.message)}}):(this.$toast(this.translate.orgInstructorNoTips),!1):(this.$toast(this.translate.orgNameTips),!1)},_addOrganization:function(){var t=this;Object(i.d)({url:"/api/sc/organizations",dataType:"json",type:"post",data:{name:this.organization.orgName,userNo:this.organization.userNo,type:this.newOrganizationType,collegeCode:this.defaultCode,departmentId:this.organization.departmentId},success:function(e){e.state?(t.$toast(t.translate.optTips),t.showAddOrganizationModal=!1,t.timestamp=(new Date).getTime()):"50003"===e.code?t.$toast("组织名称已存在"):t.$toast(e.message)}})},_editOrganization:function(){var t=this;Object(i.d)({url:"/api/sc/organizations/"+this.organizationId,dataType:"json",type:"put",data:{name:this.organization.orgName,userNo:this.organization.userNo,departmentId:this.organization.departmentId},success:function(e){e.state?(t.$toast(t.translate.optTips),t.showAddOrganizationModal=!1,t.timestamp=(new Date).getTime()):"50003"===e.code?t.$toast("组织名称已存在"):t.$toast(e.message)}})},_startTimeSelected:function(t){if(this.$refs.endTime.value){if(new Date(t.value).getTime()-new Date(this.$refs.endTime.value).getTime()>0)return this.$toast("开始时间要在结束时间之前"),this.$refs.startTime.value="",!1;this.$refs.startTime.value=t.value}else this.$refs.startTime.value=t.value},_endTimeSelected:function(t){if(this.$refs.startTime.value){if(new Date(t.value).getTime()-new Date(this.$refs.startTime.value).getTime()<0)return this.$toast("结束时间要在开始时间之后"),this.$refs.endTime.value="",!1;this.$refs.endTime.value=t.value}else this.$refs.endTime.value=t.value}}}),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isImportPage?t.importDutyParams.show?a("v-import",t._b({on:{backParentPage:t.backToDutyList}},"v-import",t.importDutyParams,!1)):a("v-import",t._b({on:{backParentPage:t.backParentPage}},"v-import",t.importParams,!1)):a("div",{staticClass:"container-fluid",attrs:{id:"organization-manage"}},["organizationList"===t.pageSign?a("div",{staticClass:"row text-center"},[t.listUrl?a("v-table",{ref:"organizationTable",attrs:{title:t.listTitle,url:t.listUrl+"&departmentId="+t.selectDepartment,pagesize:"10",idField:"id",columns:t.listColumns,multiple:!1,order:!0,search:!1}},[a("div",{attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},["SCHOOL"===t.newOrganizationType?a("v-select",{attrs:{options:t.departmentList,"options-value":"id","options-label":"text","close-on-select":"",justify:""},on:{afterSelected:t._changeDepartment},model:{value:t.selectDepartment,callback:function(e){t.selectDepartment=e},expression:"selectDepartment"}}):t._e(),t._v(" "),"college"===t.organizationType?a("div",{staticClass:"btn-group pull-left",staticStyle:{"margin-right":"6px"}},[a("v-select",{attrs:{options:t.collegeOptions,value:t.defaultCode,"options-value":"code","options-label":"name","close-on-select":"",justify:""},on:{afterSelected:t._changeCollege}})],1):t._e(),t._v(" "),a("div",{staticClass:"btn-group pull-right"},[a("button",{staticClass:"btn batch-add-btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:t._export}},[t._v(t._s(t.translate.export))]),t._v(" "),a("button",{staticClass:"btn batch-add-btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:t._batchAdd}},[t._v(t._s(t.translate.batchAddOrganization))]),t._v(" "),a("button",{staticClass:"btn add-organization btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:t._showAddOrganizationModal}},[a("i",{staticClass:"maticon pull-left",domProps:{innerHTML:t._s(t.icons("add"))}},[t._v("add")]),t._v("\n            "+t._s(t.translate.add)+t._s(t.translate.organization)+"\n          ")])])],1)]):t._e()],1):"member"===t.pageSign?a("member",{attrs:{selectItem:t.selectItem,orgM:!0}}):a("position",{attrs:{selectItem:t.selectItem}}),t._v(" "),a("v-modal",{staticClass:"organization-modal",attrs:{show:t.showAddOrganizationModal,effect:"fade",width:"446"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.listModalType)+t._s(t.translate.organization))])]),t._v(" "),a("div",{staticClass:"modal-body addOrganizationGroup",attrs:{slot:"modal-body"},slot:"modal-body"},["SCHOOL"===t.newOrganizationType?a("v-select",{attrs:{options:t.departmentList,"options-value":"id","options-label":"text","close-on-select":"",justify:""},on:{afterSelected:t._changeDepartment},model:{value:t.organization.departmentId,callback:function(e){t.$set(t.organization,"departmentId",e)},expression:"organization.departmentId"}}):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.organization.orgName,expression:"organization.orgName"}],staticClass:"form-control search-input organization-input",attrs:{type:"text",placeholder:t.translate.namePlaceholder,maxlength:"50"},domProps:{value:t.organization.orgName},on:{input:function(e){e.target.composing||t.$set(t.organization,"orgName",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.organization.userNo,expression:"organization.userNo"}],staticClass:"form-control search-input organization-input",attrs:{type:"text",placeholder:t.translate.instructorPlaceholder},domProps:{value:t.organization.userNo},on:{input:function(e){e.target.composing||t.$set(t.organization,"userNo",e.target.value)}}})])],1),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.showAddOrganizationModal=!1}}},[t._v(t._s(t.translate.cancel))]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._changeOrganization}},[t._v(t._s(t.translate.confirm))])])])],1)},staticRenderFns:[]};var l=a("Mz/3")(n,r,!1,function(t){a("bIAg")},null,null);e.default=l.exports},u88R:function(t,e,a){"use strict";var i=a("C331"),o=a("y0ro"),s=(o.a,{mixins:[o.a],data:function(){return{positionBaseUrl:"/table-data/sc/organizationTitle/page/"+this.selectItem.organizationId,positionUrl:"/table-data/sc/organizationTitle/page/"+this.selectItem.organizationId,positionColumns:[],lang:"zh-cn",organizationId:this.selectItem.organizationId,positionModalType:"",orgDepartmentList:[],orgDepartmentId:"",positionName:"",showAddPositionModal:!1,timestamp:"?timestamp=''"}},mounted:function(){var t=this;this.getOrgDepartmentList(),this.importParams={parentPageTitle:"",downloadTemplateUrl:"/sc/organizationTitle/BatchImportTitleTemplate",downloadErrorTemplateUrl:"/sc/organizationTitle/excels/errorExcels",checkTemplateUrl:"/sc/organizationTitle/excel/"+this.organizationId,templateName:"批量导入职务模板",importBtnType:[{url:"/sc/organizationTitle/import",method:"post",isShowBtn:!0,name:"增量导入",success:function(e){t.positionUrl=t.positionUrl+"?timestamp="+(new Date).getTime(),t.curRoute="allStaff"}}]}},computed:{translate:function(){return Object(i.f)(this.lang).organizationManage}},methods:{ablePosition:function(t){var e=this,a="api/sc/organizationTitle/forbidden/"+t.titleId;t.isForbidden&&(a="api/sc/organizationTitle/unForbidden/"+t.titleId),Object(i.c)(a,null,"put").then(function(t){console.log("o",t),t.state&&(e.timestamp="?timestamp="+(new Date).getTime())})},_changePosition:function(){var t=this;if(!this.positionName)return this.$toast("职务不能为空"),!1;if(!this.orgDepartmentId)return this.$toast("组织部门不能为空"),!1;var e="/api/sc/organizationTitle",a={titleName:this.positionName,organizationId:this.organizationId,orgDepartmentId:this.orgDepartmentId};this.positionId?(e="/api/sc/organizationTitle/"+this.positionId,Object(i.c)(e,a,"put").then(function(e){e.state&&(t.showAddPositionModal=!1,t.positionUrl=t.positionUrl+"?timestamp="+(new Date).getTime())})):Object(i.c)(e,a).then(function(e){e.state&&(t.showAddPositionModal=!1,t.positionUrl=t.positionUrl+"?timestamp="+(new Date).getTime())})},getOrgDepartmentList:function(){var t=this,e="api/sc/orgDepartment/options/allOrgDepartment/"+this.organizationId,a=this;Object(i.c)(e).then(function(e){e.state&&(t.orgDepartmentList=e.data,t.positionColumns=[{id:"titleName",title:t.translate.position,className:"text-left",hidden:!1,search:{type:"input",data:{placeholder:""}}},{id:"orgDepartmentIds",title:"组织部门",className:"text-left",hidden:!1,search:{type:"multiSelect",data:{options:a.orgDepartmentList,optionsLabel:"text",optionsValue:"id"}},formatter:function(t){return t.orgDepartmentName}},{id:"opt",title:t.translate.opt,className:"text-center",width:"230px",hidden:!1,formatter:function(t){return[{tag:"a",text:a.translate.edit,className:"opt-btn",callback:function(t,e){a.showAddPositionModal=!0,a.positionModalType=a.translate.edit,a.orgDepartmentId=t.orgDepartmentId,a.positionName=t.titleName,a.positionId=t.titleId}},{tag:"a",text:t.isForbidden?"启用":"禁用",className:"opt-btn",callback:function(t,e){a.ablePosition(t)}}]}}])})},_backParentPage:function(){this.$parent.pageSign="organizationList",this.$parent.showPosition=!1},_showAddPositionModal:function(){this.showAddPositionModal=!0,this.positionModalType=this.translate.add,this.orgDepartmentId="",this.positionName=""}},props:{selectItem:{default:{}}}}),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"back-parent-page"},[a("button",{staticClass:"btn back-btn clearBtnBorder box_flex align_center",attrs:{type:"button"},on:{click:t._backParentPage}},[a("i",{staticClass:"maticon back-icon-btn",domProps:{innerHTML:t._s(t.icons("arrow_back"))}},[t._v("arrow_back")]),t._v(" "),a("span",{staticClass:"nav-title"},[t._v(t._s(t.selectItem.parentPageTitle))])])]),t._v(" "),a("v-table",{ref:"positionTable",attrs:{title:t.selectItem.positionTitle,url:t.positionUrl+t.timestamp,pagesize:"10",idField:"id",columns:t.positionColumns,multiple:!1,order:!0,search:!1}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn batch-add-btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:function(e){return t.quickAddRecord()}}},[t._v(t._s(t.translate.batch)+t._s(t.translate.add)+t._s(t.translate.position))]),t._v(" "),a("button",{staticClass:"btn add-organization btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:t._showAddPositionModal}},[a("i",{staticClass:"maticon pull-left",staticStyle:{"font-size":"20px"},domProps:{innerHTML:t._s(t.icons("add"))}},[t._v("add")]),t._v("\n        "+t._s(t.translate.add)+t._s(t.translate.position)+"\n      ")])])]),t._v(" "),a("v-modal",{staticClass:"organization-modal",attrs:{show:t.showAddPositionModal,effect:"fade",width:"446"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.positionModalType)+t._s(t.translate.position)+t._s(t.translate.info))])]),t._v(" "),a("div",{staticClass:"modal-body position-info-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-group"},[a("v-select",{attrs:{options:t.orgDepartmentList,"options-value":"id","options-label":"text","close-on-select":"",justify:""},model:{value:t.orgDepartmentId,callback:function(e){t.orgDepartmentId=e},expression:"orgDepartmentId"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.positionName,expression:"positionName"}],staticClass:"form-control search-input organization-input",attrs:{type:"text",placeholder:t.translate.enter+t.translate.position},domProps:{value:t.positionName},on:{input:function(e){e.target.composing||(t.positionName=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.showAddPositionModal=!1}}},[t._v(t._s(t.translate.cancel))]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._changePosition}},[t._v(t._s(t.translate.confirm))])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"importPage"===t.curRoute,expression:"curRoute === 'importPage'"}],staticClass:"importPageClass"},[a("v-import",t._b({on:{backParentPage:function(e){t.curRoute="allStaff"}}},"v-import",t.importParams,!1))],1)],1)},staticRenderFns:[]},r=a("Mz/3")(s,n,!1,null,null,null);e.a=r.exports}});