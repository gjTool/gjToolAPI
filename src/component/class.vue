<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>addClass</li>
            <li>removeClass</li>
            <li>hasClass</li>
            <li>toggleClass</li>
        </ol>
        <ul class="content">
            <li>
                <h3 class="title">addClass</h3>
                <div class="content">
                    addClass(className)，给元素添加class。<br /><br />
                    示例：<br />
                    <pre>
gjTool('ul li').addClass("test");//给ul下的li添加class名test。
                    </pre>
                    
                </div>
            </li>
            <li>
                <h3 class="title">removeClass</h3>
                <div class="content">
                    removeClass(className)，给元素移除class。<br /><br />
                    示例：<br />
                    <pre>
gjTool('ul li').removeClass("test");//给ul下的li删除名为test的class。
                    </pre>
                    
                </div>
            </li>
            <li>
                <h3 class="title">hasClass</h3>
                <div class="content">
                    hasClass(className)，判断元素是否含有class。<br /><br />
                    示例：<br />
                    <pre>
gjTool('ul li').hasClass("test");//判断ul下的li是否含有名为test的class。
                    </pre>
                   
                </div>
            </li>
            <li>
                <h3 class="title">toggleClass</h3>
                <div class="content">
                    toggleClass(className)，给元素添加或移除class。<br /><br />
                    示例：<br />
                    <pre>
gjTool('ul li').toggleClass("test");//给ul下的li添加或者删除名为test的class。
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
