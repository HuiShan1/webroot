webpackJsonp([58],{CVGC:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("C331"),a={props:{data:{default:""}},data:function(){return{isShowHistoryRecord:!0,pageIndex:0,pageSize:20,searchName:"",isLoadMoreData:!1,activityListData:[],historyRecordData:[],searchTimeOut:null,loadingText:!1,noDataTips:"",isShowNoMoreDataTips:!1}},created:function(){this._getHistoryRecord()},methods:{_back:function(){this.$emit("removeBread",this.data)},getResult:function(t){var e=this;t?(this.isShowHistoryRecord=!1,this.searchTimeOut&&clearTimeout(this.searchTimeOut),this.searchTimeOut=setTimeout(function(){e._initActivityList()},600)):(this.isShowHistoryRecord=!0,this._getHistoryRecord())},onSubmit:function(){this._initActivityList()},_initActivityList:function(){var t=this;this.loadingText=!0,this.isLoadMoreData=!1,Object(s.c)({url:"/api/sc/activities/pages?name="+this.searchName,type:"get",data:{page:this.pageIndex,size:this.pageSize},success:function(e){e.state?(t.loadingText=!1,e.data.content.length>0?t.noDataTips="":t.noDataTips="---暂无相关数据---",t.searchName&&(t.activityListData=[]),e.data.content.forEach(function(e){t.activityListData.push(e)}),t._saveHistoryRecord(),t.activityListData.length>t.pageSize?t.isShowNoMoreDataTips=!0:t.isShowNoMoreDataTips=!1,e.data.content.length<t.pageSize?t.isLoadMoreData=!1:t.isLoadMoreData=!0):t._toast(e.message)}})},_getHistoryRecord:function(){var t=this;Object(s.c)({url:"/api/system/search/histories?portal=INDEX_ACTIVITY_NAME_SEARCH&top=3",type:"get",success:function(e){e.state?t.historyRecordData=e.data:t._toast(e.message)}})},_saveHistoryRecord:function(){if(!this.searchName)return!1;Object(s.c)({url:"/api/system/search/histories",type:"post",data:{content:this.searchName,portal:"INDEX_ACTIVITY_NAME_SEARCH"},success:function(t){t.state||this._toast(t.message)}})},_deleteHistoryRecord:function(t){var e=this;Object(s.c)({url:"/api/system/search/histories?portal=INDEX_ACTIVITY_NAME_SEARCH&content="+t,type:"delete",success:function(t){t.state?e._getHistoryRecord():e._toast(t.message)}})},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})},_clickHistoryRecord:function(t){this.searchName=t,this.isShowHistoryRecord=!1,this.$refs.search.setFocus(),this.onSubmit()},_activityDetail:function(t){this.$emit("addBread",{route:"/activity/MActivityDetail",title:t.name,data:t})}},mounted:function(){var t=this;this.$pullUpToLoad({container:".activitySearch-content",up:{callback:function(){t.isLoadMoreData&&(t.pageIndex++,t._initActivityList())}}})}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"activitySearch"}},[i("view-box",[i("x-header",{staticClass:"search-page-header"},[i("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),i("div",{staticClass:"search-page-container",attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[i("search",{ref:"search",staticClass:"header-search",attrs:{position:"absolute",placeholder:"请输入","auto-scroll-to-top":"",top:"0"},on:{"on-change":t.getResult,"on-submit":t.onSubmit},model:{value:t.searchName,callback:function(e){t.searchName=e},expression:"searchName"}})],1)]),t._v(" "),i("div",{staticClass:"activitySearch-content"},[t.isShowHistoryRecord?i("div",{staticClass:"search-history-record"},t._l(t.historyRecordData,function(e,s){return i("div",{staticClass:"history-cell",on:{click:function(i){t._clickHistoryRecord(e.content)}}},[i("i",{staticClass:"maticon history-icon",domProps:{innerHTML:t._s(t.icons("schedule"))}},[t._v("schedule")]),t._v(" "),i("span",{staticClass:"history-record-title"},[t._v(t._s(e.content))]),t._v(" "),i("i",{staticClass:"maticon clear-icon",domProps:{innerHTML:t._s(t.icons("clear"))},on:{click:function(i){i.stopPropagation(),t._deleteHistoryRecord(e.content)}}},[t._v("clear")])])})):i("div",{staticClass:"search-result-list"},[t.activityListData.length>0?i("div",[t._l(t.activityListData,function(e,s){return i("div",{staticClass:"result-cell",on:{click:function(i){t._activityDetail(e)}}},[i("span",{staticClass:"result-title"},[t._v(t._s(e.name))])])}),t._v(" "),t.loadingText?i("div",{staticClass:"noMoreData"},[t._v("---加载中---")]):t._e(),t._v(" "),!t.isLoadMoreData&&t.isShowNoMoreDataTips?i("div",{staticClass:"noMoreData"},[t._v("---没有更多数据了---")]):t._e()],2):i("div",{staticClass:"nodataText"},[t._v(t._s(t.noDataTips))])])])],1)],1)},staticRenderFns:[]};var c=i("C7Lr")(a,o,!1,function(t){i("JrN0")},null,null);e.default=c.exports},JrN0:function(t,e){}});