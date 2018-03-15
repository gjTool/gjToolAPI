<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>append</li>
            <li>prepend</li>
            <li>after</li>
            <li>before</li>
            <li>remove</li>
            <li>clone</li>
            <li>appendTo</li>
        </ol>
        <ul class="content">
            <li>
                <h3 class="title">append</h3>
                <div class="content">
                    append(str, move)，在元素内部最后插入元素，str可以是元素也可以是html字符串，还可以是gjTool实例。</br>
                    示例：gjTool("#test").append("&lt;div&gt;&lt;/div&gt;")，在test内部最后插入div元素。</br>
                    如果是页面上的元素，move为true表示移动元素，否则是克隆元素。</br>
                    示例：gjTool("#test").append(div)，在test内部最后加入div元素。
                </div>
            </li>
            <li>
                <h3 class="title">prepend</h3>
                <div class="content">
                    prepend(str, move)，在元素内部前面插入元素，str可以是元素也可以是html字符串，还可以是gjTool实例。</br>
                    示例：gjTool("#test").prepend("&lt;div&gt;&lt;/div&gt;")，在test内部前面插入div元素。</br>
                    如果是页面上的元素，move为true表示移动元素，否则是克隆元素。</br>
                    示例：gjTool("#test").prepend(div)，在test内部前面插入div元素。
                </div>
            </li>
            <li>
                <h3 class="title">after</h3>
                <div class="content">
                    after(str, move)，在元素后面插入元素，str可以是元素也可以是html字符串，还可以是gjTool实例。</br>
                    如果是页面上的元素，move为true表示移动元素，否则是克隆元素。</br>
                    示例：gjTool("#test").after("&lt;div&gt;&lt;/div&gt;")，在test后面插入div元素。</br>
                    示例：gjTool("#test").after(div)，在test后面插入div元素。
                </div>
            </li>
            <li>
                <h3 class="title">before</h3>
                <div class="content">
                    before(str, move)，在元素前面插入元素，str可以是元素也可以是html字符串，还可以是gjTool实例。</br>
                    如果是页面上的元素，move为true表示移动元素，否则是克隆元素。</br>
                    示例：gjTool("#test").before("&lt;div&gt;&lt;/div&gt;")，在test前面插入div元素。</br>
                    示例：gjTool("#test").before(div)，在test前面插入div元素。
                </div>
            </li>
            <li>
                <h3 class="title">remove</h3>
                <div class="content">
                    remove()，删除元素。</br>
                    示例：gjTool("#test").remove()，删除test。
                </div>
            </li>
            <li>
                <h3 class="title">clone</h3>
                <div class="content">
                    clone()，克隆元素。</br>
                    示例：gjTool("#test").clone()，克隆一个test元素的gjTool实例。
                </div>
            </li>
            <li>
                <h3 class="title">appendTo</h3>
                <div class="content">
                    appendTo()，将被选元素插入选择器元素的内部。</br>
                    示例：gjTool("#test").appendTo("#tset1")，将test的插入tset1内部。
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
