webpackJsonp([101],{"+xpI":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("IvJb");var s=a("C331"),n={data:function(){return{url:"/table-data/pwps/units/page",timeStamp:"",columns:[],importEmploymentUnit:!1,importParams:{parentPageTitle:"用工单位管理",downloadTemplateUrl:"/pwps/units/batch/template",downloadErrorTemplateUrl:"/pwps/units/batch/update/error",checkTemplateUrl:"/pwps/units/batch/excel",templateName:"批量新增用工单位",importBtnType:null},modalType:"",showAddModal:!1,levelData:[],employmentUnit:{id:"",name:"",level:"SCHOOL",managerUsers:[],masterUsers:[],collegeCode:""},manager:{name:"",userNo:"",userId:"",errorMessage:"",isCheckUserId:!1},principal:{name:"",userNo:"",userId:"",errorMessage:"",isCheckUserId:!1},collegeData:[],isEdit:!1,forbidReClick:!1,lang:"zh-cn"}},computed:{translate:function(){return Object(s.e)(this.lang).employmentUnitManage}},created:function(){var e=this,t=localStorage.getItem("lang");Object(s.e)(t)&&(this.lang=t),this.levelData=[{id:"SCHOOL",text:"校级"},{id:"COLLEGE",text:"院级"}],this.importParams.importBtnType=[{url:"/pwps/units/batch/update",method:"post",isShowBtn:!0,name:this.translate.importBtnName,success:function(t){t.state&&(e._refreshTable(),e.importEmploymentUnit=!1)}}],Object(s.c)({url:"/api/colleges",type:"GET",success:function(t){t.state?e.collegeData=t.data:e.$toast(t.message)}}),this.columns=[{id:"name",title:this.translate.unitName,className:"text-left",width:150,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!0}}},{id:"level",title:this.translate.level,className:"text-left",width:120,hidden:!1,search:{type:"select",data:{options:this.levelData,optionsLabel:"text",optionsValue:"id"}},formatter:function(e){return"SCHOOL"===e.level?"校级":"院级"}},{id:"collegeCode",title:"学院",className:"text-left",width:100,hidden:!1,search:{type:"select",data:{url:"/api/colleges",optionsLabel:"name",optionsValue:"code"}},formatter:function(e){return e.collegeName}},{id:"masters",title:"用工单位经办人",className:"text-left",width:150,hidden:!1,formatter:function(e){if(!e.masterUsers)return"";var t="";return e.masterUsers.forEach(function(e){t+="<span title="+e.userNo+">"+e.name+"</span>,"}),t.substring(0,t.length-1)}},{id:"managers",title:"用工单位负责人",className:"text-left",width:120,hidden:!1,formatter:function(e){if(!e.managerUsers)return"";var t="";return e.managerUsers.forEach(function(e){t+="<span title="+e.userNo+">"+e.name+"</span>,"}),t.substring(0,t.length-1)}},{id:"opt",title:this.translate.opt,className:"text-center",width:130,hidden:!1,formatter:function(t){return[{tag:"a",text:e.translate.edit,className:"opt-btn",callback:function(t,a){e.modalType=e.translate.edit,e.showAddModal=!0,e.isEdit=!0,e.employmentUnit={id:t.id,name:t.name,level:t.level,managerUsers:t.managerUsers,masterUsers:t.masterUsers,collegeCode:t.collegeCode},e.manager={name:"",userNo:"",userId:"",errorMessage:"",isCheckUserId:!1},e.principal={name:"",userNo:"",userId:"",errorMessage:"",isCheckUserId:!1}}},{tag:"a",text:t.isForbidden?"启用":"禁用",className:"opt-btn",callback:function(t,a){t.isForbidden?Object(s.c)({url:"/api/pwps/units/forbidden/relieve/"+t.id,type:"put",success:function(t){t.state?(e._refreshTable(),e.$toast("启用成功！")):e.$toast(t.message)}}):window.confirm("确定要禁用此单位吗？禁用后此单位将无法提交岗位申报")&&Object(s.c)({url:"/api/pwps/units/forbidden/"+t.id,type:"put",success:function(t){t.state?(e._refreshTable(),e.$toast("禁用成功！")):e.$toast(t.message)}})}}]}}]},methods:{showAddEmploymentUnitModal:function(){this.showAddModal=!0,this.modalType=this.translate.newAdd,this.isEdit=!1,this.forbidReClick=!1,this.employmentUnit={id:"",name:"",level:"SCHOOL",managerUsers:[],masterUsers:[],collegeCode:""},this.manager={name:"",userNo:"",userId:"",errorMessage:"",isCheckUserId:!1},this.principal={name:"",userNo:"",userId:"",errorMessage:"",isCheckUserId:!1}},changeRole:function(){this.modalType===this.translate.newAdd?this._addEmploymentUnit():this.modalType===this.translate.edit&&this._editEmploymentUnit()},_addEmploymentUnit:function(){var e=this;this.employmentUnit.name?"COLLEGE"!==this.employmentUnit.level||this.employmentUnit.collegeCode?this.forbidReClick||(this.forbidReClick=!0,Object(s.c)({url:"/api/pwps/units",type:"post",data:this.employmentUnit,success:function(t){t.state?(e.showAddModal=!1,e._refreshTable(),e.$toast("添加成功！"),e.forbidReClick=!1):e.$toast(t.message)}})):this.$toast("请选择学院"):this.$toast(this.translate.unitNameNoExistedTip)},_editEmploymentUnit:function(){var e=this;this.employmentUnit.name?"COLLEGE"!==this.employmentUnit.level||this.employmentUnit.collegeCode?Object(s.c)({url:"/api/pwps/units",type:"put",data:this.employmentUnit,success:function(t){t.state?(e.showAddModal=!1,e._refreshTable(),e.$toast("保存成功！")):e.$toast(t.message)}}):this.$toast("请选择学院"):this.$toast(this.translate.unitNameNoExistedTip)},checkUser:function(e,t){var a=this;t?Object(s.c)({url:"/api/users/"+t,type:"GET",success:function(t){t.state?"manager"===e?(a.manager.userId=t.data.userId,a.manager.name=t.data.name,a.manager.errorMessage="",a.manager.isCheckUserId=!0):(a.principal.userId=t.data.userId,a.principal.name=t.data.name,a.principal.errorMessage="",a.principal.isCheckUserId=!0):"manager"===e?(a.manager.isCheckUserId=!1,a.manager.errorMessage=a.translate.userNoExistedTip):(a.principal.isCheckUserId=!1,a.principal.errorMessage=a.translate.userNoExistedTip)}}):"manager"===e?this.manager.errorMessage=this.translate.checkManagerUserIdTip:this.principal.errorMessage=this.translate.checkPrincipalUserIdTip},addNewUser:function(e){var t=this;if("manager"===e){if(!this.manager.isCheckUserId)return void(this.manager.errorMessage=this.translate.addUserTip);var a=!1;this.employmentUnit.managerUsers.length>0&&this.employmentUnit.managerUsers.forEach(function(e,s){if(e.userId===t.manager.userId)return a=!0,void t.$toast(t.translate.userEistedTip);a=!1}),a||this.employmentUnit.managerUsers.push({userId:this.manager.userId,name:this.manager.name})}else{if(!this.principal.isCheckUserId)return void(this.principal.errorMessage=this.translate.addUserTip);a=!1;this.employmentUnit.masterUsers.length>0&&this.employmentUnit.masterUsers.forEach(function(e,s){if(e.userId===t.principal.userId)return a=!0,void t.$toast(t.translate.userEistedTip);a=!1}),a||this.employmentUnit.masterUsers.push({userId:this.principal.userId,name:this.principal.name})}},removeUser:function(e,t){var a=this;"manager"===e?this.employmentUnit.managerUsers.forEach(function(e,s){e.userId===t&&a.employmentUnit.managerUsers.splice(s,1)}):this.employmentUnit.masterUsers.forEach(function(e,s){e.userId===t&&a.employmentUnit.masterUsers.splice(s,1)})},collegeSelected:function(e){this.employmentUnit.collegeCode=e.value},_refreshTable:function(){this.timeStamp=Object(s.a)()}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.importEmploymentUnit?a("v-import",e._b({on:{backParentPage:function(t){e.importEmploymentUnit=!1}}},"v-import",e.importParams,!1)):a("div",{staticClass:"container-fluid",attrs:{id:"employment-unit-manage"}},[a("div",{staticClass:"row text-center"},[a("v-table",{attrs:{title:e.translate.tableName,url:e.url+"?timeStamp="+e.timeStamp,pagesize:"10",idField:"id",columns:e.columns,multiple:!1,order:!0,search:!1}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn add clearBtnBorder",attrs:{type:"button"},on:{click:function(t){e.importEmploymentUnit=!0}}},[e._v(e._s(e.translate.batch)+e._s(e.translate.newAdd)+e._s(e.translate.employmentUnit))]),e._v(" "),a("button",{staticClass:"btn add clearBtnBorder",attrs:{type:"button"},on:{click:e.showAddEmploymentUnitModal}},[e._v(e._s(e.translate.newAdd)+e._s(e.translate.employmentUnit))])])])],1),e._v(" "),a("v-modal",{attrs:{show:e.showAddModal,effect:"fade",width:"446"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v("\n          "+e._s(e.modalType)+e._s(e.translate.employmentUnit)+"\n      ")])]),e._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label unit-name-label"},[e._v(e._s(e.translate.unitName))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employmentUnit.name,expression:"employmentUnit.name"}],staticClass:"form-control search-input modal-form-style",attrs:{type:"text",placeholder:e.translate.checkUserTip},domProps:{value:e.employmentUnit.name},on:{input:function(t){t.target.composing||e.$set(e.employmentUnit,"name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-group level-group"},[a("label",{staticClass:"level-text"},[e._v(e._s(e.translate.level))]),e._v(" "),a("div",{staticClass:"radio-area"},e._l(e.levelData,function(t,s){return a("div",{key:s},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employmentUnit.level,expression:"employmentUnit.level"}],attrs:{type:"radio",id:"col.id",disabled:!!e.isEdit},domProps:{value:t.id,checked:e._q(e.employmentUnit.level,t.id)},on:{change:function(a){e.$set(e.employmentUnit,"level",t.id)}}}),e._v(" "),a("label",{attrs:{for:"col.id"}},[e._v(e._s(t.text))])])}))]),e._v(" "),"COLLEGE"===e.employmentUnit.level?a("div",{staticClass:"form-group"},[a("label",{staticClass:"college-text"},[e._v("学院")]),e._v(" "),a("v-select",{staticClass:"btn-block search-select",attrs:{disabled:!!e.isEdit,value:e.employmentUnit.collegeCode,options:e.collegeData,"options-value":"code","options-label":"name",search:"","close-on-select":""},on:{afterSelected:e.collegeSelected}})],1):e._e(),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label"},[e._v("经办人"+e._s(e.translate.userId))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.principal.userNo,expression:"principal.userNo"}],staticClass:"form-control search-input modal-form-style",attrs:{id:"user-no",type:"text"},domProps:{value:e.principal.userNo},on:{change:function(t){e.checkUser("principal",e.principal.userNo)},input:function(t){t.target.composing||e.$set(e.principal,"userNo",t.target.value)}}}),e._v(" "),a("button",{staticClass:"btn check-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(t){e.checkUser("principal",e.principal.userNo)}}},[e._v(e._s(e.translate.check))]),e._v(" "),a("p",{staticClass:"error-message"},[e._v(e._s(e.principal.errorMessage))])]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label"},[e._v("经办人"+e._s(e.translate.userName))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.principal.name,expression:"principal.name"}],staticClass:"form-control search-input modal-form-style",attrs:{type:"text",disabled:"disabled"},domProps:{value:e.principal.name},on:{input:function(t){t.target.composing||e.$set(e.principal,"name",t.target.value)}}}),e._v(" "),a("button",{staticClass:"btn check-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(t){e.addNewUser("principal")}}},[e._v(e._s(e.translate.add))])]),e._v(" "),a("div",{staticClass:"user-list"},e._l(e.employmentUnit.masterUsers,function(t,s){return a("p",{key:s},[a("span",{staticClass:"user-name"},[e._v(e._s(t.name))]),e._v(" "),a("i",{staticClass:"maticon pull-right remove-icon",domProps:{innerHTML:e._s(e.icons("cancel"))},on:{click:function(a){e.removeUser("principal",t.userId)}}},[e._v("cancel")])])})),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label"},[e._v(e._s(e.translate.principal)+e._s(e.translate.userId))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.manager.userNo,expression:"manager.userNo"}],staticClass:"form-control search-input modal-form-style",attrs:{id:"user-no",type:"text"},domProps:{value:e.manager.userNo},on:{change:function(t){e.checkUser("manager",e.manager.userNo)},input:function(t){t.target.composing||e.$set(e.manager,"userNo",t.target.value)}}}),e._v(" "),a("button",{staticClass:"btn check-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(t){e.checkUser("manager",e.manager.userNo)}}},[e._v(e._s(e.translate.check))]),e._v(" "),a("p",{staticClass:"error-message"},[e._v(e._s(e.manager.errorMessage))])]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label"},[e._v(e._s(e.translate.principal)+e._s(e.translate.userName))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.manager.name,expression:"manager.name"}],staticClass:"form-control search-input modal-form-style",attrs:{type:"text",disabled:"disabled"},domProps:{value:e.manager.name},on:{input:function(t){t.target.composing||e.$set(e.manager,"name",t.target.value)}}}),e._v(" "),a("button",{staticClass:"btn check-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(t){e.addNewUser("manager")}}},[e._v(e._s(e.translate.add))])]),e._v(" "),a("div",{staticClass:"user-list"},e._l(e.employmentUnit.managerUsers,function(t,s){return a("p",{key:s},[a("span",{staticClass:"user-name"},[e._v(e._s(t.name))]),e._v(" "),a("i",{staticClass:"maticon pull-right remove-icon",domProps:{innerHTML:e._s(e.icons("cancel"))},on:{click:function(a){e.removeUser("manager",t.userId)}}},[e._v("cancel")])])}))]),e._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(t){e.showAddModal=!1}}},[e._v(e._s(e.translate.cancel))]),e._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:e.changeRole}},[e._v(e._s(e.translate.confirm))])])])],1)},staticRenderFns:[]};var i=a("C7Lr")(n,r,!1,function(e){a("daPA")},null,null);t.default=i.exports},daPA:function(e,t){}});