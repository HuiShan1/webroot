webpackJsonp([72],{KHXy:function(t,a,i){"use strict";(function(t){var e=i("C331");a.a={props:{data:{default:{}}},data:function(){return{page:0,list:[],total:0,loading:!0}},methods:{getList:function(){var t=this,a={page:this.page,size:10};Object(e.d)("api/pwps/salaries/my/all/unit",a,"get").then(function(a){a.data.content.forEach(function(a){t.list.push(a)}),t.total=a.data.totalElements,t.page++,t.total>t.list.length&&(t.loading=!1)})},formatState:function(t){return t?"已发放":"未发放"},onScroll:function(){if(t(".scroll_wrap").scrollTop()+t(".scroll_wrap").height()>=t("#maxHeight").height()){if(this.loading)return;this.loading=!0,this.getList()}}},created:function(){this.getList()}}}).call(a,i("7t+N"))},LdO3:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});i("SZl7");var e=i("KHXy"),s={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticStyle:{height:"100%"}},[i("div",{staticClass:"scroll_wrap grow_1",on:{scroll:function(a){return t.onScroll()}}},[i("div",{attrs:{id:"maxHeight"}},[t._l(t.list,function(a,e){return i("div",{key:e,staticClass:"money_row"},[i("div",{staticClass:"box_flex box_between"},[i("div",{staticClass:"name"},[t._v(t._s(a.position.positionName))]),t._v(" "),i("div",{staticClass:"time"},[t._v(t._s(new Date(a.position.schoolYear.publishTime).format("yyyy-MM-dd")))])]),t._v(" "),i("div",{staticClass:"time",staticStyle:{margin:"0.0667rem 0"}},[t._v("实发工资:"+t._s(a.realPayMount)+"元")]),t._v(" "),i("div",{staticClass:"state",class:{green:a.isGrant,yellow:!a.isGrant}},[t._v(t._s(t.formatState(a.isGrant)))])])}),t._v(" "),t.list.length<t.total?i("load-more",{attrs:{tip:"正在加载"}}):i("load-more",{attrs:{"show-loading":!1,"background-color":"#fbf9fe"}}),t._v(" "),0==t.list.length?i("load-more",{attrs:{"show-loading":!1,tip:"暂无数据","background-color":"#fbf9fe"}}):t._e()],2)])])},staticRenderFns:[]};var n=function(t){i("VTnN")},o=i("VU/8")(e.a,s,!1,n,"data-v-5633d403",null);a.default=o.exports},SZl7:function(t,a,i){"use strict";(function(t){i("C331")}).call(a,i("7t+N"))},VTnN:function(t,a){}});