<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>如何扩展插件方法？</li>
            <li>drag</li>
        </ol>
        <ul class="content">
            <li>
                <h3 class="title">如何扩展插件方法</h3>
                <div class="content">
                    extend扩展插件。gjTool.fn.protoType或者gjTool.protoType上添加方法。</br>
                    示例：</br>
                    gjTool.protoType.alert = function(a){</br>
                       &nbsp;&nbsp;&nbsp;&nbsp; alert(a);</br>
                    }</br>
                    gjTool.fn.protoType.alert = function(){</br>
                        &nbsp;&nbsp;&nbsp;&nbsp;alert(gjTool(this).val());</br>
                    }</br>
                    gjTool.extend({</br>
                       &nbsp;&nbsp;&nbsp;&nbsp; alert: function(){</br>
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; alert(a);</br>
                        }
                    })</br>
                    gjTool.fn.extend({</br>
                       &nbsp;&nbsp;&nbsp;&nbsp; alert : function(){</br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert(gjTool(this).val());</br>
                    }
                </div>
            </li>
            <li>
                <h3 class="title">drag</h3>
                <div class="content">
                    drag()，拖拽元素。nodrag(true)、nodrag()，元素关闭拖拽。nodrag(false)，元素开启拖拽。</br>
                    示例：</br>
                    gjTool("#div").drag();//开启拖拽</br>
                    gjTool("#div").nodrag();//禁止拖拽</br>
                    gjTool("#div").nodrag(false);//允许拖拽</br>
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
