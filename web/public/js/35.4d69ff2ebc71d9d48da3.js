webpackJsonp([35],{N7ZW:function(t,e){},rzaH:function(t,e,n){"use strict";(function(t){n("wHeh"),n("C331")}).call(e,n("W14+"))},sNFd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("rzaH");var s=n("zNq3"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"announcement-manage-page"},[t.isEditPage?t._e():n("div",{staticClass:"content text-center"},[n("v-table",{ref:"studentTable",attrs:{url:t.url,method:t.method,pagesize:"10",idField:"id",columns:t.columns,multiple:!1,order:!0,search:!1},on:{rowClick:t._rowClick}},[n("div",{attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},["college"===t.type?n("div",{staticClass:"btn-group college-select pull-left"},[n("v-select",{attrs:{value:t.collegeCode,options:t.collegeOptions,optionsLabel:"name",optionsValue:"code",search:!1},on:{afterSelected:t.changeCollege}})],1):t._e(),t._v(" "),n("div",{staticClass:"btn-group pull-right write-announcement"},[n("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:t._writeAnnouncement}},[n("i",{staticClass:"maticon pull-left",domProps:{innerHTML:t._s(t.icons("create"))}},[t._v("create")]),t._v(t._s(t.translate.writeAnnouncement))])])])])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditPage,expression:"isEditPage"}],staticClass:"eidt-page"},[n("div",{staticClass:"header"},[n("i",{staticClass:"maticon pull-left back-btn",domProps:{innerHTML:t._s(t.icons("arrow_back"))},on:{click:t._backListPage}},[t._v("arrow_back")]),t._v(" "),n("div",{staticClass:"btn-group pull-right"},[n("button",{staticClass:"btn btn-bgColor-style clearBtnBorder draft-btn",attrs:{type:"button"},on:{click:function(e){return t._publishOrdraft(0)}}},[t._v(t._s(t.translate.draft))]),t._v(" "),n("button",{staticClass:"btn btn-bgColor-style clearBtnBorder publish-btn",attrs:{type:"button"},on:{click:function(e){return t._publishOrdraft(1)}}},[t._v(t._s(t.translate.publish))])]),t._v(" "),n("div",{staticClass:"announcement-title"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.translate.titlePlaceholder,maxlength:"30"},domProps:{value:t.title},on:{change:t._titleChange,input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"system-type row"},t._l(t.systemType,function(e,s){return n("span",{key:s,staticClass:"type-span",class:e.isSelected?"active":"",on:{click:function(n){return t._clickSystemType(e)}}},[n("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("done"))}},[t._v("done")]),t._v("\n          "+t._s(e.name)+"\n      ")])}),0),t._v(" "),n("div",[n("u-editor",{ref:"description",attrs:{config:t.editorConfig},on:{change:t._changeAnnouncementContent},model:{value:t.announcementContent,callback:function(e){t.announcementContent=e},expression:"announcementContent"}})],1)])])},staticRenderFns:[]};var i=function(t){n("N7ZW")},c=n("Mz/3")(s.a,a,!1,i,null,null);e.default=c.exports},zNq3:function(t,e,n){"use strict";(function(t){var s=n("wHeh"),a=n("C331");e.a={inject:{windowObj:{default:null}},props:{data:{default:null}},created:function(){var e=this,n=localStorage.getItem("lang"),i=this;Object(a.f)(n)&&(this.lang=n),this.type=this.data.data.id,this.editorConfig.initialFrameHeight=t(document).height()-360,"college"===this.type&&Object(a.d)({url:"/api/announcement/myColleges",dataType:"json",type:"get",success:function(t){t.state?t.data.length>0&&(i.collegeOptions=t.data,i.collegeCode=t.data[0].code):i.$toast(t.message)}}),Object(a.d)({url:"/api/announcement/getPublishTo",dataType:"json",type:"get",success:function(t){t.state?(t.data.forEach(function(t,e){0===e?(s.default.set(t,"isSelected",!0),i.recordSystemId=t.id,i.systemId.push(t.id)):s.default.set(t,"isSelected",!1)}),i.systemType=t.data):i.$toast(t.message)}}),this.columns=[{id:"announcementName",title:this.translate.name,className:"text-left",hidden:!1,search:{type:"input"},formatter:function(t,e){return t.title}},{id:"publishTo",title:this.translate.system,className:"text-left",hidden:!1},{id:"createTime",title:this.translate.publishTime,className:"text-center",hidden:!1},{id:"browser",title:this.translate.pageViews,className:"text-right",hidden:!1},{id:"opt",title:this.translate.opt,className:"text-right",hidden:!1,formatter:function(t){return 1===t.isPublish?[{tag:"a",text:"编辑",className:"opt-btn",callback:function(t,n){e.isEditPage=!0,e.curAnnouncementId=t.announcementId,e.isPublishEdit=!0,Object(a.d)({url:"/api/announcement/"+t.announcementId,dataType:"json",type:"get",success:function(t){t.state?(e.title=t.data.title,e.announcementContent=t.data.content,e.curAnnouncementData=t.data,e.systemId=[],t.data.publishTo.forEach(function(t){e.systemId.push(parseInt(t))}),e.systemType.forEach(function(t){e.systemId.indexOf(t.id)>=0?t.isSelected=!0:t.isSelected=!1}),e.isEdited=!1):e.$toast(t.message)}})}},{tag:"a",text:i.translate.delete,className:"opt-btn",callback:function(t,e){confirm(i.translate.deleteConfirmText)&&Object(a.d)({url:"/api/announcement/deleteAnnouncement/"+t.announcementId,dataType:"json",type:"post",success:function(t){t.state?(i.$toast(i.translate.deleteSuccessTip),i.timestamp=(new Date).getTime()):i.$toast(t.message)}})}}]:[{tag:"a",text:i.translate.continueEditing,className:"opt-btn",callback:function(t,e){i.isEditPage=!0,i.isPublishEdit=!1,i.curAnnouncementId=t.announcementId,Object(a.d)({url:"/api/announcement/"+t.announcementId,dataType:"json",type:"get",success:function(t){t.state?(i.title=t.data.title,i.announcementContent=t.data.content,i.curAnnouncementData=t.data,i.systemId=[],t.data.publishTo.forEach(function(t){i.systemId.push(parseInt(t))}),i.systemType.forEach(function(t){i.systemId.indexOf(t.id)>=0?t.isSelected=!0:t.isSelected=!1}),i.isEdited=!1):i.$toast(t.message)}})}},{tag:"a",text:i.translate.delete,className:"opt-btn",callback:function(t,e){confirm(i.translate.deleteConfirmText)&&Object(a.d)({url:"/api/announcement/deleteAnnouncement/"+t.announcementId,dataType:"json",type:"post",success:function(t){t.state?(i.$toast(i.translate.deleteSuccessTip),i.timestamp=(new Date).getTime()):i.$toast(t.message)}})}}]}}]},data:function(){return{columns:[],method:"get",type:"",title:"",collegeCode:"",collegeOptions:[],isEditPage:!1,systemType:[],systemId:[],curSelectType:"WORK",divHeight:0,lastEditRange:"",content:"",clearInputShow:{image:!0,attachment:!0},attachmentArray:[],images:[],timestamp:"",curAnnouncementId:"",curAnnouncementData:{},recordSystemId:null,textLength:null,isEdited:!1,lang:"zh-cn",editorConfig:{initialFrameHeight:520},announcementContent:"",isPublishEdit:!1}},computed:{translate:function(){return Object(a.f)(this.lang).announcementManage},url:function(){return"college"!==this.type?"/table-data/announcement/manage/list?type="+this.type+"&timestamp="+this.timestamp:this.collegeCode?"/table-data/announcement/manage/list?type="+this.type+"&college="+this.collegeCode+"&timestamp="+this.timestamp:void 0}},methods:{_rowClick:function(t,e){this.$emit("addBread",{route:"/announce/detail?id="+t.announcementId,title:t.title})},_clickSystemType:function(t){t.isSelected?t.isSelected=!1:t.isSelected=!0;var e=this.systemId.indexOf(t.id);e>=0?this.systemId.splice(e,1):this.systemId.push(t.id),this.isEdited=!0},changeCollege:function(t){this.collegeCode=t.value},_changeAnnouncementContent:function(t){this.isEdited=t!==this.curAnnouncementData.content},_writeAnnouncement:function(){var t=this;this.isEditPage=!0,this.isPublishEdit=!1,this.title="",this.curAnnouncementId="",this.announcementContent="",this.curAnnouncementData={},this.systemId=[],this.systemId.push(this.recordSystemId),this.systemType.forEach(function(e){t.systemId.indexOf(e.id)>=0?e.isSelected=!0:e.isSelected=!1}),this.isEdited=!1},_publishOrdraft:function(t){var e=this,n=this,s="";if(this.systemId.forEach(function(t,n){1===e.systemId.length?s+=","+t+",":s+=0===n?","+t:","+t+","}),!this.title)return this.$toast(this.translate.titleTip);var i="",c="";this.isPublishEdit?(i="/api/announcement/announcement/"+this.curAnnouncementId,c="put"):(i="/api/announcement/addAnnouncement",c="post"),Object(a.d)({url:i,dataType:"json",type:c,data:{id:this.curAnnouncementId,title:this.title,type:this.type,isPublish:t,content:this.announcementContent,college:this.collegeCode,publishTo:s},success:function(e){e.state?(n.isPublishEdit=!1,0===t?n.$toast(n.translate.saveSuccessTip):n.$toast(n.translate.publishSuccessTip),n.isEditPage=!1):n.$toast(e.message)}})},_titleChange:function(){this.isEdited=!0},_backListPage:function(){this.isEdited?confirm(this.translate.cancelEditText)&&(this.isEditPage=!1):this.isEditPage=!1}},watch:{windowObj:{deep:!0,handler:function(e){this.editorConfig.initialFrameHeight=t(document).height()-360}}}}}).call(e,n("W14+"))}});