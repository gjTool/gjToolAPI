<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>id选择器</li>
            <li>class选择器</li>
            <li>标签选择器</li>
            <li>通配符选择器</li>
            <li>属性选择器</li>
            <li>后代选择器</li>
            <li>群组选择器</li>
            <li>eq</li>
            <li>first</li>
            <li>last</li>
            <li>even</li>
            <li>odd</li>
            <li>lt</li>
            <li>le</li>
            <li>gt</li>
            <li>ge</li>
            <li>not</li>
            <li>html字符串</li>
        </ol>
        <ul class="content">
            <li>
	<h3 class="title">id选择器</h3>
	<div class="content">
		id选择器，获取gjTool实例。</br>
		例如：</br>
		gjTool("#test");//获取id是test的元素的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">class选择器</h3>
	<div class="content">
		class选择器，获取gjTool实例。</br>
		例如：</br>
		gjTool(".test");//获取所有className是test的元素的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">标签选择器</h3>
	<div class="content">
		标签选择器，获取gjTool实例。</br>
		例如：</br>
		gjTool("div");//获取所有tagName是div的元素的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">通配符选择器</h3>
	<div class="content">
		通配符选择器，获取gjTool实例。</br>
		例如：</br>
		gjTool("*");//获取页面所有元素的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">属性选择器</h3>
	<div class="content">
		属性选择器，获取gjTool实例。</br>
		例如：</br>
		gjTool("input[type=button]");//获取所有type属性是button的inoput元素的gjTool实例
	</div>
</li>
<li>
	<h3 class="title">后代选择器</h3>
	<div class="content">
		后代选择器，获取gjTool实例。</br>
		例如：</br>
		gjTool(".test ul li");//获取所有类名是.test下的ul下的li的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">群组选择器</h3>
	<div class="content">
		群组选择器，获取gjTool实例。</br>
		例如：</br>
		gjTool(".test ul li,#test");//获取所有类名是.test下的ul下的li,和id名是test的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">eq</h3>
	<div class="content">
		eq(),获取gjTool实例。</br>
		例如：</br>
		gjTool(".test ul li:eq(0)");//获取所有类名是.test下的ul下的第0个li的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">first</h3>
	<div class="content">
		first(),获取gjTool实例。</br>
		例如：</br>
		gjTool(".test ul li:first");//获取所有类名是.test下的ul下的第一个li的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">last</h3>
	<div class="content">
		last(),获取gjTool实例。</br>
		例如：</br>
		gjTool(".test ul li:last");//获取所有类名是.test下的ul下的最后个li的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">even</h3>
	<div class="content">
		even(),获取gjTool实例。</br>
		例如：</br>
		gjTool(".test ul li:even");//获取所有类名是.test下的ul下的li下标为偶数的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">odd</h3>
	<div class="content">
		odd(),获取gjTool实例。</br>
		例如：</br>
		gjTool(".test ul li:odd");//获取所有类名是.test下的ul下的li下标为奇数的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">lt</h3>
	<div class="content">
		lt(),获取gjTool实例。</br>
		例如：</br>
		gjTool(".test ul li:lt(2)");//获取所有类名是.test下的ul下的li下标小于2的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">le</h3>
	<div class="content">
		le(),获取gjTool实例。</br>
		例如：</br>
		gjTool(".test ul li:le(2)");//获取所有类名是.test下的ul下的li下标小于等于2的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">gt</h3>
	<div class="content">
		ft(),获取gjTool实例。</br>
		例如：</br>
		gjTool(".test ul li:gt(2)");//获取所有类名是.test下的ul下的li下标大于2的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">ge</h3>
	<div class="content">
		ge(),获取gjTool实例。</br>
		例如：</br>
		gjTool(".test ul li:ge(2)");//获取所有类名是.test下的ul下的li下标大于等于2的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">not</h3>
	<div class="content">
		not(),获取gjTool实例。</br>
		例如：</br>
		gjTool(".test ul li:not(2)");//获取所有类名是.test下的ul下的li下标不等于2的gjTool实例。</br>
		等于这样：gjTool(".test ul li:not(:eq(2))")。</br>
		例如：</br>
		gjTool(".test ul li:not(:lt(2))");//获取所有类名是.test下的ul下的li下标大于等于2的gjTool实例。
	</div>
</li>
<li>
	<h3 class="title">html字符串</h3>
	<div class="content">
		html字符串, 获取gjTool实例。</br>
		例如：</br>
		gjTool("&lt;div&gt;&lt;/div&gt;");//获取一个创建的div元素的gjTool实例。
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
