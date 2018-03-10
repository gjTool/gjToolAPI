<template>
  <div class="introduce-text">
        <p>gjTool.js是一个轻量级javascript类库，快捷实现各类DOM操作与CSS效果。gjTool使用方法和API与jQuery类似，相比更轻量。相当于简版jq。目前版本兼容至IE6。</p>
        <p>使用方式：引入gjTool.js之后就可以快捷使用了。</p>
        <p>例如：gjTool('#test').show(); 也可以这样：Gj('#test').show();</p>
    </div>
</template>
<script>
export default {
  
}
</script>
<style>
 .introduce-text {
	width: 720px;
	height: 200px;
	font-size:20px;
	margin: 100px auto;
	padding-top: 10px;
	box-sizing: content-box;
	border:1px solid #ccc ;
	box-shadow: 8px 8px 8px #888; 
  -webkit-box-shadow: 8px 8px 8px #888; 
  -ms-box-shadow: 8px 8px 8px #888;  
  -o-box-shadow: 8px 8px 8px #888;  
  -moz-box-shadow: 8px 8px 8px #888; 
}
 .introduce-text p {
	margin-top: 20px;
	padding-left: 20px;
	padding-right: 20px;
}
 .introduce-text p:first-child {
	text-indent: 40px;
	margin-top: 10px;
}
</style>


