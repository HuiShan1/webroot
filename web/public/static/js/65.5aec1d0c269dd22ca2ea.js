webpackJsonp([65],{"9yW+":function(t,a,e){"use strict";(function(t){e("7+uW"),e("C331")}).call(a,e("7t+N"))},DgVG:function(t,a){},L7bz:function(t,a,e){"use strict";(function(t){var s=e("7+uW"),i=e("C331");a.a={props:{account:{userId:"",userName:"",type:"",schoolId:""}},data:function(){return{applyType:[{id:"student",name:"学生应用"},{id:"freshman",name:"新生应用"},{id:"instructor",name:"辅导员应用"}],typeList:{student:{bigType:"student",types:[]},freshman:{bigType:"freshman",types:[]},instructor:{bigType:"instructor",types:[]}},appTypeSearchList:{student:{bigType:"student",types:[]},freshman:{bigType:"freshman",types:[]},instructor:{bigType:"instructor",types:[]}},searchName:"",systemAppList:[{name:"i签到"}],paymentAppList:[],popularApply:[]}},created:function(){var t=this;Object(i.e)({url:"/api/relationship/instructor/check",type:"get",success:function(a){a.state&&a.data&&(a.data.indexOf("instructor")>=0?t.applyType=[{id:"instructor",name:"辅导员应用"},{id:"student",name:"学生应用"},{id:"freshman",name:"新生应用"}]:t.applyType=[{id:"student",name:"学生应用"},{id:"freshman",name:"新生应用"},{id:"instructor",name:"辅导员应用"}])}}),Object(i.e)({url:"/api/payment/userallproject",type:"get",data:{page:0,size:9999},success:function(a){a.state?(t.paymentAppList=a.data.content,t.paymentAppList.forEach(function(a){t.$set(a,"imgPath","tuition"),t.$set(a,"imgType","2")})):t._toast(a.message)}}),this.initPageData()},methods:{_containsSearchName:function(t){var a=this,e=!1;return t&&t.length>0&&t.forEach(function(t){(t.name&&t.name.indexOf(a.searchName)>=0||t.app&&t.app.name.indexOf(a.searchName)>=0)&&(e=!0)}),e},initPageData:function(){var t=this;this.initTypes("1","list"),this.initTypes("3","list"),this.initTypes("4","list"),Object(i.e)({url:"/api/app/popular",type:"get",data:{isPublished:!0},success:function(a){t.popularApply=a.data}})},initTypes:function(t,a){var e=this;"search"===a&&(e.appTypeSearchList.student.types.splice(0,e.appTypeSearchList.student.types.length),e.appTypeSearchList.freshman.types.splice(0,e.appTypeSearchList.freshman.types.length),e.appTypeSearchList.instructor.types.splice(0,e.appTypeSearchList.instructor.types.length)),Object(i.e)({url:"/api/app/type",type:"get",data:{userType:t},success:function(i){i.state?(i.data.forEach(function(i,p){var n={};for(var c in i)s.a.set(n,c,i[c]);s.a.set(n,"appList",[]),"list"===a?"1"===t?e.typeList.student.types.push(n):"3"===t?e.typeList.freshman.types.push(n):e.typeList.instructor.types.push(n):"1"===t?e.appTypeSearchList.student.types.push(n):"3"===t?e.appTypeSearchList.freshman.types.push(n):e.appTypeSearchList.instructor.types.push(n)}),e.initAppList(t,a)):e._toast(i.message)}})},initAppList:function(t,a){var e=this,p=null;"list"===a?(p="1"===t?e.typeList.student:"3"===t?e.typeList.freshman:e.typeList.instructor,e.searchName=""):p="1"===t?e.appTypeSearchList.student:"3"===t?e.appTypeSearchList.freshman:e.appTypeSearchList.instructor,Object(i.e)({url:"/api/app",type:"get",data:{name:e.searchName,userType:t,isPublished:!0},success:function(t){t.state?(t.data.forEach(function(t,a){p.types.forEach(function(a,e){a.id===t.appType.id&&a.appList.push(t)})}),p.types.forEach(function(t,a){0===t.appList.length?s.a.set(t,"isShow",!1):s.a.set(t,"isShow",!0)})):e._toast(t.message)}})},_checkDetail:function(t,a,e){var s=this;Object(i.e)({url:"/api/app/"+t.id+"/business/now",type:"get",success:function(i){i.state?i.data.length>0?"FORM"===t.setting.type?s.$emit("addBread",{route:"/form/MFormLayout?appId="+t.id,title:"",curBusiness:i.data[0],type:{typeTitle:a,childName:e}}):s.$emit("addBread",{route:"/form/MFlowDetail?appId="+t.id+"&businessId="+i.data[0].business.id,title:t.name,curBusiness:i.data[0]}):s._toast("暂无业务"):s._toast(i.message)}})},_iSignInList:function(){this.$emit("addBread",{route:"/ISignIn/MISignInList",title:""})},_partTime:function(){this.$emit("addBread",{route:"/partTime/positionList",title:""})},_paymentFees:function(t){var a=this;t?(this.$waiting.show(),Object(i.e)({url:"/api/payment/getInProject",type:"get",data:{id:t.id},success:function(t){t.state?t.data&&t.data.status?"NOT_PAID"===t.data.status?a.$emit("addBread",{route:"/payHall/MPaymentApplication",title:t.data.name,data:t.data}):a.$toast("您已缴费，无需缴费！"):a.$toast("该应用无需缴费！"):a.$toast(t.message)}}).always(function(){a.$waiting.close()})):this.$emit("addBread",{route:"payHall/MPaymentRecords",title:"缴费记录"})},_psychology:function(){this.$emit("addBread",{route:"/psychology/MCampus",title:""})},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})}},mounted:function(){var a=t(document).height(),e=navigator.userAgent;(e.indexOf("Android")>-1||e.indexOf("Adr")>-1)&&t(window).resize(function(){t(document).height()<a?t(".mobile-tabbar").css("position","static"):t(".mobile-tabbar").css("position","fixed")})}}}).call(a,e("7t+N"))},ZElc:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("9yW+");var s=e("L7bz"),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{height:"100%"},attrs:{id:"workPage"}},[e("view-box",[e("x-header",{staticClass:"workPage-header",attrs:{"left-options":{showBack:!1}}},[e("div",{attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[e("search",{ref:"search",staticClass:"header-search",attrs:{position:"absolute",placeholder:"搜索...","auto-scroll-to-top":"",top:"0"},model:{value:t.searchName,callback:function(a){t.searchName=a},expression:"searchName"}})],1)]),t._v(" "),e("div",{staticClass:"workPage-content"},[t._containsSearchName(t.paymentAppList)?e("div",{staticClass:"apply-type-group"},[e("div",{staticClass:"apply-type-head"},[t._v("缴费应用")]),t._v(" "),e("div",{staticClass:"apply-type-list"},[e("div",{staticClass:"apply-list"},t._l(t.paymentAppList,function(a,s){return a.name.indexOf(t.searchName)>=0?e("div",{key:s,staticClass:"apply",on:{click:function(e){return t._paymentFees(a)}}},[e("div",{staticClass:"app-icon-div",style:{"background-image":a.background}},[a.imgType&&"1"!==a.imgType?"2"===a.imgType?e("i",{staticClass:"maticon apply-icon theme-icon-application"},[e("span",{staticClass:"saasicon-36px",class:["saasicon-36px-"+a.imgPath]})]):t._e():e("i",{staticClass:"maticon apply-icon theme-icon-application",domProps:{innerHTML:t._s(t.icons(a.imgPath))}},[t._v(t._s(a.imgPath))])]),t._v(" "),e("p",{staticClass:"text-center apply-title"},[t._v(t._s(a.name))])]):t._e()}),0)])]):t._e(),t._v(" "),t._containsSearchName(t.popularApply)&&"dndxdemo"!=t.account.schoolId?e("div",{staticClass:"apply-type-group"},[e("div",{staticClass:"apply-type-head"},[t._v("热门应用")]),t._v(" "),e("div",{staticClass:"apply-type-list"},[e("div",{staticClass:"apply-list"},t._l(t.popularApply,function(a,s){return a.app.name.indexOf(t.searchName)>=0?e("div",{key:s,staticClass:"apply",on:{click:function(e){return t._checkDetail(a.app)}}},[e("div",{staticClass:"app-icon-div",style:{"background-image":a.app.background}},[a.app.imgType&&"1"!==a.app.imgType?"2"===a.app.imgType?e("i",{staticClass:"maticon apply-icon theme-icon-application"},[e("span",{staticClass:"saasicon-36px",class:["saasicon-36px-"+a.app.imgPath]})]):t._e():e("i",{staticClass:"maticon apply-icon theme-icon-application",domProps:{innerHTML:t._s(t.icons(a.app.imgPath))}},[t._v(t._s(a.app.imgPath))])]),t._v(" "),e("p",{staticClass:"text-center apply-title"},[t._v(t._s(a.app.name))])]):t._e()}),0)])]):t._e(),t._v(" "),t._l(t.applyType,function(a,s){return t.typeList[a.id].types.length>0&&"dndxdemo"!=t.account.schoolId?e("div",{key:s,staticClass:"apply-type-group"},[e("div",{staticClass:"apply-type-head"},[t._v(t._s(a.name))]),t._v(" "),t._l(t.typeList[a.id].types,function(a,s){return t._containsSearchName(a.appList)?e("div",{directives:[{name:"show",rawName:"v-show",value:a.isShow,expression:"appType.isShow"}],key:s,staticClass:"apply-type-list"},["在线缴费"===a.name?e("div",["ixy"===t.account.schoolId?e("label",{staticClass:"pull-left type-head"},[t._v(t._s(a.name))]):t._e(),t._v(" "),"ixy"===t.account.schoolId?e("div",{staticClass:"apply-list"},t._l(a.appList,function(s,i){return s.name.indexOf(t.searchName)>=0?e("div",{key:i,staticClass:"apply",on:{click:function(e){return t._checkDetail(s,a.name,s.name)}}},[e("div",{staticClass:"app-icon-div",style:{"background-image":s.background}},[s.imgType&&"1"!==s.imgType?"2"===s.imgType?e("i",{staticClass:"maticon apply-icon theme-icon-application"},[e("span",{staticClass:"saasicon-36px",class:["saasicon-36px-"+s.imgPath]})]):t._e():e("i",{staticClass:"maticon apply-icon theme-icon-application",domProps:{innerHTML:t._s(t.icons(s.imgPath))}},[t._v(t._s(s.imgPath))])]),t._v(" "),e("p",{staticClass:"text-center apply-title"},[t._v(t._s(s.name))])]):t._e()}),0):t._e()]):e("div",[e("label",{staticClass:"pull-left type-head"},[t._v(t._s(a.name))]),t._v(" "),e("div",{staticClass:"apply-list"},t._l(a.appList,function(s,i){return s.name.indexOf(t.searchName)>=0?e("div",{key:i,staticClass:"apply",on:{click:function(e){return t._checkDetail(s,a.name,s.name)}}},[e("div",{staticClass:"app-icon-div",style:{"background-image":s.background}},[s.imgType&&"1"!==s.imgType?"2"===s.imgType?e("i",{staticClass:"maticon apply-icon theme-icon-application"},[e("span",{staticClass:"saasicon-36px",class:["saasicon-36px-"+s.imgPath]})]):t._e():e("i",{staticClass:"maticon apply-icon theme-icon-application",domProps:{innerHTML:t._s(t.icons(s.imgPath))}},[t._v(t._s(s.imgPath))])]),t._v(" "),e("p",{staticClass:"text-center apply-title"},[t._v(t._s(s.name))])]):t._e()}),0)])]):t._e()})],2):t._e()}),t._v(" "),t._containsSearchName(t.systemAppList)&&"dndxdemo"!=t.account.schoolId?e("div",{staticClass:"apply-type-group"},[e("div",{staticClass:"apply-type-head"},[t._v("系统应用")]),t._v(" "),e("div",{staticClass:"apply-type-list"},[e("div",{staticClass:"apply-list"},[e("div",{staticClass:"apply",on:{click:t._iSignInList}},[e("div",{staticClass:"app-icon-div",style:{"background-image":"linear-gradient(-135deg, rgb(90, 193, 95) 0%, rgb(73, 174, 78) 100%)"}},[e("i",{staticClass:"maticon apply-icon theme-icon-application",domProps:{innerHTML:t._s(t.icons("people"))}},[t._v("people")])]),t._v(" "),e("p",{staticClass:"text-center apply-title"},[t._v("i签到")])]),t._v(" "),e("div",{staticClass:"apply",on:{click:t._partTime}},[e("div",{staticClass:"app-icon-div",style:{"background-image":"linear-gradient(-135deg, rgb(90, 193, 95) 0%, rgb(73, 174, 78) 100%)"}},[e("i",{staticClass:"maticon apply-icon theme-icon-application",domProps:{innerHTML:t._s(t.icons("people"))}},[t._v("people")])]),t._v(" "),e("p",{staticClass:"text-center apply-title"},[t._v("勤工助学")])]),t._v(" "),e("div",{staticClass:"apply",on:{click:t._psychology}},[e("div",{staticClass:"app-icon-div",style:{"background-image":"linear-gradient(-135deg, rgb(130, 193, 95) 0%, rgb(230, 204, 250) 100%)"}},[e("i",{staticClass:"maticon apply-icon theme-icon-application",domProps:{innerHTML:t._s(t.icons("people"))}},[t._v("people")])]),t._v(" "),e("p",{staticClass:"text-center apply-title"},[t._v("心理咨询")])])])])]):t._e()],2)],1)],1)},staticRenderFns:[]};var p=function(t){e("DgVG")},n=e("VU/8")(s.a,i,!1,p,null,null);a.default=n.exports}});