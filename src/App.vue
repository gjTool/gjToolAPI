<template>
  <div id="app">
    <div class="header">
      <div class="title">
        <p>gjTool API</p>
        <a class="version" href="https://github.com/gjTool/gjTool"  target="_blank">{{version}}</a>
         <a class="gjtool" href="http://gjtool.cn"  target="_blank">gjtool.cn</a>
        <a class="qq" href="tencent://message/?uin=861366490&Site=gjToolAPI&Menu=yes"  target="_self">反馈建议</a>
      </div>
      <div class="text">gjTool 一个轻量级javascript类库</div>
    </div>
    <div class="main clearfix">
      <div class="bar-left">
          <Nav></Nav> 
      </div>
      <div class="container">
         <router-view></router-view> 
      </div>
      <div id="backTop" title="回到顶部">Top</div>
    </div>
  </div>
</template>

<script>
import Nav from  './component/nav.vue';
export default {
  name: "app",
  data() {
    return {
      version: "v1.0 测试版"
    };
  },
  components: {Nav}
};


</script>

<style>
@import url(common/style.css);
#app {
  width: 100%;
  height: 100%;
  _width: 1280px;
  min-width: 1280px;
}
.header {
  width: 100%;
  height: 94px;
  text-align: center;
  background-color: #262727;
}
.header .text {
  position: absolute;
  left: 30px;
  top: 12px;
  color: #fff;
  font-size: 14px;
  font-style: oblique;
  letter-spacing: 1.5px;
}
.header .title {
  width: 280px;
  height: 100%;
  display: inline-block;
  position: relative;
}
.header p {
  line-height: 250%;
  display: inline-block;
  color: #fff;
  font-size: 34px;
  font-weight: 600;
}
.header .version {
  font-size: 12px;
  color: #fff;
  position: absolute;
  bottom: 16px;
  right: -38px;
  font-style: oblique;
}
.header .gjtool {
  font-size: 16px;
  color: #fff;
  position: absolute;
  bottom: 10px;
  right: -380px;
  font-style: oblique;
}
.header .qq {
  font-size: 14px;
  padding: 0px 5px 3px 25px;
  border-radius: 4px; 
  color: #000;
  position: absolute;
  bottom: 10px;
  right: -280px;
  background-size: 20px 20px;
}
.main {
  width: 100%;
  height: calc( 100% - 94px);
  position: relative;
}

.bar-left {
  width: 140px;
  height: 100%;
  float: left;
}
.bar-left .nav {
  width: 100%;
  height: auto;
   box-shadow: 8px 8px 8px #888; 
  -webkit-box-shadow: 8px 8px 8px #888; 
  -ms-box-shadow: 8px 8px 8px #888;  
  -o-box-shadow: 8px 8px 8px #888;  
  -moz-box-shadow: 8px 8px 8px #888; 
}
.bar-left .nav .type {
  font-weight: 600;
  font-size: 18px;
  line-height: 190%;
  padding-bottom: 5px; 
  cursor: pointer;
  text-indent: 30px;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  text-shadow: 
1px 1px 0 #ccc, 
2px 2px 0 #ccc, /* end of 2 level deep grey shadow */ 
3px 3px 0 #444, 
4px 4px 0 #444, 
5px 5px 0 #444, 
6px 6px 0 #444; /* end of 4 level deep dark shadow */ 
}
.bar-left .nav .type:hover {
  color: #3879d9;
}

.container {
  width: calc( 100% - 160px);
  height: 100%;
  /*max-width: 1200px;*/
  /*max-height: 560px;*/
  float: left;
  margin-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}
#backTop {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background: #ccc;
  position: absolute;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  display: none;
}
.type-con {
  width: 100%;
  height: 100%;
}

.sub-nav  {
  width: 100%;
  height: 70px;
  padding-top:4px; 
  padding-left:10px; 
  box-sizing: border-box;
  border-bottom: 2px solid #c33;
}
.sub-nav li {
  float: left;
  line-height: 150%;
  cursor: pointer;
  padding: 2px 6px 2px 6px;
}
.sub-nav li:hover {
  color: #fff;
  background: #262727;
}

.sub-nav li:active {
  color: #3879d9;
}
.type-con .content {
  width: 100%;
  height: calc(100% - 80px);
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
}
.type-con .content .introduce-text {
	width: 720px;
	height: 200px;
	font-size:20px;
	margin: 0 auto;
	padding-top: 10px;
	box-sizing: content-box;
	border:1px solid #ccc ;
	box-shadow: 8px 8px 8px #888; 
  -webkit-box-shadow: 8px 8px 8px #888; 
  -ms-box-shadow: 8px 8px 8px #888;  
  -o-box-shadow: 8px 8px 8px #888;  
  -moz-box-shadow: 8px 8px 8px #888; 
}
.type-con .content .introduce-text p {
	margin-top: 20px;
	padding-left: 20px;
	padding-right: 20px;
}
.type-con .content .introduce-text p:first-child {
	text-indent: 40px;
	margin-top: 10px;
}
.type-con .content li {
	margin-bottom: 20px;
	border-bottom: 1px dashed #0087ff;
}
.type-con .content li:last-child {
	border-bottom: none;
} 

</style>
