<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>文档加载完成</li>
            <li>on</li>
            <li>off</li>
            <li>hover</li>
            <li>其他事件</li>
            <li>trigger</li>
        </ol>
        <ul class="content">
            <li>
                <h3 class="title">文档加载完成</h3>
                <div class="content">
                    $(function(){})、$(document).ready(fucntion(){ });两种方式都是文档加载完成。在function内部写代码，就是代表文档加载完成后执行代码。
                    <pre>
                    gjTool(function(){
                        //some code
                    });
                    gjTool(document).ready(fucntion(){
                        //some code
                    });
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">on</h3>
                <div class="content">
                    on(eventType, selector, fn)，on事件绑定，给元素绑定事件。以及绑定自定义事件，但是需要trigger来触发。</br>
                    eventType：必需。字符串，事件名。</br>
                    selector: 可选。字符串，选择器名，代表事件监听的元素，有这个参数代表开启事件监听。</br>
                    fn: 必需。函数，在内部写代码表示事件执行要做什么，fn有可选参数，经过封装的event事件对象，兼容ie浏览器。</br>
                    示例：</br>
                    <pre>
                    gjTool("#div").on("click",function(e){
                        //some code
                    });
                    </pre>
                    
                </div>
            </li>
            <li>
                <h3 class="title">off</h3>
                <div class="content">
                    off(eventType)，off事件解绑，给元素解绑事件。</br>
                    eventType：必需。字符串，事件名。</br>
                    示例：</br>
                    gjTool("#div").off("click");
                </div>
            </li>
            <li>
                <h3 class="title">hover</h3>
                <div class="content">
                    hover(fn1, fn2)，hover鼠标划入划出事件。</br>
                    fn1：必需。函数，鼠标划入事件，mouseenter。</br>
                    fn2：可选。函数，鼠标划出事件，mouseleave。</br>
                    示例：</br>
                    gjTool("#div").hover(function(){</br>
                        &nbsp;&nbsp;&nbsp;&nbsp;//some code</br>
                    }, function(){</br>
                        &nbsp;&nbsp;&nbsp;&nbsp;//some code</br>
                    });
                </div>
            </li>
            <li>
                <h3 class="title">其他事件</h3>
                <div class="content">
                    其他事件绑定。</br>
                    如："blur focus input focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"</br>
                    示例：</br>
                    gjTool("#div").click(function(){</br>
                        &nbsp;&nbsp;&nbsp;&nbsp;//some code</br>
                    });
                </div>
            </li>
            <li>
                <h3 class="title">trigger</h3>
                <div class="content">
                    trigger触发自定义事件。</br>
                    示例：</br>
                    
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
