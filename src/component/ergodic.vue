<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>each</li>
			<li>map</li>
			<li>find</li>
			<li>eq</li>
			<li>index</li>
			<li>parent</li>
			<li>parents</li>
			<li>children</li>
			<li>siblings</li>
			<li>prev</li>
			<li>next</li>
			<li>first</li>
			<li>last</li>
        </ol>
        <ul class="content">
            <li>
	<h3 class="title">each</h3>
	<div class="content">
		each()，遍历gjTool实例或数组，index下标索引，item是dom元素，回调函数里面this是dom元素。<br /><br />
		示例：<br />
		<pre>
gjTool("ul li").each(function(index,item){
	console.log(index);
});
		</pre>
		
	</div>
</li>
<li>
	<h3 class="title">map</h3>
	<div class="content">
		map()，遍历gjTool实例或数组，index下标索引，item是dom元素，回调函数里面this是dom元素，return出来的循环加入新数组，循环结束后返回新数组。<br /><br />
		示例：<br />
		<pre>
gjTool("ul li").map(function(index,item){
	return index;
});
		</pre>
		
			
	</div>
</li>
<li>
	<h3 class="title">find</h3>
	<div class="content">
		find(selctor)，传入选择器字符串。查找元素。<br /><br />
		示例：<br />
		<pre>
gjTool("ul").find('li');//查找所有ul下的所有li，获取gjTool示例。
		</pre>
		
	</div>
</li>
<li>
	<h3 class="title">eq</h3>
	<div class="content">
		eq(index)，传入下标获取元素gjTool实例。<br /><br />
		示例：<br />
		<pre>
gjTool('ul li').eq(0);//获取ul下第0个li的gjTool实例。
		</pre>
		
	</div>
</li>
<li>
	<h3 class="title">index</h3>
	<div class="content">
		index()。获取元素下标索引值。<br /><br />
		示例：<br />
		<pre>
gjTool('#test').index();//返回实例元素的下标
		</pre>
		
	</div>
</li>
<li>
	<h3 class="title">parent</h3>
	<div class="content">
		parent(selctor)，传入选择器字符串。获取元素父节点的实例<br /><br />
		示例：<br />
		<pre>
gjTool('.test').parent();//返回test的父节点元素gjTool实例。
		</pre>
		示例：<br />
		<pre>
gjTool('.test').parent('.nav');//返回test的元素className是nav的父节点gjTool示例
		</pre>
	</div>
</li>
<li>
	<h3 class="title">parents</h3>
	<div class="content">
		parents(selctor)，传入选择器字符串。获取元素所有父节点的实例<br /><br />
		示例：<br />
		<pre>
gjTool('.test').parents();//返回test的所有父节点元素gjTool实例。
		</pre>
		
		示例：<br />
		<pre>
gjTool('.test').parents('.nav');//返回test的元素className是nav的所有父节点gjTool示例
		</pre>
		
	</div>
</li>
<li>
	<h3 class="title">children</h3>
	<div class="content">
		children(selctor)，传入选择器字符串。获取子节点元素实例<br /><br />
		示例：<br />
		<pre>
gjTool('.test').children();//返回test的子节点gjTool实例。
		</pre>
		示例：<br />
		<pre>
gjTool('.test').children('.nav');//返回test的元素className是nav的子节点gjTool示例
		</pre>
		
	</div>
</li>
<li>
	<h3 class="title">siblings</h3>
	<div class="content">
		siblings(selctor)，传入选择器字符串。获取兄弟节点元素实例<br /><br />
		示例：<br />
		<pre>
gjTool('.test').siblings();//返回test的兄弟节点gjTool实例。
		</pre>
		
		示例：<br />
		<pre>
gjTool('.test').siblings('.nav');//返回test的元素className是nav的兄弟节点gjTool示例
		</pre>
		
	</div>
</li>
<li>
	<h3 class="title">prev</h3>
	<div class="content">
		prev()。获取前一个节点元素实例<br /><br />
		示例：<br />
		<pre>
gjTool('.test').prev();//返回前一个节点gjTool示例
		</pre>
		
	</div>
</li>
<li>
	<h3 class="title">next</h3>
	<div class="content">
		next()。获取下一个节点元素实例<br /><br />
		示例：<br />
		<pre>
gjTool('.test').next();//返回下一个节点gjTool示例
		</pre>
		
	</div>
</li>
<li>
	<h3 class="title">first</h3>
	<div class="content">
		first()。获取实例元素数组第一个节点元素实例<br /><br />
		示例：<br />
		<pre>
gjTool('.test').first();//返回test的第一个节点gjTool示例
		</pre>
		
	</div>
</li>
<li>
	<h3 class="title">last</h3>
	<div class="content">
		last()。获取实例元素数组最后一个节点元素实例<br /><br />
		示例：<br />
		<pre>
gjTool('.test').last();//返回test的最后一个节点gjTool示例
		</pre>
		
	</div>
</li>

        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>

</style>