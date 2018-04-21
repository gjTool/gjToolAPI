<template>
  <div id="app">
    <div class="header">
      <div class="title">
        <p>gjTool API</p>
        <a class="version" href="https://github.com/gjTool/gjTool"  target="_blank">{{version}}</a>
         <a class="gjtool" href="http://www.gjtool.cn"  target="_blank">www.gjtool.cn</a>
        <a class="qq" href="tencent://message/?uin=861366490&Site=gjToolAPI&Menu=yes"  target="_self">反馈建议</a>
      </div>
      <div class="text">gjTool 一个轻量级javascript类库</div>
      <a class="download" href="../download/gjtool.js" target="_blank">gjtool.js v1.2.1 下载</a>
      <a class="download2" href="../download/gjtool.min.js" target="_blank">gjtool.min.js v1.2.1 下载</a>
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
      version: "v1.2.1 beta"
    };
  },
  components: {Nav}
};


</script>

<style>
@import url(common/style.css);
pre {
  padding: 0.1rem 0.1rem 0rem 0.2rem ;
  background:  #f0f0f0;
  font-size: 0.14rem;
	font-family: Monaco, Consolas, "Lucida Console", monospace;
  border-left:2px solid olivedrab;
  white-space: pre-wrap;
}
.introduce-text pre {
  width: 85%;
  margin: 0 auto;
  background: #f5f5f5;
  border-left:none;
}
#app {
  width: 100%;
  height: 100%;
  _width: 12.80rem;
  min-width: 12.80rem;
}
.header {
  width: 100%;
  height: 0.94rem;
  min-height: 50px;
  text-align: center;
  background-color: #262727;
  position: relative;
}
.header .text {
  position: absolute;
  left: 0.30rem;
  top: 0.12rem;
  color: #fff;
  font-size: 0.14rem;
  font-style: oblique;
  letter-spacing: 0.015rem;
}
.header .title {
  width: 2.80rem;
  height: 100%;
  display: inline-block;
  position: relative;
}
.header .download {
  font-size: 12px;
  color: #fff;
  position: absolute;
  left:3rem;
  bottom: 4px;
  text-decoration: underline;
}
.header .download2 {
  font-size: 12px;
  color: #fff;
  position: absolute;
  left:5.2rem;
  bottom: 4px;
  text-decoration: underline;
}
.header p {
  display: inline-block;
  color: #fff;
  font-size: 0.34rem;
  font-weight: 600;
  position: relative;
  top: -50%;
}
.header .version {
  font-size: 0.12rem;
  color: #fff;
  position: absolute;
  bottom: 0.12rem;
  right: -0.38rem;
  font-style: oblique;
  text-decoration: underline;
}
.header .gjtool {
  font-size: 0.16rem;
  color: #fff;
  position: absolute;
  bottom: 0.14rem;
  right: -4.30rem;
  font-style: oblique;
  text-decoration: underline;
}
.header .qq {
  font-size: 0.14rem;
  padding: 0rem 0.05rem 0.03rem 0.25rem;
  border-radius: 0.04rem; 
  color: #000;
  position: absolute;
  bottom: 0.10rem;
  right: -2.60rem;
  background-size: 16px 16px;
}
.main {
  width: 100%;
  height: calc( 100% - 0.94rem);
  position: relative;
}

.bar-left {
  width: 1.40rem;
  min-width: 70px;
  height: 100%;
  float: left;
}
.bar-left .nav {
  width: 100%;
  height: auto;
   box-shadow: 0.08rem  0.08rem  0.08rem #888; 
  -webkit-box-shadow:  0.08rem  0.08rem  0.08rem #888; 
  -ms-box-shadow:  0.08rem  0.08rem  0.08rem #888;  
  -o-box-shadow:  0.08rem  0.08rem  0.08rem #888;  
  -moz-box-shadow:  0.08rem  0.08rem  0.08rem #888; 
}
.bar-left .nav .type {
  font-weight: 600;
  font-size: 0.18rem;
  line-height: 0.4rem;
  cursor: pointer;
  text-indent: 0.30rem;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  text-shadow: 
0.01rem 0.01rem 0 #ccc, 
0.02rem 0.02rem 0 #ccc, /* end of 2 level deep grey shadow */ 
0.03rem 0.03rem 0 #444, 
0.04rem 0.04rem 0 #444, 
0.05rem 0.05rem 0 #444, 
0.06rem 0.06rem 0 #444; /* end of 4 level deep dark shadow */ 
}
.bar-left .nav .type:hover {
  color: #3879d9;
}

.container {
  width: calc( 100% - 1.60rem);
  height: 100%;
  /*max-width: 1200rem;*/
  /*max-height: 560rem;*/
  float: left;
  margin-left: 0.20rem;
  padding-top: 0.20rem;
  padding-right: 0.20rem;
  box-sizing: border-box;
  overflow-y: auto;
}
#backTop {
  width: 0.50rem;
  height: 0.50rem;
  line-height: 0.50rem;
  font-size: 0.16rem;
  text-align: center;
  border-radius: 50%;
  background: #ccc;
  position: absolute;
  right: 0.50rem;
  bottom: 0.50rem;
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
  height: 0.70rem;
  padding-top:0.04rem; 
  padding-left:0.10rem; 
  box-sizing: border-box;
  border-bottom: 0.02rem solid #c33;
}
.sub-nav li {
  float: left;
  line-height: 150%;
  cursor: pointer;
  padding: 0.02rem 0.06rem 0.02rem 0.06rem;
  font-size: 0.16rem;
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
  height: calc(100% - 0.80rem);
  padding: 0.20rem;
  background: #fff;
  box-sizing: border-box;
}
 .introduce-text {
	width: 7.20rem;
	font-size:0.20rem;
	padding-top: 0.10rem;
	padding-bottom: 0.20rem;
  position: absolute;
  left: 50%;
  top: 10%;
  margin-left: -3.10rem;
	box-sizing: content-box;
	border:0.01rem solid #ccc ;
	box-shadow: 0.08rem 0.08rem 0.08rem #888; 
  -webkit-box-shadow: 0.08rem 0.08rem 0.08rem #888; 
  -ms-box-shadow: 0.08rem 0.08rem 0.08rem #888;  
  -o-box-shadow: 0.08rem 0.08rem 0.08rem #888;  
  -moz-box-shadow: 0.08rem 0.08rem 0.08rem #888; 
}
.introduce-text p {
	margin-top: 0.20rem;
	padding-left: 0.20rem;
	padding-right: 0.20rem;
}
 .introduce-text p:first-child {
	text-indent: 0.40rem;
	margin-top: 0.10rem;
}
.type-con .content li {
	margin-bottom: 0.20rem;
	border-bottom: 0.01rem dashed #0087ff;
}
.type-con .content li:last-child {
	border-bottom: none;
} 
.type-con .content li .title {
  font-size: 0.2rem;
}
.type-con .content li .content {
  font-size: 0.16rem;
}
</style>
