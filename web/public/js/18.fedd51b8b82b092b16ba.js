webpackJsonp([18],{Dsss:function(t,e){},JUJb:function(t,e,a){"use strict";var s=a("UIuv"),n=a.n(s),o=a("C331");e.a={data:function(){return{statusUrl:"/api/async/exports/exportStatus/",exportCode:""}},methods:{exportFile:function(t,e,a){var s=this;return new n.a(function(n,i){s.$waiting.show({text:"正在导出...(导出时间跟学生数量相关，请耐心等待)",container:"body"}),Object(o.c)(t,e,a).then(function(t){if(t.state){s.exportCode=t.data;var e=s;!function t(){Object(o.c)(e.statusUrl+e.exportCode).then(function(a){e.$waiting.close(),a.data&&a.data.fileName?n(a):a.data?(e.$waiting.show({text:"正在导出...("+parseInt(a.data.hadSearchCount/a.data.count*100)+"%)",container:"body"}),setTimeout(t,2e3)):(e.$toast(a.message),i(a))})}()}})})},getExportStatus:function(){}}}},X2le:function(t,e,a){"use strict";(function(t){var e=a("Edqs"),s=(a.n(e),a("3SZ7")),n=(a.n(s),a("u6qr")),o=(a.n(n),a("wHeh")),i=(a("C331"),a("7CEZ")),l=a("JUJb"),c=a("1nys"),r=(a.n(c),a("syjK"));o.default.component("FormSetManage",i.default),o.default.component("studentExportSet",r.a);l.a}).call(e,a("W14+"))},ouWT:function(t,e){},r37U:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("X2le");var s=a("wCl9"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-set-container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:"main"===t.layoutManageJson.route,expression:"layoutManageJson.route === 'main'"}],staticClass:"student-manage-page",attrs:{id:t.pageId}},[a("div",{staticClass:"tab-div"},[a("div",{staticClass:"tab",class:t.inSchool?"active":"",attrs:{title:"在校生信息"},on:{click:function(e){return t.setInSchool(!0)}}},[t._v("在校生信息")]),t._v(" "),a("div",{staticClass:"tab",class:t.inSchool?"":"active",attrs:{title:"非在校生信息"},on:{click:function(e){return t.setInSchool(!1)}}},[t._v("非在校生信息")])]),t._v(" "),a("div",{staticClass:"content text-center"},[a("v-table",{ref:"studentTable",attrs:{title:t.tableName,url:t.url,method:t.method,pagesize:"15",idField:"id",columns:t.columns,order:!0,search:!1,searchParams:t.definedSearch,columnsControl:!0}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},["school"===t.role?a("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",on:{click:t._toExportManage}},[t._v("\n            导出管理\n          ")]):t._e(),t._v(" "),"school"===t.role?a("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",on:{click:t._toJournal}},[t._v("\n            日志\n          ")]):t._e(),t._v(" "),"school"===t.role?a("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",on:{click:t._showEducationLevelModal}},[t._v(t._s(t.translate.layoutManage))]):t._e(),t._v(" "),a("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",on:{click:function(e){return t.showSearch()}}},[t._v(t._s(t.translate.advancedSearch))]),t._v(" "),a("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",on:{click:t.showExportModal}},[t._v(t._s(t.translate.export))]),t._v(" "),a("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",on:{click:function(e){t.exportStat.show=!0}}},[t._v(t._s(t.translate.exportStat))])])])],1),t._v(" "),a("v-modal",{attrs:{show:t.advancedSearch.show,effect:"fade",width:"720"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.translate.advancedSearch))])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[t._l(t.advancedSearch.searchItems,function(e,s){return a("div",{key:"search-item-"+s,staticClass:"form-group advancedSearch-group"},[a("v-select",{attrs:{options:t.advancedSearch.columns,value:e.key,search:!0,"data-index":s},on:{afterSelected:t.advancedSearchKeySelected}}),t._v(" "),a("v-select",{attrs:{options:e.options.relation,value:e.relation,search:!0,"data-index":s},on:{afterSelected:t.advancedSearchRelationSelected}}),t._v(" "),e.isDict?a("v-select",{attrs:{options:e.options.dictOptions,value:e.value,optionsLabel:"text",optionsValue:"id",search:!0,multiple:!0,"data-index":s},on:{afterSelected:t.advancedSearchValueSelected}}):t._e(),t._v(" "),e.isAddress?a("v-select",{attrs:{options:e.options.province,value:e.province,optionsLabel:"text",optionsValue:"id",search:!0,multiple:!0,"data-index":s},on:{afterSelected:t.advancedSearchProvinceSelected}}):t._e(),t._v(" "),e.isSelectProvince?a("v-select",{attrs:{options:e.options.city,value:e.city,optionsLabel:"text",optionsValue:"id",search:!0,multiple:!0,"data-index":s},on:{afterSelected:t.advancedSearchCitySelected}}):t._e(),t._v(" "),e.isSelectCity?a("v-select",{attrs:{options:e.options.county,value:e.county,optionsLabel:"text",optionsValue:"id",search:!0,multiple:!0,"data-index":s},on:{afterSelected:t.advancedSearchCountySelected}}):t._e(),t._v(" "),e.isDate?a("v-datepicker",{ref:"datepicker",refInFor:!0,staticClass:"btn-block time-picker value-datepicker",attrs:{value:e.value,clearButton:!1,showTime:!1,"data-index":s},on:{daySelected:t.advancedSearchDateValue}}):t._e(),t._v(" "),e.isInput?a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"searchItem.value"}],staticClass:"value-input",attrs:{type:"text"},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}}):t._e(),t._v(" "),a("button",{staticClass:"btn deleteBtn clearBtnBorder",attrs:{type:"button","data-index":s},on:{click:function(e){return t.deleteSearchItem(s)}}},[t._v(t._s(t.translate.remove))])],1)}),t._v(" "),a("button",{staticClass:"btn addBtn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){return t.addSearchItem()}}},[t._v(t._s(t.translate.addNew))])],2),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){return t.resetSearchItem()}}},[t._v(t._s(t.translate.reset))]),t._v(" "),a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.advancedSearch.show=!1}}},[t._v(t._s(t.translate.cancel))]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",class:{disabled:t.isDisabled},attrs:{type:"button"},on:{click:function(e){return t.execAdvancedSearch()}}},[t._v(t._s(t.translate.search))])])]),t._v(" "),a("v-modal",{attrs:{show:t.showExport,effect:"fade"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.translate.export))])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("v-tree",{ref:"tree",attrs:{id:"resourceTree",cascade:"true",items:t.fieldsToExport,checkable:!0,search:!0}})],1),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("div",{staticClass:"input-group merge-table pull-left flex-align-center"},[a("span",{on:{click:function(e){t.isMergeTable=!t.isMergeTable}}},[t.isMergeTable?a("i",{staticClass:"maticon role-icon active",domProps:{innerHTML:t._s(t.icons("check_box"))}},[t._v("check_box")]):a("i",{staticClass:"maticon role-icon",domProps:{innerHTML:t._s(t.icons("check_box_outline_blank"))}},[t._v("check_box_outline_blank")])]),t._v(" "),a("span",{staticClass:"role-name"},[t._v("是否将勾选的字段合并在同个表格")])]),t._v(" "),a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.showExport=!1}}},[t._v(t._s(t.translate.cancel))]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t.exportTable}},[t._v(t._s(t.exportStatus))])])]),t._v(" "),a("v-modal",{attrs:{show:t.exportStat.show,effect:"fade"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.translate.exportStat))])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("v-select",{attrs:{multiple:!0,placeholder:"全部",options:t.exportStat.collegeOptions,"options-label":"text","options-value":"id"},on:{afterSelected:t.selectExportStatCollege}})],1),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.exportStat.show=!1}}},[t._v(t._s(t.translate.cancel))]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t.exportStatToFile}},[t._v(t._s(t.exportStat.exporting?"导出中":"导出"))])])]),t._v(" "),a("v-modal",{attrs:{show:t.layoutManageJson.educationLevelShow,effect:"fade"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n          请选择需要配置展示布局的培养层次群体\n          ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("v-select",{attrs:{placeholder:"全部",options:t.layoutManageJson.educationLevelOptions,"options-label":"label","options-value":"value"},model:{value:t.layoutManageJson.educationLevel,callback:function(e){t.$set(t.layoutManageJson,"educationLevel",e)},expression:"layoutManageJson.educationLevel"}})],1),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.layoutManageJson.educationLevelShow=!1}}},[t._v(t._s(t.translate.cancel))]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){return t._setLayout()}}},[t._v(t._s(t.translate.startSet))])])])],1),t._v(" "),"main"!==t.layoutManageJson.route?a("FormSetManage",{directives:[{name:"show",rawName:"v-show",value:"formSetManage"===t.layoutManageJson.route,expression:"layoutManageJson.route === 'formSetManage'"}],attrs:{infoSetting:{type:"STUDENT",educationLevel:t.layoutManageJson.educationLevel,tabs:t.layoutManageJson.infoTypes},student:t.studentBie},on:{back:t._closeFormSetting,submit:t._saveFormInfo,addNewFenlei:t._newFenlei,remove:t._removeFenlei,gotoRoleSet:function(e){t.layoutManageJson.route="joinRoleSet"}}}):t._e(),t._v(" "),"exportSet"===t.layoutManageJson.route?a("studentExportSet"):t._e(),t._v(" "),"joinRoleSet"===t.layoutManageJson.route?a("JoinRoleSetManage",{attrs:{roleSetting:{type:"STUDENT",educationLevel:t.layoutManageJson.educationLevel}},on:{back:function(e){t.layoutManageJson.route="formSetManage"},submit:t._saveRoles}}):t._e(),t._v(" "),t.layoutManageJson.preview?a("div",{staticClass:"preview-container"},[a("preview",{attrs:{set:t.sssssss,data:t.layoutManageJson.layoutsJson[t.layoutManageJson.curInfoId]&&t.layoutManageJson.layoutsJson[t.layoutManageJson.curInfoId].components,defaultData:t.layoutManageJson.instanceJson[t.layoutManageJson.curInfoId],log:t.layoutManageJson.logsJson[t.layoutManageJson.curInfoId],script:t.layoutManageJson.layoutsJson[t.layoutManageJson.curInfoId]&&t.layoutManageJson.layoutsJson[t.layoutManageJson.curInfoId].property&&t.layoutManageJson.layoutsJson[t.layoutManageJson.curInfoId].property.script,previewType:"form",infoSetting:{tabs:t.layoutManageJson.infoTypes,curInfoId:t.layoutManageJson.curInfoId}},on:{tabExchange:t._initInfoType,submit:t._getInfoValue,submitAll:t._submitAll,search:function(e){return t._getInfoTypes(null,e)},back:function(e){t.layoutManageJson.preview=!1}}})],1):t._e()],1)},staticRenderFns:[]};var o=function(t){a("ouWT")},i=a("Mz/3")(s.a,n,!1,o,null,null);e.default=i.exports},syjK:function(t,e,a){"use strict";a("wHeh");var s=a("C331"),n={data:function(){return{fieldList:[],exportNum:{SCHOOL:0,INSTRUCTOR:0,COLLEGE:0},distributaryData:[{name:"全校统一汇总",id:"SCHOOL"},{name:"以带生关系分配",id:"INSTRUCTOR"},{name:"以学院关系分配",id:"COLLEGE"}],typeList:["SCHOOL","COLLEGE","INSTRUCTOR"],keywords:{SCHOOL:"",COLLEGE:"",INSTRUCTOR:""},collegeExportNum:0,schoolExportNum:0,instructorExportNum:0}},created:function(){var t=localStorage.getItem("lang");Object(s.f)(t)&&(this.lang=t),this.getList()},computed:{translate:function(){return Object(s.f)(this.lang).infoManage}},methods:{getList:function(){var t=this;Object(s.c)("api/data/column/roles").then(function(e){e.state?t.fieldList=e.data.map(function(e){for(var a in t.typeList)e.canExport[t.typeList[a]]?t.exportNum[t.typeList[a]]++:e.canExport[t.typeList[a]]=!1;return e}):t.$toast(e.message)})},setExportAll:function(t){this.hasChange=!0,this.exportNum[t]=this.fieldList.length,this.fieldList=this.fieldList.map(function(e){return e.canExport[t]=!0,e})},setUnExportAll:function(t){this.hasChange=!0,this.exportNum[t]=0,this.fieldList=this.fieldList.map(function(e){return e.canExport[t]=!1,e})},setExport:function(t,e,a){this.hasChange=!0,t.canExport[a]?this.exportNum[a]--:this.exportNum[a]++,t.canExport[a]=!t.canExport[a]},_back:function(){this.hasChange&&confirm("当前设置不会生效，是否退出?")?this.$parent._closeFormSetting():this.hasChange||this.$parent._closeFormSetting()},_saveExportSet:function(){var t=this;if(confirm("是否保存?")){var e={flowType:"COLLEGE",columnIds:[]},a={flowType:"SCHOOL",columnIds:[]},n={flowType:"INSTRUCTOR",columnIds:[]};this.fieldList.map(function(t){t.canExport.SCHOOL&&a.columnIds.push(t.id),t.canExport.COLLEGE&&e.columnIds.push(t.id),t.canExport.INSTRUCTOR&&n.columnIds.push(t.id)});var o=[e,a,n];Object(s.c)("api/data/column/roles",o).then(function(e){e.state&&(t.hasChange=!1,t.$toast("保存成功!"))})}}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"studentExportSet_wrap"},[a("div",{staticClass:"head text-center"},[a("div",{staticClass:"pull-left back-div"},[a("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("arrow_back"))},on:{click:t._back}},[t._v("arrow_back")])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"pull-right opt-div"},[a("a",{staticClass:"opt-btn",attrs:{href:"javascript:;"},on:{click:t._back}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn save",on:{click:t._saveExportSet}},[t._v("保存")])])]),t._v(" "),a("div",{staticClass:"join-set-content"},[a("GeminiScrollbar",{staticClass:"info-container",attrs:{scrollY:!1,autoshow:!0}},t._l(t.typeList,function(e,s){return a("div",{key:s,staticClass:"col other-col box_flex inline_flex column"},[a("div",{staticClass:"form-group flex_shrink"},[a("i",{staticClass:"maticon pull-left app-icon black-color",domProps:{innerHTML:t._s(t.icons("label"))}},[t._v("label")]),t._v(" "),a("div",{staticClass:"form-group-input pull-left"},[a("label",{staticClass:"name-label light-black-color"},[t._v("参与者名称")]),t._v(" "),"INSTRUCTOR"===e?a("input",{staticClass:"form-control name-input border-bottom-blue black-color",attrs:{type:"text",disabled:"true",maxlength:"25",value:"辅导员"}}):t._e(),t._v(" "),"COLLEGE"===e?a("input",{staticClass:"form-control name-input border-bottom-blue black-color",attrs:{type:"text",disabled:"true",maxlength:"25",value:"学院"}}):t._e(),t._v(" "),"SCHOOL"===e?a("input",{staticClass:"form-control name-input border-bottom-blue black-color",attrs:{type:"text",disabled:"true",maxlength:"25",value:"学校"}}):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("i",{staticClass:"maticon pull-left app-icon black-color",domProps:{innerHTML:t._s(t.icons("call_split"))}},[t._v("call_split")]),t._v(" "),a("div",{staticClass:"form-group-input pull-left"},[a("label",{staticClass:"name-label light-black-color"},[t._v("分配方式")]),t._v(" "),a("div",{staticClass:"distribution-select"},[a("v-select",{attrs:{autoSelect:!1,options:t.distributaryData,value:e,"options-value":"id","options-label":"name",disabled:"true"}})],1)])]),t._v(" "),a("div",{staticClass:"form-group clear-padding-bottom clear-bord-bottom"},[a("div",{staticClass:"participant-read-write-header",staticStyle:{height:"85px"}},[a("i",{staticClass:"maticon app-icon black-color",domProps:{innerHTML:t._s(t.icons("visibility"))}},[t._v("visibility")]),t._v(" "),a("label",{staticClass:"read-write-label light-black-color"},[t._v("搜索")]),t._v(" "),a("div",{staticClass:"form-group-input",staticStyle:{"margin-left":"71px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords[e],expression:"keywords[item]"}],staticClass:"name-input border-bottom-blue black-color",attrs:{type:"text",placeholder:"请输入关键字"},domProps:{value:t.keywords[e]},on:{input:function(a){a.target.composing||t.$set(t.keywords,e,a.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"role-list grow_1"},[a("div",{staticClass:"role-list-item margin-bottom-5px",staticStyle:{height:"100%"}},[a("div",{staticClass:"margin-left-70px"},[a("div",{staticClass:"input-group select_top box_flex align_center",staticStyle:{"justify-content":"flex-end","padding-right":"100px"}},[0===t.exportNum[e]?a("i",{staticClass:"maticon role-icon white-color",domProps:{innerHTML:t._s(t.icons("check_box_outline_blank"))},on:{click:function(a){return t.setExportAll(e)}}},[t._v("check_box_outline_blank")]):t.exportNum[e]===t.fieldList.length?a("i",{staticClass:"maticon role-icon white-color active",domProps:{innerHTML:t._s(t.icons("check_box"))},on:{click:function(a){return t.setUnExportAll(e)}}},[t._v("check_box")]):a("i",{staticClass:"maticon role-icon white-color",domProps:{innerHTML:t._s(t.icons("indeterminate_check_box"))},on:{click:function(a){return t.setUnExportAll(e)}}},[t._v("indeterminate_check_box")]),t._v(" "),a("span",{staticClass:"role-name white-color"},[t._v("全部允许导出")])])]),t._v(" "),a("GeminiScrollbar",{staticClass:"list_wrap",staticStyle:{overflow:"scroll",height:"100%"}},t._l(t.fieldList,function(s,n){return-1!==s.columnName.indexOf(t.keywords[e])?a("div",{key:n,staticClass:"role-list-item"},[a("div",{staticClass:"margin-left-70px",on:{click:function(a){return t.setExport(s,n,e)}}},[a("div",{staticClass:"col-xs-5"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"data-authorities-name white-color",attrs:{title:s.columnName}},[t._v(t._s(s.columnName))])])]),t._v(" "),a("div",{staticClass:"col-xs-7 box_flex flex_center"},[a("span",{staticClass:"operator",class:s.canExport[e]?"active":""},[t._v("允许导出")])])])]):t._e()}),0)],1)])])}),0)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flow-title"},[e("div",{staticClass:"input-group"},[e("label",{staticClass:"page-name"},[this._v("权限管理")])])])}]};var i=a("Mz/3")(n,o,!1,function(t){a("Dsss")},"data-v-295abcc2",null);e.a=i.exports},wCl9:function(t,e,a){"use strict";(function(t){var s=a("Edqs"),n=a.n(s),o=a("3SZ7"),i=a.n(o),l=a("u6qr"),c=a.n(l),r=a("wHeh"),d=a("C331"),u=a("7CEZ"),h=a("JUJb"),p=a("1nys"),v=(a.n(p),a("syjK"));r.default.component("FormSetManage",u.default),r.default.component("studentExportSet",v.a),e.a={mixins:[h.a],props:{data:{default:null},role:{default:""},xiaostatuszai:{default:null}},created:function(){var t=this;1!=this.xiaostatuszai&&0!=this.xiaostatuszai||(this.xiaoxiao=!0);var e=localStorage.getItem("lang"),a=this;Object(d.d)({url:"/api/system/dicts?dictType=培养层次",dataType:"json",type:"get",async:!1,success:function(t){t.state&&(a.educationLevels=t.data)}}),Object(d.d)({url:"/api/student/manage/manageStudents/schoolStatus?inSchool="+this.inSchool+"&type="+this.role,dataType:"json",type:"get",async:!1,success:function(t){t.state&&(a.schoolStatusArr=t.data)}}),Object(d.f)(e)&&(this.lang=e),this.definedSearch.type=this.role,this.getStuTree(),Object(d.d)({url:"/api/student/manage/getSelectOptions?type="+this.definedSearch.type,dataType:"json",type:"get",success:function(t){var e=t.data;t.state&&(a.normalSearchOptions.collegeOptions=e.colleges||[],a.exportStat.collegeOptions=e.colleges||[],a.normalSearchOptions.gradeOptions=e.grade||[],a.normalSearchOptions.studentTypeOptions=e.studentType||[],a._initColumns())}}),0===this.layoutManageJson.educationLevelOptions.length&&(this.$waiting.show(),Object(d.d)({url:"/api/system/dicts?dictType=培养层次",type:"get",success:function(e){e.state?t.layoutManageJson.educationLevelOptions=e.data:t.$toast(e.message)}}).always(function(){t.$waiting.close()})),this._initColumns()},data:function(){return{isMergeTable:!1,xiaoxiao:!1,inSchool:!0,allSelectDefaultOptions:1,allSelectLei:[],studentBie:!0,educationLevels:[],schoolStatusArr:[],columns:[],url:"",method:"get",definedSearch:{searchDTOS:[],type:"",studentId:"",studentName:"",college:"",studentType:"",grade:"",phoneNumber:"",isAdvancedSearch:!1,educationLevel:"",schoolStatus:""},normalSearchOptions:{gradeOptions:[],studentTypeOptions:[],collegeOptions:[]},advancedSearch:{show:!1,initialized:!1,searchItems:[],tables:{},tableKeys:{},tableOptions:[],keys:{},typeOptions:[{value:"and",label:"且"},{value:"or",label:"或"}],defaultType:"and",optionKeys:{},columns:[]},newSearchCondition:{searchOptionsText:"学号",requirementOptionsText:"等于",inputText:"",relationOptionsText:"并且"},newSearchArray:[],newSearchData:[],searchParameters:{key:"studentId",relation:"eq",value:"",tableName:"",type:"and"},searchDots:[],isSelect:!1,isClearArray:!0,isClearSearchData:!1,lang:"zh-cn",exportStat:{show:!1,exporting:!1,collegeOptions:[],collegeCodeList:[]},showExport:!1,fieldsToExport:[],exporting:!1,student:{name:""},isDisabled:!1,layoutManageJson:{educationLevelOptions:[],educationLevelShow:!1,educationLevel:"",infoTypes:[],route:"main",layoutsJson:{},logsJson:{},instanceJson:{},preview:!1,curInfoId:""}}},computed:{translate:function(){return Object(d.f)(this.lang).infoManage},exportStatus:function(){return this.exporting?"导出中":this.translate.export},tableName:function(){return"school"===this.role?this.translate.schoolStudentManage:"college"===this.role?this.translate.collegeStudentManage:this.translate.myStudentManage},pageId:function(){return"student-manage-page-"+this.role},distributary:function(){return"school"===this.role?"bySchool":"college"===this.role?"byCollege":"byTeacher"}},watch:{inSchool:function(){this.method="get",this.url="/table-data/student/manage/manageStudents/"+this.role+"?inSchool="+this.inSchool}},methods:{showExportModal:function(){this.fieldsToExport.length>0?this.showExport=!0:this.$toast("无导出权限，请联系校级管理员修改权限")},getStuTree:function(){var t=this;Object(d.d)({url:"/api/student/manage/getTree/"+("myManage"==this.role?"INSTRUCTOR":this.role.toUpperCase())+"?timeStamp="+(new Date).getTime(),dataType:"json",type:"get",success:function(e){var a=e.data;if(e.state){var s=[];a.forEach(function(t){var e={id:t.id,title:t.name,edit:!1,children:[]};t.childrens.forEach(function(a){e.children.push({id:a.id,title:a.name,disabled:!1,meta:!0,data:{typeId:t.id,fieldType:a.fieldType,fieldId:a.id}})}),s.push(e)}),t.fieldsToExport=s}}})},_closeFormSetting:function(){this.layoutManageJson.route="main",this.getStuTree(),this.$emit("fullScreen",!1)},_resetLayoutManageJson:function(){this.layoutManageJson.layoutsJson={},this.layoutManageJson.logsJson={},this.layoutManageJson.instanceJson={},this.layoutManageJson.curInfoId=""},_toExportManage:function(){this.layoutManageJson.route="exportSet",this.$emit("fullScreen",!0)},_toJournal:function(){this.$addBread({route:"/document/studentInfoJournal",title:"日志"})},_showEducationLevelModal:function(){this.layoutManageJson.educationLevelShow=!0},_setLayout:function(){var t=this;this.layoutManageJson.educationLevelShow=!1,0===this.layoutManageJson.infoTypes.length?this._getInfoTypes(function(){t.layoutManageJson.route="formSetManage",t.$emit("fullScreen",!0)}):(this.layoutManageJson.route="formSetManage",this.$emit("fullScreen",!0))},_getInfoTypes:function(t,e){var a=this;this.$waiting.show(),Object(d.d)({url:"/api/information/columnTypes/STUDENT",type:"get",data:{educationLevel:this.layoutManageJson.educationLevel,searchContent:e},success:function(e){e.state?e.data&&e.data.length>0?(a.layoutManageJson.infoTypes=e.data||[],a.layoutManageJson.infoTypes.forEach(function(t){a.$set(t,"title",t.text)}),t&&t()):a.$toast(a.translate.nullColumnTypesTip):a.$toast(e.message)}}).always(function(){a.$waiting.close()})},_newFenlei:function(t){var e=this;Object(d.d)({url:"/api/data/column/infoType",dataType:"json",type:"POST",data:{title:t,type:"student"},success:function(t){t.state?e.layoutManageJson.infoTypes.push(t.data):e.$toast(t.message)}})},_removeFenlei:function(t){Object(d.d)({url:"/api/data/column/infoType/"+t,dataType:"json",type:"DELETE",success:function(t){}})},_saveFormInfo:function(t){var e=this;t.length>0?(this.$waiting.show(),Object(d.d)({url:"/api/information/infoSettings/STUDENT",type:"put",data:{educationLevel:this.layoutManageJson.educationLevel,infoTypes:t},success:function(t){t.state?(e.layoutManageJson.route="main",e.$toast(e.translate.successTip)):e.$toast(t.message)}}).always(function(){e.$waiting.close()})):(this.layoutManageJson.route="main",this.$toast(this.translate.successTip))},_saveRoles:function(t){var e=this;Object(d.d)({url:"/api/information/player/"+t.type,type:"put",data:{players:t.players,educationLevel:t.educationLevel},success:function(t){t.state?(e.$toast(e.translate.successTip),e.layoutManageJson.route="formSetManage"):e.$toast(t.message)}})},_initInfoType:function(t){var e=this;t&&(this.layoutManageJson.layoutsJson[t.id]&&this.layoutManageJson.logsJson?this.layoutManageJson.curInfoId=t.id:Object(d.d)({url:"/api/information/infoSetting/STUDENT/"+t.id,type:"get",data:{userId:this.student.userId,distributary:this.distributary},success:function(a){a.state?(a.data||(a.data={components:[]}),a.data.components.forEach(function(t){r.default.set(t,"x",t.location.left),r.default.set(t,"y",t.location.top),r.default.set(t,"w",t.size.width),r.default.set(t,"h",t.size.height)}),e.$set(e.layoutManageJson.layoutsJson,t.id,a.data),e.layoutManageJson.curInfoId=t.id,Object(d.d)({url:"/api/information/infoInstance/changeLogs/STUDENT/"+t.id,type:"get",data:{userId:e.student.userId},success:function(a){a.state?(e.$set(e.layoutManageJson.logsJson,t.id,a.data||[]),e.layoutManageJson.preview=!0):e.$toast(a.message)}})):e.$toast(a.message)}}))},_getInfoValue:function(t){this.$set(this.layoutManageJson.instanceJson,this.layoutManageJson.curInfoId,t)},_submitAll:function(){var t=this;this.$waiting.show();var e=[];for(var a in this.layoutManageJson.instanceJson)e.push({infoId:a,formData:this.layoutManageJson.instanceJson[a].formData});var s={typesValue:e};switch(this.tableName){case"全校学生信息":s.source="SCHOOL";break;case"本院学生信息":s.source="COLLEGE";break;case"分管学生信息":s.source="INSTRUCTOR_MANAGE";break;default:s.source="undefined"}Object(d.d)({url:"/api/information/infoInstance/STUDENT/"+this.distributary+"/"+this.student.userId,type:"put",data:s,success:function(e){e.state?(t.$toast(t.translate.successTip),t.layoutManageJson.instanceJson={},t.layoutManageJson.preview=!1):t.$toast(e.message)}}).always(function(){t.$waiting.close()})},_initColumns:function(){var t=this;this.columns=[{id:"studentId",title:this.translate.infoFields.studentId,className:"text-left",width:120,hidden:!1,search:{type:"input",data:{placeholder:this.translate.studentIdPlaceholder}}},{id:"name",title:this.translate.infoFields.name,className:"text-left",width:80,hidden:!1,search:{type:"input",data:{placeholder:this.translate.namePlaceholder}}},{id:"college",title:this.translate.infoFields.collegeName,className:"text-left",width:120,hidden:!1,search:{type:"multiSelect",data:{options:this.normalSearchOptions.collegeOptions,optionsLabel:"text",optionsValue:"id",placeholder:""}}},{id:"educationLevel",title:"培养层次",className:"text-left",width:100,hidden:!1,search:{type:"multiSelect",data:{options:this.educationLevels,optionsLabel:"label",optionsValue:"value"}}},{id:"grade",title:this.translate.infoFields.grade,className:"text-left",width:50,hidden:!1,search:{type:"multiSelect",data:{options:this.normalSearchOptions.gradeOptions,optionsLabel:"text",optionsValue:"id",placeholder:""}}},{id:"clazz",title:"班级",className:"text-left",width:120,hidden:!0,search:{type:"select",data:{url:"/api/relClass/classes/list",optionsLabel:"text",optionsValue:"id",placeholder:""}},formatter:function(t){return t.clazzName}},{id:"phoneNumber",title:this.translate.infoFields.phoneNumber,className:"text-center",width:120,hidden:!1,search:{type:"input",data:{placeholder:this.translate.phoneNumber}},formatter:function(t,e){return t.phone}},{id:"instructor",title:this.translate.infoFields.instructor,className:"text-left",width:80,hidden:!1},{id:"originPlace",title:this.translate.infoFields.originPlace,className:"text-left",width:120,hidden:!1,search:{type:"input",data:{placeholder:this.translate.phoneNumber}}},{id:"schoolStatus",title:"当前状态",className:"text-left",width:120,hidden:!0,search:{type:"multiSelect",data:{options:this.schoolStatusArr,optionsLabel:"label",optionsValue:"value",placeholder:""}}},{id:"idCard",title:"身份证号",className:"text-left",width:120,hidden:!0,search:{type:"input",data:{placeholder:this.translate.studentIdPlaceholder}}},{id:"opt",title:this.translate.opt,className:"text-center",width:120,hidden:!1,formatter:function(){return[{tag:"a",text:t.translate.show,className:"opt-btn",callback:function(e,a){t._resetLayoutManageJson(),t.student=e,t.layoutManageJson.infoTypes.length>0?t._initInfoType(t.layoutManageJson.infoTypes[0]):t._getInfoTypes(function(){t._initInfoType(t.layoutManageJson.infoTypes[0])})}}]}}],this.url="/table-data/student/manage/manageStudents/"+this.role+"?inSchool="+this.inSchool},initAdvancedSearchTableKeys:function(){var t=this;Object(d.d)({url:"/api/student/manage/advance/columns",type:"get",success:function(e){if(e.state){t.advancedSearch.columns=[];var a=!0,s=!1,n=void 0;try{for(var o,i=c()(e.data);!(a=(o=i.next()).done);a=!0){var l=o.value,r=l.columnId;t.advancedSearch.optionKeys[r]=l,t.advancedSearch.columns.push({value:r,label:l.keyName+"("+l.typeTitle+")"})}}catch(t){s=!0,n=t}finally{try{!a&&i.return&&i.return()}finally{if(s)throw n}}}else t.$toast(e.message)}})},showSearch:function(){this.advancedSearch.show=!0,this.initAdvancedSearchTableKeys()},addSearchItem:function(){var t=[],e=this.advancedSearch.columns[0].value,a=this.advancedSearch.optionKeys[e].options;for(var s in a)t.push({value:s,label:a[s]});this.advancedSearch.searchItems.push({key:this.advancedSearch.columns[0].value,relation:t[0].value,value:null,options:{relation:t,dictOptions:[],province:[],city:[],county:[]},isDict:!1,isAddress:!1,isSelectProvince:!1,isSelectCity:!1,isDate:!1,isInput:!1,province:null,city:null,county:null})},deleteSearchItem:function(t){this.advancedSearch.searchItems.splice(t,1)},resetSearchItem:function(){this.advancedSearch.searchItems=[]},advancedSearchKeySelected:function(t){var e=this,a=parseInt(t.target.$attrs["data-index"]),s=this.advancedSearch.searchItems[a];if(s.key=t.val,!t.val)return s.relation=null,void(s.options.relation=[]);var n=this.advancedSearch.optionKeys[s.key];for(var o in s.options.relation=[],n.options)s.options.relation.push({value:o,label:n.options[o]});s.isSelectProvince=!1,s.isSelectCity=!1,s.isAddress=!1,s.isDict=!1,s.isInput=!1,s.isAddress="Address"===n.fieldType,s.isAddress||(s.isDict=!0===n.select),s.isDate="Date"===n.fieldType,s.isDict||s.isAddress||s.isDate||(s.isInput=!0),(s.isAddress||s.isDict)&&Object(d.d)({url:"/api/student/manage/advance/dict/"+s.key,type:"get",success:function(t){t.state?s.isAddress?s.options.province=t.data:s.options.dictOptions=t.data:e.$toast(t.message)}})},advancedSearchRelationSelected:function(t){var e=parseInt(t.target.$attrs["data-index"]);this.advancedSearch.searchItems[e].relation=t.val},advancedSearchValueSelected:function(t){var e=parseInt(t.target.$attrs["data-index"]);this.advancedSearch.searchItems[e].value=t.val},advancedSearchProvinceSelected:function(t){var e=this,a=parseInt(t.target.$attrs["data-index"]),s=this.advancedSearch.searchItems[a];s.province=t.val,s.province?(s.options.city=[],s.isSelectProvince=!0,s.options.county=[],Object(d.d)({url:"/api/student/manage/advance/city?provinceValues="+t.val,type:"get",success:function(t){t.state?s.options.city=t.data:e.$toast(t.message)}})):s.isSelectProvince=!1},advancedSearchCitySelected:function(t){var e=this,a=parseInt(t.target.$attrs["data-index"]),s=this.advancedSearch.searchItems[a];s.city=t.val,s.city?(s.options.county=[],s.isSelectCity=!0,Object(d.d)({url:"/api/student/manage/advance/label?provinceValues="+s.province+"&cities="+t.val,type:"get",success:function(t){t.state?s.options.county=t.data:e.$toast(t.message)}})):s.isSelectCity=!1},advancedSearchCountySelected:function(t){var e=parseInt(t.target.$attrs["data-index"]);this.advancedSearch.searchItems[e].county=t.val},advancedSearchDateValue:function(t){var e=parseInt(t.target.$attrs["data-index"]);this.advancedSearch.searchItems[e].value=t.value?t.value.split(" ")[0]:t.value},execAdvancedSearch:function(){var t=this;this.definedSearch=JSON.parse(i()(this.$refs.studentTable.tableSearchFields)),this.definedSearch.studentName=this.$refs.studentTable.tableSearchFields.name,this.definedSearch.searchDTOS=this.advancedSearch.searchItems.map(function(e){return{key:e.key,relation:e.relation,value:e.value,tableName:t.advancedSearch.optionKeys[e.key].tableName,listValues:e.value?e.value.split(","):[],provinces:e.province?e.province.split(","):[],cities:e.city?e.city.split(","):[],counties:e.county?e.county.split(","):[]}}),this.url="/table-data/student/manage/advancedSearch",this.method="post",this.definedSearch.isAdvancedSearch=!0,this.definedSearch.inSchool=this.inSchool,this.advancedSearch.show=!1,this.advancedSearch.type=this.role},setInSchool:function(t){var e=this;this.$refs.studentTable.tableSearchFields.inSchool=t,this.inSchool=t;Object(d.d)({url:"/api/student/manage/manageStudents/schoolStatus?inSchool="+this.inSchool+"&type="+this.role,dataType:"json",type:"get",async:!1,success:function(t){e.callback(t.data)}})},callback:function(t){this.schoolStatusArr=t,this.columns[9].search.data.options=this.schoolStatusArr},selectExportStatCollege:function(t){this.exportStat.collegeCodeList=t.value.split(",")},exportStatToFile:function(){window.location.href="/downloads/document/statistics/students/export?inSchool="+this.inSchool+"&role="+this.role+"&collegeCode="+this.exportStat.collegeCodeList.join("&collegeCode=")},exportTable:function(){var t=this,e=this;if(!this.exporting){var a=[];if(this.$refs.tree.getChecked().forEach(function(t){t.meta&&t.checked&&a.push(t.data)}),!a.length)return e.$toast("请勾选至少一个字段");this.exporting=!0,this.definedSearch.studentId=this.$refs.studentTable.tableSearchFields.studentId,this.definedSearch.studentName=this.$refs.studentTable.tableSearchFields.name,this.definedSearch.college=this.$refs.studentTable.tableSearchFields.college,this.definedSearch.educationLevel=this.$refs.studentTable.tableSearchFields.educationLevel,this.definedSearch.schoolStatus=this.$refs.studentTable.tableSearchFields.schoolStatus,this.definedSearch.studentType=this.$refs.studentTable.tableSearchFields.studentType,this.definedSearch.grade=this.$refs.studentTable.tableSearchFields.grade,this.definedSearch.phoneNumber=this.$refs.studentTable.tableSearchFields.phoneNumber,this.definedSearch.inSchool=this.inSchool;var s={};s.inSchool=this.inSchool,s.isAdvancedSearch=this.definedSearch.isAdvancedSearch,s.searchDTOS=this.definedSearch.searchDTOS,s.studentId=this.$refs.studentTable.tableSearchFields.studentId,s.studentType=this.$refs.studentTable.tableSearchFields.studentType,s.type=this.role,s.mergeTables=this.isMergeTable;var o="/api/student/manage/getExportFileName?college="+this.definedSearch.college+"&grade="+this.definedSearch.grade+"&educationLevel="+this.definedSearch.educationLevel+"&schoolStatus="+this.definedSearch.schoolStatus,i=n()({exportFieldVO:a},s);this.exportFile(o,i).then(function(a){if(a.state){var s=[];s.push("/downloads/student/manage/downloadExportFile?fileName="+a.data.fileName),a.data.haveImage&&s.push("/downloads/student/manage/downloadImageZipFile?key="+a.data.key),s.forEach(function(t,a){e._createIFrame(t,100*a,1e3)}),e.showExport=!1,t.getStuTree()}else e.$toast(a.message);e.exporting=!1})}},_createIFrame:function(e,a,s){setTimeout(function(){var a=t('<iframe style="display: none;" class="multi-download"></iframe>');a.attr("src",e),t(document.body).after(a)},a)}}}}).call(e,a("W14+"))}});