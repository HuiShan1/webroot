webpackJsonp([65],{"4Oo7":function(t,e){},ADfj:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("C331"),o={props:["assetsInfo"],data:function(){return{tableData_url:"",showModal:!1,tableSearch:{floor:"",roomNo:"",assetsType:"",assetsState:""},editInfo:{floor:"",roomNo:"",assetsState:"",assetsType:"",assetsNumber:0,note:"",buildingId:""},floorList:[],assetsState:[],roomNo:[],isEdit:"",editFloorModel:"",assetsState_selected_value:""}},methods:{getFloor:function(){var t=this,e="/api/apartment/assets/"+this.assetsInfo.buildingId+"/getApartmentBuildingOptions";Object(a.d)({type:"get",url:e,success:function(e){e.state&&(t.floorList=e.data.option.floor,t.assetsState=e.data.option.assetsState,t.$set(t.columns[0].search.data,"options",e.data.option.floor),t.$set(t.columns[4].search.data,"options",e.data.option.assetsState))}})},getRoomNo:function(t){var e=this,s="/api/apartment/assets/"+this.assetsInfo.buildingId+"/getApartmentAssetsRoomOptions?floor="+t;Object(a.d)({type:"get",url:s,success:function(t){t.state&&(""==e.isEdit?e.$set(e.columns[1].search.data,"options",t.data):e.roomNo=t.data)}})},selectSingle_cancle:function(){this.showModal=!1},afterSelectedFloor:function(t){t.value!=this.editFloorModel&&(this.editInfo.roomNo="",this.editFloorModel="",this.getRoomNo(t.value))},afterSelectedState:function(t){this.editInfo.assetsState=t.value},afterSelectedRoom:function(t){this.editInfo.roomNo=t.value},addAssets:function(){this.showModal=!0,this.assetsState_selected_value="",this.isEdit="add",this.editInfo={}},submit:function(){var t=this;if(console.log(this.editInfo),!this.editInfo.floor)return this.$toast("请选择楼层");if(!this.editInfo.roomNo)return this.$toast("请选择房间号");if(!this.editInfo.assetsType)return this.$toast("请输入资产种类");if(!this.editInfo.assetsNumber)return this.$toast("请输入数量");if(!this.editInfo.assetsState)return this.$toast("请选择资产状态");if("edit"==this.isEdit)var e="/api/apartment/assets/updateRoomAssets";else{e="/api/apartment/assets/addRoomAssets";this.editInfo.buildingId=this.assetsInfo.buildingId}Object(a.d)({type:"edit"==this.isEdit?"put":"post",url:e,data:this.editInfo,success:function(e){if(e.state)return t.tableData_url="/table-data/apartment/assets/getApartmentBuilding?buildingId="+t.assetsInfo.buildingId+"&timeStamp="+(new Date).getTime(),t.isEdit="",t.showModal=!1,t.isEdit?t.$toast("编辑成功"):t.$toast("新增成功");t.$toast(e.message)}})},_backParentPage:function(){this.$emit("backToPage")},exportStat:function(){var t=this.$refs.liveStaffTable.tableSearchFields,e="/downloads/apartment/assets/getApartmentBuildingExcel?buildingId="+this.assetsInfo.buildingId+"&floor="+t.floor+"&roomNo="+t.roomNo+"&assetsType="+t.assetsType+"&campusName="+this.assetsInfo.campusName+"&zoneName="+this.assetsInfo.zoneName+"&name="+this.assetsInfo.name;window.location.href=e}},created:function(){var t=this;this.getFloor(),this.tableData_url="/table-data/apartment/assets/getApartmentBuilding?buildingId="+this.assetsInfo.buildingId,this.columns=[{id:"floor",title:"楼层",width:100,className:"text-left",hidden:!1,search:{type:"select",data:{options:this.floorList,optionsLabel:"name",optionsValue:"code",change:function(e){t.roomNo=[],t.getRoomNo(e.value)}}}},{id:"roomNo",title:"房间号",width:150,className:"text-left",hidden:!1,search:{type:"multiSelect",data:{options:this.roomNo,optionsLabel:"roomName",optionsValue:"roomName",change:function(t){}}}},{id:"assetsType",title:"资产种类",width:150,className:"text-left",hidden:!1,search:{type:"text",data:{autoFocus:!1}}},{id:"assetsNumber",title:"数量",width:150,className:"text-left",hidden:!1},{id:"assetsState",title:"资产状态",width:150,className:"text-left",hidden:!1,search:{type:"select",data:{options:this.assetsState,optionsLabel:"name",optionsValue:"code"}}},{id:"note",title:"备注",width:150,className:"text-left",hidden:!1},{id:"records",title:"操作记录",width:250,className:"text-left",hidden:!1},{id:"opt",className:"text-left",width:150,title:"操作",hidden:!1,formatter:function(){return[{tag:"a",text:"编辑",className:"opt-btn",callback:function(e,s){t.showModal=!0,t.isEdit="edit",t.editInfo={floor:e.floor,roomNo:e.roomNo,assetsType:e.assetsType,assetsNumber:Number(e.assetsNumber),note:e.note,assetsId:e.assetsId,buildingId:e.buildingId},t.editFloorModel=e.floor,t.getRoomNo(t.editInfo.floor),t.assetsState.map(function(s){s.name==e.assetsState&&(t.assetsState_selected_value=s.code,t.editInfo.assetsState=s.code)})}},{tag:"a",text:"删除",className:"opt-btn",callback:function(e,s){if(window.confirm("确认要删除吗?删除后数据无法恢复")){var o="/api/apartment/assets/"+e.assetsId+"/deleteRoomAssets";Object(a.d)({url:o,type:"delete",success:function(e){e.state&&(t.tableData_url="/table-data/apartment/assets/getApartmentBuilding?buildingId="+t.assetsInfo.buildingId+"&timeStamp="+(new Date).getTime(),t.$toast("删除成功"))}})}}}]}}]},mounted:function(){}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"singleAssets"}},[s("div",{staticClass:"back-parent-page"},[s("button",{staticClass:"btn back-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._backParentPage}},[s("i",{staticClass:"maticon back-icon-btn",domProps:{innerHTML:t._s(t.icons("arrow_back"))}},[t._v("arrow_back")]),s("span",{staticClass:"nav-title"},[t._v("返回公寓资产管理")])])]),t._v(" "),s("v-table",{key:1,ref:"liveStaffTable",attrs:{columns:t.columns,idField:"id",order:!0,search:!1,pagesize:"15",url:t.tableData_url,searchParams:t.tableSearch}},[s("div",{attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[s("div",{staticClass:"btn-group pull-right"},[s("button",{staticClass:"btn add clearBtnBorder",attrs:{type:"button"},on:{click:t.addAssets}},[t._v("新增")]),t._v(" "),s("button",{staticClass:"btn add clearBtnBorder",attrs:{type:"button"},on:{click:t.exportStat}},[t._v("导出")])])])]),t._v(" "),s("v-modal",{attrs:{show:t.showModal,effect:"fade",width:"350"}},[s("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("\n          "+t._s("add"==t.isEdit?"新增":"编辑")+"\n      ")])]),t._v(" "),s("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[s("div",{staticClass:"modal-select form-group"},[s("label",{staticClass:"partyName",attrs:{for:"singleAdd_select"}},[t._v("楼层")]),t._v(" "),s("v-select",{attrs:{options:t.floorList,optionsLabel:"name",optionsValue:"code"},on:{afterSelected:function(e){return t.afterSelectedFloor(e)}},model:{value:t.editInfo.floor,callback:function(e){t.$set(t.editInfo,"floor",e)},expression:"editInfo.floor"}})],1),t._v(" "),s("div",{staticClass:"modal-select form-group"},[s("label",{staticClass:"partyName",attrs:{for:"singleAdd_select"}},[t._v("房间号")]),t._v(" "),s("v-select",{attrs:{value:t.editInfo.roomNo,options:t.roomNo,optionsLabel:"roomName",optionsValue:"roomName"},on:{afterSelected:function(e){return t.afterSelectedRoom(e)}}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"edit-class-text"},[t._v("资产种类")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.editInfo.assetsType,expression:"editInfo.assetsType"}],staticClass:"form-control modal-form-style name-input",attrs:{type:"text"},domProps:{value:t.editInfo.assetsType},on:{input:function(e){e.target.composing||t.$set(t.editInfo,"assetsType",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"edit-class-text"},[t._v("数量")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.editInfo.assetsNumber,expression:"editInfo.assetsNumber"}],staticClass:"form-control modal-form-style name-input",attrs:{type:"text"},domProps:{value:t.editInfo.assetsNumber},on:{input:function(e){e.target.composing||t.$set(t.editInfo,"assetsNumber",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"modal-select form-group"},[s("label",{staticClass:"partyName",attrs:{for:"singleAdd_select"}},[t._v("资产状态")]),t._v(" "),s("v-select",{attrs:{value:t.assetsState_selected_value,options:t.assetsState,optionsLabel:"name",optionsValue:"code"},on:{afterSelected:function(e){return t.afterSelectedState(e)}},model:{value:t.assetsState_selected_value,callback:function(e){t.assetsState_selected_value=e},expression:"assetsState_selected_value"}})],1),t._v(" "),s("div",{staticClass:"modal-select form-group"},[s("label",{staticClass:"partyName",staticStyle:{"vertical-align":"top"},attrs:{for:"note"}},[t._v("备注")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editInfo.note,expression:"editInfo.note"}],staticStyle:{width:"180px"},attrs:{name:"note",id:"note",cols:"20",rows:"8",maxlength:"300"},domProps:{value:t.editInfo.note},on:{input:function(e){e.target.composing||t.$set(t.editInfo,"note",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:t.selectSingle_cancle}},[t._v("取消")]),t._v(" "),s("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t.submit}},[t._v("确定")])])])],1)},staticRenderFns:[]};var n=s("Mz/3")(o,i,!1,function(t){s("MWCx")},"data-v-5cd6e3ae",null).exports,l={data:function(){return{tableData_url:"/table-data/apartment/assets/getApartmentList",searchParams:{campusName:"",zoneName:"",name:""},columns:[],selectCampusId:"",parkOptions:[],importParams:{},importPage:!1,showSingle:!1}},components:{singleAssets:n},methods:{getPark:function(t){var e=this;if(t)var s="/api/apartment/zones/getByCampuses?campusIds="+t;else s='/api/apartment/zones/getByCampuses?campusIds=""';Object(a.d)({type:"get",url:s,success:function(t){t.state&&(t.data.map(function(t){e.parkOptions.push(t)}),e.$set(e.columns[1].search.data,"options",e.parkOptions))}})},batchImport:function(){var t=this;this.importPage=!0,this.importParams={title:"批量导入资产",parentPageTitle:"公寓资产管理",downloadTemplateUrl:"/apartment/assets/batch/template",downloadErrorTemplateUrl:"/apartment/assets/batch/errorFile",checkTemplateUrl:"/apartment/assets/batch/excel",templateName:"批量导入资产模板",importBtnType:[{name:"覆盖导入",url:"/apartment/assets/batch",method:"put",isShowBtn:!0,success:function(e){return e.state?t.$toast("导入成功"):t.$toast(e.message)}}]}},importPageBack:function(){this.importPage=!1},backToPage_emit:function(){this.showSingle=!1}},created:function(){var t=this;this.getPark(),this.columns=[{id:"campusName",title:"校区",width:200,className:"text-left",hidden:!1,search:{type:"select",data:{url:"/api/apartment/dicts?typeName=校区",optionsLabel:"label",optionsValue:"value",change:function(e){t.parkOptions=[],t.getPark(e.value)}}}},{id:"zoneName",title:"园区",width:200,className:"text-left",hidden:!1,search:{type:"select",data:{options:this.parkOptions,optionsLabel:"name",optionsValue:"zoneId",change:function(t){}}}},{id:"name",title:"楼栋",width:200,className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"请输入楼栋名称",autoFocus:!1}}},{id:"floor",title:"层数",width:200,className:"text-left",hidden:!1},{id:"roomPerFloor",title:"每层房间数",width:200,className:"text-left",hidden:!1},{id:"opt",className:"text-left",width:200,title:"操作",hidden:!1,formatter:function(){return[{tag:"a",text:"资产管理",className:"opt-btn",callback:function(e,s){t.assetsInfo=e,t.showSingle=!0}}]}}]}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"apartmentAssetsManage"}},[s("v-table",{directives:[{name:"show",rawName:"v-show",value:!t.importPage&&!t.showSingle,expression:"!importPage&&!showSingle"}],key:1,ref:"liveStaffTable",attrs:{columns:t.columns,idField:"id",order:!0,search:!0,pagesize:"15",url:t.tableData_url,searchParams:t.searchParams}},[s("div",{attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[s("div",{staticClass:"btn-group pull-right"},[s("button",{staticClass:"btn add clearBtnBorder",attrs:{type:"button"},on:{click:t.batchImport}},[t._v("批量导入资产")])])])]),t._v(" "),t.showSingle?s("single-assets",{attrs:{assetsInfo:t.assetsInfo},on:{backToPage:t.backToPage_emit}}):t._e(),t._v(" "),s("v-import",t._b({directives:[{name:"show",rawName:"v-show",value:t.importPage,expression:"importPage"}],on:{backParentPage:t.importPageBack}},"v-import",t.importParams,!1))],1)},staticRenderFns:[]};var d=s("Mz/3")(l,r,!1,function(t){s("4Oo7")},"data-v-9b4ec1ea",null);e.default=d.exports},MWCx:function(t,e){}});