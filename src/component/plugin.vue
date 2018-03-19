<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>如何扩展插件方法？</li>
        </ol>
        <ul class="content">
            <li>
                <h3 class="title">如何扩展插件方法</h3>
                <div class="content">
                    通过extend扩展插件。gjTool.fn.protoType 或者 gjTool.protoType 上添加方法。<br /><br />
                    示例：<br />
                    <pre>
//在gjTool对象上添加方法
gjTool.protoType.alert = function(a){
    alert(a);
}

//在gjTool实例上添加方法
gjTool.fn.protoType.alert = function(){
    alert(gjTool(this).val());
}

//在gjTool对象上添加方法
gjTool.extend({
    alert: function(){
        alert(a);
    }
})

//在gjTool实例上添加方法
gjTool.fn.extend({
    alert : function(){
        alert(gjTool(this).val());
    }
})
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
