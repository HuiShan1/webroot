webpackJsonp([57],{OJnU:function(e,t){},PTPo:function(e,t){},SlEB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s,o=a("WxFH"),n=a.n(o),r=a("4DA3"),l=a("C331"),c=a("8c0Y"),f=(a("EPsR"),r.a,c.a,i={cancelAudit:function(e,t,a){var i=this,s="/api/employment/company/cancelAudit?auditRecordId="+e+"&relationId="+t;Object(l.d)({url:s,type:"put",success:function(e){e.state?(a?i.tableData_url="/table-data/employment/company/auditRecord/list?timeStamp="+(new Date).getTime():i.getUnit(),i.$message.success("撤回成功")):i.$message.error("撤回失败")}})},handleCheckedLabelChange:function(e){this.formInfo.labelV=e,console.log(e)},getIntroduction:function(e){console.log(e),this.formInfo.summary=e.replace(/<[^>]+>|&[^>]+;/g,"").trim()},checkAudit:function(e){var t=this,a="/api/employment/company/auditRecordDetail?companyDraftId="+e;Object(l.d)({url:a,type:"get",success:function(e){e.state&&(t.centerDialogVisible=!0,t.beforeAudit=e.data.beforeAudit,t.afterAudit=e.data.afterAudit,t.beforeList=e.data.beforeList,t.afterList=e.data.afterList)}})},submitInfo:function(){var e=this,t=this,a=this.formInfo,i={id:a.id,companyId:a.companyId,companyName:a.companyName,companyCode:a.companyCode,contactPeople:a.contactPeople,contactPhone:a.contactPhone,fax:a.fax,companyUrl:a.companyUrl,postcode:a.postcode,addressDetail:a.addressDetail,license:a.license.replace("/upload/storage/images/",""),industry:a.industry,property:a.property,summary:a.summary,companyRepresentative:a.companyRepresentative,licenseTime:a.licenseTime?a.licenseTime+" 00:00:00":null,isLong:a.isLong?1:0,registeredCapital:Number(a.registeredCapital),officePhone:a.officePhone,scale:a.scale,label:a.labelV.join(","),invoiceTitle:a.invoiceTitle,taxpayerNumber:a.taxpayerNumber,companyCreateTime:a.companyCreateTime?a.companyCreateTime+" 00:00:00":null,address:a.address_backend};t.$refs.formInfo.validate(function(a){if(!a)return t.$message.error("请根据提示正确填写信息"),!1;Object(l.d)({url:"/api/employment/company/addCompany",type:"post",data:i,success:function(t){t.state?(e.$message.success("修改成功"),e.getUnit()):e.$message.error(t.message),e.isEdit=!0}})})},licenseDateChange:function(e){e&&(this.formInfo.isLong=!1)},showFormChange:function(e){console.log(e)},getLocation:function(e){var t=[];console.log(e),e.area&&(this.formInfo.address_backend=e.area.id,t.push(e.area.value)),e.city&&t.push(e.city.value),e.province&&t.push(e.province.value),this.address_detail=t},getDictListByType:function(e,t){var a=this;Object(l.d)({url:"/api/employment/company/addCompany",type:"post",data:data,success:function(e){e.state?(a.$message.success("修改成功"),a.getUnit()):a.$message.error("修改失败,请稍后再试"),a.isEdit=!0}})},licenseUpload:function(){document.getElementById("upload-file").click()},licenseChange:function(e){e&&(this.formInfo.licenseTime="")}},n()(i,"licenseDateChange",function(e){e&&(this.formInfo.isLong=!1)}),n()(i,"showFormChange",function(e){console.log(e)}),n()(i,"getLocation",function(e){var t=[];e.area&&(this.formInfo.address_backend=e.area.id,t.push(e.area.value)),e.city&&t.push(e.city.value),e.province&&t.push(e.province.value),this.address_detail=t}),n()(i,"getDictListByType",function(e,t){var a=this;Object(l.d)({url:"/api/employment/system/findDictByTypeName",type:"get",data:{typeName:e},success:function(e){a[t]=e.data}})}),n()(i,"changeEdit",function(){var e=this;this.isEdit=!this.isEdit,this.$nextTick(function(){e.$refs.formInfo.clearValidate()})}),n()(i,"_fileHeadUpload",function(e){var t=this,a=new FormData;a.append("file",e.target.files[0]),a.append("fieldName",e.target.files[0].name);var i=e.target.files[0].name;Object(l.d)({url:"/upload/storage/images",type:"post",data:a,contentType:!1,processData:!1,success:function(e){"88888"===e.code?(t.formInfo.license=i,t.licenseHash=e.data.hash,t.formInfo.license=e.data.hash):t.$toast(e.message)}}).always(function(){})}),n()(i,"getUnit",function(){var e=this;Object(l.d)({url:"/api/employment/company/information",type:"get",success:function(t){if(t.state){if("[object Object]"===Object.prototype.toString.call(t.data)){var a=t.data;e.unitInfo=t.data,e.formInfo.companyId=a.companyId,e.formInfo.id=a.id,e.formInfo.companyName=a.companyName,e.formInfo.addressDetail=a.addressDetail,e.formInfo.addressName=a.addressName,e.formInfo.address=a.address,e.formInfo.companyCode=a.companyCode,e.formInfo.companyCreateTime=a.companyCreateTime,e.formInfo.companyRepresentative=a.companyRepresentative,e.formInfo.companyUrl=a.companyUrl,e.formInfo.contactPeople=a.contactPeople,e.formInfo.contactPhone=a.contactPhone,e.formInfo.fax=a.fax,e.formInfo.industry=a.industry,e.formInfo.industryName=a.industryName,e.formInfo.invoiceTitle=a.invoiceTitle,e.formInfo.isLong=1==a.isLong,e.formInfo.label=a.label,e.formInfo.labelV=a.label?a.label.split(","):[],e.formInfo.labelName=a.labelName,e.formInfo.license=a.license,e.formInfo.licenseTime=a.licenseTime,e.formInfo.mailAddress=a.mailAddress,e.formInfo.officePhone=a.officePhone,e.formInfo.postcode=a.postcode,e.formInfo.property=a.property,e.formInfo.propertyName=a.propertyName,e.formInfo.registeredCapital=a.registeredCapital,e.formInfo.scale=a.scale,e.formInfo.scaleName=a.scaleName,e.formInfo.status=a.status,e.formInfo.statusName=a.statusName,e.formInfo.summary=a.summary,e.formInfo.taxpayerNumber=a.taxpayerNumber,e.formInfo.type=a.type,e.formInfo.typeName=a.typeName,e.formInfo.updateTime=a.updateTime,e.formInfo.version=a.version,e.industry_backend=a.industry,e.scale_backend=a.scale,e.property_backend=a.property,a.labelName&&(e.label_backend=a.labelName.split(",")),setTimeout(function(){e.unitInfoReady=!1},500)}}else setTimeout(function(){e.unitInfoReady=!1,e.isEdit=!1,e.$message.error("获取单位信息失败")},500)}})}),n()(i,"toAudit",function(){var e=this;this.infoPage="auditing";Object(l.d)({url:"/table-data/employment/company/auditRecord/list",type:"get",success:function(t){t.state&&(e.tableData=t.data,console.log(t.data))}})}),{name:"employmentRegister",components:{linkage:r.a,EmUser:c.a},data:function(){var e,t=this;return{centerDialogVisible:!1,unitInfoReady:!1,showChange:!1,afterAudit:{},beforeAudit:{},beforeList:[],afterList:[],formInfo:{companyId:"",companyName:"",companyCode:"",province:"",city:"",addressDetail:"",industry:"",scale:"",property:"",label:"",labelV:"",labelName:[],contactPeople:"",contactPhone:"",officePhone:"",fax:"",postcode:"",companyUrl:"",introduction:"",invoiceTitle:"",taxpayerNumber:"",companyRepresentative:"",registeredCapital:"",companyCreateTime:"",license:"",licenseTime:"",isLong:!1,industryName_backend:"",address_backend:"",summary:""},ruleInfo:{companyName:[{required:!0,message:"请输入单位名称",trigger:"blur"},{max:50,message:"单位名称过长",trigger:"blur"}],companyCode:[{required:!0,message:"请输入统一社会信用代码"},{max:18,message:"统一社会信用代码过长",trigger:"blur"}],location:[{validator:function(e,a,i){if(!t.formInfo.address_backend)return i("请输入单位所在地");i()},trigger:"change"}],addressDetail:[{required:!0,message:"请输入单位地址",trigger:"blur"}],industry:[{required:!0,message:"请选择所属行业",trigger:"blur"}],scale:[{required:!0,message:"请选择单位规模",trigger:"blur"}],property:[{required:!0,message:"请选择单位性质",trigger:"blur"}],contactPeople:[{required:!0,message:"请输入联系人",trigger:"blur"},{max:18,message:"联系人过长",trigger:"blur"}],contactPhone:[{required:!0,message:"请输入手机号",trigger:"blur"},{max:18,message:"手机号过长",trigger:"blur"},{validator:function(e,t,a){if(!/^1[34578]\d{9}$/.test(t))return a("请输入正确格式的手机号码");a()},trigger:"blur"}],officePhone:[{required:!0,message:"请输入单位电话",trigger:"blur"},{max:18,message:"单位电话过长",trigger:"blur"},{validator:function(e,t,a){if(!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(t))return a("请输入正确格式的电话");a()},trigger:"blur"}],fax:[{max:18,message:"单位传真过长",trigger:"blur"}],postcode:[{max:18,message:"单位邮编过长",trigger:"blur"}],companyUrl:[{max:50,message:"单位网址过长",trigger:"blur"}],introduction:[{required:!0,message:"请输入单位介绍",trigger:"blur"},{max:6e4,message:"单位介绍过长",trigger:"blur"}],invoiceTitle:[{required:!0,message:"请输入发票抬头",trigger:"blur"},{max:32,message:"发票抬头过长",trigger:"blur"}],taxpayerNumber:[{required:!0,message:"请输入纳税人识别号",trigger:"blur"},{max:32,message:"纳税人识别号过长",trigger:"blur"}],companyRepresentative:[{required:!0,message:"请输入公司法人代表",trigger:"blur"},{max:18,message:"公司法人代表过长",trigger:"blur"}],registeredCapital:[{validator:function(e,t,a){if(void 0!==t&&""!==t&&!/^[0-9]+\.?[0-9]*$/.test(t))return a("注册资金必须是数字值");a()},trigger:"blur"}],companyCreateTime:[{required:!0,message:"请输入单位成立日期",trigger:"blur"}],license:[{required:!0,message:"请上传营业执照",trigger:"blur"},{max:200,message:"营业执照资源链接过长",trigger:"blur"}],licenseTime:[{validator:function(e,a,i){if(!t.formInfo.isLong&&!a)return i("请输入营业执照到期时间或选择永久");i()},trigger:"blur"}]},industry_backend:"",scale_backend:"",property_backend:"",address_detail:[],label_backend:[],infoPage:"info",licenseImg:"",licenseHash:"",dataKey:"",tableData_url:"/table-data/employment/company/auditRecord/list",businessList:[],scaleList:[],propertyList:[],labelList:[],isEdit:!0,unitInfo:{},columns:[{id:"createTime",title:"提交时间",width:150,className:"text-left",hidden:!1},{id:"status",title:"审核状态",className:"text-left",hidden:!1,width:60},{id:"auditTime",title:"审核时间",width:150,className:"text-left",hidden:!1},{id:"reason",title:"审核意见",width:150,className:"text-left",hidden:!1},(e={id:"opt",title:"审核意见",className:"text-left"},n()(e,"title","操作"),n()(e,"width",150),n()(e,"formatter",function(e){return[{tag:"a",text:"查看审核记录",callback:function(e,a){t.checkAudit(e.relationId)}},{tag:"a",text:"撤回",className:"待审核"==e.status?"":"none",callback:function(e,a){t.cancelAudit(e.id,e.relationId,!0)}}]}),e)]}},computed:{},methods:(s={cancelAudit:function(e,t,a){var i=this,s="/api/employment/company/cancelAudit?auditRecordId="+e+"&relationId="+t;Object(l.d)({url:s,type:"put",success:function(e){e.state?(a?i.tableData_url="/table-data/employment/company/auditRecord/list?timeStamp="+(new Date).getTime():i.getUnit(),i.$message.success("撤回成功")):i.$message.error("撤回失败")}})},handleCheckedLabelChange:function(e){this.formInfo.labelV=e,console.log(e)},getIntroduction:function(e){console.log(e),this.formInfo.summary=e.replace(/<[^>]+>|&[^>]+;/g,"").trim()},checkAudit:function(e){var t=this,a="/api/employment/company/auditRecordDetail?companyDraftId="+e;Object(l.d)({url:a,type:"get",success:function(e){e.state&&(t.centerDialogVisible=!0,t.beforeAudit=e.data.beforeAudit,t.afterAudit=e.data.afterAudit,t.beforeList=e.data.beforeList,t.afterList=e.data.afterList)}})},submitInfo:function(){var e=this,t=this,a=this.formInfo,i={id:a.id,companyId:a.companyId,companyName:a.companyName,companyCode:a.companyCode,contactPeople:a.contactPeople,contactPhone:a.contactPhone,fax:a.fax,companyUrl:a.companyUrl,postcode:a.postcode,addressDetail:a.addressDetail,license:a.license.replace("/upload/storage/images/",""),industry:a.industry,property:a.property,summary:a.summary,companyRepresentative:a.companyRepresentative,licenseTime:a.licenseTime?a.licenseTime+" 00:00:00":null,isLong:a.isLong?1:0,registeredCapital:Number(a.registeredCapital),officePhone:a.officePhone,scale:a.scale,label:a.labelV.join(","),invoiceTitle:a.invoiceTitle,taxpayerNumber:a.taxpayerNumber,companyCreateTime:a.companyCreateTime?a.companyCreateTime+" 00:00:00":null,address:a.address_backend};t.$refs.formInfo.validate(function(a){if(!a)return t.$message.error("请根据提示正确填写信息"),!1;Object(l.d)({url:"/api/employment/company/addCompany",type:"post",data:i,success:function(t){t.state?(e.$message.success("修改成功"),e.getUnit()):e.$message.error(t.message),e.isEdit=!0}})})},licenseDateChange:function(e){e&&(this.formInfo.isLong=!1)},showFormChange:function(e){console.log(e)},getLocation:function(e){var t=[];console.log(e),e.area&&(this.formInfo.address_backend=e.area.id,t.push(e.area.value)),e.city&&t.push(e.city.value),e.province&&t.push(e.province.value),this.address_detail=t},getDictListByType:function(e,t){var a=this;Object(l.d)({url:"/api/employment/company/addCompany",type:"post",data:data,success:function(e){e.state?(a.$message.success("修改成功"),a.getUnit()):a.$message.error("修改失败,请稍后再试"),a.isEdit=!0}})},licenseUpload:function(){document.getElementById("upload-file").click()},licenseChange:function(e){e&&(this.formInfo.licenseTime="")}},n()(s,"licenseDateChange",function(e){e&&(this.formInfo.isLong=!1)}),n()(s,"showFormChange",function(e){console.log(e)}),n()(s,"getLocation",function(e){var t=[];e.area&&(this.formInfo.address_backend=e.area.id,t.push(e.area.value)),e.city&&t.push(e.city.value),e.province&&t.push(e.province.value),this.address_detail=t}),n()(s,"getDictListByType",function(e,t){var a=this;Object(l.d)({url:"/api/employment/system/findDictByTypeName",type:"get",data:{typeName:e},success:function(e){a[t]=e.data}})}),n()(s,"changeEdit",function(){var e=this;this.isEdit=!this.isEdit,this.$nextTick(function(){e.$refs.formInfo.clearValidate()})}),n()(s,"_fileHeadUpload",function(e){var t=this,a=new FormData;a.append("file",e.target.files[0]),a.append("fieldName",e.target.files[0].name);var i=e.target.files[0].name;Object(l.d)({url:"/upload/storage/images",type:"post",data:a,contentType:!1,processData:!1,success:function(e){"88888"===e.code?(t.formInfo.license=i,t.licenseHash=e.data.hash,t.formInfo.license=e.data.hash):t.$toast(e.message)}}).always(function(){})}),n()(s,"getUnit",function(){var e=this;Object(l.d)({url:"/api/employment/company/information",type:"get",success:function(t){if(t.state){if("[object Object]"===Object.prototype.toString.call(t.data)){var a=t.data;e.unitInfo=t.data,e.formInfo.companyId=a.companyId,e.formInfo.id=a.id,e.formInfo.companyName=a.companyName,e.formInfo.addressDetail=a.addressDetail,e.formInfo.addressName=a.addressName,e.formInfo.address=a.address,e.formInfo.companyCode=a.companyCode,e.formInfo.companyCreateTime=a.companyCreateTime,e.formInfo.companyRepresentative=a.companyRepresentative,e.formInfo.companyUrl=a.companyUrl,e.formInfo.contactPeople=a.contactPeople,e.formInfo.contactPhone=a.contactPhone,e.formInfo.fax=a.fax,e.formInfo.industry=a.industry,e.formInfo.industryName=a.industryName,e.formInfo.invoiceTitle=a.invoiceTitle,e.formInfo.isLong=1==a.isLong,e.formInfo.label=a.label,e.formInfo.labelV=a.label?a.label.split(","):[],e.formInfo.labelName=a.labelName,e.formInfo.license=a.license,e.formInfo.licenseTime=a.licenseTime,e.formInfo.mailAddress=a.mailAddress,e.formInfo.officePhone=a.officePhone,e.formInfo.postcode=a.postcode,e.formInfo.property=a.property,e.formInfo.propertyName=a.propertyName,e.formInfo.registeredCapital=a.registeredCapital,e.formInfo.scale=a.scale,e.formInfo.scaleName=a.scaleName,e.formInfo.status=a.status,e.formInfo.statusName=a.statusName,e.formInfo.summary=a.summary,e.formInfo.taxpayerNumber=a.taxpayerNumber,e.formInfo.type=a.type,e.formInfo.typeName=a.typeName,e.formInfo.updateTime=a.updateTime,e.formInfo.version=a.version,e.industry_backend=a.industry,e.scale_backend=a.scale,e.property_backend=a.property,a.labelName&&(e.label_backend=a.labelName.split(",")),setTimeout(function(){e.unitInfoReady=!1},500)}}else setTimeout(function(){e.unitInfoReady=!1,e.isEdit=!1,e.$message.error("获取单位信息失败")},500)}})}),n()(s,"toAudit",function(){var e=this;this.infoPage="auditing";Object(l.d)({url:"/table-data/employment/company/auditRecord/list",type:"get",success:function(t){t.state&&(e.tableData=t.data,console.log(t.data))}})}),s),created:function(){this.getUnit(),this.getDictListByType("单位所属行业","businessList"),this.getDictListByType("单位规模","scaleList"),this.getDictListByType("单位性质","propertyList"),this.getDictListByType("单位标签","labelList")}}),m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:"info"==e.infoPage,expression:'infoPage=="info"'}],staticClass:"content"},[a("div",{staticClass:"top"},[a("h1",{staticClass:"clearfix"},[a("span",[e._v("单位信息")]),a("a",{on:{click:e.toAudit}},[e._v("审核记录")])])]),e._v(" "),e.formInfo.updateTime?a("h3",[e._v("最近修改时间: "+e._s(e.formInfo.updateTime))]):e._e(),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.unitInfoReady,expression:"unitInfoReady"}],staticClass:"employment-register",attrs:{"element-loading-text":"单位信息加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[a("h2",{staticClass:"clearfix"},[a("p",[a("span",[e._v(e._s(e.formInfo.typeName))]),e._v(" "),a("em",{directives:[{name:"show",rawName:"v-show",value:!e.formInfo.id,expression:"!formInfo.id"}]},[e._v("(信息未完善)")]),e._v(" "),a("i",{class:{success:1==e.formInfo.status,error:2==e.formInfo.status}},[e._v(e._s(e.formInfo.statusName)+"\n            "),"0"==e.formInfo.status?a("a",{on:{click:function(t){return e.cancelAudit("",e.formInfo.id,!1)}}},[e._v("撤回")]):e._e(),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:"2"==e.formInfo.status||"0"==e.formInfo.status,expression:"formInfo.status == '2' || formInfo.status == '0'"}],on:{click:e.toAudit}},[e._v("查看")])])]),e._v(" "),"1"==e.formInfo.status||"2"==e.formInfo.status||e.unitInfo?a("a",{staticClass:"editInfo",on:{click:e.changeEdit}},[a("i"),a("span",[e._v("编辑")])]):e._e()]),e._v(" "),a("div",{attrs:{id:"register-content"}},[a("div",{staticClass:"register-info"},[a("el-form",{ref:"formInfo",class:{isEdit:e.isEdit},attrs:{model:e.formInfo,rules:e.ruleInfo,"label-width":"160px","label-position":"right",disabled:e.isEdit}},[a("el-form-item",{attrs:{label:"单位名称：",prop:"companyName"}},[e.isEdit?a("span",{staticClass:"input_disabled"},[e._v(e._s(e.unitInfo.companyName))]):a("el-input",{model:{value:e.formInfo.companyName,callback:function(t){e.$set(e.formInfo,"companyName",t)},expression:"formInfo.companyName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"统一社会信用代码：",prop:"companyCode"}},[e.isEdit?a("span",{staticClass:"input_disabled"},[e._v(e._s(e.unitInfo.companyCode))]):a("el-input",{model:{value:e.formInfo.companyCode,callback:function(t){e.$set(e.formInfo,"companyCode",t)},expression:"formInfo.companyCode"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"address_backend"}},[a("div",{staticStyle:{display:"inline-block"},attrs:{slot:"label"},slot:"label"},[e._v("单位所在地：")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEdit,expression:"!isEdit"}],staticClass:"location"},[a("linkage",{attrs:{options:e.formInfo.address,showArea:!0},on:{getData:e.getLocation}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isEdit&&e.address_detail.length,expression:"isEdit&&address_detail.length"}],staticStyle:{color:"#000","font-weight":"bold"}},[e._v(e._s(e.unitInfo.addressName))])]),e._v(" "),a("el-form-item",{attrs:{label:"单位地址：",prop:"addressDetail"}},[e.isEdit?a("span",{staticClass:"input_disabled"},[e._v(e._s(e.unitInfo.addressDetail))]):a("el-input",{model:{value:e.formInfo.addressDetail,callback:function(t){e.$set(e.formInfo,"addressDetail",t)},expression:"formInfo.addressDetail"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所属行业：",prop:"industry"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.industryName))])]):a("el-select",{model:{value:e.formInfo.industry,callback:function(t){e.$set(e.formInfo,"industry",t)},expression:"formInfo.industry"}},e._l(e.businessList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value,placeholder:"请选择所属行业"}})}),1),e._v(" "),a("span")],1),e._v(" "),a("el-form-item",{attrs:{label:"单位规模：",prop:"scale"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.scaleName))])]):a("el-select",{model:{value:e.formInfo.scale,callback:function(t){e.$set(e.formInfo,"scale",t)},expression:"formInfo.scale"}},e._l(e.scaleList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"单位性质：",prop:"property"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.propertyName))])]):a("el-select",{model:{value:e.formInfo.property,callback:function(t){e.$set(e.formInfo,"property",t)},expression:"formInfo.property"}},e._l(e.propertyList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value,placeholder:"请选择单位性质"}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"单位标签：",prop:"labelV"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.labelName))])]):a("el-checkbox-group",{on:{change:e.handleCheckedLabelChange},model:{value:e.formInfo.labelV,callback:function(t){e.$set(e.formInfo,"labelV",t)},expression:"formInfo.labelV"}},e._l(e.labelList,function(t){return a("el-checkbox",{key:t.value,attrs:{name:"label",label:t.value}},[e._v(e._s(t.label))])}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"联系人：",prop:"contactPeople"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.contactPeople))])]):a("el-input",{model:{value:e.formInfo.contactPeople,callback:function(t){e.$set(e.formInfo,"contactPeople",t)},expression:"formInfo.contactPeople"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号：",prop:"contactPhone"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.contactPhone))])]):a("el-input",{model:{value:e.formInfo.contactPhone,callback:function(t){e.$set(e.formInfo,"contactPhone",t)},expression:"formInfo.contactPhone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"单位电话：",prop:"officePhone"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.officePhone))])]):a("el-input",{model:{value:e.formInfo.officePhone,callback:function(t){e.$set(e.formInfo,"officePhone",t)},expression:"formInfo.officePhone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"单位传真：",prop:"fax"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.fax))])]):a("el-input",{model:{value:e.formInfo.fax,callback:function(t){e.$set(e.formInfo,"fax",t)},expression:"formInfo.fax"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"单位邮编：",prop:"postcode"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.postcode))])]):a("el-input",{model:{value:e.formInfo.postcode,callback:function(t){e.$set(e.formInfo,"postcode",t)},expression:"formInfo.postcode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"单位网址：",prop:"companyUrl"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.companyUrl))])]):a("el-input",{model:{value:e.formInfo.companyUrl,callback:function(t){e.$set(e.formInfo,"companyUrl",t)},expression:"formInfo.companyUrl"}})],1),e._v(" "),a("el-form-item",{staticClass:"summary",attrs:{label:"单位介绍：",prop:"summary"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.summary))])]):a("u-editor",{attrs:{value:e.formInfo.summary},on:{change:e.getIntroduction}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发票抬头：",prop:"invoiceTitle"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.invoiceTitle))])]):a("el-input",{model:{value:e.formInfo.invoiceTitle,callback:function(t){e.$set(e.formInfo,"invoiceTitle",t)},expression:"formInfo.invoiceTitle"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"纳税人识别号：",prop:"taxpayerNumber"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.taxpayerNumber))])]):a("el-input",{model:{value:e.formInfo.taxpayerNumber,callback:function(t){e.$set(e.formInfo,"taxpayerNumber",t)},expression:"formInfo.taxpayerNumber"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"公司法人代表：",prop:"companyRepresentative"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.taxpayerNumber))])]):a("el-input",{model:{value:e.formInfo.companyRepresentative,callback:function(t){e.$set(e.formInfo,"companyRepresentative",t)},expression:"formInfo.companyRepresentative"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"注册资金：",prop:"registeredCapital"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.registeredCapital))])]):a("el-input",{model:{value:e.formInfo.registeredCapital,callback:function(t){e.$set(e.formInfo,"registeredCapital",t)},expression:"formInfo.registeredCapital"}},[a("template",{slot:"append"},[e._v("万")])],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"单位成立日期：",prop:"companyCreateTime"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.companyCreateTime))])]):a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",placeholder:"选择日期："},model:{value:e.formInfo.companyCreateTime,callback:function(t){e.$set(e.formInfo,"companyCreateTime",t)},expression:"formInfo.companyCreateTime"}})],1),e._v(" "),a("el-form-item",{class:{editLicense:!e.isEdit,hasLicense:""!=e.formInfo.license},attrs:{label:"营业执照：",prop:"license"}},[e.isEdit?a("div",{staticClass:"input_disabled"},[e.formInfo.license?a("img",{attrs:{src:"/upload/storage/images/"+e.formInfo.license,alt:""}}):e._e()]):a("div",{staticClass:"avatar-uploader"},[a("i",[a("p",{staticClass:"tips"},[a("span",[e._v("+ 上传营业执照")])])]),e._v(" "),a("input",{ref:"licenseUpload",staticClass:"upload-template",attrs:{type:"file",id:"upload-file"},on:{change:e._fileHeadUpload}}),e._v(" "),e.formInfo.license?a("img",{staticClass:"licenseImg",attrs:{src:"/upload/storage/images/"+e.formInfo.license},on:{click:e.licenseUpload}}):e._e()])]),e._v(" "),a("el-form-item",{attrs:{prop:"licenseTime"}},[a("div",{attrs:{slot:"label"},slot:"label"},[a("span",{staticClass:"text-red"},[e._v("*")]),e._v("营业执照到期时间：")]),e._v(" "),e.isEdit?a("div",{staticClass:"input_disabled"},[a("span",[e._v(e._s(e.unitInfo.isLong?"长期":e.unitInfo.licenseTime))])]):a("div",{staticClass:"license"},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},on:{change:e.licenseDateChange},model:{value:e.formInfo.licenseTime,callback:function(t){e.$set(e.formInfo,"licenseTime",t)},expression:"formInfo.licenseTime"}}),e._v(" "),a("el-checkbox",{on:{change:e.licenseChange},model:{value:e.formInfo.isLong,callback:function(t){e.$set(e.formInfo,"isLong",t)},expression:"formInfo.isLong"}},[e._v("长期")])],1)]),e._v(" "),e.isEdit?e._e():a("el-button",{staticClass:"formBtn",attrs:{type:"primary"},on:{click:e.submitInfo}},[e._v("保存并提交")])],1)],1)])])]),e._v(" "),"auditing"==e.infoPage?a("div",{staticClass:"content"},[a("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-back"},on:{click:function(t){e.infoPage="info"}}},[e._v("返回")]),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"tableContet"},[a("v-table",{key:1,ref:"liveStaffTable",attrs:{columns:e.columns,idField:"id",pagesize:"15",order:!0,url:""+e.tableData_url}})],1)],1):e._e(),e._v(" "),a("el-dialog",{attrs:{visible:e.centerDialogVisible,"show-close":!1,width:"80%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("p",{staticClass:"titleBtn",attrs:{slot:"title"},slot:"title"},[a("el-checkbox",{on:{change:e.showFormChange},model:{value:e.showChange,callback:function(t){e.showChange=t},expression:"showChange"}},[e._v("仅展示变更字段")])],1),e._v(" "),a("div",{staticClass:"dialogBox"},[e.showChange?e._e():a("div",{staticClass:"auditAll box"},[e.beforeAudit?a("div",{staticClass:"before"},[a("h1",[e._v("审核前")]),e._v(" "),a("div",{staticClass:"form"},[a("p",[a("span",[e._v("单位名称：")]),a("i",{attrs:{title:e.beforeAudit.companyName}},[e._v(e._s(e.beforeAudit.companyName))])]),e._v(" "),a("p",[a("span",[e._v("统一社会代码：")]),a("i",{attrs:{title:e.beforeAudit.companyCode}},[e._v(e._s(e.beforeAudit.companyCode))])]),e._v(" "),a("p",[a("span",[e._v("单位所在地： ")]),a("i",{attrs:{title:e.beforeAudit.addressName}},[e._v(e._s(e.beforeAudit.addressName))])]),e._v(" "),a("p",[a("span",[e._v("单位地址：")]),a("i",{attrs:{title:e.beforeAudit.addressDetail}},[e._v(e._s(e.beforeAudit.addressDetail))])]),e._v(" "),a("p",[a("span",[e._v("所属行业：")]),a("i",{attrs:{title:e.beforeAudit.industryName}},[e._v(e._s(e.beforeAudit.industryName))])]),e._v(" "),a("p",[a("span",[e._v("单位性质：")]),a("i",{attrs:{title:e.beforeAudit.propertyName}},[e._v(e._s(e.beforeAudit.propertyName))])]),e._v(" "),a("p",[a("span",[e._v("单位规模：")]),a("i",{attrs:{title:e.beforeAudit.scaleName}},[e._v(e._s(e.beforeAudit.scaleName))])]),e._v(" "),a("p",[a("span",[e._v("单位标签：")]),a("i",{attrs:{title:e.beforeAudit.labelName}},[e._v(e._s(e.beforeAudit.labelName))])]),e._v(" "),a("p",[a("span",[e._v("联系人：")]),a("i",{attrs:{title:e.beforeAudit.contactPeople}},[e._v(e._s(e.beforeAudit.contactPeople))])]),e._v(" "),a("p",[a("span",[e._v("手机号：")]),a("i",{attrs:{title:e.beforeAudit.contactPhone}},[e._v(e._s(e.beforeAudit.contactPhone))])]),e._v(" "),a("p",[a("span",[e._v("单位电话：")]),a("i",{attrs:{title:e.beforeAudit.officePhone}},[e._v(e._s(e.beforeAudit.officePhone))])]),e._v(" "),a("p",[a("span",[e._v("单位传真：")]),a("i",{attrs:{title:e.beforeAudit.fax}},[e._v(e._s(e.beforeAudit.fax))])]),e._v(" "),a("p",[a("span",[e._v("单位邮编：")]),a("i",{attrs:{title:e.beforeAudit.postcode}},[e._v(e._s(e.beforeAudit.postcode))])]),e._v(" "),a("p",[a("span",[e._v("单位网址：")]),a("i",{attrs:{title:e.beforeAudit.companyUrl}},[e._v(e._s(e.beforeAudit.companyUrl))])]),e._v(" "),a("p",[a("span",[e._v("单位介绍：")]),a("i",{attrs:{title:e.beforeAudit.summary}},[e._v(e._s(e.beforeAudit.summary))])]),e._v(" "),a("p",[a("span",[e._v("发票抬头：")]),a("i",{attrs:{title:e.beforeAudit.invoiceTitle}},[e._v(e._s(e.beforeAudit.invoiceTitle))])]),e._v(" "),a("p",[a("span",[e._v("纳税人识别号：")]),a("i",{attrs:{title:e.beforeAudit.taxpayerNumber}},[e._v(e._s(e.beforeAudit.taxpayerNumber))])]),e._v(" "),a("p",[a("span",[e._v("公司法人代表：")]),a("i",{attrs:{title:e.beforeAudit.companyRepresentative}},[e._v(e._s(e.beforeAudit.companyRepresentative))])]),e._v(" "),a("p",[a("span",[e._v("注册资金：")]),a("i",{attrs:{title:e.beforeAudit.registeredCapital}},[e._v(e._s(e.beforeAudit.registeredCapital))])]),e._v(" "),a("p",[a("span",[e._v("单位成立日期：")]),a("i",{attrs:{title:e.beforeAudit.companyCreateTime}},[e._v(e._s(e.beforeAudit.companyCreateTime))])]),e._v(" "),a("p",[a("span",[e._v("营业执照：")]),e.beforeAudit.license?a("img",{attrs:{src:"/upload/storage/images/"+e.beforeAudit.license}}):e._e()]),e._v(" "),a("p",[a("span",[e._v("营业执照到期时间：")]),a("i",[e._v(e._s(e.beforeAudit.isLong?"永久":e.beforeAudit.licenseTime))])])])]):e._e(),e._v(" "),e.afterAudit?a("div",{staticClass:"after"},[a("h1",[e._v("审核后")]),e._v(" "),a("div",{staticClass:"form"},[a("p",[a("span",[e._v("单位名称：")]),a("i",{attrs:{title:e.afterAudit.companyName}},[e._v(e._s(e.afterAudit.companyName))])]),e._v(" "),a("p",[a("span",[e._v("统一社会代码：")]),a("i",{attrs:{title:e.afterAudit.companyCode}},[e._v(e._s(e.afterAudit.companyCode))])]),e._v(" "),a("p",[a("span",[e._v("单位所在地： ")]),a("i",{attrs:{title:e.afterAudit.addressName}},[e._v(e._s(e.afterAudit.addressName))])]),e._v(" "),a("p",[a("span",[e._v("单位地址：")]),a("i",{attrs:{title:e.afterAudit.addressDetail}},[e._v(e._s(e.afterAudit.addressDetail))])]),e._v(" "),a("p",[a("span",[e._v("所属行业：")]),a("i",{attrs:{title:e.afterAudit.industryName}},[e._v(e._s(e.afterAudit.industryName))])]),e._v(" "),a("p",[a("span",[e._v("单位性质：")]),a("i",{attrs:{title:e.afterAudit.propertyName}},[e._v(e._s(e.afterAudit.propertyName))])]),e._v(" "),a("p",[a("span",[e._v("单位规模：")]),a("i",{attrs:{title:e.afterAudit.scaleName}},[e._v(e._s(e.afterAudit.scaleName))])]),e._v(" "),a("p",[a("span",[e._v("单位标签：")]),a("i",{attrs:{title:e.afterAudit.labelName}},[e._v(e._s(e.afterAudit.labelName))])]),e._v(" "),a("p",[a("span",[e._v("联系人：")]),a("i",{attrs:{title:e.afterAudit.contactPeople}},[e._v(e._s(e.afterAudit.contactPeople))])]),e._v(" "),a("p",[a("span",[e._v("手机号：")]),a("i",{attrs:{title:e.afterAudit.contactPhone}},[e._v(e._s(e.afterAudit.contactPhone))])]),e._v(" "),a("p",[a("span",[e._v("单位电话：")]),a("i",{attrs:{title:e.afterAudit.officePhone}},[e._v(e._s(e.afterAudit.officePhone))])]),e._v(" "),a("p",[a("span",[e._v("单位传真：")]),a("i",{attrs:{title:e.afterAudit.fax}},[e._v(e._s(e.afterAudit.fax))])]),e._v(" "),a("p",[a("span",[e._v("单位邮编：")]),a("i",{attrs:{title:e.afterAudit.postcode}},[e._v(e._s(e.afterAudit.postcode))])]),e._v(" "),a("p",[a("span",[e._v("单位网址：")]),a("i",{attrs:{title:e.afterAudit.companyUrl}},[e._v(e._s(e.afterAudit.companyUrl))])]),e._v(" "),a("p",[a("span",[e._v("单位介绍：")]),a("i",{attrs:{title:e.afterAudit.summary}},[e._v(e._s(e.afterAudit.summary))])]),e._v(" "),a("p",[a("span",[e._v("发票抬头")]),a("i",{attrs:{title:e.afterAudit.invoiceTitle}},[e._v(e._s(e.afterAudit.invoiceTitle))])]),e._v(" "),a("p",[a("span",[e._v("纳税人识别号：")]),a("i",{attrs:{title:e.afterAudit.taxpayerNumber}},[e._v(e._s(e.afterAudit.taxpayerNumber))])]),e._v(" "),a("p",[a("span",[e._v("公司法人代表：")]),a("i",{attrs:{title:e.afterAudit.companyRepresentative}},[e._v(e._s(e.afterAudit.companyRepresentative))])]),e._v(" "),a("p",[a("span",[e._v("注册资金：")]),a("i",{attrs:{title:e.afterAudit.registeredCapital}},[e._v(e._s(e.afterAudit.registeredCapital))])]),e._v(" "),a("p",[a("span",[e._v("单位成立日期：")]),a("i",{attrs:{title:e.afterAudit.companyCreateTime}},[e._v(e._s(e.afterAudit.companyCreateTime))])]),e._v(" "),a("p",[a("span",[e._v("营业执照：")]),e.afterAudit.license?a("img",{attrs:{src:"/upload/storage/images/"+e.afterAudit.license}}):e._e()]),e._v(" "),a("p",[a("span",[e._v("营业执照到期时间：")]),a("i",[e._v(e._s(e.afterAudit.isLong?"永久":e.afterAudit.licenseTime))])])])]):e._e()]),e._v(" "),e.showChange?a("div",{staticClass:"auditAll box"},[a("div",{staticClass:"before"},[a("h1",[e._v("审核前")]),e._v(" "),a("div",{staticClass:"form"},e._l(e.beforeList,function(t,i){return a("p",{key:i},[a("span",[e._v(e._s(t.fieldChineseName)+"：")]),e._v(" "),"license"!=t.fieldName?a("i",[e._v(e._s(t.value))]):a("img",{attrs:{src:"/upload/storage/images/"+t.value,alt:""}})])}),0)]),e._v(" "),a("div",{staticClass:"after"},[a("h1",[e._v("审核后")]),e._v(" "),a("div",{staticClass:"form"},e._l(e.afterList,function(t,i){return a("p",{key:i},[a("span",[e._v(e._s(t.fieldChineseName)+"：")]),e._v(" "),"license"!=t.fieldName?a("i",[e._v(e._s(t.value))]):a("img",{attrs:{src:"/upload/storage/images/"+t.value,alt:""}})])}),0)])]):e._e()])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("h1",{staticClass:"clearfix"},[t("span",[this._v("单位信息审核")])])])}]};var d=a("Mz/3")(f,m,!1,function(e){a("OJnU"),a("PTPo")},"data-v-1f8d2ac6",null);t.default=d.exports}});