webpackJsonp([183],{Jyhk:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("7+uW");var r=s("C331"),a={created:function(){var e=localStorage.getItem("lang"),t=this;Object(r.g)(e)&&(this.lang=e),this.columns=[{id:"name",title:this.translate.roleName,className:"text-left",hidden:!1},{title:this.translate.user,className:"text-left",hidden:!1,hover:!1,formatter:function(e){if(!e.users)return"";var t="";return e.users.forEach(function(e){t+="<span title="+e.userNo+">"+e.name+"</span>,"}),t.substring(0,t.length-1)}},{id:"opt",className:"text-center",width:"130px",title:this.translate.operation,hidden:!1,formatter:function(){return[{tag:"a",text:t.translate.edit,className:"opt-btn",callback:function(e,s){t.userInfoArr.splice(0,t.userInfoArr.length),e.users.forEach(function(e,s){t.userInfoArr.push({userId:e.userId,userName:e.name})}),t.newRoleUser.roleId=e.id,t.newRoleUser.userNo="",t.newRoleUser.name="",t.showUserModal=!0,t.isCheck=!1}}]}}]},data:function(){return{columns:[],url:"/table-data/authorities/systemRoles/pages",showUserModal:!1,newRoleUser:{roleId:0,userId:"",name:"",userNo:""},errorMessage:"",userInfoArr:[],isCheck:!1,lang:"zh-cn"}},computed:{translate:function(){return Object(r.g)(this.lang).systemRoleManage}},methods:{cancelAddUser:function(){this.newRoleUser={roleId:0,userId:"",name:"",userNo:""},this.showUserModal=!1},checkUser:function(){var e=this;this.newRoleUser.userNo?Object(r.e)({url:"/api/users/"+this.newRoleUser.userNo,dataType:"json",data:{},type:"GET",success:function(t){t.state?(e.newRoleUser.userId=t.data.userId,e.newRoleUser.name=t.data.name,e.errorMessage="",e.isCheck=!0):(e.errorMessage=e.translate.userNoExistedTip,e.isCheck=!1)}}):e.errorMessage=this.translate.checkUserTip},addUser:function(){var e=this;Object(r.e)({url:"/api/authorities/systemRoles/"+this.newRoleUser.roleId+"/users",dataType:"json",data:{users:this.userInfoArr},type:"put",success:function(t){t.state?(e.showUserModal=!1,e.url=e.url+"?time="+(new Date).getTime(),e.$toast("提交成功")):e.$toast(t.message)}})},addNewUser:function(){if(!this.isCheck)return this.$toast("请先检测学工号！");this.userInfoArr.push({userId:this.newRoleUser.userId,userName:this.newRoleUser.name})},removeUser:function(e){var t=this;this.userInfoArr.forEach(function(s,r){s.userId===e&&t.userInfoArr.splice(r,1)})}}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container-fluid",attrs:{id:"systemRole-page"}},[s("div",{staticClass:"row text-center"},[s("v-table",{attrs:{title:e.translate.tableTitle,url:e.url,pagesize:"10",idField:"id",order:!0,columns:e.columns}})],1),e._v(" "),s("v-modal",{attrs:{show:e.showUserModal,effect:"fade",width:"420"}},[s("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[s("h5",{staticClass:"modal-title"},[e._v("\n        "+e._s(e.translate.user)+"\n      ")])]),e._v(" "),s("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newRoleUser.roleId,expression:"newRoleUser.roleId"}],attrs:{type:"hidden",id:"role-id"},domProps:{value:e.newRoleUser.roleId},on:{input:function(t){t.target.composing||e.$set(e.newRoleUser,"roleId",t.target.value)}}}),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"input-label"},[e._v(e._s(e.translate.userNo))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newRoleUser.userNo,expression:"newRoleUser.userNo"}],staticClass:"form-control search-input modal-form-style",attrs:{id:"user-no",type:"text",placeholder:e.translate.checkUserTip},domProps:{value:e.newRoleUser.userNo},on:{change:e.checkUser,input:function(t){t.target.composing||e.$set(e.newRoleUser,"userNo",t.target.value)}}}),e._v(" "),s("button",{staticClass:"btn  check-btn clearBtnBorder",attrs:{type:"button"},on:{click:e.checkUser}},[e._v(e._s(e.translate.check))]),e._v(" "),s("p",{staticClass:"error-message"},[e._v(e._s(e.errorMessage))])]),e._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"input-label"},[e._v(e._s(e.translate.username))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newRoleUser.name,expression:"newRoleUser.name"}],staticClass:"form-control name-input modal-form-style",attrs:{type:"text",readonly:"readonly"},domProps:{value:e.newRoleUser.name},on:{input:function(t){t.target.composing||e.$set(e.newRoleUser,"name",t.target.value)}}}),e._v(" "),s("button",{staticClass:"btn check-btn clearBtnBorder",attrs:{type:"button"},on:{click:e.addNewUser}},[e._v(e._s(e.translate.add))])])]),e._v(" "),s("div",{staticClass:"user-list"},e._l(e.userInfoArr,function(t,r){return s("p",{key:r},[s("span",{staticClass:"user-name"},[e._v(e._s(t.userName))]),e._v(" "),s("i",{staticClass:"maticon pull-right remove-icon",domProps:{innerHTML:e._s(e.icons("cancel"))},on:{click:function(s){return e.removeUser(t.userId)}}},[e._v("cancel")])])}),0)]),e._v(" "),s("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:e.cancelAddUser}},[e._v(e._s(e.translate.cancel))]),e._v(" "),s("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:e.addUser}},[e._v(e._s(e.translate.submit))])])])],1)},staticRenderFns:[]};var n=s("VU/8")(a,o,!1,function(e){s("ezCS")},null,null);t.default=n.exports},ezCS:function(e,t){}});