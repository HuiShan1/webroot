webpackJsonp([106],{bigm:function(t,i){},"mZ/0":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});e("7+uW"),e("7t+N");var s=e("C331"),a={props:{account:{default:null}},created:function(){var t=this,i=localStorage.getItem("lang");Object(s.g)(i)&&(this.lang=i),Object(s.e)({url:"/api/apartment/dicts?typeName=校区",type:"get",success:function(i){i.state?i.data.forEach(function(i){t.dormitoryStatistics.options.campus.push({label:i.label,value:i.value}),t.peopleStatistics.options.campus.push({label:i.label,value:i.value})}):t.toast(i.message)}}),Object(s.e)({url:"/api/apartment/dicts?typeName=房间用途",type:"get",success:function(i){i.state?i.data.forEach(function(i){t.dormitoryStatistics.options.usedFor.push({label:i.label,value:i.value})}):t.toast(i.message)}}),Object(s.e)({url:"/api/apartment/dicts?typeName=卫生间类型",type:"get",success:function(i){i.state?i.data.forEach(function(i){t.dormitoryStatistics.options.toilet.push({label:i.label,value:i.value})}):t.toast(i.message)}}),Object(s.e)({url:"/api/apartment/dicts?typeName=有无阳台",type:"get",success:function(i){i.state?i.data.forEach(function(i){t.dormitoryStatistics.options.haveBalcony.push({label:i.label,value:i.value})}):t.toast(i.message)}}),Object(s.e)({url:"/api/apartment/dicts?typeName=居住情况",type:"get",success:function(i){i.state?i.data.forEach(function(i){t.dormitoryStatistics.options.livingStatus.push({label:i.label,value:i.value})}):t.toast(i.message)}}),Object(s.e)({url:"/api/apartment/dicts?typeName=培养层次",type:"get",success:function(i){i.state?i.data.forEach(function(i){t.peopleStatistics.options.educationLevel.push({label:i.label,value:i.value})}):t.toast(i.message)}}),Object(s.e)({url:"/api/apartment/statistic/getSelectOption",type:"get",success:function(i){i.state?i.data.forEach(function(i){t.peopleStatistics.options.college.push({label:i.label,value:i.value})}):t.toast(i.message)}}),this._initColumns(),this._nowDate()},data:function(){return{dormitoryStatistics:{layoutOne:[{title:"校区:",id:"campus"},{title:"园区:",id:"zone"},{title:"楼栋:",id:"building"}],layoutTwo:[{title:"房间用途:",id:"usedFor"},{title:"卫生间类型:",id:"toilet"},{title:"有无阳台:",id:"haveBalcony"},{title:"房型:",id:"maxNumber"}],layoutThree:[{title:"居住情况:",id:"livingStatus"},{title:"空床数量:",id:"leftNumber"}],options:{campus:[],zone:[],building:[],usedFor:[],toilet:[],haveBalcony:[],maxNumber:[{label:"1人间",value:"1"},{label:"2人间",value:"2"},{label:"3人间",value:"3"},{label:"4人间",value:"4"},{label:"5人间",value:"5"},{label:"6人间",value:"6"},{label:"7人间",value:"7"},{label:"8人间",value:"8"},{label:"9人间",value:"9"},{label:"10人间",value:"10"}],livingStatus:[],leftNumber:[{label:"1张空床",value:"1"},{label:"2张空床",value:"2"},{label:"3张空床",value:"3"},{label:"4张空床",value:"4"},{label:"5张空床",value:"5"},{label:"6张空床",value:"6"},{label:"7张空床",value:"7"},{label:"8张空床",value:"8"},{label:"9张空床",value:"9"},{label:"10张空床",value:"10"}]},defaultValue:{campus:"",zone:"",building:"",usedFor:"",toilet:"",haveBalcony:"",maxNumber:"",livingStatus:"",leftNumber:""}},peopleStatistics:{layoutOne:[{title:"校区:",id:"campus"},{title:"园区:",id:"zone"},{title:"楼栋:",id:"building"}],layoutTwo:[{title:"人员类型:",id:"userType"},{title:"培养层次:",id:"educationLevel"},{title:"学院:",id:"college"}],options:{campus:[],zone:[],building:[],userType:[{label:"学生",value:"student"},{label:"教师",value:"teacher"},{label:"其他用户",value:"OTHER"}],educationLevel:[],college:[]},defaultValue:{campus:"",zone:"",building:"",userType:"",educationLevel:"",college:""}},dormitoryStatisticsFlag:"switchDormitoryDetailedTable",peopleStatisticsFlag:"switchPeopleDetailedTable",dormitoryStatisticsUrl:"",dormitoryDetailedUrl:"",peopleStatisticsUrl:"",peopleDetailedUrl:"",columnsDormitoryStatisticsTable:[],columnsDormitoryDetailedTable:[],columnsPeopleStatisticsTable:[],columnsPeopleDetailedTable:[],isSelect:"dormitoryStatistics",isShowPathNav:!1,tabs:[{id:"dormitoryStatistics",label:"房源统计"},{id:"peopleStatistics",label:"人员统计"}],curRoute:"dormitoryStatistics",searchSelectOptions:{operation:[{label:"入住",value:"CHECK_IN"},{label:"退宿",value:"RETIREMENT"},{label:"调宿",value:"ACCOMMODATION"}],operatorType:[{label:"管理员",value:"APARTMENT_MANAGER"},{label:"学院",value:"COLLEGE"},{label:"学生",value:"STUDENT"}]},editTime:{dormitoryStatisticsTime:"",peopleStatisticsTime:""},nowDate:"",timeStamp:"",lang:"zh-cn"}},computed:{translate:function(){return Object(s.g)(this.lang).statistics}},methods:{_dormitoryStatisticsDormitoryOptionsSelected:function(t,i){var e=this;if(this.dormitoryStatistics.defaultValue[i.id]=t.value,""===t.value);else if("campus"===i.id)this.dormitoryStatistics.defaultValue.campus.split(",").length>1?(this.dormitoryStatistics.options.zone.splice(0,this.dormitoryStatistics.options.zone.length),this.dormitoryStatistics.options.building.splice(0,this.dormitoryStatistics.options.building.length),this.dormitoryStatistics.defaultValue.zone="",this.dormitoryStatistics.defaultValue.building=""):this.$nextTick(function(){e._dormitoryStatisticsGetZonesData(e.dormitoryStatistics.defaultValue[i.id])});else if("zone"===i.id){this.dormitoryStatistics.defaultValue.zone.split(",").length>1?(this.dormitoryStatistics.options.building.splice(0,this.dormitoryStatistics.options.building.length),this.dormitoryStatistics.defaultValue.building=""):this.$nextTick(function(){e._dormitoryStatisticsGetBuildingData(e.dormitoryStatistics.defaultValue[i.id])})}},_peopleStatisticsDormitoryOptionsSelected:function(t,i){var e=this;if(this.peopleStatistics.defaultValue[i.id]=t.value,""===t.value);else if("campus"===i.id)this.peopleStatistics.defaultValue.campus.split(",").length>1?(this.peopleStatistics.options.zone.splice(0,this.peopleStatistics.options.zone.length),this.peopleStatistics.options.building.splice(0,this.peopleStatistics.options.building.length),this.peopleStatistics.defaultValue.zone="",this.peopleStatistics.defaultValue.building=""):this.$nextTick(function(){e._peopleStatisticsGetZonesData(e.peopleStatistics.defaultValue[i.id])});else if("zone"===i.id){this.peopleStatistics.defaultValue.zone.split(",").length>1?(this.peopleStatistics.options.building.splice(0,this.peopleStatistics.options.building.length),this.peopleStatistics.defaultValue.building=""):this.$nextTick(function(){e._peopleStatisticsGetBuildingData(e.peopleStatistics.defaultValue[i.id])})}},_dormitoryStatisticsOptionsSelected:function(t,i){this.dormitoryStatistics.defaultValue[i.id]=t.value},_peopleStatisticsOptionsSelected:function(t,i){this.peopleStatistics.defaultValue[i.id]=t.value},_initColumns:function(){this.columnsDormitoryStatisticsTable=[{id:"campusName",title:this.translate.campusName,width:100,className:"text-left",hidden:!1},{id:"zoneName",title:this.translate.zoneName,width:100,className:"text-left",hidden:!1},{id:"buildingName",title:this.translate.buildingName,width:100,className:"text-left",hidden:!1},{id:"totRoom",title:this.translate.totRoom,width:100,className:"text-left",hidden:!1},{id:"totBed",title:this.translate.totBed,width:100,className:"text-left",hidden:!1},{id:"conditionRoom",title:this.translate.conditionRoom,width:150,className:"text-left",hidden:!1,formatter:function(t){"-1"==t.conditionRoom&&(t.conditionRoom="")}}],this.columnsDormitoryDetailedTable=[{id:"campusName",title:this.translate.campusName,width:100,className:"text-left",hidden:!1},{id:"zoneName",title:this.translate.zoneName,width:100,className:"text-left",hidden:!1},{id:"buildingName",title:this.translate.buildingName,width:100,className:"text-left",hidden:!1},{id:"roomNo",title:this.translate.roomNo,width:80,className:"text-left",hidden:!1},{id:"usedFor",title:this.translate.usedFor,width:100,className:"text-left",hidden:!1},{id:"toilet",title:this.translate.toilet,width:100,className:"text-left",hidden:!1},{id:"haveBalcony",title:this.translate.haveBalcony,width:80,className:"text-left",hidden:!1},{id:"maxNumber",title:this.translate.maxNumber,width:80,className:"text-left",hidden:!1},{id:"livingStatus",title:this.translate.livingStatus,width:100,className:"text-left",hidden:!1},{id:"leftNumber",title:this.translate.leftNumber,width:100,className:"text-left",hidden:!1}],this.columnsPeopleStatisticsTable=[{id:"campusName",title:this.translate.campusName,width:100,className:"text-left",hidden:!1},{id:"zoneName",title:this.translate.zoneName,width:100,className:"text-left",hidden:!1},{id:"buildingName",title:this.translate.buildingName,width:100,className:"text-left",hidden:!1},{id:"totUser",title:this.translate.totUser,width:100,className:"text-left",hidden:!1},{id:"conditionUser",title:this.translate.conditionUser,width:150,className:"text-left",hidden:!1,formatter:function(t){"-1"==t.conditionUser&&(t.conditionUser="")}}],this.columnsPeopleDetailedTable=[{id:"campusName",title:this.translate.campusName,width:80,className:"text-left",hidden:!1},{id:"zoneName",title:this.translate.zoneName,width:80,className:"text-left",hidden:!1},{id:"buildingName",title:this.translate.buildingName,width:80,className:"text-left",hidden:!1},{id:"roomNo",title:this.translate.roomNo,width:50,className:"text-left",hidden:!1},{id:"bedNo",title:this.translate.bedNo,width:50,className:"text-left",hidden:!1},{id:"userName",title:this.translate.userName,width:50,className:"text-left",hidden:!1},{id:"userType",title:this.translate.userType,width:60,className:"text-left",hidden:!1},{id:"userNo",title:this.translate.userNo,width:120,className:"text-left",hidden:!1},{id:"sex",title:this.translate.sex,width:50,className:"text-left",hidden:!1},{id:"college",title:this.translate.college,width:60,className:"text-left",hidden:!1},{id:"educationLevel",title:this.translate.educationLevel,width:60,className:"text-left",hidden:!1},{id:"grade",title:this.translate.grade,width:50,className:"text-left",hidden:!1},{id:"userCheckInStatus",title:this.translate.userCheckInStatus,width:60,className:"text-left",hidden:!1},{id:"inTime",title:this.translate.inTime,width:100,className:"text-left",hidden:!1},{id:"outTime",title:this.translate.outTime,width:120,className:"text-left",hidden:!1}]},changeTab:function(t){this.isSelect=t.id,this.curRoute=t.id,this._initColumns()},_dormitoryStatisticsGetZonesData:function(t){var i=this;Object(s.e)({url:"/api/apartment/zones/getByCampuses/"+t,type:"get",success:function(t){t.state?(i.dormitoryStatistics.options.zone.splice(0,i.dormitoryStatistics.options.zone.length),t.data&&t.data.forEach(function(t){i.dormitoryStatistics.options.zone.push({label:t.name,value:t.zoneId.toString()})})):i.$toast(t.message)}})},_dormitoryStatisticsGetBuildingData:function(t){var i=this;Object(s.e)({url:"/api/apartment/buildings/list/"+t,type:"get",success:function(t){t.state?(i.buildingData=t.data,i.dormitoryStatistics.options.building.splice(0,i.dormitoryStatistics.options.building.length),t.data&&t.data.forEach(function(t){i.dormitoryStatistics.options.building.push({label:t.name,value:t.buildingId.toString()})})):i.$toast(t.message)}})},_peopleStatisticsGetZonesData:function(t){var i=this;Object(s.e)({url:"/api/apartment/zones/getByCampuses/"+t,type:"get",success:function(t){t.state?(i.peopleStatistics.options.zone.splice(0,i.peopleStatistics.options.zone.length),t.data&&t.data.forEach(function(t){i.peopleStatistics.options.zone.push({label:t.name,value:t.zoneId.toString()})})):i.$toast(t.message)}})},_peopleStatisticsGetBuildingData:function(t){var i=this;Object(s.e)({url:"/api/apartment/buildings/list/"+t,type:"get",success:function(t){t.state?(i.buildingData=t.data,i.peopleStatistics.options.building.splice(0,i.peopleStatistics.options.building.length),t.data&&t.data.forEach(function(t){i.peopleStatistics.options.building.push({label:t.name,value:t.buildingId.toString()})})):i.$toast(t.message)}})},_dateSelected:function(t,i){"dormitoryStatisticsTime"===i&&(this.editTime.dormitoryStatisticsTime=t.value),"peopleStatisticsTime"===i&&(this.editTime.peopleStatisticsTime=t.value)},_dormitoryStatisticsReset:function(){this.dormitoryStatistics.defaultValue.campus="",this.dormitoryStatistics.defaultValue.zone="",this.dormitoryStatistics.defaultValue.building="",this.editTime.dormitoryStatisticsTime=this.nowDate,this.dormitoryStatistics.defaultValue.usedFor="",this.dormitoryStatistics.defaultValue.toilet="",this.dormitoryStatistics.defaultValue.haveBalcony="",this.dormitoryStatistics.defaultValue.maxNumber="",this.dormitoryStatistics.defaultValue.livingStatus="",this.dormitoryStatistics.defaultValue.leftNumber="",this.dormitoryStatistics.options.zone.splice(0,this.dormitoryStatistics.options.zone.length),this.dormitoryStatistics.options.building.splice(0,this.dormitoryStatistics.options.building.length),"switchDormitoryDetailedTable"===this.dormitoryStatisticsFlag?this.dormitoryStatisticsUrl="/table-data/apartment/statistic/room/getBuildingWithCondition?date="+this.nowDate:"switchStatisticsTable"===this.dormitoryStatisticsFlag&&(this.dormitoryDetailedUrl="/table-data/apartment/statistic/room/getWithCondition?date="+this.nowDate)},_dormitoryStatisticsSearch:function(){if(""===this.editTime.dormitoryStatisticsTime)this.editTime.dormitoryStatisticsTime=this.nowDate;else{var t=this.editTime.dormitoryStatisticsTime;t=t.substring(0,10),this.editTime.dormitoryStatisticsTime=t}"switchDormitoryDetailedTable"===this.dormitoryStatisticsFlag?this.dormitoryStatisticsUrl="/table-data/apartment/statistic/room/getBuildingWithCondition?date="+this.editTime.dormitoryStatisticsTime+"&campusId="+this.dormitoryStatistics.defaultValue.campus+"&zoneId="+this.dormitoryStatistics.defaultValue.zone+"&buildingId="+this.dormitoryStatistics.defaultValue.building+"&usedFor="+this.dormitoryStatistics.defaultValue.usedFor+"&toilet="+this.dormitoryStatistics.defaultValue.toilet+"&haveBalcony="+this.dormitoryStatistics.defaultValue.haveBalcony+"&maxNumber="+this.dormitoryStatistics.defaultValue.maxNumber+"&leftNumber="+this.dormitoryStatistics.defaultValue.leftNumber+"&livingStatus="+this.dormitoryStatistics.defaultValue.livingStatus:"switchStatisticsTable"===this.dormitoryStatisticsFlag&&(this.dormitoryDetailedUrl="/table-data/apartment/statistic/room/getWithCondition?date="+this.editTime.dormitoryStatisticsTime+"&campusId="+this.dormitoryStatistics.defaultValue.campus+"&zoneId="+this.dormitoryStatistics.defaultValue.zone+"&buildingId="+this.dormitoryStatistics.defaultValue.building+"&usedFor="+this.dormitoryStatistics.defaultValue.usedFor+"&toilet="+this.dormitoryStatistics.defaultValue.toilet+"&haveBalcony="+this.dormitoryStatistics.defaultValue.haveBalcony+"&maxNumber="+this.dormitoryStatistics.defaultValue.maxNumber+"&leftNumber="+this.dormitoryStatistics.defaultValue.leftNumber+"&livingStatus="+this.dormitoryStatistics.defaultValue.livingStatus)},_dormitoryStatisticsExport:function(){if(""===this.editTime.dormitoryStatisticsTime)this.editTime.dormitoryStatisticsTime=this.nowDate;else{var t=this.editTime.dormitoryStatisticsTime;t=t.substring(0,10),this.editTime.dormitoryStatisticsTime=t}"switchDormitoryDetailedTable"===this.dormitoryStatisticsFlag?window.location.href="/downloads/apartment/statistic/room/exportBuilding?date="+this.editTime.dormitoryStatisticsTime+"&campusId="+this.dormitoryStatistics.defaultValue.campus+"&zoneId="+this.dormitoryStatistics.defaultValue.zone+"&buildingId="+this.dormitoryStatistics.defaultValue.building+"&usedFor="+this.dormitoryStatistics.defaultValue.usedFor+"&toilet="+this.dormitoryStatistics.defaultValue.toilet+"&haveBalcony="+this.dormitoryStatistics.defaultValue.haveBalcony+"&maxNumber="+this.dormitoryStatistics.defaultValue.maxNumber+"&leftNumber="+this.dormitoryStatistics.defaultValue.leftNumber+"&livingStatus="+this.dormitoryStatistics.defaultValue.livingStatus:"switchStatisticsTable"===this.dormitoryStatisticsFlag&&(window.location.href="/downloads/apartment/statistic/room/export?date="+this.editTime.dormitoryStatisticsTime+"&campusId="+this.dormitoryStatistics.defaultValue.campus+"&zoneId="+this.dormitoryStatistics.defaultValue.zone+"&buildingId="+this.dormitoryStatistics.defaultValue.building+"&usedFor="+this.dormitoryStatistics.defaultValue.usedFor+"&toilet="+this.dormitoryStatistics.defaultValue.toilet+"&haveBalcony="+this.dormitoryStatistics.defaultValue.haveBalcony+"&maxNumber="+this.dormitoryStatistics.defaultValue.maxNumber+"&leftNumber="+this.dormitoryStatistics.defaultValue.leftNumber+"&livingStatus="+this.dormitoryStatistics.defaultValue.livingStatus)},_peopleStatisticsReset:function(){this.peopleStatistics.defaultValue.campus="",this.peopleStatistics.defaultValue.zone="",this.peopleStatistics.defaultValue.building="",this.editTime.peopleStatisticsTime=this.nowDate,this.peopleStatistics.defaultValue.userType="",this.peopleStatistics.defaultValue.educationLevel="",this.peopleStatistics.defaultValue.college="",this.peopleStatistics.options.zone.splice(0,this.peopleStatistics.options.zone.length),this.peopleStatistics.options.building.splice(0,this.peopleStatistics.options.building.length),"switchPeopleDetailedTable"===this.peopleStatisticsFlag?this.peopleStatisticsUrl="/table-data/apartment/statistic/user/getBuildingWithCondition?date="+this.nowDate:"switchStatisticsTable"===this.peopleStatisticsFlag&&(this.peopleDetailedUrl="/table-data/apartment/statistic/user/getWithCondition?date="+this.nowDate)},_peopleStatisticsSearch:function(){if(""===this.editTime.peopleStatisticsTime)this.editTime.peopleStatisticsTime=this.nowDate;else{var t=this.editTime.peopleStatisticsTime;t=t.substring(0,10),this.editTime.peopleStatisticsTime=t}"switchPeopleDetailedTable"===this.peopleStatisticsFlag?this.peopleStatisticsUrl="/table-data/apartment/statistic/user/getBuildingWithCondition?date="+this.editTime.peopleStatisticsTime+"&campusId="+this.peopleStatistics.defaultValue.campus+"&zoneId="+this.peopleStatistics.defaultValue.zone+"&buildingId="+this.peopleStatistics.defaultValue.building+"&userType="+this.peopleStatistics.defaultValue.userType+"&educationLevel="+this.peopleStatistics.defaultValue.educationLevel+"&college="+this.peopleStatistics.defaultValue.college:"switchStatisticsTable"===this.peopleStatisticsFlag&&(this.peopleDetailedUrl="/table-data/apartment/statistic/user/getWithCondition?date="+this.editTime.peopleStatisticsTime+"&campusId="+this.peopleStatistics.defaultValue.campus+"&zoneId="+this.peopleStatistics.defaultValue.zone+"&buildingId="+this.peopleStatistics.defaultValue.building+"&userType="+this.peopleStatistics.defaultValue.userType+"&educationLevel="+this.peopleStatistics.defaultValue.educationLevel+"&college="+this.peopleStatistics.defaultValue.college)},_peopleStatisticsExport:function(){if(""===this.editTime.peopleStatisticsTime)this.editTime.peopleStatisticsTime=this.nowDate;else{var t=this.editTime.peopleStatisticsTime;t=t.substring(0,10),this.editTime.peopleStatisticsTime=t}"switchPeopleDetailedTable"===this.peopleStatisticsFlag?window.location.href="/downloads/apartment/statistic/user/exportBuilding?date="+this.editTime.peopleStatisticsTime+"&campusId="+this.peopleStatistics.defaultValue.campus+"&zoneId="+this.peopleStatistics.defaultValue.zone+"&buildingId="+this.peopleStatistics.defaultValue.building+"&userType="+this.peopleStatistics.defaultValue.userType+"&educationLevel="+this.peopleStatistics.defaultValue.educationLevel+"&college="+this.peopleStatistics.defaultValue.college:"switchStatisticsTable"===this.peopleStatisticsFlag&&(window.location.href="/downloads/apartment/statistic/user/export?date="+this.editTime.peopleStatisticsTime+"&campusId="+this.peopleStatistics.defaultValue.campus+"&zoneId="+this.peopleStatistics.defaultValue.zone+"&buildingId="+this.peopleStatistics.defaultValue.building+"&userType="+this.peopleStatistics.defaultValue.userType+"&educationLevel="+this.peopleStatistics.defaultValue.educationLevel+"&college="+this.peopleStatistics.defaultValue.college)},_switchdormitoryStatisticsTable:function(){if(this.dormitoryStatisticsFlag="switchDormitoryDetailedTable",""===this.editTime.dormitoryStatisticsTime)this.editTime.dormitoryStatisticsTime=this.nowDate;else{var t=this.editTime.dormitoryStatisticsTime;t=t.substring(0,10),this.editTime.dormitoryStatisticsTime=t}this.dormitoryStatisticsUrl="/table-data/apartment/statistic/room/getBuildingWithCondition?date="+this.editTime.dormitoryStatisticsTime+"&campusId="+this.dormitoryStatistics.defaultValue.campus+"&zoneId="+this.dormitoryStatistics.defaultValue.zone+"&buildingId="+this.dormitoryStatistics.defaultValue.building+"&usedFor="+this.dormitoryStatistics.defaultValue.usedFor+"&toilet="+this.dormitoryStatistics.defaultValue.toilet+"&haveBalcony="+this.dormitoryStatistics.defaultValue.haveBalcony+"&maxNumber="+this.dormitoryStatistics.defaultValue.maxNumber+"&leftNumber="+this.dormitoryStatistics.defaultValue.leftNumber+"&livingStatus="+this.dormitoryStatistics.defaultValue.livingStatus},_switchPeopleDetailedTable:function(){if(this.peopleStatisticsFlag="switchStatisticsTable",""===this.editTime.peopleStatisticsTime)this.editTime.peopleStatisticsTime=this.nowDate;else{var t=this.editTime.peopleStatisticsTime;t=t.substring(0,10),this.editTime.peopleStatisticsTime=t}this.peopleDetailedUrl="/table-data/apartment/statistic/user/getWithCondition?date="+this.editTime.peopleStatisticsTime+"&campusId="+this.peopleStatistics.defaultValue.campus+"&zoneId="+this.peopleStatistics.defaultValue.zone+"&buildingId="+this.peopleStatistics.defaultValue.building+"&userType="+this.peopleStatistics.defaultValue.userType+"&educationLevel="+this.peopleStatistics.defaultValue.educationLevel+"&college="+this.peopleStatistics.defaultValue.college},_switchPeopleStatisticsTable:function(){if(this.peopleStatisticsFlag="switchPeopleDetailedTable",""===this.editTime.peopleStatisticsTime)this.editTime.peopleStatisticsTime=this.nowDate;else{var t=this.editTime.peopleStatisticsTime;t=t.substring(0,10),this.editTime.peopleStatisticsTime=t}this.peopleStatisticsUrl="/table-data/apartment/statistic/user/getBuildingWithCondition?date="+this.editTime.peopleStatisticsTime+"&campusId="+this.peopleStatistics.defaultValue.campus+"&zoneId="+this.peopleStatistics.defaultValue.zone+"&buildingId="+this.peopleStatistics.defaultValue.building+"&userType="+this.peopleStatistics.defaultValue.userType+"&educationLevel="+this.peopleStatistics.defaultValue.educationLevel+"&college="+this.peopleStatistics.defaultValue.college},_switchDormitoryDetailedTable:function(){if(this.dormitoryStatisticsFlag="switchStatisticsTable",""===this.editTime.dormitoryStatisticsTime)this.editTime.dormitoryStatisticsTime=this.nowDate;else{var t=this.editTime.dormitoryStatisticsTime;t=t.substring(0,10),this.editTime.dormitoryStatisticsTime=t}this.dormitoryDetailedUrl="/table-data/apartment/statistic/room/getWithCondition?date="+this.editTime.dormitoryStatisticsTime+"&campusId="+this.dormitoryStatistics.defaultValue.campus+"&zoneId="+this.dormitoryStatistics.defaultValue.zone+"&buildingId="+this.dormitoryStatistics.defaultValue.building+"&usedFor="+this.dormitoryStatistics.defaultValue.usedFor+"&toilet="+this.dormitoryStatistics.defaultValue.toilet+"&haveBalcony="+this.dormitoryStatistics.defaultValue.haveBalcony+"&maxNumber="+this.dormitoryStatistics.defaultValue.maxNumber+"&leftNumber="+this.dormitoryStatistics.defaultValue.leftNumber+"&livingStatus="+this.dormitoryStatistics.defaultValue.livingStatus},_nowDate:function(){var t=new Date,i=t.getFullYear(),e=t.getMonth()+1,s=t.getDate();e>=1&&e<=9&&(e="0"+e),s>=0&&s<=9&&(s="0"+s);var a=i+"-"+e+"-"+s;this.nowDate=a,this.editTime.dormitoryStatisticsTime=a,this.editTime.peopleStatisticsTime=a,this.dormitoryStatisticsUrl="/table-data/apartment/statistic/room/getBuildingWithCondition?date="+this.nowDate,this.dormitoryDetailedUrl="/table-data/apartment/statistic/room/getWithCondition?date="+this.nowDate,this.peopleStatisticsUrl="/table-data/apartment/statistic/user/getBuildingWithCondition?date="+this.nowDate,this.peopleDetailedUrl="/table-data/apartment/statistic/user/getWithCondition?date="+this.nowDate}}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container-fluid",attrs:{id:"statistics"}},[e("div",{staticClass:"row text-center"},[e("ul",{staticClass:"nav nav-tabs statistics-tab",attrs:{id:"myTab"}},t._l(t.tabs,function(i,s){return e("li",{key:s,class:{active:t.isSelect==i.id},on:{click:function(e){return t.changeTab(i)}}},[e("a",[t._v(t._s(t.translate.statisticsList[i.id]))])])}),0)]),t._v(" "),e("div",{staticClass:"content row"},[e("div",{directives:[{name:"show",rawName:"v-show",value:"dormitoryStatistics"===t.curRoute,expression:"curRoute === 'dormitoryStatistics'"}]},[e("br"),t._v(" "),t._l(t.dormitoryStatistics.layoutOne,function(i,s){return e("div",{key:s,staticClass:"form-group col-md-3"},[e("label",{staticClass:"input-label"},[t._v(t._s(i.title))]),t._v(" "),e("v-select",{staticClass:"btn-block form-select-style",attrs:{multiple:!0,value:t.dormitoryStatistics.defaultValue[i.id],options:t.dormitoryStatistics.options[i.id],"options-value":"value","options-label":"label",search:""},on:{afterSelected:function(e){return t._dormitoryStatisticsDormitoryOptionsSelected(e,i)}}})],1)}),t._v(" "),e("div",{staticClass:"form-group col-md-3"},[e("label",{staticClass:"input-label"},[t._v(t._s(t.translate.time)+":")]),t._v(" "),e("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{clearButton:!1,showTime:!1},on:{daySelected:function(i){return t._dateSelected(i,"dormitoryStatisticsTime")}},model:{value:t.editTime.dormitoryStatisticsTime,callback:function(i){t.$set(t.editTime,"dormitoryStatisticsTime",i)},expression:"editTime.dormitoryStatisticsTime"}})],1),t._v(" "),t._l(t.dormitoryStatistics.layoutTwo,function(i,s){return e("div",{key:s,staticClass:"form-group col-md-3"},[e("label",{staticClass:"input-label"},[t._v(t._s(i.title))]),t._v(" "),e("v-select",{staticClass:"btn-block form-select-style",attrs:{multiple:!0,value:t.dormitoryStatistics.defaultValue[i.id],options:t.dormitoryStatistics.options[i.id],"options-value":"value","options-label":"label",search:""},on:{afterSelected:function(e){return t._dormitoryStatisticsOptionsSelected(e,i)}}})],1)}),t._v(" "),t._l(t.dormitoryStatistics.layoutThree,function(i,s){return e("div",{key:s,staticClass:"form-group col-md-3"},[e("label",{staticClass:"input-label"},[t._v(t._s(i.title))]),t._v(" "),e("v-select",{staticClass:"btn-block form-select-style",attrs:{multiple:!0,value:t.dormitoryStatistics.defaultValue[i.id],options:t.dormitoryStatistics.options[i.id],"options-value":"value","options-label":"label",search:""},on:{afterSelected:function(e){return t._dormitoryStatisticsOptionsSelected(e,i)}}})],1)}),t._v(" "),e("div",{staticClass:"form-group col-md-3"},[t._v("\n         \n      ")]),t._v(" "),e("div",{staticClass:"form-group col-md-3"},[e("button",{staticClass:"btn clearBtnBorder",attrs:{type:"button"},on:{click:t._dormitoryStatisticsReset}},[t._v(t._s(t.translate.reset))]),t._v(" "),e("button",{staticClass:"btn clearBtnBorder",attrs:{type:"button"},on:{click:t._dormitoryStatisticsSearch}},[t._v(t._s(t.translate.search))]),t._v(" "),e("button",{staticClass:"btn clearBtnBorder",attrs:{type:"button"},on:{click:t._dormitoryStatisticsExport}},[t._v(t._s(t.translate.export))]),t._v(" "),"switchDormitoryDetailedTable"===t.dormitoryStatisticsFlag?e("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:t._switchDormitoryDetailedTable}},[t._v(t._s(t.translate.switchDormitoryDetailedTable))]):t._e(),t._v(" "),"switchStatisticsTable"===t.dormitoryStatisticsFlag?e("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:t._switchdormitoryStatisticsTable}},[t._v(t._s(t.translate.switchStatisticsTable))]):t._e()]),t._v(" "),"switchDormitoryDetailedTable"===t.dormitoryStatisticsFlag?e("v-table",{key:1,ref:"dormitoryStatisticsTable",attrs:{url:t.dormitoryStatisticsUrl,pagesize:"10",idField:"id",columns:t.columnsDormitoryStatisticsTable,order:!0},on:{columnExchanged:t._columnExchanged}}):t._e(),t._v(" "),"switchStatisticsTable"===t.dormitoryStatisticsFlag?e("v-table",{key:2,ref:"dormitoryStatisticsTable",attrs:{url:t.dormitoryDetailedUrl,pagesize:"10",idField:"id",columns:t.columnsDormitoryDetailedTable,order:!0},on:{columnExchanged:t._columnExchanged}}):t._e()],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"peopleStatistics"===t.curRoute,expression:"curRoute === 'peopleStatistics'"}]},[e("br"),t._v(" "),t._l(t.peopleStatistics.layoutOne,function(i,s){return e("div",{key:s,staticClass:"form-group col-md-3"},[e("label",{staticClass:"input-label"},[t._v(t._s(i.title))]),t._v(" "),e("v-select",{staticClass:"btn-block form-select-style",attrs:{multiple:!0,value:t.peopleStatistics.defaultValue[i.id],options:t.peopleStatistics.options[i.id],"options-value":"value","options-label":"label",search:""},on:{afterSelected:function(e){return t._peopleStatisticsDormitoryOptionsSelected(e,i)}}})],1)}),t._v(" "),e("div",{staticClass:"form-group col-md-3"},[e("label",{staticClass:"input-label"},[t._v(t._s(t.translate.time)+":")]),t._v(" "),e("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{clearButton:!1,showTime:!1},on:{daySelected:function(i){return t._dateSelected(i,"peopleStatisticsTime")}},model:{value:t.editTime.peopleStatisticsTime,callback:function(i){t.$set(t.editTime,"peopleStatisticsTime",i)},expression:"editTime.peopleStatisticsTime"}})],1),t._v(" "),t._l(t.peopleStatistics.layoutTwo,function(i,s){return e("div",{key:s,staticClass:"form-group col-md-3"},[e("label",{staticClass:"input-label"},[t._v(t._s(i.title))]),t._v(" "),e("v-select",{staticClass:"btn-block form-select-style",attrs:{multiple:!0,value:t.peopleStatistics.defaultValue[i.id],options:t.peopleStatistics.options[i.id],"options-value":"value","options-label":"label",search:""},on:{afterSelected:function(e){return t._peopleStatisticsOptionsSelected(e,i)}}})],1)}),t._v(" "),e("div",{staticClass:"form-group col-md-3"},[e("button",{staticClass:"btn clearBtnBorder",attrs:{type:"button"},on:{click:t._peopleStatisticsReset}},[t._v(t._s(t.translate.reset))]),t._v(" "),e("button",{staticClass:"btn clearBtnBorder",attrs:{type:"button"},on:{click:t._peopleStatisticsSearch}},[t._v(t._s(t.translate.search))]),t._v(" "),e("button",{staticClass:"btn clearBtnBorder",attrs:{type:"button"},on:{click:t._peopleStatisticsExport}},[t._v(t._s(t.translate.export))]),t._v(" "),"switchPeopleDetailedTable"===t.peopleStatisticsFlag?e("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:t._switchPeopleDetailedTable}},[t._v(t._s(t.translate.switchPeopleDetailedTable))]):t._e(),t._v(" "),"switchStatisticsTable"===t.peopleStatisticsFlag?e("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:t._switchPeopleStatisticsTable}},[t._v(t._s(t.translate.switchStatisticsTable))]):t._e()]),t._v(" "),"switchPeopleDetailedTable"===t.peopleStatisticsFlag?e("v-table",{key:3,ref:"peopleStatisticsTable",attrs:{url:t.peopleStatisticsUrl,pagesize:"10",idField:"id",columns:t.columnsPeopleStatisticsTable,order:!0},on:{columnExchanged:t._columnExchanged}}):t._e(),t._v(" "),"switchStatisticsTable"===t.peopleStatisticsFlag?e("v-table",{key:4,ref:"dormitoryStatisticsTable",attrs:{url:t.peopleDetailedUrl,pagesize:"10",idField:"id",columns:t.columnsPeopleDetailedTable,order:!0},on:{columnExchanged:t._columnExchanged}}):t._e()],2)])])},staticRenderFns:[]};var o=e("VU/8")(a,l,!1,function(t){e("bigm")},null,null);i.default=o.exports}});