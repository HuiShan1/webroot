webpackJsonp([45],{X5UG:function(t,o){},jU7A:function(t,o,a){"use strict";(function(t){a("C331")}).call(o,a("W14+"))},jhy5:function(t,o,a){"use strict";(function(t){var e=a("C331");o.a={props:{data:{default:""},update:{default:!1},account:{userId:"",userName:"",type:"",schoolId:""}},data:function(){return{page:0,recordList:[],total:0,loading:!0}},watch:{data:function(t){console.log("newValue",t)}},mounted:function(){console.log("data",this.data),this.getList()},methods:{onScroll:function(){if(t(".scroll_wrap").scrollTop()+t(".scroll_wrap").height()>=t("#maxHeight").height()){if(this.loading)return;this.loading=!0,this.getList()}},getList:function(){var t=this,o={pageIndex:this.page,pageSize:11,timeStamp:"",lang:""};Object(e.c)("/table-data/pwps/workflow/runtime/applications/histories",o,"get").then(function(o){console.log("o",o),o.data.length&&(o.data.forEach(function(o){t.recordList.push(o)}),t.page++),t.total=o.total,t.total>t.recordList.length&&(t.loading=!1)})}}}}).call(o,a("W14+"))},xgjX:function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});a("jU7A");var e=a("jhy5"),i={render:function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"box_flex all_wrap column",staticStyle:{height:"100%"}},[a("div",{staticClass:"scroll_wrap grow_1",on:{scroll:function(o){return t.onScroll()}}},[a("div",{attrs:{id:"maxHeight"}},[t._l(t.recordList,function(o,e){return a("div",{key:e,staticClass:"box_flex box_between record_row"},[a("div",{staticClass:"name"},[t._v(t._s(o.applicationFormVO.position.positionName))]),t._v(" "),a("div",{staticClass:"time"},[t._v(t._s(o.createTime))])])}),t._v(" "),t.recordList.length<t.total?a("load-more",{attrs:{tip:"正在加载"}}):a("load-more",{attrs:{"show-loading":!1,"background-color":"#fbf9fe"}}),t._v(" "),0==t.recordList.length?a("load-more",{attrs:{"show-loading":!1,tip:"暂无数据","background-color":"#fbf9fe"}}):t._e()],2)])])},staticRenderFns:[]};var n=function(t){a("X5UG")},s=a("Mz/3")(e.a,i,!1,n,"data-v-0b5bb2d1",null);o.default=s.exports}});