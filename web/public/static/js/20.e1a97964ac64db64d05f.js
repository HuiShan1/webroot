webpackJsonp([20],{"6h5b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("pFYg"),a=n.n(o),r=n("C331"),s=n("Gme2"),c=n("8c0Y"),i=(s.a,c.a,{name:"employmentPlatform",components:{EmHeader:s.a,EmUser:c.a},data:function(){return{content:"/index",title:{name:"就业管理系统",url:"employmentPlatform"},props:{},userInfo:{},pageType:0}},methods:{toSomePage:function(e){"object"===(void 0===e?"undefined":a()(e))?(this.content=e.path,this.props=e.props):(this.props={},this.content=e)},backToIndex:function(e){this.content=e},_checkLogin:function(){var e=this;Object(r.e)({url:"/login/check",type:"get",success:function(t){t.state&&(e.userInfo=t.data)}})}},watch:{content:{handler:function(e){this.pageType="/register"===e||"/forgetPsd"===e?1:"/login"===e?2:0},immediate:!0}},created:function(){this._checkLogin()}}),p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"platform"}},[n("div",{attrs:{id:"header"}},[n("em-header",{attrs:{title:e.title,platIn:!0},on:{backToIndex:e.backToIndex}},[n("em-user",{attrs:{slot:"top-nav",pageType:e.pageType},slot:"top-nav"})],1)],1),e._v(" "),n("div",{attrs:{id:"content"}},[n("router-view",{attrs:{name:e.content,content:e.content,props:e.props,userInfo:e.userInfo},on:{toSomePage:e.toSomePage}})],1)])},staticRenderFns:[]};var d=n("VU/8")(i,p,!1,function(e){n("NM3K")},"data-v-0f9e852c",null);t.default=d.exports},NM3K:function(e,t){}});